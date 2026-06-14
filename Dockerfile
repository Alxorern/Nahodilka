# --- Этап 1: Сборка фронтенда ---
FROM node:20-alpine AS frontend-builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN rm -rf server
RUN npm run build

# --- Этап 2: Запуск бэкенда и раздача статики ---
FROM node:20-alpine
WORKDIR /app

# Устанавливаем зависимости для бэкенда
COPY server/package*.json ./server/
RUN cd server && npm ci

# Копируем код сервера и собранный фронтенд
COPY server/ ./server/
COPY --from=frontend-builder /app/build ./server/public

EXPOSE 3001
WORKDIR /app/server
CMD ["node", "index.js"]