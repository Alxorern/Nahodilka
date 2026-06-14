import React from 'react';

const HeaderBanner = ({ username, isRegistered, onAuthClick, score }) => {
  return (
    <div className="flex items-center gap-2 m-4">
      <div 
        className="flex-grow p-4 font-['Neucha'] relative"
        style={{
          backgroundColor: '#fefce8',
          borderWidth: '3px 4px 3px 5px',
          borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
          borderStyle: 'solid',
          borderColor: '#f59e0b',
        }}
      >
        <div className="flex justify-between items-center pr-2">
          <div className="text-lg text-amber-900">
            <p className="font-bold">Привет, {username}!</p>
            {!isRegistered && (
              <p className="text-sm mt-1">
                Твои находки пока живут только в этом телефоне. 
                Придумай пароль, чтобы не потерять их!
              </p>
            )}
          </div>
          <button 
            onClick={onAuthClick}
            className="text-2xl hover:scale-110 transition-transform p-2"
            aria-label="Авторизация"
          >
            🔑
          </button>
        </div>
      </div>

      {/* Крупная звездочка рядом с плашкой */}
      <div className="flex-shrink-0 transform rotate-12 -mt-2">
        <div className="relative flex items-center justify-center w-20 h-20">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full fill-amber-400 stroke-amber-600 stroke-[3px]">
            <path d="M50 5 L61 35 L95 35 L68 57 L79 91 L50 70 L21 91 L32 57 L5 35 L39 35 Z" />
          </svg>
          <span className="relative z-10 text-3xl font-bold text-amber-950 mt-1">{score || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
