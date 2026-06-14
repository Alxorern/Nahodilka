const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const path = require('path');
const { validateDisplayName } = require('./profanityFilter');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Database initialization
const dbPath = path.join(__dirname, 'database.sqlite');
const db = new Database(dbPath);

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT,
    is_registered BOOLEAN DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS progress (
    user_id TEXT PRIMARY KEY,
    found_items TEXT,
    total_score INTEGER DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`);

console.log('Database initialized and tables created.');

// Basic route
app.get('/', (req, res) => {
  res.send('Nahodilka Backend is running.');
});

// API Endpoints
app.post('/api/guest', (req, res) => {
  const { username } = req.body;
  const id = Date.now().toString() + '-' + Math.random().toString(36).substr(2, 9);
  
  try {
    const stmt = db.prepare('INSERT INTO users (id, username, is_registered) VALUES (?, ?, 0)');
    stmt.run(id, username);
    res.json({ id });
  } catch (error) {
    console.error('Error creating guest user:', error);
    res.status(500).json({ error: 'Failed to create guest user' });
  }
});

app.post('/api/progress', (req, res) => {
  const { userId, foundItems } = req.body;
  const foundItemsStr = JSON.stringify(foundItems);
  const totalScore = foundItems.length;

  try {
    const stmt = db.prepare(`
      INSERT INTO progress (user_id, found_items, total_score)
      VALUES (?, ?, ?)
      ON CONFLICT(user_id) DO UPDATE SET
        found_items = excluded.found_items,
        total_score = excluded.total_score
    `);
    stmt.run(userId, foundItemsStr, totalScore);
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving progress:', error);
    res.status(500).json({ error: 'Failed to save progress' });
  }
});

app.get('/api/progress/:userId', (req, res) => {
  const { userId } = req.params;
  
  try {
    const row = db.prepare('SELECT found_items FROM progress WHERE user_id = ?').get(userId);
    if (row) {
      res.json({ foundItems: JSON.parse(row.found_items) });
    } else {
      res.json({ foundItems: [] });
    }
  } catch (error) {
    console.error('Error fetching progress:', error);
    res.status(500).json({ error: 'Failed to fetch progress' });
  }
});

app.post('/api/register', (req, res) => {
  const { userId, password, username: newUsernameRaw } = req.body;
  try {
    const row = db.prepare('SELECT username FROM users WHERE id = ?').get(userId);
    if (!row) {
      return res.status(404).json({ error: 'Пользователь не найден' });
    }
    if (typeof password !== 'string' || password.length < 4) {
      return res.status(400).json({ error: 'Пароль не короче 4 символов' });
    }

    const nameToUse =
      typeof newUsernameRaw === 'string' && newUsernameRaw.trim() !== ''
        ? newUsernameRaw.trim()
        : row.username;

    const validation = validateDisplayName(nameToUse);
    if (!validation.ok) {
      return res.status(400).json({ error: validation.error });
    }

    const taken = db
      .prepare('SELECT id FROM users WHERE username = ? AND id != ?')
      .get(validation.trimmed, userId);
    if (taken) {
      return res.status(409).json({ error: 'Это имя уже занято — выбери другое' });
    }

    const stmt = db.prepare(
      'UPDATE users SET password = ?, username = ?, is_registered = 1 WHERE id = ?'
    );
    const result = stmt.run(password, validation.trimmed, userId);
    if (result.changes > 0) {
      res.json({ success: true, username: validation.trimmed });
    } else {
      res.status(404).json({ error: 'Пользователь не найден' });
    }
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  try {
    const user = db.prepare('SELECT id, username, is_registered FROM users WHERE username = ? AND password = ?').get(username, password);
    if (user) {
      res.json({ userId: user.id, username: user.username, isRegistered: !!user.is_registered });
    } else {
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Failed to login' });
  }
});

app.get('/api/leaderboard', (req, res) => {
  try {
    const leaderboard = db.prepare(`
      SELECT u.username, p.total_score 
      FROM users u 
      JOIN progress p ON u.id = p.user_id 
      ORDER BY p.total_score DESC 
      LIMIT 50
    `).all();
    res.json(leaderboard);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT} (0.0.0.0)`);
});
