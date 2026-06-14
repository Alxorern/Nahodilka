import React from 'react';

export default function ChalkBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

      {/* Кот — левый верхний угол (розовый) */}
      <svg viewBox="0 0 100 100" strokeLinecap="round" strokeLinejoin="round"
        className="absolute top-6 -left-14 w-96 h-96 transform -rotate-12" opacity={0.62}>
        <path d="M 35 85 C 35 60 65 60 65 85 Z" fill="#ff8fab"/>
        <circle cx="50" cy="65" r="10" fill="#ff8fab"/>
        <polygon points="42,58 45,50 48,56" fill="#ff8fab"/>
        <polygon points="58,58 55,50 52,56" fill="#ff8fab"/>
        <path d="M 60 80 Q 75 80 70 65" stroke="#ff8fab" strokeWidth="5" fill="none" strokeLinecap="round"/>
      </svg>

      {/* Желудь — правый, середина (оранжевый) */}
      <svg viewBox="0 0 100 100" strokeLinecap="round"
        className="absolute top-1/4 -right-20 w-80 h-80 transform rotate-12" opacity={0.58}>
        <path d="M 35 55 C 35 80 65 80 65 55 Z" fill="#ffb347"/>
        <path d="M 28 55 C 28 35 72 35 72 55 Z" fill="#ffb347"/>
        <path d="M 35 45 C 45 55 55 55 65 45" stroke="#f08020" strokeWidth="4" fill="none"/>
        <path d="M 40 40 C 45 50 55 50 60 40" stroke="#f08020" strokeWidth="3" fill="none"/>
        <path d="M 50 42 C 50 30 55 25 60 25" stroke="#ffb347" strokeWidth="5" fill="none" strokeLinecap="round"/>
      </svg>

      {/* Голубь — левый нижний угол (голубой) */}
      <svg viewBox="0 0 100 100" strokeLinecap="round" strokeLinejoin="round"
        className="absolute bottom-16 -left-20 w-[26rem] h-[26rem] transform rotate-6" opacity={0.6}>
        <path d="M 30 65 C 10 50 20 30 40 30 C 50 30 70 40 85 30 L 80 45 C 80 60 60 80 40 80 L 20 90 L 30 65 Z" fill="#87ceeb"/>
        <path d="M 40 50 C 30 60 20 50 15 45 C 30 40 40 45 40 50 Z" fill="#6ab8e0"/>
        <circle cx="65" cy="42" r="2.5" fill="#3a87b0"/>
      </svg>

      {/* Изъеденный листик — правый нижний (зелёный) */}
      <svg viewBox="0 0 100 100" strokeLinecap="round"
        className="absolute bottom-8 -right-12 w-96 h-96 transform -rotate-12" opacity={0.58}>
        <path d="M 50 90 C 40 90 20 70 20 50 C 20 40 25 35 30 40 C 35 45 40 30 50 20 C 60 30 65 45 70 40 C 75 35 80 40 80 50 C 80 70 60 90 50 90 Z" fill="#7bc67e"/>
        <path d="M 50 90 C 50 60 55 40 50 20" stroke="#4fa855" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        {/* Дырочки от гусениц — цвет асфальта, имитация просветов */}
        <circle cx="35" cy="50" r="5" fill="#b4b0a6"/>
        <circle cx="45" cy="35" r="3" fill="#b4b0a6"/>
      </svg>

      {/* Солнышко — правый верхний угол (жёлтое, кривоватое) */}
      <svg viewBox="0 0 120 120" className="absolute top-2 right-2 w-80 h-80 transform rotate-5" opacity={0.68}>
        {/* Кривые лучи — треугольники разного размера, неравномерно расставлены */}
        <path d="M 53 22 L 57 5 L 65 20 Z" fill="#ffe44d"/>
        <path d="M 74 27 L 91 12 L 90 30 Z" fill="#ffe44d"/>
        <path d="M 91 46 L 112 40 L 100 58 Z" fill="#ffe44d"/>
        <path d="M 93 68 L 113 70 L 97 82 Z" fill="#ffe44d"/>
        <path d="M 76 86 L 88 104 L 70 100 Z" fill="#ffe44d"/>
        <path d="M 52 91 L 57 110 L 44 103 Z" fill="#ffe44d"/>
        <path d="M 30 82 L 14 95 L 13 78 Z" fill="#ffe44d"/>
        <path d="M 17 60 L 0 58 L 14 46 Z" fill="#ffe44d"/>
        <path d="M 20 36 L 5 24 L 24 19 Z" fill="#ffe44d"/>
        <path d="M 38 20 L 33 3 L 48 13 Z" fill="#ffe44d"/>
        {/* Тело — кривоватый "нарисованный от руки" круг, не идеальная окружность */}
        <path d="M 60 26 C 74 21 92 31 95 46 C 98 61 90 80 75 86 C 60 92 42 86 34 72 C 26 58 30 37 43 30 C 49 27 55 31 60 26 Z" fill="#ffe44d"/>
        {/* Лицо */}
        <circle cx="51" cy="52" r="4" fill="#cc8800"/>
        <circle cx="68" cy="52" r="4" fill="#cc8800"/>
        <path d="M 47 64 Q 60 76 73 64" stroke="#cc8800" strokeWidth="4" fill="none" strokeLinecap="round"/>
      </svg>

    </div>
  );
}
