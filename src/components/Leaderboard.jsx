import React, { useState, useEffect } from 'react';
import { fetchJson } from '../utils/apiFetch';

const LeaderboardModal = ({ isOpen, onClose, leaderboard, currentUsername }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm font-['Neucha']">
      <div 
        className="relative w-full max-w-md p-8 bg-[#fefce8] shadow-2xl overflow-y-auto max-h-[80vh]"
        style={{
          borderWidth: '4px',
          borderColor: '#475569',
          borderStyle: 'solid',
          borderRadius: '15px 225px 15px 255px/255px 15px 225px 15px',
        }}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-6 text-3xl text-slate-600 hover:text-slate-900"
        >
          ×
        </button>
        
        <h2 className="text-3xl font-bold text-center mb-6 text-slate-800 underline decoration-wavy decoration-amber-500">
          Доска Почета
        </h2>

        <div className="space-y-2">
          {leaderboard.map((player, index) => (
            <div 
              key={index}
              className={`flex justify-between items-center p-3 rounded-lg border-b border-dashed border-slate-300 ${
                player.username === currentUsername ? 'bg-green-100 font-bold border-2 border-green-400' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl w-8 text-slate-500">{index + 1}.</span>
                <span className="text-xl text-slate-800">{player.username}</span>
              </div>
              <span className="text-xl font-bold text-amber-600">{player.total_score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LeaderboardMini = ({ currentUsername, foundItemsCount }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await fetchJson('/api/leaderboard');
        setLeaderboard(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Failed to fetch leaderboard:', err);
      }
    };
    fetchLeaderboard();
    // Refresh every 30 seconds
    const interval = setInterval(fetchLeaderboard, 30000);
    return () => clearInterval(interval);
  }, [foundItemsCount, currentUsername]);

  const top3 = leaderboard.slice(0, 3);
  const medals = ['🏆', '🥈', '🥉'];

  return (
    <div className="mx-4 mb-8 relative">
      {/* "Скотч" сверху */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm rotate-2 z-10 border border-white/20 shadow-sm"></div>
      
      <div 
        className="p-4 bg-[#fefce8] shadow-lg rotate-[-1deg]"
        style={{
          borderWidth: '2px',
          borderColor: '#94a3b8',
          borderStyle: 'solid',
          borderRadius: '5px 5px 5px 5px',
        }}
      >
        <h3 className="text-xl font-bold text-slate-700 mb-3 text-center font-['Neucha']">Топ искателей:</h3>
        <div className="space-y-2 font-['Neucha']">
          {top3.map((player, i) => (
            <div key={i} className="flex justify-between items-center text-lg">
              <span>{medals[i]} {i + 1}. {player.username}</span>
              <span className="font-bold text-amber-600">{player.total_score}</span>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full mt-4 py-1 text-slate-500 hover:text-slate-800 underline decoration-dotted font-['Neucha']"
        >
          Посмотреть всех
        </button>
      </div>

      <LeaderboardModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        leaderboard={leaderboard}
        currentUsername={currentUsername}
      />
    </div>
  );
};

export default LeaderboardMini;
