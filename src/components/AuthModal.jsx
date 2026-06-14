import React, { useState, useEffect } from 'react';
import { parseJsonResponse } from '../utils/apiFetch';
import { validateDisplayName } from '../utils/profanityFilter';

const AuthModal = ({ isOpen, onClose, currentUser, onAuthSuccess }) => {
  const [activeTab, setActiveTab] = useState(currentUser?.isRegistered ? 'login' : 'register');
  const [registerUsername, setRegisterUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen && currentUser?.username) {
      setRegisterUsername(currentUser.username);
      setPassword('');
      setError('');
    }
  }, [isOpen, currentUser?.username]);

  if (!isOpen) return null;

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    const nameCheck = validateDisplayName(registerUsername);
    if (!nameCheck.ok) {
      setError(nameCheck.error);
      return;
    }
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: currentUser.userId,
          password,
          username: nameCheck.trimmed,
        }),
      });
      const data = await parseJsonResponse(response);
      if (response.ok) {
        onAuthSuccess({
          ...currentUser,
          isRegistered: true,
          username: data.username ?? nameCheck.trimmed,
        });
        onClose();
      } else {
        setError(data?.error || 'Ошибка при сохранении');
      }
    } catch (err) {
      setError(err.message || 'Ошибка сервера');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: loginUsername, password: loginPassword }),
      });
      const data = await parseJsonResponse(response);
      if (response.ok) {
        onAuthSuccess(data);
        onClose();
      } else {
        setError(data?.error || 'Неверное имя или пароль');
      }
    } catch (err) {
      setError(err.message || 'Ошибка сервера');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm font-['Neucha']">
      <div 
        className="relative w-full max-w-md p-8 bg-[#fefce8] shadow-2xl"
        style={{
          borderWidth: '4px',
          borderColor: '#475569',
          borderStyle: 'solid',
          borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
        }}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-6 text-3xl text-slate-600 hover:text-slate-900"
        >
          ×
        </button>

        <div className="flex gap-4 mb-6 border-b-2 border-dashed border-slate-300 pb-2">
          <button 
            className={`text-xl pb-1 ${activeTab === 'register' ? 'border-b-4 border-amber-500 font-bold' : 'opacity-60'}`}
            onClick={() => setActiveTab('register')}
          >
            Сохранить
          </button>
          <button 
            className={`text-xl pb-1 ${activeTab === 'login' ? 'border-b-4 border-amber-500 font-bold' : 'opacity-60'}`}
            onClick={() => setActiveTab('login')}
          >
            Я уже играл
          </button>
        </div>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        {activeTab === 'register' ? (
          <form onSubmit={handleRegister} className="space-y-4">
            <p className="text-sm text-slate-600 leading-snug">
              Придумай пароль, чтобы не потерять прогресс на другом телефоне или компьютере.
              {' '}
              <span className="font-semibold text-amber-900">
                Имя можно поменять
              </span>
              {' '}
              — так тебя увидят в доске почёта.
            </p>
            <div>
              <label className="block text-slate-700 text-lg mb-1">Как тебя звать</label>
              <input
                type="text"
                autoComplete="nickname"
                placeholder="Например: Космический Нарвал"
                value={registerUsername}
                onChange={(e) => setRegisterUsername(e.target.value)}
                className="w-full p-3 bg-white/50 border-2 border-slate-300 rounded-lg focus:border-amber-500 outline-none text-xl"
                required
              />
            </div>
            <div>
              <label className="block text-slate-700 text-lg mb-1">Пароль</label>
              <input 
                type="password"
                autoComplete="new-password"
                placeholder="Не короче 4 символов"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-white/50 border-2 border-slate-300 rounded-lg focus:border-amber-500 outline-none text-xl"
                required
                minLength={4}
              />
            </div>
            <button 
              type="submit"
              className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold text-xl rounded-xl transition-colors shadow-md active:scale-95"
            >
              Сохранить прогресс
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="text"
              placeholder="Имя"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
              className="w-full p-3 bg-white/50 border-2 border-slate-300 rounded-lg focus:border-amber-500 outline-none text-xl"
              required
            />
            <input 
              type="password"
              placeholder="Пароль"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="w-full p-3 bg-white/50 border-2 border-slate-300 rounded-lg focus:border-amber-500 outline-none text-xl"
              required
            />
            <button 
              type="submit"
              className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold text-xl rounded-xl transition-colors shadow-md active:scale-95"
            >
              Войти
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
