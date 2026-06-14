import React from 'react';

const bookData = [
  {
    id: 'ch1',
    title: 'Центр города',
    emoji: '🏙️',
    superTasks: [
      { id: 'ch1-st1', type: '🔊 Звук', text: 'Бой часов или колокольный звон.' },
      { id: 'ch1-st2', type: '👃 Запах', text: 'Аромат свежемолотого кофе или выпечки из пекарни.' },
      { id: 'ch1-st3', type: '🖐️ Текстура', text: 'Проведи рукой по шершавому граниту и по гладкому стеклу витрины.' }
    ],
    sections: [
        {
          id: 'ch1-arch',
          title: '🏛 Архитектурные элементы',
          subtitle: 'Смотри вверх!',
          theme: 'blue',
          items: [
            {
              id: 'maskaron',
              title: 'Маскарон',
              desc: 'лицо человека или голова животного на фасаде',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Каменная стена (фон) */}
                  <path d="M 10 20 L 90 20 M 10 80 L 90 80 M 10 50 L 25 50 M 75 50 L 90 50 M 30 20 L 30 80 M 70 20 L 70 80" stroke="#cbd5e1" strokeWidth="2" opacity="0.5" />
                  
                  {/* Голова льва (каменный рельеф) */}
                  <circle cx="50" cy="50" r="30" fill="#e2e8f0" stroke="#64748b" strokeWidth="3" />
                  
                  {/* Грива льва (завитки) */}
                  <path d="M 20 50 C 15 40 30 25 40 30 C 45 20 55 20 60 30 C 70 25 85 40 80 50 C 85 60 70 75 60 70 C 55 80 45 80 40 70 C 30 75 15 60 20 50 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
                  <path d="M 30 35 C 25 45 35 55 30 65 M 70 35 C 75 45 65 55 70 65" fill="none" stroke="#64748b" strokeWidth="2" />
                  
                  {/* Лицо льва */}
                  <path d="M 40 45 C 45 40 55 40 60 45" fill="none" stroke="#334155" strokeWidth="3" /> {/* Брови */}
                  <path d="M 42 50 L 50 65 L 58 50 Z" fill="#94a3b8" stroke="#334155" strokeWidth="2" strokeLinejoin="round" /> {/* Нос */}
                  <circle cx="43" cy="48" r="2" fill="#1e293b" stroke="none" /> {/* Глаз левый */}
                  <circle cx="57" cy="48" r="2" fill="#1e293b" stroke="none" /> {/* Глаз правый */}
                  
                  {/* Пасть и щеки */}
                  <path d="M 40 65 C 45 70 55 70 60 65" fill="none" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 45 68 C 50 75 55 70 55 68" fill="none" stroke="#334155" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'erker',
              title: 'Эркер',
              desc: 'выступающая из стены застекленная часть дома',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Основная стена здания */}
                  <rect x="15" y="10" width="70" height="90" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" />
                  <line x1="15" y1="50" x2="85" y2="50" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 4" />
                  
                  {/* Крыша эркера (медная, зеленоватая) */}
                  <polygon points="25,35 50,20 75,35" fill="#a7f3d0" stroke="#059669" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="50" y1="20" x2="50" y2="35" stroke="#059669" strokeWidth="2" />
                  
                  {/* Сам выступ эркера (3 грани) */}
                  <polygon points="25,35 75,35 65,85 35,85" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="45" y1="35" x2="45" y2="85" stroke="#64748b" strokeWidth="3" />
                  <line x1="55" y1="35" x2="55" y2="85" stroke="#64748b" strokeWidth="3" />
                  
                  {/* Окна в гранях эркера */}
                  <rect x="30" y="45" width="10" height="25" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" transform="skewY(10) translate(0, -6)" />
                  <rect x="47" y="45" width="6" height="25" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
                  <rect x="60" y="45" width="10" height="25" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" transform="skewY(-10) translate(0, 5)" />
                  
                  {/* Декоративный низ эркера */}
                  <polygon points="35,85 65,85 50,95" fill="#e2e8f0" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                </svg>
              )
            },
            {
              id: 'attik',
              title: 'Аттик',
              desc: 'декоративная стенка над карнизом (часто с датой)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Крыша и карниз */}
                  <path d="M 10 85 L 90 85 L 85 75 L 15 75 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="15" y1="80" x2="85" y2="80" stroke="#64748b" strokeWidth="2" />
                  
                  {/* Стенка аттика */}
                  <path d="M 25 75 L 25 45 C 25 35 35 30 50 25 C 65 30 75 35 75 45 L 75 75 Z" fill="#f8fafc" stroke="#475569" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Декоративные элементы */}
                  <circle cx="50" cy="45" r="15" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="3" />
                  <path d="M 30 65 L 40 65 M 60 65 L 70 65" stroke="#94a3b8" strokeWidth="3" />
                  <path d="M 35 55 L 40 55 M 60 55 L 65 55" stroke="#94a3b8" strokeWidth="3" />
                  
                  {/* Дата постройки (например, 1899) */}
                  <text x="50" y="49" fontSize="10" fill="#1e293b" stroke="none" fontFamily="serif" fontWeight="bold" textAnchor="middle">1899</text>
                  
                  {/* Вазы по краям карниза */}
                  <path d="M 15 75 L 12 65 L 18 65 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 85 75 L 82 65 L 88 65 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              )
            },
            {
              id: 'shpil',
              title: 'Шпиль',
              desc: 'остроконечное завершение башни или крыши',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Башня (основание) */}
                  <rect x="35" y="75" width="30" height="25" fill="#fcd34d" stroke="#b45309" strokeWidth="3" />
                  <rect x="42" y="80" width="16" height="20" fill="#fff" stroke="#b45309" strokeWidth="2" />
                  <line x1="50" y1="80" x2="50" y2="100" stroke="#b45309" strokeWidth="2" />
                  
                  {/* Купол/Шатёр башни (медный, зеленый) */}
                  <path d="M 30 75 L 50 40 L 70 75 Z" fill="#34d399" stroke="#059669" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 40 75 L 50 40 L 60 75" fill="none" stroke="#059669" strokeWidth="2" />
                  
                  {/* Остроконечный шпиль (Золотой) */}
                  <path d="M 48 40 L 50 10 L 52 40 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Звезда или шарик на самом верху */}
                  <circle cx="50" cy="8" r="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                  <line x1="50" y1="2" x2="50" y2="5" stroke="#ca8a04" strokeWidth="2" />
                  <line x1="44" y1="8" x2="47" y2="8" stroke="#ca8a04" strokeWidth="2" />
                  <line x1="53" y1="8" x2="56" y2="8" stroke="#ca8a04" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'balkon',
              title: 'Балкон',
              desc: 'найди балкон с коваными металлическими цветами',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Дверь на балкон (на заднем плане) */}
                  <path d="M 35 80 L 35 25 C 35 15 65 15 65 25 L 65 80" fill="#e0f2fe" stroke="#94a3b8" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="50" y1="20" x2="50" y2="80" stroke="#94a3b8" strokeWidth="3" />
                  
                  {/* Плита балкона */}
                  <path d="M 20 80 L 80 80 L 75 90 L 25 90 Z" fill="#e2e8f0" stroke="#475569" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Кованая решетка (черный металл) */}
                  <line x1="20" y1="80" x2="20" y2="55" stroke="#1f2937" strokeWidth="4" />
                  <line x1="80" y1="80" x2="80" y2="55" stroke="#1f2937" strokeWidth="4" />
                  <line x1="15" y1="55" x2="85" y2="55" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Кованые завитки и железные цветы */}
                  <path d="M 25 80 C 25 60 40 70 35 55" fill="none" stroke="#1f2937" strokeWidth="2" />
                  <path d="M 40 80 C 40 60 25 70 30 55" fill="none" stroke="#1f2937" strokeWidth="2" />
                  <path d="M 60 80 C 60 60 75 70 70 55" fill="none" stroke="#1f2937" strokeWidth="2" />
                  <path d="M 75 80 C 75 60 60 70 65 55" fill="none" stroke="#1f2937" strokeWidth="2" />
                  
                  <path d="M 50 80 L 50 65" stroke="#1f2937" strokeWidth="2" />
                  {/* Металлический цветок в центре */}
                  <circle cx="50" cy="65" r="3" fill="#1f2937" stroke="none" />
                  <circle cx="46" cy="62" r="2" fill="#1f2937" stroke="none" />
                  <circle cx="54" cy="62" r="2" fill="#1f2937" stroke="none" />
                  <circle cx="46" cy="68" r="2" fill="#1f2937" stroke="none" />
                  <circle cx="54" cy="68" r="2" fill="#1f2937" stroke="none" />
                </svg>
              )
            },
            {
              id: 'vitrazh',
              title: 'Витраж',
              desc: 'разноцветное стекло в окне или над дверью',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Каменная рама окна (Готика) */}
                  <path d="M 20 60 C 20 20 80 20 80 60 L 80 90 L 20 90 Z" fill="#1f2937" stroke="#475569" strokeWidth="4" strokeLinejoin="round" />
                  
                  {/* Цветные стекла (с эффектом свечения) */}
                  <path d="M 22 60 C 22 35 48 25 50 25 C 52 25 78 35 78 60 Z" fill="#facc15" stroke="#000" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 2px #facc15)' }} />
                  
                  <polygon points="50,25 35,45 50,55" fill="#f87171" stroke="#000" strokeWidth="2" />
                  <polygon points="50,25 65,45 50,55" fill="#60a5fa" stroke="#000" strokeWidth="2" />
                  
                  <polygon points="22,60 35,45 50,55 35,70" fill="#34d399" stroke="#000" strokeWidth="2" />
                  <polygon points="78,60 65,45 50,55 65,70" fill="#a78bfa" stroke="#000" strokeWidth="2" />
                  
                  <polygon points="22,60 35,70 50,90 22,90" fill="#f472b6" stroke="#000" strokeWidth="2" />
                  <polygon points="78,60 65,70 50,90 78,90" fill="#fb923c" stroke="#000" strokeWidth="2" />
                  <polygon points="35,70 50,55 65,70 50,90" fill="#38bdf8" stroke="#000" strokeWidth="2" />
                  
                  {/* Свинцовый переплет витража */}
                  <path d="M 50 25 L 50 90" stroke="#111827" strokeWidth="3" />
                  <path d="M 22 60 L 78 60" stroke="#111827" strokeWidth="3" />
                  <path d="M 35 45 L 65 70 M 65 45 L 35 70" stroke="#111827" strokeWidth="3" />
                </svg>
              )
            },
            {
              id: 'fluger',
              title: 'Флюгер',
              desc: 'фигурка на крыше, указывающая направление ветра',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Шпиль крыши */}
                  <path d="M 45 100 L 50 70 L 55 100 Z" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
                  
                  {/* Металлический стержень флюгера */}
                  <line x1="50" y1="70" x2="50" y2="15" stroke="#1f2937" strokeWidth="4" />
                  
                  {/* Указатели сторон света (N, S, E, W - крестовина) */}
                  <line x1="30" y1="60" x2="70" y2="60" stroke="#1f2937" strokeWidth="3" />
                  <line x1="40" y1="65" x2="60" y2="55" stroke="#1f2937" strokeWidth="2" />
                  <text x="20" y="64" fontSize="8" fill="#1f2937" stroke="none" fontFamily="sans-serif" fontWeight="bold">W</text>
                  <text x="75" y="64" fontSize="8" fill="#1f2937" stroke="none" fontFamily="sans-serif" fontWeight="bold">E</text>
                  
                  {/* Стрелка флюгера */}
                  <line x1="25" y1="40" x2="75" y2="40" stroke="#1f2937" strokeWidth="3" />
                  <polygon points="75,40 65,35 65,45" fill="#1f2937" stroke="#1f2937" strokeWidth="2" strokeLinejoin="round" />
                  <polygon points="25,40 30,35 35,40 30,45" fill="#1f2937" stroke="#1f2937" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Фигурка петушка (классика) */}
                  <path d="M 45 40 L 45 25 C 45 20 55 20 55 25 C 60 25 65 30 65 35 L 55 40 Z" fill="#facc15" stroke="#b45309" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 50 20 C 55 15 50 10 45 15" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" /> {/* Гребешок */}
                  <path d="M 60 27 L 65 25 L 62 30" fill="#ea580c" stroke="none" /> {/* Клюв */}
                  <circle cx="55" cy="25" r="1" fill="#1f2937" stroke="none" /> {/* Глаз */}
                  <path d="M 45 30 C 40 25 35 30 40 35 C 35 40 40 45 45 40" fill="none" stroke="#b45309" strokeWidth="2" strokeLinecap="round" /> {/* Хвост */}
                </svg>
              )
            },
            {
              id: 'kolonna',
              title: 'Колонна',
              desc: 'с «капителью» в виде завитков и листьев',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Основание колонны */}
                  <rect x="30" y="85" width="40" height="15" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
                  <rect x="35" y="75" width="30" height="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Ствол колонны (с каннелюрами/бороздками) */}
                  <rect x="38" y="35" width="24" height="40" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="42" y1="35" x2="42" y2="75" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="46" y1="35" x2="46" y2="75" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="50" y1="35" x2="50" y2="75" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="54" y1="35" x2="54" y2="75" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="58" y1="35" x2="58" y2="75" stroke="#cbd5e1" strokeWidth="2" />
                  
                  {/* Капитель (верхняя узорчатая часть) - Ионический ордер */}
                  <path d="M 35 35 L 65 35 L 65 25 L 35 25 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Завитки (волюты) */}
                  <path d="M 35 25 C 20 25 20 40 30 40 C 35 40 35 30 30 30" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 65 25 C 80 25 80 40 70 40 C 65 40 65 30 70 30" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Листья (акант) */}
                  <path d="M 40 35 Q 45 25 50 35 Q 55 25 60 35" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Верхняя балка (архитрав) */}
                  <rect x="25" y="10" width="50" height="15" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="3" />
                  <line x1="25" y1="15" x2="75" y2="15" stroke="#94a3b8" strokeWidth="1" />
                </svg>
              )
            },
            {
              id: 'lepnina',
              title: 'Лепнина',
              desc: 'каменные гирлянды из яблок, винограда и колосьев',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Каменная стена фона */}
                  <path d="M 10 30 L 90 30 M 10 70 L 90 70" stroke="#f1f5f9" strokeWidth="4" />
                  
                  {/* Базовый шнур/лента гирлянды */}
                  <path d="M 15 35 C 40 65 60 65 85 35" fill="none" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 15 35 Q 10 45 15 55 M 85 35 Q 90 45 85 55" fill="none" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" /> {/* Концы лент */}
                  
                  {/* Каменные фрукты и листья (рельеф) */}
                  {/* Центральный элемент (виноград/яблоко) */}
                  <circle cx="50" cy="55" r="7" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
                  <path d="M 50 48 Q 55 40 65 45" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" /> {/* Лист */}
                  <path d="M 50 48 Q 45 40 35 45" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" /> {/* Лист */}
                  
                  {/* Яблоки по бокам */}
                  <circle cx="35" cy="48" r="6" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
                  <circle cx="65" cy="48" r="6" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
                  
                  {/* Мелкие ягоды (виноград) */}
                  <circle cx="43" cy="52" r="3" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />
                  <circle cx="57" cy="52" r="3" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />
                  <circle cx="48" cy="62" r="2.5" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />
                  <circle cx="52" cy="62" r="2.5" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />
                  
                  {/* Колосья по краям */}
                  <path d="M 25 40 Q 20 45 25 50" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 75 40 Q 80 45 75 50" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Бант в центре */}
                  <path d="M 50 35 C 40 30 40 45 50 40 C 60 45 60 30 50 35 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              )
            },
            {
              id: 'sluhovoe_okno',
              title: 'Слуховое окно',
              desc: 'маленькое окошко на самой крыше (чердаке)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Крыша дома (Черепица) */}
                  <path d="M 5 90 L 50 30 L 95 90 Z" fill="#fb923c" stroke="#c2410c" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="20" y1="70" x2="80" y2="70" stroke="#ea580c" strokeWidth="2" />
                  <line x1="35" y1="50" x2="65" y2="50" stroke="#ea580c" strokeWidth="2" />
                  <line x1="28" y1="80" x2="72" y2="80" stroke="#ea580c" strokeWidth="2" />
                  
                  {/* Конструкция слухового окна (домик на крыше) */}
                  <path d="M 35 75 L 35 45 L 50 35 L 65 45 L 65 75 Z" fill="#f8fafc" stroke="#475569" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 30 45 L 50 30 L 70 45" fill="none" stroke="#c2410c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /> {/* Козырек */}
                  
                  {/* Само окошко */}
                  <rect x="42" y="48" width="16" height="22" rx="8" fill="#1e293b" stroke="#1f2937" strokeWidth="2" />
                  <path d="M 42 60 L 58 60 M 50 48 L 50 70" stroke="#64748b" strokeWidth="2" />
                  
                  {/* Кот, выглядывающий из темноты чердака */}
                  <path d="M 45 70 C 45 60 55 60 55 70 Z" fill="#000" stroke="none" />
                  <circle cx="48" cy="65" r="1.5" fill="#fde047" stroke="none" />
                  <circle cx="52" cy="65" r="1.5" fill="#fde047" stroke="none" />
                </svg>
              )
            }
          ]
        },
         {
          id: 'ch1-street',
          title: '⚓️ Уличные детали',
          subtitle: 'Смотри под ноги!',
          theme: 'orange',
          items: [
            {
              id: 'hatch-geom',
              title: 'Люк',
              desc: 'с геометрическим узором',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Асфальт (фон) */}
                  <rect x="10" y="10" width="80" height="80" rx="10" fill="#374151" stroke="none" />
                  <circle cx="20" cy="20" r="1.5" fill="#6b7280" stroke="none" />
                  <circle cx="80" cy="80" r="1.5" fill="#6b7280" stroke="none" />
                  <circle cx="85" cy="25" r="2" fill="#4b5563" stroke="none" />
                  <circle cx="25" cy="85" r="2" fill="#4b5563" stroke="none" />
                  
                  {/* Обод люка */}
                  <circle cx="50" cy="50" r="38" fill="#1f2937" stroke="#0f172a" strokeWidth="4" />
                  <circle cx="50" cy="50" r="34" fill="#4b5563" stroke="#1f2937" strokeWidth="2" />
                  
                  {/* Болты на ободе */}
                  <circle cx="50" cy="15" r="2" fill="#9ca3af" stroke="none" />
                  <circle cx="50" cy="85" r="2" fill="#9ca3af" stroke="none" />
                  <circle cx="15" cy="50" r="2" fill="#9ca3af" stroke="none" />
                  <circle cx="85" cy="50" r="2" fill="#9ca3af" stroke="none" />
                  
                  {/* Геометрический узор (сложные квадраты и звезды) */}
                  <rect x="28" y="28" width="44" height="44" fill="none" stroke="#9ca3af" strokeWidth="3" />
                  <rect x="35" y="35" width="30" height="30" fill="none" stroke="#9ca3af" strokeWidth="3" transform="rotate(45 50 50)" />
                  <circle cx="50" cy="50" r="8" fill="#1f2937" stroke="#9ca3af" strokeWidth="3" />
                  
                  {/* Диагональные насечки */}
                  <path d="M 50 50 L 22 22 M 50 50 L 78 78 M 50 50 L 22 78 M 50 50 L 78 22" stroke="#9ca3af" strokeWidth="2" />
                  
                  {/* Блик на металле */}
                  <path d="M 25 50 A 25 25 0 0 1 50 25" fill="none" stroke="#d1d5db" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
                </svg>
              )
            },
            {
              id: 'hatch-name',
              title: 'Люк',
              desc: 'с названием города или завода',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Брусчатка (фон) */}
                  <path d="M 10 10 L 30 10 L 30 30 L 10 30 Z" fill="#78350f" stroke="#451a03" strokeWidth="2" />
                  <path d="M 70 80 L 90 80 L 90 100 L 70 100 Z" fill="#78350f" stroke="#451a03" strokeWidth="2" />
                  <path d="M 80 15 L 100 15 L 100 35 L 80 35 Z" fill="#92400e" stroke="#451a03" strokeWidth="2" />
                  
                  {/* Чугунный люк */}
                  <circle cx="50" cy="50" r="40" fill="#475569" stroke="#1e293b" strokeWidth="4" />
                  <circle cx="50" cy="50" r="28" fill="none" stroke="#1e293b" strokeWidth="3" />
                  <circle cx="50" cy="50" r="18" fill="#334155" stroke="#1e293b" strokeWidth="2" />
                  
                  {/* Надпись по кругу (имитация букв) */}
                  <path d="M 30 50 A 20 20 0 0 1 70 50" fill="none" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="4 4" />
                  <path d="M 30 50 A 20 20 0 0 0 70 50" fill="none" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="6 3 2 3" />
                  
                  {/* Центр люка - логотип или год */}
                  <text x="50" y="54" fontSize="12" fill="#cbd5e1" stroke="none" fontFamily="serif" fontWeight="bold" textAnchor="middle">1892</text>
                  
                  {/* Ушки для открывания люка */}
                  <rect x="42" y="10" width="16" height="4" fill="#1e293b" stroke="none" />
                  <rect x="42" y="86" width="16" height="4" fill="#1e293b" stroke="none" />
                  
                  {/* Ржавчина (детали) */}
                  <path d="M 60 70 Q 70 75 75 60" fill="none" stroke="#b45309" strokeWidth="2" opacity="0.6" />
                </svg>
              )
            },
            {
              id: 'door-handle',
              title: 'Дверная ручка',
              desc: 'старинная или необычной формы',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Массивная деревянная дверь */}
                  <rect x="10" y="10" width="80" height="80" fill="#78350f" stroke="#451a03" strokeWidth="4" />
                  <line x1="30" y1="10" x2="30" y2="90" stroke="#451a03" strokeWidth="3" />
                  <line x1="50" y1="10" x2="50" y2="90" stroke="#451a03" strokeWidth="3" />
                  <line x1="70" y1="10" x2="70" y2="90" stroke="#451a03" strokeWidth="3" />
                  
                  {/* Фактура дерева (волокна) */}
                  <path d="M 20 20 Q 25 40 15 60 M 40 30 Q 45 50 35 80 M 60 15 Q 55 45 65 75 M 80 25 Q 75 60 85 85" stroke="#451a03" strokeWidth="1.5" opacity="0.5" />
                  
                  {/* Декоративная розетка (основание ручки) */}
                  <circle cx="50" cy="45" r="18" fill="#ca8a04" stroke="#a16207" strokeWidth="3" />
                  <circle cx="50" cy="45" r="12" fill="#facc15" stroke="#a16207" strokeWidth="2" />
                  
                  {/* Детали розетки (гвоздики/узоры) */}
                  <circle cx="50" cy="31" r="2" fill="#a16207" stroke="none" />
                  <circle cx="50" cy="59" r="2" fill="#a16207" stroke="none" />
                  <circle cx="36" cy="45" r="2" fill="#a16207" stroke="none" />
                  <circle cx="64" cy="45" r="2" fill="#a16207" stroke="none" />
                  
                  {/* Массивная кольцевая ручка (стучалка) */}
                  <circle cx="50" cy="65" r="20" fill="none" stroke="#facc15" strokeWidth="8" style={{ filter: 'drop-shadow(0 4px 4px rgba(0,0,0,0.5))' }} />
                  <circle cx="50" cy="65" r="20" fill="none" stroke="#a16207" strokeWidth="2" /> {/* Внутренний контур кольца */}
                  
                  {/* Крепление кольца к розетке (голова льва или узел) */}
                  <path d="M 40 45 C 40 35 60 35 60 45 C 60 55 55 60 50 60 C 45 60 40 55 40 45 Z" fill="#eab308" stroke="#854d0e" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 45 42 L 55 42 M 50 42 L 50 55" stroke="#854d0e" strokeWidth="2" />
                  
                  {/* Блик на кольце */}
                  <path d="M 33 55 A 20 20 0 0 1 40 47" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                </svg>
              )
            },
            {
              id: 'hydrant',
              title: 'Пожарный гидрант',
              desc: 'или красно-белая табличка «ПГ»',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Земля/тротуар */}
                  <line x1="10" y1="90" x2="90" y2="90" stroke="#64748b" strokeWidth="4" />
                  <path d="M 20 90 L 30 95 L 70 95 L 80 90 Z" fill="#94a3b8" stroke="none" />
                  
                  {/* Основной корпус гидранта */}
                  <rect x="35" y="40" width="30" height="50" fill="#ef4444" stroke="#b91c1c" strokeWidth="4" />
                  <path d="M 30 40 L 70 40 L 65 30 L 35 30 Z" fill="#dc2626" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Купол (верхушка) */}
                  <path d="M 35 30 C 35 15 65 15 65 30 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" />
                  <rect x="45" y="10" width="10" height="8" rx="2" fill="#fca5a5" stroke="#b91c1c" strokeWidth="3" /> {/* Гайка сверху */}
                  
                  {/* Боковые выходы для шлангов */}
                  <rect x="25" y="50" width="10" height="15" rx="2" fill="#dc2626" stroke="#b91c1c" strokeWidth="3" />
                  <rect x="20" y="53" width="5" height="9" fill="#9ca3af" stroke="#475569" strokeWidth="2" /> {/* Крышка */}
                  
                  <rect x="65" y="50" width="10" height="15" rx="2" fill="#dc2626" stroke="#b91c1c" strokeWidth="3" />
                  <rect x="75" y="53" width="5" height="9" fill="#9ca3af" stroke="#475569" strokeWidth="2" /> {/* Крышка */}
                  
                  {/* Центральный выход */}
                  <circle cx="50" cy="65" r="12" fill="#fca5a5" stroke="#b91c1c" strokeWidth="3" />
                  <circle cx="50" cy="65" r="6" fill="#9ca3af" stroke="#475569" strokeWidth="2" />
                  
                  {/* Цепочки (висят) */}
                  <path d="M 22 62 C 22 75 35 75 42 65" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="3 2" />
                  <path d="M 78 62 C 78 75 65 75 58 65" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="3 2" />
                  
                  {/* Блик */}
                  <line x1="42" y1="45" x2="42" y2="80" stroke="#fca5a5" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
                </svg>
              )
            },
            {
              id: 'bollard',
              title: 'Боллард',
              desc: 'столбик, преграждающий путь',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Асфальт и тень */}
                  <ellipse cx="50" cy="85" rx="25" ry="6" fill="#9ca3af" stroke="none" opacity="0.5" />
                  <line x1="10" y1="85" x2="90" y2="85" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Корпус болларда (Черный чугун) */}
                  <path d="M 35 85 L 65 85 L 60 25 L 40 25 Z" fill="#374151" stroke="#111827" strokeWidth="4" strokeLinejoin="round" />
                  
                  {/* Полукруглая шляпка */}
                  <path d="M 38 25 C 38 10 62 10 62 25 Z" fill="#4b5563" stroke="#111827" strokeWidth="3" strokeLinejoin="round" />
                  <circle cx="50" cy="15" r="4" fill="#1f2937" stroke="none" /> {/* Шарик на верхушке */}
                  
                  {/* Светоотражающая желтая полоса */}
                  <polygon points="42,40 58,40 56,55 44,55" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
                  
                  {/* Ушки для цепи */}
                  <path d="M 39 35 C 30 35 30 45 41 45" fill="none" stroke="#111827" strokeWidth="3" />
                  <path d="M 61 35 C 70 35 70 45 59 45" fill="none" stroke="#111827" strokeWidth="3" />
                  
                  {/* Массивная цепь (уходит в сторону) */}
                  <path d="M 65 40 C 75 45 85 55 95 75" fill="none" stroke="#64748b" strokeWidth="4" strokeDasharray="6 4" strokeLinecap="round" />
                  
                  {/* Блики на металле */}
                  <line x1="45" y1="30" x2="48" y2="80" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
                  <line x1="48" y1="42" x2="49" y2="53" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'bike-parking',
              title: 'Велопарковка',
              desc: 'похожая на арт-объект',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Земля */}
                  <line x1="10" y1="85" x2="90" y2="85" stroke="#9ca3af" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Парковка в форме силуэта велосипеда или спирали */}
                  <path d="M 25 85 L 25 45 C 25 25 40 20 50 35 C 60 50 75 45 75 25 L 75 85" fill="none" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Крепления к земле */}
                  <rect x="18" y="80" width="14" height="5" fill="#0284c7" stroke="none" />
                  <rect x="68" y="80" width="14" height="5" fill="#0284c7" stroke="none" />
                  
                  {/* Припаркованное колесо велосипеда (для контекста) */}
                  <circle cx="50" cy="65" r="20" fill="none" stroke="#1f2937" strokeWidth="4" />
                  <circle cx="50" cy="65" r="16" fill="none" stroke="#4b5563" strokeWidth="1" />
                  
                  {/* Спицы */}
                  <line x1="50" y1="45" x2="50" y2="85" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="30" y1="65" x2="70" y2="65" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="35" y1="50" x2="65" y2="80" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="65" y1="50" x2="35" y2="80" stroke="#9ca3af" strokeWidth="1" />
                  <circle cx="50" cy="65" r="3" fill="#cbd5e1" stroke="none" />
                  
                  {/* Велозамок (U-lock) */}
                  <path d="M 50 35 L 50 25 C 50 15 65 15 65 25 L 65 40" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
                  <rect x="46" y="35" width="22" height="6" rx="2" fill="#1f2937" stroke="none" />
                </svg>
              )
            },
            {
              id: 'fountain',
              title: 'Питьевой фонтанчик',
              desc: 'работающий или сухой',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Постамент (каменный или чугунный) */}
                  <path d="M 35 90 L 65 90 L 60 40 L 40 40 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                  <rect x="30" y="85" width="40" height="5" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
                  
                  {/* Чаша фонтанчика */}
                  <path d="M 25 40 C 25 55 75 55 75 40 Z" fill="#f1f5f9" stroke="#475569" strokeWidth="4" strokeLinejoin="round" />
                  <ellipse cx="50" cy="40" rx="25" ry="6" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
                  
                  {/* Слив (решетка) */}
                  <circle cx="50" cy="40" r="3" fill="#475569" stroke="none" />
                  
                  {/* Кран и кнопка */}
                  <path d="M 50 40 L 50 25 C 50 15 35 20 35 30" fill="none" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />
                  <circle cx="50" cy="25" r="4" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" /> {/* Кнопка */}
                  
                  {/* Струя воды (дуга) */}
                  <path d="M 35 30 C 35 15 65 15 65 35" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" style={{ filter: 'drop-shadow(0 0 2px #93c5fd)' }} />
                  
                  {/* Капли */}
                  <circle cx="65" cy="40" r="1.5" fill="#3b82f6" stroke="none" />
                  <circle cx="68" cy="35" r="1.5" fill="#3b82f6" stroke="none" />
                  <circle cx="62" cy="32" r="1" fill="#3b82f6" stroke="none" />
                  
                  {/* Декор на постаменте */}
                  <line x1="45" y1="50" x2="45" y2="80" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="55" y1="50" x2="55" y2="80" stroke="#94a3b8" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'qr-code',
              title: 'Инфо-табличка',
              desc: 'с квадратным QR-кодом',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Металлическая стойка */}
                  <line x1="50" y1="70" x2="50" y2="95" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 40 95 L 60 95" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Табличка под углом */}
                  <polygon points="20,20 80,10 85,70 25,80" fill="#f8fafc" stroke="#3b82f6" strokeWidth="4" strokeLinejoin="round" style={{ filter: 'drop-shadow(2px 4px 4px rgba(0,0,0,0.1))' }} />
                  
                  {/* Контур QR-кода */}
                  <polygon points="35,35 65,30 68,60 38,65" fill="#fff" stroke="#1e293b" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Углы QR-кода (квадратики) */}
                  <polygon points="38,38 45,37 46,44 39,45" fill="#1e293b" stroke="none" />
                  <polygon points="55,35 62,34 63,41 56,42" fill="#1e293b" stroke="none" />
                  <polygon points="41,55 48,54 49,61 42,62" fill="#1e293b" stroke="none" />
                  
                  {/* Пиксели внутри QR-кода */}
                  <circle cx="55" cy="50" r="2" fill="#1e293b" stroke="none" />
                  <circle cx="60" cy="55" r="2" fill="#1e293b" stroke="none" />
                  <circle cx="48" cy="48" r="2" fill="#1e293b" stroke="none" />
                  <circle cx="52" cy="42" r="2" fill="#1e293b" stroke="none" />
                  <polygon points="58,45 61,45 61,48 58,48" fill="#1e293b" stroke="none" />
                  
                  {/* Текст под QR-кодом ("SCAN ME") */}
                  <path d="M 30,73 L 78,65" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Блик на стекле/пластике */}
                  <polygon points="25,25 40,22 35,70 28,72" fill="#fff" stroke="none" opacity="0.4" />
                </svg>
              )
            },
            {
              id: 'postbox',
              title: 'Почтовый ящик',
              desc: 'старого образца, висящий на стене',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Стена (кирпичи на фоне) */}
                  <path d="M 10 30 L 30 30 M 70 40 L 90 40 M 15 70 L 35 70 M 65 80 L 85 80 M 20 50 L 20 60 M 80 20 L 80 30" stroke="#e2e8f0" strokeWidth="2" />
                  
                  {/* Корпус почтового ящика (Классический синий) */}
                  <path d="M 30 30 C 30 15 70 15 70 30 L 70 80 C 70 85 65 90 60 90 L 40 90 C 35 90 30 85 30 80 Z" fill="#2563eb" stroke="#1e3a8a" strokeWidth="4" strokeLinejoin="round" style={{ filter: 'drop-shadow(2px 4px 4px rgba(0,0,0,0.2))' }} />
                  
                  {/* Козырек и щель для писем */}
                  <rect x="35" y="35" width="30" height="6" rx="2" fill="#1e3a8a" stroke="none" />
                  <rect x="38" y="41" width="24" height="3" fill="#0f172a" stroke="none" />
                  
                  {/* Белое письмо, торчащее из щели */}
                  <path d="M 45 41 L 45 25 L 65 25 L 65 41" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 45 25 L 55 33 L 65 25" fill="none" stroke="#94a3b8" strokeWidth="2" /> {/* Клапан конверта */}
                  <circle cx="55" cy="35" r="2" fill="#ef4444" stroke="none" /> {/* Марка/Печать */}
                  
                  {/* Информационная табличка (время выемки писем) */}
                  <rect x="40" y="55" width="20" height="15" rx="2" fill="#f8fafc" stroke="#1e3a8a" strokeWidth="2" />
                  <line x1="43" y1="60" x2="57" y2="60" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" />
                  <line x1="43" y1="65" x2="52" y2="65" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Замок дверцы */}
                  <circle cx="50" cy="80" r="4" fill="#fbbf24" stroke="#b45309" strokeWidth="2" />
                  <rect x="49" y="80" width="2" height="3" fill="#b45309" stroke="none" />
                </svg>
              )
            },
            {
              id: 'drainpipe',
              title: 'Водосток',
              desc: 'заканчивающийся необычной воронкой',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Каменная стена дома */}
                  <rect x="50" y="10" width="50" height="90" fill="#f1f5f9" stroke="none" />
                  <path d="M 50 30 L 100 30 M 50 60 L 100 60 M 75 10 L 75 30 M 60 30 L 60 60 M 90 30 L 90 60 M 75 60 L 75 90" stroke="#e2e8f0" strokeWidth="2" />
                  
                  {/* Вертикальная труба (медь/сталь) */}
                  <rect x="40" y="10" width="16" height="60" fill="#94a3b8" stroke="#475569" strokeWidth="3" />
                  
                  {/* Хомуты крепления */}
                  <rect x="35" y="25" width="26" height="6" rx="2" fill="#64748b" stroke="#334155" strokeWidth="2" />
                  <rect x="35" y="55" width="26" height="6" rx="2" fill="#64748b" stroke="#334155" strokeWidth="2" />
                  <line x1="61" y1="28" x2="70" y2="28" stroke="#334155" strokeWidth="3" />
                  <line x1="61" y1="58" x2="70" y2="58" stroke="#334155" strokeWidth="3" />
                  
                  {/* Воронка (Голова дракона / Горгульи) */}
                  <path d="M 40 70 C 20 70 10 85 10 85 C 20 95 35 90 45 85 L 56 70 Z" fill="#94a3b8" stroke="#475569" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Глаз и уши дракона */}
                  <circle cx="35" cy="78" r="2" fill="#ef4444" stroke="none" />
                  <path d="M 45 72 L 55 65 L 52 75 Z" fill="#64748b" stroke="#334155" strokeWidth="2" />
                  
                  {/* Пасть дракона (откуда льется вода) */}
                  <path d="M 10 85 C 20 85 25 80 30 80" fill="none" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
                  <polygon points="15,85 18,88 20,84 23,87 25,83" fill="#e2e8f0" stroke="#334155" strokeWidth="1" /> {/* Зубы */}
                  
                  {/* Вода, выливающаяся из пасти */}
                  <path d="M 15 88 Q 10 95 5 95 M 25 88 Q 20 100 15 100 M 20 86 Q 15 95 10 98" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Блик на трубе */}
                  <line x1="45" y1="10" x2="45" y2="68" stroke="#cbd5e1" strokeWidth="3" opacity="0.6" />
                </svg>
              )
            }
          ]
        },
        {
          id: 'ch1-signs',
          title: '💡 Вывески и свет',
          subtitle: 'Читай и замечай!',
          theme: 'purple',
          items: [
            {
              id: 'neon',
              title: 'Неоновая вывеска',
              desc: 'которая светится даже днем',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Темная кирпичная стена */}
                  <rect x="10" y="20" width="80" height="60" rx="5" fill="#1f2937" stroke="#374151" strokeWidth="4" />
                  <line x1="10" y1="40" x2="90" y2="40" stroke="#374151" strokeWidth="2" opacity="0.5" />
                  <line x1="10" y1="60" x2="90" y2="60" stroke="#374151" strokeWidth="2" opacity="0.5" />
                  
                  {/* Провода вывески */}
                  <path d="M 25 20 L 25 35 M 75 20 L 75 35 M 50 20 L 50 35" stroke="#4b5563" strokeWidth="2" />
                  
                  {/* Неоновые трубки (Светящиеся) */}
                  <g style={{ filter: 'drop-shadow(0 0 4px #ec4899)' }}>
                    {/* Слово "OPEN" (стилизованное) */}
                    <path d="M 30 55 C 25 55 25 45 30 45 C 35 45 35 55 30 55" stroke="#ec4899" strokeWidth="4" /> {/* O */}
                    <path d="M 40 55 L 40 45 L 45 45 C 48 45 48 50 45 50 L 40 50" stroke="#ec4899" strokeWidth="4" /> {/* P */}
                    <path d="M 55 45 L 55 55 M 55 45 L 60 45 M 55 50 L 58 50 M 55 55 L 60 55" stroke="#ec4899" strokeWidth="4" /> {/* E */}
                    <path d="M 65 55 L 65 45 L 75 55 L 75 45" stroke="#ec4899" strokeWidth="4" /> {/* N */}
                  </g>
                  
                  {/* Белая сердцевина неона для реалистичности */}
                  <path d="M 30 55 C 25 55 25 45 30 45 C 35 45 35 55 30 55" stroke="#fff" strokeWidth="1.5" />
                  <path d="M 40 55 L 40 45 L 45 45 C 48 45 48 50 45 50 L 40 50" stroke="#fff" strokeWidth="1.5" />
                  <path d="M 55 45 L 55 55 M 55 45 L 60 45 M 55 50 L 58 50 M 55 55 L 60 55" stroke="#fff" strokeWidth="1.5" />
                  <path d="M 65 55 L 65 45 L 75 55 L 75 45" stroke="#fff" strokeWidth="1.5" />
                </svg>
              )
            },
            {
              id: 'menu-stand',
              title: 'Меню на подставке',
              desc: 'перед входом в кафе',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Деревянный штендер (раскладушка) */}
                  <path d="M 30 15 L 70 15 L 80 90 L 68 90 L 62 25 L 38 25 L 32 90 L 20 90 Z" fill="#92400e" stroke="#78350f" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Металлическая петля сбоку */}
                  <line x1="28" y1="50" x2="35" y2="50" stroke="#475569" strokeWidth="2" />
                  <line x1="65" y1="50" x2="72" y2="50" stroke="#475569" strokeWidth="2" />
                  
                  {/* Грифельная доска */}
                  <polygon points="36,25 64,25 68,80 32,80" fill="#111827" stroke="#451a03" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Рисунок мелом (Чашка кофе и текст) */}
                  <path d="M 45 35 C 45 45 55 45 55 35 Z" fill="none" stroke="#fff" strokeWidth="2" />
                  <path d="M 55 38 C 58 38 58 35 55 35" fill="none" stroke="#fff" strokeWidth="2" />
                  <path d="M 48 28 Q 50 32 48 35 M 52 28 Q 54 32 52 35" stroke="#fff" strokeWidth="1.5" opacity="0.8" />
                  
                  {/* Текст меню (мелом) */}
                  <line x1="40" y1="50" x2="60" y2="50" stroke="#fcd34d" strokeWidth="2" strokeDasharray="4 2" />
                  <line x1="38" y1="58" x2="62" y2="58" stroke="#fff" strokeWidth="2" strokeDasharray="6 3" />
                  <line x1="38" y1="66" x2="55" y2="66" stroke="#fff" strokeWidth="2" strokeDasharray="5 4" />
                  <line x1="42" y1="74" x2="58" y2="74" stroke="#fca5a5" strokeWidth="2" strokeDasharray="3 3" />
                </svg>
              )
            },
            {
              id: 'monument-plaque',
              title: 'Памятник',
              desc: 'табличка «Памятник архитектуры»',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Стена (гранит/мрамор) */}
                  <rect x="10" y="10" width="80" height="80" rx="5" fill="#f1f5f9" stroke="none" />
                  <path d="M 20 20 L 30 15 M 80 80 L 70 85 M 80 20 L 85 30" stroke="#cbd5e1" strokeWidth="2" opacity="0.5" />
                  
                  {/* Бронзовая/золотая табличка */}
                  <rect x="20" y="30" width="60" height="40" rx="4" fill="#fbbf24" stroke="#b45309" strokeWidth="4" />
                  <rect x="24" y="34" width="52" height="32" rx="2" fill="none" stroke="#d97706" strokeWidth="2" />
                  
                  {/* Декоративные болты по углам */}
                  <circle cx="26" cy="36" r="1.5" fill="#78350f" stroke="none" />
                  <circle cx="74" cy="36" r="1.5" fill="#78350f" stroke="none" />
                  <circle cx="26" cy="64" r="1.5" fill="#78350f" stroke="none" />
                  <circle cx="74" cy="64" r="1.5" fill="#78350f" stroke="none" />
                  
                  {/* Текст таблички */}
                  <line x1="35" y1="44" x2="65" y2="44" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
                  <line x1="30" y1="52" x2="70" y2="52" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="40" y1="60" x2="60" y2="60" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Блик на золоте */}
                  <polygon points="25,45 35,35 45,35 30,50" fill="#fff" stroke="none" opacity="0.4" />
                </svg>
              )
            },
            {
              id: 'foreign-sign',
              title: 'Иностранный',
              desc: 'надпись не на русском (кроме английского)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кронштейн (черный металл) */}
                  <path d="M 20 20 L 80 20" stroke="#1f2937" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 20 10 L 20 30" stroke="#1f2937" strokeWidth="4" />
                  <path d="M 40 20 L 40 35 M 60 20 L 60 35" stroke="#4b5563" strokeWidth="3" />
                  
                  {/* Красная вывеска (например, азиатский ресторан) */}
                  <rect x="25" y="35" width="50" height="50" rx="4" fill="#ef4444" stroke="#b91c1c" strokeWidth="4" />
                  <rect x="30" y="40" width="40" height="40" rx="2" fill="none" stroke="#fca5a5" strokeWidth="2" />
                  
                  {/* Псевдо-иероглифы (золотые) */}
                  <path d="M 45 48 L 55 48 M 50 45 L 50 65 M 50 55 L 42 62 M 50 55 L 58 62" stroke="#fde047" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 38 72 L 62 72 M 45 68 L 45 76 M 55 68 L 55 76" stroke="#fde047" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Декор вывески */}
                  <circle cx="32" cy="73" r="2" fill="#fde047" stroke="none" />
                  <circle cx="68" cy="73" r="2" fill="#fde047" stroke="none" />
                </svg>
              )
            },
            {
              id: 'retro-lantern',
              title: 'Старинный фонарь',
              desc: 'на кронштейне (прикреплен к стене дома)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кованый настенный кронштейн */}
                  <rect x="10" y="20" width="6" height="40" rx="2" fill="#1f2937" stroke="none" />
                  <path d="M 13 30 C 30 30 40 20 50 20 L 50 35" fill="none" stroke="#1f2937" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 13 50 C 30 50 40 40 45 25" fill="none" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="25" cy="40" r="4" fill="none" stroke="#1f2937" strokeWidth="2" /> {/* Завитушка */}
                  
                  {/* Корпус старинного фонаря */}
                  <path d="M 40 35 L 60 35 L 55 25 L 45 25 Z" fill="#374151" stroke="#111827" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 35 35 L 65 35 L 55 70 L 45 70 Z" fill="#fef08a" stroke="#111827" strokeWidth="4" strokeLinejoin="round" />
                  <path d="M 45 70 L 55 70 L 52 80 L 48 80 Z" fill="#374151" stroke="#111827" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Металлические переплеты на стекле */}
                  <line x1="50" y1="35" x2="50" y2="70" stroke="#111827" strokeWidth="3" />
                  <line x1="42" y1="52" x2="58" y2="52" stroke="#111827" strokeWidth="2" />
                  
                  {/* Ореол света (желтый) */}
                  <circle cx="50" cy="55" r="25" fill="#fef08a" stroke="none" opacity="0.3" style={{ filter: 'blur(2px)' }} />
                </svg>
              )
            },
            {
              id: 'poster-pillar',
              title: 'Афишная тумба',
              desc: 'с наклеенными плакатами',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Основание и крыша тумбы (классический парижский стиль) */}
                  <ellipse cx="50" cy="15" rx="25" ry="8" fill="#4b5563" stroke="#1f2937" strokeWidth="3" />
                  <path d="M 25 15 L 25 85 A 25 8 0 0 0 75 85 L 75 15" fill="#94a3b8" stroke="#1f2937" strokeWidth="4" />
                  <ellipse cx="50" cy="85" rx="25" ry="8" fill="#4b5563" stroke="#1f2937" strokeWidth="3" />
                  
                  {/* Купол тумбы */}
                  <path d="M 25 15 C 25 -5 75 -5 75 15" fill="#374151" stroke="#1f2937" strokeWidth="3" />
                  <circle cx="50" cy="3" r="3" fill="#1f2937" stroke="none" />
                  
                  {/* Наклеенные афиши (разноцветные, наслаиваются) */}
                  {/* Розовый плакат */}
                  <path d="M 30 30 L 55 25 L 60 55 L 35 60 Z" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round" />
                  <line x1="38" y1="35" x2="50" y2="32" stroke="#991b1b" strokeWidth="2" />
                  <line x1="37" y1="45" x2="52" y2="42" stroke="#991b1b" strokeWidth="3" />
                  
                  {/* Синий плакат */}
                  <path d="M 45 40 L 70 45 L 68 75 L 42 70 Z" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="56" cy="55" r="5" fill="#1e3a8a" stroke="none" />
                  <line x1="50" y1="65" x2="62" y2="67" stroke="#1e3a8a" strokeWidth="2" />
                  
                  {/* Зеленый плакат (наполовину оторванный) */}
                  <path d="M 30 55 L 48 58 L 45 80 L 28 75 Z" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 48 58 L 43 65 L 48 70" fill="#fff" stroke="#94a3b8" strokeWidth="1" /> {/* Загнутый край */}
                  <line x1="35" y1="65" x2="42" y2="66" stroke="#14532d" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'street-sign',
              title: 'Улица',
              desc: 'табличка с красивым шрифтом',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кирпичная стена дома */}
                  <path d="M 10 20 L 40 20 M 60 40 L 90 40 M 15 60 L 45 60 M 50 80 L 80 80 M 30 10 L 30 30 M 75 30 L 75 50" stroke="#cbd5e1" strokeWidth="2" opacity="0.6" />
                  
                  {/* Синяя эмалированная табличка */}
                  <rect x="15" y="30" width="70" height="30" rx="3" fill="#1d4ed8" stroke="#0f172a" strokeWidth="4" />
                  <rect x="19" y="34" width="62" height="22" rx="1" fill="none" stroke="#ffffff" strokeWidth="2" />
                  
                  {/* Красивый шрифт (Имитация) */}
                  <path d="M 25 45 C 30 40 35 40 35 45 C 35 50 30 55 40 55 C 50 55 55 40 65 45 C 70 48 75 45 75 40" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Номер дома (Маленький квадратик сбоку или снизу) */}
                  <rect x="40" y="65" width="20" height="15" rx="2" fill="#1d4ed8" stroke="#0f172a" strokeWidth="3" />
                  <rect x="43" y="68" width="14" height="9" fill="none" stroke="#ffffff" strokeWidth="1" />
                  <line x1="47" y1="73" x2="53" y2="73" stroke="#ffffff" strokeWidth="2" />
                  
                  {/* Болтики крепления */}
                  <circle cx="20" cy="45" r="1.5" fill="#fff" stroke="none" />
                  <circle cx="80" cy="45" r="1.5" fill="#fff" stroke="none" />
                </svg>
              )
            },
            {
              id: 'flag',
              title: 'Флаг',
              desc: 'развевающийся на флагштоке',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Флагшток (Серебристый металл) */}
                  <line x1="20" y1="10" x2="20" y2="95" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
                  <line x1="20" y1="10" x2="20" y2="95" stroke="#f1f5f9" strokeWidth="2" /> {/* Блик */}
                  
                  {/* Навершие (Золотой шар) */}
                  <circle cx="20" cy="8" r="5" fill="#fbbf24" stroke="#b45309" strokeWidth="2" />
                  
                  {/* Развевающийся флаг (Красный) */}
                  <path d="M 23 15 C 40 5 60 25 85 15 L 85 55 C 60 65 40 45 23 55 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Складки ткани (Тени/Свет) */}
                  <path d="M 40 15 C 45 35 45 45 40 52" stroke="#b91c1c" strokeWidth="2" opacity="0.6" />
                  <path d="M 65 20 C 60 35 60 45 65 60" stroke="#fca5a5" strokeWidth="2" opacity="0.6" />
                  
                  {/* Веревка флагштока */}
                  <line x1="16" y1="15" x2="16" y2="80" stroke="#cbd5e1" strokeWidth="2" />
                  <path d="M 16 60 C 12 65 12 70 16 75" fill="none" stroke="#94a3b8" strokeWidth="2" /> {/* Узел веревки */}
                </svg>
              )
            },
            {
              id: 'tablo',
              title: 'Светящееся табло',
              desc: 'с курсом валют или температурой',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Корпус табло */}
                  <rect x="10" y="25" width="80" height="50" rx="5" fill="#111827" stroke="#4b5563" strokeWidth="4" />
                  <rect x="15" y="30" width="70" height="40" rx="2" fill="#030712" stroke="none" />
                  
                  {/* Светодиодные цифры "25°C" (Зеленые) */}
                  <g stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 3px #22c55e)' }}>
                    {/* Цифра 2 */}
                    <path d="M 25 38 L 35 38 L 35 48 L 25 48 L 25 58 L 35 58" fill="none" />
                    {/* Цифра 5 */}
                    <path d="M 55 38 L 45 38 L 45 48 L 55 48 L 55 58 L 45 58" fill="none" />
                    {/* Градус (кружок) */}
                    <circle cx="65" cy="40" r="3" fill="none" />
                    {/* Буква C */}
                    <path d="M 80 40 C 75 40 73 45 73 50 C 73 55 75 60 80 60" fill="none" />
                  </g>
                  
                  {/* Блики на темном стекле экрана */}
                  <polygon points="16,31 40,31 25,69 16,69" fill="#fff" stroke="none" opacity="0.05" />
                  <polygon points="45,31 55,31 40,69 30,69" fill="#fff" stroke="none" opacity="0.05" />
                  
                  {/* Крепления */}
                  <rect x="25" y="15" width="8" height="10" fill="#4b5563" stroke="none" />
                  <rect x="67" y="15" width="8" height="10" fill="#4b5563" stroke="none" />
                </svg>
              )
            },
            {
              id: 'sticker',
              title: 'Стикер',
              desc: 'маленькая наклейка на водосточной трубе или знаке',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Металлический столб/труба */}
                  <rect x="35" y="10" width="30" height="80" fill="#9ca3af" stroke="#4b5563" strokeWidth="4" />
                  <line x1="42" y1="10" x2="42" y2="90" stroke="#cbd5e1" strokeWidth="3" opacity="0.7" />
                  
                  {/* Следы от старых сорванных наклеек */}
                  <path d="M 40 20 L 50 22 L 45 30 Z" fill="#e2e8f0" stroke="none" opacity="0.8" />
                  <path d="M 55 70 L 60 75 L 50 80 Z" fill="#e2e8f0" stroke="none" opacity="0.8" />
                  
                  {/* Главный яркий стикер (Наклеен немного криво) */}
                  <g transform="rotate(-12 50 50)">
                    {/* Бумажная основа */}
                    <rect x="40" y="38" width="28" height="28" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
                    {/* Отогнутый уголок */}
                    <polygon points="40,66 48,66 48,58" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
                    <polygon points="40,66 40,58 48,58" fill="#9ca3af" stroke="none" /> {/* Тень под уголком на трубе */}
                    
                    {/* Рисунок на стикере (Забавная мордочка / Тег) */}
                    <circle cx="48" cy="46" r="2" fill="#ef4444" stroke="none" />
                    <circle cx="58" cy="46" r="2" fill="#ef4444" stroke="none" />
                    <path d="M 46 56 Q 53 62 60 56" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 46 42 Q 53 38 60 42" fill="none" stroke="#1f2937" strokeWidth="2" /> {/* Брови */}
                  </g>
                </svg>
              )
            }
          ]
        },
              {
          id: 'ch1-people',
          title: '🏃‍♂️ Городская суета',
          subtitle: 'Кто вокруг?',
          theme: 'rose',
          items: [
            {
              id: 'musician',
              title: 'Уличный музыкант',
              desc: 'с футляром для денег',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Гитарист */}
                  <path d="M 40 80 L 40 50 C 40 40 60 40 60 50 L 60 80 Z" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="3" />
                  <circle cx="50" cy="30" r="10" fill="#fcd34d" stroke="#b45309" strokeWidth="2" />
                  
                  {/* Шляпа */}
                  <path d="M 35 25 C 35 15 65 15 65 25 Z" fill="#1f2937" stroke="#0f172a" strokeWidth="2" />
                  <line x1="30" y1="25" x2="70" y2="25" stroke="#0f172a" strokeWidth="4" />
                  
                  {/* Гитара */}
                  <path d="M 35 60 C 25 60 25 75 40 80 C 45 80 45 70 55 70 C 65 70 65 60 55 55 C 45 50 45 60 35 60 Z" fill="#d97706" stroke="#92400e" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 50 60 L 75 40" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="45" cy="65" r="4" fill="#451a03" stroke="none" />
                  
                  {/* Открытый гитарный футляр на земле */}
                  <path d="M 15 90 L 85 90 L 80 80 L 20 80 Z" fill="#374151" stroke="#1f2937" strokeWidth="3" strokeLinejoin="round" />
                  <rect x="25" y="82" width="50" height="6" fill="#1f2937" stroke="none" />
                  
                  {/* Монетки в футляре */}
                  <circle cx="40" cy="85" r="2" fill="#facc15" stroke="none" />
                  <circle cx="45" cy="87" r="2" fill="#facc15" stroke="none" />
                  <circle cx="55" cy="86" r="2" fill="#9ca3af" stroke="none" />
                  <circle cx="60" cy="84" r="2" fill="#facc15" stroke="none" />
                  
                  {/* Ноты */}
                  <path d="M 70 25 L 70 15 L 80 12 L 80 22" fill="none" stroke="#1f2937" strokeWidth="2" />
                  <circle cx="68" cy="25" r="2.5" fill="#1f2937" stroke="none" />
                  <circle cx="78" cy="22" r="2.5" fill="#1f2937" stroke="none" />
                </svg>
              )
            },
            {
              id: 'artist',
              title: 'Художник',
              desc: 'с мольбертом или блокнотом',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Мольберт (Дерево) */}
                  <line x1="50" y1="10" x2="30" y2="90" stroke="#92400e" strokeWidth="4" strokeLinecap="round" />
                  <line x1="50" y1="10" x2="70" y2="90" stroke="#92400e" strokeWidth="4" strokeLinecap="round" />
                  <line x1="50" y1="10" x2="50" y2="90" stroke="#78350f" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
                  <line x1="25" y1="70" x2="75" y2="70" stroke="#92400e" strokeWidth="5" strokeLinecap="round" />
                  
                  {/* Холст */}
                  <rect x="30" y="30" width="40" height="35" fill="#f8fafc" stroke="#475569" strokeWidth="3" />
                  
                  {/* Картина на холсте (Пейзаж/мазки) */}
                  <path d="M 30 50 Q 40 40 50 55 T 70 45 L 70 65 L 30 65 Z" fill="#38bdf8" stroke="none" />
                  <circle cx="60" cy="40" r="5" fill="#facc15" stroke="none" />
                  <path d="M 30 65 L 45 55 L 70 65 Z" fill="#4ade80" stroke="none" />
                  
                  {/* Палитра в руке (внизу слева) */}
                  <path d="M 15 85 C 10 75 25 70 30 80 C 35 90 20 95 15 85 Z" fill="#fcd34d" stroke="#b45309" strokeWidth="2" />
                  <circle cx="20" cy="80" r="2" fill="#ef4444" stroke="none" />
                  <circle cx="25" cy="78" r="2" fill="#3b82f6" stroke="none" />
                  <circle cx="27" cy="84" r="2" fill="#22c55e" stroke="none" />
                  
                  {/* Кисть */}
                  <line x1="28" y1="82" x2="40" y2="70" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                  <line x1="38" y1="72" x2="42" y2="68" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'tourist-map',
              title: 'Турист с картой',
              desc: 'редкий вид с бумажной схемой!',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ноги туриста */}
                  <path d="M 40 90 L 40 60 M 60 90 L 60 60" stroke="#1d4ed8" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 30 65 C 30 45 70 45 70 65" fill="#fca5a5" stroke="#ef4444" strokeWidth="3" />
                  
                  {/* Огромная бумажная карта (полностью закрывает лицо) */}
                  <rect x="20" y="20" width="60" height="40" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" />
                  
                  {/* Сгибы карты */}
                  <line x1="40" y1="20" x2="40" y2="60" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="60" y1="20" x2="60" y2="60" stroke="#cbd5e1" strokeWidth="2" />
                  
                  {/* Линии улиц на карте */}
                  <path d="M 25 30 L 40 40 L 50 30 L 75 45" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 30 50 L 50 40 L 60 55" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Метка "Я здесь" на карте */}
                  <path d="M 50 40 C 50 35 56 35 56 40 C 56 45 53 48 53 48 C 53 48 50 45 50 40 Z" fill="#ef4444" stroke="none" />
                  <circle cx="53" cy="40" r="1.5" fill="#fff" stroke="none" />
                  
                  {/* Руки держат карту */}
                  <path d="M 25 65 L 20 50" stroke="#fca5a5" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 75 65 L 80 50" stroke="#fca5a5" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Фотоаппарат на шее */}
                  <rect x="45" y="65" width="10" height="8" rx="1" fill="#1f2937" stroke="none" />
                  <circle cx="50" cy="69" r="3" fill="#9ca3af" stroke="none" />
                  <path d="M 45 65 C 40 55 60 55 55 65" fill="none" stroke="#1f2937" strokeWidth="1.5" />
                </svg>
              )
            },
            {
              id: 'courier-ebike',
              title: 'Курьер',
              desc: 'на электровелосипеде с ярким коробом',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Электровелосипед */}
                  <circle cx="30" cy="80" r="12" fill="none" stroke="#1f2937" strokeWidth="4" />
                  <circle cx="70" cy="80" r="12" fill="none" stroke="#1f2937" strokeWidth="4" />
                  <path d="M 30 80 L 45 55 L 65 55 L 70 80 M 45 55 L 35 55" stroke="#4b5563" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Толстая батарея на раме */}
                  <rect x="42" y="60" width="12" height="6" rx="2" fill="#1f2937" stroke="none" transform="rotate(30 42 60)" />
                  
                  {/* Курьер (согнулся в движении) */}
                  <path d="M 45 50 L 50 35 L 65 35" fill="none" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 65 35 L 60 50 M 50 35 L 40 45" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" /> {/* Руки */}
                  
                  {/* Шлем */}
                  <path d="M 60 25 C 60 15 75 15 75 25 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Огромный квадратный рюкзак (Желтый или зеленый) */}
                  <rect x="25" y="15" width="25" height="30" rx="3" fill="#22c55e" stroke="#15803d" strokeWidth="3" />
                  <line x1="25" y1="25" x2="50" y2="25" stroke="#15803d" strokeWidth="2" />
                  <line x1="25" y1="35" x2="50" y2="35" stroke="#15803d" strokeWidth="2" />
                  
                  {/* Линии скорости */}
                  <line x1="10" y1="80" x2="15" y2="80" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                  <line x1="5" y1="70" x2="12" y2="70" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'animator',
              title: 'Аниматор',
              desc: 'человек в смешном плюшевом костюме',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Огромное пушистое тело медведя */}
                  <rect x="30" y="45" width="40" height="40" rx="20" fill="#f97316" stroke="#c2410c" strokeWidth="4" />
                  <circle cx="50" cy="65" r="12" fill="#fed7aa" stroke="none" /> {/* Светлое пузико */}
                  
                  {/* Огромная голова-маска */}
                  <circle cx="50" cy="30" r="18" fill="#f97316" stroke="#c2410c" strokeWidth="4" />
                  
                  {/* Ушки */}
                  <circle cx="35" cy="18" r="6" fill="#f97316" stroke="#c2410c" strokeWidth="3" />
                  <circle cx="65" cy="18" r="6" fill="#f97316" stroke="#c2410c" strokeWidth="3" />
                  
                  {/* Милая мордочка */}
                  <circle cx="43" cy="27" r="3" fill="#1f2937" stroke="none" />
                  <circle cx="57" cy="27" r="3" fill="#1f2937" stroke="none" />
                  <ellipse cx="50" cy="35" rx="6" ry="4" fill="#fed7aa" stroke="none" />
                  <circle cx="50" cy="33" r="2" fill="#1f2937" stroke="none" />
                  <path d="M 48 36 Q 50 38 52 36" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Лапы с воздушными шарами */}
                  <path d="M 30 60 C 20 60 15 50 20 40" fill="none" stroke="#f97316" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 70 60 C 80 60 85 50 80 40" fill="none" stroke="#f97316" strokeWidth="8" strokeLinecap="round" />
                  
                  {/* Воздушный шарик */}
                  <path d="M 20 40 L 15 25" stroke="#9ca3af" strokeWidth="2" />
                  <circle cx="15" cy="15" r="10" fill="#ec4899" stroke="#be185d" strokeWidth="2" />
                  <path d="M 15 25 L 12 28 L 18 28 Z" fill="#ec4899" stroke="none" />
                </svg>
              )
            },
            {
              id: 'photographer',
              title: 'Фотограф',
              desc: 'с профессиональной камерой на штативе',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Штатив (тренога) */}
                  <line x1="50" y1="50" x2="35" y2="95" stroke="#4b5563" strokeWidth="4" strokeLinecap="round" />
                  <line x1="50" y1="50" x2="65" y2="95" stroke="#4b5563" strokeWidth="4" strokeLinecap="round" />
                  <line x1="50" y1="50" x2="50" y2="95" stroke="#374151" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
                  <rect x="45" y="45" width="10" height="5" fill="#1f2937" stroke="none" /> {/* Головка штатива */}
                  
                  {/* Профессиональная камера (DSLR) */}
                  <rect x="42" y="30" width="16" height="15" rx="2" fill="#111827" stroke="#374151" strokeWidth="2" />
                  <rect x="58" y="32" width="15" height="11" fill="#1f2937" stroke="#4b5563" strokeWidth="2" /> {/* Объектив */}
                  
                  {/* Внешняя вспышка */}
                  <rect x="46" y="20" width="8" height="10" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                  
                  {/* Фотограф (пригнулся к видоискателю) */}
                  <path d="M 30 90 L 30 60 C 30 40 40 30 42 35" fill="none" stroke="#22c55e" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="28" cy="35" r="8" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" /> {/* Голова */}
                  <path d="M 30 50 L 45 40" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" /> {/* Рука на камере */}
                  
                  {/* Вспышка (звездочка света) */}
                  <path d="M 80 37 L 85 30 M 80 37 L 85 44 M 80 37 L 90 37" stroke="#fef08a" strokeWidth="3" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'queue-coffee',
              title: 'Очередь',
              desc: 'за вкусным (например, за мороженым или кофе)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Тележка с мороженым / Кофе */}
                  <path d="M 75 80 L 75 55 L 95 55 L 95 80 Z" fill="#f472b6" stroke="#db2777" strokeWidth="3" strokeLinejoin="round" />
                  <circle cx="80" cy="80" r="5" fill="#1f2937" stroke="none" />
                  <circle cx="90" cy="80" r="5" fill="#1f2937" stroke="none" />
                  
                  {/* Тент-зонтик над тележкой */}
                  <line x1="85" y1="55" x2="85" y2="25" stroke="#9ca3af" strokeWidth="3" />
                  <path d="M 70 25 C 80 15 90 15 100 25 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 70 25 Q 75 30 80 25 Q 85 30 90 25 Q 95 30 100 25" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
                  
                  {/* Продавец (выглядывает) */}
                  <circle cx="85" cy="45" r="5" fill="#fed7aa" stroke="none" />
                  
                  {/* Очередь людей (силуэты один за другим) */}
                  {/* Человек 1 (берет заказ) */}
                  <path d="M 60 80 L 60 55 C 60 45 55 45 55 55 L 55 80" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="58" cy="40" r="6" fill="#fca5a5" stroke="none" />
                  <line x1="60" y1="55" x2="70" y2="50" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" /> {/* Рука с деньгами */}
                  
                  {/* Человек 2 (ждет) */}
                  <path d="M 40 80 L 40 55 C 40 45 35 45 35 55 L 35 80" stroke="#10b981" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="38" cy="40" r="6" fill="#fca5a5" stroke="none" />
                  
                  {/* Человек 3 (последний в очереди) */}
                  <path d="M 20 80 L 20 55 C 20 45 15 45 15 55 L 15 80" stroke="#a855f7" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="18" cy="40" r="6" fill="#fca5a5" stroke="none" />
                </svg>
              )
            },
            {
              id: 'bench-reader',
              title: 'Читатель',
              desc: 'читающий настоящую газету или книгу на скамейке',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Скамейка (вид сбоку) */}
                  <path d="M 20 80 L 20 60 L 50 60 L 55 35" fill="none" stroke="#78350f" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 40 60 L 40 80" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
                  
                  {/* Человек сидит */}
                  <path d="M 45 80 L 45 55 L 30 55 C 25 55 25 45 30 45 L 45 45 C 50 45 55 50 50 60 Z" fill="#6366f1" stroke="#4338ca" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="35" cy="30" r="8" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />
                  
                  {/* Огромная развернутая газета (Широкая) */}
                  <polygon points="15,35 45,30 55,50 25,55" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="30" y1="33" x2="50" y2="48" stroke="#cbd5e1" strokeWidth="2" /> {/* Сгиб газеты */}
                  
                  {/* Текст в газете */}
                  <line x1="20" y1="40" x2="35" y2="38" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="22" y1="45" x2="38" y2="43" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="24" y1="50" x2="40" y2="48" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="35" y1="36" x2="50" y2="48" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="42" y1="35" x2="50" y2="41" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Ноги человека */}
                  <path d="M 45 55 L 60 55 L 60 80" stroke="#1f2937" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )
            },
            {
              id: 'wedding',
              title: 'Свадьба',
              desc: 'жених и невеста (часто бывают у достопримечательностей)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Невеста (Пышное белое платье) */}
                  <path d="M 45 90 C 20 90 25 50 35 50 C 45 50 50 90 45 90 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 35 50 C 30 40 40 40 35 50 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" /> {/* Корсет */}
                  <circle cx="35" cy="30" r="7" fill="#fed7aa" stroke="#c2410c" strokeWidth="1" /> {/* Голова невесты */}
                  <path d="M 30 30 C 30 20 40 20 40 35 C 38 40 32 40 30 30 Z" fill="#fcd34d" stroke="none" /> {/* Прическа/Фата */}
                  
                  {/* Жених (Строгий черный костюм) */}
                  <path d="M 55 90 L 55 55 C 55 45 65 45 65 55 L 65 90" stroke="#111827" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 60 38 L 52 55 L 68 55 Z" fill="#111827" stroke="#111827" strokeWidth="3" strokeLinejoin="round" />
                  <circle cx="60" cy="28" r="7" fill="#fed7aa" stroke="#c2410c" strokeWidth="1" /> {/* Голова жениха */}
                  <path d="M 60 40 L 60 50" stroke="#ffffff" strokeWidth="2" /> {/* Рубашка */}
                  
                  {/* Держатся за руки */}
                  <path d="M 40 45 C 45 55 55 55 55 45" fill="none" stroke="#fed7aa" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Букет невесты */}
                  <circle cx="45" cy="50" r="5" fill="#f472b6" stroke="#db2777" strokeWidth="2" />
                  
                  {/* Витающие сердечки */}
                  <path d="M 75 25 C 75 20 80 15 85 20 C 90 15 95 20 95 25 C 95 30 85 40 85 40 C 85 40 75 30 75 25 Z" fill="#ef4444" stroke="none" />
                  <path d="M 15 35 C 15 32 18 29 21 32 C 24 29 27 32 27 35 C 27 38 21 44 21 44 C 21 44 15 38 15 35 Z" fill="#fca5a5" stroke="none" />
                </svg>
              )
            },
            {
              id: 'police-patrol',
              title: 'Полицейский патруль',
              desc: 'стражи порядка на улице',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Полицейский 1 */}
                  <path d="M 35 90 L 35 55 C 35 45 45 45 45 55 L 45 90" stroke="#1e3a8a" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 32 45 L 48 45 L 45 60 L 35 60 Z" fill="#1e3a8a" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="40" cy="30" r="7" fill="#fed7aa" stroke="#c2410c" strokeWidth="1" />
                  {/* Фуражка */}
                  <path d="M 32 28 C 32 20 48 20 48 28 Z" fill="#1e3a8a" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 30 28 Q 40 32 50 28" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" /> {/* Козырек */}
                  <circle cx="40" cy="24" r="1.5" fill="#facc15" stroke="none" /> {/* Кокарда */}
                  
                  {/* Полицейский 2 (В желтой жилетке) */}
                  <path d="M 65 90 L 65 55 C 65 45 75 45 75 55 L 75 90" stroke="#1e3a8a" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 62 45 L 78 45 L 75 60 L 65 60 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="2" strokeLinejoin="round" /> {/* Жилетка */}
                  <circle cx="70" cy="30" r="7" fill="#fed7aa" stroke="#c2410c" strokeWidth="1" />
                  {/* Фуражка */}
                  <path d="M 62 28 C 62 20 78 20 78 28 Z" fill="#1e3a8a" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 60 28 Q 70 32 80 28" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Светоотражающие полосы на жилетке */}
                  <line x1="64" y1="50" x2="76" y2="50" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="2 2" />
                  <line x1="65" y1="55" x2="75" y2="55" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="2 2" />
                  
                  {/* Рация на плече 1-го полицейского */}
                  <rect x="33" y="42" width="4" height="6" fill="#1f2937" stroke="none" />
                  <line x1="35" y1="42" x2="35" y2="38" stroke="#1f2937" strokeWidth="1" />
                </svg>
              )
            }
          ]
        },
             {
          id: 'ch1-nature',
          title: '🕊 Природа и мелкие находки',
          subtitle: 'Природа и детали',
          theme: 'emerald',
          items: [
            {
              id: 'puddle-bird',
              title: 'Птица',
              desc: 'пьющая из лужи',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Асфальт и лужа */}
                  <ellipse cx="50" cy="80" rx="35" ry="12" fill="#bae6fd" stroke="#38bdf8" strokeWidth="3" />
                  <ellipse cx="45" cy="82" rx="20" ry="5" fill="#e0f2fe" stroke="none" opacity="0.6" /> {/* Блик на воде */}
                  
                  {/* Камушки вокруг лужи */}
                  <circle cx="15" cy="75" r="3" fill="#94a3b8" stroke="none" />
                  <circle cx="85" cy="85" r="2" fill="#64748b" stroke="none" />
                  <circle cx="75" cy="70" r="2.5" fill="#94a3b8" stroke="none" />
                  
                  {/* Птица (Воробей или голубь), наклонившаяся к воде */}
                  <path d="M 35 60 C 20 50 30 20 45 35 C 55 45 65 50 65 70 C 55 75 40 75 35 60 Z" fill="#9ca3af" stroke="#475569" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Крыло */}
                  <path d="M 38 45 C 45 35 60 50 55 65" fill="#f1f5f9" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Голова и клюв у воды */}
                  <circle cx="65" cy="68" r="8" fill="#9ca3af" stroke="#475569" strokeWidth="3" />
                  <path d="M 72 70 L 80 75 L 70 75 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="68" cy="65" r="1.5" fill="#1f2937" stroke="none" />
                  
                  {/* Круги на воде от клюва */}
                  <path d="M 75 80 C 80 82 85 80 90 80" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 70 85 C 80 88 90 85 95 85" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Лапки */}
                  <path d="M 40 70 L 35 80 M 32 80 L 38 80" stroke="#d97706" strokeWidth="2" />
                  <path d="M 50 72 L 48 82 M 45 82 L 51 82" stroke="#d97706" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'potted-tree',
              title: 'Дерево в кадке',
              desc: 'растущее не в земле, а на улице',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Тротуарная плитка */}
                  <path d="M 10 90 L 90 90 M 30 95 L 70 95" stroke="#cbd5e1" strokeWidth="2" />
                  <path d="M 20 85 L 40 95 M 80 85 L 60 95" stroke="#cbd5e1" strokeWidth="2" />
                  
                  {/* Деревянная кадка (Большой горшок) */}
                  <polygon points="30,85 70,85 75,55 25,55" fill="#fcd34d" stroke="#b45309" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="25" y1="55" x2="75" y2="55" stroke="#b45309" strokeWidth="4" />
                  
                  {/* Доски на кадке */}
                  <line x1="40" y1="55" x2="43" y2="85" stroke="#b45309" strokeWidth="2" />
                  <line x1="50" y1="55" x2="50" y2="85" stroke="#b45309" strokeWidth="2" />
                  <line x1="60" y1="55" x2="57" y2="85" stroke="#b45309" strokeWidth="2" />
                  
                  {/* Металлические обручи */}
                  <line x1="28" y1="65" x2="72" y2="65" stroke="#1f2937" strokeWidth="3" />
                  <line x1="29" y1="75" x2="71" y2="75" stroke="#1f2937" strokeWidth="3" />
                  
                  {/* Земля в кадке */}
                  <ellipse cx="50" cy="55" rx="25" ry="5" fill="#78350f" stroke="#451a03" strokeWidth="2" />
                  
                  {/* Ствол дерева */}
                  <path d="M 50 55 L 50 25 M 50 40 L 60 30 M 50 35 L 40 25" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Крона дерева (Пушистая зелень) */}
                  <path d="M 50 10 C 20 10 20 40 35 45 C 35 55 65 55 65 45 C 80 40 80 10 50 10 Z" fill="#22c55e" stroke="#16a34a" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 40 15 C 30 15 30 30 40 30" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 60 20 C 70 20 70 35 60 35" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'moss',
              title: 'Мох',
              desc: 'в трещине старой стены',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Старая каменная кладка */}
                  <path d="M 10 30 L 40 30 M 60 30 L 90 30" stroke="#94a3b8" strokeWidth="3" />
                  <path d="M 10 65 L 45 65 M 65 65 L 90 65" stroke="#94a3b8" strokeWidth="3" />
                  <path d="M 30 10 L 30 30 M 80 10 L 80 30" stroke="#94a3b8" strokeWidth="3" />
                  <path d="M 20 30 L 20 65 M 70 30 L 70 65" stroke="#94a3b8" strokeWidth="3" />
                  <path d="M 40 65 L 40 90 M 85 65 L 85 90" stroke="#94a3b8" strokeWidth="3" />
                  
                  {/* Глубокая извилистая трещина */}
                  <path d="M 45 10 L 50 25 L 42 40 L 55 55 L 48 70 L 58 90" fill="none" stroke="#1f2937" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Пушистый мох, растущий из трещины */}
                  <path d="M 45 25 Q 35 30 42 40 Q 55 35 50 25 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 42 40 Q 30 45 45 55 Q 60 45 42 40 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 55 55 Q 70 60 50 70 Q 40 65 55 55 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 48 70 Q 40 80 55 85 Q 65 75 48 70 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Споры мха (маленькие точки и антеннки) */}
                  <circle cx="40" cy="48" r="1.5" fill="#fef08a" stroke="none" />
                  <circle cx="55" cy="42" r="1.5" fill="#fef08a" stroke="none" />
                  <circle cx="48" cy="62" r="1.5" fill="#fef08a" stroke="none" />
                  <path d="M 38 48 L 35 45 M 57 42 L 60 38 M 50 62 L 53 58" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'reflection',
              title: 'Отражение',
              desc: 'здания в окне или витрине',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Оконная рама */}
                  <rect x="15" y="15" width="70" height="70" rx="2" fill="#1e293b" stroke="#0f172a" strokeWidth="4" />
                  <rect x="20" y="20" width="60" height="60" fill="#0ea5e9" stroke="#0284c7" strokeWidth="2" />
                  
                  {/* Отражение (Искаженные здания и облака) */}
                  {/* Здание 1 */}
                  <path d="M 30 80 L 30 40 L 45 40 L 45 80 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" strokeLinejoin="round" />
                  <rect x="34" y="45" width="3" height="5" fill="#bae6fd" stroke="none" />
                  <rect x="34" y="55" width="3" height="5" fill="#bae6fd" stroke="none" />
                  
                  {/* Здание 2 (С башней) */}
                  <path d="M 45 80 L 45 50 L 55 30 L 65 50 L 65 80 Z" fill="#7dd3fc" stroke="#0284c7" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="55" cy="55" r="4" fill="#e0f2fe" stroke="none" />
                  
                  {/* Здание 3 */}
                  <path d="M 65 80 L 65 45 L 75 45 L 75 80 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Отражение облака */}
                  <path d="M 30 30 C 30 25 40 25 40 30 C 45 30 45 35 40 35 L 30 35 C 25 35 25 30 30 30 Z" fill="#e0f2fe" stroke="none" opacity="0.7" />
                  
                  {/* Диагональные блики на самом стекле (поверх отражения) */}
                  <line x1="25" y1="60" x2="60" y2="25" stroke="#ffffff" strokeWidth="8" strokeOpacity="0.5" strokeLinecap="round" />
                  <line x1="35" y1="80" x2="80" y2="35" stroke="#ffffff" strokeWidth="4" strokeOpacity="0.4" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'mitten',
              title: 'Забытая вещь',
              desc: 'перчатка на заборе или монетка',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Забор (кованая ограда или штакетник) */}
                  <line x1="25" y1="90" x2="25" y2="40" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
                  <line x1="50" y1="90" x2="50" y2="30" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
                  <line x1="75" y1="90" x2="75" y2="40" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
                  <line x1="10" y1="60" x2="90" y2="60" stroke="#475569" strokeWidth="4" />
                  <line x1="10" y1="80" x2="90" y2="80" stroke="#475569" strokeWidth="4" />
                  
                  {/* Наконечник центрального прута */}
                  <path d="M 50 30 L 45 20 L 50 10 L 55 20 Z" fill="#94a3b8" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Яркая красная вязаная варежка, надетая на прут */}
                  <path d="M 38 60 L 38 45 C 38 35 62 35 62 45 L 62 60 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 62 50 C 70 50 70 40 65 35 C 60 35 60 45 62 50 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" /> {/* Большой палец */}
                  
                  {/* Резинка варежки */}
                  <rect x="36" y="60" width="28" height="10" rx="2" fill="#fca5a5" stroke="#b91c1c" strokeWidth="3" />
                  <line x1="42" y1="60" x2="42" y2="70" stroke="#b91c1c" strokeWidth="2" />
                  <line x1="50" y1="60" x2="50" y2="70" stroke="#b91c1c" strokeWidth="2" />
                  <line x1="58" y1="60" x2="58" y2="70" stroke="#b91c1c" strokeWidth="2" />
                  
                  {/* Вязаный узор (снежинка) */}
                  <path d="M 50 40 L 50 50 M 45 45 L 55 45 M 47 42 L 53 48 M 47 48 L 53 42" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'love-lock',
              title: 'Замок',
              desc: 'на мосту или ограде (символ любви)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Металлическая сетка моста или решетка */}
                  <line x1="10" y1="20" x2="90" y2="80" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                  <line x1="10" y1="50" x2="60" y2="90" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                  <line x1="40" y1="10" x2="90" y2="50" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                  
                  <line x1="90" y1="20" x2="10" y2="80" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                  <line x1="60" y1="10" x2="10" y2="50" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                  <line x1="90" y1="50" x2="40" y2="90" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Дужка замка (застегнута на перекрестье) */}
                  <path d="M 40 45 L 40 30 C 40 15 60 15 60 30 L 60 45" fill="none" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Корпус замка (Золотой, в форме сердца) */}
                  <path d="M 50 45 C 50 45 40 40 35 48 C 30 55 35 65 50 75 C 65 65 70 55 65 48 C 60 40 50 45 50 45 Z" fill="#facc15" stroke="#b45309" strokeWidth="3" strokeLinejoin="round" style={{ filter: 'drop-shadow(2px 4px 4px rgba(0,0,0,0.2))' }} />
                  
                  {/* Замочная скважина */}
                  <circle cx="50" cy="55" r="3" fill="#1f2937" stroke="none" />
                  <path d="M 48 55 L 52 55 L 51 62 L 49 62 Z" fill="#1f2937" stroke="none" />
                  
                  {/* Имена влюбленных (нацарапанные) */}
                  <path d="M 40 50 C 42 48 45 52 42 55" fill="none" stroke="#b45309" strokeWidth="1" /> {/* Буква */}
                  <path d="M 55 50 L 58 55 M 58 50 L 55 55" stroke="#b45309" strokeWidth="1" /> {/* Буква Х */}
                </svg>
              )
            },
            {
              id: 'shadow',
              title: 'Тень от памятника',
              desc: 'похожая на что-то другое',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Брусчатка/Земля */}
                  <line x1="10" y1="80" x2="90" y2="80" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="20" y1="90" x2="80" y2="90" stroke="#cbd5e1" strokeWidth="2" />
                  
                  {/* Постамент памятника (Слева) */}
                  <path d="M 10 70 L 30 70 L 30 50 L 10 50 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 15 50 L 15 20 C 15 10 25 10 25 20 L 25 50" fill="#94a3b8" stroke="#475569" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Тень (вытянутая и причудливая, похожая на монстра или птицу) */}
                  <path d="M 30 70 L 80 65 C 90 60 85 85 70 85 C 60 85 40 75 30 75 Z" fill="#1f2937" stroke="none" opacity="0.3" />
                  
                  {/* Детали тени (Глаз монстра, когти) */}
                  <circle cx="75" cy="72" r="3" fill="#cbd5e1" stroke="none" opacity="0.8" /> {/* "Глаз" в тени */}
                  <path d="M 80 65 L 85 62 M 82 66 L 88 65" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
                  
                  {/* Солнце (источник света) */}
                  <circle cx="15" cy="15" r="5" fill="#fde047" stroke="none" style={{ filter: 'drop-shadow(0 0 5px #fde047)' }} />
                  <path d="M 25 15 L 35 15 M 15 25 L 15 35 M 22 22 L 30 30" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'window-flowers',
              title: 'Цветы',
              desc: 'на подоконнике снаружи дома',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Окно (стекло и рама) */}
                  <rect x="25" y="10" width="50" height="60" fill="#bae6fd" stroke="#0f172a" strokeWidth="4" />
                  <line x1="50" y1="10" x2="50" y2="70" stroke="#0f172a" strokeWidth="4" />
                  <line x1="25" y1="40" x2="75" y2="40" stroke="#0f172a" strokeWidth="4" />
                  
                  {/* Блики на окне */}
                  <line x1="30" y1="30" x2="45" y2="15" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                  <line x1="55" y1="60" x2="70" y2="45" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                  
                  {/* Внешний подоконник */}
                  <rect x="20" y="70" width="60" height="8" rx="2" fill="#cbd5e1" stroke="#475569" strokeWidth="3" />
                  
                  {/* Длинный ящик с цветами */}
                  <path d="M 25 70 L 30 85 L 70 85 L 75 70 Z" fill="#92400e" stroke="#78350f" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Густая зелень */}
                  <path d="M 25 70 C 20 60 35 50 45 60 C 55 45 70 55 75 70 Z" fill="#22c55e" stroke="#15803d" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 35 70 C 35 60 50 55 55 70" fill="#4ade80" stroke="#16a34a" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Яркие цветы (Петунии или герань) */}
                  <circle cx="35" cy="58" r="5" fill="#ec4899" stroke="#be185d" strokeWidth="2" />
                  <circle cx="45" cy="50" r="5" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
                  <circle cx="55" cy="58" r="4" fill="#a855f7" stroke="#7e22ce" strokeWidth="2" />
                  <circle cx="65" cy="62" r="5" fill="#ec4899" stroke="#be185d" strokeWidth="2" />
                  
                  {/* Свисающие плети */}
                  <path d="M 30 85 Q 35 95 30 100" fill="none" stroke="#15803d" strokeWidth="2" />
                  <path d="M 65 85 Q 60 95 65 100" fill="none" stroke="#15803d" strokeWidth="2" />
                  <circle cx="30" cy="95" r="2" fill="#22c55e" stroke="none" />
                  <circle cx="65" cy="95" r="2" fill="#22c55e" stroke="none" />
                </svg>
              )
            },
            {
              id: 'window-cat',
              title: 'Кот в окне',
              desc: 'первого этажа или в витрине',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Темная витрина или окно вечером */}
                  <rect x="15" y="15" width="70" height="70" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="4" />
                  
                  {/* Силуэт кота, смотрящего на улицу */}
                  <path d="M 50 85 C 50 65 40 60 35 70 C 30 80 30 85 30 85 Z" fill="#0f172a" stroke="#000" strokeWidth="2" strokeLinejoin="round" /> {/* Тело */}
                  <circle cx="45" cy="60" r="8" fill="#0f172a" stroke="#000" strokeWidth="2" /> {/* Голова */}
                  
                  {/* Ушки кота */}
                  <polygon points="40,55 38,48 45,53" fill="#0f172a" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
                  <polygon points="50,55 52,48 45,53" fill="#0f172a" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Хвост (Изогнут крючком) */}
                  <path d="M 50 80 C 60 80 65 70 60 60" fill="none" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Глаза (Светятся в темноте) */}
                  <circle cx="42" cy="58" r="2" fill="#fef08a" stroke="none" style={{ filter: 'drop-shadow(0 0 2px #fef08a)' }} />
                  <circle cx="48" cy="58" r="2" fill="#fef08a" stroke="none" style={{ filter: 'drop-shadow(0 0 2px #fef08a)' }} />
                  <line x1="42" y1="57" x2="42" y2="59" stroke="#000" strokeWidth="1" /> {/* Зрачок */}
                  <line x1="48" y1="57" x2="48" y2="59" stroke="#000" strokeWidth="1" /> {/* Зрачок */}
                  
                  {/* Рама витрины/окна (передний план) */}
                  <rect x="10" y="85" width="80" height="10" fill="#475569" stroke="#1f2937" strokeWidth="3" />
                  <line x1="15" y1="15" x2="15" y2="85" stroke="#475569" strokeWidth="4" />
                  <line x1="85" y1="15" x2="85" y2="85" stroke="#475569" strokeWidth="4" />
                </svg>
              )
            },
            {
              id: 'white-dove',
              title: 'Белый голубь',
              desc: 'среди обычных серых голубей',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Серые голуби на заднем плане (Силуэты) */}
                  <path d="M 15 50 C 15 40 25 40 30 45 C 35 50 35 60 25 60 C 15 60 10 55 15 50 Z" fill="#64748b" stroke="#475569" strokeWidth="2" />
                  <circle cx="28" cy="42" r="4" fill="#64748b" stroke="#475569" strokeWidth="2" />
                  <path d="M 32 42 L 35 44 L 32 46 Z" fill="#475569" stroke="none" />
                  
                  <path d="M 75 45 C 75 35 85 35 90 40 C 95 45 95 55 85 55 C 75 55 70 50 75 45 Z" fill="#64748b" stroke="#475569" strokeWidth="2" />
                  <circle cx="88" cy="37" r="4" fill="#64748b" stroke="#475569" strokeWidth="2" />
                  <path d="M 92 37 L 95 39 L 92 41 Z" fill="#475569" stroke="none" />
                  
                  {/* Главный герой - Белый голубь (На переднем плане) */}
                  <path d="M 35 75 C 35 60 50 60 60 70 C 70 80 70 95 50 95 C 30 95 25 85 35 75 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" strokeLinejoin="round" />
                  <circle cx="55" cy="62" r="7" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" />
                  
                  {/* Крыло белого голубя */}
                  <path d="M 45 75 C 55 75 65 85 60 90" fill="none" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Клюв и глаз */}
                  <path d="M 62 62 L 68 65 L 62 68 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="58" cy="60" r="1.5" fill="#ef4444" stroke="none" /> {/* Красный/оранжевый глаз голубя */}
                  
                  {/* Лапки */}
                  <path d="M 45 95 L 45 100 M 42 100 L 48 100" stroke="#ef4444" strokeWidth="2" />
                  <path d="M 55 95 L 55 100 M 52 100 L 58 100" stroke="#ef4444" strokeWidth="2" />
                  
                  {/* Крошки хлеба на земле */}
                  <circle cx="70" cy="80" r="1.5" fill="#fcd34d" stroke="none" />
                  <circle cx="75" cy="85" r="1" fill="#fcd34d" stroke="none" />
                  <circle cx="80" cy="78" r="1.5" fill="#fcd34d" stroke="none" />
                </svg>
              )
            }
          ]
        }
    ]
  },
  {
    id: 'ch2',
    title: 'Городской парк',
    emoji: '🌳',
    superTasks: [
       { id: 'ch2-st1', type: '🍀 Удача', text: 'Найди четырехлистный клевер.' },
       { id: 'ch2-st2', type: '👂 Звук', text: 'Дятел, стучащий по дереву.' },
	   { id: 'ch2-st3', type: '🖐️ Текстура', text: 'Найди самую гладкую гальку и самую колючую еловую ветку.' },
	   { id: 'ch2-st4', type: '👃 Запах', text: 'Запах скошенной травы или цветущей липы.' }
    ],
    sections: [
             {
          id: 'ch2-water',
          title: '🦆 Жизнь у воды',
          subtitle: 'Пруд или ручей',
          theme: 'green',
          items: [
            {
              id: 'duck',
              title: 'Утка',
              desc: 'ныряющая за едой (виден только хвост)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Вода (волны и круги) */}
                  <path d="M 10 70 Q 25 60 40 70 T 70 70 T 90 70" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
                  <ellipse cx="50" cy="70" rx="25" ry="6" fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.6" />
                  <ellipse cx="50" cy="74" rx="35" ry="8" fill="none" stroke="#93c5fd" strokeWidth="2" opacity="0.4" />
                  
                  {/* Задняя часть утки (хвост торчит из воды) */}
                  <path d="M 35 70 C 35 40 65 40 65 70" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 40 55 C 45 40 55 40 60 55" fill="#e2e8f0" stroke="none" />
                  
                  {/* Хвостик (перышки) */}
                  <path d="M 45 42 L 50 25 L 55 42 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Оранжевые лапки (смешно торчат вверх) */}
                  <path d="M 38 60 L 30 45 M 26 42 L 30 45 L 34 42" stroke="#f97316" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 62 60 L 70 45 M 66 42 L 70 45 L 74 42" stroke="#f97316" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Брызги */}
                  <circle cx="30" cy="65" r="2" fill="#60a5fa" stroke="none" />
                  <circle cx="70" cy="68" r="1.5" fill="#60a5fa" stroke="none" />
                  <circle cx="65" cy="62" r="1" fill="#60a5fa" stroke="none" />
                </svg>
              )
            },
            {
              id: 'drake',
              title: 'Селезень',
              desc: 'с яркой зеленой головой',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Вода */}
                  <path d="M 15 75 Q 35 65 50 75 T 85 75" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 25 82 Q 45 75 65 82" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                  
                  {/* Тело селезня (Серо-коричневое) */}
                  <path d="M 30 70 C 15 55 35 45 45 45 L 60 45 C 75 45 80 65 65 70 Z" fill="#9ca3af" stroke="#4b5563" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Крыло (с синим "зеркальцем") */}
                  <path d="M 35 55 C 45 48 65 55 60 65" fill="#64748b" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
                  <rect x="45" y="55" width="10" height="6" fill="#1d4ed8" stroke="#1e3a8a" strokeWidth="2" transform="rotate(-15 45 55)" />
                  
                  {/* Грудь (Коричневая) */}
                  <path d="M 60 45 C 75 45 80 60 70 68" fill="#78350f" stroke="none" />
                  
                  {/* Шея и белое кольцо */}
                  <path d="M 65 48 L 65 30 L 75 30 L 75 48 Z" fill="#22c55e" stroke="none" />
                  <line x1="63" y1="45" x2="77" y2="45" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Зеленая голова */}
                  <circle cx="70" cy="25" r="10" fill="#22c55e" stroke="#16a34a" strokeWidth="3" />
                  <circle cx="72" cy="23" r="1.5" fill="#000" stroke="none" /> {/* Глаз */}
                  
                  {/* Желтый клюв */}
                  <path d="M 78 26 L 90 28 L 76 30 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Хвостик-завитушка */}
                  <path d="M 25 55 C 20 45 10 50 15 55" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'willow',
              title: 'Ива',
              desc: 'ветви которой касаются воды',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Вода */}
                  <path d="M 10 90 L 90 90" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 20 95 L 80 95" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
                  <ellipse cx="50" cy="90" rx="30" ry="4" fill="none" stroke="#93c5fd" strokeWidth="2" opacity="0.6" />
                  
                  {/* Мощный ствол ивы */}
                  <path d="M 40 90 C 40 60 45 30 50 10 C 55 30 60 60 60 90 Z" fill="#78350f" stroke="#451a03" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 45 70 C 45 50 48 30 50 15 M 55 75 C 53 50 52 30 50 20" stroke="#451a03" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                  
                  {/* Свисающие ветви (плакучая ива) */}
                  <g stroke="#15803d" strokeWidth="3" strokeLinecap="round">
                    {/* Левая сторона */}
                    <path d="M 50 20 Q 30 20 20 60 Q 15 75 18 88" fill="none" />
                    <path d="M 50 30 Q 35 30 28 65 Q 25 75 28 85" fill="none" />
                    <path d="M 50 40 Q 40 40 38 65 Q 35 75 38 85" fill="none" />
                    {/* Правая сторона */}
                    <path d="M 50 20 Q 70 20 80 60 Q 85 75 82 88" fill="none" />
                    <path d="M 50 30 Q 65 30 72 65 Q 75 75 72 85" fill="none" />
                    <path d="M 50 40 Q 60 40 62 65 Q 65 75 62 85" fill="none" />
                  </g>
                  
                  {/* Листочки-штрихи */}
                  <g stroke="#22c55e" strokeWidth="2" strokeLinecap="round">
                    <line x1="20" y1="50" x2="20" y2="55" /><line x1="18" y1="65" x2="18" y2="70" /><line x1="28" y1="55" x2="28" y2="60" />
                    <line x1="38" y1="50" x2="38" y2="55" /><line x1="38" y1="75" x2="38" y2="80" /><line x1="28" y1="75" x2="28" y2="80" />
                    <line x1="80" y1="50" x2="80" y2="55" /><line x1="82" y1="65" x2="82" y2="70" /><line x1="72" y1="55" x2="72" y2="60" />
                    <line x1="62" y1="50" x2="62" y2="55" /><line x1="62" y1="75" x2="62" y2="80" /><line x1="72" y1="75" x2="72" y2="80" />
                  </g>
                  
                  {/* Рябь от веток, касающихся воды */}
                  <ellipse cx="20" cy="90" rx="4" ry="1" fill="none" stroke="#2563eb" strokeWidth="1.5" />
                  <ellipse cx="80" cy="90" rx="4" ry="1" fill="none" stroke="#2563eb" strokeWidth="1.5" />
                </svg>
              )
            },
            {
              id: 'bridge',
              title: 'Мостик',
              desc: 'горбатый, через ручей',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Вода ручья */}
                  <path d="M 5 85 Q 25 80 50 85 T 95 85" stroke="#3b82f6" strokeWidth="4" />
                  <path d="M 15 92 Q 35 88 50 92 T 85 92" stroke="#60a5fa" strokeWidth="2" opacity="0.7" />
                  
                  {/* Отражение мостика в воде */}
                  <path d="M 20 85 Q 50 105 80 85" fill="none" stroke="#9ca3af" strokeWidth="3" strokeDasharray="4 4" opacity="0.5" />
                  
                  {/* Каменный горбатый мостик (Арка) */}
                  <path d="M 10 80 Q 50 30 90 80 L 75 80 Q 50 50 25 80 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Кирпичная/каменная кладка (текстура) */}
                  <path d="M 20 70 Q 50 40 80 70" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M 25 76 Q 50 48 75 76" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="30" y1="58" x2="33" y2="65" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="50" y1="40" x2="50" y2="48" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="70" y1="58" x2="67" y2="65" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Перила (кованые или деревянные) */}
                  <path d="M 10 65 Q 50 15 90 65" fill="none" stroke="#1f2937" strokeWidth="4" />
                  <line x1="15" y1="60" x2="15" y2="73" stroke="#1f2937" strokeWidth="3" />
                  <line x1="30" y1="43" x2="30" y2="60" stroke="#1f2937" strokeWidth="3" />
                  <line x1="50" y1="28" x2="50" y2="40" stroke="#1f2937" strokeWidth="3" />
                  <line x1="70" y1="43" x2="70" y2="60" stroke="#1f2937" strokeWidth="3" />
                  <line x1="85" y1="60" x2="85" y2="73" stroke="#1f2937" strokeWidth="3" />
                  
                  {/* Зелень на берегах */}
                  <path d="M 5 80 C 10 70 20 70 20 80 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 80 80 C 80 70 90 70 95 80 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              )
            },
            {
              id: 'reeds',
              title: 'Камыши',
              desc: 'коричневые «сосиски» на стеблях',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Вода у основания */}
                  <path d="M 15 90 L 85 90" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 30 85 L 70 85" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Листья рогоза (Длинные, острые, изогнутые) */}
                  <path d="M 50 90 Q 30 60 20 30" fill="none" stroke="#15803d" strokeWidth="4" />
                  <path d="M 45 90 Q 20 70 10 50" fill="none" stroke="#16a34a" strokeWidth="3" />
                  <path d="M 55 90 Q 75 60 85 40" fill="none" stroke="#15803d" strokeWidth="4" />
                  <path d="M 60 90 Q 80 75 90 60" fill="none" stroke="#16a34a" strokeWidth="3" />
                  <path d="M 48 90 Q 40 50 45 20" fill="none" stroke="#15803d" strokeWidth="4" />
                  <path d="M 52 90 Q 60 40 55 15" fill="none" stroke="#16a34a" strokeWidth="4" />
                  
                  {/* Сами камыши ("Сосиски") */}
                  <rect x="42" y="25" width="8" height="25" rx="4" fill="#78350f" stroke="#451a03" strokeWidth="2" />
                  <rect x="52" y="20" width="8" height="28" rx="4" fill="#78350f" stroke="#451a03" strokeWidth="2" />
                  
                  {/* Светлые макушки-"свечки" над рогозом */}
                  <line x1="46" y1="25" x2="46" y2="15" stroke="#ca8a04" strokeWidth="2" />
                  <line x1="56" y1="20" x2="56" y2="10" stroke="#ca8a04" strokeWidth="2" />
                  
                  {/* Пух, летящий от созревшего камыша */}
                  <circle cx="35" cy="20" r="1.5" fill="#fcd34d" stroke="none" />
                  <circle cx="65" cy="15" r="1" fill="#fcd34d" stroke="none" />
                  <circle cx="70" cy="25" r="1.5" fill="#fcd34d" stroke="none" />
                </svg>
              )
            },
            {
              id: 'lily',
              title: 'Кувшинка',
              desc: 'или лилия на поверхности воды',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Вода */}
                  <path d="M 10 75 Q 30 70 50 75 T 90 75" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 20 85 Q 40 80 60 85 T 80 85" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
                  
                  {/* Зеленый лист кувшинки (с вырезом) */}
                  <path d="M 50 75 C 20 75 20 50 50 50 C 80 50 80 75 50 75 Z" fill="#22c55e" stroke="#14532d" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 50 65 L 35 72" stroke="#14532d" strokeWidth="3" strokeLinecap="round" /> {/* Вырез листа */}
                  
                  {/* Прожилки листа */}
                  <path d="M 50 65 L 50 50 M 50 65 L 65 55 M 50 65 L 35 55" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Цветок кувшинки (Розовый/Белый) */}
                  <g stroke="#be185d" strokeWidth="2" strokeLinejoin="round">
                    {/* Задние лепестки */}
                    <path d="M 45 55 L 35 35 L 50 45 Z" fill="#fbcfe8" />
                    <path d="M 55 55 L 65 35 L 50 45 Z" fill="#fbcfe8" />
                    <path d="M 50 55 L 50 25 L 45 40 Z" fill="#fbcfe8" />
                    <path d="M 50 55 L 50 25 L 55 40 Z" fill="#fbcfe8" />
                    
                    {/* Передние лепестки */}
                    <path d="M 50 55 L 40 40 L 50 50 Z" fill="#f472b6" />
                    <path d="M 50 55 L 60 40 L 50 50 Z" fill="#f472b6" />
                    <path d="M 50 55 L 50 35 L 45 45 Z" fill="#f472b6" />
                    <path d="M 50 55 L 50 35 L 55 45 Z" fill="#f472b6" />
                  </g>
                  
                  {/* Желтая серединка */}
                  <circle cx="50" cy="50" r="3" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
                </svg>
              )
            },
            {
              id: 'fisherman',
              title: 'Рыбак',
              desc: 'со складным стульчиком',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Берег и вода */}
                  <path d="M 10 85 L 45 85" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 55 85 Q 75 80 95 85" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Складной стульчик (X-образные ножки) */}
                  <line x1="20" y1="85" x2="35" y2="60" stroke="#4b5563" strokeWidth="3" strokeLinecap="round" />
                  <line x1="35" y1="85" x2="20" y2="60" stroke="#4b5563" strokeWidth="3" strokeLinecap="round" />
                  <line x1="18" y1="60" x2="37" y2="60" stroke="#059669" strokeWidth="4" strokeLinecap="round" /> {/* Сиденье */}
                  
                  {/* Рыбак (сидит на стульчике) */}
                  <path d="M 28 60 L 28 45 C 28 35 38 35 38 45 L 38 60" fill="#38bdf8" stroke="#0369a1" strokeWidth="3" strokeLinejoin="round" /> {/* Туловище */}
                  <path d="M 38 60 L 45 60 L 45 75" stroke="#1e3a8a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /> {/* Нога */}
                  <circle cx="33" cy="30" r="7" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" /> {/* Голова */}
                  <path d="M 23 25 C 23 15 43 15 43 25 Z" fill="#22c55e" stroke="#14532d" strokeWidth="2" strokeLinejoin="round" /> {/* Панама */}
                  <path d="M 20 25 L 46 25" stroke="#14532d" strokeWidth="3" strokeLinecap="round" /> {/* Козырек */}
                  
                  {/* Руки и удочка */}
                  <path d="M 33 45 L 45 48" stroke="#0369a1" strokeWidth="4" strokeLinecap="round" /> {/* Рука */}
                  <line x1="20" y1="65" x2="80" y2="25" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" /> {/* Удилище */}
                  
                  {/* Леска и поплавок */}
                  <line x1="80" y1="25" x2="80" y2="85" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                  <ellipse cx="80" cy="85" rx="3" ry="8" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.5" /> {/* Поплавок красно-белый */}
                  <line x1="77" y1="85" x2="83" y2="85" stroke="#fff" strokeWidth="2" />
                  
                  {/* Круги на воде от поплавка */}
                  <ellipse cx="80" cy="85" rx="10" ry="2" fill="none" stroke="#60a5fa" strokeWidth="1.5" />
                </svg>
              )
            },
            {
              id: 'boat',
              title: 'Лодка',
              desc: 'или катамаран (в форме лебедя?)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Вода */}
                  <path d="M 5 80 Q 25 75 50 80 T 95 80" stroke="#3b82f6" strokeWidth="4" />
                  <path d="M 15 88 Q 35 83 60 88 T 90 88" stroke="#60a5fa" strokeWidth="2" opacity="0.7" />
                  
                  {/* Катамаран-лебедь */}
                  {/* Тело лебедя (лодка) */}
                  <path d="M 15 80 C 10 65 20 50 45 50 L 75 50 C 90 50 90 65 85 80 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Изогнутая шея и голова */}
                  <path d="M 75 50 C 85 45 90 30 80 20 C 70 10 60 20 65 35 C 68 45 65 50 55 50" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" strokeLinejoin="round" />
                  <circle cx="74" cy="22" r="1.5" fill="#1f2937" stroke="none" /> {/* Глаз */}
                  <path d="M 83 23 L 90 28 L 81 27 Z" fill="#f97316" stroke="#c2410c" strokeWidth="2" strokeLinejoin="round" /> {/* Оранжевый клюв */}
                  <path d="M 83 23 L 80 27" stroke="#1f2937" strokeWidth="1.5" /> {/* Черная полоска у клюва */}
                  
                  {/* Крыша-навес (Тент от солнца) */}
                  <path d="M 25 25 C 35 15 55 15 65 25 Z" fill="#f472b6" stroke="#db2777" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="30" y1="25" x2="30" y2="50" stroke="#94a3b8" strokeWidth="3" /> {/* Задняя стойка */}
                  <line x1="60" y1="25" x2="60" y2="50" stroke="#94a3b8" strokeWidth="3" /> {/* Передняя стойка */}
                  
                  {/* Сиденья внутри */}
                  <path d="M 35 50 L 35 40 L 45 40" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 55 50 L 55 40 L 45 40" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Педали (колесо сбоку) */}
                  <circle cx="45" cy="65" r="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="45" y1="57" x2="45" y2="73" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="37" y1="65" x2="53" y2="65" stroke="#94a3b8" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'lifebuoy',
              title: 'Спасательный круг',
              desc: 'на стойке у берега',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Песок/Земля и вода на фоне */}
                  <path d="M 10 90 L 90 90" stroke="#d97706" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 15 80 L 85 80" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                  
                  {/* Деревянный столбик (стойка) */}
                  <rect x="44" y="20" width="12" height="70" rx="2" fill="#92400e" stroke="#78350f" strokeWidth="3" />
                  <path d="M 44 30 L 56 30 M 44 50 L 56 50 M 44 70 L 56 70" stroke="#78350f" strokeWidth="2" />
                  
                  {/* Крючок */}
                  <path d="M 50 25 L 50 35 L 55 35" fill="none" stroke="#475569" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Спасательный круг (Бело-красный) */}
                  <circle cx="50" cy="55" r="25" fill="#f8fafc" stroke="#1f2937" strokeWidth="3" style={{ filter: 'drop-shadow(2px 4px 4px rgba(0,0,0,0.2))' }} />
                  <circle cx="50" cy="55" r="12" fill="#f1f5f9" stroke="#1f2937" strokeWidth="3" />
                  
                  {/* Красные полосы на круге */}
                  <g fill="#ef4444" stroke="#1f2937" strokeWidth="2">
                    <path d="M 32 37 L 41 46 C 44 44 47 43 50 43 L 50 30 C 43 30 37 32 32 37 Z" />
                    <path d="M 68 37 L 59 46 C 56 44 53 43 50 43 L 50 30 C 57 30 63 32 68 37 Z" />
                    <path d="M 32 73 L 41 64 C 44 66 47 67 50 67 L 50 80 C 43 80 37 78 32 73 Z" />
                    <path d="M 68 73 L 59 64 C 56 66 53 67 50 67 L 50 80 C 57 80 63 78 68 73 Z" />
                  </g>
                  
                  {/* Веревка (Трос по периметру) */}
                  <path d="M 20 55 C 20 30 80 30 80 55 C 80 80 20 80 20 55" fill="none" stroke="#fcd34d" strokeWidth="2" strokeDasharray="5 3" />
                  
                  {/* Свисающая часть веревки */}
                  <path d="M 30 70 C 25 85 45 85 45 75" fill="none" stroke="#fcd34d" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'ripples',
              title: 'Круги на воде',
              desc: 'от брошенного камешка',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Вода */}
                  <path d="M 10 85 Q 25 80 40 85 T 90 85" stroke="#93c5fd" strokeWidth="2" opacity="0.6" />
                  <path d="M 20 15 Q 35 20 50 15 T 80 15" stroke="#93c5fd" strokeWidth="2" opacity="0.6" />
                  
                  {/* Расходящиеся концентрические круги (эллипсы) */}
                  <g stroke="#3b82f6" strokeWidth="3" opacity="0.9">
                    <ellipse cx="50" cy="50" rx="40" ry="12" strokeDasharray="10 4 5 4" />
                    <ellipse cx="50" cy="50" rx="25" ry="7" strokeDasharray="8 3" />
                    <ellipse cx="50" cy="50" rx="10" ry="3" />
                  </g>
                  
                  {/* Падающий камешек и брызги */}
                  <path d="M 50 10 L 50 35" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" /> {/* Траектория падения */}
                  <circle cx="50" cy="40" r="2" fill="#64748b" stroke="none" /> {/* Камешек почти в воде */}
                  
                  {/* Капли брызг вверх */}
                  <path d="M 50 48 L 50 43 M 45 47 L 42 42 M 55 47 L 58 42" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="50" cy="38" r="1.5" fill="#60a5fa" stroke="none" />
                  <circle cx="40" cy="39" r="1" fill="#60a5fa" stroke="none" />
                  <circle cx="60" cy="39" r="1" fill="#60a5fa" stroke="none" />
                  
                  {/* Блики на воде */}
                  <ellipse cx="70" cy="50" rx="5" ry="1" fill="#fff" stroke="none" opacity="0.5" />
                  <ellipse cx="30" cy="52" rx="3" ry="1" fill="#fff" stroke="none" opacity="0.5" />
                </svg>
              )
            }
          ]
        },
        {
          id: 'ch2-cozy',
          title: '🪑 Архитектура уюта',
          subtitle: 'Скамейки и фонари',
          theme: 'amber',
          items: [
            {
              id: 'classic-bench',
              title: 'Скамейка',
              desc: 'классическая, со спинкой',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Чугунные боковины (ножки и подлокотники) */}
                  <path d="M 20 85 L 20 60 C 20 40 10 40 10 30" fill="none" stroke="#1f2937" strokeWidth="4" />
                  <path d="M 80 85 L 80 60 C 80 40 90 40 90 30" fill="none" stroke="#1f2937" strokeWidth="4" />
                  
                  {/* Завитушки чугуна */}
                  <circle cx="10" cy="30" r="3" fill="#1f2937" stroke="none" />
                  <circle cx="90" cy="30" r="3" fill="#1f2937" stroke="none" />
                  <path d="M 20 60 C 10 60 15 70 25 70" fill="none" stroke="#1f2937" strokeWidth="3" />
                  <path d="M 80 60 C 90 60 85 70 75 70" fill="none" stroke="#1f2937" strokeWidth="3" />
                  <line x1="20" y1="65" x2="15" y2="85" stroke="#1f2937" strokeWidth="4" />
                  <line x1="80" y1="65" x2="85" y2="85" stroke="#1f2937" strokeWidth="4" />
                  
                  {/* Деревянные рейки (Сиденье) */}
                  <line x1="18" y1="60" x2="82" y2="60" stroke="#b45309" strokeWidth="5" strokeLinecap="round" />
                  <line x1="16" y1="66" x2="84" y2="66" stroke="#b45309" strokeWidth="5" strokeLinecap="round" />
                  
                  {/* Деревянные рейки (Спинка) */}
                  <line x1="18" y1="50" x2="82" y2="50" stroke="#92400e" strokeWidth="5" strokeLinecap="round" />
                  <line x1="16" y1="42" x2="84" y2="42" stroke="#92400e" strokeWidth="5" strokeLinecap="round" />
                  <line x1="14" y1="34" x2="86" y2="34" stroke="#92400e" strokeWidth="5" strokeLinecap="round" />
                  
                  {/* Опавшие осенние листья под скамейкой */}
                  <path d="M 30 90 Q 33 87 35 90 Q 33 93 30 90 Z" fill="#ea580c" stroke="none" />
                  <path d="M 65 88 Q 68 85 70 88 Q 68 91 65 88 Z" fill="#facc15" stroke="none" />
                </svg>
              )
            },
            {
              id: 'log-bench',
              title: 'Бревно',
              desc: 'грубая скамейка без спинки',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Трава у основания */}
                  <path d="M 15 85 Q 20 70 25 85 T 35 85 T 45 85" stroke="#22c55e" strokeWidth="2" fill="none" />
                  <path d="M 65 85 Q 70 75 75 85 T 85 85" stroke="#22c55e" strokeWidth="2" fill="none" />
                  
                  {/* Пеньки-опоры */}
                  <path d="M 25 85 L 25 65 M 35 85 L 35 65 M 65 85 L 65 65 M 75 85 L 75 65" stroke="#78350f" strokeWidth="6" />
                  <ellipse cx="30" cy="65" rx="5" ry="2" fill="#d97706" stroke="#78350f" strokeWidth="2" />
                  <ellipse cx="70" cy="65" r="5" ry="2" fill="#d97706" stroke="#78350f" strokeWidth="2" />
                  
                  {/* Огромное бревно (Сиденье) */}
                  <path d="M 20 45 L 80 45 C 85 45 85 65 80 65 L 20 65 C 15 65 15 45 20 45 Z" fill="#fcd34d" stroke="#92400e" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Спил бревна (слева) с годовыми кольцами */}
                  <ellipse cx="20" cy="55" rx="5" ry="10" fill="#fef3c7" stroke="#92400e" strokeWidth="3" />
                  <ellipse cx="20" cy="55" rx="2" ry="5" fill="none" stroke="#d97706" strokeWidth="2" />
                  
                  {/* Фактура коры и трещины на бревне */}
                  <path d="M 30 50 L 50 50 M 60 50 L 75 50" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 40 58 L 70 58" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 50 50 L 55 55" stroke="#b45309" strokeWidth="2" strokeLinecap="round" /> {/* Трещина */}
                  
                  {/* Маленький грибочек у пенька */}
                  <path d="M 80 85 L 80 80" stroke="#fcd34d" strokeWidth="2" />
                  <path d="M 77 80 Q 80 77 83 80 Z" fill="#ef4444" stroke="none" />
                </svg>
              )
            },
            {
              id: 'circular-bench',
              title: 'Круговая скамья',
              desc: 'вокруг ствола дерева',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ствол могучего дерева в центре */}
                  <path d="M 40 80 C 40 60 45 40 45 10 L 55 10 C 55 40 60 60 60 80 Z" fill="#78350f" stroke="#451a03" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 45 40 L 45 60 M 55 30 L 55 50 M 50 20 L 50 70" stroke="#451a03" strokeWidth="2" opacity="0.6" /> {/* Кора */}
                  
                  {/* Листва (Крона сверху) */}
                  <path d="M 20 15 C 20 -5 80 -5 80 15 C 95 20 90 40 75 35 C 70 45 30 45 25 35 C 10 40 5 20 20 15 Z" fill="#22c55e" stroke="#16a34a" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Круговая деревянная скамья (в перспективе - шестигранник) */}
                  {/* Задняя часть скамьи */}
                  <path d="M 25 60 L 40 55 L 60 55 L 75 60" fill="none" stroke="#b45309" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Передняя часть скамьи */}
                  <polygon points="25,60 35,70 65,70 75,60 60,55 40,55" fill="#fcd34d" stroke="#b45309" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Рейки сиденья (детализация) */}
                  <line x1="30" y1="65" x2="70" y2="65" stroke="#d97706" strokeWidth="2" />
                  
                  {/* Ножки скамейки */}
                  <line x1="25" y1="60" x2="25" y2="75" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" />
                  <line x1="75" y1="60" x2="75" y2="75" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" />
                  <line x1="35" y1="70" x2="35" y2="85" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" />
                  <line x1="65" y1="70" x2="65" y2="85" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'gazebo',
              title: 'Беседка',
              desc: 'ротонда с колоннами',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Купол ротонды (Медный/Зеленый) */}
                  <path d="M 15 35 C 15 10 85 10 85 35 Z" fill="#34d399" stroke="#059669" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 50 12 L 50 35" stroke="#059669" strokeWidth="2" />
                  <path d="M 30 18 C 35 25 35 35 35 35" fill="none" stroke="#059669" strokeWidth="2" />
                  <path d="M 70 18 C 65 25 65 35 65 35" fill="none" stroke="#059669" strokeWidth="2" />
                  <circle cx="50" cy="10" r="3" fill="#facc15" stroke="#ca8a04" strokeWidth="2" /> {/* Шпиль */}
                  
                  {/* Карниз */}
                  <rect x="10" y="35" width="80" height="6" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" />
                  
                  {/* Задние колонны (Темнее) */}
                  <rect x="30" y="41" width="6" height="40" fill="#cbd5e1" stroke="none" />
                  <rect x="64" y="41" width="6" height="40" fill="#cbd5e1" stroke="none" />
                  
                  {/* Передние колонны (Светлые) */}
                  <rect x="18" y="41" width="8" height="44" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
                  <rect x="74" y="41" width="8" height="44" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
                  <rect x="46" y="41" width="8" height="44" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Перила между колоннами */}
                  <line x1="26" y1="65" x2="46" y2="65" stroke="#94a3b8" strokeWidth="3" />
                  <line x1="54" y1="65" x2="74" y2="65" stroke="#94a3b8" strokeWidth="3" />
                  
                  {/* Ступени основания */}
                  <path d="M 12 85 L 88 85 L 92 92 L 8 92 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 8 92 L 92 92 L 96 98 L 4 98 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                </svg>
              )
            },
            {
              id: 'stump-bin',
              title: 'Урна',
              desc: 'замаскированная под пень или камень',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Трава на фоне */}
                  <path d="M 15 85 L 20 75 L 25 85 M 75 85 L 80 70 L 85 85" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Урна в виде деревянного пня */}
                  <path d="M 30 25 C 30 15 70 15 70 25 L 75 85 C 75 95 25 95 25 85 Z" fill="#92400e" stroke="#78350f" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Внутреннее отверстие (дыра для мусора) */}
                  <ellipse cx="50" cy="25" rx="18" ry="6" fill="#1f2937" stroke="#451a03" strokeWidth="3" />
                  
                  {/* Фактура коры */}
                  <path d="M 35 35 L 32 75 M 45 35 L 43 85 M 55 35 L 57 85 M 65 35 L 68 75" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Сучок на пне */}
                  <ellipse cx="60" cy="55" rx="4" ry="6" fill="#78350f" stroke="#451a03" strokeWidth="2" transform="rotate(15 60 55)" />
                  <circle cx="60" cy="55" r="1.5" fill="#451a03" stroke="none" />
                  
                  {/* Листик, падающий в урну */}
                  <path d="M 45 10 Q 55 15 50 20" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'retro-lantern-park',
              title: 'Фонарь',
              desc: 'в классическом парковом стиле',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Массивный чугунный столб */}
                  <path d="M 45 90 L 55 90 L 52 40 L 48 40 Z" fill="#1f2937" stroke="#111827" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Декоративное основание столба */}
                  <path d="M 40 95 L 60 95 L 55 80 L 45 80 Z" fill="#374151" stroke="#111827" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="10" y1="95" x2="90" y2="95" stroke="#64748b" strokeWidth="4" /> {/* Земля */}
                  
                  {/* Завитушки-держатели (Ковка) */}
                  <path d="M 48 40 C 35 40 30 30 35 25 C 40 20 45 25 45 25" fill="none" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 52 40 C 65 40 70 30 65 25 C 60 20 55 25 55 25" fill="none" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Плафон фонаря (Шестигранный классический) */}
                  <path d="M 40 40 L 60 40 L 65 20 L 35 20 Z" fill="#fef08a" stroke="#111827" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Металлические переплеты плафона */}
                  <line x1="50" y1="40" x2="50" y2="20" stroke="#111827" strokeWidth="3" />
                  <line x1="43" y1="40" x2="40" y2="20" stroke="#111827" strokeWidth="2" />
                  <line x1="57" y1="40" x2="60" y2="20" stroke="#111827" strokeWidth="2" />
                  
                  {/* Крышка плафона */}
                  <path d="M 32 20 L 68 20 L 50 5 Z" fill="#374151" stroke="#111827" strokeWidth="3" strokeLinejoin="round" />
                  <circle cx="50" cy="3" r="2" fill="#1f2937" stroke="none" /> {/* Навершие */}
                  
                  {/* Теплое свечение (Гало) */}
                  <circle cx="50" cy="30" r="15" fill="#fef08a" stroke="none" opacity="0.4" style={{ filter: 'blur(3px)' }} />
                </svg>
              )
            },
            {
              id: 'sundial',
              title: 'Солнечные часы',
              desc: 'на каменном постаменте',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Постамент (Классическая каменная колонна) */}
                  <path d="M 35 90 L 65 90 L 60 45 L 40 45 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                  <rect x="30" y="85" width="40" height="5" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
                  <rect x="35" y="40" width="30" height="5" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
                  
                  {/* Декор на постаменте */}
                  <line x1="45" y1="45" x2="45" y2="85" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="55" y1="45" x2="55" y2="85" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Циферблат солнечных часов (Бронзовый диск) */}
                  <ellipse cx="50" cy="35" rx="30" ry="10" fill="#fcd34d" stroke="#b45309" strokeWidth="3" />
                  <ellipse cx="50" cy="36" rx="26" ry="7" fill="none" stroke="#d97706" strokeWidth="2" />
                  
                  {/* Гномон (Треугольный указатель, отбрасывающий тень) */}
                  <polygon points="50,38 50,15 65,35" fill="#f59e0b" stroke="#92400e" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Тень от гномона на циферблате */}
                  <polygon points="50,38 30,30 50,33" fill="#b45309" stroke="none" opacity="0.6" />
                  
                  {/* Метки часов на диске */}
                  <line x1="25" y1="35" x2="28" y2="35" stroke="#b45309" strokeWidth="2" />
                  <line x1="75" y1="35" x2="72" y2="35" stroke="#b45309" strokeWidth="2" />
                  <line x1="50" y1="45" x2="50" y2="42" stroke="#b45309" strokeWidth="2" />
                  <line x1="35" y1="42" x2="38" y2="40" stroke="#b45309" strokeWidth="2" />
                  <line x1="65" y1="42" x2="62" y2="40" stroke="#b45309" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'park-map',
              title: 'Стенд с картой',
              desc: 'схема аллей и дорожек',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Деревянные опоры */}
                  <line x1="25" y1="20" x2="25" y2="90" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
                  <line x1="75" y1="20" x2="75" y2="90" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Земля */}
                  <line x1="15" y1="90" x2="85" y2="90" stroke="#9ca3af" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Козырек стенда */}
                  <path d="M 15 25 L 50 10 L 85 25 Z" fill="#92400e" stroke="#78350f" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Доска (Щит) */}
                  <rect x="20" y="25" width="60" height="40" fill="#f8fafc" stroke="#94a3b8" strokeWidth="4" strokeLinejoin="round" />
                  
                  {/* Сама карта (Дорожки парка) */}
                  <path d="M 30 35 C 40 30 50 45 60 35 L 70 45" fill="none" stroke="#d1d5db" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 40 40 L 45 55 L 65 50" fill="none" stroke="#d1d5db" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Озеро на карте */}
                  <ellipse cx="60" cy="55" rx="8" ry="4" fill="#60a5fa" stroke="none" />
                  
                  {/* Деревья на карте (Зеленые кружочки) */}
                  <circle cx="35" cy="45" r="3" fill="#4ade80" stroke="none" />
                  <circle cx="45" cy="32" r="3" fill="#4ade80" stroke="none" />
                  <circle cx="70" cy="35" r="3" fill="#4ade80" stroke="none" />
                  <circle cx="50" cy="50" r="3" fill="#4ade80" stroke="none" />
                  
                  {/* Точка "Вы здесь" (Красный GPS-пин) */}
                  <path d="M 45 42 C 45 39 49 39 49 42 C 49 45 47 48 47 48 C 47 48 45 45 45 42 Z" fill="#ef4444" stroke="none" />
                  <circle cx="47" cy="42" r="1" fill="#fff" stroke="none" />
                </svg>
              )
            },
            {
              id: 'signpost',
              title: 'Указатель',
              desc: 'деревянный, со стрелками',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Главный деревянный столб */}
                  <line x1="50" y1="10" x2="50" y2="90" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
                  <line x1="50" y1="10" x2="50" y2="90" stroke="#92400e" strokeWidth="2" /> {/* Текстура дерева */}
                  <line x1="40" y1="90" x2="60" y2="90" stroke="#64748b" strokeWidth="4" strokeLinecap="round" /> {/* Земля */}
                  
                  {/* Верхняя стрелка (Указывает вправо, Оранжевая) */}
                  <polygon points="50,20 80,20 90,28 80,36 50,36" fill="#fb923c" stroke="#c2410c" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="55" y1="28" x2="70" y2="28" stroke="#fff" strokeWidth="3" strokeLinecap="round" /> {/* Текст */}
                  <circle cx="55" cy="28" r="1.5" fill="#78350f" stroke="none" /> {/* Гвоздь */}
                  
                  {/* Средняя стрелка (Указывает влево, Зеленая) */}
                  <polygon points="50,42 20,42 10,50 20,58 50,58" fill="#4ade80" stroke="#16a34a" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="45" y1="50" x2="30" y2="50" stroke="#fff" strokeWidth="3" strokeLinecap="round" /> {/* Текст */}
                  <circle cx="45" cy="50" r="1.5" fill="#78350f" stroke="none" /> {/* Гвоздь */}
                  
                  {/* Нижняя стрелка (Указывает вправо, Голубая, немного покосилась) */}
                  <g transform="rotate(5 50 70)">
                    <polygon points="50,64 75,64 85,72 75,80 50,80" fill="#38bdf8" stroke="#0284c7" strokeWidth="3" strokeLinejoin="round" />
                    <line x1="55" y1="72" x2="68" y2="72" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="55" cy="72" r="1.5" fill="#78350f" stroke="none" />
                  </g>
                </svg>
              )
            },
            {
              id: 'boardwalk',
              title: 'Настил',
              desc: 'дорожка из деревянных досок',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Перспектива дорожки, уходящей вдаль */}
                  <path d="M 40 20 L 60 20 L 95 90 L 5 90 Z" fill="#fcd34d" stroke="#b45309" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Продольные направляющие (лаги) */}
                  <line x1="45" y1="20" x2="30" y2="90" stroke="#d97706" strokeWidth="2" />
                  <line x1="55" y1="20" x2="70" y2="90" stroke="#d97706" strokeWidth="2" />
                  
                  {/* Поперечные доски */}
                  <line x1="38" y1="28" x2="62" y2="28" stroke="#b45309" strokeWidth="3" strokeLinecap="round" />
                  <line x1="35" y1="38" x2="65" y2="38" stroke="#b45309" strokeWidth="3" strokeLinecap="round" />
                  <line x1="30" y1="50" x2="70" y2="50" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
                  <line x1="23" y1="65" x2="77" y2="65" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
                  <line x1="12" y1="82" x2="88" y2="82" stroke="#b45309" strokeWidth="5" strokeLinecap="round" />
                  
                  {/* Шляпки гвоздей на досках */}
                  <circle cx="32" cy="50" r="1" fill="#78350f" stroke="none" />
                  <circle cx="68" cy="50" r="1" fill="#78350f" stroke="none" />
                  <circle cx="25" cy="65" r="1.5" fill="#78350f" stroke="none" />
                  <circle cx="75" cy="65" r="1.5" fill="#78350f" stroke="none" />
                  <circle cx="15" cy="82" r="2" fill="#78350f" stroke="none" />
                  <circle cx="85" cy="82" r="2" fill="#78350f" stroke="none" />
                  
                  {/* Трава и камыши по бокам (Природа наступает) */}
                  <path d="M 5 70 Q 15 50 5 40 M 10 90 Q 25 70 15 55" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 95 70 Q 85 50 95 40 M 90 90 Q 75 70 85 55" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            }
          ]
        },
        {
          id: 'ch2-nature',
          title: '🍄 Природные сокровища',
          subtitle: 'Смотри под ноги',
          theme: 'lime',
          items: [
            {
              id: 'tree-hollow',
              title: 'Дупло',
              desc: 'интересно, кто там живет?',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ствол дерева */}
                  <path d="M 25 10 C 25 40 20 70 15 95 L 85 95 C 80 70 75 40 75 10" fill="#78350f" stroke="#451a03" strokeWidth="4" />
                  
                  {/* Текстура коры */}
                  <path d="M 35 10 C 35 30 30 50 30 70 M 65 20 C 65 50 70 70 65 90 M 45 75 L 45 95 M 55 10 L 55 25" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Темное дупло */}
                  <ellipse cx="50" cy="50" rx="15" ry="22" fill="#111827" stroke="#451a03" strokeWidth="4" />
                  <path d="M 35 50 C 35 30 65 30 65 50" fill="none" stroke="#92400e" strokeWidth="2" /> {/* Ободок дупла */}
                  
                  {/* Светящиеся глазки внутри (Сова или зверек) */}
                  <circle cx="45" cy="50" r="3" fill="#facc15" stroke="none" style={{ filter: 'drop-shadow(0 0 3px #facc15)' }} />
                  <circle cx="55" cy="50" r="3" fill="#facc15" stroke="none" style={{ filter: 'drop-shadow(0 0 3px #facc15)' }} />
                  <line x1="45" y1="48" x2="45" y2="52" stroke="#111827" strokeWidth="1.5" /> {/* Зрачки */}
                  <line x1="55" y1="48" x2="55" y2="52" stroke="#111827" strokeWidth="1.5" />
                  
                  {/* Листочек у дупла */}
                  <path d="M 25 40 Q 15 35 20 25 Q 30 30 25 40 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'anthill',
              title: 'Муравейник',
              desc: 'скрытый в густой траве',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Густая трава на заднем плане */}
                  <path d="M 10 90 Q 15 60 5 45 M 25 90 Q 30 50 20 30 M 75 90 Q 70 50 80 30 M 90 90 Q 85 60 95 45" fill="none" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Холм муравейника (Иголки и земля) */}
                  <path d="M 15 90 C 25 50 75 50 85 90 Z" fill="#92400e" stroke="#78350f" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Текстура иголок (Штрихи) */}
                  <g stroke="#b45309" strokeWidth="2" strokeLinecap="round">
                    <line x1="40" y1="65" x2="45" y2="70" /><line x1="55" y1="60" x2="50" y2="65" />
                    <line x1="30" y1="75" x2="35" y2="80" /><line x1="65" y1="75" x2="70" y2="80" />
                    <line x1="45" y1="80" x2="55" y2="80" /><line x1="50" y1="70" x2="50" y2="75" />
                  </g>
                  
                  {/* Муравьи (Маленькие черные точки-гантельки) */}
                  <g fill="#111827" stroke="none">
                    <circle cx="45" cy="55" r="1.5" /><circle cx="48" cy="53" r="1" /> {/* Муравей 1 */}
                    <circle cx="60" cy="65" r="1.5" /><circle cx="63" cy="67" r="1" /> {/* Муравей 2 */}
                    <circle cx="35" cy="85" r="1.5" /><circle cx="32" cy="85" r="1" /> {/* Муравей 3 */}
                    <circle cx="70" cy="85" r="1.5" /><circle cx="73" cy="82" r="1" /> {/* Муравей 4 */}
                  </g>
                  
                  {/* Вход в муравейник */}
                  <ellipse cx="50" cy="78" rx="4" ry="2" fill="#111827" stroke="none" />
                </svg>
              )
            },
            {
              id: 'mushrooms',
              title: 'Грибы у корней',
              desc: 'даже если это поганки',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Корень дерева */}
                  <path d="M 10 90 Q 40 70 80 90" fill="none" stroke="#451a03" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 30 78 Q 20 60 10 50" fill="none" stroke="#451a03" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Мох на корне */}
                  <path d="M 25 78 C 30 70 45 70 50 82" fill="#4ade80" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Большой гриб (Поганка/Мухомор) */}
                  <path d="M 60 82 L 60 55" stroke="#fef3c7" strokeWidth="6" strokeLinecap="round" /> {/* Ножка */}
                  <path d="M 60 65 Q 65 65 65 70" fill="none" stroke="#fef3c7" strokeWidth="2" /> {/* Юбочка */}
                  <path d="M 45 55 C 45 40 75 40 75 55 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" /> {/* Шляпка */}
                  
                  {/* Белые точки на шляпке */}
                  <circle cx="52" cy="48" r="2" fill="#fef3c7" stroke="none" />
                  <circle cx="68" cy="50" r="1.5" fill="#fef3c7" stroke="none" />
                  <circle cx="60" cy="45" r="2.5" fill="#fef3c7" stroke="none" />
                  <circle cx="55" cy="52" r="1" fill="#fef3c7" stroke="none" />
                  
                  {/* Маленький гриб */}
                  <path d="M 80 85 L 85 70" stroke="#fef3c7" strokeWidth="4" strokeLinecap="round" /> {/* Ножка */}
                  <path d="M 75 70 C 75 60 95 60 95 70 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" strokeLinejoin="round" /> {/* Шляпка */}
                  <circle cx="85" cy="65" r="1.5" fill="#fef3c7" stroke="none" />
                </svg>
              )
            },
            {
              id: 'tree-root',
              title: 'Корень дерева',
              desc: 'который «вылез» на дорожку',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Асфальт/Дорожка */}
                  <path d="M 10 90 L 90 90 M 20 80 L 80 80 M 30 70 L 70 70" stroke="#94a3b8" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
                  <path d="M 40 60 L 60 60 M 45 50 L 55 50" stroke="#94a3b8" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
                  
                  {/* Огромный изогнутый корень, ломающий дорожку */}
                  <path d="M -10 60 C 20 30 50 80 110 50" fill="none" stroke="#78350f" strokeWidth="14" strokeLinecap="round" />
                  <path d="M -10 60 C 20 30 50 80 110 50" fill="none" stroke="#451a03" strokeWidth="4" strokeDasharray="10 15" strokeLinecap="round" /> {/* Текстура коры */}
                  
                  {/* Трещины на асфальте вокруг корня */}
                  <path d="M 35 65 L 25 75 L 15 72" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 65 55 L 75 45 L 85 48" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 50 70 L 55 80" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Листочек, упавший на корень */}
                  <path d="M 45 45 Q 50 40 55 45 Q 50 50 45 45 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
                </svg>
              )
            },
            {
              id: 'garland-tree',
              title: 'Дерево с гирляндой',
              desc: 'даже если она выключена',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ствол дерева */}
                  <path d="M 35 95 L 35 15 C 35 5 65 5 65 15 L 65 95" fill="#92400e" stroke="#78350f" strokeWidth="4" />
                  <line x1="45" y1="20" x2="45" y2="95" stroke="#78350f" strokeWidth="2" opacity="0.5" />
                  <line x1="55" y1="20" x2="55" y2="95" stroke="#78350f" strokeWidth="2" opacity="0.5" />
                  
                  {/* Провод гирлянды, обмотанный вокруг ствола */}
                  <path d="M 35 25 C 50 35 65 25 65 35" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 35 45 C 50 55 65 45 65 55" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 35 65 C 50 75 65 65 65 75" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 35 85 C 50 95 65 85 65 95" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Лампочки (Одни светятся, другие нет) */}
                  {/* Выключенные лампочки */}
                  <circle cx="45" cy="30" r="3" fill="#9ca3af" stroke="#4b5563" strokeWidth="1.5" />
                  <circle cx="55" cy="50" r="3" fill="#9ca3af" stroke="#4b5563" strokeWidth="1.5" />
                  <circle cx="40" cy="70" r="3" fill="#9ca3af" stroke="#4b5563" strokeWidth="1.5" />
                  <circle cx="50" cy="90" r="3" fill="#9ca3af" stroke="#4b5563" strokeWidth="1.5" />
                  
                  {/* Включенные лампочки (Теплый свет) */}
                  <circle cx="55" cy="30" r="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 3px #fde047)' }} />
                  <circle cx="42" cy="50" r="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 3px #fde047)' }} />
                  <circle cx="60" cy="70" r="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 3px #fde047)' }} />
                </svg>
              )
            },
            {
              id: 'pinecone',
              title: 'Сосновая шишка',
              desc: 'найди самую крупную',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ветка сосны на фоне */}
                  <path d="M 10 15 Q 50 20 90 10" fill="none" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 30 18 L 25 35 M 40 18 L 38 40 M 60 18 L 65 38 M 80 15 L 85 30" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 28 17 L 35 32 M 45 18 L 48 35 M 55 18 L 52 35 M 70 16 L 75 30" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Силуэт шишки (Основа) */}
                  <ellipse cx="50" cy="60" rx="20" ry="30" fill="#92400e" stroke="#451a03" strokeWidth="3" />
                  
                  {/* Чешуйки шишки (Ромбовидный узор) */}
                  <g stroke="#451a03" strokeWidth="2" fill="#b45309" strokeLinejoin="round">
                    <polygon points="50,30 58,38 50,45 42,38" />
                    <polygon points="40,38 48,46 40,54 32,46" />
                    <polygon points="60,38 68,46 60,54 52,46" />
                    <polygon points="50,45 58,54 50,62 42,54" />
                    <polygon points="40,54 48,62 40,70 32,62" />
                    <polygon points="60,54 68,62 60,70 52,62" />
                    <polygon points="50,62 58,70 50,78 42,70" />
                    <polygon points="50,78 55,85 50,90 45,85" />
                  </g>
                  
                  {/* Крепление к ветке */}
                  <path d="M 50 30 L 50 20" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'acorn',
              title: 'Желудь',
              desc: 'обязательно с «шапочкой»',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Лист дуба на заднем плане */}
                  <path d="M 20 50 C 10 30 30 10 50 30 C 70 10 90 30 80 50 C 90 70 70 90 50 70 C 30 90 10 70 20 50 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="2" opacity="0.8" strokeLinejoin="round" />
                  <path d="M 50 70 L 50 30" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Тело желудя (Орех) */}
                  <path d="M 35 55 C 35 80 65 80 65 55 Z" fill="#d97706" stroke="#92400e" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Шапочка желудя (Плюска) */}
                  <path d="M 28 55 C 28 35 72 35 72 55 Z" fill="#78350f" stroke="#451a03" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Узор на шапочке (Сеточка) */}
                  <path d="M 35 45 C 45 55 55 55 65 45" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 40 40 C 45 50 55 50 60 40" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
                  <line x1="45" y1="42" x2="40" y2="52" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
                  <line x1="55" y1="42" x2="50" y2="52" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
                  <line x1="65" y1="45" x2="60" y2="55" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
                  <line x1="35" y1="45" x2="40" y2="55" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Хвостик (Веточка) */}
                  <path d="M 50 42 C 50 30 55 25 60 25" fill="none" stroke="#451a03" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Блик на орехе */}
                  <path d="M 40 60 C 40 70 45 75 45 75" fill="none" stroke="#fcd34d" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
                </svg>
              )
            },
            {
              id: 'eaten-leaf',
              title: 'Изъеденный лист',
              desc: 'похожий на зеленое кружево',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Лист сложной формы со следами укусов гусеницы */}
                  <path d="M 50 90 C 40 90 20 70 20 50 C 20 40 25 35 30 40 C 35 45 40 30 50 20 C 60 30 65 45 70 40 C 75 35 80 40 80 50 C 80 70 60 90 50 90 Z" fill="#22c55e" stroke="#14532d" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Центральная прожилка */}
                  <path d="M 50 90 C 50 60 55 40 50 20" stroke="#14532d" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 50 70 L 35 60 M 52 50 L 68 45 M 50 40 L 40 30 M 51 30 L 60 25" stroke="#14532d" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Дырки в листе (Выеденные участки) */}
                  <circle cx="35" cy="50" r="5" fill="#f0fdf4" stroke="#14532d" strokeWidth="2" />
                  <ellipse cx="65" cy="65" rx="6" ry="4" fill="#f0fdf4" stroke="#14532d" strokeWidth="2" transform="rotate(30 65 65)" />
                  <circle cx="45" cy="35" r="3" fill="#f0fdf4" stroke="#14532d" strokeWidth="2" />
                  <circle cx="55" cy="80" r="4" fill="#f0fdf4" stroke="#14532d" strokeWidth="2" />
                  
                  {/* Виновница торжества - Гусеница на краю листа */}
                  <path d="M 20 50 A 5 5 0 0 1 25 45 A 5 5 0 0 1 30 40 A 5 5 0 0 1 35 45" fill="none" stroke="#facc15" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="20" cy="50" r="3" fill="#ef4444" stroke="none" /> {/* Голова гусеницы */}
                  <circle cx="20" cy="50" r="1" fill="#000" stroke="none" /> {/* Глаз */}
                </svg>
              )
            },
            {
              id: 'stump-rings',
              title: 'Спиленный пень',
              desc: 'на котором можно посчитать кольца',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Трава у основания */}
                  <path d="M 10 90 Q 20 70 25 90 T 40 90 T 60 90 T 75 90 T 90 90" stroke="#22c55e" strokeWidth="3" fill="none" strokeLinecap="round" />
                  
                  {/* Боковая часть пня (Кора) */}
                  <path d="M 20 50 L 25 85 L 75 85 L 80 50 Z" fill="#78350f" stroke="#451a03" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 30 55 L 32 85 M 45 55 L 43 85 M 55 55 L 57 85 M 70 55 L 68 85" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Верхняя часть пня (Спил) */}
                  <ellipse cx="50" cy="50" rx="30" ry="12" fill="#fef3c7" stroke="#92400e" strokeWidth="3" />
                  
                  {/* Годовые кольца */}
                  <g stroke="#d97706" strokeWidth="1.5">
                    <ellipse cx="50" cy="50" rx="24" ry="9" strokeDasharray="8 2" />
                    <ellipse cx="49" cy="50" rx="18" ry="6" />
                    <ellipse cx="51" cy="50" rx="12" ry="4" strokeDasharray="4 2" />
                    <ellipse cx="50" cy="50" rx="6" ry="2" />
                  </g>
                  
                  {/* Трещина на спиле */}
                  <path d="M 50 50 L 65 55" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 50 50 L 35 45" stroke="#b45309" strokeWidth="1" strokeLinecap="round" />
                  
                  {/* Топор колун, воткнутый в пень */}
                  <path d="M 70 15 L 60 45" stroke="#d97706" strokeWidth="4" strokeLinecap="round" /> {/* Рукоять */}
                  <path d="M 55 45 L 65 40 L 70 48 Z" fill="#94a3b8" stroke="#475569" strokeWidth="2" strokeLinejoin="round" /> {/* Лезвие */}
                </svg>
              )
            },
            {
              id: 'mossy-stone',
              title: 'Камень с лишайником',
              desc: 'и пушистым зеленым мхом',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Земля */}
                  <path d="M 15 85 L 85 85" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Большой валун (Неправильной формы) */}
                  <path d="M 25 80 C 10 70 20 40 40 30 C 60 20 80 40 85 60 C 90 80 70 85 50 85 C 30 85 25 80 25 80 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Грани камня (Объем) */}
                  <path d="M 40 30 L 45 55 L 85 60" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 45 55 L 25 80" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Желтый лишайник (Пятна) */}
                  <path d="M 60 40 C 65 35 70 40 65 45 C 60 50 55 45 60 40 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
                  <path d="M 75 55 C 80 50 85 55 80 60 C 75 65 70 60 75 55 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="1" />
                  
                  {/* Зеленый пушистый мох (Нарастает с одной стороны) */}
                  <path d="M 22 75 C 15 65 22 45 35 35 C 30 50 35 65 40 80 C 30 85 25 80 22 75 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 35 35 C 45 32 50 40 45 45 C 40 50 35 45 35 35 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Детали мха (Ворсинки) */}
                  <circle cx="28" cy="60" r="1.5" fill="#15803d" stroke="none" />
                  <circle cx="32" cy="70" r="1.5" fill="#15803d" stroke="none" />
                  <circle cx="35" cy="50" r="1.5" fill="#15803d" stroke="none" />
                  <circle cx="42" cy="40" r="1.5" fill="#15803d" stroke="none" />
                </svg>
              )
            }
          ]
        },
        {
          id: 'ch2-sport',
          title: '🏃‍♀️ Движение и спорт',
          subtitle: 'Энергия парка',
          theme: 'blue',
          items: [
            {
              id: 'runner',
              title: 'Бегун',
              desc: 'в самых ярких кроссовках',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Линии скорости (Динамика) */}
                  <line x1="10" y1="30" x2="25" y2="30" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                  <line x1="5" y1="50" x2="20" y2="50" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                  <line x1="15" y1="70" x2="35" y2="70" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Голова и повязка */}
                  <circle cx="60" cy="20" r="8" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />
                  <path d="M 52 18 C 55 15 65 15 68 18" fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" /> {/* Спортивная повязка */}
                  
                  {/* Туловище (Спортивная майка) */}
                  <path d="M 60 28 L 50 55 C 50 55 60 55 65 50 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Руки в движении */}
                  <path d="M 55 35 L 40 45 L 35 35" stroke="#fed7aa" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 60 35 L 75 40 L 80 25" stroke="#fed7aa" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Ноги (Бег) */}
                  <path d="M 55 55 L 40 70 L 45 90" stroke="#1f2937" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 60 55 L 75 60 L 85 85" stroke="#1f2937" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Яркие кроссовки (Неоново-розовые и салатовые) */}
                  <path d="M 40 90 L 52 90 C 55 90 55 85 52 85 L 45 85 Z" fill="#ec4899" stroke="#be185d" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 80 85 L 92 85 C 95 85 95 80 92 80 L 85 80 Z" fill="#ec4899" stroke="#be185d" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Капли пота */}
                  <circle cx="75" cy="15" r="1.5" fill="#38bdf8" stroke="none" />
                  <circle cx="78" cy="22" r="1.5" fill="#38bdf8" stroke="none" />
                </svg>
              )
            },
            {
              id: 'yoga',
              title: 'Йога',
              desc: 'человек на специальном коврике',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Трава в парке */}
                  <path d="M 10 90 Q 20 85 30 90 T 50 90 T 70 90 T 90 90" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Коврик для йоги (Раскатанный) */}
                  <polygon points="15,85 85,85 75,70 25,70" fill="#a855f7" stroke="#7e22ce" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Человек в позе лотоса */}
                  {/* Тело */}
                  <path d="M 50 65 L 50 35" stroke="#38bdf8" strokeWidth="12" strokeLinecap="round" />
                  <path d="M 50 65 L 50 35" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
                  
                  {/* Голова */}
                  <circle cx="50" cy="20" r="8" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />
                  <circle cx="50" cy="10" r="4" fill="#451a03" stroke="none" /> {/* Пучок волос */}
                  
                  {/* Скрещенные ноги */}
                  <path d="M 50 65 C 30 65 30 75 40 75 C 50 75 60 75 50 65" fill="#1f2937" stroke="#111827" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 50 65 C 70 65 70 75 60 75 C 50 75 40 75 50 65" fill="#374151" stroke="#111827" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Руки лежат на коленях (Гьян мудра) */}
                  <path d="M 45 35 C 35 40 30 50 35 60" fill="none" stroke="#fed7aa" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 55 35 C 65 40 70 50 65 60" fill="none" stroke="#fed7aa" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="35" cy="62" r="1.5" fill="#c2410c" stroke="none" />
                  <circle cx="65" cy="62" r="1.5" fill="#c2410c" stroke="none" />
                  
                  {/* Символ гармонии/Аура */}
                  <path d="M 30 30 A 25 25 0 0 1 70 30" fill="none" stroke="#fde047" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'bike-basket',
              title: 'Велосипед',
              desc: 'с милой корзинкой впереди',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Колеса велосипеда */}
                  <circle cx="25" cy="75" r="15" fill="none" stroke="#1f2937" strokeWidth="4" />
                  <circle cx="25" cy="75" r="11" fill="none" stroke="#9ca3af" strokeWidth="1" /> {/* Спицы условно */}
                  <line x1="25" y1="60" x2="25" y2="90" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="10" y1="75" x2="40" y2="75" stroke="#9ca3af" strokeWidth="1" />
                  
                  <circle cx="75" cy="75" r="15" fill="none" stroke="#1f2937" strokeWidth="4" />
                  <circle cx="75" cy="75" r="11" fill="none" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="75" y1="60" x2="75" y2="90" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="60" y1="75" x2="90" y2="75" stroke="#9ca3af" strokeWidth="1" />
                  
                  {/* Рама (Классический городской велосипед, мятного цвета) */}
                  <path d="M 25 75 L 40 45 L 70 45 L 75 75" fill="none" stroke="#34d399" strokeWidth="4" strokeLinejoin="round" />
                  <path d="M 40 45 L 30 75 M 40 45 L 20 40 L 15 40" fill="none" stroke="#34d399" strokeWidth="4" strokeLinejoin="round" />
                  
                  {/* Седло */}
                  <path d="M 35 40 L 45 40 C 45 35 35 35 35 40" fill="#78350f" stroke="#451a03" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Руль */}
                  <path d="M 70 45 L 65 30 L 75 25" fill="none" stroke="#9ca3af" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="72" y1="26" x2="78" y2="23" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" /> {/* Грипса */}
                  
                  {/* Плетеная корзинка */}
                  <path d="M 70 40 L 85 40 L 80 55 L 68 55 Z" fill="#fcd34d" stroke="#b45309" strokeWidth="2" strokeLinejoin="round" />
                  <line x1="72" y1="40" x2="70" y2="55" stroke="#b45309" strokeWidth="1.5" />
                  <line x1="76" y1="40" x2="74" y2="55" stroke="#b45309" strokeWidth="1.5" />
                  <line x1="80" y1="40" x2="78" y2="55" stroke="#b45309" strokeWidth="1.5" />
                  <line x1="69" y1="45" x2="83" y2="45" stroke="#b45309" strokeWidth="1.5" />
                  <line x1="68" y1="50" x2="81" y2="50" stroke="#b45309" strokeWidth="1.5" />
                  
                  {/* Цветы в корзинке */}
                  <circle cx="72" cy="38" r="3" fill="#f472b6" stroke="none" />
                  <circle cx="80" cy="36" r="3" fill="#60a5fa" stroke="none" />
                  <circle cx="76" cy="34" r="3" fill="#facc15" stroke="none" />
                </svg>
              )
            },
            {
              id: 'skater',
              title: 'Скейтер',
              desc: 'делающий крутой трюк',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Парапет/Грань */}
                  <polygon points="10,90 60,90 70,75 20,75" fill="#cbd5e1" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="20" y1="75" x2="60" y2="75" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Линии движения (Скейтборд летит) */}
                  <path d="M 40 85 C 50 75 60 65 80 55" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 5" strokeLinecap="round" />
                  
                  {/* Скейтборд (Дека под углом) */}
                  <path d="M 60 65 Q 65 65 85 50 Q 88 48 90 52 L 65 70 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 62 67 L 85 50" stroke="#fca5a5" strokeWidth="2" strokeLinecap="round" /> {/* Узор на деке */}
                  
                  {/* Колеса скейта */}
                  <circle cx="70" cy="65" r="3" fill="#1f2937" stroke="none" />
                  <circle cx="82" cy="56" r="3" fill="#1f2937" stroke="none" />
                  
                  {/* Кроссовки скейтера (В воздухе над доской) */}
                  {/* Левая нога */}
                  <path d="M 50 45 L 60 58 L 68 55" stroke="#1f2937" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 62 58 L 70 56 C 72 56 72 53 70 53 L 64 55 Z" fill="#f8fafc" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Правая нога */}
                  <path d="M 75 35 L 75 48 L 85 45" stroke="#1f2937" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 80 46 L 88 44 C 90 44 90 41 88 41 L 82 43 Z" fill="#f8fafc" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Искры от скольжения (Грайнд) */}
                  <path d="M 65 72 L 68 76 M 62 75 L 65 80 M 70 70 L 75 73" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'elliptical',
              title: 'Тренажер',
              desc: 'под открытым небом (похож на лыжи)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Основание (Забетонировано) */}
                  <path d="M 30 90 L 70 90 L 65 85 L 35 85 Z" fill="#94a3b8" stroke="#475569" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Центральный столб (Желтый металл) */}
                  <rect x="46" y="40" width="8" height="45" fill="#fde047" stroke="#ca8a04" strokeWidth="3" />
                  <circle cx="50" cy="40" r="5" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
                  
                  {/* Подвижные рычаги (Красные) */}
                  {/* Правый рычаг (На заднем плане) */}
                  <line x1="50" y1="40" x2="70" y2="15" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
                  <line x1="50" y1="40" x2="30" y2="75" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
                  <rect x="25" y="75" width="15" height="4" rx="2" fill="#1f2937" stroke="none" /> {/* Педаль */}
                  <line x1="66" y1="18" x2="74" y2="12" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" /> {/* Рукоятка */}
                  
                  {/* Левый рычаг (На переднем плане) */}
                  <line x1="50" y1="40" x2="30" y2="15" stroke="#dc2626" strokeWidth="5" strokeLinecap="round" />
                  <line x1="50" y1="40" x2="70" y2="75" stroke="#dc2626" strokeWidth="5" strokeLinecap="round" />
                  <circle cx="50" cy="40" r="3" fill="#1f2937" stroke="none" /> {/* Центральный шарнир */}
                  
                  <rect x="60" y="75" width="15" height="4" rx="2" fill="#1f2937" stroke="none" /> {/* Педаль */}
                  <line x1="26" y1="12" x2="34" y2="18" stroke="#1f2937" strokeWidth="5" strokeLinecap="round" /> {/* Рукоятка */}
                  
                  {/* Стрелки, показывающие движение */}
                  <path d="M 65 10 C 70 10 75 15 75 20" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                  <polygon points="75,20 72,16 78,16" fill="#9ca3af" stroke="none" />
                  
                  <path d="M 35 10 C 30 10 25 15 25 20" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                  <polygon points="25,20 22,16 28,16" fill="#9ca3af" stroke="none" />
                </svg>
              )
            },
            {
              id: 'frisbee',
              title: 'Фризби',
              desc: 'летающая тарелка в воздухе',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Динамичные линии полета */}
                  <path d="M 10 70 C 30 60 50 50 70 45" fill="none" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />
                  <path d="M 20 80 C 40 70 60 60 80 55" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                  
                  {/* Сама летающая тарелка (Фризби в перспективе) */}
                  <g transform="rotate(-15 65 40)">
                    {/* Тень/Толщина тарелки */}
                    <ellipse cx="65" cy="43" rx="25" ry="8" fill="#b91c1c" stroke="#7f1d1d" strokeWidth="2" />
                    
                    {/* Верхняя часть тарелки (Красная) */}
                    <ellipse cx="65" cy="40" rx="25" ry="8" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                    
                    {/* Кольца на тарелке (Ребра жесткости) */}
                    <ellipse cx="65" cy="40" rx="18" ry="5" fill="none" stroke="#fca5a5" strokeWidth="1.5" />
                    <ellipse cx="65" cy="40" rx="10" ry="3" fill="none" stroke="#fca5a5" strokeWidth="1.5" />
                    
                    {/* Логотип/Звезда в центре */}
                    <path d="M 65 38 L 66 40 L 68 40 L 66 41 L 67 43 L 65 41 L 63 43 L 64 41 L 62 40 L 64 40 Z" fill="#fef08a" stroke="none" />
                  </g>
                  
                  {/* Линии ветра вокруг */}
                  <path d="M 45 25 C 55 20 70 20 85 25" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 55 60 C 65 65 80 65 95 60" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'ping-pong',
              title: 'Настольный теннис',
              desc: 'бетонный или железный стол',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ножки стола */}
                  <line x1="25" y1="65" x2="25" y2="90" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
                  <line x1="75" y1="65" x2="75" y2="90" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
                  <line x1="35" y1="45" x2="35" y2="65" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
                  <line x1="65" y1="45" x2="65" y2="65" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Столешница (Изумрудно-зеленая, в перспективе) */}
                  <polygon points="10,65 90,65 75,45 25,45" fill="#10b981" stroke="#047857" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Белая разметка стола */}
                  <line x1="12" y1="63" x2="88" y2="63" stroke="#fff" strokeWidth="1" />
                  <line x1="25" y1="47" x2="75" y2="47" stroke="#fff" strokeWidth="1" />
                  <line x1="50" y1="65" x2="50" y2="45" stroke="#fff" strokeWidth="2" />
                  
                  {/* Сетка посередине */}
                  <line x1="15" y1="55" x2="85" y2="55" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                  <line x1="15" y1="50" x2="85" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="15" y1="55" x2="15" y2="48" stroke="#475569" strokeWidth="3" strokeLinecap="round" /> {/* Стойка сетки */}
                  <line x1="85" y1="55" x2="85" y2="48" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Ракетка (Парит над столом) */}
                  <path d="M 75 35 C 80 35 85 30 80 25 C 75 20 70 25 70 30 C 65 35 70 40 75 35 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" strokeLinejoin="round" />
                  <line x1="72" y1="33" x2="65" y2="40" stroke="#fcd34d" strokeWidth="3" strokeLinecap="round" /> {/* Ручка */}
                  
                  {/* Шарик для пинг-понга */}
                  <circle cx="45" cy="30" r="3" fill="#fff" stroke="#94a3b8" strokeWidth="1" />
                  <path d="M 62 38 C 55 45 48 35 45 30" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'chess',
              title: 'Шахматы',
              desc: 'игроки на парковой скамейке',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Столик в парке */}
                  <path d="M 20 70 L 80 70 L 65 50 L 35 50 Z" fill="#d1d5db" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="50" y1="70" x2="50" y2="95" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
                  <line x1="30" y1="95" x2="70" y2="95" stroke="#64748b" strokeWidth="4" strokeLinecap="round" /> {/* Основание стола */}
                  
                  {/* Шахматная доска на столе */}
                  <polygon points="30,65 70,65 60,55 40,55" fill="#fef3c7" stroke="#b45309" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Клетки доски (Упрощенно) */}
                  <polygon points="35,65 45,65 40,55 35,55" fill="#78350f" stroke="none" />
                  <polygon points="55,65 65,65 60,55 50,55" fill="#78350f" stroke="none" />
                  <polygon points="45,60 55,60 52,55 45,55" fill="#78350f" stroke="none" />
                  <polygon points="32,60 40,60 38,55 35,55" fill="#78350f" stroke="none" />
                  
                  {/* Шахматные фигуры */}
                  {/* Пешка (Белая) */}
                  <path d="M 35 60 L 38 60 L 37 55 L 36 55 Z" fill="#fff" stroke="#475569" strokeWidth="1" strokeLinejoin="round" />
                  <circle cx="36.5" cy="53" r="1.5" fill="#fff" stroke="#475569" strokeWidth="1" />
                  
                  {/* Конь (Черный) - крупный план */}
                  <path d="M 60 62 L 66 62 L 64 54 C 64 50 68 48 68 45 C 68 42 62 42 60 45 C 60 48 56 50 58 55 Z" fill="#1f2937" stroke="#000" strokeWidth="1.5" strokeLinejoin="round" />
                  <circle cx="63" cy="45" r="1" fill="#fff" stroke="none" /> {/* Глаз коня */}
                  
                  {/* Песочные часы (Контроль времени) */}
                  <path d="M 72 58 L 78 58 L 76 54 L 78 50 L 72 50 L 74 54 Z" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" strokeLinejoin="round" />
                  <line x1="71" y1="58" x2="79" y2="58" stroke="#0f172a" strokeWidth="2" />
                  <line x1="71" y1="50" x2="79" y2="50" stroke="#0f172a" strokeWidth="2" />
                  
                  {/* Рука игрока, делающая ход */}
                  <path d="M 85 25 C 75 30 70 40 68 45" fill="none" stroke="#fca5a5" strokeWidth="5" strokeLinecap="round" />
                  <circle cx="68" cy="45" r="3" fill="#fca5a5" stroke="none" />
                </svg>
              )
            },
            {
              id: 'dog-fetch',
              title: 'Собака с мячом',
              desc: 'ловит его прямо в прыжке',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Трава */}
                  <path d="M 10 90 C 20 80 30 85 40 90 C 60 80 80 85 90 90" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="20" cy="85" r="2" fill="#22c55e" stroke="none" />
                  <circle cx="80" cy="88" r="1.5" fill="#22c55e" stroke="none" />
                  
                  {/* Собака в прыжке (Силуэт/Тело) */}
                  <path d="M 25 70 C 15 60 20 40 35 45 C 50 50 65 45 70 30 C 75 35 70 50 60 60 C 50 70 35 75 25 70 Z" fill="#d97706" stroke="#92400e" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Голова и уши (Развеваются по ветру) */}
                  <circle cx="70" cy="35" r="8" fill="#d97706" stroke="#92400e" strokeWidth="2" />
                  <path d="M 65 30 C 55 25 50 35 60 38" fill="#b45309" stroke="#78350f" strokeWidth="2" strokeLinejoin="round" /> {/* Ухо летит назад */}
                  <path d="M 75 35 L 85 30 L 78 40 Z" fill="#fef3c7" stroke="#b45309" strokeWidth="2" strokeLinejoin="round" /> {/* Мордочка открыта */}
                  
                  {/* Нос и глаз */}
                  <circle cx="85" cy="30" r="1.5" fill="#1f2937" stroke="none" />
                  <line x1="72" y1="32" x2="72" y2="34" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Лапы вытянуты */}
                  <path d="M 35 45 L 20 35" stroke="#92400e" strokeWidth="5" strokeLinecap="round" /> {/* Задняя */}
                  <path d="M 45 45 L 30 30" stroke="#92400e" strokeWidth="5" strokeLinecap="round" /> {/* Задняя */}
                  <path d="M 60 60 L 65 75" stroke="#92400e" strokeWidth="5" strokeLinecap="round" /> {/* Передняя */}
                  <path d="M 65 55 L 75 70" stroke="#92400e" strokeWidth="5" strokeLinecap="round" /> {/* Передняя */}
                  
                  {/* Теннисный мяч (Салатовый) */}
                  <circle cx="88" cy="25" r="5" fill="#a3e635" stroke="#4d7c0f" strokeWidth="2" />
                  <path d="M 85 22 C 87 25 87 27 85 28" fill="none" stroke="#fff" strokeWidth="1.5" />
                  <path d="M 91 22 C 89 25 89 27 91 28" fill="none" stroke="#fff" strokeWidth="1.5" />
                  
                  {/* Траектория мяча */}
                  <path d="M 95 10 C 95 15 90 20 88 25" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 3" />
                </svg>
              )
            },
            {
              id: 'slackline',
              title: 'Слэклайн',
              desc: 'лента, натянутая между деревьев',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Стволы деревьев по краям */}
                  <path d="M 15 90 L 15 10 M 5 10 L 5 90" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 95 90 L 95 10 M 85 10 L 85 90" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Земля */}
                  <line x1="10" y1="90" x2="90" y2="90" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Защита деревьев (Протекторы под ленту) */}
                  <rect x="5" y="45" width="10" height="10" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="2" />
                  <rect x="85" y="45" width="10" height="10" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="2" />
                  
                  {/* Натянутая стропа (Слэклайн - яркая лента) */}
                  <line x1="15" y1="50" x2="85" y2="50" stroke="#facc15" strokeWidth="4" />
                  <line x1="15" y1="48" x2="85" y2="48" stroke="#ca8a04" strokeWidth="1" /> {/* Тень на стропе */}
                  
                  {/* Балансирующий человек (Видны только ноги в кедах) */}
                  {/* Левая нога */}
                  <path d="M 40 10 C 40 25 35 40 35 48" stroke="#1e3a8a" strokeWidth="8" strokeLinecap="round" /> {/* Джинсы */}
                  <path d="M 30 48 L 45 48 C 45 45 42 43 38 43 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" strokeLinejoin="round" /> {/* Кед */}
                  <line x1="33" y1="48" x2="33" y2="44" stroke="#fff" strokeWidth="1.5" />
                  
                  {/* Правая нога */}
                  <path d="M 60 10 C 60 20 65 30 65 40" stroke="#1e3a8a" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 60 40 L 75 44 C 75 41 72 38 68 38 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" strokeLinejoin="round" />
                  <line x1="64" y1="42" x2="62" y2="39" stroke="#fff" strokeWidth="1.5" />
                  
                  {/* Символ баланса (Две изогнутые стрелочки или линии) */}
                  <path d="M 30 25 C 20 25 15 35 25 40" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 70 25 C 80 25 85 35 75 40" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            }
          ]
        },
	  {
        id: 'ch2-entertainment',
        title: '🎈 Развлечения и детали',
        subtitle: 'Парк аттракционов',
        theme: 'cyan',
        items: [
            {
              id: 'cotton-candy',
              title: 'Сладкая вата',
              desc: 'тележка продавца',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Колеса с детальными спицами */}
                  <circle cx="30" cy="80" r="12" fill="#f3f4f6" stroke="#4b5563" strokeWidth="4" />
                  <line x1="30" y1="68" x2="30" y2="92" stroke="#4b5563" strokeWidth="2" />
                  <line x1="18" y1="80" x2="42" y2="80" stroke="#4b5563" strokeWidth="2" />
                  <line x1="21.5" y1="71.5" x2="38.5" y2="88.5" stroke="#4b5563" strokeWidth="2" />
                  <line x1="21.5" y1="88.5" x2="38.5" y2="71.5" stroke="#4b5563" strokeWidth="2" />
                  
                  <circle cx="70" cy="80" r="12" fill="#f3f4f6" stroke="#4b5563" strokeWidth="4" />
                  <line x1="70" y1="68" x2="70" y2="92" stroke="#4b5563" strokeWidth="2" />
                  <line x1="58" y1="80" x2="82" y2="80" stroke="#4b5563" strokeWidth="2" />
                  
                  {/* Корпус тележки */}
                  <rect x="20" y="45" width="60" height="25" rx="2" fill="#f472b6" stroke="#be185d" strokeWidth="3" />
                  <line x1="20" y1="55" x2="80" y2="55" stroke="#be185d" strokeWidth="2" />
                  <circle cx="50" cy="62" r="4" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
                  
                  {/* Навес и стойки */}
                  <line x1="25" y1="45" x2="25" y2="20" stroke="#9ca3af" strokeWidth="3" />
                  <line x1="75" y1="45" x2="75" y2="20" stroke="#9ca3af" strokeWidth="3" />
                  <path d="M 15 20 L 85 20 L 75 10 L 25 10 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="3" />
                  <polygon points="35,20 45,10 55,10 45,20" fill="#fef08a" stroke="none" />
                  <polygon points="65,20 75,10 80,10 75,20" fill="#fef08a" stroke="none" />
                  <path d="M 15 20 Q 20 25 25 20 Q 30 25 35 20 Q 40 25 45 20 Q 50 25 55 20 Q 60 25 65 20 Q 70 25 75 20 Q 80 25 85 20" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
                  
                  {/* Сама вата */}
                  <path d="M 50 45 L 50 25" stroke="#f1f5f9" strokeWidth="3" />
                  <path d="M 45 35 C 35 35 30 25 40 20 C 45 10 60 10 65 20 C 75 25 65 40 55 35 C 55 45 45 45 45 35 Z" fill="#fbcfe8" stroke="#db2777" strokeWidth="2" opacity="0.9" />
                </svg>
              )
            },
            {
              id: 'animal-balloons',
              title: 'Воздушные шары',
              desc: 'в форме животных',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Веревочки */}
                  <path d="M 35 60 Q 45 75 40 100 M 65 60 Q 55 75 60 100 M 50 50 Q 50 75 48 100" stroke="#9ca3af" strokeWidth="2" />
                  
                  {/* Собачка из шарика (розовая) */}
                  <path d="M 15 50 L 20 40 L 25 50 L 35 50 L 40 60 L 35 70 M 25 50 L 20 60 M 35 50 L 45 40 L 55 40" stroke="#ec4899" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Обычный шарик (желтый) */}
                  <ellipse cx="50" cy="35" rx="15" ry="18" fill="#fde047" stroke="#ca8a04" strokeWidth="3" />
                  <polygon points="47,53 53,53 50,56" fill="#fde047" stroke="#ca8a04" />
                  <path d="M 43 28 A 10 10 0 0 1 53 22" stroke="#fff" strokeWidth="3" fill="none" />
                  
                  {/* Зайчик из шарика (голубой) */}
                  <ellipse cx="75" cy="45" rx="12" ry="10" fill="#60a5fa" stroke="#2563eb" strokeWidth="3" />
                  <ellipse cx="70" cy="25" rx="4" ry="12" fill="#60a5fa" stroke="#2563eb" strokeWidth="3" transform="rotate(-15 70 25)" />
                  <ellipse cx="85" cy="25" rx="4" ry="12" fill="#60a5fa" stroke="#2563eb" strokeWidth="3" transform="rotate(15 85 25)" />
                  <path d="M 70 42 A 5 5 0 0 1 80 40" stroke="#fff" strokeWidth="2" fill="none" />
                </svg>
              )
            },
            {
              id: 'street-piano',
              title: 'Пианино',
              desc: 'уличное, для всех желающих',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Корпус */}
                  <rect x="15" y="30" width="70" height="55" fill="#92400e" stroke="#78350f" strokeWidth="3" />
                  <line x1="25" y1="30" x2="25" y2="85" stroke="#78350f" strokeWidth="2" />
                  <line x1="75" y1="30" x2="75" y2="85" stroke="#78350f" strokeWidth="2" />
                  
                  {/* Клавиатура */}
                  <rect x="10" y="55" width="80" height="12" fill="#f8fafc" stroke="#1f2937" strokeWidth="3" />
                  <line x1="20" y1="55" x2="20" y2="67" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="30" y1="55" x2="30" y2="67" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="40" y1="55" x2="40" y2="67" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="50" y1="55" x2="50" y2="67" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="60" y1="55" x2="60" y2="67" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="70" y1="55" x2="70" y2="67" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="80" y1="55" x2="80" y2="67" stroke="#9ca3af" strokeWidth="1" />
                  {/* Черные клавиши */}
                  <rect x="17" y="55" width="6" height="7" fill="#1f2937" stroke="none" />
                  <rect x="27" y="55" width="6" height="7" fill="#1f2937" stroke="none" />
                  <rect x="47" y="55" width="6" height="7" fill="#1f2937" stroke="none" />
                  <rect x="57" y="55" width="6" height="7" fill="#1f2937" stroke="none" />
                  <rect x="67" y="55" width="6" height="7" fill="#1f2937" stroke="none" />
                  
                  {/* Ноты и педали */}
                  <rect x="40" y="20" width="20" height="15" fill="#f1f5f9" stroke="#9ca3af" strokeWidth="2" />
                  <line x1="43" y1="25" x2="57" y2="25" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="43" y1="28" x2="57" y2="28" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="43" y1="31" x2="57" y2="31" stroke="#9ca3af" strokeWidth="1" />
                  <rect x="42" y="85" width="6" height="5" fill="#ca8a04" stroke="none" />
                  <rect x="52" y="85" width="6" height="5" fill="#ca8a04" stroke="none" />
                  
                  {/* Летящие ноты */}
                  <path d="M 65 15 L 65 5 L 75 8 L 75 18 M 65 10 L 75 13" stroke="#1f2937" strokeWidth="2" fill="none" />
                  <circle cx="63" cy="15" r="3" fill="#1f2937" stroke="none" />
                  <circle cx="73" cy="18" r="3" fill="#1f2937" stroke="none" />
                </svg>
              )
            },
            {
              id: 'birdhouse-bright',
              title: 'Скворечник',
              desc: 'покрашенный в яркий цвет',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ствол/Шест */}
                  <line x1="50" y1="65" x2="50" y2="100" stroke="#78350f" strokeWidth="6" />
                  <path d="M 45 80 L 50 85 M 55 90 L 50 95" stroke="#451a03" strokeWidth="2" />
                  
                  {/* Домик */}
                  <polygon points="30,65 70,65 70,40 50,20 30,40" fill="#4ade80" stroke="#16a34a" strokeWidth="4" />
                  <line x1="30" y1="50" x2="70" y2="50" stroke="#16a34a" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="30" y1="60" x2="70" y2="60" stroke="#16a34a" strokeWidth="2" strokeDasharray="4 4" />
                  
                  {/* Крыша */}
                  <path d="M 20 42 L 50 12 L 80 42" fill="none" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 25 38 L 50 13 L 75 38" fill="none" stroke="#fca5a5" strokeWidth="2" />
                  
                  {/* Отверстие и жердочка */}
                  <circle cx="50" cy="40" r="10" fill="#1f2937" stroke="#16a34a" strokeWidth="2" />
                  <line x1="50" y1="55" x2="50" y2="60" stroke="#f59e0b" strokeWidth="4" />
                  
                  {/* Птичка */}
                  <circle cx="53" cy="42" r="5" fill="#60a5fa" stroke="none" />
                  <path d="M 57 42 L 62 40 L 57 44 Z" fill="#fde047" stroke="none" />
                  <circle cx="55" cy="40" r="1" fill="#fff" stroke="none" />
                </svg>
              )
            },
            {
              id: 'animal-slide',
              title: 'Детская горка',
              desc: 'в виде животного или корабля',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Горка */}
                  <path d="M 70 50 Q 80 60 95 85" fill="none" stroke="#fcd34d" strokeWidth="10" strokeLinecap="round" />
                  <path d="M 70 50 Q 80 60 95 85" fill="none" stroke="#fbbf24" strokeWidth="4" />
                  
                  {/* Корабль */}
                  <path d="M 15 50 L 75 50 L 65 75 L 25 75 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="4" strokeLinejoin="round" />
                  <line x1="25" y1="75" x2="65" y2="75" stroke="#7f1d1d" strokeWidth="4" />
                  <circle cx="35" cy="62" r="4" fill="#f8fafc" stroke="#1e293b" strokeWidth="2" />
                  <circle cx="55" cy="62" r="4" fill="#f8fafc" stroke="#1e293b" strokeWidth="2" />
                  
                  {/* Мачта и флаг */}
                  <line x1="45" y1="50" x2="45" y2="15" stroke="#78350f" strokeWidth="4" />
                  <polygon points="45,15 70,25 45,35" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Лестница и штурвал */}
                  <line x1="15" y1="50" x2="5" y2="85" stroke="#9ca3af" strokeWidth="4" />
                  <line x1="12" y1="60" x2="5" y2="60" stroke="#9ca3af" strokeWidth="3" />
                  <line x1="9" y1="72" x2="5" y2="72" stroke="#9ca3af" strokeWidth="3" />
                  <circle cx="25" cy="40" r="6" fill="none" stroke="#ca8a04" strokeWidth="2" />
                  <line x1="19" y1="40" x2="31" y2="40" stroke="#ca8a04" strokeWidth="2" />
                  <line x1="25" y1="34" x2="25" y2="46" stroke="#ca8a04" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'nest-swing',
              title: 'Качели-гнездо',
              desc: 'большой плетеный круг',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ветка дерева */}
                  <path d="M 5 20 C 30 15 70 25 95 15" stroke="#451a03" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 20 18 L 30 5 M 75 22 L 85 10" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Веревки */}
                  <line x1="30" y1="20" x2="25" y2="65" stroke="#9ca3af" strokeWidth="3" />
                  <line x1="70" y1="20" x2="75" y2="65" stroke="#9ca3af" strokeWidth="3" />
                  <path d="M 25 40 L 35 60 M 75 40 L 65 60" stroke="#9ca3af" strokeWidth="2" />
                  
                  {/* Гнездо (Кольцо) */}
                  <ellipse cx="50" cy="70" rx="35" ry="12" fill="none" stroke="#2563eb" strokeWidth="6" />
                  <ellipse cx="50" cy="70" rx="35" ry="12" fill="none" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 4" />
                  
                  {/* Сетка внутри гнезда */}
                  <path d="M 25 70 Q 50 60 75 70 M 30 65 Q 50 80 70 65 M 40 60 L 40 80 M 60 60 L 60 80 M 50 58 L 50 82" stroke="#1e3a8a" strokeWidth="2" fill="none" opacity="0.7" />
                </svg>
              )
            },
            {
              id: 'sandbox-shovel',
              title: 'Лопатка',
              desc: 'забытая в песочнице',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Песок */}
                  <path d="M 5 85 Q 25 65 50 80 T 95 85 L 95 100 L 5 100 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="3" />
                  <circle cx="30" cy="85" r="1.5" fill="#b45309" stroke="none" />
                  <circle cx="70" cy="90" r="1.5" fill="#b45309" stroke="none" />
                  <circle cx="50" cy="92" r="1.5" fill="#b45309" stroke="none" />
                  <circle cx="85" cy="82" r="1.5" fill="#b45309" stroke="none" />
                  
                  {/* Формочка-звездочка */}
                  <path d="M 75 75 L 78 68 L 85 68 L 80 63 L 82 56 L 75 60 L 68 56 L 70 63 L 65 68 L 72 68 Z" fill="#f43f5e" stroke="#be123c" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Лопатка */}
                  <path d="M 25 75 L 45 45" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 20 65 L 35 80 Q 25 90 15 80 Q 5 70 20 65 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 40 40 L 50 50 M 42 38 L 52 48" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" />
                  <line x1="40" y1="40" x2="45" y2="35" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'bird-tracks-mud',
              title: 'Следы птичьих лап',
              desc: 'на влажной дорожке',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Влажная дорожка/лужа */}
                  <ellipse cx="50" cy="50" rx="45" ry="30" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" strokeDasharray="10 5" />
                  <path d="M 60 60 Q 75 50 85 65 Q 90 75 75 80 Q 55 85 60 60 Z" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="2" opacity="0.6" />
                  
                  {/* След 1 */}
                  <path d="M 35 35 L 35 50 M 35 50 L 25 60 M 35 50 L 35 65 M 35 50 L 45 60" stroke="#4b5563" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* След 2 */}
                  <path d="M 65 25 L 65 40 M 65 40 L 55 50 M 65 40 L 65 55 M 65 40 L 75 50" stroke="#4b5563" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* След 3 */}
                  <path d="M 45 75 L 45 90 M 45 90 L 35 100 M 45 90 L 45 105 M 45 90 L 55 100" stroke="#4b5563" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Упавшее перышко */}
                  <path d="M 80 30 Q 70 25 65 35 Q 75 40 80 30 Z" fill="#fff" stroke="#d1d5db" strokeWidth="2" />
                  <line x1="82" y1="28" x2="65" y2="35" stroke="#d1d5db" strokeWidth="1" />
                </svg>
              )
            },
            {
              id: 'soap-bubbles',
              title: 'Мыльные пузыри',
              desc: 'летящие по ветру',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ветер */}
                  <path d="M 10 90 Q 30 70 60 85 T 100 70" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5 5" fill="none" />
                  <path d="M 5 60 Q 25 50 50 65 T 90 50" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3 6" fill="none" />
                  
                  {/* Пузырь 1 (Большой) */}
                  <circle cx="45" cy="40" r="22" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2" opacity="0.8" />
                  <path d="M 30 30 A 15 15 0 0 1 50 22" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" />
                  <circle cx="60" cy="50" r="2" fill="#fff" stroke="none" />
                  <path d="M 35 55 A 18 18 0 0 0 55 58" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
                  
                  {/* Пузырь 2 (Средний) */}
                  <circle cx="80" cy="30" r="12" fill="#fce7f3" stroke="#f472b6" strokeWidth="2" opacity="0.8" />
                  <path d="M 73 24 A 8 8 0 0 1 84 20" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
                  
                  {/* Пузырь 3 (Маленький) */}
                  <circle cx="20" cy="20" r="8" fill="#dcfce7" stroke="#4ade80" strokeWidth="2" opacity="0.8" />
                  <path d="M 16 16 A 5 5 0 0 1 23 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              )
            },
            {
              id: 'tree-shadow-grass',
              title: 'Тень',
              desc: 'от раскидистого дерева',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Трава фон */}
                  <rect x="5" y="40" width="90" height="55" rx="5" fill="#bbf7d0" stroke="#22c55e" strokeWidth="3" />
                  
                  {/* Пятно тени */}
                  <path d="M 15 70 Q 25 50 50 55 T 85 65 Q 90 85 65 90 T 15 70 Z" fill="#14532d" opacity="0.5" stroke="none" />
                  
                  {/* Просветы от листьев (зайчики) */}
                  <circle cx="45" cy="65" r="4" fill="#fef08a" stroke="none" opacity="0.8" />
                  <circle cx="60" cy="75" r="3" fill="#fef08a" stroke="none" opacity="0.8" />
                  <circle cx="35" cy="80" r="2.5" fill="#fef08a" stroke="none" opacity="0.8" />
                  
                  {/* Ствол дерева сбоку */}
                  <path d="M -5 30 L 15 95 L 5 95 Z" fill="#78350f" stroke="#451a03" strokeWidth="2" />
                  
                  {/* Детали травы */}
                  <path d="M 75 45 L 75 55 M 72 50 L 75 55 M 78 50 L 75 55" stroke="#16a34a" strokeWidth="2" />
                  <path d="M 25 45 L 25 50 M 23 48 L 25 50 M 27 48 L 25 50" stroke="#16a34a" strokeWidth="2" />
                  
                  {/* Опавшие листья */}
                  <path d="M 80 80 Q 85 75 85 80 Q 80 85 80 80 Z" fill="#f59e0b" stroke="none" />
                  <path d="M 25 60 Q 30 55 30 60 Q 25 65 25 60 Z" fill="#ea580c" stroke="none" />
                </svg>
              )
            }
          ]
      }
]
  },
  {
      id: 'ch3',
      title: 'Деревня и Дача',
      emoji: '🏡',
      superTasks: [
        { id: 'ch3-st1', type: '👃 Запах', text: 'Запах сушёного сена или свежескошенной травы.' },
        { id: 'ch3-st2', type: '🔊 Звук', text: 'Стук топора где-то вдалеке.' },
        { id: 'ch3-st3', type: '🖐️ Текстура', text: 'Потрогай кору очень старого дерева и гладкую поверхность молодого листа.' }
      ],
      sections: [
        {
          id: 'ch3-architecture',
          title: '🏡 Постройки и границы',
          subtitle: 'Архитектура',
          theme: 'amber',
          items: [
            {
              id: 'carved-window',
              title: 'Резные наличники',
              desc: 'деревянные узоры вокруг окон',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Стена дома */}
                  <rect x="10" y="10" width="80" height="80" fill="#d6d3d1" stroke="none" />
                  <line x1="10" y1="30" x2="90" y2="30" stroke="#a8a29e" strokeWidth="1" />
                  <line x1="10" y1="50" x2="90" y2="50" stroke="#a8a29e" strokeWidth="1" />
                  <line x1="10" y1="70" x2="90" y2="70" stroke="#a8a29e" strokeWidth="1" />
                  
                  {/* Окно (стекло и свет) */}
                  <rect x="35" y="30" width="30" height="45" fill="#fde047" stroke="#92400e" strokeWidth="2" />
                  <line x1="50" y1="30" x2="50" y2="75" stroke="#92400e" strokeWidth="2" />
                  <line x1="35" y1="50" x2="65" y2="50" stroke="#92400e" strokeWidth="2" />
                  
                  {/* Блики на стекле */}
                  <line x1="40" y1="35" x2="45" y2="35" stroke="#fef08a" strokeWidth="2" />
                  <line x1="55" y1="65" x2="60" y2="60" stroke="#fef08a" strokeWidth="2" />
                  
                  {/* Резные наличники (дерево) */}
                  <path d="M 30 25 L 70 25 L 75 20 L 25 20 Z" fill="#b45309" stroke="#78350f" strokeWidth="2" />
                  <path d="M 30 25 L 30 80 L 25 80 L 25 25 Z" fill="#b45309" stroke="#78350f" strokeWidth="2" />
                  <path d="M 70 25 L 70 80 L 75 80 L 75 25 Z" fill="#b45309" stroke="#78350f" strokeWidth="2" />
                  <path d="M 25 80 L 75 80 L 70 75 L 30 75 Z" fill="#b45309" stroke="#78350f" strokeWidth="2" />
                  
                  {/* Декоративные узоры */}
                  <path d="M 50 25 C 40 10 60 10 50 25 Z" fill="#f59e0b" stroke="#92400e" strokeWidth="2" />
                  <circle cx="25" cy="25" r="4" fill="#f59e0b" stroke="#92400e" />
                  <circle cx="75" cy="25" r="4" fill="#f59e0b" stroke="#92400e" />
                  <path d="M 25 45 Q 20 50 25 55" stroke="#92400e" strokeWidth="3" fill="none" />
                  <path d="M 75 45 Q 80 50 75 55" stroke="#92400e" strokeWidth="3" fill="none" />
                </svg>
              )
            },
            {
              id: 'greenhouse',
              title: 'Теплица',
              desc: 'покрытая плёнкой или поликарбонатом',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Задний фон (земля и зелень) */}
                  <path d="M 15 85 L 85 85 L 85 55 C 85 30 15 30 15 55 Z" fill="#dcfce7" stroke="none" />
                  <rect x="25" y="75" width="50" height="10" fill="#78350f" stroke="none" />
                  
                  {/* Помидоры внутри */}
                  <circle cx="35" cy="65" r="4" fill="#ef4444" stroke="none" />
                  <circle cx="45" cy="55" r="4" fill="#ef4444" stroke="none" />
                  <circle cx="60" cy="70" r="4" fill="#ef4444" stroke="none" />
                  <path d="M 35 75 L 35 55 M 45 75 L 45 45 M 60 75 L 60 60" stroke="#16a34a" strokeWidth="2" />
                  
                  {/* Каркас и стекло */}
                  <path d="M 15 85 L 85 85 L 85 55 C 85 25 15 25 15 55 Z" fill="#f0f9ff" opacity="0.6" stroke="#94a3b8" strokeWidth="4" />
                  <path d="M 32 85 L 32 40 M 50 85 L 50 30 M 68 85 L 68 40" stroke="#94a3b8" strokeWidth="3" />
                  <path d="M 15 65 L 85 65 M 20 45 L 80 45" stroke="#94a3b8" strokeWidth="3" />
                  
                  {/* Блики поликарбоната */}
                  <line x1="25" y1="35" x2="40" y2="35" stroke="#ffffff" strokeWidth="4" />
                  <line x1="20" y1="55" x2="30" y2="55" stroke="#ffffff" strokeWidth="4" />
                  
                  {/* Форточка */}
                  <rect x="40" y="32" width="20" height="15" fill="none" stroke="#64748b" strokeWidth="2" />
                  <line x1="40" y1="32" x2="45" y2="25" stroke="#64748b" strokeWidth="2" />
                  <line x1="60" y1="32" x2="55" y2="25" stroke="#64748b" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'old-barn-lock',
              title: 'Старый сарай',
              desc: 'с огромным навесным замком',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Доски сарая */}
                  <rect x="10" y="10" width="80" height="80" fill="#78716c" stroke="#44403c" strokeWidth="4" />
                  <line x1="26" y1="10" x2="26" y2="90" stroke="#57534e" strokeWidth="3" />
                  <line x1="42" y1="10" x2="42" y2="90" stroke="#57534e" strokeWidth="3" />
                  <line x1="58" y1="10" x2="58" y2="90" stroke="#57534e" strokeWidth="3" />
                  <line x1="74" y1="10" x2="74" y2="90" stroke="#57534e" strokeWidth="3" />
                  
                  {/* Щели и гвозди */}
                  <line x1="42" y1="30" x2="42" y2="40" stroke="#1c1917" strokeWidth="4" />
                  <line x1="58" y1="60" x2="58" y2="75" stroke="#1c1917" strokeWidth="4" />
                  <circle cx="18" cy="20" r="1" fill="#1c1917" stroke="none" />
                  <circle cx="82" cy="80" r="1" fill="#1c1917" stroke="none" />
                  
                  {/* Поперечная балка и петли */}
                  <rect x="20" y="45" width="60" height="15" fill="#a8a29e" stroke="#44403c" strokeWidth="3" />
                  <circle cx="30" cy="52" r="2" fill="#1c1917" stroke="none" />
                  <circle cx="70" cy="52" r="2" fill="#1c1917" stroke="none" />
                  
                  {/* Замок */}
                  <path d="M 45 45 C 45 35 55 35 55 45" fill="none" stroke="#d1d5db" strokeWidth="5" />
                  <rect x="40" y="45" width="20" height="25" rx="3" fill="#cbd5e1" stroke="#475569" strokeWidth="3" />
                  <circle cx="50" cy="55" r="3" fill="#1e293b" stroke="none" />
                  <polygon points="48,55 52,55 51,62 49,62" fill="#1e293b" stroke="none" />
                </svg>
              )
            },
            {
              id: 'woodpile',
              title: 'Поленница',
              desc: 'аккуратно сложенная гора дров',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Боковые столбики */}
                  <line x1="15" y1="15" x2="15" y2="90" stroke="#78350f" strokeWidth="6" />
                  <line x1="85" y1="15" x2="85" y2="90" stroke="#78350f" strokeWidth="6" />
                  
                  {/* Бревна */}
                  <g fill="#fcd34d" stroke="#92400e" strokeWidth="2">
                    {/* Нижний ряд */}
                    <circle cx="28" cy="80" r="10" /> <path d="M 28 80 Q 32 75 28 70" stroke="#b45309" />
                    <circle cx="50" cy="80" r="10" /> <path d="M 50 80 Q 54 75 50 70" stroke="#b45309" />
                    <circle cx="72" cy="80" r="10" /> <path d="M 72 80 Q 76 75 72 70" stroke="#b45309" />
                    
                    {/* Второй ряд */}
                    <circle cx="39" cy="63" r="10" /> <path d="M 39 63 Q 43 58 39 53" stroke="#b45309" />
                    <circle cx="61" cy="63" r="10" /> <path d="M 61 63 Q 65 58 61 53" stroke="#b45309" />
                    
                    {/* Третий ряд */}
                    <circle cx="28" cy="46" r="10" /> <path d="M 28 46 Q 32 41 28 36" stroke="#b45309" />
                    <circle cx="50" cy="46" r="10" /> <path d="M 50 46 Q 54 41 50 36" stroke="#b45309" />
                    <circle cx="72" cy="46" r="10" /> <path d="M 72 46 Q 76 41 72 36" stroke="#b45309" />
                    
                    {/* Верхний ряд */}
                    <circle cx="39" cy="29" r="10" /> <path d="M 39 29 Q 43 24 39 19" stroke="#b45309" />
                    <circle cx="61" cy="29" r="10" /> <path d="M 61 29 Q 65 24 61 19" stroke="#b45309" />
                  </g>
                  <circle cx="50" cy="12" r="10" fill="#fcd34d" stroke="#92400e" strokeWidth="2" />
                  <path d="M 50 12 Q 54 7 50 2" stroke="#b45309" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'attic-window',
              title: 'Чердачное окно',
              desc: 'под самой крышей',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Стена */}
                  <polygon points="10,90 50,40 90,90" fill="#fef3c7" stroke="#d97706" strokeWidth="4" />
                  <line x1="20" y1="90" x2="20" y2="77" stroke="#d97706" strokeWidth="2" />
                  <line x1="30" y1="90" x2="30" y2="65" stroke="#d97706" strokeWidth="2" />
                  <line x1="70" y1="90" x2="70" y2="65" stroke="#d97706" strokeWidth="2" />
                  <line x1="80" y1="90" x2="80" y2="77" stroke="#d97706" strokeWidth="2" />
                  
                  {/* Крыша (черепица) */}
                  <path d="M 5 95 L 50 35 L 95 95" fill="none" stroke="#7f1d1d" strokeWidth="12" strokeLinejoin="miter" />
                  <path d="M 5 95 L 50 35 L 95 95" fill="none" stroke="#ef4444" strokeWidth="4" />
                  <path d="M 20 75 L 50 35 L 80 75" fill="none" stroke="#991b1b" strokeWidth="2" />
                  
                  {/* Само окно */}
                  <circle cx="50" cy="65" r="15" fill="#1e3a8a" stroke="#78350f" strokeWidth="6" />
                  <circle cx="50" cy="65" r="15" fill="#fef08a" stroke="none" opacity="0.8" />
                  <line x1="35" y1="65" x2="65" y2="65" stroke="#78350f" strokeWidth="4" />
                  <line x1="50" y1="50" x2="50" y2="80" stroke="#78350f" strokeWidth="4" />
                  
                  {/* Спящий кот (силуэт) */}
                  <path d="M 40 78 C 40 70 55 70 58 78 Z" fill="#1f2937" stroke="none" />
                  <polygon points="42,75 45,70 48,75" fill="#1f2937" stroke="none" />
                  <polygon points="53,75 56,70 59,75" fill="#1f2937" stroke="none" />
                </svg>
              )
            },
            {
              id: 'cellar',
              title: 'Погреб',
              desc: 'дверь, ведущая прямо в землю',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Холм/земля */}
                  <path d="M 5 85 Q 50 20 95 85 Z" fill="#bbf7d0" stroke="#22c55e" strokeWidth="4" />
                  <path d="M 15 85 Q 20 70 30 85 M 75 85 Q 80 70 85 85 M 25 65 Q 35 55 45 60 M 65 55 Q 75 50 80 65" stroke="#16a34a" strokeWidth="2" fill="none" />
                  
                  {/* Двери погреба */}
                  <polygon points="35,80 45,45 65,45 75,80 55,80" fill="#78350f" stroke="#451a03" strokeWidth="4" strokeLinejoin="round" />
                  <polygon points="35,80 45,45 55,45 55,80" fill="#92400e" stroke="#451a03" strokeWidth="2" strokeLinejoin="round" />
                  <line x1="55" y1="45" x2="55" y2="80" stroke="#1c1917" strokeWidth="4" />
                  
                  {/* Петли и ручки */}
                  <line x1="42" y1="55" x2="38" y2="55" stroke="#1c1917" strokeWidth="4" />
                  <line x1="39" y1="70" x2="35" y2="70" stroke="#1c1917" strokeWidth="4" />
                  <line x1="68" y1="55" x2="72" y2="55" stroke="#1c1917" strokeWidth="4" />
                  <line x1="71" y1="70" x2="75" y2="70" stroke="#1c1917" strokeWidth="4" />
                  
                  <circle cx="51" cy="65" r="2" fill="#1c1917" stroke="none" />
                  <circle cx="59" cy="65" r="2" fill="#1c1917" stroke="none" />
                </svg>
              )
            },
            {
              id: 'chimney',
              title: 'Печная труба',
              desc: 'из которой идёт дым',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Крыша */}
                  <path d="M 10 90 L 50 60 L 90 90" stroke="#b45309" strokeWidth="8" />
                  <path d="M 10 90 L 50 60 L 90 90" stroke="#fcd34d" strokeWidth="2" />
                  
                  {/* Труба */}
                  <rect x="35" y="40" width="30" height="35" fill="#ef4444" stroke="#7f1d1d" strokeWidth="4" />
                  <rect x="30" y="32" width="40" height="8" fill="#b91c1c" stroke="#7f1d1d" strokeWidth="4" />
                  
                  {/* Рисунок кирпичей */}
                  <line x1="35" y1="50" x2="65" y2="50" stroke="#fca5a5" strokeWidth="2" />
                  <line x1="35" y1="60" x2="65" y2="60" stroke="#fca5a5" strokeWidth="2" />
                  <line x1="35" y1="70" x2="65" y2="70" stroke="#fca5a5" strokeWidth="2" />
                  <line x1="50" y1="40" x2="50" y2="50" stroke="#fca5a5" strokeWidth="2" />
                  <line x1="45" y1="50" x2="45" y2="60" stroke="#fca5a5" strokeWidth="2" />
                  <line x1="55" y1="60" x2="55" y2="70" stroke="#fca5a5" strokeWidth="2" />
                  
                  {/* Дым */}
                  <path d="M 50 32 C 40 25 35 15 45 10 C 55 5 65 15 55 20 C 65 25 60 35 50 32" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="3" />
                  <path d="M 55 15 C 65 10 75 20 65 25" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="3" />
                  <circle cx="50" cy="15" r="3" fill="#cbd5e1" stroke="none" />
                </svg>
              )
            },
            {
              id: 'porch',
              title: 'Крыльцо',
              desc: 'на котором больше трёх ступенек',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Дверь на заднем плане */}
                  <rect x="40" y="10" width="40" height="50" fill="#fcd34d" stroke="#b45309" strokeWidth="4" />
                  <rect x="45" y="15" width="12" height="20" fill="#60a5fa" stroke="#b45309" strokeWidth="2" />
                  <rect x="63" y="15" width="12" height="20" fill="#60a5fa" stroke="#b45309" strokeWidth="2" />
                  <circle cx="75" cy="40" r="2" fill="#1c1917" stroke="none" />
                  
                  {/* Ступени (деревянные) */}
                  <polygon points="35,60 85,60 80,70 30,70" fill="#d97706" stroke="#92400e" strokeWidth="3" strokeLinejoin="round" />
                  <polygon points="25,70 85,70 80,80 20,80" fill="#b45309" stroke="#78350f" strokeWidth="3" strokeLinejoin="round" />
                  <polygon points="15,80 85,80 80,90 10,90" fill="#92400e" stroke="#451a03" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Перила */}
                  <line x1="20" y1="80" x2="20" y2="50" stroke="#451a03" strokeWidth="4" />
                  <line x1="30" y1="70" x2="30" y2="40" stroke="#451a03" strokeWidth="4" />
                  <line x1="40" y1="60" x2="40" y2="30" stroke="#451a03" strokeWidth="4" />
                  <line x1="15" y1="55" x2="45" y2="25" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
                  <line x1="15" y1="55" x2="45" y2="25" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'picket-fence',
              title: 'Забор из штакетника',
              desc: 'с просветами между досками',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Поперечные балки */}
                  <line x1="5" y1="40" x2="95" y2="40" stroke="#a8a29e" strokeWidth="6" />
                  <line x1="5" y1="70" x2="95" y2="70" stroke="#a8a29e" strokeWidth="6" />
                  
                  {/* Доски (штакетины) */}
                  <polygon points="15,20 25,10 35,20 35,90 15,90" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" strokeLinejoin="round" />
                  <polygon points="40,20 50,10 60,20 60,90 40,90" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" strokeLinejoin="round" />
                  <polygon points="65,20 75,10 85,20 85,90 65,90" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Текстура дерева и гвозди */}
                  <line x1="25" y1="30" x2="25" y2="80" stroke="#e2e8f0" strokeWidth="2" />
                  <line x1="50" y1="30" x2="50" y2="80" stroke="#e2e8f0" strokeWidth="2" />
                  <line x1="75" y1="30" x2="75" y2="80" stroke="#e2e8f0" strokeWidth="2" />
                  
                  <circle cx="25" cy="40" r="1.5" fill="#475569" stroke="none" />
                  <circle cx="50" cy="40" r="1.5" fill="#475569" stroke="none" />
                  <circle cx="75" cy="40" r="1.5" fill="#475569" stroke="none" />
                  <circle cx="25" cy="70" r="1.5" fill="#475569" stroke="none" />
                  <circle cx="50" cy="70" r="1.5" fill="#475569" stroke="none" />
                  <circle cx="75" cy="70" r="1.5" fill="#475569" stroke="none" />
                  
                  {/* Трава внизу */}
                  <path d="M 10 95 L 20 80 L 30 95 M 40 95 L 45 85 L 55 95 M 70 95 L 80 80 L 90 95" stroke="#22c55e" strokeWidth="3" fill="none" />
                </svg>
              )
            },
            {
              id: 'creaky-gate',
              title: 'Калитка',
              desc: 'которая скрипит при открывании',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Опорный столб */}
                  <rect x="10" y="10" width="10" height="85" fill="#a16207" stroke="#713f12" strokeWidth="3" />
                  
                  {/* Каркас калитки */}
                  <rect x="25" y="20" width="60" height="70" fill="#fcd34d" stroke="#b45309" strokeWidth="4" strokeLinejoin="round" />
                  <line x1="25" y1="20" x2="85" y2="90" stroke="#b45309" strokeWidth="4" />
                  
                  {/* Доски */}
                  <line x1="40" y1="20" x2="40" y2="90" stroke="#b45309" strokeWidth="2" />
                  <line x1="55" y1="20" x2="55" y2="90" stroke="#b45309" strokeWidth="2" />
                  <line x1="70" y1="20" x2="70" y2="90" stroke="#b45309" strokeWidth="2" />
                  
                  {/* Массивные кованые петли */}
                  <path d="M 15 30 L 45 30 L 40 25 M 45 30 L 40 35" stroke="#1f2937" strokeWidth="5" strokeLinejoin="round" />
                  <path d="M 15 75 L 45 75 L 40 70 M 45 75 L 40 80" stroke="#1f2937" strokeWidth="5" strokeLinejoin="round" />
                  <circle cx="35" cy="30" r="1.5" fill="#fff" stroke="none" />
                  <circle cx="35" cy="75" r="1.5" fill="#fff" stroke="none" />
                  
                  {/* Ручка/засов */}
                  <rect x="75" y="45" width="15" height="5" fill="#1f2937" stroke="none" />
                  <circle cx="80" cy="47.5" r="4" fill="#374151" stroke="none" />
                </svg>
              )
            }
          ]
        },
	    {
          id: 'ch3-garden',
          title: '🍎 Огород и Сад',
          subtitle: 'Зелёные находки',
          theme: 'emerald',
          items: [
            {
              id: 'scarecrow',
              title: 'Пугало',
              desc: 'в старой шляпе или одежде',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Деревянный каркас */}
                  <line x1="50" y1="20" x2="50" y2="95" stroke="#78350f" strokeWidth="6" />
                  <line x1="20" y1="40" x2="80" y2="40" stroke="#78350f" strokeWidth="6" />
                  
                  {/* Солома */}
                  <path d="M 15 45 L 25 55 M 20 40 L 20 55 M 25 40 L 15 50" stroke="#fde047" strokeWidth="3" />
                  <path d="M 85 45 L 75 55 M 80 40 L 80 55 M 75 40 L 85 50" stroke="#fde047" strokeWidth="3" />
                  <path d="M 45 75 L 40 90 M 50 75 L 50 90 M 55 75 L 60 90" stroke="#fde047" strokeWidth="3" />
                  
                  {/* Рубашка */}
                  <path d="M 35 30 L 65 30 L 80 45 L 70 50 L 60 40 L 60 75 L 40 75 L 40 40 L 30 50 L 20 45 Z" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="50" y1="30" x2="50" y2="75" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="4 4" />
                  
                  {/* Заплатки */}
                  <rect x="42" y="55" width="8" height="8" fill="#ef4444" stroke="#7f1d1d" strokeWidth="2" />
                  <line x1="44" y1="55" x2="44" y2="52" stroke="#7f1d1d" strokeWidth="1" />
                  <rect x="62" y="38" width="6" height="6" fill="#fcd34d" stroke="#ca8a04" strokeWidth="2" transform="rotate(15 62 38)" />
                  
                  {/* Голова (мешок) */}
                  <circle cx="50" cy="25" r="12" fill="#d6d3d1" stroke="#78716c" strokeWidth="3" />
                  <circle cx="45" cy="22" r="2" fill="#1c1917" stroke="none" />
                  <circle cx="55" cy="22" r="2" fill="#1c1917" stroke="none" />
                  <path d="M 45 28 L 55 28" stroke="#1c1917" strokeWidth="2" strokeDasharray="2 2" />
                  
                  {/* Шляпа */}
                  <path d="M 30 18 L 70 18 L 60 5 L 40 5 Z" fill="#b45309" stroke="#78350f" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="40" y1="14" x2="60" y2="14" stroke="#78350f" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'sunflower',
              title: 'Подсолнух',
              desc: 'выше тебя ростом',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Стебель и листья */}
                  <path d="M 50 50 Q 55 75 50 100" stroke="#16a34a" strokeWidth="6" fill="none" />
                  <path d="M 52 70 Q 75 60 85 45 Q 70 55 52 70 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  <path d="M 48 85 Q 20 80 10 65 Q 25 75 48 85 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  
                  {/* Лепестки (задний и передний ряд) */}
                  <g fill="#fcd34d" stroke="#d97706" strokeWidth="2">
                    {[3].map(angle => (
                      <ellipse key={angle} cx="50" cy="20" rx="6" ry="20" transform={`rotate(${angle} 50 35)`} />
                    ))}
                  </g>
                  <g fill="#fde047" stroke="#ca8a04" strokeWidth="2">
                    {[4, 5].map(angle => (
                      <ellipse key={angle} cx="50" cy="20" rx="5" ry="18" transform={`rotate(${angle} 50 35)`} />
                    ))}
                  </g>
                  
                  {/* Сердцевина (семечки) */}
                  <circle cx="50" cy="35" r="16" fill="#78350f" stroke="#451a03" strokeWidth="3" />
                  <circle cx="50" cy="35" r="12" fill="none" stroke="#451a03" strokeWidth="2" strokeDasharray="2 4" />
                  <circle cx="50" cy="35" r="8" fill="none" stroke="#451a03" strokeWidth="2" strokeDasharray="2 4" />
                  <circle cx="50" cy="35" r="4" fill="none" stroke="#451a03" strokeWidth="2" strokeDasharray="1 3" />
                </svg>
              )
            },
            {
              id: 'strawberry',
              title: 'Клубника',
              desc: 'найди самую красную',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Земля и усы */}
                  <path d="M 10 85 Q 50 75 90 85" fill="none" stroke="#a16207" strokeWidth="4" />
                  <path d="M 20 80 Q 30 50 50 30" fill="none" stroke="#16a34a" strokeWidth="3" />
                  <path d="M 50 30 Q 70 50 85 80" fill="none" stroke="#16a34a" strokeWidth="2" />
                  
                  {/* Листья */}
                  <path d="M 50 30 C 35 25 30 15 40 10 C 45 20 50 25 50 30 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  <path d="M 50 30 C 65 25 70 15 60 10 C 55 20 50 25 50 30 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  <path d="M 50 30 C 40 40 25 45 35 50 C 45 45 50 35 50 30 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  <path d="M 50 30 C 60 40 75 45 65 50 C 55 45 50 35 50 30 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  
                  {/* Ягода */}
                  <path d="M 35 50 C 35 30 65 30 65 50 C 65 75 50 90 50 90 C 50 90 35 75 35 50 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Семечки */}
                  <g fill="#fde047" stroke="none">
                    <circle cx="45" cy="45" r="1.5" /> <circle cx="55" cy="45" r="1.5" />
                    <circle cx="40" cy="55" r="1.5" /> <circle cx="50" cy="55" r="1.5" /> <circle cx="60" cy="55" r="1.5" />
                    <circle cx="45" cy="65" r="1.5" /> <circle cx="55" cy="65" r="1.5" />
                    <circle cx="50" cy="75" r="1.5" />
                  </g>
                </svg>
              )
            },
            {
              id: 'pumpkin',
              title: 'Тыква или кабачок',
              desc: 'под огромными листьями',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Огромные листья на фоне */}
                  <path d="M 80 20 C 100 10 100 40 85 50 C 95 60 80 80 65 70 C 60 90 35 90 40 70 C 25 80 10 60 25 50 C 10 40 10 10 30 20 C 45 5 70 5 80 20 Z" fill="#16a34a" stroke="#14532d" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 52 45 L 25 25 M 52 45 L 80 25 M 52 45 L 30 65 M 52 45 L 75 65" stroke="#14532d" strokeWidth="2" opacity="0.6" />
                  
                  {/* Тыква */}
                  <ellipse cx="50" cy="65" rx="35" ry="25" fill="#f97316" stroke="#c2410c" strokeWidth="4" />
                  <ellipse cx="50" cy="65" rx="22" ry="25" fill="none" stroke="#c2410c" strokeWidth="3" />
                  <ellipse cx="50" cy="65" rx="10" ry="25" fill="none" stroke="#c2410c" strokeWidth="3" />
                  
                  {/* Плодоножка и ус */}
                  <path d="M 50 40 C 45 30 55 25 60 20" fill="none" stroke="#15803d" strokeWidth="5" strokeLinecap="round" />
                  <path d="M 55 30 Q 75 30 70 45 Q 65 60 80 55" fill="none" stroke="#16a34a" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'apple-tree',
              title: 'Яблоня',
              desc: 'с плодами или цветами',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ствол */}
                  <path d="M 45 95 L 45 60 L 35 45 M 55 95 L 55 60 L 65 45 M 45 60 L 55 60 M 50 60 L 50 40" stroke="#78350f" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Крона */}
                  <path d="M 50 10 C 20 10 15 40 30 55 C 20 70 45 75 50 70 C 55 75 80 70 70 55 C 85 40 80 10 50 10 Z" fill="#22c55e" stroke="#15803d" strokeWidth="4" strokeLinejoin="round" />
                  <path d="M 30 30 Q 40 20 50 25" stroke="#15803d" strokeWidth="2" fill="none" />
                  <path d="M 70 35 Q 60 25 55 35" stroke="#15803d" strokeWidth="2" fill="none" />
                  
                  {/* Яблоки */}
                  <circle cx="40" cy="35" r="5" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                  <path d="M 40 30 Q 43 28 45 27" stroke="#15803d" strokeWidth="2" fill="none" />
                  
                  <circle cx="65" cy="45" r="5" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                  <path d="M 65 40 Q 68 38 70 37" stroke="#15803d" strokeWidth="2" fill="none" />
                  
                  <circle cx="48" cy="55" r="5" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                  <path d="M 48 50 Q 51 48 53 47" stroke="#15803d" strokeWidth="2" fill="none" />
                </svg>
              )
            },
            {
              id: 'raspberry-bush',
              title: 'Куст',
              desc: 'колючей малины или крыжовника',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ветви с шипами */}
                  <path d="M 50 95 C 40 70 30 40 15 25 M 50 95 C 50 60 55 40 50 15 M 50 95 C 60 70 70 50 85 30" stroke="#78350f" strokeWidth="4" />
                  <path d="M 32 60 L 28 58 M 40 40 L 35 38 M 52 70 L 48 68 M 53 45 L 57 43 M 65 60 L 68 58 M 75 45 L 78 43" stroke="#78350f" strokeWidth="2" />
                  
                  {/* Листья */}
                  <path d="M 25 35 Q 35 25 40 35 Q 35 45 25 35 Z" fill="#16a34a" stroke="#14532d" strokeWidth="2" />
                  <path d="M 55 25 Q 65 15 70 25 Q 65 35 55 25 Z" fill="#16a34a" stroke="#14532d" strokeWidth="2" />
                  <path d="M 75 55 Q 85 45 90 55 Q 85 65 75 55 Z" fill="#16a34a" stroke="#14532d" strokeWidth="2" />
                  <path d="M 20 65 Q 10 55 5 65 Q 10 75 20 65 Z" fill="#16a34a" stroke="#14532d" strokeWidth="2" />
                  
                  {/* Ягоды малины */}
                  <g fill="#e11d48" stroke="#9f1239" strokeWidth="1.5">
                    {/* Ягода 1 */}
                    <circle cx="30" cy="20" r="3" /><circle cx="35" cy="20" r="3" /><circle cx="32.5" cy="16" r="3" /><circle cx="32.5" cy="24" r="3" /><circle cx="36" cy="24" r="3" />
                    {/* Ягода 2 */}
                    <circle cx="65" cy="40" r="3" /><circle cx="70" cy="40" r="3" /><circle cx="67.5" cy="36" r="3" /><circle cx="67.5" cy="44" r="3" /><circle cx="71" cy="44" r="3" />
                    {/* Ягода 3 */}
                    <circle cx="40" cy="65" r="3" /><circle cx="45" cy="65" r="3" /><circle cx="42.5" cy="61" r="3" /><circle cx="42.5" cy="69" r="3" /><circle cx="46" cy="69" r="3" />
                  </g>
                </svg>
              )
            },
            {
              id: 'Berries',
              title: 'Ягоды',
              desc: 'Ветка с кучей ягод',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Лоза и листья */}
                  <path d="M 10 20 Q 30 15 50 20 T 90 20" stroke="#92400e" strokeWidth="5" fill="none" />
                  <path d="M 25 20 Q 15 40 30 50 Q 40 35 25 20 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="2" />
                  <path d="M 75 20 Q 85 40 70 50 Q 60 35 75 20 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="2" />
                  
                  {/* Завитушка */}
                  <path d="M 50 20 Q 60 30 55 40 Q 45 45 50 50" fill="none" stroke="#84cc16" strokeWidth="2" />
                  
                  {/* Гроздь винограда (фиолетовая) */}
                  <g fill="#a855f7" stroke="#7e22ce" strokeWidth="2">
                    {/* Верхний ряд */}
                    <circle cx="40" cy="30" r="6" /> <circle cx="50" cy="30" r="6" /> <circle cx="60" cy="30" r="6" />
                    {/* Второй ряд */}
                    <circle cx="35" cy="40" r="6" /> <circle cx="45" cy="40" r="6" /> <circle cx="55" cy="40" r="6" /> <circle cx="65" cy="40" r="6" />
                    {/* Третий ряд */}
                    <circle cx="40" cy="50" r="6" /> <circle cx="50" cy="50" r="6" /> <circle cx="60" cy="50" r="6" />
                    {/* Четвертый ряд */}
                    <circle cx="45" cy="60" r="6" /> <circle cx="55" cy="60" r="6" />
                    {/* Низ */}
                    <circle cx="50" cy="70" r="6" />
                  </g>
                  {/* Блики */}
                  <g fill="#e9d5ff" stroke="none">
                    <circle cx="48" cy="28" r="1.5" /> <circle cx="43" cy="38" r="1.5" /> <circle cx="53" cy="48" r="1.5" /> <circle cx="48" cy="68" r="1.5" />
                  </g>
                </svg>
              )
            },
            {
              id: 'cabbage',
              title: 'Капуста',
              desc: 'кочан, большой и тугой',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Внешние раскидистые листья */}
                  <path d="M 50 85 C 10 85 5 40 25 35 C 30 50 40 75 50 85 Z" fill="#86efac" stroke="#16a34a" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 50 85 C 90 85 95 40 75 35 C 70 50 60 75 50 85 Z" fill="#86efac" stroke="#16a34a" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 30 40 C 20 10 50 5 60 15 C 50 25 40 30 30 40 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 70 40 C 80 10 50 5 40 15 C 50 25 60 30 70 40 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Внутренний тугой кочан */}
                  <circle cx="50" cy="55" r="25" fill="#bbf7d0" stroke="#16a34a" strokeWidth="4" />
                  
                  {/* Прожилки и слои */}
                  <path d="M 35 40 C 45 45 55 45 65 40" fill="none" stroke="#16a34a" strokeWidth="3" />
                  <path d="M 30 55 C 45 65 55 65 70 55" fill="none" stroke="#16a34a" strokeWidth="3" />
                  <path d="M 50 75 C 55 65 55 55 50 45" fill="none" stroke="#16a34a" strokeWidth="2" opacity="0.6" />
                </svg>
              )
            },
            {
              id: 'peony-flower',
              title: 'Пион или лилия',
              desc: 'самый ароматный цветок',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Стебель и листья */}
                  <path d="M 50 60 Q 45 80 50 100" stroke="#16a34a" strokeWidth="5" fill="none" />
                  <path d="M 48 75 Q 30 65 20 80 Q 35 85 49 85 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  <path d="M 51 85 Q 70 75 80 90 Q 65 95 50 95 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  
                  {/* Лепестки (Пион) */}
                  <path d="M 50 55 C 20 55 10 20 35 25 C 20 10 50 5 50 20 C 50 5 80 10 65 25 C 90 20 80 55 50 55 Z" fill="#fbcfe8" stroke="#db2777" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 50 50 C 30 50 25 30 40 30 C 35 20 50 15 50 25 C 50 15 65 20 60 30 C 75 30 70 50 50 50 Z" fill="#f472b6" stroke="#be185d" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 50 45 C 40 45 35 35 45 35 C 45 30 50 25 50 35 C 50 25 55 30 55 35 C 65 35 60 45 50 45 Z" fill="#ec4899" stroke="#9d174d" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Тычинки */}
                  <circle cx="48" cy="35" r="1.5" fill="#fde047" stroke="none" />
                  <circle cx="52" cy="35" r="1.5" fill="#fde047" stroke="none" />
                  <circle cx="50" cy="32" r="1.5" fill="#fde047" stroke="none" />
                </svg>
              )
            },
            {
              id: 'dandelion',
              title: 'Одуванчик',
              desc: 'на который можно дунуть',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Стебель */}
                  <path d="M 45 50 Q 50 75 45 100" stroke="#86efac" strokeWidth="4" fill="none" />
                  
                  {/* Пушинки (основной шар) */}
                  <g stroke="#e2e8f0" strokeWidth="1.5" strokeLinecap="round">
                    {/* Много лучей из центра */}
                    {[3].map(angle => (
                      <line key={`long-${angle}`} x1="45" y1="40" x2={45 + 25 * Math.cos(angle * Math.PI / 180)} y2={40 + 25 * Math.sin(angle * Math.PI / 180)} />
                    ))}
                    {[4, 5].map(angle => (
                      <line key={`short-${angle}`} x1="45" y1="40" x2={45 + 15 * Math.cos(angle * Math.PI / 180)} y2={40 + 15 * Math.sin(angle * Math.PI / 180)} />
                    ))}
                  </g>
                  
                  {/* Зонтики на концах лучей */}
                  <g fill="#fff" stroke="none">
                    {[5].map(angle => (
                      <circle key={`dot-${angle}`} cx={45 + 25 * Math.cos(angle * Math.PI / 180)} cy={40 + 25 * Math.sin(angle * Math.PI / 180)} r="2" />
                    ))}
                  </g>
                  
                  {/* Центр одуванчика */}
                  <circle cx="45" cy="40" r="4" fill="#9ca3af" stroke="#64748b" strokeWidth="2" />
                  
                  {/* Улетающие пушинки */}
                  <path d="M 75 25 L 80 20 M 75 25 L 70 20 M 75 25 L 75 20 M 75 25 L 70 35" stroke="#94a3b8" strokeWidth="1.5" />
                  <circle cx="70" cy="35" r="1.5" fill="#64748b" stroke="none" />
                  
                  <path d="M 85 45 L 90 40 M 85 45 L 80 40 M 85 45 L 85 40 M 85 45 L 80 55" stroke="#94a3b8" strokeWidth="1.5" />
                  <circle cx="80" cy="55" r="1.5" fill="#64748b" stroke="none" />
                  
                  {/* Воздух/ветер */}
                  <path d="M 60 50 Q 75 40 90 45" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              )
            }
          ]
        },
	    {
          id: 'ch3-tools',
          title: '🛠 Дачный инвентарь',
          subtitle: 'Инструменты',
          theme: 'orange',
          items: [
            {
              id: 'watering-can',
              title: 'Лейка',
              desc: 'железная или пластиковая',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Задняя ручка */}
                  <path d="M 65 35 C 85 30 90 55 75 70" fill="none" stroke="#64748b" strokeWidth="6" />
                  <path d="M 65 35 C 85 30 90 55 75 70" fill="none" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Носик и рассеиватель */}
                  <path d="M 35 70 L 15 40" stroke="#64748b" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 35 70 L 15 40" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                  <ellipse cx="12" cy="35" rx="5" ry="12" fill="#cbd5e1" stroke="#475569" strokeWidth="3" transform="rotate(-30 12 35)" />
                  <circle cx="10" cy="33" r="0.5" fill="#1e293b" stroke="none" />
                  <circle cx="14" cy="37" r="0.5" fill="#1e293b" stroke="none" />
                  <circle cx="9" cy="36" r="0.5" fill="#1e293b" stroke="none" />
                  
                  {/* Капли воды */}
                  <path d="M 8 45 L 5 50 M 15 48 L 12 55 M 2 38 L 0 45" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 4" />
                  
                  {/* Корпус лейки (оцинкованный металл) */}
                  <path d="M 40 30 L 70 30 L 75 80 L 35 80 Z" fill="#94a3b8" stroke="#475569" strokeWidth="4" strokeLinejoin="round" />
                  <path d="M 45 30 L 40 80 M 55 30 L 50 80 M 65 30 L 60 80" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="35" y1="70" x2="74" y2="70" stroke="#475569" strokeWidth="2" />
                  
                  {/* Верхняя ручка */}
                  <path d="M 40 30 C 40 15 70 15 70 30" fill="none" stroke="#64748b" strokeWidth="6" />
                  <path d="M 40 30 C 40 15 70 15 70 30" fill="none" stroke="#94a3b8" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'garden-hose',
              title: 'Садовый шланг',
              desc: 'извивающийся в траве',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Трава и лужа */}
                  <ellipse cx="65" cy="75" rx="25" ry="10" fill="#bae6fd" stroke="none" opacity="0.6" />
                  <path d="M 10 90 Q 20 70 30 90 M 20 95 Q 35 80 40 95" stroke="#22c55e" strokeWidth="3" fill="none" />
                  <path d="M 70 90 Q 80 75 90 90 M 85 95 Q 95 85 100 95" stroke="#22c55e" strokeWidth="3" fill="none" />
                  
                  {/* Витки шланга */}
                  <path d="M 25 35 C 60 20 80 50 50 60 C 20 70 20 40 45 35" fill="none" stroke="#16a34a" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 45 35 C 75 30 80 70 55 75 C 30 80 30 50 50 45 C 65 40 70 65 60 70 C 55 72 45 70 45 60 L 45 40" fill="none" stroke="#22c55e" strokeWidth="8" strokeLinecap="round" />
                  
                  {/* Блики на резине */}
                  <path d="M 45 35 C 75 30 80 70 55 75" fill="none" stroke="#4ade80" strokeWidth="2" opacity="0.8" />
                  
                  {/* Насадка/пистолет */}
                  <path d="M 45 40 L 45 25 L 35 25" stroke="#fcd34d" strokeWidth="6" strokeLinejoin="round" />
                  <circle cx="35" cy="25" r="4" fill="#374151" stroke="none" />
                  
                  {/* Капля */}
                  <path d="M 31 25 Q 25 30 28 35 Q 31 30 31 25" fill="#38bdf8" stroke="none" />
                </svg>
              )
            },
            {
              id: 'dirty-boots',
              title: 'Резиновые сапоги',
              desc: 'у порога (с остатками земли)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Задний сапог */}
                  <path d="M 55 25 L 55 60 C 55 75 75 80 85 80 L 85 85 L 60 85 C 45 85 35 75 35 60 L 35 25 Z" fill="#eab308" stroke="#a16207" strokeWidth="4" strokeLinejoin="round" />
                  <line x1="60" y1="85" x2="85" y2="85" stroke="#1f2937" strokeWidth="6" />
                  
                  {/* Передний сапог */}
                  <path d="M 40 30 L 40 65 C 40 80 60 85 70 85 L 70 90 L 45 90 C 30 90 20 80 20 65 L 20 30 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="4" strokeLinejoin="round" />
                  <line x1="45" y1="90" x2="70" y2="90" stroke="#1f2937" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 22 35 L 38 35 M 22 45 L 38 45" stroke="#facc15" strokeWidth="2" />
                  
                  {/* Грязь на переднем сапоге */}
                  <path d="M 20 65 C 25 60 30 70 35 65 C 40 75 55 75 60 85 L 45 90 C 30 90 20 80 20 65 Z" fill="#78350f" stroke="none" />
                  <circle cx="28" cy="78" r="3" fill="#451a03" stroke="none" />
                  <circle cx="50" cy="82" r="4" fill="#451a03" stroke="none" />
                  <circle cx="62" cy="78" r="2" fill="#78350f" stroke="none" />
                  <circle cx="35" cy="58" r="2" fill="#78350f" stroke="none" />
                </svg>
              )
            },
            {
              id: 'wheelbarrow',
              title: 'Тачка',
              desc: 'с сорняками или землёй',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ручки (дерево) */}
                  <line x1="10" y1="35" x2="50" y2="65" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
                  <line x1="15" y1="25" x2="60" y2="60" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Опоры */}
                  <line x1="35" y1="55" x2="35" y2="85" stroke="#4b5563" strokeWidth="5" strokeLinecap="round" />
                  <line x1="45" y1="50" x2="45" y2="80" stroke="#4b5563" strokeWidth="5" strokeLinecap="round" />
                  
                  {/* Колесо */}
                  <circle cx="75" cy="75" r="12" fill="#1f2937" stroke="#4b5563" strokeWidth="4" />
                  <circle cx="75" cy="75" r="4" fill="#f8fafc" stroke="none" />
                  <line x1="60" y1="60" x2="75" y2="75" stroke="#4b5563" strokeWidth="4" />
                  
                  {/* Кузов (Корыто) */}
                  <path d="M 25 45 L 85 45 L 70 70 L 40 70 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="4" strokeLinejoin="round" />
                  <line x1="42" y1="55" x2="72" y2="55" stroke="#b91c1c" strokeWidth="2" />
                  <line x1="45" y1="62" x2="68" y2="62" stroke="#b91c1c" strokeWidth="2" />
                  
                  {/* Земля и сорняки */}
                  <path d="M 30 45 C 40 30 60 30 80 45 Z" fill="#78350f" stroke="none" />
                  <path d="M 40 40 Q 45 25 50 35 Q 55 20 60 35 Q 65 25 70 40" fill="#22c55e" stroke="#15803d" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 45 42 L 40 30 M 60 42 L 65 30 M 52 40 L 55 25" stroke="#15803d" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'ladder-tree',
              title: 'Старая лестница',
              desc: 'прислонённая к дереву',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ствол дерева */}
                  <path d="M 70 10 C 65 30 65 70 75 95 L 95 95 C 90 70 90 30 95 10 Z" fill="#78350f" stroke="#451a03" strokeWidth="4" />
                  <path d="M 70 30 C 80 35 85 25 92 30 M 68 60 C 80 55 85 65 92 60" stroke="#451a03" strokeWidth="2" />
                  <circle cx="80" cy="45" r="4" fill="#451a03" stroke="none" />
                  
                  {/* Лестница */}
                  <line x1="30" y1="95" x2="65" y2="15" stroke="#a16207" strokeWidth="6" strokeLinecap="round" />
                  <line x1="50" y1="95" x2="80" y2="15" stroke="#a16207" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Ступени */}
                  <line x1="33" y1="80" x2="52" y2="80" stroke="#a16207" strokeWidth="5" strokeLinecap="round" />
                  <line x1="40" y1="60" x2="59" y2="60" stroke="#a16207" strokeWidth="5" strokeLinecap="round" />
                  <line x1="48" y1="40" x2="66" y2="40" stroke="#a16207" strokeWidth="5" strokeLinecap="round" />
                  <line x1="56" y1="20" x2="74" y2="20" stroke="#a16207" strokeWidth="5" strokeLinecap="round" />
                  
                  {/* Текстура и гвозди */}
                  <line x1="33" y1="80" x2="52" y2="80" stroke="#fcd34d" strokeWidth="1" />
                  <line x1="40" y1="60" x2="59" y2="60" stroke="#fcd34d" strokeWidth="1" />
                  <circle cx="35" cy="80" r="1.5" fill="#1c1917" stroke="none" />
                  <circle cx="50" cy="80" r="1.5" fill="#1c1917" stroke="none" />
                  <circle cx="42" cy="60" r="1.5" fill="#1c1917" stroke="none" />
                  <circle cx="57" cy="60" r="1.5" fill="#1c1917" stroke="none" />
                </svg>
              )
            },
            {
              id: 'hammock',
              title: 'Гамак',
              desc: 'растянутый между двумя опорами',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Деревья/Опоры */}
                  <line x1="10" y1="10" x2="10" y2="90" stroke="#78350f" strokeWidth="12" />
                  <line x1="90" y1="10" x2="90" y2="90" stroke="#78350f" strokeWidth="12" />
                  
                  {/* Веревки */}
                  <line x1="15" y1="40" x2="30" y2="55" stroke="#e2e8f0" strokeWidth="3" />
                  <line x1="15" y1="40" x2="30" y2="45" stroke="#e2e8f0" strokeWidth="3" />
                  <line x1="85" y1="40" x2="70" y2="55" stroke="#e2e8f0" strokeWidth="3" />
                  <line x1="85" y1="40" x2="70" y2="45" stroke="#e2e8f0" strokeWidth="3" />
                  
                  {/* Узлы */}
                  <circle cx="15" cy="40" r="4" fill="#94a3b8" stroke="none" />
                  <circle cx="85" cy="40" r="4" fill="#94a3b8" stroke="none" />
                  
                  {/* Ткань гамака */}
                  <path d="M 30 45 C 45 75 55 75 70 45 C 65 85 35 85 30 45 Z" fill="#fca5a5" stroke="#ef4444" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Цветные полосы */}
                  <path d="M 38 58 C 45 75 55 75 62 58 C 55 80 45 80 38 58 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 45 68 C 48 74 52 74 55 68 C 52 76 48 76 45 68 Z" fill="#60a5fa" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              )
            },
            {
              id: 'water-barrel',
              title: 'Бочка',
              desc: 'для сбора дождевой воды',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Водосточная труба */}
                  <path d="M 25 10 L 25 35 L 45 45 L 45 55" stroke="#94a3b8" strokeWidth="8" strokeLinejoin="round" />
                  <path d="M 25 10 L 25 35 L 45 45 L 45 55" stroke="#cbd5e1" strokeWidth="4" strokeLinejoin="round" />
                  
                  {/* Вода внутри (если заглянуть) */}
                  <ellipse cx="60" cy="45" rx="25" ry="8" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
                  
                  {/* Корпус бочки */}
                  <path d="M 35 45 L 35 85 C 35 90 85 90 85 85 L 85 45 Z" fill="#16a34a" stroke="#14532d" strokeWidth="4" strokeLinejoin="round" />
                  <ellipse cx="60" cy="45" rx="25" ry="8" fill="none" stroke="#14532d" strokeWidth="4" />
                  <ellipse cx="60" cy="85" rx="25" ry="8" fill="none" stroke="#14532d" strokeWidth="4" />
                  
                  {/* Ребра жесткости на бочке */}
                  <line x1="35" y1="55" x2="85" y2="55" stroke="#14532d" strokeWidth="3" />
                  <line x1="35" y1="65" x2="85" y2="65" stroke="#14532d" strokeWidth="3" />
                  <line x1="35" y1="75" x2="85" y2="75" stroke="#14532d" strokeWidth="3" />
                  
                  {/* Блики и капли */}
                  <path d="M 42 50 L 42 80 M 48 50 L 48 80" stroke="#4ade80" strokeWidth="2" opacity="0.6" />
                  <path d="M 45 58 L 45 65" stroke="#bae6fd" strokeWidth="3" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'garden-gnome',
              title: 'Садовый гном',
              desc: 'среди цветов или грядок',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Растения на фоне */}
                  <path d="M 15 85 Q 10 50 30 45" fill="none" stroke="#16a34a" strokeWidth="4" />
                  <path d="M 85 85 Q 90 50 70 45" fill="none" stroke="#16a34a" strokeWidth="4" />
                  <circle cx="28" cy="40" r="5" fill="#f472b6" stroke="none" />
                  <circle cx="72" cy="40" r="5" fill="#fde047" stroke="none" />
                  
                  {/* Тело (Синяя туника) */}
                  <path d="M 35 85 L 35 60 C 35 45 65 45 65 60 L 65 85 Z" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="4" strokeLinejoin="round" />
                  <rect x="35" y="65" width="30" height="5" fill="#1f2937" stroke="none" />
                  <rect x="45" y="63" width="10" height="9" fill="none" stroke="#fcd34d" strokeWidth="2" />
                  
                  {/* Ботинки */}
                  <path d="M 35 85 L 25 85 C 25 75 35 75 35 85 Z" fill="#1f2937" stroke="#111827" strokeWidth="2" />
                  <path d="M 65 85 L 75 85 C 75 75 65 75 65 85 Z" fill="#1f2937" stroke="#111827" strokeWidth="2" />
                  
                  {/* Борода и Лицо */}
                  <path d="M 38 45 L 62 45 C 65 65 35 65 38 45 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" strokeLinejoin="round" />
                  <circle cx="50" cy="48" r="6" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
                  <circle cx="45" cy="44" r="1.5" fill="#1e293b" stroke="none" />
                  <circle cx="55" cy="44" r="1.5" fill="#1e293b" stroke="none" />
                  
                  {/* Красный колпак */}
                  <path d="M 35 40 L 65 40 C 65 40 55 10 70 15 L 70 10 C 50 0 35 40 35 40 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="4" strokeLinejoin="round" />
                </svg>
              )
            },
            {
              id: 'washstand',
              title: 'Рукомойник',
              desc: 'тот самый, с носиком снизу',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Деревянный столб/стена */}
                  <rect x="35" y="10" width="30" height="80" fill="#a16207" stroke="#78350f" strokeWidth="4" />
                  <line x1="45" y1="10" x2="45" y2="90" stroke="#78350f" strokeWidth="2" strokeDasharray="10 5" />
                  <line x1="55" y1="10" x2="55" y2="90" stroke="#78350f" strokeWidth="2" strokeDasharray="15 5" />
                  
                  {/* Гвоздь и ушко */}
                  <circle cx="50" cy="20" r="2" fill="#1c1917" stroke="none" />
                  <path d="M 50 20 L 50 30" stroke="#475569" strokeWidth="4" />
                  
                  {/* Корпус рукомойника */}
                  <path d="M 25 30 L 75 30 L 65 65 L 35 65 Z" fill="#94a3b8" stroke="#475569" strokeWidth="4" strokeLinejoin="round" />
                  <path d="M 25 30 Q 50 20 75 30" fill="#cbd5e1" stroke="#475569" strokeWidth="3" />
                  
                  {/* Ребра на корпусе */}
                  <line x1="30" y1="45" x2="70" y2="45" stroke="#64748b" strokeWidth="2" />
                  <line x1="33" y1="55" x2="67" y2="55" stroke="#64748b" strokeWidth="2" />
                  <path d="M 40 30 L 45 65 M 60 30 L 55 65" stroke="#e2e8f0" strokeWidth="2" opacity="0.6" />
                  
                  {/* Стержень (клапан) снизу */}
                  <line x1="50" y1="65" x2="50" y2="75" stroke="#1c1917" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Капля воды */}
                  <path d="M 50 80 Q 45 85 50 90 Q 55 85 50 80 Z" fill="#38bdf8" stroke="none" />
                </svg>
              )
            },
            {
              id: 'axe-stump',
              title: 'Топор',
              desc: 'вонзённый в пень (колун)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Пень */}
                  <path d="M 20 65 L 20 90 C 20 95 80 95 80 90 L 80 65" fill="#b45309" stroke="#78350f" strokeWidth="4" />
                  <ellipse cx="50" cy="65" rx="30" ry="12" fill="#fde047" stroke="#92400e" strokeWidth="4" />
                  <ellipse cx="50" cy="65" rx="20" ry="8" fill="none" stroke="#92400e" strokeWidth="2" />
                  <ellipse cx="50" cy="65" rx="10" ry="4" fill="none" stroke="#92400e" strokeWidth="2" />
                  
                  {/* Трещина в пне */}
                  <path d="M 50 65 L 70 72" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 70 72 L 70 93" stroke="#78350f" strokeWidth="3" />
                  
                  {/* Расколотое полено рядом */}
                  <path d="M 15 80 L 30 75 L 35 90 L 10 90 Z" fill="#fde047" stroke="#92400e" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Топорище (ручка) */}
                  <line x1="85" y1="15" x2="45" y2="55" stroke="#d97706" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 80 15 L 45 50" stroke="#78350f" strokeWidth="2" opacity="0.5" />
                  
                  {/* Лезвие топора */}
                  <path d="M 55 45 L 35 25 L 30 35 C 35 45 40 55 50 50 Z" fill="#94a3b8" stroke="#334155" strokeWidth="4" strokeLinejoin="round" />
                  <path d="M 45 35 L 30 35 C 35 45 40 55 50 50" fill="#cbd5e1" stroke="none" />
                  <line x1="35" y1="35" x2="48" y2="48" stroke="#f8fafc" strokeWidth="2" />
                </svg>
              )
            }
          ]
        },
	    {
          id: 'ch3-animals',
          title: '🐔 Деревенская живность',
          subtitle: 'Соседи по даче',
          theme: 'purple',
          items: [
            {
              id: 'rooster',
              title: 'Петух',
              desc: 'который громко кукарекает',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Пышный хвост */}
                  <path d="M 60 60 C 80 70 95 50 85 30 C 75 10 50 30 60 60 Z" fill="#10b981" stroke="#047857" strokeWidth="2" />
                  <path d="M 55 65 C 85 80 95 60 90 40 C 85 20 50 40 55 65 Z" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
                  <path d="M 50 70 C 80 90 95 70 85 50 C 75 30 40 50 50 70 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                  
                  {/* Лапы */}
                  <line x1="35" y1="75" x2="35" y2="90" stroke="#d97706" strokeWidth="3" />
                  <line x1="35" y1="90" x2="25" y2="95" stroke="#d97706" strokeWidth="2" />
                  <line x1="35" y1="90" x2="45" y2="95" stroke="#d97706" strokeWidth="2" />
                  <line x1="45" y1="75" x2="45" y2="85" stroke="#d97706" strokeWidth="3" />
                  <line x1="45" y1="85" x2="35" y2="90" stroke="#d97706" strokeWidth="2" />
                  <line x1="45" y1="85" x2="55" y2="90" stroke="#d97706" strokeWidth="2" />
                  
                  {/* Тело и шея */}
                  <path d="M 25 45 C 10 50 20 75 40 75 C 60 75 65 60 55 45 L 45 20 L 30 25 Z" fill="#f97316" stroke="#c2410c" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 25 45 Q 40 60 55 45" fill="none" stroke="#ea580c" strokeWidth="2" />
                  
                  {/* Голова: клюв, гребешок, бородка */}
                  <polygon points="28,25 10,30 25,35" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
                  <path d="M 30 25 C 25 10 40 5 45 20 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                  <path d="M 28 35 C 20 45 35 50 35 35 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                  
                  {/* Глаз */}
                  <circle cx="35" cy="27" r="2" fill="#1c1917" stroke="none" />
                </svg>
              )
            },
            {
              id: 'hen-and-chicks',
              title: 'Курица с цыплятами',
              desc: 'или просто курица',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Мама-курица */}
                  <path d="M 50 40 C 20 40 20 70 40 80 C 60 90 85 80 80 50 C 75 20 50 20 50 40 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 65 45 Q 50 60 40 50" fill="none" stroke="#facc15" strokeWidth="3" />
                  <polygon points="35,45 20,40 32,52" fill="#f97316" stroke="#c2410c" strokeWidth="2" />
                  <path d="M 45 35 C 40 25 50 25 50 35 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                  <circle cx="42" cy="42" r="2" fill="#1c1917" stroke="none" />
                  <line x1="55" y1="80" x2="55" y2="90" stroke="#d97706" strokeWidth="3" />
                  <line x1="65" y1="77" x2="65" y2="87" stroke="#d97706" strokeWidth="3" />
                  
                  {/* Цыпленок 1 */}
                  <circle cx="20" cy="80" r="8" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                  <polygon points="12,80 5,78 10,84" fill="#f97316" stroke="none" />
                  <circle cx="16" cy="78" r="1" fill="#1c1917" stroke="none" />
                  <line x1="20" y1="88" x2="20" y2="95" stroke="#d97706" strokeWidth="2" />
                  
                  {/* Цыпленок 2 */}
                  <circle cx="85" cy="85" r="7" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                  <polygon points="92,85 98,82 94,89" fill="#f97316" stroke="none" />
                  <circle cx="88" cy="82" r="1" fill="#1c1917" stroke="none" />
                  <line x1="85" y1="92" x2="85" y2="98" stroke="#d97706" strokeWidth="2" />
                  
                  {/* Зернышки на земле */}
                  <circle cx="10" cy="90" r="1.5" fill="#d97706" stroke="none" />
                  <circle cx="30" cy="95" r="1.5" fill="#d97706" stroke="none" />
                  <circle cx="75" cy="95" r="1.5" fill="#d97706" stroke="none" />
                </svg>
              )
            },
            {
              id: 'sleeping-cat',
              title: 'Кот',
              desc: 'спящий на солнечном заборе',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Забор */}
                  <polygon points="10,60 30,60 30,95 10,95" fill="#d6d3d1" stroke="#78716c" strokeWidth="3" />
                  <polygon points="40,60 60,60 60,95 40,95" fill="#d6d3d1" stroke="#78716c" strokeWidth="3" />
                  <polygon points="70,60 90,60 90,95 70,95" fill="#d6d3d1" stroke="#78716c" strokeWidth="3" />
                  <line x1="5" y1="75" x2="95" y2="75" stroke="#78716c" strokeWidth="4" />
                  
                  {/* Солнце на фоне */}
                  <circle cx="80" cy="25" r="12" fill="#fef08a" stroke="none" opacity="0.8" />
                  <path d="M 80 5 L 80 10 M 80 40 L 80 45 M 60 25 L 65 25 M 95 25 L 100 25" stroke="#fef08a" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Спящий кот (свернулся клубком) */}
                  <path d="M 25 55 C 25 35 65 35 75 55 C 75 65 25 65 25 55 Z" fill="#f97316" stroke="#c2410c" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Ушки и хвост */}
                  <polygon points="30,45 35,35 45,45" fill="#f97316" stroke="#c2410c" strokeWidth="2" strokeLinejoin="round" />
                  <polygon points="45,45 55,35 60,45" fill="#f97316" stroke="#c2410c" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 70 55 C 90 55 90 35 75 40" fill="none" stroke="#f97316" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 70 55 C 90 55 90 35 75 40" fill="none" stroke="#c2410c" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Полоски (тигровый окрас) */}
                  <path d="M 40 50 Q 45 40 50 50 M 55 50 Q 60 40 65 50" stroke="#c2410c" strokeWidth="2" fill="none" />
                  <path d="M 35 55 C 35 50 45 50 45 55" stroke="#1c1917" strokeWidth="2" fill="none" /> {/* Закрытый глаз */}
                  <path d="M 50 55 C 50 50 60 50 60 55" stroke="#1c1917" strokeWidth="2" fill="none" /> {/* Закрытый глаз */}
                </svg>
              )
            },
            {
              id: 'doghouse',
              title: 'Собачья будка',
              desc: 'с миской рядом',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Будка */}
                  <polygon points="15,50 50,15 85,50 85,90 15,90" fill="#fcd34d" stroke="#b45309" strokeWidth="4" strokeLinejoin="round" />
                  <polygon points="10,50 50,10 90,50 85,55 50,20 15,55" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="15" y1="90" x2="85" y2="90" stroke="#b45309" strokeWidth="4" />
                  
                  {/* Доски */}
                  <line x1="30" y1="40" x2="30" y2="90" stroke="#d97706" strokeWidth="2" />
                  <line x1="45" y1="30" x2="45" y2="90" stroke="#d97706" strokeWidth="2" />
                  <line x1="60" y1="30" x2="60" y2="90" stroke="#d97706" strokeWidth="2" />
                  <line x1="75" y1="40" x2="75" y2="90" stroke="#d97706" strokeWidth="2" />
                  
                  {/* Вход */}
                  <path d="M 35 90 L 35 60 C 35 45 65 45 65 60 L 65 90 Z" fill="#1c1917" stroke="#b45309" strokeWidth="4" strokeLinejoin="round" />
                  
                  {/* Цепь */}
                  <circle cx="75" cy="70" r="3" fill="#9ca3af" stroke="#4b5563" strokeWidth="2" />
                  <path d="M 75 73 Q 80 80 90 85" fill="none" stroke="#9ca3af" strokeWidth="3" strokeDasharray="4 2" />
                  
                  {/* Миска с косточкой */}
                  <ellipse cx="30" cy="85" rx="15" ry="6" fill="#cbd5e1" stroke="#475569" strokeWidth="3" />
                  <path d="M 18 85 C 18 92 42 92 42 85" fill="#94a3b8" stroke="#475569" strokeWidth="3" />
                  <path d="M 23 83 C 20 80 25 78 28 80 C 31 78 36 80 33 83 C 36 86 31 88 28 86 C 25 88 20 86 23 83 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'cow-fence',
              title: 'Коза или корова',
              desc: 'на пастбище за забором',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Трава на заднем плане */}
                  <path d="M 5 70 Q 20 60 35 75 T 70 65 T 95 80" fill="none" stroke="#22c55e" strokeWidth="3" />
                  
                  {/* Корова (Выглядывает из-за забора) */}
                  <path d="M 35 60 L 35 35 C 35 15 65 15 65 35 L 65 60 Z" fill="#f8fafc" stroke="#475569" strokeWidth="3" />
                  
                  {/* Пятна */}
                  <path d="M 35 45 C 45 40 45 60 35 55 Z" fill="#1f2937" stroke="none" />
                  <path d="M 55 25 C 65 20 65 40 50 35 Z" fill="#1f2937" stroke="none" />
                  
                  {/* Мордочка (Нос) */}
                  <ellipse cx="50" cy="50" rx="12" ry="8" fill="#fbcfe8" stroke="#db2777" strokeWidth="2" />
                  <ellipse cx="45" cy="49" rx="2" ry="3" fill="#db2777" stroke="none" />
                  <ellipse cx="55" cy="49" rx="2" ry="3" fill="#db2777" stroke="none" />
                  
                  {/* Глаза и уши */}
                  <circle cx="42" cy="35" r="2.5" fill="#1f2937" stroke="none" />
                  <circle cx="58" cy="35" r="2.5" fill="#1f2937" stroke="none" />
                  <path d="M 35 30 Q 20 25 25 35 Q 30 35 35 35" fill="#f8fafc" stroke="#475569" strokeWidth="2" />
                  <path d="M 65 30 Q 80 25 75 35 Q 70 35 65 35" fill="#1f2937" stroke="#1f2937" strokeWidth="2" />
                  
                  {/* Рога */}
                  <path d="M 40 20 Q 35 5 45 15" fill="none" stroke="#fef08a" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 60 20 Q 65 5 55 15" fill="none" stroke="#fef08a" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Деревянный забор на переднем плане */}
                  <line x1="10" y1="65" x2="90" y2="65" stroke="#78350f" strokeWidth="8" strokeLinecap="round" />
                  <line x1="10" y1="85" x2="90" y2="85" stroke="#78350f" strokeWidth="8" strokeLinecap="round" />
                  <line x1="25" y1="55" x2="25" y2="95" stroke="#92400e" strokeWidth="6" strokeLinecap="round" />
                  <line x1="50" y1="55" x2="50" y2="95" stroke="#92400e" strokeWidth="6" strokeLinecap="round" />
                  <line x1="75" y1="55" x2="75" y2="95" stroke="#92400e" strokeWidth="6" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'dragonfly',
              title: 'Стрекоза',
              desc: 'с блестящими крыльями',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Камыш на фоне */}
                  <path d="M 20 100 Q 30 60 25 20" stroke="#15803d" strokeWidth="4" />
                  <rect x="21" y="25" width="8" height="25" rx="4" fill="#78350f" stroke="none" transform="rotate(-5 25 35)" />
                  
                  {/* Крылья (полупрозрачные с сеткой) */}
                  <ellipse cx="65" cy="35" rx="25" ry="6" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2" transform="rotate(-20 65 35)" opacity="0.8" />
                  <ellipse cx="65" cy="65" rx="25" ry="6" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2" transform="rotate(20 65 65)" opacity="0.8" />
                  <ellipse cx="35" cy="35" rx="25" ry="6" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2" transform="rotate(20 35 35)" opacity="0.8" />
                  <ellipse cx="35" cy="65" rx="25" ry="6" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2" transform="rotate(-20 35 65)" opacity="0.8" />
                  
                  {/* Прожилки на крыльях */}
                  <path d="M 50 50 L 85 25 M 50 50 L 85 75 M 50 50 L 15 25 M 50 50 L 15 75" stroke="#7dd3fc" strokeWidth="1" />
                  
                  {/* Длинное тело */}
                  <line x1="50" y1="25" x2="50" y2="85" stroke="#1d4ed8" strokeWidth="6" strokeLinecap="round" />
                  <line x1="50" y1="35" x2="50" y2="80" stroke="#3b82f6" strokeWidth="2" strokeDasharray="2 4" />
                  
                  {/* Голова и глаза */}
                  <circle cx="50" cy="20" r="5" fill="#1e3a8a" stroke="#1d4ed8" strokeWidth="2" />
                  <circle cx="47" cy="19" r="2" fill="#60a5fa" stroke="none" />
                  <circle cx="53" cy="19" r="2" fill="#60a5fa" stroke="none" />
                </svg>
              )
            },
            {
              id: 'snail',
              title: 'Улитка',
              desc: 'ползущая по влажному листу',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Огромный влажный лист */}
                  <path d="M 10 70 C 30 40 80 30 95 60 C 80 90 20 100 10 70 Z" fill="#86efac" stroke="#16a34a" strokeWidth="3" />
                  <path d="M 10 70 C 30 65 60 60 95 60" fill="none" stroke="#16a34a" strokeWidth="2" opacity="0.6" />
                  <path d="M 40 64 L 50 50 M 60 62 L 75 48" fill="none" stroke="#16a34a" strokeWidth="2" opacity="0.5" />
                  
                  {/* Капли росы */}
                  <circle cx="75" cy="70" r="3" fill="#bae6fd" stroke="#0ea5e9" strokeWidth="1.5" />
                  <circle cx="85" cy="55" r="2" fill="#bae6fd" stroke="#0ea5e9" strokeWidth="1.5" />
                  
                  {/* Тело улитки (слизистое) */}
                  <path d="M 25 55 L 70 55 C 80 55 80 45 70 45 C 65 45 50 50 35 50 C 25 50 20 45 25 55 Z" fill="#fcd34d" stroke="#b45309" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Рожки (антенны) */}
                  <path d="M 72 46 L 80 35 M 68 45 L 72 35" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="80" cy="35" r="1.5" fill="#1c1917" stroke="none" />
                  <circle cx="72" cy="35" r="1.5" fill="#1c1917" stroke="none" />
                  
                  {/* Раковина-домик со спиралью */}
                  <circle cx="45" cy="40" r="16" fill="#a16207" stroke="#713f12" strokeWidth="3" />
                  <path d="M 45 40 C 45 35 52 35 52 40 C 52 48 40 48 40 40 C 40 30 57 30 57 40 C 57 52 35 52 35 40" fill="none" stroke="#fde047" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'spiderweb',
              title: 'Паутина',
              desc: 'между ветками с капельками росы',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ветки */}
                  <path d="M 5 5 L 40 25 L 20 50" stroke="#78350f" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 95 15 L 75 40 L 90 85" stroke="#78350f" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 15 95 L 45 80" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Основа паутины (радиальные лучи) */}
                  <g stroke="#cbd5e1" strokeWidth="1.5">
                    <line x1="50" y1="50" x2="30" y2="15" />
                    <line x1="50" y1="50" x2="80" y2="25" />
                    <line x1="50" y1="50" x2="85" y2="65" />
                    <line x1="50" y1="50" x2="35" y2="85" />
                    <line x1="50" y1="50" x2="15" y2="60" />
                  </g>
                  
                  {/* Спирали паутины */}
                  <polygon points="42,38 60,42 62,55 45,62 38,52" fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeLinejoin="round" />
                  <polygon points="35,25 70,33 75,65 38,75 25,55" fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeLinejoin="round" />
                  <polygon points="30,15 80,25 85,65 35,85 15,60" fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeLinejoin="round" />
                  
                  {/* Капельки росы */}
                  <circle cx="60" cy="42" r="1.5" fill="#38bdf8" stroke="none" />
                  <circle cx="38" cy="52" r="1.5" fill="#38bdf8" stroke="none" />
                  <circle cx="70" cy="33" r="2" fill="#38bdf8" stroke="none" />
                  <circle cx="25" cy="55" r="2" fill="#38bdf8" stroke="none" />
                  <circle cx="85" cy="65" r="1.5" fill="#38bdf8" stroke="none" />
                  <circle cx="35" cy="85" r="2" fill="#38bdf8" stroke="none" />
                  
                  {/* Маленький паучок */}
                  <circle cx="50" cy="50" r="4" fill="#1f2937" stroke="none" />
                  <path d="M 45 48 L 42 45 M 55 48 L 58 45 M 45 52 L 42 55 M 55 52 L 58 55" stroke="#1f2937" strokeWidth="1.5" />
                </svg>
              )
            },
            {
              id: 'swallow-nest',
              title: 'Ласточкино гнездо',
              desc: 'под карнизом дома',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Карниз дома (угол) */}
                  <polygon points="10,10 90,10 90,25 25,25 25,90 10,90" fill="#fcd34d" stroke="#b45309" strokeWidth="4" strokeLinejoin="round" />
                  <line x1="25" y1="25" x2="90" y2="25" stroke="#78350f" strokeWidth="3" />
                  <line x1="25" y1="25" x2="25" y2="90" stroke="#78350f" strokeWidth="3" />
                  
                  {/* Само гнездо (комки глины) */}
                  <path d="M 25 35 C 55 35 65 35 65 25 C 65 60 25 65 25 35 Z" fill="#78716c" stroke="#44403c" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 30 40 C 45 45 55 35 60 30" stroke="#57534e" strokeWidth="2" strokeDasharray="2 3" />
                  <path d="M 30 50 C 40 55 45 45 50 40" stroke="#57534e" strokeWidth="2" strokeDasharray="3 2" />
                  
                  {/* Птенцы (выглядывают) */}
                  <circle cx="40" cy="28" r="5" fill="#1f2937" stroke="none" />
                  <polygon points="40,28 48,25 43,32" fill="#facc15" stroke="none" />
                  <circle cx="42" cy="26" r="1.5" fill="#fff" stroke="none" />
                  
                  <circle cx="52" cy="27" r="4" fill="#1f2937" stroke="none" />
                  <polygon points="52,27 60,23 55,30" fill="#facc15" stroke="none" />
                  <circle cx="54" cy="25" r="1" fill="#fff" stroke="none" />
                </svg>
              )
            },
            {
              id: 'manure-pile',
              title: 'Навозная куча',
              desc: 'признак богатого урожая!',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Силуэт кучи (слои) */}
                  <path d="M 15 85 C 15 55 40 40 55 40 C 70 40 85 65 85 85 Z" fill="#78350f" stroke="#451a03" strokeWidth="4" strokeLinejoin="round" />
                  <path d="M 25 85 C 25 65 45 50 60 50 C 70 50 75 70 75 85 Z" fill="#92400e" stroke="none" />
                  <path d="M 35 85 C 35 75 45 65 55 65 C 60 65 65 75 65 85 Z" fill="#b45309" stroke="none" />
                  
                  {/* Вилы, воткнутые в кучу */}
                  <line x1="30" y1="20" x2="45" y2="55" stroke="#d97706" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 42 50 L 52 45 M 48 40 L 58 60 M 55 35 L 65 55" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                  <line x1="40" y1="45" x2="60" y2="35" stroke="#9ca3af" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Пар/тепло (исходит от кучи) */}
                  <path d="M 45 30 Q 50 20 45 10" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
                  <path d="M 65 35 Q 70 25 65 15" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
                  <path d="M 30 40 Q 35 30 30 20" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
                  
                  {/* Зеленая муха */}
                  <circle cx="75" cy="30" r="2" fill="#22c55e" stroke="none" />
                  <ellipse cx="78" cy="28" rx="2" ry="1" fill="#fff" stroke="none" transform="rotate(-30 78 28)" />
                  <circle cx="20" cy="45" r="1.5" fill="#22c55e" stroke="none" />
                  
                  {/* Земля/Трава снизу */}
                  <line x1="10" y1="85" x2="90" y2="85" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
                </svg>
              )
            }
          ]
        },
	    {
          id: 'ch3-surroundings',
          title: '🛤 Окрестности',
          subtitle: 'За забором',
          theme: 'blue',
          items: [
            {
              id: 'tractor',
              title: 'Трактор',
              desc: 'или старый прицеп',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Заднее огромное колесо */}
                  <circle cx="70" cy="65" r="22" fill="#1f2937" stroke="#111827" strokeWidth="4" />
                  <circle cx="70" cy="65" r="10" fill="#facc15" stroke="#ca8a04" strokeWidth="3" />
                  <path d="M 70 43 L 70 47 M 70 83 L 70 87 M 48 65 L 52 65 M 88 65 L 92 65 M 54 49 L 57 52 M 83 78 L 86 81 M 86 49 L 83 52 M 57 78 L 54 81" stroke="#111827" strokeWidth="4" />
                  
                  {/* Переднее колесо */}
                  <circle cx="25" cy="75" r="12" fill="#1f2937" stroke="#111827" strokeWidth="3" />
                  <circle cx="25" cy="75" r="5" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
                  
                  {/* Корпус и кабина */}
                  <path d="M 15 65 L 15 45 C 15 40 20 40 25 40 L 45 40 L 45 20 C 45 15 50 15 55 15 L 85 15 C 90 15 90 20 90 25 L 90 65 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Окно кабины */}
                  <rect x="55" y="22" width="25" height="18" rx="2" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
                  <line x1="65" y1="22" x2="65" y2="40" stroke="#0284c7" strokeWidth="2" />
                  
                  {/* Выхлопная труба */}
                  <path d="M 30 40 L 30 15" stroke="#4b5563" strokeWidth="5" strokeLinecap="round" />
                  <path d="M 28 15 L 34 15" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 32 10 Q 35 5 40 5" fill="none" stroke="#94a3b8" strokeWidth="2" opacity="0.7" />
                  
                  {/* Фара и решетка */}
                  <circle cx="15" cy="50" r="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
                  <line x1="20" y1="48" x2="40" y2="48" stroke="#7f1d1d" strokeWidth="2" />
                  <line x1="20" y1="54" x2="40" y2="54" stroke="#7f1d1d" strokeWidth="2" />
                  <line x1="20" y1="60" x2="40" y2="60" stroke="#7f1d1d" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'village-well',
              title: 'Колодец',
              desc: 'с ручкой и ведром',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Основание (каменный сруб) */}
                  <rect x="25" y="55" width="50" height="35" fill="#e2e8f0" stroke="#64748b" strokeWidth="3" />
                  <path d="M 25 65 L 75 65 M 25 75 L 75 75 M 25 85 L 75 85" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M 40 55 L 40 65 M 60 55 L 60 65 M 35 65 L 35 75 M 50 65 L 50 75 M 65 65 L 65 75 M 45 75 L 45 85 M 55 75 L 55 85" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Опорные столбы */}
                  <rect x="30" y="25" width="6" height="30" fill="#a16207" stroke="#713f12" strokeWidth="2" />
                  <rect x="64" y="25" width="6" height="30" fill="#a16207" stroke="#713f12" strokeWidth="2" />
                  
                  {/* Крыша */}
                  <polygon points="15,25 50,5 85,25" fill="#059669" stroke="#064e3b" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="32" y1="15" x2="68" y2="15" stroke="#064e3b" strokeWidth="2" />
                  
                  {/* Ворот (барабан) и веревка */}
                  <rect x="36" y="35" width="28" height="10" fill="#854d0e" stroke="#451a03" strokeWidth="2" />
                  <line x1="50" y1="45" x2="50" y2="70" stroke="#cbd5e1" strokeWidth="2" />
                  
                  {/* Ручка (ворот) */}
                  <path d="M 70 40 L 80 40 L 80 30" fill="none" stroke="#1f2937" strokeWidth="4" strokeLinejoin="round" />
                  <circle cx="80" cy="30" r="2" fill="#4b5563" stroke="none" />
                  
                  {/* Ведро (на краю колодца) */}
                  <polygon points="68,55 82,55 78,70 72,70" fill="#9ca3af" stroke="#4b5563" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 68 55 C 68 45 82 45 82 55" fill="none" stroke="#4b5563" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'dirt-road',
              title: 'Грунтовая дорога',
              desc: 'с глубокими колеями',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Фон травы */}
                  <path d="M 5 95 L 45 20 L 55 20 L 95 95 Z" fill="#bbf7d0" stroke="none" />
                  
                  {/* Дорога (земля) */}
                  <path d="M 20 95 L 47 20 L 53 20 L 80 95 Z" fill="#d6d3d1" stroke="#a8a29e" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Колеи с грязью/лужами */}
                  <path d="M 30 95 L 48 20" stroke="#78350f" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
                  <path d="M 70 95 L 52 20" stroke="#78350f" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
                  
                  <path d="M 33 80 L 40 60" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
                  <path d="M 67 75 L 61 50" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
                  
                  {/* Мелкие камушки и травинки по краям */}
                  <path d="M 15 85 L 18 80 M 18 85 L 18 78 M 85 85 L 82 80 M 82 85 L 82 78" stroke="#16a34a" strokeWidth="2" />
                  <circle cx="50" cy="70" r="1.5" fill="#4b5563" stroke="none" />
                  <circle cx="45" cy="85" r="2" fill="#4b5563" stroke="none" />
                  <circle cx="55" cy="50" r="1" fill="#4b5563" stroke="none" />
                </svg>
              )
            },
            {
              id: 'power-pole-birds',
              title: 'Столб с проводами',
              desc: 'на которых сидят птицы',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Деревянный столб */}
                  <path d="M 45 10 L 55 10 L 52 100 L 48 100 Z" fill="#78350f" stroke="#451a03" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="49" y1="20" x2="49" y2="90" stroke="#451a03" strokeWidth="1" />
                  <line x1="51" y1="20" x2="51" y2="90" stroke="#451a03" strokeWidth="1" />
                  
                  {/* Поперечные перекладины */}
                  <rect x="25" y="20" width="50" height="6" fill="#78350f" stroke="#451a03" strokeWidth="2" />
                  <rect x="35" y="35" width="30" height="6" fill="#78350f" stroke="#451a03" strokeWidth="2" />
                  
                  {/* Изоляторы (керамические) */}
                  <rect x="28" y="15" width="4" height="5" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
                  <rect x="68" y="15" width="4" height="5" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
                  <rect x="38" y="30" width="4" height="5" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
                  <rect x="58" y="30" width="4" height="5" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
                  
                  {/* Провода (провисающие) */}
                  <path d="M 0 10 Q 15 25 30 15" stroke="#1f2937" strokeWidth="2" fill="none" />
                  <path d="M 70 15 Q 85 25 100 10" stroke="#1f2937" strokeWidth="2" fill="none" />
                  <path d="M 0 30 Q 20 45 40 30" stroke="#1f2937" strokeWidth="2" fill="none" />
                  <path d="M 60 30 Q 80 45 100 30" stroke="#1f2937" strokeWidth="2" fill="none" />
                  
                  {/* Птицы на проводах (силуэты) */}
                  <path d="M 15 21 C 15 15 20 15 20 21 Z" fill="#1f2937" stroke="none" />
                  <polygon points="20,18 23,17 20,20" fill="#1f2937" stroke="none" />
                  
                  <path d="M 80 21 C 80 15 85 15 85 21 Z" fill="#1f2937" stroke="none" />
                  <polygon points="80,18 77,17 80,20" fill="#1f2937" stroke="none" />
                  
                  <path d="M 85 36 C 85 30 90 30 90 36 Z" fill="#1f2937" stroke="none" />
                  <polygon points="85,33 82,32 85,35" fill="#1f2937" stroke="none" />
                </svg>
              )
            },
            {
              id: 'rusty-mailbox',
              title: 'Почтовый ящик',
              desc: 'ржавый, висит на заборе',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Забор на фоне */}
                  <rect x="20" y="10" width="15" height="80" fill="#d6d3d1" stroke="#78716c" strokeWidth="2" />
                  <rect x="40" y="10" width="15" height="80" fill="#d6d3d1" stroke="#78716c" strokeWidth="2" />
                  <rect x="60" y="10" width="15" height="80" fill="#d6d3d1" stroke="#78716c" strokeWidth="2" />
                  <line x1="10" y1="30" x2="90" y2="30" stroke="#78716c" strokeWidth="4" />
                  <line x1="10" y1="70" x2="90" y2="70" stroke="#78716c" strokeWidth="4" />
                  
                  {/* Ящик (скошенный и ржавый) */}
                  <path d="M 28 40 L 72 35 L 75 75 L 30 80 Z" fill="#b45309" stroke="#78350f" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 28 40 L 50 25 L 72 35 Z" fill="#92400e" stroke="#78350f" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Ржавчина (пятна) */}
                  <path d="M 35 50 C 45 45 40 60 35 55 Z" fill="#78350f" stroke="none" />
                  <path d="M 65 65 C 60 55 55 70 65 75 Z" fill="#78350f" stroke="none" />
                  <circle cx="50" cy="45" r="3" fill="#78350f" stroke="none" />
                  
                  {/* Прорезь для писем */}
                  <polygon points="35,46 65,43 65,48 35,51" fill="#1c1917" stroke="none" />
                  
                  {/* Торчащее письмо */}
                  <polygon points="45,45 60,43 55,30 40,32" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" strokeLinejoin="round" />
                  <line x1="44" y1="35" x2="52" y2="34" stroke="#94a3b8" strokeWidth="1" />
                  <line x1="43" y1="38" x2="54" y2="37" stroke="#94a3b8" strokeWidth="1" />
                </svg>
              )
            },
            {
              id: 'roadside-bench',
              title: 'Скамейка',
              desc: 'под огромным деревом у дороги',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Огромное дерево */}
                  <path d="M 35 90 C 35 70 45 60 45 30 L 55 30 C 55 60 65 70 65 90 Z" fill="#78350f" stroke="#451a03" strokeWidth="4" strokeLinejoin="round" />
                  <circle cx="50" cy="25" r="20" fill="#16a34a" stroke="#14532d" strokeWidth="3" />
                  <circle cx="30" cy="35" r="18" fill="#15803d" stroke="#14532d" strokeWidth="3" />
                  <circle cx="70" cy="35" r="18" fill="#15803d" stroke="#14532d" strokeWidth="3" />
                  <circle cx="40" cy="15" r="15" fill="#22c55e" stroke="#14532d" strokeWidth="3" />
                  <circle cx="60" cy="15" r="15" fill="#22c55e" stroke="#14532d" strokeWidth="3" />
                  
                  {/* Скамейка */}
                  <rect x="25" y="70" width="50" height="5" fill="#d97706" stroke="#92400e" strokeWidth="2" />
                  <rect x="25" y="60" width="50" height="5" fill="#d97706" stroke="#92400e" strokeWidth="2" />
                  <line x1="30" y1="75" x2="30" y2="85" stroke="#1f2937" strokeWidth="4" />
                  <line x1="70" y1="75" x2="70" y2="85" stroke="#1f2937" strokeWidth="4" />
                  <path d="M 30 60 L 25 50 M 70 60 L 75 50" stroke="#1f2937" strokeWidth="3" />
                  <line x1="23" y1="53" x2="77" y2="53" stroke="#d97706" strokeWidth="4" />
                </svg>
              )
            },
            {
              id: 'clothesline',
              title: 'Бельевая веревка',
              desc: 'с разноцветными прищепками',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Столбы (опоры) */}
                  <line x1="15" y1="15" x2="15" y2="90" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
                  <line x1="85" y1="15" x2="85" y2="90" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
                  <line x1="5" y1="20" x2="25" y2="20" stroke="#94a3b8" strokeWidth="4" />
                  <line x1="75" y1="20" x2="95" y2="20" stroke="#94a3b8" strokeWidth="4" />
                  
                  {/* Веревка (провисает) */}
                  <path d="M 15 25 Q 50 45 85 25" fill="none" stroke="#cbd5e1" strokeWidth="3" />
                  
                  {/* Белье (простыня и футболка) */}
                  <path d="M 25 32 L 50 38 L 50 70 L 25 60 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 55 37 L 80 30 L 80 50 L 70 50 L 70 65 L 60 65 L 60 52 L 55 52 Z" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Разноцветные прищепки */}
                  <rect x="30" y="30" width="3" height="8" fill="#ef4444" stroke="none" transform="rotate(-10 30 30)" />
                  <rect x="45" y="34" width="3" height="8" fill="#eab308" stroke="none" transform="rotate(-5 45 34)" />
                  <rect x="60" y="35" width="3" height="8" fill="#22c55e" stroke="none" transform="rotate(5 60 35)" />
                  <rect x="75" y="30" width="3" height="8" fill="#f43f5e" stroke="none" transform="rotate(15 75 30)" />
                  
                  {/* Трава внизу */}
                  <path d="M 10 90 L 20 90 M 80 90 L 90 90" stroke="#22c55e" strokeWidth="4" />
                </svg>
              )
            },
            {
              id: 'high-birdhouse',
              title: 'Скворечник',
              desc: 'очень высоко на шесте',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Очень длинный шест */}
                  <line x1="50" y1="40" x2="50" y2="100" stroke="#a16207" strokeWidth="6" />
                  <line x1="50" y1="40" x2="50" y2="100" stroke="#713f12" strokeWidth="2" strokeDasharray="10 5" />
                  
                  {/* Скворечник */}
                  <polygon points="35,40 65,40 65,25 50,15 35,25" fill="#fcd34d" stroke="#b45309" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 30 25 L 50 10 L 70 25" fill="none" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Отверстие и жердочка */}
                  <circle cx="50" cy="28" r="5" fill="#1c1917" stroke="#b45309" strokeWidth="2" />
                  <line x1="50" y1="36" x2="50" y2="42" stroke="#451a03" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Облака на фоне (показывают высоту) */}
                  <path d="M 10 30 Q 15 20 25 25 Q 35 20 35 30 Z" fill="#e0f2fe" stroke="none" opacity="0.8" />
                  <path d="M 70 50 Q 75 40 85 45 Q 95 40 90 50 Z" fill="#e0f2fe" stroke="none" opacity="0.8" />
                </svg>
              )
            },
            {
              id: 'construction-sand',
              title: 'Груда песка',
              desc: 'или камней для строительства',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Куча песка */}
                  <path d="M 10 85 C 30 40 70 40 90 85 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 25 85 C 40 60 60 60 75 85 Z" fill="#fef08a" stroke="none" />
                  
                  {/* Точки (фактура песка) */}
                  <circle cx="35" cy="75" r="1" fill="#b45309" stroke="none" />
                  <circle cx="45" cy="65" r="1" fill="#b45309" stroke="none" />
                  <circle cx="55" cy="70" r="1" fill="#b45309" stroke="none" />
                  <circle cx="65" cy="80" r="1" fill="#b45309" stroke="none" />
                  <circle cx="50" cy="55" r="1" fill="#b45309" stroke="none" />
                  
                  {/* Несколько камней/щебня у основания */}
                  <path d="M 15 85 Q 20 80 25 85 Z" fill="#9ca3af" stroke="#4b5563" strokeWidth="2" />
                  <path d="M 80 82 Q 85 75 90 85 Z" fill="#9ca3af" stroke="#4b5563" strokeWidth="2" />
                  <circle cx="75" cy="85" r="3" fill="#64748b" stroke="none" />
                  
                  {/* Воткнутая совковая лопата */}
                  <line x1="60" y1="20" x2="45" y2="55" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 40 50 L 50 55 L 45 70 L 35 65 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 58 25 L 65 20 M 55 20 L 68 25" stroke="#78350f" strokeWidth="3" />
                </svg>
              )
            },
            {
              id: 'comb-shadow',
              title: 'Тень от забора',
              desc: 'похожая на расчёску',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Забор на переднем плане (верхняя часть) */}
                  <rect x="15" y="10" width="10" height="30" fill="#fcd34d" stroke="#b45309" strokeWidth="2" />
                  <rect x="45" y="10" width="10" height="30" fill="#fcd34d" stroke="#b45309" strokeWidth="2" />
                  <rect x="75" y="10" width="10" height="30" fill="#fcd34d" stroke="#b45309" strokeWidth="2" />
                  <line x1="5" y1="30" x2="95" y2="30" stroke="#b45309" strokeWidth="4" />
                  
                  {/* Земля/Асфальт */}
                  <path d="M 5 40 L 95 40 L 95 95 L 5 95 Z" fill="#e5e7eb" stroke="none" />
                  
                  {/* Тень (искаженная перспективой) */}
                  <g fill="#1f2937" opacity="0.3" stroke="none">
                    <polygon points="15,40 25,40 45,95 30,95" />
                    <polygon points="45,40 55,40 75,95 60,95" />
                    <polygon points="75,40 85,40 105,95 90,95" />
                    {/* Тень от поперечной балки */}
                    <polygon points="0,50 100,50 100,65 0,65" />
                  </g>
                  
                  {/* Солнце (источник света) */}
                  <circle cx="10" cy="15" r="8" fill="#fef08a" stroke="none" opacity="0.8" />
                  <path d="M 10 0 L 10 5 M 20 15 L 25 15 M 17 8 L 22 3" stroke="#fef08a" strokeWidth="2" />
                </svg>
              )
            }
          ]
        }
	]
  },
  {
      id: 'ch4',
      title: 'Окраина и Промзона',
      emoji: '🏭',
      superTasks: [
        { id: 'ch4-st1', type: '🔊 Звук', text: 'Гул самолета, заходящего на посадку, или лязг металла.' },
        { id: 'ch4-st2', type: '👃 Запах', text: 'Запах разогретого асфальта, мазута или железной дороги.' },
        { id: 'ch4-st3', type: '🖐️ Текстура', text: 'Проведи палкой по рифленому железу забора (какой получится звук?).' },
        { id: 'ch4-st4', type: '❓ Загадка', text: 'Найди предмет, предназначение которого ты не можешь объяснить.' },
        { id: 'ch4-st5', type: '💎 Коллекция', text: 'Найди 3 разных вида гаек или болтов на земле.' }
      ],
      sections: [
        {
          id: 'ch4-industrial',
          title: '🏭 Индустриальные гиганты',
          subtitle: 'Архитектура и техника',
          theme: 'blue',
          items: [
            {
              id: 'factory-chimney',
              title: 'Заводская труба',
              desc: 'из которой идет дым или пар',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Труба */}
                  <path d="M 40 100 L 43 40 L 57 40 L 60 100 Z" fill="#e5e7eb" stroke="#4b5563" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Красно-белые полосы */}
                  <path d="M 42.5 50 L 57.5 50 L 58 65 L 42 65 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 41 80 L 59 80 L 59.5 95 L 40.5 95 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 43 40 L 57 40 L 57.5 50 L 42.5 50 Z" fill="#f8fafc" stroke="none" />
                  <path d="M 42 65 L 58 65 L 59 80 L 41 80 Z" fill="#f8fafc" stroke="none" />
                  
                  {/* Лестница и кольца жесткости */}
                  <line x1="43" y1="40" x2="57" y2="40" stroke="#1f2937" strokeWidth="4" />
                  <line x1="48" y1="40" x2="48" y2="100" stroke="#1f2937" strokeWidth="2" />
                  <line x1="46" y1="55" x2="50" y2="55" stroke="#1f2937" strokeWidth="1.5" />
                  <line x1="46" y1="70" x2="50" y2="70" stroke="#1f2937" strokeWidth="1.5" />
                  <line x1="46" y1="85" x2="50" y2="85" stroke="#1f2937" strokeWidth="1.5" />
                  
                  {/* Густой пар/дым */}
                  <circle cx="50" cy="30" r="12" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" />
                  <circle cx="40" cy="22" r="10" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
                  <circle cx="62" cy="20" r="14" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" />
                  <circle cx="50" cy="12" r="12" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                  <circle cx="75" cy="15" r="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
                  <circle cx="30" cy="15" r="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M 35 30 L 65 30" stroke="#f1f5f9" strokeWidth="4" />
                </svg>
              )
            },
            {
              id: 'transmission-tower',
              title: 'Высоковольтная вышка',
              desc: 'похожая на гигантского робота',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Основные опоры */}
                  <line x1="25" y1="95" x2="45" y2="30" stroke="#475569" strokeWidth="4" />
                  <line x1="75" y1="95" x2="55" y2="30" stroke="#475569" strokeWidth="4" />
                  <line x1="45" y1="30" x2="50" y2="10" stroke="#475569" strokeWidth="4" />
                  <line x1="55" y1="30" x2="50" y2="10" stroke="#475569" strokeWidth="4" />
                  
                  {/* Поперечные балки (руки робота) */}
                  <polygon points="43,38 10,38 15,45 40,45" fill="#94a3b8" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />
                  <polygon points="57,38 90,38 85,45 60,45" fill="#94a3b8" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />
                  <polygon points="46,20 25,20 28,25 45,25" fill="#94a3b8" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />
                  <polygon points="54,20 75,20 72,25 55,25" fill="#94a3b8" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Внутренняя решетка (ферма) */}
                  <path d="M 30 80 L 70 80 M 35 65 L 65 65 M 40 50 L 60 50" stroke="#64748b" strokeWidth="2" />
                  <path d="M 25 95 L 70 80 M 75 95 L 30 80 M 30 80 L 65 65 M 70 80 L 35 65 M 35 65 L 60 50 M 65 65 L 40 50" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Изоляторы (гирлянды) */}
                  <line x1="12" y1="45" x2="12" y2="55" stroke="#fef08a" strokeWidth="4" strokeLinecap="round" />
                  <line x1="88" y1="45" x2="88" y2="55" stroke="#fef08a" strokeWidth="4" strokeLinecap="round" />
                  <line x1="26" y1="25" x2="26" y2="35" stroke="#fef08a" strokeWidth="4" strokeLinecap="round" />
                  <line x1="74" y1="25" x2="74" y2="35" stroke="#fef08a" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Провода */}
                  <path d="M 12 55 Q 30 80 50 65 Q 70 80 88 55" fill="none" stroke="#1f2937" strokeWidth="2" />
                  <path d="M 26 35 Q 50 50 74 35" fill="none" stroke="#1f2937" strokeWidth="2" />
                  <path d="M 50 10 Q 75 25 100 15" fill="none" stroke="#1f2937" strokeWidth="2" />
                  <path d="M 50 10 Q 25 25 0 15" fill="none" stroke="#1f2937" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'water-tower',
              title: 'Водонапорная башня',
              desc: 'старая кирпичная или стальная',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Основание башни (кирпич) */}
                  <path d="M 40 45 L 35 95 L 65 95 L 60 45 Z" fill="#b45309" stroke="#78350f" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Кирпичная кладка (узор) */}
                  <path d="M 39 55 L 61 55 M 38 65 L 62 65 M 37 75 L 63 75 M 36 85 L 64 85" stroke="#92400e" strokeWidth="2" />
                  <path d="M 45 45 L 45 55 M 55 45 L 55 55 M 42 55 L 42 65 M 52 55 L 52 65 M 58 55 L 58 65 M 45 65 L 45 75 M 55 65 L 55 75 M 42 75 L 42 85 M 52 75 L 52 85 M 58 75 L 58 85 M 45 85 L 45 95 M 55 85 L 55 95" stroke="#92400e" strokeWidth="2" />
                  
                  {/* Дверь внизу */}
                  <path d="M 45 95 L 45 85 C 45 80 55 80 55 85 L 55 95" fill="#451a03" stroke="#1c1917" strokeWidth="2" />
                  
                  {/* Стальной бак (резервуар) */}
                  <path d="M 25 25 C 25 40 30 50 50 50 C 70 50 75 40 75 25 L 25 25 Z" fill="#94a3b8" stroke="#475569" strokeWidth="4" strokeLinejoin="round" />
                  <line x1="35" y1="25" x2="35" y2="48" stroke="#64748b" strokeWidth="2" />
                  <line x1="65" y1="25" x2="65" y2="48" stroke="#64748b" strokeWidth="2" />
                  
                  {/* Крыша бака (конус) */}
                  <polygon points="20,25 50,5 80,25" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="35" y1="25" x2="45" y2="10" stroke="#b91c1c" strokeWidth="2" />
                  <line x1="65" y1="25" x2="55" y2="10" stroke="#b91c1c" strokeWidth="2" />
                  
                  {/* Лестница сбоку */}
                  <line x1="72" y1="20" x2="72" y2="95" stroke="#1f2937" strokeWidth="2" />
                  <line x1="76" y1="20" x2="76" y2="95" stroke="#1f2937" strokeWidth="2" />
                  <path d="M 72 30 L 76 30 M 72 40 L 76 40 M 72 50 L 76 50 M 72 60 L 76 60 M 72 70 L 76 70 M 72 80 L 76 80 M 72 90 L 76 90" stroke="#1f2937" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'warehouse',
              title: 'Складской ангар',
              desc: 'с полукруглой крышей',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Задняя стена/Торцевая часть */}
                  <path d="M 15 90 L 15 50 C 15 20 85 20 85 50 L 85 90 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="4" strokeLinejoin="round" />
                  <path d="M 15 50 C 15 20 85 20 85 50" fill="none" stroke="#94a3b8" strokeWidth="4" />
                  
                  {/* Гофр (рифленое железо) */}
                  <line x1="25" y1="37" x2="25" y2="90" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="35" y1="30" x2="35" y2="90" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="45" y1="26" x2="45" y2="40" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="55" y1="26" x2="55" y2="40" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="65" y1="30" x2="65" y2="90" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="75" y1="37" x2="75" y2="90" stroke="#cbd5e1" strokeWidth="2" />
                  
                  {/* Огромные раздвижные ворота */}
                  <rect x="35" y="45" width="30" height="45" fill="#f8fafc" stroke="#475569" strokeWidth="4" strokeLinejoin="round" />
                  <line x1="50" y1="45" x2="50" y2="90" stroke="#475569" strokeWidth="3" />
                  <rect x="38" y="55" width="10" height="8" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
                  <rect x="52" y="55" width="10" height="8" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
                  
                  {/* Желто-черная предупреждающая лента */}
                  <rect x="15" y="85" width="70" height="5" fill="#facc15" stroke="none" />
                  <path d="M 20 85 L 15 90 M 30 85 L 25 90 M 40 85 L 35 90 M 50 85 L 45 90 M 60 85 L 55 90 M 70 85 L 65 90 M 80 85 L 75 90" stroke="#1f2937" strokeWidth="2" />
                  
                  {/* Вентиляторы сверху */}
                  <circle cx="50" cy="20" r="5" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
                  <path d="M 48 18 L 52 22 M 52 18 L 48 22" stroke="#475569" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'gantry-crane',
              title: 'Подъемный кран',
              desc: 'мощный портовый или на базе',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Основание/Рельсы */}
                  <line x1="10" y1="95" x2="90" y2="95" stroke="#4b5563" strokeWidth="4" />
                  <rect x="15" y="85" width="15" height="10" fill="#1f2937" stroke="none" />
                  <rect x="70" y="85" width="15" height="10" fill="#1f2937" stroke="none" />
                  
                  {/* Опоры крана (А-образные) */}
                  <path d="M 22 85 L 35 35 L 40 35 L 32 85 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 78 85 L 65 35 L 60 35 L 68 85 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="2" strokeLinejoin="round" />
                  <line x1="26" y1="60" x2="74" y2="60" stroke="#ca8a04" strokeWidth="3" />
                  
                  {/* Верхняя горизонтальная балка */}
                  <rect x="10" y="25" width="80" height="10" fill="#fde047" stroke="#b45309" strokeWidth="3" />
                  <path d="M 15 25 L 25 35 M 25 25 L 35 35 M 35 25 L 45 35 M 45 25 L 55 35 M 55 25 L 65 35 M 65 25 L 75 35 M 75 25 L 85 35" stroke="#ca8a04" strokeWidth="2" />
                  
                  {/* Кабина оператора */}
                  <rect x="65" y="35" width="15" height="15" fill="#38bdf8" stroke="#0284c7" strokeWidth="3" />
                  <line x1="65" y1="42" x2="80" y2="42" stroke="#0284c7" strokeWidth="2" />
                  
                  {/* Тросы и крюк (тельфер) */}
                  <rect x="35" y="35" width="15" height="8" fill="#475569" stroke="#1e293b" strokeWidth="2" />
                  <line x1="42" y1="43" x2="42" y2="70" stroke="#64748b" strokeWidth="2" />
                  <circle cx="42" cy="72" r="4" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
                  <path d="M 42 76 C 42 82 48 82 48 76" fill="none" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'loading-ramp',
              title: 'Грузовая эстакада',
              desc: 'платформа для погрузки товаров',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Бетонная рампа */}
                  <path d="M 10 50 L 70 50 L 95 90 L 10 90 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="4" strokeLinejoin="round" />
                  <path d="M 10 50 L 95 50 L 95 90 L 70 50" fill="none" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="10" y1="60" x2="75" y2="60" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="10" y1="70" x2="82" y2="70" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="10" y1="80" x2="88" y2="80" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Резиновые отбойники (бамперы) */}
                  <rect x="15" y="45" width="8" height="15" rx="1" fill="#1f2937" stroke="none" />
                  <rect x="40" y="45" width="8" height="15" rx="1" fill="#1f2937" stroke="none" />
                  
                  {/* Доклевеллер (уравнительная платформа) */}
                  <polygon points="25,50 38,50 42,46 21,46" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Деревянная паллета с коробками */}
                  <rect x="55" y="38" width="30" height="12" fill="#d97706" stroke="#92400e" strokeWidth="2" />
                  <line x1="65" y1="38" x2="65" y2="50" stroke="#92400e" strokeWidth="2" />
                  <line x1="75" y1="38" x2="75" y2="50" stroke="#92400e" strokeWidth="2" />
                  <rect x="60" y="20" width="20" height="18" fill="#fcd34d" stroke="#ca8a04" strokeWidth="3" />
                  <line x1="60" y1="29" x2="80" y2="29" stroke="#ca8a04" strokeWidth="2" />
                  <path d="M 68 20 L 68 25 M 72 20 L 72 25" stroke="#b45309" strokeWidth="1.5" />
                  
                  {/* Маркировка на стене */}
                  <rect x="70" y="5" width="10" height="10" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
                  <path d="M 72 7 L 78 13 M 78 7 L 72 13" stroke="#1f2937" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'gas-booth',
              title: 'Газораспределительная будка',
              desc: 'желтая, с надписью «Огнеопасно»',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Желтый металлический шкаф */}
                  <rect x="25" y="30" width="50" height="60" rx="3" fill="#fde047" stroke="#ca8a04" strokeWidth="4" />
                  <rect x="30" y="35" width="18" height="50" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                  <rect x="52" y="35" width="18" height="50" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                  
                  {/* Петли и ручки */}
                  <line x1="30" y1="45" x2="28" y2="45" stroke="#4b5563" strokeWidth="3" />
                  <line x1="30" y1="75" x2="28" y2="75" stroke="#4b5563" strokeWidth="3" />
                  <line x1="70" y1="45" x2="72" y2="45" stroke="#4b5563" strokeWidth="3" />
                  <line x1="70" y1="75" x2="72" y2="75" stroke="#4b5563" strokeWidth="3" />
                  <circle cx="45" cy="60" r="1.5" fill="#1f2937" stroke="none" />
                  <circle cx="55" cy="60" r="1.5" fill="#1f2937" stroke="none" />
                  
                  {/* Знак "Огнеопасно" (Огонь) */}
                  <path d="M 50 48 C 45 48 45 42 50 38 C 55 42 55 48 50 48 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                  <path d="M 50 46 C 48 46 48 43 50 41 C 52 43 52 46 50 46 Z" fill="#facc15" stroke="none" />
                  <circle cx="50" cy="43" r="7" fill="none" stroke="#ef4444" strokeWidth="2" />
                  
                  {/* Вентиляционная решетка */}
                  <path d="M 35 75 L 43 75 M 35 80 L 43 80" stroke="#ca8a04" strokeWidth="2" />
                  <path d="M 57 75 L 65 75 M 57 80 L 65 80" stroke="#ca8a04" strokeWidth="2" />
                  
                  {/* Желтая газовая труба */}
                  <path d="M 10 90 L 10 50 L 25 50" fill="none" stroke="#facc15" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 10 90 L 10 50 L 25 50" fill="none" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="10" cy="65" r="5" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" /> {/* Красный вентиль */}
                  <path d="M 5 65 L 15 65 M 10 60 L 10 70" stroke="#b91c1c" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'satellite-dish',
              title: 'Спутниковая тарелка',
              desc: 'огромная, на крыше или земле',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Опорная стойка */}
                  <path d="M 50 65 L 50 95" stroke="#475569" strokeWidth="8" />
                  <path d="M 30 95 L 70 95" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 40 95 L 50 75 L 60 95" fill="none" stroke="#64748b" strokeWidth="3" />
                  
                  {/* Сама тарелка */}
                  <ellipse cx="50" cy="40" rx="40" ry="25" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="4" transform="rotate(-15 50 40)" />
                  <ellipse cx="50" cy="40" rx="30" ry="18" fill="none" stroke="#cbd5e1" strokeWidth="2" transform="rotate(-15 50 40)" />
                  <ellipse cx="50" cy="40" rx="20" ry="12" fill="none" stroke="#cbd5e1" strokeWidth="2" transform="rotate(-15 50 40)" />
                  <path d="M 15 30 L 85 50 M 25 20 L 75 60" stroke="#cbd5e1" strokeWidth="2" />
                  
                  {/* Конвертер (приемник) на штангах */}
                  <circle cx="35" cy="60" r="5" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="2" />
                  <circle cx="35" cy="60" r="2" fill="#fff" stroke="none" />
                  <path d="M 50 40 L 35 60" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 25 45 L 35 60 M 60 65 L 35 60" stroke="#64748b" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'transformer',
              title: 'Трансформатор',
              desc: 'подстанция, которая тихо гудит',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Основной корпус */}
                  <rect x="25" y="40" width="50" height="50" rx="2" fill="#9ca3af" stroke="#4b5563" strokeWidth="4" />
                  
                  {/* Ребра охлаждения (радиаторы) */}
                  <rect x="15" y="45" width="10" height="40" rx="1" fill="#64748b" stroke="#334155" strokeWidth="3" />
                  <line x1="18" y1="45" x2="18" y2="85" stroke="#475569" strokeWidth="2" />
                  <line x1="22" y1="45" x2="22" y2="85" stroke="#475569" strokeWidth="2" />
                  
                  <rect x="75" y="45" width="10" height="40" rx="1" fill="#64748b" stroke="#334155" strokeWidth="3" />
                  <line x1="78" y1="45" x2="78" y2="85" stroke="#475569" strokeWidth="2" />
                  <line x1="82" y1="45" x2="82" y2="85" stroke="#475569" strokeWidth="2" />
                  
                  {/* Изоляторы высокого напряжения сверху */}
                  <path d="M 35 40 L 35 15 M 50 40 L 50 15 M 65 40 L 65 15" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
                  <polygon points="30,25 40,25 38,30 32,30" fill="#fca5a5" stroke="#b91c1c" strokeWidth="2" />
                  <polygon points="30,18 40,18 38,23 32,23" fill="#fca5a5" stroke="#b91c1c" strokeWidth="2" />
                  
                  <polygon points="45,25 55,25 53,30 47,30" fill="#fca5a5" stroke="#b91c1c" strokeWidth="2" />
                  <polygon points="45,18 55,18 53,23 47,23" fill="#fca5a5" stroke="#b91c1c" strokeWidth="2" />
                  
                  <polygon points="60,25 70,25 68,30 62,30" fill="#fca5a5" stroke="#b91c1c" strokeWidth="2" />
                  <polygon points="60,18 70,18 68,23 62,23" fill="#fca5a5" stroke="#b91c1c" strokeWidth="2" />
                  
                  {/* Табличка «Высокое напряжение» */}
                  <polygon points="50,55 42,70 58,70" fill="#fde047" stroke="#1f2937" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 50 58 L 48 64 L 52 64 L 50 68" stroke="#1f2937" strokeWidth="2" fill="none" />
                </svg>
              )
            },
            {
              id: 'floodlight',
              title: 'Прожектор',
              desc: 'на высоком столбе для освещения зоны',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Столб и рама */}
                  <path d="M 50 40 L 50 100" stroke="#64748b" strokeWidth="6" />
                  <path d="M 30 35 L 70 35 L 70 45 L 30 45 Z" fill="#94a3b8" stroke="#475569" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="50" y1="35" x2="50" y2="45" stroke="#475569" strokeWidth="3" />
                  
                  {/* Лучи света (направлены вниз) */}
                  <path d="M 40 45 L 10 95 L 45 95 Z" fill="#fef08a" stroke="none" opacity="0.4" />
                  <path d="M 60 45 L 55 95 L 90 95 Z" fill="#fef08a" stroke="none" opacity="0.4" />
                  
                  {/* Лампы прожектора */}
                  <rect x="33" y="15" width="14" height="20" rx="2" fill="#fde047" stroke="#ca8a04" strokeWidth="3" />
                  <rect x="53" y="15" width="14" height="20" rx="2" fill="#fde047" stroke="#ca8a04" strokeWidth="3" />
                  
                  {/* Отражатели и яркие блики внутри ламп */}
                  <path d="M 36 20 L 44 20 M 36 25 L 44 25" stroke="#fef08a" strokeWidth="2" />
                  <path d="M 56 20 L 64 20 M 56 25 L 64 25" stroke="#fef08a" strokeWidth="2" />
                  <circle cx="40" cy="25" r="4" fill="#ffffff" stroke="none" style={{ filter: 'drop-shadow(0 0 3px #ffffff)' }} />
                  <circle cx="60" cy="25" r="4" fill="#ffffff" stroke="none" style={{ filter: 'drop-shadow(0 0 3px #ffffff)' }} />
                  
                  {/* Защитная решетка */}
                  <path d="M 35 15 L 35 35 M 40 15 L 40 35 M 45 15 L 45 35" stroke="#475569" strokeWidth="1" />
                  <path d="M 55 15 L 55 35 M 60 15 L 60 35 M 65 15 L 65 35" stroke="#475569" strokeWidth="1" />
                  <line x1="33" y1="25" x2="47" y2="25" stroke="#475569" strokeWidth="1" />
                  <line x1="53" y1="25" x2="67" y2="25" stroke="#475569" strokeWidth="1" />
                </svg>
              )
            }
          ]
        },
	    {
          id: 'ch4-transport',
          title: '🛤 Железные дороги и транспорт',
          subtitle: 'Суровые машины',
          theme: 'rose',
          items: [
            {
              id: 'railway-crossing',
              title: 'Переезд',
              desc: 'со шлагбаумом',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Рельсы */}
                  <path d="M 10 90 L 40 50 M 30 95 L 60 55 M 60 95 L 90 55" stroke="#94a3b8" strokeWidth="3" />
                  <line x1="20" y1="80" x2="45" y2="80" stroke="#78350f" strokeWidth="4" />
                  <line x1="28" y1="70" x2="52" y2="70" stroke="#78350f" strokeWidth="4" />
                  <line x1="36" y1="60" x2="60" y2="60" stroke="#78350f" strokeWidth="4" />
                  
                  {/* Столб светофора */}
                  <line x1="25" y1="20" x2="25" y2="90" stroke="#4b5563" strokeWidth="4" />
                  <rect x="15" y="30" width="20" height="10" rx="2" fill="#1f2937" stroke="none" />
                  <circle cx="20" cy="35" r="3" fill="#ef4444" stroke="none" style={{ filter: 'drop-shadow(0 0 3px #ef4444)' }} />
                  <circle cx="30" cy="35" r="3" fill="#ef4444" stroke="none" style={{ filter: 'drop-shadow(0 0 3px #ef4444)' }} />
                  
                  {/* Предупреждающий крест */}
                  <line x1="15" y1="15" x2="35" y2="25" stroke="#fff" strokeWidth="4" />
                  <line x1="35" y1="15" x2="15" y2="25" stroke="#fff" strokeWidth="4" />
                  <line x1="15" y1="15" x2="35" y2="25" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="35" y1="15" x2="15" y2="25" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
                  
                  {/* Шлагбаум (опущенный) */}
                  <path d="M 25 55 L 95 65" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 25 55 L 95 65" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" strokeDasharray="10 10" />
                  <circle cx="25" cy="55" r="4" fill="#374151" stroke="none" />
                </svg>
              )
            },
            {
              id: 'tank-car',
              title: 'Вагон-цистерна',
              desc: 'найди на ней номер или символ',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Рельсы и колеса (тележки) */}
                  <line x1="5" y1="85" x2="95" y2="85" stroke="#64748b" strokeWidth="4" />
                  <circle cx="25" cy="75" r="6" fill="#374151" stroke="#111827" strokeWidth="3" />
                  <circle cx="40" cy="75" r="6" fill="#374151" stroke="#111827" strokeWidth="3" />
                  <line x1="25" y1="75" x2="40" y2="75" stroke="#111827" strokeWidth="4" />
                  
                  <circle cx="60" cy="75" r="6" fill="#374151" stroke="#111827" strokeWidth="3" />
                  <circle cx="75" cy="75" r="6" fill="#374151" stroke="#111827" strokeWidth="3" />
                  <line x1="60" y1="75" x2="75" y2="75" stroke="#111827" strokeWidth="4" />
                  
                  {/* Рама вагона */}
                  <rect x="15" y="60" width="70" height="5" fill="#1f2937" stroke="none" />
                  
                  {/* Сама цистерна */}
                  <path d="M 15 30 C 15 20 25 20 25 20 L 75 20 C 85 20 85 30 85 40 C 85 50 85 60 75 60 L 25 60 C 15 60 15 50 15 40 Z" fill="#fb923c" stroke="#c2410c" strokeWidth="3" />
                  <ellipse cx="25" cy="40" rx="5" ry="20" fill="none" stroke="#ea580c" strokeWidth="2" />
                  <ellipse cx="75" cy="40" rx="5" ry="20" fill="none" stroke="#ea580c" strokeWidth="2" />
                  
                  {/* Блики и фактура */}
                  <line x1="25" y1="28" x2="75" y2="28" stroke="#fdba74" strokeWidth="4" opacity="0.8" />
                  
                  {/* Номер и знаки опасности */}
                  <rect x="45" y="35" width="10" height="10" fill="#fff" stroke="#111827" strokeWidth="1.5" transform="rotate(45 50 40)" />
                  <circle cx="50" cy="40" r="1.5" fill="#ef4444" stroke="none" />
                  <path d="M 35 45 L 35 35 M 39 45 L 39 35" stroke="#111827" strokeWidth="1.5" />
                  <path d="M 63 35 L 63 45 M 67 35 L 67 45" stroke="#111827" strokeWidth="1.5" />
                  
                  {/* Верхний люк и лесенка */}
                  <rect x="45" y="15" width="10" height="5" fill="#4b5563" stroke="#1f2937" />
                  <line x1="50" y1="15" x2="50" y2="60" stroke="#1f2937" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              )
            },
            {
              id: 'semaphore',
              title: 'Семафор',
              desc: 'или специальный ж/д светофор',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Массивный бетонный/металлический столб */}
                  <rect x="44" y="20" width="12" height="75" fill="#94a3b8" stroke="#475569" strokeWidth="3" />
                  <line x1="48" y1="20" x2="48" y2="95" stroke="#64748b" strokeWidth="2" />
                  
                  {/* Лестница на столбе */}
                  <line x1="44" y1="40" x2="35" y2="40" stroke="#475569" strokeWidth="2" />
                  <line x1="44" y1="55" x2="35" y2="55" stroke="#475569" strokeWidth="2" />
                  <line x1="44" y1="70" x2="35" y2="70" stroke="#475569" strokeWidth="2" />
                  <line x1="44" y1="85" x2="35" y2="85" stroke="#475569" strokeWidth="2" />
                  <line x1="35" y1="40" x2="35" y2="95" stroke="#475569" strokeWidth="2" />
                  
                  {/* Щит светофора (черный с козырьками) */}
                  <rect x="35" y="10" width="30" height="45" rx="5" fill="#111827" stroke="#374151" strokeWidth="2" />
                  <path d="M 35 25 A 15 15 0 0 1 65 25" fill="none" stroke="#111827" strokeWidth="4" />
                  <path d="M 35 45 A 15 15 0 0 1 65 45" fill="none" stroke="#111827" strokeWidth="4" />
                  
                  {/* Линзы */}
                  <circle cx="50" cy="25" r="6" fill="#22c55e" stroke="none" style={{ filter: 'drop-shadow(0 0 4px #22c55e)' }} />
                  <circle cx="50" cy="45" r="6" fill="#4b5563" stroke="none" />
                  
                  <circle cx="52" cy="23" r="2" fill="#fff" stroke="none" /> {/* Блик */}
                </svg>
              )
            },
            {
              id: 'old-locomotive',
              title: 'Старый тепловоз',
              desc: 'или дрезина',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Рельсы */}
                  <path d="M 10 85 L 90 85 M 20 90 L 80 90 M 5 95 L 95 95" stroke="#9ca3af" strokeWidth="2" />
                  
                  {/* Колеса и шатуны */}
                  <circle cx="35" cy="75" r="8" fill="#1f2937" stroke="#4b5563" strokeWidth="3" />
                  <circle cx="65" cy="75" r="8" fill="#1f2937" stroke="#4b5563" strokeWidth="3" />
                  <line x1="35" y1="75" x2="65" y2="75" stroke="#94a3b8" strokeWidth="4" />
                  <circle cx="35" cy="75" r="2" fill="#fff" stroke="none" />
                  <circle cx="65" cy="75" r="2" fill="#fff" stroke="none" />
                  
                  {/* Метельник (отбойник) спереди */}
                  <polygon points="15,65 85,65 75,80 25,80" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
                  <line x1="25" y1="65" x2="35" y2="80" stroke="#ca8a04" strokeWidth="2" />
                  <line x1="45" y1="65" x2="55" y2="80" stroke="#ca8a04" strokeWidth="2" />
                  <line x1="65" y1="65" x2="75" y2="80" stroke="#ca8a04" strokeWidth="2" />
                  
                  {/* Кабина и корпус */}
                  <path d="M 25 65 L 25 35 L 45 20 L 75 20 L 75 65 Z" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="3" strokeLinejoin="round" />
                  <rect x="25" y="60" width="50" height="5" fill="#ef4444" stroke="none" />
                  
                  {/* Окна */}
                  <polygon points="35,35 45,28 70,28 70,35" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
                  <line x1="55" y1="28" x2="55" y2="35" stroke="#0284c7" strokeWidth="2" />
                  
                  {/* Фара */}
                  <circle cx="25" cy="45" r="4" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 3px #fef08a)' }} />
                  <path d="M 20 40 L 5 40 M 20 50 L 5 50 M 20 45 L 5 45" stroke="#fef08a" strokeWidth="2" opacity="0.6" />
                </svg>
              )
            },
            {
              id: 'truck',
              title: 'Грузовик-фура',
              desc: 'с иностранными номерами',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Дорога */}
                  <line x1="10" y1="85" x2="90" y2="85" stroke="#9ca3af" strokeWidth="4" strokeDasharray="10 5" />
                  
                  {/* Колеса */}
                  <circle cx="30" cy="75" r="8" fill="#1f2937" stroke="#374151" strokeWidth="4" />
                  <circle cx="70" cy="75" r="8" fill="#1f2937" stroke="#374151" strokeWidth="4" />
                  <circle cx="30" cy="75" r="3" fill="#9ca3af" stroke="none" />
                  <circle cx="70" cy="75" r="3" fill="#9ca3af" stroke="none" />
                  
                  {/* Прицеп (задний план) */}
                  <path d="M 60 20 L 95 20 L 95 70 L 60 70 Z" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="65" y1="20" x2="65" y2="70" stroke="#d1d5db" strokeWidth="2" />
                  <line x1="75" y1="20" x2="75" y2="70" stroke="#d1d5db" strokeWidth="2" />
                  <line x1="85" y1="20" x2="85" y2="70" stroke="#d1d5db" strokeWidth="2" />
                  
                  {/* Кабина (тягач) */}
                  <path d="M 15 70 L 15 45 C 15 35 25 25 35 25 L 55 25 C 60 25 65 30 65 40 L 65 70 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Решетка радиатора */}
                  <rect x="15" y="45" width="10" height="20" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
                  <line x1="17" y1="48" x2="23" y2="48" stroke="#475569" strokeWidth="1.5" />
                  <line x1="17" y1="52" x2="23" y2="52" stroke="#475569" strokeWidth="1.5" />
                  <line x1="17" y1="56" x2="23" y2="56" stroke="#475569" strokeWidth="1.5" />
                  <line x1="17" y1="60" x2="23" y2="60" stroke="#475569" strokeWidth="1.5" />
                  
                  {/* Окно */}
                  <path d="M 22 40 L 25 30 C 30 28 40 28 50 30 L 50 40 Z" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
                  
                  {/* Зеркало заднего вида и номер */}
                  <path d="M 50 35 L 58 35 L 58 45" fill="none" stroke="#1f2937" strokeWidth="2" />
                  <rect x="56" y="45" width="4" height="8" rx="1" fill="#475569" stroke="none" />
                  <rect x="18" y="68" width="12" height="4" fill="#fff" stroke="#1f2937" strokeWidth="1" />
                </svg>
              )
            },
            {
              id: 'muddy-tractor',
              title: 'Грязный трактор',
              desc: 'с огромными колесами',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Заднее гигантское колесо с грязью */}
                  <circle cx="75" cy="65" r="20" fill="#1f2937" stroke="#111827" strokeWidth="5" />
                  <path d="M 75 45 L 75 50 M 75 85 L 75 80 M 55 65 L 60 65 M 95 65 L 90 65 M 61 51 L 64 54 M 89 79 L 86 76" stroke="#111827" strokeWidth="4" />
                  <circle cx="75" cy="65" r="8" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
                  <path d="M 55 65 C 60 55 70 80 80 85" fill="none" stroke="#78350f" strokeWidth="6" opacity="0.8" /> {/* Грязь */}
                  
                  {/* Переднее колесо */}
                  <circle cx="25" cy="75" r="10" fill="#1f2937" stroke="#111827" strokeWidth="4" />
                  <circle cx="25" cy="75" r="4" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
                  <path d="M 15 75 C 20 85 30 70 35 75" fill="none" stroke="#78350f" strokeWidth="4" opacity="0.8" />
                  
                  {/* Корпус трактора */}
                  <path d="M 15 65 L 15 45 C 15 40 25 35 45 35 L 45 20 C 45 15 55 15 65 15 L 90 15 L 90 65 Z" fill="#22c55e" stroke="#15803d" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Грязь на корпусе */}
                  <path d="M 20 60 Q 30 45 40 60 T 60 60" fill="none" stroke="#78350f" strokeWidth="3" opacity="0.7" />
                  <circle cx="80" cy="50" r="4" fill="#78350f" stroke="none" opacity="0.7" />
                  <circle cx="45" cy="45" r="2" fill="#78350f" stroke="none" opacity="0.7" />
                  
                  {/* Кабина */}
                  <rect x="60" y="20" width="25" height="15" fill="#bae6fd" stroke="#0369a1" strokeWidth="2" />
                  <line x1="72" y1="20" x2="72" y2="35" stroke="#0369a1" strokeWidth="2" />
                  
                  {/* Выхлопная труба */}
                  <path d="M 30 35 L 30 10 L 35 10" fill="none" stroke="#4b5563" strokeWidth="4" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'tarp-car',
              title: 'Машина под брезентом',
              desc: 'кто знает, что под ним?',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Асфальт */}
                  <line x1="10" y1="85" x2="90" y2="85" stroke="#9ca3af" strokeWidth="3" />
                  
                  {/* Силуэт машины под брезентом */}
                  <path d="M 20 80 L 15 55 C 15 45 25 35 40 30 L 60 30 C 75 35 85 45 85 55 L 80 80 Z" fill="#4b5563" stroke="#374151" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Складки брезента */}
                  <path d="M 35 30 C 30 50 40 70 30 80" fill="none" stroke="#374151" strokeWidth="3" opacity="0.6" />
                  <path d="M 50 30 C 55 50 45 70 55 80" fill="none" stroke="#374151" strokeWidth="3" opacity="0.6" />
                  <path d="M 70 35 C 75 50 65 65 75 80" fill="none" stroke="#374151" strokeWidth="3" opacity="0.6" />
                  <path d="M 25 45 Q 20 60 25 75" fill="none" stroke="#374151" strokeWidth="2" opacity="0.5" />
                  
                  {/* Веревки, стягивающие брезент снизу */}
                  <path d="M 18 75 C 40 80 60 80 82 75" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 2" />
                  <path d="M 25 76 L 25 80 M 50 78 L 50 82 M 75 76 L 75 80" stroke="#cbd5e1" strokeWidth="2" />
                  
                  {/* Чуть-чуть виднеется колесо */}
                  <path d="M 25 80 A 10 10 0 0 0 40 80" fill="#1f2937" stroke="none" />
                  <path d="M 60 80 A 10 10 0 0 0 75 80" fill="#1f2937" stroke="none" />
                </svg>
              )
            },
            {
              id: 'car-ramp',
              title: 'Эстакада',
              desc: 'две стальные полосы для авто',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Земля */}
                  <line x1="5" y1="85" x2="95" y2="85" stroke="#a8a29e" strokeWidth="4" />
                  
                  {/* Стальная рампа (боковая часть) */}
                  <path d="M 20 85 L 45 45 L 85 45 L 85 50 L 50 50 L 30 85 Z" fill="#94a3b8" stroke="#475569" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Опоры */}
                  <line x1="80" y1="50" x2="80" y2="85" stroke="#475569" strokeWidth="5" />
                  <line x1="60" y1="50" x2="60" y2="85" stroke="#475569" strokeWidth="5" />
                  <path d="M 80 50 L 60 85 M 60 50 L 80 85" stroke="#64748b" strokeWidth="2" />
                  
                  {/* Вторая рампа (на заднем плане, чуть видна) */}
                  <path d="M 40 35 L 75 35 L 75 40 L 45 40 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" strokeLinejoin="round" />
                  <line x1="70" y1="40" x2="70" y2="85" stroke="#64748b" strokeWidth="3" />
                  
                  {/* Рифленая текстура на передней рампе */}
                  <line x1="48" y1="45" x2="48" y2="50" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="55" y1="45" x2="55" y2="50" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="62" y1="45" x2="62" y2="50" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="69" y1="45" x2="69" y2="50" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="76" y1="45" x2="76" y2="50" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="83" y1="45" x2="83" y2="50" stroke="#cbd5e1" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'abandoned-trailer',
              title: 'Заброшенный прицеп',
              desc: 'старый кузов, поросший травой',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Трава и сорняки */}
                  <path d="M 10 90 Q 20 60 30 90 M 15 95 Q 25 70 35 95 M 65 95 Q 75 60 85 95 M 70 90 Q 85 70 95 90" stroke="#15803d" strokeWidth="2" fill="none" />
                  
                  {/* Кузов прицепа */}
                  <path d="M 20 80 L 20 40 L 80 40 L 80 80 Z" fill="#b45309" stroke="#78350f" strokeWidth="4" strokeLinejoin="round" />
                  
                  {/* Ржавчина и потеки */}
                  <path d="M 30 40 L 30 65 M 45 40 L 45 75 M 60 40 L 60 55 M 70 40 L 70 70" stroke="#92400e" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="30" cy="50" r="4" fill="#92400e" stroke="none" />
                  <circle cx="65" cy="65" r="6" fill="#92400e" stroke="none" />
                  
                  {/* Единственное спущенное колесо */}
                  <ellipse cx="65" cy="80" rx="12" ry="8" fill="#1f2937" stroke="#111827" strokeWidth="3" />
                  <circle cx="65" cy="78" r="4" fill="#9ca3af" stroke="none" />
                  
                  {/* Подпорка спереди */}
                  <line x1="30" y1="80" x2="30" y2="90" stroke="#475569" strokeWidth="5" />
                  <line x1="25" y1="90" x2="35" y2="90" stroke="#475569" strokeWidth="3" />
                  
                  {/* Окно/люк (разбитый) */}
                  <rect x="40" y="45" width="20" height="15" fill="#111827" stroke="#451a03" strokeWidth="2" />
                  <path d="M 40 45 L 45 50 L 50 45 Z" fill="#cbd5e1" stroke="none" /> {/* Осколок стекла */}
                </svg>
              )
            },
            {
              id: 'tire-stack',
              title: 'Стопка старых покрышек',
              desc: 'найди самую большую',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Нижняя (самая большая) покрышка */}
                  <ellipse cx="50" cy="80" rx="35" ry="12" fill="#1f2937" stroke="#111827" strokeWidth="4" />
                  <ellipse cx="50" cy="75" rx="35" ry="12" fill="#374151" stroke="#111827" strokeWidth="2" />
                  <ellipse cx="50" cy="75" rx="20" ry="6" fill="#111827" stroke="none" />
                  {/* Протектор */}
                  <path d="M 15 75 L 15 80 M 25 85 L 25 90 M 50 87 L 50 92 M 75 85 L 75 90 M 85 75 L 85 80" stroke="#111827" strokeWidth="2" />
                  
                  {/* Средняя покрышка */}
                  <ellipse cx="48" cy="62" rx="30" ry="10" fill="#1f2937" stroke="#111827" strokeWidth="4" />
                  <ellipse cx="48" cy="58" rx="30" ry="10" fill="#4b5563" stroke="#111827" strokeWidth="2" />
                  <ellipse cx="48" cy="58" rx="16" ry="5" fill="#111827" stroke="none" />
                  {/* Протектор */}
                  <path d="M 18 58 L 18 62 M 30 66 L 30 70 M 50 68 L 50 72 M 70 65 L 70 69 M 78 58 L 78 62" stroke="#111827" strokeWidth="2" />
                  
                  {/* Верхняя (маленькая) покрышка */}
                  <ellipse cx="55" cy="45" rx="25" ry="8" fill="#1f2937" stroke="#111827" strokeWidth="4" />
                  <ellipse cx="55" cy="41" rx="25" ry="8" fill="#374151" stroke="#111827" strokeWidth="2" />
                  <ellipse cx="55" cy="41" rx="12" ry="4" fill="#111827" stroke="none" />
                  {/* Протектор */}
                  <path d="M 30 41 L 30 45 M 40 48 L 40 52 M 60 48 L 60 52 M 75 44 L 75 48 M 80 41 L 80 45" stroke="#111827" strokeWidth="2" />
                  
                  {/* Трава, проросшая сквозь шины */}
                  <path d="M 55 41 Q 45 25 60 15 M 50 41 Q 35 25 40 20" fill="none" stroke="#22c55e" strokeWidth="2" />
                </svg>
              )
            }
          ]
        },
		{
          id: 'ch4-textures',
          title: '🧱 Границы и текстуры',
          subtitle: 'Заборы и стены',
          theme: 'amber',
          items: [
            {
              id: 'concrete-fence',
              title: 'Бетонный забор',
              desc: '«с ромбиками» (знаменитая плита ПО-2)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Бетонная плита ПО-2 */}
                  <rect x="10" y="20" width="80" height="60" fill="#cbd5e1" stroke="#64748b" strokeWidth="3" />
                  
                  {/* Ряды ромбиков (рельеф) */}
                  <g stroke="#94a3b8" strokeWidth="2" fill="#e2e8f0">
                    <polygon points="25,30 35,25 45,30 35,35" />
                    <polygon points="55,30 65,25 75,30 65,35" />
                    
                    <polygon points="25,50 35,45 45,50 35,55" />
                    <polygon points="55,50 65,45 75,50 65,55" />
                    
                    <polygon points="25,70 35,65 45,70 35,75" />
                    <polygon points="55,70 65,65 75,70 65,75" />
                  </g>
                  
                  {/* Тени для объема */}
                  <path d="M 25 30 L 35 35 L 45 30" stroke="#64748b" strokeWidth="2" fill="none" />
                  <path d="M 55 30 L 65 35 L 75 30" stroke="#64748b" strokeWidth="2" fill="none" />
                  <path d="M 25 50 L 35 55 L 45 50" stroke="#64748b" strokeWidth="2" fill="none" />
                  <path d="M 55 50 L 65 55 L 75 50" stroke="#64748b" strokeWidth="2" fill="none" />
                  <path d="M 25 70 L 35 75 L 45 70" stroke="#64748b" strokeWidth="2" fill="none" />
                  <path d="M 55 70 L 65 75 L 75 70" stroke="#64748b" strokeWidth="2" fill="none" />
                  
                  {/* Опорные столбы по краям */}
                  <rect x="5" y="15" width="10" height="75" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
                  <rect x="85" y="15" width="10" height="75" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'barbed-wire',
              title: 'Колючая проволока',
              desc: 'поверх забора',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Верхняя кромка забора */}
                  <rect x="10" y="70" width="80" height="20" fill="#64748b" stroke="#334155" strokeWidth="3" />
                  <line x1="30" y1="70" x2="30" y2="90" stroke="#334155" strokeWidth="2" />
                  <line x1="50" y1="70" x2="50" y2="90" stroke="#334155" strokeWidth="2" />
                  <line x1="70" y1="70" x2="70" y2="90" stroke="#334155" strokeWidth="2" />
                  
                  {/* V-образные кронштейны */}
                  <path d="M 30 70 L 20 40 M 30 70 L 40 40" stroke="#475569" strokeWidth="4" />
                  <path d="M 70 70 L 60 40 M 70 70 L 80 40" stroke="#475569" strokeWidth="4" />
                  
                  {/* Основная проволока (натянута) */}
                  <line x1="10" y1="55" x2="90" y2="55" stroke="#9ca3af" strokeWidth="2" />
                  <line x1="5" y1="40" x2="95" y2="40" stroke="#9ca3af" strokeWidth="2" />
                  
                  {/* Спираль Бруно (завитки) */}
                  <path d="M 10 50 C 20 20 30 70 40 40 C 50 10 60 80 70 45 C 80 15 90 65 95 45" fill="none" stroke="#cbd5e1" strokeWidth="3" />
                  
                  {/* Шипы (колючки) */}
                  <path d="M 38 38 L 42 42 M 38 42 L 42 38" stroke="#1f2937" strokeWidth="2" />
                  <path d="M 68 43 L 72 47 M 68 47 L 72 43" stroke="#1f2937" strokeWidth="2" />
                  <path d="M 23 53 L 27 57 M 23 57 L 27 53" stroke="#1f2937" strokeWidth="2" />
                  <path d="M 50 53 L 54 57 M 50 57 L 54 53" stroke="#1f2937" strokeWidth="2" />
                  <path d="M 78 53 L 82 57 M 78 57 L 82 53" stroke="#1f2937" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'rusty-gates',
              title: 'Ржавые ворота',
              desc: 'с цепью и массивным замком',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Створки ворот */}
                  <rect x="15" y="15" width="35" height="75" fill="#92400e" stroke="#451a03" strokeWidth="4" />
                  <rect x="50" y="15" width="35" height="75" fill="#78350f" stroke="#451a03" strokeWidth="4" />
                  
                  {/* Ребра жесткости и ржавчина */}
                  <line x1="15" y1="40" x2="50" y2="40" stroke="#451a03" strokeWidth="2" />
                  <line x1="50" y1="60" x2="85" y2="60" stroke="#451a03" strokeWidth="2" />
                  <path d="M 20 20 C 30 25 25 35 20 40 Z" fill="#b45309" stroke="none" />
                  <path d="M 70 70 C 80 65 85 80 75 85 Z" fill="#b45309" stroke="none" />
                  <circle cx="35" cy="70" r="5" fill="#b45309" stroke="none" />
                  <circle cx="65" cy="30" r="4" fill="#b45309" stroke="none" />
                  
                  {/* Петли */}
                  <rect x="10" y="25" width="5" height="10" fill="#1c1917" stroke="none" />
                  <rect x="10" y="65" width="5" height="10" fill="#1c1917" stroke="none" />
                  <rect x="85" y="25" width="5" height="10" fill="#1c1917" stroke="none" />
                  <rect x="85" y="65" width="5" height="10" fill="#1c1917" stroke="none" />
                  
                  {/* Мощная цепь */}
                  <ellipse cx="43" cy="50" rx="4" ry="2" fill="none" stroke="#9ca3af" strokeWidth="2" />
                  <ellipse cx="47" cy="50" rx="2" ry="4" fill="none" stroke="#d1d5db" strokeWidth="2" />
                  <ellipse cx="51" cy="50" rx="4" ry="2" fill="none" stroke="#9ca3af" strokeWidth="2" />
                  <ellipse cx="55" cy="50" rx="2" ry="4" fill="none" stroke="#d1d5db" strokeWidth="2" />
                  <ellipse cx="59" cy="50" rx="4" ry="2" fill="none" stroke="#9ca3af" strokeWidth="2" />
                  
                  {/* Замок навесной */}
                  <path d="M 48 54 C 48 50 54 50 54 54" fill="none" stroke="#d1d5db" strokeWidth="2" />
                  <rect x="47" y="54" width="8" height="10" rx="1" fill="#4b5563" stroke="#1f2937" strokeWidth="2" />
                  <circle cx="51" cy="59" r="1.5" fill="#111827" stroke="none" />
                </svg>
              )
            },
            {
              id: 'corrugated-wall',
              title: 'Профнастил',
              desc: 'стена яркого цвета (синего или красного)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Яркий красный профлист */}
                  <rect x="10" y="10" width="80" height="80" fill="#ef4444" stroke="#b91c1c" strokeWidth="4" />
                  
                  {/* Гофры (вертикальные ребра) */}
                  <g stroke="#b91c1c" strokeWidth="3">
                    <line x1="20" y1="10" x2="20" y2="90" />
                    <line x1="30" y1="10" x2="30" y2="90" />
                    <line x1="40" y1="10" x2="40" y2="90" />
                    <line x1="50" y1="10" x2="50" y2="90" />
                    <line x1="60" y1="10" x2="60" y2="90" />
                    <line x1="70" y1="10" x2="70" y2="90" />
                    <line x1="80" y1="10" x2="80" y2="90" />
                  </g>
                  
                  {/* Блики (свет на ребрах) */}
                  <g stroke="#fca5a5" strokeWidth="2" opacity="0.8">
                    <line x1="22" y1="12" x2="22" y2="88" />
                    <line x1="42" y1="12" x2="42" y2="88" />
                    <line x1="62" y1="12" x2="62" y2="88" />
                  </g>
                  
                  {/* Горизонтальные болты/заклепки */}
                  <circle cx="25" cy="25" r="1.5" fill="#451a03" stroke="none" />
                  <circle cx="45" cy="25" r="1.5" fill="#451a03" stroke="none" />
                  <circle cx="65" cy="25" r="1.5" fill="#451a03" stroke="none" />
                  
                  <circle cx="25" cy="75" r="1.5" fill="#451a03" stroke="none" />
                  <circle cx="45" cy="75" r="1.5" fill="#451a03" stroke="none" />
                  <circle cx="65" cy="75" r="1.5" fill="#451a03" stroke="none" />
                </svg>
              )
            },
            {
              id: 'fence-hole',
              title: 'Дыра в заборе',
              desc: 'через которую протоптана тропинка',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Сетка-рабица фон */}
                  <g stroke="#9ca3af" strokeWidth="1.5" opacity="0.6">
                    <path d="M 0 20 L 20 0 M 0 40 L 40 0 M 0 60 L 60 0 M 0 80 L 80 0 M 0 100 L 100 0" />
                    <path d="M 20 100 L 100 20 M 40 100 L 100 40 M 60 100 L 100 60 M 80 100 L 100 80" />
                    <path d="M 100 20 L 80 0 M 100 40 L 60 0 M 100 60 L 40 0 M 100 80 L 20 0 M 100 100 L 0 0" />
                    <path d="M 80 100 L 0 20 M 60 100 L 0 40 M 40 100 L 0 60 M 20 100 L 0 80" />
                  </g>
                  
                  {/* Опорный столб */}
                  <rect x="80" y="10" width="8" height="80" fill="#64748b" stroke="#334155" strokeWidth="2" />
                  
                  {/* Огромная дыра в сетке */}
                  <path d="M 30 90 C 20 60 30 30 50 30 C 70 30 75 60 70 90 Z" fill="#f3f4f6" stroke="none" />
                  
                  {/* Загнутые края рваной сетки */}
                  <path d="M 30 90 Q 25 75 35 60 Q 25 45 50 30" fill="none" stroke="#1f2937" strokeWidth="2" />
                  <path d="M 70 90 Q 75 70 65 50 Q 75 40 50 30" fill="none" stroke="#1f2937" strokeWidth="2" />
                  
                  {/* Протоптанная земля/тропинка уходящая вдаль */}
                  <path d="M 30 90 Q 40 70 45 50 T 50 40 T 55 50 Q 60 70 70 90 Z" fill="#d6d3d1" stroke="#a8a29e" strokeWidth="2" />
                  <path d="M 10 90 Q 20 85 30 90 M 70 90 Q 80 85 90 90" fill="none" stroke="#22c55e" strokeWidth="3" />
                </svg>
              )
            },
            {
              id: 'ivy-wall',
              title: 'Заросшая стена',
              desc: 'покрытая плющом или диким виноградом',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кирпичная стена на фоне */}
                  <rect x="10" y="10" width="80" height="80" fill="#b45309" stroke="#78350f" strokeWidth="3" />
                  <g stroke="#78350f" strokeWidth="2">
                    <line x1="10" y1="30" x2="90" y2="30" />
                    <line x1="10" y1="50" x2="90" y2="50" />
                    <line x1="10" y1="70" x2="90" y2="70" />
                    <line x1="30" y1="10" x2="30" y2="30" /> <line x1="70" y1="10" x2="70" y2="30" />
                    <line x1="50" y1="30" x2="50" y2="50" /> <line x1="90" y1="30" x2="90" y2="50" />
                    <line x1="30" y1="50" x2="30" y2="70" /> <line x1="70" y1="50" x2="70" y2="70" />
                    <line x1="50" y1="70" x2="50" y2="90" />
                  </g>
                  
                  {/* Лианы и стебли */}
                  <path d="M 10 15 C 30 20 40 40 30 60 C 20 80 40 90 50 90" fill="none" stroke="#14532d" strokeWidth="4" />
                  <path d="M 50 10 C 60 30 80 30 85 50 C 90 70 70 80 65 90" fill="none" stroke="#14532d" strokeWidth="4" />
                  <path d="M 30 60 C 50 60 60 70 85 50" fill="none" stroke="#14532d" strokeWidth="3" />
                  
                  {/* Множество листьев плюща */}
                  <g fill="#22c55e" stroke="#14532d" strokeWidth="2">
                    <path d="M 15 20 L 20 15 L 25 20 L 20 25 Z" />
                    <path d="M 35 30 L 40 25 L 45 30 L 40 35 Z" />
                    <path d="M 25 45 L 30 40 L 35 45 L 30 50 Z" />
                    <path d="M 25 70 L 30 65 L 35 70 L 30 75 Z" />
                    <path d="M 45 80 L 50 75 L 55 80 L 50 85 Z" />
                    <path d="M 55 20 L 60 15 L 65 20 L 60 25 Z" />
                    <path d="M 75 35 L 80 30 L 85 35 L 80 40 Z" />
                    <path d="M 65 55 L 70 50 L 75 55 L 70 60 Z" />
                    <path d="M 75 75 L 80 70 L 85 75 L 80 80 Z" />
                    <path d="M 55 60 L 60 55 L 65 60 L 60 65 Z" />
                  </g>
                </svg>
              )
            },
            {
              id: 'graffiti-mural',
              title: 'Граффити',
              desc: 'огромные буквы во всю стену',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Серая бетонная стена */}
                  <rect x="10" y="20" width="80" height="60" fill="#9ca3af" stroke="#4b5563" strokeWidth="3" />
                  <line x1="10" y1="50" x2="90" y2="50" stroke="#64748b" strokeWidth="2" />
                  
                  {/* Цветные потеки и фон граффити */}
                  <path d="M 20 30 Q 30 20 40 30 T 60 25 T 80 40 L 80 70 Q 60 60 40 70 T 20 50 Z" fill="#fce7f3" stroke="none" />
                  <path d="M 30 70 L 30 75 M 50 65 L 50 80 M 70 60 L 70 70" stroke="#fce7f3" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Дикие буквы (Шрифт-пузырь) */}
                  <path d="M 25 55 C 20 40 35 30 40 45 C 45 30 60 40 55 55 C 60 70 45 80 40 65 C 35 80 20 70 25 55 Z" fill="#ec4899" stroke="#111827" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 55 45 C 50 30 70 30 75 45 C 80 60 75 70 65 65 C 55 70 60 60 55 45 Z" fill="#06b6d4" stroke="#111827" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Блики на буквах */}
                  <path d="M 28 45 A 5 5 0 0 1 35 40" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 60 40 A 5 5 0 0 1 68 38" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Маленькие звездочки/декор */}
                  <path d="M 15 35 L 20 35 M 17.5 32.5 L 17.5 37.5" stroke="#facc15" strokeWidth="2" />
                  <path d="M 80 25 L 85 25 M 82.5 22.5 L 82.5 27.5" stroke="#facc15" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'broken-brick-wall',
              title: 'Кирпичная стена',
              desc: 'где не хватает нескольких кирпичей',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Основа стены (цемент/тень) */}
                  <rect x="15" y="20" width="70" height="60" fill="#9ca3af" stroke="#4b5563" strokeWidth="3" />
                  
                  {/* Кирпичи */}
                  <g fill="#dc2626" stroke="#7f1d1d" strokeWidth="2">
                    {/* Ряд 1 */}
                    <rect x="15" y="20" width="15" height="15" />
                    <rect x="30" y="20" width="25" height="15" />
                    <rect x="55" y="20" width="25" height="15" />
                    <rect x="80" y="20" width="5" height="15" />
                    {/* Ряд 2 */}
                    <rect x="15" y="35" width="25" height="15" />
                    <rect x="40" y="35" width="25" height="15" />
                    <rect x="65" y="35" width="20" height="15" />
                    {/* Ряд 3 (с дырой!) */}
                    <rect x="15" y="50" width="15" height="15" />
                    {/* ЗДЕСЬ ДЫРА (30 to 55) */}
                    <rect x="65" y="50" width="20" height="15" />
                    {/* Ряд 4 */}
                    <rect x="15" y="65" width="25" height="15" />
                    <rect x="40" y="65" width="25" height="15" />
                    <rect x="65" y="65" width="20" height="15" />
                  </g>
                  
                  {/* Темная дыра (отсутствующий кирпич) */}
                  <rect x="30" y="50" width="35" height="15" fill="#1f2937" stroke="#111827" strokeWidth="2" />
                  <path d="M 35 65 L 40 55 M 50 65 L 55 55" stroke="#374151" strokeWidth="2" opacity="0.5" />
                  
                  {/* Раскрошившийся цемент */}
                  <circle cx="32" cy="70" r="1.5" fill="#e2e8f0" stroke="none" />
                  <circle cx="50" cy="72" r="1" fill="#e2e8f0" stroke="none" />
                  <circle cx="58" cy="68" r="1.5" fill="#e2e8f0" stroke="none" />
                </svg>
              )
            },
            {
              id: 'warning-sign',
              title: 'Грозная табличка',
              desc: '«Вход воспрещен» или «Охраняется собаками»',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Сетка забора */}
                  <path d="M 10 30 L 90 30 M 10 50 L 90 50 M 10 70 L 90 70" stroke="#9ca3af" strokeWidth="2" />
                  <path d="M 30 10 L 30 90 M 50 10 L 50 90 M 70 10 L 70 90" stroke="#9ca3af" strokeWidth="2" />
                  
                  {/* Металлическая табличка */}
                  <rect x="25" y="30" width="50" height="40" rx="3" fill="#ffffff" stroke="#ef4444" strokeWidth="4" />
                  <rect x="28" y="33" width="44" height="34" rx="2" fill="none" stroke="#ef4444" strokeWidth="1" />
                  
                  {/* Крепление (проволока по углам) */}
                  <path d="M 25 30 L 20 25 M 75 30 L 80 25 M 25 70 L 20 75 M 75 70 L 80 75" stroke="#4b5563" strokeWidth="2" />
                  
                  {/* Силуэт злой собаки (голова) */}
                  <path d="M 40 55 L 40 45 L 45 40 L 55 40 L 55 45 L 65 50 L 60 60 L 50 60 L 45 65 Z" fill="#111827" stroke="none" />
                  <polygon points="40,45 35,35 45,40" fill="#111827" stroke="none" />
                  <polygon points="55,40 60,35 55,45" fill="#111827" stroke="none" />
                  <path d="M 55 55 L 60 55" stroke="#ef4444" strokeWidth="2" /> {/* Красный глаз или зубы */}
                  
                  {/* Текст (Имитация) */}
                  <line x1="35" y1="65" x2="65" y2="65" stroke="#111827" strokeWidth="3" />
                </svg>
              )
            },
            {
              id: 'glass-shards',
              title: 'Осколки цветного стекла',
              desc: 'как россыпь самоцветов на земле',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Асфальт/Бетон фон */}
                  <circle cx="50" cy="50" r="45" fill="#d6d3d1" stroke="#a8a29e" strokeWidth="2" />
                  <circle cx="30" cy="40" r="2" fill="#a8a29e" stroke="none" />
                  <circle cx="70" cy="30" r="2" fill="#a8a29e" stroke="none" />
                  <circle cx="60" cy="70" r="2" fill="#a8a29e" stroke="none" />
                  
                  {/* Зеленый осколок (от бутылки) */}
                  <polygon points="30,50 45,40 55,50 40,65" fill="#4ade80" stroke="#16a34a" strokeWidth="2" strokeLinejoin="round" />
                  <line x1="35" y1="50" x2="45" y2="45" stroke="#bbf7d0" strokeWidth="2" /> {/* Блик */}
                  
                  {/* Синий осколок */}
                  <polygon points="55,60 70,55 75,70 65,75" fill="#60a5fa" stroke="#1d4ed8" strokeWidth="2" strokeLinejoin="round" />
                  <line x1="60" y1="62" x2="68" y2="60" stroke="#bfdbfe" strokeWidth="2" /> {/* Блик */}
                  
                  {/* Янтарный осколок */}
                  <polygon points="55,35 65,25 75,35 60,45" fill="#fbbf24" stroke="#b45309" strokeWidth="2" strokeLinejoin="round" />
                  <line x1="60" y1="35" x2="65" y2="30" stroke="#fef3c7" strokeWidth="2" /> {/* Блик */}
                  
                  {/* Маленькие осколки */}
                  <polygon points="25,65 30,60 35,68" fill="#4ade80" stroke="#16a34a" strokeWidth="1.5" />
                  <polygon points="45,30 50,25 55,30" fill="#fbbf24" stroke="#b45309" strokeWidth="1.5" />
                  <polygon points="45,75 50,70 55,78" fill="#60a5fa" stroke="#1d4ed8" strokeWidth="1.5" />
                  
                  {/* Искры/Сияние солнца на стекле */}
                  <path d="M 40 45 L 40 35 M 35 40 L 45 40" stroke="#fff" strokeWidth="2" />
                  <path d="M 68 30 L 68 20 M 63 25 L 73 25" stroke="#fff" strokeWidth="2" />
                </svg>
              )
            }
          ]
        },
		{
          id: 'ch4-forgotten',
          title: '🏚 Забытые уголки и пустыри',
          subtitle: 'Свалки и руины',
          theme: 'lime',
          items: [
            {
              id: 'abandoned-building',
              title: 'Заброшенное здание',
              desc: 'с выбитыми окнами',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Силуэт разрушенного здания */}
                  <path d="M 15 90 L 15 30 L 45 30 L 45 40 L 60 40 L 60 20 L 85 20 L 85 90 Z" fill="#9ca3af" stroke="#4b5563" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Обрушившаяся часть крыши */}
                  <path d="M 45 30 L 35 45 L 45 40 Z" fill="#64748b" stroke="none" />
                  
                  {/* Окна (выбитые и целые) */}
                  <rect x="25" y="45" width="10" height="15" fill="#111827" stroke="#374151" strokeWidth="2" />
                  <path d="M 25 45 L 30 50 L 25 55 Z" fill="#cbd5e1" stroke="none" /> {/* Осколок в окне */}
                  
                  <rect x="25" y="70" width="10" height="15" fill="#111827" stroke="#374151" strokeWidth="2" />
                  
                  <rect x="68" y="35" width="10" height="15" fill="#111827" stroke="#374151" strokeWidth="2" />
                  <path d="M 73 35 L 78 45 L 73 50 Z" fill="#cbd5e1" stroke="none" />
                  
                  <rect x="68" y="60" width="10" height="15" fill="#111827" stroke="#374151" strokeWidth="2" />
                  
                  {/* Трещины на фасаде */}
                  <path d="M 50 40 L 48 55 L 53 65 L 50 80" stroke="#4b5563" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 85 45 L 80 50 L 82 60" stroke="#4b5563" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Дикая поросль снизу */}
                  <path d="M 10 90 Q 20 75 30 90 M 40 90 Q 50 80 60 90 M 70 90 Q 80 75 90 90" stroke="#22c55e" strokeWidth="3" fill="none" />
                </svg>
              )
            },
            {
              id: 'rubble-mountain',
              title: 'Гора мусора',
              desc: 'строительного, похожа на пещеру',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Гора щебня и бетона */}
                  <path d="M 5 90 C 20 60 40 30 55 30 C 70 30 80 50 95 90 Z" fill="#d6d3d1" stroke="#78716c" strokeWidth="4" strokeLinejoin="round" />
                  
                  {/* Темная "пещера" внутри */}
                  <path d="M 35 90 C 35 70 45 60 55 60 C 65 60 70 80 75 90 Z" fill="#1c1917" stroke="#44403c" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Обломки кирпичей */}
                  <rect x="25" y="55" width="12" height="6" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" transform="rotate(15 25 55)" />
                  <rect x="65" y="45" width="10" height="5" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" transform="rotate(-20 65 45)" />
                  <rect x="15" y="75" width="8" height="12" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" transform="rotate(45 15 75)" />
                  
                  {/* Торчащая арматура */}
                  <path d="M 50 30 L 45 15 M 55 32 L 65 20 M 65 20 L 68 25" stroke="#78350f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 30 45 L 20 35 M 20 35 L 25 32" stroke="#78350f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Плита сверху */}
                  <polygon points="45,30 65,25 75,35 55,40" fill="#a8a29e" stroke="#57534e" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'old-sofa',
              title: 'Остов дивана',
              desc: 'или старого кресла на улице',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Деревянный каркас (остов) */}
                  <path d="M 20 80 L 20 40 C 20 30 30 25 40 25 L 80 25 C 90 25 90 35 90 40 L 90 60" stroke="#78350f" strokeWidth="6" strokeLinecap="round" fill="none" />
                  <line x1="25" y1="60" x2="85" y2="60" stroke="#78350f" strokeWidth="5" />
                  <line x1="30" y1="80" x2="30" y2="60" stroke="#78350f" strokeWidth="5" />
                  <line x1="80" y1="80" x2="80" y2="60" stroke="#78350f" strokeWidth="5" />
                  
                  {/* Остатки оборванной обивки */}
                  <path d="M 20 40 C 25 45 35 35 45 40 L 40 25 Z" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
                  <path d="M 85 60 C 80 50 70 55 65 50 L 75 60 Z" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
                  <path d="M 50 25 L 55 35 L 65 30 Z" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
                  
                  {/* Торчащие пружины */}
                  <path d="M 40 60 Q 35 50 45 50 Q 50 45 40 45" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 60 60 Q 65 50 55 50 Q 50 45 60 45 Q 65 40 55 40" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Сорняк, проросший сквозь диван */}
                  <path d="M 50 85 Q 45 70 55 55" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 50 65 Q 60 60 65 50" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'sand-pile',
              title: 'Куча песка',
              desc: 'или щебня, на которую можно залезть',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Огромная куча песка */}
                  <path d="M 5 85 C 30 30 70 30 95 85 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="4" strokeLinejoin="round" />
                  
                  {/* Слои и оползни на куче */}
                  <path d="M 25 85 C 40 60 60 50 75 85 Z" fill="#fef08a" stroke="none" />
                  <path d="M 40 85 C 45 70 55 70 60 85 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
                  <path d="M 30 50 Q 50 60 70 50" fill="none" stroke="#ca8a04" strokeWidth="2" opacity="0.6" />
                  
                  {/* Детские или собачьи следы, ведущие наверх */}
                  <circle cx="35" cy="75" r="2" fill="#b45309" stroke="none" />
                  <circle cx="42" cy="65" r="2" fill="#b45309" stroke="none" />
                  <circle cx="50" cy="55" r="2" fill="#b45309" stroke="none" />
                  <circle cx="48" cy="45" r="2" fill="#b45309" stroke="none" />
                  
                  {/* Камешки */}
                  <circle cx="80" cy="80" r="3" fill="#9ca3af" stroke="none" />
                  <circle cx="20" cy="82" r="2" fill="#9ca3af" stroke="none" />
                  <circle cx="70" cy="82" r="1.5" fill="#9ca3af" stroke="none" />
                </svg>
              )
            },
            {
              id: 'metal-barrel',
              title: 'Металлическая бочка',
              desc: 'синяя или ржавая',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Задняя часть обода */}
                  <ellipse cx="50" cy="25" rx="30" ry="10" fill="#1e3a8a" stroke="#0f172a" strokeWidth="4" />
                  
                  {/* Цилиндр (корпус) */}
                  <path d="M 20 25 L 20 75 C 20 85 80 85 80 75 L 80 25 Z" fill="#3b82f6" stroke="#0f172a" strokeWidth="4" strokeLinejoin="round" />
                  
                  {/* Вмятина сбоку */}
                  <path d="M 20 50 C 35 45 35 65 20 60" fill="#1e3a8a" stroke="#0f172a" strokeWidth="2" />
                  
                  {/* Ребра жесткости */}
                  <path d="M 20 40 C 40 45 60 45 80 40" fill="none" stroke="#1d4ed8" strokeWidth="4" />
                  <path d="M 20 60 C 40 65 60 65 80 60" fill="none" stroke="#1d4ed8" strokeWidth="4" />
                  
                  {/* Ржавчина (потеки и пятна) */}
                  <path d="M 40 25 L 40 45 M 65 25 L 65 55" stroke="#b45309" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="65" cy="65" r="5" fill="#b45309" stroke="none" />
                  <circle cx="45" cy="80" r="4" fill="#b45309" stroke="none" />
                  <path d="M 60 80 C 70 82 75 75 80 75" fill="none" stroke="#b45309" strokeWidth="3" />
                  
                  {/* Внутренняя темнота/Жидкость */}
                  <ellipse cx="50" cy="25" rx="25" ry="7" fill="#0f172a" stroke="none" />
                </svg>
              )
            },
            {
              id: 'lonely-swing',
              title: 'Одинокая качеля',
              desc: 'на пустыре, скрипучая',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ржавый металлический каркас (А-образная рама) */}
                  <line x1="20" y1="90" x2="50" y2="20" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
                  <line x1="80" y1="90" x2="50" y2="20" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
                  <line x1="10" y1="20" x2="90" y2="20" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
                  <line x1="30" y1="60" x2="70" y2="60" stroke="#78350f" strokeWidth="4" />
                  
                  {/* Цепи (одна оборвана) */}
                  <path d="M 40 20 L 40 65" stroke="#9ca3af" strokeWidth="3" strokeDasharray="4 2" />
                  <path d="M 60 20 L 60 45" stroke="#9ca3af" strokeWidth="3" strokeDasharray="4 2" />
                  
                  {/* Перекошенное сиденье */}
                  <polygon points="35,65 65,75 60,80 30,70" fill="#fcd34d" stroke="#b45309" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Ветер/скрип */}
                  <path d="M 65 25 Q 75 30 70 40" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                  
                  {/* Высокая трава вокруг */}
                  <path d="M 15 90 Q 20 70 25 90 M 75 90 Q 85 65 90 90 M 40 90 Q 45 75 50 90 M 55 90 Q 60 80 65 90" stroke="#15803d" strokeWidth="3" fill="none" />
                </svg>
              )
            },
            {
              id: 'wire-coil',
              title: 'Моток проволоки',
              desc: 'или огромная кабельная катушка',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Задняя часть катушки (дерево) */}
                  <ellipse cx="65" cy="50" rx="15" ry="35" fill="#b45309" stroke="#78350f" strokeWidth="3" />
                  
                  {/* Внутренний барабан с намотанным черным кабелем */}
                  <rect x="35" y="35" width="30" height="30" fill="#1f2937" stroke="#111827" strokeWidth="2" />
                  <line x1="35" y1="40" x2="65" y2="40" stroke="#374151" strokeWidth="3" />
                  <line x1="35" y1="45" x2="65" y2="45" stroke="#374151" strokeWidth="3" />
                  <line x1="35" y1="50" x2="65" y2="50" stroke="#374151" strokeWidth="3" />
                  <line x1="35" y1="55" x2="65" y2="55" stroke="#374151" strokeWidth="3" />
                  <line x1="35" y1="60" x2="65" y2="60" stroke="#374151" strokeWidth="3" />
                  
                  {/* Передняя часть катушки (дерево) */}
                  <ellipse cx="35" cy="50" rx="15" ry="35" fill="#fcd34d" stroke="#b45309" strokeWidth="3" />
                  
                  {/* Доски на передней щеке */}
                  <line x1="22" y1="40" x2="48" y2="40" stroke="#b45309" strokeWidth="2" />
                  <line x1="20" y1="50" x2="50" y2="50" stroke="#b45309" strokeWidth="2" />
                  <line x1="22" y1="60" x2="48" y2="60" stroke="#b45309" strokeWidth="2" />
                  <circle cx="35" cy="50" r="4" fill="#1c1917" stroke="none" /> {/* Центральное отверстие */}
                  
                  {/* Размотанный конец кабеля */}
                  <path d="M 50 65 C 50 85 20 80 30 95" fill="none" stroke="#111827" strokeWidth="5" strokeLinecap="round" />
                  <path d="M 50 65 C 50 85 20 80 30 95" fill="none" stroke="#374151" strokeWidth="1" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'concrete-rings',
              title: 'Бетонные кольца',
              desc: 'для колодцев, лежащие на боку',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Заднее кольцо */}
                  <ellipse cx="65" cy="50" rx="15" ry="35" fill="#9ca3af" stroke="#4b5563" strokeWidth="3" />
                  <path d="M 65 15 L 85 15 A 15 35 0 0 1 85 85 L 65 85" fill="#cbd5e1" stroke="#4b5563" strokeWidth="3" />
                  <ellipse cx="65" cy="50" rx="10" ry="30" fill="#374151" stroke="#1f2937" strokeWidth="2" />
                  
                  {/* Переднее кольцо (немного перекрывает заднее) */}
                  <ellipse cx="35" cy="55" rx="15" ry="35" fill="#e2e8f0" stroke="#64748b" strokeWidth="3" />
                  <path d="M 35 20 L 55 20 A 15 35 0 0 1 55 90 L 35 90" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" />
                  <ellipse cx="35" cy="55" rx="10" ry="30" fill="#4b5563" stroke="#1f2937" strokeWidth="2" />
                  
                  {/* Строповочные петли (арматура) */}
                  <path d="M 45 20 C 45 10 50 10 50 20" fill="none" stroke="#78350f" strokeWidth="2" />
                  <path d="M 75 15 C 75 5 80 5 80 15" fill="none" stroke="#78350f" strokeWidth="2" />
                  
                  {/* Мох и трещины на бетоне */}
                  <path d="M 35 90 Q 25 80 30 70" fill="none" stroke="#22c55e" strokeWidth="2" />
                  <path d="M 40 20 L 45 35 L 42 45" fill="none" stroke="#9ca3af" strokeWidth="2" />
                  <circle cx="50" cy="85" r="3" fill="#22c55e" stroke="none" />
                </svg>
              )
            },
            {
              id: 'old-payphone',
              title: 'Старый таксофон',
              desc: 'разбитый, или то, что от него осталось',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Синий козырек/полубудка */}
                  <path d="M 25 30 C 25 10 75 10 75 30 L 75 60 L 65 60 L 65 30 C 65 20 35 20 35 30 L 35 60 L 25 60 Z" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Аппарат таксофона */}
                  <rect x="40" y="35" width="20" height="35" rx="2" fill="#d1d5db" stroke="#4b5563" strokeWidth="3" />
                  <rect x="44" y="40" width="12" height="6" fill="#1f2937" stroke="none" /> {/* Экранчик */}
                  
                  {/* Разбитые кнопки */}
                  <rect x="44" y="50" width="3" height="3" fill="#4b5563" stroke="none" />
                  <rect x="49" y="50" width="3" height="3" fill="#4b5563" stroke="none" />
                  <rect x="49" y="55" width="3" height="3" fill="#4b5563" stroke="none" />
                  <rect x="54" y="55" width="3" height="3" fill="#4b5563" stroke="none" />
                  
                  {/* Монетоприемник */}
                  <line x1="56" y1="42" x2="56" y2="46" stroke="#ef4444" strokeWidth="2" />
                  
                  {/* Оборванный провод */}
                  <path d="M 40 60 C 30 70 20 50 30 80 C 40 100 20 90 25 100" fill="none" stroke="#1f2937" strokeWidth="2" strokeDasharray="3 2" />
                  
                  {/* Висящая трубка */}
                  <rect x="20" y="85" width="8" height="15" rx="4" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" transform="rotate(30 20 85)" />
                  
                  {/* Граффити на будке */}
                  <path d="M 67 40 Q 72 35 70 45" stroke="#ec4899" strokeWidth="2" fill="none" />
                </svg>
              )
            },
            {
              id: 'overgrown-path',
              title: 'Тропинка',
              desc: 'ведущая в густые заросли кустов',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Темные густые заросли (фон) */}
                  <path d="M 5 60 C 5 20 40 10 50 30 C 60 10 95 20 95 60 Z" fill="#14532d" stroke="#064e3b" strokeWidth="4" strokeLinejoin="round" />
                  <path d="M 20 50 C 30 30 45 40 50 50 C 55 40 70 30 80 50 Z" fill="#064e3b" stroke="none" />
                  
                  {/* Кусты на переднем плане */}
                  <path d="M 0 95 C 10 65 35 70 40 95 Z" fill="#22c55e" stroke="#16a34a" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 100 95 C 90 65 65 70 60 95 Z" fill="#22c55e" stroke="#16a34a" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Узкая земляная тропинка */}
                  <path d="M 40 95 C 45 80 40 60 50 50 C 60 60 55 80 60 95 Z" fill="#a16207" stroke="#713f12" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Тени на тропинке */}
                  <path d="M 43 85 L 57 85 M 45 75 L 55 75 M 48 65 L 52 65" stroke="#713f12" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Ветки, перегораживающие путь */}
                  <path d="M 25 65 Q 40 55 55 65" fill="none" stroke="#451a03" strokeWidth="3" />
                  <path d="M 75 55 Q 60 45 45 55" fill="none" stroke="#451a03" strokeWidth="2" />
                  
                  {/* Светящиеся глаза в темноте (интрига!) */}
                  <circle cx="48" cy="40" r="1.5" fill="#fde047" stroke="none" style={{ filter: 'drop-shadow(0 0 2px #fde047)' }} />
                  <circle cx="52" cy="40" r="1.5" fill="#fde047" stroke="none" style={{ filter: 'drop-shadow(0 0 2px #fde047)' }} />
                </svg>
              )
            }
          ]
        },
		{
          id: 'ch4-life',
          title: '🌿 Жизнь вопреки всему',
          subtitle: 'Природа наступает',
          theme: 'emerald',
          items: [
            {
              id: 'tree-in-asphalt',
              title: 'Дерево',
              desc: 'проросшее сквозь асфальт или забор',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Расколотый асфальт */}
                  <path d="M 10 85 L 90 85 L 75 95 L 25 95 Z" fill="#9ca3af" stroke="#4b5563" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 40 85 L 30 75 L 15 75 M 60 85 L 70 75 L 85 75" stroke="#4b5563" strokeWidth="3" />
                  <path d="M 35 75 L 45 65 M 65 75 L 55 65" stroke="#4b5563" strokeWidth="3" />
                  
                  {/* Трещины */}
                  <path d="M 25 75 L 20 65 L 25 55 M 75 75 L 80 65 L 75 55" stroke="#64748b" strokeWidth="2" />
                  
                  {/* Ствол, пробивающийся снизу */}
                  <path d="M 45 85 C 45 60 35 40 25 25 M 55 85 C 55 60 65 40 75 25" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 50 85 C 50 50 50 30 50 15" stroke="#78350f" strokeWidth="7" strokeLinecap="round" />
                  <path d="M 50 45 C 60 35 65 25 70 20" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Листья (молодая поросль) */}
                  <path d="M 25 25 C 15 20 20 10 25 15 C 30 20 30 30 25 25 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  <path d="M 75 25 C 85 20 80 10 75 15 C 70 20 70 30 75 25 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  <path d="M 50 15 C 40 5 50 -5 55 5 C 60 15 55 20 50 15 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  <path d="M 70 20 C 65 10 75 5 80 15 C 80 25 75 25 70 20 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  
                  {/* Кусочек отломанного асфальта */}
                  <polygon points="35,80 42,75 48,82 38,87" fill="#64748b" stroke="none" />
                </svg>
              )
            },
            {
              id: 'stray-dogs',
              title: 'Бродячие собаки',
              desc: 'стая (смотри издалека!)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Фон: забор и мусорный бак */}
                  <rect x="70" y="40" width="20" height="30" fill="#64748b" stroke="#334155" strokeWidth="2" />
                  <line x1="70" y1="45" x2="90" y2="45" stroke="#334155" strokeWidth="2" />
                  <path d="M 10 70 L 90 70" stroke="#9ca3af" strokeWidth="2" />
                  
                  {/* Собака 1 (Настороженная) */}
                  <path d="M 25 55 C 35 55 45 60 50 50 C 45 40 35 45 25 45 C 15 45 15 55 25 55 Z" fill="#b45309" stroke="#78350f" strokeWidth="2" />
                  <circle cx="45" cy="48" r="4" fill="#b45309" stroke="#78350f" strokeWidth="2" />
                  <polygon points="42,44 45,38 48,44" fill="#78350f" stroke="none" /> {/* Уши */}
                  <path d="M 20 55 L 18 68 M 28 55 L 26 68 M 40 52 L 38 68 M 45 52 L 47 68" stroke="#78350f" strokeWidth="3" strokeLinecap="round" /> {/* Лапы */}
                  <path d="M 20 48 Q 10 40 15 35" fill="none" stroke="#78350f" strokeWidth="3" strokeLinecap="round" /> {/* Хвост */}
                  
                  {/* Собака 2 (Роется в мусоре, задний план) */}
                  <path d="M 55 60 C 65 60 70 65 65 55 C 60 45 50 50 55 60 Z" fill="#4b5563" stroke="#374151" strokeWidth="2" />
                  <path d="M 50 60 L 48 70 M 58 60 L 56 70" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 55 52 Q 45 45 50 40" fill="none" stroke="#374151" strokeWidth="3" strokeLinecap="round" /> {/* Хвост трубой */}
                  
                  {/* Мусор вокруг */}
                  <circle cx="80" cy="73" r="2" fill="#ef4444" stroke="none" />
                  <rect x="60" y="72" width="6" height="3" fill="#3b82f6" stroke="none" transform="rotate(-15 60 72)" />
                </svg>
              )
            },
            {
              id: 'high-crow',
              title: 'Ворона',
              desc: 'сидящая на самой высокой точке',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Антенна / Высокая точка */}
                  <line x1="50" y1="50" x2="50" y2="100" stroke="#64748b" strokeWidth="4" />
                  <line x1="30" y1="70" x2="70" y2="70" stroke="#64748b" strokeWidth="3" />
                  <line x1="40" y1="60" x2="60" y2="60" stroke="#64748b" strokeWidth="2" />
                  <line x1="45" y1="50" x2="55" y2="50" stroke="#64748b" strokeWidth="4" />
                  
                  {/* Облака (показывают высоту) */}
                  <path d="M 10 30 Q 15 20 25 25 Q 35 20 35 30 Z" fill="#e2e8f0" stroke="none" opacity="0.6" />
                  <path d="M 70 40 Q 75 30 85 35 Q 95 30 95 40 Z" fill="#e2e8f0" stroke="none" opacity="0.6" />
                  
                  {/* Силуэт вороны */}
                  <path d="M 45 48 C 30 45 35 30 45 35 C 55 30 65 40 55 48 Z" fill="#111827" stroke="#000000" strokeWidth="2" />
                  <path d="M 40 38 Q 30 35 28 40" stroke="#111827" strokeWidth="2" fill="none" /> {/* Клюв */}
                  <path d="M 52 45 Q 65 55 70 65 Q 60 55 50 48" fill="#111827" stroke="none" /> {/* Хвост */}
                  
                  {/* Лапки */}
                  <line x1="47" y1="48" x2="47" y2="50" stroke="#111827" strokeWidth="2" />
                  <line x1="52" y1="48" x2="52" y2="50" stroke="#111827" strokeWidth="2" />
                  
                  {/* Глаз */}
                  <circle cx="42" cy="36" r="1.5" fill="#facc15" stroke="none" />
                </svg>
              )
            },
            {
              id: 'giant-burdock',
              title: 'Лопухи',
              desc: 'с листьями размером с зонтик',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Задний огромный лист */}
                  <path d="M 50 70 C 10 60 0 10 40 10 C 60 10 90 20 80 60 C 70 80 60 75 50 70 Z" fill="#16a34a" stroke="#14532d" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 45 15 C 45 35 50 50 50 70" stroke="#14532d" strokeWidth="3" />
                  <path d="M 47 30 Q 30 25 25 35 M 48 45 Q 25 45 20 60 M 48 60 Q 35 65 30 70" stroke="#14532d" strokeWidth="2" opacity="0.6" />
                  <path d="M 49 25 Q 70 20 75 30 M 49 45 Q 70 40 80 50 M 50 60 Q 65 65 70 70" stroke="#14532d" strokeWidth="2" opacity="0.6" />
                  
                  {/* Передний лист (немного наклонен) */}
                  <path d="M 30 90 C 0 80 10 40 40 30 C 60 20 80 50 60 80 C 50 95 40 95 30 90 Z" fill="#22c55e" stroke="#14532d" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 42 35 C 45 55 40 70 35 90" stroke="#14532d" strokeWidth="3" />
                  <path d="M 41 45 Q 25 40 20 50 M 40 60 Q 20 60 15 70 M 38 75 Q 25 80 20 85" stroke="#14532d" strokeWidth="2" opacity="0.6" />
                  <path d="M 41 50 Q 60 45 65 55 M 38 65 Q 60 65 60 75 M 36 80 Q 50 85 45 90" stroke="#14532d" strokeWidth="2" opacity="0.6" />
                  
                  {/* Стебли внизу */}
                  <path d="M 50 70 C 55 80 60 90 60 100" fill="none" stroke="#15803d" strokeWidth="5" />
                  <path d="M 35 90 C 40 95 45 98 45 100" fill="none" stroke="#15803d" strokeWidth="5" />
                  
                  {/* Пара колючек-репьев на стебле */}
                  <circle cx="65" cy="85" r="5" fill="#a16207" stroke="#713f12" strokeWidth="2" />
                  <path d="M 65 80 L 65 78 M 60 85 L 58 85 M 70 85 L 72 85 M 65 90 L 65 92" stroke="#713f12" strokeWidth="1.5" />
                </svg>
              )
            },
            {
              id: 'crack-flowers',
              title: 'Цветы-сорняки',
              desc: 'растущие прямо в трещине бетона',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Бетонные плиты */}
                  <path d="M 5 95 L 45 60 L 20 20 L 5 20 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M 95 95 L 55 60 L 80 20 L 95 20 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M 30 10 L 45 35 L 55 35 L 70 10 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Темная трещина (земля) */}
                  <path d="M 45 60 L 55 60 L 45 35 L 55 35 Z" fill="#1f2937" stroke="none" />
                  <path d="M 45 60 L 55 60 L 60 95 L 40 95 Z" fill="#1f2937" stroke="none" />
                  
                  {/* Сорняк (одуванчик) */}
                  <path d="M 50 65 Q 40 45 50 25" fill="none" stroke="#16a34a" strokeWidth="4" />
                  <path d="M 50 60 Q 30 50 35 40 Q 45 50 50 60 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  <path d="M 50 55 Q 70 45 65 35 Q 55 45 50 55 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  
                  {/* Желтый цветок */}
                  <circle cx="50" cy="25" r="4" fill="#ca8a04" stroke="none" />
                  <path d="M 50 20 L 50 15 M 55 25 L 60 25 M 50 30 L 50 35 M 45 25 L 40 25 M 46 21 L 43 18 M 54 21 L 57 18 M 54 29 L 57 32 M 46 29 L 43 32" stroke="#fef08a" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 50 20 L 50 15 M 55 25 L 60 25 M 50 30 L 50 35 M 45 25 L 40 25" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'gasoline-puddle',
              title: 'Бензиновое пятно',
              desc: 'в луже (радужная пленка)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Асфальт фон */}
                  <rect x="0" y="0" width="100" height="100" fill="#64748b" stroke="none" />
                  <circle cx="20" cy="20" r="1.5" fill="#475569" stroke="none" />
                  <circle cx="80" cy="30" r="1.5" fill="#475569" stroke="none" />
                  <circle cx="30" cy="80" r="1.5" fill="#475569" stroke="none" />
                  
                  {/* Лужа (основная форма) */}
                  <path d="M 20 50 C 10 30 40 20 50 25 C 70 30 90 40 85 60 C 80 80 50 90 40 80 C 20 70 30 70 20 50 Z" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
                  
                  {/* Радужные разводы (бензин) */}
                  <path d="M 30 45 C 30 35 50 30 60 35 C 70 40 80 50 75 60 C 70 70 50 75 45 70 C 35 60 30 55 30 45 Z" fill="#ec4899" stroke="none" opacity="0.6" />
                  <path d="M 40 50 C 40 40 55 35 65 45 C 75 55 65 65 55 65 C 45 65 40 60 40 50 Z" fill="#0ea5e9" stroke="none" opacity="0.7" />
                  <path d="M 45 55 C 45 45 55 45 60 55 C 65 65 55 65 50 60 C 45 55 45 60 45 55 Z" fill="#facc15" stroke="none" opacity="0.8" />
                  
                  {/* Волнистые линии переливов */}
                  <path d="M 25 50 Q 40 35 55 40 T 80 55" fill="none" stroke="#34d399" strokeWidth="2" opacity="0.8" />
                  <path d="M 30 60 Q 45 45 60 50 T 82 60" fill="none" stroke="#a78bfa" strokeWidth="2" opacity="0.8" />
                  
                  {/* Блики от неба */}
                  <path d="M 35 35 Q 45 28 55 35" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5" />
                  <path d="M 70 45 Q 75 50 70 55" fill="none" stroke="#fff" strokeWidth="2" opacity="0.4" />
                </svg>
              )
            },
            {
              id: 'tire-track-mud',
              title: 'След от протектора',
              desc: 'шины на засохшей грязи',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Засохшая грязь */}
                  <path d="M 10 50 C 10 20 90 10 90 50 C 90 90 10 80 10 50 Z" fill="#a16207" stroke="#713f12" strokeWidth="2" />
                  
                  {/* Вдавленный след от шины (уходит вдаль) */}
                  <path d="M 35 15 L 65 15 L 75 85 L 25 85 Z" fill="#78350f" stroke="#451a03" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Рисунок протектора (елочка/шевроны) */}
                  <g stroke="#451a03" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 37 20 L 50 25 L 63 20" />
                    <path d="M 36 30 L 50 35 L 64 30" />
                    <path d="M 34 40 L 50 45 L 66 40" />
                    <path d="M 32 50 L 50 55 L 68 50" />
                    <path d="M 30 60 L 50 65 L 70 60" />
                    <path d="M 28 70 L 50 75 L 72 70" />
                    <path d="M 26 80 L 50 85 L 74 80" />
                  </g>
                  
                  {/* Трещины в грязи по бокам */}
                  <path d="M 15 50 L 25 55 M 20 60 L 25 65 M 18 40 L 28 45" stroke="#713f12" strokeWidth="1.5" />
                  <path d="M 85 50 L 75 55 M 80 60 L 75 65 M 82 40 L 72 45" stroke="#713f12" strokeWidth="1.5" />
                </svg>
              )
            },
            {
              id: 'dust-sparrows',
              title: 'Стайка воробьев',
              desc: 'принимающих пылевую ванну',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Облако пыли */}
                  <path d="M 20 70 C 20 50 80 50 80 70 C 80 90 20 90 20 70 Z" fill="#e5e7eb" stroke="none" opacity="0.8" />
                  <path d="M 10 75 Q 30 40 50 65 T 90 75" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 30 85 Q 50 50 70 85" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="3 3" />
                  
                  {/* Воробей 1 (Купается) */}
                  <ellipse cx="35" cy="70" rx="8" ry="6" fill="#78350f" stroke="#451a03" strokeWidth="2" transform="rotate(-15 35 70)" />
                  <circle cx="30" cy="65" r="4" fill="#78350f" stroke="#451a03" strokeWidth="2" />
                  <polygon points="26,65 22,64 26,67" fill="#fbbf24" stroke="none" /> {/* Клюв */}
                  <path d="M 38 68 Q 42 62 45 68" stroke="#451a03" strokeWidth="2" fill="none" /> {/* Крыло взмах */}
                  
                  {/* Воробей 2 (Встряхивается) */}
                  <ellipse cx="65" cy="68" rx="8" ry="6" fill="#78350f" stroke="#451a03" strokeWidth="2" transform="rotate(15 65 68)" />
                  <circle cx="70" cy="63" r="4" fill="#78350f" stroke="#451a03" strokeWidth="2" />
                  <polygon points="74,63 78,62 74,65" fill="#fbbf24" stroke="none" />
                  <path d="M 62 66 Q 58 60 55 66" stroke="#451a03" strokeWidth="2" fill="none" /> {/* Крыло взмах */}
                  <path d="M 68 70 Q 75 75 72 80" stroke="#451a03" strokeWidth="2" fill="none" /> {/* Хвост */}
                  
                  {/* Летящие песчинки */}
                  <circle cx="45" cy="55" r="1" fill="#78716c" stroke="none" />
                  <circle cx="55" cy="50" r="1.5" fill="#78716c" stroke="none" />
                  <circle cx="30" cy="55" r="1" fill="#78716c" stroke="none" />
                  <circle cx="75" cy="55" r="1.5" fill="#78716c" stroke="none" />
                </svg>
              )
            },
            {
              id: 'garage-cat',
              title: 'Гаражный кот',
              desc: 'живущий при складе',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кирпичная стена и крыша гаража */}
                  <rect x="10" y="40" width="80" height="50" fill="#b45309" stroke="#78350f" strokeWidth="3" />
                  <line x1="10" y1="55" x2="90" y2="55" stroke="#78350f" strokeWidth="2" />
                  <line x1="10" y1="70" x2="90" y2="70" stroke="#78350f" strokeWidth="2" />
                  <line x1="30" y1="40" x2="30" y2="55" stroke="#78350f" strokeWidth="2" />
                  <line x1="70" y1="40" x2="70" y2="55" stroke="#78350f" strokeWidth="2" />
                  <line x1="50" y1="55" x2="50" y2="70" stroke="#78350f" strokeWidth="2" />
                  
                  {/* Волнистая крыша */}
                  <path d="M 5 40 Q 15 35 25 40 T 45 40 T 65 40 T 85 40 T 95 40 L 95 45 L 5 45 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Суровый кот */}
                  <path d="M 35 40 C 35 20 65 20 65 40 Z" fill="#4b5563" stroke="#1f2937" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Уши (одно порвано) */}
                  <polygon points="35,28 40,15 45,22" fill="#4b5563" stroke="#1f2937" strokeWidth="2" strokeLinejoin="round" />
                  <polygon points="65,28 60,15 55,22" fill="#4b5563" stroke="#1f2937" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 60 15 L 58 19 L 62 20" fill="#cbd5e1" stroke="none" /> {/* Рваное ухо */}
                  
                  {/* Глаза (суровый прищур) */}
                  <line x1="40" y1="28" x2="48" y2="30" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
                  <line x1="60" y1="28" x2="52" y2="30" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="44" cy="29" r="1" fill="#1f2937" stroke="none" />
                  <circle cx="56" cy="29" r="1" fill="#1f2937" stroke="none" />
                  
                  {/* Нос и усы */}
                  <polygon points="48,34 52,34 50,37" fill="#fca5a5" stroke="none" />
                  <line x1="45" y1="36" x2="35" y2="34" stroke="#1f2937" strokeWidth="1" />
                  <line x1="45" y1="38" x2="35" y2="38" stroke="#1f2937" strokeWidth="1" />
                  <line x1="55" y1="36" x2="65" y2="34" stroke="#1f2937" strokeWidth="1" />
                  <line x1="55" y1="38" x2="65" y2="38" stroke="#1f2937" strokeWidth="1" />
                  
                  {/* Хвост свисает с крыши */}
                  <path d="M 65 40 C 75 40 80 50 80 65" fill="none" stroke="#4b5563" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 65 40 C 75 40 80 50 80 65" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'thistle',
              title: 'Чертополох',
              desc: 'высокое колючее растение с фиолетовым цветком',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Стебель */}
                  <path d="M 50 95 L 50 45" stroke="#16a34a" strokeWidth="5" />
                  <path d="M 50 95 L 50 45" stroke="#14532d" strokeWidth="2" strokeDasharray="4 4" />
                  
                  {/* Острые зигзагообразные листья (колючие) */}
                  <path d="M 50 80 L 35 75 L 40 70 L 25 65 L 35 60 L 20 55 L 45 50 L 50 65 Z" fill="#22c55e" stroke="#14532d" strokeWidth="2" strokeLinejoin="miter" />
                  <path d="M 50 75 L 65 70 L 60 65 L 75 60 L 65 55 L 80 50 L 55 45 L 50 60 Z" fill="#22c55e" stroke="#14532d" strokeWidth="2" strokeLinejoin="miter" />
                  
                  {/* Бутон (основание цветка с колючками) */}
                  <path d="M 40 45 Q 50 55 60 45 Q 50 35 40 45 Z" fill="#16a34a" stroke="#14532d" strokeWidth="2" />
                  <path d="M 40 45 L 35 40 M 45 48 L 42 53 M 60 45 L 65 40 M 55 48 L 58 53" stroke="#14532d" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Фиолетовый пушистый цветок */}
                  <g stroke="#d946ef" strokeWidth="2" strokeLinecap="round">
                    <line x1="45" y1="38" x2="35" y2="25" />
                    <line x1="48" y1="36" x2="42" y2="15" />
                    <line x1="50" y1="35" x2="50" y2="10" />
                    <line x1="52" y1="36" x2="58" y2="15" />
                    <line x1="55" y1="38" x2="65" y2="25" />
                  </g>
                  <g stroke="#a21caf" strokeWidth="2" strokeLinecap="round">
                    <line x1="42" y1="40" x2="30" y2="30" />
                    <line x1="46" y1="37" x2="45" y2="20" />
                    <line x1="54" y1="37" x2="55" y2="20" />
                    <line x1="58" y1="40" x2="70" y2="30" />
                  </g>
                  
                  {/* Маленькие колючки на стебле */}
                  <line x1="50" y1="85" x2="46" y2="83" stroke="#14532d" strokeWidth="1.5" />
                  <line x1="50" y1="70" x2="54" y2="68" stroke="#14532d" strokeWidth="1.5" />
                  <line x1="50" y1="55" x2="46" y2="53" stroke="#14532d" strokeWidth="1.5" />
                </svg>
              )
            }
          ]
        }
	]
  },
  {
      id: 'ch5',
      title: 'Магазин и Рынок',
      emoji: '🛒',
      superTasks: [
        { id: 'ch5-st1', type: '🗣️ Люди', text: 'Продавец, который зазывает покупателей громким голосом.' },
        { id: 'ch5-st2', type: '😋 Вкус', text: 'Прилавок, где дают что-то попробовать (дегустация).' },
        { id: 'ch5-st3', type: '👃 Запах', text: 'Аромат солений, свежих огурцов или специй.' },
        { id: 'ch5-st4', type: '🔊 Звук', text: 'Гул голосов и звон монет в кассе.' },
        { id: 'ch5-st5', type: '🕵️ Секрет', text: 'Найди самый дешевый и самый дорогой товар в одном отделе.' }
      ],
      sections: [
        {
          id: 'ch5-equipment',
          title: '🛒 Оборудование и навигация',
          subtitle: 'В лабиринтах полок',
          theme: 'blue',
          items: [
            {
              id: 'broken-cart',
              title: 'Продуктовая тележка',
              desc: 'с заклинившим колесом',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Корзина (Сетка) */}
                  <path d="M 20 25 L 85 25 L 75 60 L 25 60 Z" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 30 25 L 35 60 M 40 25 L 45 60 M 50 25 L 55 60 M 60 25 L 65 60 M 70 25 L 70 60 M 80 25 L 75 60" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M 22 35 L 82 35 M 23 45 L 79 45 M 24 55 L 76 55" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Шасси (Рама) */}
                  <path d="M 15 85 L 25 60 M 25 60 L 70 85" stroke="#475569" strokeWidth="4" />
                  <line x1="20" y1="75" x2="55" y2="75" stroke="#475569" strokeWidth="4" />
                  
                  {/* Колеса */}
                  <circle cx="15" cy="85" r="5" fill="#1f2937" stroke="#000" strokeWidth="2" />
                  <circle cx="70" cy="85" r="5" fill="#1f2937" stroke="#000" strokeWidth="2" />
                  {/* Переднее заклинившее колесо (перекошено) */}
                  <ellipse cx="85" cy="85" rx="5" ry="2" fill="#1f2937" stroke="#000" strokeWidth="2" transform="rotate(-30 85 85)" />
                  <path d="M 80 80 L 85 85" stroke="#475569" strokeWidth="3" />
                  
                  {/* Ручка */}
                  <path d="M 20 25 L 10 15 L 15 10" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
                  <line x1="8" y1="18" x2="16" y2="10" stroke="#1d4ed8" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Следы от заклинившего колеса (царапины на полу) */}
                  <path d="M 85 95 Q 90 90 95 95" stroke="#94a3b8" strokeWidth="2" strokeDasharray="2 2" />
                </svg>
              )
            },
            {
              id: 'shopping-basket',
              title: 'Ручная корзинка',
              desc: 'яркого цвета',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ручки корзины */}
                  <path d="M 25 40 C 25 10 75 10 75 40" fill="none" stroke="#1f2937" strokeWidth="5" />
                  <path d="M 35 40 C 35 20 65 20 65 40" fill="none" stroke="#4b5563" strokeWidth="5" />
                  <rect x="42" y="12" width="16" height="6" rx="3" fill="#111827" stroke="none" />
                  
                  {/* Корпус корзины (Ярко-красный) */}
                  <path d="M 15 40 L 85 40 L 75 85 L 25 85 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="4" strokeLinejoin="round" />
                  
                  {/* Ребра жесткости и узоры */}
                  <line x1="25" y1="50" x2="75" y2="50" stroke="#b91c1c" strokeWidth="2" />
                  <line x1="25" y1="65" x2="75" y2="65" stroke="#b91c1c" strokeWidth="2" />
                  <line x1="35" y1="40" x2="35" y2="85" stroke="#b91c1c" strokeWidth="2" />
                  <line x1="50" y1="40" x2="50" y2="85" stroke="#b91c1c" strokeWidth="2" />
                  <line x1="65" y1="40" x2="65" y2="85" stroke="#b91c1c" strokeWidth="2" />
                  
                  {/* Логотип/Наклейка */}
                  <ellipse cx="50" cy="57" rx="8" ry="5" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'auto-doors',
              title: 'Автоматические двери',
              desc: 'которые открываются сами',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Рама */}
                  <rect x="10" y="10" width="80" height="85" fill="#f1f5f9" stroke="#64748b" strokeWidth="4" />
                  <rect x="10" y="10" width="80" height="15" fill="#cbd5e1" stroke="#64748b" strokeWidth="4" />
                  
                  {/* Сенсор движения */}
                  <rect x="45" y="14" width="10" height="6" rx="2" fill="#1f2937" stroke="none" />
                  <circle cx="50" cy="17" r="1.5" fill="#ef4444" stroke="none" style={{ filter: 'drop-shadow(0 0 2px #ef4444)' }} />
                  
                  {/* Раздвижные стеклянные створки (Слегка приоткрыты) */}
                  <rect x="15" y="25" width="25" height="70" fill="#bae6fd" stroke="#0ea5e9" strokeWidth="3" opacity="0.7" />
                  <rect x="60" y="25" width="25" height="70" fill="#bae6fd" stroke="#0ea5e9" strokeWidth="3" opacity="0.7" />
                  
                  {/* Блики на стекле */}
                  <line x1="20" y1="35" x2="35" y2="35" stroke="#ffffff" strokeWidth="2" opacity="0.8" />
                  <line x1="20" y1="45" x2="30" y2="45" stroke="#ffffff" strokeWidth="2" opacity="0.8" />
                  <line x1="65" y1="55" x2="80" y2="55" stroke="#ffffff" strokeWidth="2" opacity="0.8" />
                  
                  {/* Стрелки направления (на стеклах) */}
                  <path d="M 25 60 L 20 65 L 25 70" stroke="#0369a1" strokeWidth="2" />
                  <line x1="20" y1="65" x2="35" y2="65" stroke="#0369a1" strokeWidth="2" />
                  
                  <path d="M 75 60 L 80 65 L 75 70" stroke="#0369a1" strokeWidth="2" />
                  <line x1="65" y1="65" x2="80" y2="65" stroke="#0369a1" strokeWidth="2" />
                  
                  {/* Знаки "Не входить" или "Реклама" на уровне глаз */}
                  <circle cx="27" cy="50" r="4" fill="#facc15" stroke="none" opacity="0.8" />
                  <circle cx="72" cy="50" r="4" fill="#facc15" stroke="none" opacity="0.8" />
                </svg>
              )
            },
            {
              id: 'lockers',
              title: 'Камера хранения',
              desc: 'с ключом в замке',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Основной шкаф */}
                  <rect x="15" y="15" width="70" height="70" fill="#e2e8f0" stroke="#64748b" strokeWidth="4" />
                  
                  {/* Ячейки (Сетка 2x2 для крупного плана) */}
                  <rect x="15" y="15" width="35" height="35" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />
                  <rect x="50" y="15" width="35" height="35" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />
                  <rect x="15" y="50" width="35" height="35" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />
                  <rect x="50" y="50" width="35" height="35" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />
                  
                  {/* Вентиляционные прорези */}
                  <g stroke="#94a3b8" strokeWidth="2">
                    <line x1="25" y1="22" x2="25" y2="32" /><line x1="30" y1="22" x2="30" y2="32" />
                    <line x1="60" y1="22" x2="60" y2="32" /><line x1="65" y1="22" x2="65" y2="32" />
                    <line x1="25" y1="57" x2="25" y2="67" /><line x1="30" y1="57" x2="30" y2="67" />
                    <line x1="60" y1="57" x2="60" y2="67" /><line x1="65" y1="57" x2="65" y2="67" />
                  </g>
                  
                  {/* Номерки на ячейках */}
                  <rect x="20" y="40" width="10" height="6" fill="#cbd5e1" stroke="none" />
                  <rect x="55" y="40" width="10" height="6" fill="#cbd5e1" stroke="none" />
                  <rect x="20" y="75" width="10" height="6" fill="#cbd5e1" stroke="none" />
                  <rect x="55" y="75" width="10" height="6" fill="#cbd5e1" stroke="none" />
                  
                  {/* Замки */}
                  <circle cx="42" cy="35" r="2" fill="#1f2937" stroke="none" />
                  <circle cx="42" cy="70" r="2" fill="#1f2937" stroke="none" />
                  <circle cx="77" cy="70" r="2" fill="#1f2937" stroke="none" />
                  
                  {/* Ячейка с вставленным ключом и брелком */}
                  <circle cx="77" cy="35" r="3" fill="#cbd5e1" stroke="#1f2937" strokeWidth="2" />
                  <line x1="77" y1="38" x2="77" y2="44" stroke="#1f2937" strokeWidth="2" />
                  {/* Брелок */}
                  <circle cx="77" cy="46" r="4" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'self-scales',
              title: 'Весы самообслуживания',
              desc: 'в овощном отделе',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Основная стойка и экран */}
                  <rect x="35" y="10" width="30" height="30" rx="3" fill="#f8fafc" stroke="#475569" strokeWidth="3" />
                  <rect x="40" y="15" width="20" height="15" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
                  
                  {/* Кнопочки на экране */}
                  <rect x="40" y="32" width="4" height="4" fill="#4ade80" stroke="none" />
                  <rect x="46" y="32" width="4" height="4" fill="#facc15" stroke="none" />
                  <rect x="52" y="32" width="4" height="4" fill="#fca5a5" stroke="none" />
                  <rect x="58" y="32" width="4" height="4" fill="#cbd5e1" stroke="none" />
                  
                  {/* Нога и печатный блок */}
                  <rect x="45" y="40" width="10" height="30" fill="#e2e8f0" stroke="#475569" strokeWidth="3" />
                  <path d="M 30 50 L 45 50 L 45 60 L 30 60 Z" fill="#f1f5f9" stroke="#475569" strokeWidth="2" />
                  {/* Чек торчит */}
                  <rect x="32" y="60" width="10" height="15" fill="#ffffff" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="34" y1="63" x2="40" y2="63" stroke="#1f2937" strokeWidth="1" />
                  <line x1="34" y1="67" x2="40" y2="67" stroke="#1f2937" strokeWidth="1" />
                  <line x1="34" y1="71" x2="38" y2="71" stroke="#1f2937" strokeWidth="1" />
                  
                  {/* Платформа весов */}
                  <path d="M 20 85 L 80 85 L 75 70 L 25 70 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="20" y1="80" x2="80" y2="80" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Яблоки на весах */}
                  <circle cx="40" cy="65" r="8" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                  <path d="M 40 57 C 42 55 45 53 45 53" stroke="#15803d" strokeWidth="2" />
                  
                  <circle cx="55" cy="67" r="8" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                  <path d="M 55 59 C 57 57 60 55 60 55" stroke="#15803d" strokeWidth="2" />
                  
                  <circle cx="48" cy="60" r="8" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'price-checker',
              title: 'Прайс-чекер',
              desc: 'сканер штрих-кодов на стене',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Задний фон стены (плитка) */}
                  <path d="M 10 30 L 90 30 M 10 50 L 90 50 M 10 70 L 90 70" stroke="#e2e8f0" strokeWidth="2" />
                  <path d="M 30 10 L 30 90 M 50 10 L 50 90 M 70 10 L 70 90" stroke="#e2e8f0" strokeWidth="2" />
                  
                  {/* Корпус устройства (Обычно красный или желтый) */}
                  <rect x="25" y="20" width="50" height="55" rx="5" fill="#ef4444" stroke="#b91c1c" strokeWidth="4" />
                  
                  {/* Экран */}
                  <rect x="35" y="28" width="30" height="20" rx="2" fill="#111827" stroke="#374151" strokeWidth="2" />
                  <path d="M 40 38 L 45 38 M 40 42 L 60 42" stroke="#22c55e" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 2px #22c55e)' }} />
                  
                  {/* Окно сканера */}
                  <rect x="35" y="55" width="30" height="10" rx="2" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                  
                  {/* Красный лазерный луч (светит вниз) */}
                  <polygon points="40,65 60,65 75,90 25,90" fill="#ef4444" stroke="none" opacity="0.3" />
                  <line x1="50" y1="65" x2="50" y2="90" stroke="#ef4444" strokeWidth="2" opacity="0.8" style={{ filter: 'drop-shadow(0 0 3px #ef4444)' }} />
                  <line x1="40" y1="65" x2="30" y2="90" stroke="#ef4444" strokeWidth="1" opacity="0.5" />
                  <line x1="60" y1="65" x2="70" y2="90" stroke="#ef4444" strokeWidth="1" opacity="0.5" />
                  
                  {/* Динамик/Кнопки */}
                  <circle cx="50" cy="51" r="1" fill="#f8fafc" stroke="none" />
                  <circle cx="45" cy="51" r="1" fill="#f8fafc" stroke="none" />
                  <circle cx="55" cy="51" r="1" fill="#f8fafc" stroke="none" />
                </svg>
              )
            },
            {
              id: 'fridge-display',
              title: 'Холодильник-витрина',
              desc: 'с запотевшей стеклянной дверцей',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Корпус холодильника */}
                  <rect x="20" y="10" width="60" height="85" fill="#f1f5f9" stroke="#64748b" strokeWidth="4" />
                  <rect x="20" y="10" width="60" height="15" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
                  <path d="M 40 18 L 60 18" stroke="#fff" strokeWidth="3" />
                  
                  {/* Полки внутри */}
                  <line x1="25" y1="40" x2="75" y2="40" stroke="#9ca3af" strokeWidth="3" />
                  <line x1="25" y1="65" x2="75" y2="65" stroke="#9ca3af" strokeWidth="3" />
                  
                  {/* Бутылки на полках (силуэты за стеклом) */}
                  <rect x="30" y="25" width="8" height="15" rx="2" fill="#ef4444" stroke="none" />
                  <rect x="45" y="25" width="8" height="15" rx="2" fill="#facc15" stroke="none" />
                  <rect x="60" y="25" width="8" height="15" rx="2" fill="#22c55e" stroke="none" />
                  
                  <rect x="35" y="50" width="8" height="15" rx="2" fill="#3b82f6" stroke="none" />
                  <rect x="55" y="50" width="8" height="15" rx="2" fill="#a855f7" stroke="none" />
                  
                  <rect x="40" y="75" width="10" height="18" rx="2" fill="#f97316" stroke="none" />
                  <rect x="65" y="75" width="6" height="18" rx="1" fill="#14b8a6" stroke="none" />
                  
                  {/* Запотевшее стекло (полупрозрачный слой) */}
                  <rect x="25" y="25" width="50" height="68" fill="#e0f2fe" stroke="none" opacity="0.6" />
                  <rect x="25" y="25" width="50" height="68" fill="none" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* След от пальца на запотевшем стекле (протертая полоса) */}
                  <path d="M 40 45 C 50 35 65 55 55 70" fill="none" stroke="#bae6fd" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
                  
                  {/* Ручка двери */}
                  <rect x="70" y="45" width="3" height="20" rx="1.5" fill="#f8fafc" stroke="#475569" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'checkout-belt',
              title: 'Лента на кассе',
              desc: 'которая движется к кассиру',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кассовый стол (основание) */}
                  <path d="M 10 60 L 90 60 L 85 90 L 15 90 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="3" />
                  
                  {/* Черная резиновая движущаяся лента */}
                  <path d="M 20 45 L 80 45 L 90 60 L 10 60 Z" fill="#1f2937" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Линии движения на ленте */}
                  <line x1="30" y1="48" x2="70" y2="48" stroke="#374151" strokeWidth="2" />
                  <line x1="25" y1="52" x2="75" y2="52" stroke="#374151" strokeWidth="2" />
                  <line x1="15" y1="56" x2="85" y2="56" stroke="#374151" strokeWidth="2" />
                  
                  {/* Металлический бортик */}
                  <path d="M 15 40 L 85 40 L 80 45 L 20 45 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Товары на ленте */}
                  {/* Пакет молока */}
                  <path d="M 35 30 L 45 30 L 45 50 L 30 50 L 30 35 Z" fill="#f8fafc" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round" />
                  <polygon points="35,30 45,30 40,25" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
                  <rect x="33" y="38" width="9" height="5" fill="#3b82f6" stroke="none" />
                  
                  {/* Батон хлеба */}
                  <ellipse cx="65" cy="45" rx="12" ry="6" fill="#fde047" stroke="#d97706" strokeWidth="2" transform="rotate(-15 65 45)" />
                  <path d="M 58 43 Q 62 40 64 45" stroke="#d97706" strokeWidth="2" fill="none" />
                  <path d="M 64 42 Q 68 39 70 44" stroke="#d97706" strokeWidth="2" fill="none" />
                  
                  {/* Сканер/Лазер кассира сбоку */}
                  <rect x="85" y="30" width="10" height="25" rx="2" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
                  <line x1="85" y1="40" x2="80" y2="40" stroke="#ef4444" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 2px #ef4444)' }} />
                </svg>
              )
            },
            {
              id: 'checkout-divider',
              title: 'Разделитель покупок',
              desc: 'палочка с надписью «Следующий покупатель»',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Лента кассы фон */}
                  <path d="M 10 70 L 90 70 L 100 90 L 0 90 Z" fill="#1f2937" stroke="none" />
                  <line x1="15" y1="75" x2="85" y2="75" stroke="#374151" strokeWidth="2" />
                  <line x1="5" y1="85" x2="95" y2="85" stroke="#374151" strokeWidth="2" />
                  
                  {/* Сам разделитель (Трехгранная призма) */}
                  <polygon points="20,60 80,60 90,80 10,80" fill="#fca5a5" stroke="#dc2626" strokeWidth="3" strokeLinejoin="round" />
                  <polygon points="20,60 80,60 75,45 25,45" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" />
                  <polygon points="10,80 20,60 25,45 15,65" fill="#b91c1c" stroke="#7f1d1d" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Надпись/Реклама на разделителе */}
                  <rect x="35" y="48" width="30" height="8" rx="1" fill="#ffffff" stroke="none" />
                  <line x1="38" y1="52" x2="62" y2="52" stroke="#1f2937" strokeWidth="2" />
                  
                  <rect x="30" y="65" width="40" height="10" rx="1" fill="#ffffff" stroke="none" />
                  <line x1="35" y1="68" x2="65" y2="68" stroke="#1f2937" strokeWidth="2" />
                  <line x1="35" y1="72" x2="55" y2="72" stroke="#1f2937" strokeWidth="2" />
                  
                  {/* Торцы пластика */}
                  <path d="M 80 60 L 90 80 M 80 60 L 75 45" stroke="#fca5a5" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'safety-mirror',
              title: 'Зеркало безопасности',
              desc: 'выпуклое, висит под потолком',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Потолок и кронштейн */}
                  <rect x="0" y="0" width="100" height="15" fill="#f1f5f9" stroke="none" />
                  <path d="M 50 15 L 50 30" stroke="#64748b" strokeWidth="6" />
                  <ellipse cx="50" cy="15" rx="8" ry="3" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
                  
                  {/* Выпуклое зеркало (Основа и красная/оранжевая рамка) */}
                  <circle cx="50" cy="55" r="35" fill="#ea580c" stroke="#c2410c" strokeWidth="3" />
                  <circle cx="50" cy="55" r="30" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Искаженное отражение в зеркале (эффект "рыбьего глаза") */}
                  <path d="M 25 55 C 35 30 65 30 75 55" fill="none" stroke="#cbd5e1" strokeWidth="4" />
                  <path d="M 30 55 C 40 40 60 40 70 55" fill="none" stroke="#9ca3af" strokeWidth="3" />
                  
                  {/* Силуэты стеллажей в отражении */}
                  <path d="M 25 55 C 25 65 40 80 50 80" fill="none" stroke="#64748b" strokeWidth="5" />
                  <path d="M 75 55 C 75 65 60 80 50 80" fill="none" stroke="#64748b" strokeWidth="5" />
                  <line x1="50" y1="50" x2="50" y2="80" stroke="#475569" strokeWidth="3" />
                  
                  {/* Силуэт человечка (покупатель) */}
                  <circle cx="50" cy="50" r="3" fill="#ef4444" stroke="none" />
                  <line x1="50" y1="53" x2="50" y2="65" stroke="#ef4444" strokeWidth="3" />
                  
                  {/* Блик на выпуклом стекле */}
                  <path d="M 25 45 A 25 25 0 0 1 45 28" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
                  <path d="M 70 35 A 25 25 0 0 1 78 50" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                </svg>
              )
            }
          ]
        },
		{
          id: 'ch5-fruits',
          title: '🍏 Отдел «Овощи и Фрукты»',
          subtitle: 'Витаминный рай',
          theme: 'emerald',
          items: [
            {
              id: 'exotic-fruit',
              title: 'Экзотический фрукт',
              desc: 'тот, который видишь впервые (например, драконфрукт)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Питахайя (Драконий фрукт) */}
                  <ellipse cx="50" cy="55" rx="30" ry="38" fill="#f472b6" stroke="#db2777" strokeWidth="3" transform="rotate(-15 50 55)" />
                  
                  {/* Зеленые чешуйки */}
                  <path d="M 30 35 Q 20 25 15 35 Q 25 40 30 35 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="2" />
                  <path d="M 50 20 Q 45 10 35 15 Q 45 25 50 20 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="2" />
                  <path d="M 70 30 Q 80 20 85 30 Q 75 40 70 30 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="2" />
                  <path d="M 25 60 Q 10 55 10 70 Q 20 65 25 60 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="2" />
                  <path d="M 75 60 Q 90 60 85 75 Q 75 65 75 60 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="2" />
                  <path d="M 45 85 Q 40 100 55 95 Q 55 85 45 85 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="2" />
                  <path d="M 50 50 Q 35 50 35 65 Q 45 55 50 50 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="2" />
                  
                  {/* Разрезанная половинка рядом */}
                  <path d="M 60 70 C 60 90 90 90 90 70 C 90 50 60 50 60 70 Z" fill="#f8fafc" stroke="#db2777" strokeWidth="3" />
                  <path d="M 60 70 C 60 90 90 90 90 70 C 90 50 60 50 60 70 Z" fill="none" stroke="#f472b6" strokeWidth="6" />
                  {/* Семечки */}
                  <circle cx="70" cy="65" r="1" fill="#1f2937" stroke="none" />
                  <circle cx="80" cy="68" r="1" fill="#1f2937" stroke="none" />
                  <circle cx="75" cy="75" r="1" fill="#1f2937" stroke="none" />
                  <circle cx="82" cy="78" r="1" fill="#1f2937" stroke="none" />
                  <circle cx="68" cy="78" r="1" fill="#1f2937" stroke="none" />
                </svg>
              )
            },
            {
              id: 'funny-carrot',
              title: 'Овощ странной формы',
              desc: 'например, морковь с «ногами»',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ботва (зелень) */}
                  <path d="M 50 25 Q 35 10 30 20 Q 40 25 50 25 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  <path d="M 50 25 Q 50 5 55 10 Q 55 20 50 25 Z" fill="#4ade80" stroke="#15803d" strokeWidth="2" />
                  <path d="M 50 25 Q 65 10 70 15 Q 60 25 50 25 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  
                  {/* Тело моркови (разделяется на две "ножки") */}
                  <path d="M 35 25 C 35 25 65 25 65 25 C 65 50 70 70 65 85 C 60 90 55 85 55 70 C 55 60 50 50 45 60 C 45 75 40 90 35 85 C 30 70 35 50 35 25 Z" fill="#f97316" stroke="#c2410c" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Полоски на моркови */}
                  <line x1="40" y1="35" x2="50" y2="35" stroke="#c2410c" strokeWidth="2" />
                  <line x1="55" y1="40" x2="62" y2="40" stroke="#c2410c" strokeWidth="2" />
                  <line x1="38" y1="48" x2="48" y2="48" stroke="#c2410c" strokeWidth="2" />
                  <line x1="53" y1="55" x2="60" y2="55" stroke="#c2410c" strokeWidth="2" />
                  <line x1="38" y1="65" x2="43" y2="65" stroke="#c2410c" strokeWidth="2" />
                  <line x1="57" y1="72" x2="62" y2="72" stroke="#c2410c" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'onion-mesh',
              title: 'Сетка с луком',
              desc: 'или с чесноком',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Луковицы внутри */}
                  <circle cx="35" cy="50" r="15" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
                  <circle cx="65" cy="50" r="15" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
                  <circle cx="50" cy="70" r="15" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
                  <circle cx="50" cy="35" r="15" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
                  <circle cx="35" cy="65" r="12" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
                  <circle cx="65" cy="65" r="12" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
                  
                  {/* Хвостики лука */}
                  <path d="M 50 20 Q 55 15 50 10 Q 45 15 50 20" fill="#d97706" stroke="none" />
                  <path d="M 35 35 Q 40 30 35 25" stroke="#d97706" strokeWidth="2" />
                  <path d="M 65 35 Q 60 30 65 25" stroke="#d97706" strokeWidth="2" />
                  
                  {/* Красная сетка (ромбики) */}
                  <path d="M 20 50 C 15 20 40 10 50 10 C 60 10 85 20 80 50 C 75 80 65 95 50 95 C 35 95 25 80 20 50 Z" fill="none" stroke="#ef4444" strokeWidth="2" />
                  <g stroke="#ef4444" strokeWidth="1.5" opacity="0.8">
                    <line x1="25" y1="30" x2="75" y2="80" />
                    <line x1="35" y1="20" x2="80" y2="65" />
                    <line x1="15" y1="50" x2="60" y2="95" />
                    
                    <line x1="75" y1="30" x2="25" y2="80" />
                    <line x1="65" y1="20" x2="20" y2="65" />
                    <line x1="85" y1="50" x2="40" y2="95" />
                  </g>
                  
                  {/* Бирка/Ценник */}
                  <rect x="40" y="45" width="20" height="10" fill="#fff" stroke="#1f2937" strokeWidth="2" transform="rotate(-15 50 50)" />
                  <line x1="42" y1="48" x2="55" y2="48" stroke="#1f2937" strokeWidth="1" transform="rotate(-15 50 50)" />
                </svg>
              )
            },
            {
              id: 'herbs-in-glass',
              title: 'Пучок зелени',
              desc: 'укроп или петрушка в стакане с водой',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Зелень (Стебли и листья) */}
                  <path d="M 45 90 L 35 40 Q 20 30 30 15" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 50 90 L 50 35 Q 50 10 55 5" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 55 90 L 65 40 Q 80 30 70 15" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Веточки/листочки */}
                  <path d="M 35 40 Q 20 45 25 35 M 33 25 Q 15 25 25 15 M 50 25 Q 40 15 45 10 M 62 30 Q 75 25 80 35 M 65 20 Q 85 15 75 10" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="30" cy="15" r="3" fill="#22c55e" stroke="none" />
                  <circle cx="55" cy="5" r="3" fill="#22c55e" stroke="none" />
                  <circle cx="70" cy="15" r="3" fill="#22c55e" stroke="none" />
                  <circle cx="25" cy="35" r="3" fill="#22c55e" stroke="none" />
                  <circle cx="80" cy="35" r="3" fill="#22c55e" stroke="none" />
                  
                  {/* Пластиковый/стеклянный стаканчик */}
                  <path d="M 35 45 L 40 95 L 60 95 L 65 45 Z" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="3" strokeLinejoin="round" opacity="0.7" />
                  <path d="M 35 45 L 65 45" stroke="#38bdf8" strokeWidth="3" />
                  
                  {/* Вода в стакане */}
                  <path d="M 37 60 L 63 60 L 60 95 L 40 95 Z" fill="#bae6fd" stroke="none" opacity="0.6" />
                  <path d="M 37 60 Q 50 63 63 60" fill="none" stroke="#0284c7" strokeWidth="2" opacity="0.5" />
                  
                  {/* Блик на стакане */}
                  <line x1="43" y1="55" x2="45" y2="85" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'pineapple',
              title: 'Ананас',
              desc: 'с самой пышной верхушкой',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Пышная корона (листья) */}
                  <path d="M 50 45 Q 20 30 25 10 Q 35 25 45 40 Z" fill="#22c55e" stroke="#14532d" strokeWidth="2" />
                  <path d="M 50 45 Q 80 30 75 10 Q 65 25 55 40 Z" fill="#22c55e" stroke="#14532d" strokeWidth="2" />
                  <path d="M 50 45 Q 35 20 40 5 Q 45 25 50 35 Z" fill="#4ade80" stroke="#14532d" strokeWidth="2" />
                  <path d="M 50 45 Q 65 20 60 5 Q 55 25 50 35 Z" fill="#4ade80" stroke="#14532d" strokeWidth="2" />
                  <path d="M 50 45 Q 10 40 15 25 Q 30 40 45 45 Z" fill="#16a34a" stroke="#14532d" strokeWidth="2" />
                  <path d="M 50 45 Q 90 40 85 25 Q 70 40 55 45 Z" fill="#16a34a" stroke="#14532d" strokeWidth="2" />
                  <path d="M 50 45 L 50 5 Z" stroke="#14532d" strokeWidth="4" />
                  
                  {/* Тело ананаса */}
                  <ellipse cx="50" cy="70" rx="25" ry="30" fill="#facc15" stroke="#b45309" strokeWidth="3" />
                  
                  {/* Ромбовидный узор (чешуйки) */}
                  <g stroke="#d97706" strokeWidth="2" opacity="0.8">
                    <path d="M 30 55 L 70 85 M 25 65 L 60 95 M 40 45 L 75 75" />
                    <path d="M 70 55 L 30 85 M 75 65 L 40 95 M 60 45 L 25 75" />
                  </g>
                  
                  {/* Колючки/точки в центре чешуек */}
                  <circle cx="50" cy="70" r="1.5" fill="#78350f" stroke="none" />
                  <circle cx="40" cy="62" r="1.5" fill="#78350f" stroke="none" />
                  <circle cx="60" cy="62" r="1.5" fill="#78350f" stroke="none" />
                  <circle cx="40" cy="78" r="1.5" fill="#78350f" stroke="none" />
                  <circle cx="60" cy="78" r="1.5" fill="#78350f" stroke="none" />
                  <circle cx="50" cy="55" r="1.5" fill="#78350f" stroke="none" />
                  <circle cx="50" cy="85" r="1.5" fill="#78350f" stroke="none" />
                </svg>
              )
            },
            {
              id: 'harvest-box',
              title: 'Коробка «Урожай»',
              desc: 'с красивой надписью или рисунком',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Внутренняя часть коробки и фрукты */}
                  <polygon points="20,40 80,40 70,30 30,30" fill="#92400e" stroke="#78350f" strokeWidth="2" />
                  <circle cx="40" cy="35" r="8" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                  <circle cx="60" cy="35" r="8" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
                  <circle cx="50" cy="32" r="8" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  
                  {/* Передняя и боковая стенки картона */}
                  <polygon points="15,40 85,40 80,85 20,85" fill="#d97706" stroke="#b45309" strokeWidth="3" strokeLinejoin="round" />
                  <polygon points="15,40 20,85 20,40" fill="#b45309" stroke="none" />
                  <polygon points="85,40 80,85 80,40" fill="#b45309" stroke="none" />
                  
                  {/* Откидные крышки */}
                  <polygon points="15,40 30,30 20,40" fill="#fcd34d" stroke="#b45309" strokeWidth="2" />
                  <polygon points="85,40 70,30 80,40" fill="#fcd34d" stroke="#b45309" strokeWidth="2" />
                  
                  {/* Наклейка "Урожай" с солнышком */}
                  <rect x="35" y="55" width="30" height="20" rx="2" fill="#fff" stroke="#1f2937" strokeWidth="2" />
                  <circle cx="50" cy="62" r="4" fill="#facc15" stroke="none" />
                  <path d="M 50 55 L 50 57 M 50 67 L 50 69 M 43 62 L 45 62 M 55 62 L 57 62" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
                  <line x1="40" y1="70" x2="60" y2="70" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'wooden-crate',
              title: 'Деревянный ящик',
              desc: 'в котором раньше лежали яблоки',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Задняя стенка (темная) */}
                  <rect x="25" y="35" width="50" height="40" fill="#78350f" stroke="#451a03" strokeWidth="2" />
                  
                  {/* Забытый листик на дне */}
                  <path d="M 40 65 Q 45 60 50 65 Q 45 70 40 65 Z" fill="#22c55e" stroke="#14532d" strokeWidth="2" />
                  
                  {/* Передние деревянные рейки */}
                  <rect x="20" y="40" width="60" height="10" fill="#d97706" stroke="#92400e" strokeWidth="3" />
                  <rect x="20" y="55" width="60" height="10" fill="#d97706" stroke="#92400e" strokeWidth="3" />
                  <rect x="20" y="70" width="60" height="10" fill="#d97706" stroke="#92400e" strokeWidth="3" />
                  
                  {/* Угловые вертикальные стойки */}
                  <rect x="20" y="30" width="8" height="55" fill="#b45309" stroke="#78350f" strokeWidth="3" />
                  <rect x="72" y="30" width="8" height="55" fill="#b45309" stroke="#78350f" strokeWidth="3" />
                  
                  {/* Гвозди */}
                  <circle cx="24" cy="45" r="1.5" fill="#1f2937" stroke="none" />
                  <circle cx="24" cy="60" r="1.5" fill="#1f2937" stroke="none" />
                  <circle cx="24" cy="75" r="1.5" fill="#1f2937" stroke="none" />
                  
                  <circle cx="76" cy="45" r="1.5" fill="#1f2937" stroke="none" />
                  <circle cx="76" cy="60" r="1.5" fill="#1f2937" stroke="none" />
                  <circle cx="76" cy="75" r="1.5" fill="#1f2937" stroke="none" />
                  
                  {/* Фактура дерева (линии) */}
                  <line x1="32" y1="45" x2="68" y2="45" stroke="#b45309" strokeWidth="1" />
                  <line x1="32" y1="60" x2="60" y2="60" stroke="#b45309" strokeWidth="1" />
                  <line x1="40" y1="75" x2="68" y2="75" stroke="#b45309" strokeWidth="1" />
                </svg>
              )
            },
            {
              id: 'potato-sack',
              title: 'Мешок картошки',
              desc: 'в который воткнут ценник',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Картофелины выглядывают сверху */}
                  <circle cx="40" cy="40" r="8" fill="#b45309" stroke="#78350f" strokeWidth="2" />
                  <circle cx="60" cy="42" r="7" fill="#b45309" stroke="#78350f" strokeWidth="2" />
                  <circle cx="50" cy="35" r="9" fill="#b45309" stroke="#78350f" strokeWidth="2" />
                  <circle cx="48" cy="33" r="1" fill="#78350f" stroke="none" /> {/* Глазки */}
                  <circle cx="60" cy="40" r="1" fill="#78350f" stroke="none" />
                  
                  {/* Мешок из мешковины */}
                  <path d="M 25 85 C 10 50 25 35 30 45 C 40 55 60 55 70 45 C 75 35 90 50 75 85 C 60 95 40 95 25 85 Z" fill="#d6d3d1" stroke="#78716c" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Складки на мешке */}
                  <path d="M 35 88 C 30 70 40 60 45 50" stroke="#a8a29e" strokeWidth="2" fill="none" />
                  <path d="M 65 88 C 70 70 60 60 55 50" stroke="#a8a29e" strokeWidth="2" fill="none" />
                  
                  {/* Текстура мешковины (сетка точек) */}
                  <circle cx="50" cy="65" r="1" fill="#a8a29e" stroke="none" />
                  <circle cx="45" cy="75" r="1" fill="#a8a29e" stroke="none" />
                  <circle cx="55" cy="75" r="1" fill="#a8a29e" stroke="none" />
                  <circle cx="40" cy="65" r="1" fill="#a8a29e" stroke="none" />
                  <circle cx="60" cy="65" r="1" fill="#a8a29e" stroke="none" />
                  
                  {/* Ценник на палочке */}
                  <line x1="65" y1="15" x2="55" y2="55" stroke="#fcd34d" strokeWidth="3" />
                  <rect x="55" y="10" width="25" height="15" rx="1" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" transform="rotate(-15 65 15)" />
                  <line x1="60" y1="15" x2="75" y2="15" stroke="#ffffff" strokeWidth="2" transform="rotate(-15 65 15)" />
                </svg>
              )
            },
            {
              id: 'cherry-tomatoes',
              title: 'Веточка черри',
              desc: 'маленькие помидоры на одной ветке',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Главная зеленая ветка */}
                  <path d="M 15 20 Q 50 15 85 40" fill="none" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Помидорка 1 */}
                  <path d="M 30 18 L 30 35" stroke="#16a34a" strokeWidth="2" />
                  <circle cx="30" cy="45" r="10" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                  <path d="M 27 35 L 33 35 L 30 38 Z" fill="#16a34a" stroke="none" /> {/* Чашелистик */}
                  <circle cx="27" cy="42" r="2" fill="#fca5a5" stroke="none" /> {/* Блик */}
                  
                  {/* Помидорка 2 */}
                  <path d="M 50 20 L 55 45" stroke="#16a34a" strokeWidth="2" />
                  <circle cx="57" cy="55" r="10" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                  <path d="M 52 46 L 58 45 L 56 49 Z" fill="#16a34a" stroke="none" />
                  <circle cx="54" cy="52" r="2" fill="#fca5a5" stroke="none" />
                  
                  {/* Помидорка 3 */}
                  <path d="M 68 28 L 75 50" stroke="#16a34a" strokeWidth="2" />
                  <circle cx="78" cy="60" r="10" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                  <path d="M 72 50 L 78 50 L 76 54 Z" fill="#16a34a" stroke="none" />
                  <circle cx="75" cy="57" r="2" fill="#fca5a5" stroke="none" />
                  
                  {/* Помидорка 4 */}
                  <path d="M 85 40 L 90 65" stroke="#16a34a" strokeWidth="2" />
                  <circle cx="92" cy="75" r="10" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                  <path d="M 87 65 L 93 65 L 91 69 Z" fill="#16a34a" stroke="none" />
                  <circle cx="89" cy="72" r="2" fill="#fca5a5" stroke="none" />
                </svg>
              )
            },
            {
              id: 'ginger-root',
              title: 'Корень имбиря',
              desc: 'похожий на маленького человечка',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Причудливая форма имбиря (Бегущий человечек) */}
                  <path d="M 45 25 C 55 15 65 25 55 35 C 75 35 85 55 70 65 C 75 80 60 85 55 70 C 50 85 35 85 40 70 C 25 75 15 60 30 50 C 15 40 25 25 35 35 C 35 25 40 20 45 25 Z" fill="#fde047" stroke="#b45309" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Полоски (текстура корня) */}
                  <path d="M 45 35 Q 50 30 55 35" stroke="#d97706" strokeWidth="2" fill="none" />
                  <path d="M 35 50 Q 40 45 45 50" stroke="#d97706" strokeWidth="2" fill="none" />
                  <path d="M 60 55 Q 65 50 70 55" stroke="#d97706" strokeWidth="2" fill="none" />
                  <path d="M 45 65 Q 50 60 55 65" stroke="#d97706" strokeWidth="2" fill="none" />
                  
                  {/* Маленькие отростки (шишечки) */}
                  <ellipse cx="65" cy="45" rx="4" ry="6" fill="#fef08a" stroke="#b45309" strokeWidth="2" transform="rotate(30 65 45)" />
                  <ellipse cx="35" cy="60" rx="4" ry="5" fill="#fef08a" stroke="#b45309" strokeWidth="2" transform="rotate(-20 35 60)" />
                  
                  {/* Глазки/Узелки */}
                  <circle cx="50" cy="28" r="1.5" fill="#b45309" stroke="none" />
                  <circle cx="30" cy="45" r="1" fill="#b45309" stroke="none" />
                  <circle cx="75" cy="60" r="1" fill="#b45309" stroke="none" />
                </svg>
              )
            }
          ]
        },
		{
          id: 'ch5-grocery',
          title: '🥫 Полки и упаковки',
          subtitle: 'Бакалея',
          theme: 'orange',
          items: [
            {
              id: 'canned-pyramid',
              title: 'Пирамида из банок',
              desc: 'консервных (осторожно, не обрушь!)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Нижний ряд (3 банки) */}
                  <path d="M 15 80 L 15 60 C 15 55 35 55 35 60 L 35 80 C 35 85 15 85 15 80 Z" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
                  <rect x="15" y="62" width="20" height="12" fill="#ef4444" stroke="none" />
                  
                  <path d="M 40 80 L 40 60 C 40 55 60 55 60 60 L 60 80 C 60 85 40 85 40 80 Z" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
                  <rect x="40" y="62" width="20" height="12" fill="#3b82f6" stroke="none" />
                  
                  <path d="M 65 80 L 65 60 C 65 55 85 55 85 60 L 85 80 C 85 85 65 85 65 80 Z" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
                  <rect x="65" y="62" width="20" height="12" fill="#22c55e" stroke="none" />

                  {/* Средний ряд (2 банки) */}
                  <path d="M 27 60 L 27 40 C 27 35 47 35 47 40 L 47 60 C 47 65 27 65 27 60 Z" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
                  <rect x="27" y="42" width="20" height="12" fill="#facc15" stroke="none" />
                  
                  <path d="M 53 60 L 53 40 C 53 35 73 35 73 40 L 73 60 C 73 65 53 65 53 60 Z" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
                  <rect x="53" y="42" width="20" height="12" fill="#a855f7" stroke="none" />

                  {/* Верхний ряд (1 банка) */}
                  <path d="M 40 40 L 40 20 C 40 15 60 15 60 20 L 60 40 C 60 45 40 45 40 40 Z" fill="#94a3b8" stroke="#475569" strokeWidth="3" />
                  <rect x="40" y="22" width="20" height="12" fill="#f97316" stroke="none" />
                  <ellipse cx="50" cy="20" rx="10" ry="3" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
                  <circle cx="50" cy="20" r="1" fill="#475569" stroke="none" /> {/* Ключ */}
                  
                  {/* Полка снизу */}
                  <line x1="5" y1="83" x2="95" y2="83" stroke="#64748b" strokeWidth="4" />
                </svg>
              )
            },
            {
              id: 'funny-pasta',
              title: 'Макароны',
              desc: 'необычной формы (бантики, ракушки)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Картонная коробка */}
                  <rect x="20" y="15" width="60" height="75" rx="2" fill="#0ea5e9" stroke="#0369a1" strokeWidth="3" />
                  <rect x="25" y="20" width="50" height="15" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
                  
                  {/* Прозрачное окно */}
                  <path d="M 35 45 C 35 40 65 40 65 45 L 65 75 C 65 80 35 80 35 75 Z" fill="#f8fafc" stroke="#0284c7" strokeWidth="3" />
                  
                  {/* Макароны-бантики (Фарфалле) внутри окна */}
                  <g fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" strokeLinejoin="round">
                    <polygon points="40,50 48,45 48,55" /> <polygon points="56,50 48,45 48,55" />
                    <polygon points="45,65 53,60 53,70" /> <polygon points="61,65 53,60 53,70" />
                    <polygon points="50,55 58,50 58,60" /> <polygon points="66,55 58,50 58,60" />
                    <polygon points="38,70 46,65 46,75" /> <polygon points="54,70 46,65 46,75" />
                  </g>
                  
                  {/* Блик на пластиковом окне */}
                  <path d="M 40 45 L 60 75" stroke="#ffffff" strokeWidth="3" opacity="0.6" />
                  
                  {/* Итальянский флаг (декор) */}
                  <rect x="42" y="25" width="5" height="5" fill="#22c55e" stroke="none" />
                  <rect x="47" y="25" width="5" height="5" fill="#fff" stroke="none" />
                  <rect x="52" y="25" width="5" height="5" fill="#ef4444" stroke="none" />
                </svg>
              )
            },
            {
              id: 'herb-oil',
              title: 'Бутылка масла',
              desc: 'с плавающей веточкой травы или чесноком',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Бутылка стеклянная (контур) */}
                  <path d="M 35 85 L 65 85 L 65 45 C 65 35 55 30 55 20 L 55 10 L 45 10 L 45 20 C 45 30 35 35 35 45 Z" fill="#fef3c7" stroke="#d97706" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Уровень масла */}
                  <path d="M 35 45 Q 50 48 65 45 L 65 85 L 35 85 Z" fill="#fde047" stroke="none" opacity="0.8" />
                  
                  {/* Веточка розмарина/тимьяна внутри */}
                  <path d="M 45 80 Q 55 60 48 45" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 48 75 L 53 72 M 50 68 L 45 65 M 52 60 L 57 58 M 51 52 L 46 50 M 50 48 L 54 45" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Долька чеснока */}
                  <path d="M 55 80 C 62 82 65 75 55 70 C 50 75 52 82 55 80 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
                  
                  {/* Пробка */}
                  <rect x="46" y="5" width="8" height="6" rx="1" fill="#b45309" stroke="#78350f" strokeWidth="2" />
                  
                  {/* Блик на стекле */}
                  <path d="M 40 45 L 40 75" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
                </svg>
              )
            },
            {
              id: 'flour-sack',
              title: 'Мешок муки',
              desc: 'весом больше 5 килограммов',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Бумажный мешок */}
                  <path d="M 25 85 L 75 85 L 80 30 L 70 15 L 30 15 L 20 30 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Завернутый верх */}
                  <polygon points="30,15 70,15 75,25 25,25" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="30" y1="20" x2="70" y2="20" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2" />
                  
                  {/* Складки на мешке */}
                  <path d="M 25 40 Q 35 60 30 85" stroke="#cbd5e1" strokeWidth="3" fill="none" />
                  <path d="M 75 40 Q 65 60 70 85" stroke="#cbd5e1" strokeWidth="3" fill="none" />
                  
                  {/* Крупная надпись "5 КГ" и колосок */}
                  <path d="M 45 40 L 40 40 L 40 48 L 45 48 C 50 48 50 56 45 56 L 38 56" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 55 40 L 55 56 M 55 40 L 62 40 M 55 48 L 60 48" stroke="#1e3a8a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Колосок пшеницы */}
                  <path d="M 50 80 Q 55 70 45 62" stroke="#d97706" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M 48 75 L 53 72 M 49 70 L 54 67 M 47 65 L 52 62 M 46 62 L 50 59" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'cereal-mascot',
              title: 'Сухие завтраки',
              desc: 'коробка с мультяшным героем',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Коробка */}
                  <rect x="25" y="15" width="50" height="70" rx="3" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" />
                  
                  {/* Логотип-облачко */}
                  <path d="M 35 30 C 35 25 45 25 50 25 C 55 25 65 25 65 30 C 70 35 60 40 50 40 C 40 40 30 35 35 30 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                  
                  {/* Миска с завтраком */}
                  <path d="M 35 65 C 35 80 65 80 65 65 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
                  <ellipse cx="50" cy="65" rx="15" ry="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" /> {/* Молоко */}
                  {/* Шарики */}
                  <circle cx="45" cy="64" r="3" fill="#a855f7" stroke="none" />
                  <circle cx="50" cy="66" r="3" fill="#facc15" stroke="none" />
                  <circle cx="55" cy="63" r="3" fill="#22c55e" stroke="none" />
                  <circle cx="48" cy="62" r="3" fill="#f97316" stroke="none" />
                  
                  {/* Мультяшный медведь (Герой) */}
                  <circle cx="50" cy="48" r="8" fill="#d97706" stroke="#92400e" strokeWidth="2" />
                  <circle cx="43" cy="43" r="4" fill="#d97706" stroke="#92400e" strokeWidth="2" />
                  <circle cx="57" cy="43" r="4" fill="#d97706" stroke="#92400e" strokeWidth="2" />
                  <circle cx="47" cy="47" r="1.5" fill="#1f2937" stroke="none" />
                  <circle cx="53" cy="47" r="1.5" fill="#1f2937" stroke="none" />
                  <ellipse cx="50" cy="51" rx="3" ry="2" fill="#fef3c7" stroke="none" />
                  <circle cx="50" cy="50" r="1" fill="#1f2937" stroke="none" />
                  
                  {/* Блик на коробке */}
                  <path d="M 30 20 L 30 80" stroke="#fca5a5" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'layered-jar',
              title: 'Стеклянная банка',
              desc: 'сквозь которую видны красивые слои',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Крышка (металлическая) */}
                  <rect x="35" y="15" width="30" height="10" rx="2" fill="#cbd5e1" stroke="#475569" strokeWidth="3" />
                  <line x1="40" y1="18" x2="40" y2="22" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="45" y1="18" x2="45" y2="22" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="55" y1="18" x2="55" y2="22" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Стеклянная банка (контур) */}
                  <path d="M 40 25 L 30 35 L 30 80 C 30 85 70 85 70 80 L 70 35 L 60 25 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Слои специй/варенья */}
                  <path d="M 32 78 C 32 82 68 82 68 78 L 68 65 L 32 65 Z" fill="#b45309" stroke="none" /> {/* Коричневый слой */}
                  <path d="M 32 65 L 68 65 L 68 50 L 32 50 Z" fill="#fcd34d" stroke="none" /> {/* Желтый слой */}
                  <path d="M 32 50 L 68 50 L 68 40 L 32 40 Z" fill="#ef4444" stroke="none" /> {/* Красный слой */}
                  <path d="M 32 40 L 68 40 L 63 32 L 37 32 Z" fill="#22c55e" stroke="none" /> {/* Зеленый слой */}
                  
                  {/* Текстура специй (точечки и линии) */}
                  <circle cx="40" cy="70" r="1.5" fill="#78350f" stroke="none" />
                  <circle cx="50" cy="75" r="1" fill="#78350f" stroke="none" />
                  <circle cx="60" cy="68" r="1.5" fill="#78350f" stroke="none" />
                  
                  <path d="M 35 55 L 45 60 L 55 55 L 65 60" fill="none" stroke="#d97706" strokeWidth="2" />
                  
                  <circle cx="45" cy="45" r="1.5" fill="#b91c1c" stroke="none" />
                  <circle cx="55" cy="45" r="1" fill="#b91c1c" stroke="none" />
                  
                  {/* Блик на стекле */}
                  <path d="M 35 40 L 35 70" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                </svg>
              )
            },
            {
              id: 'tea-house',
              title: 'Упаковка чая',
              desc: 'в форме домика или сундучка',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Коробка-домик (основание) */}
                  <polygon points="25,45 75,45 75,85 25,85" fill="#14b8a6" stroke="#0f766e" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Крыша */}
                  <polygon points="15,45 50,15 85,45" fill="#f43f5e" stroke="#be123c" strokeWidth="3" strokeLinejoin="round" />
                  <polygon points="50,15 85,45 75,45 50,25 25,45 15,45" fill="#e11d48" stroke="none" />
                  
                  {/* Дверца (окошко) */}
                  <path d="M 40 85 L 40 65 C 40 55 60 55 60 65 L 60 85" fill="#fef3c7" stroke="#b45309" strokeWidth="2" />
                  <line x1="50" y1="60" x2="50" y2="85" stroke="#b45309" strokeWidth="2" />
                  <line x1="40" y1="72" x2="60" y2="72" stroke="#b45309" strokeWidth="2" />
                  
                  {/* Чайный листик как логотип на крыше */}
                  <path d="M 50 35 C 45 35 45 25 50 25 C 55 25 55 35 50 35 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  
                  {/* Узоры (окошки по бокам) */}
                  <rect x="30" y="55" width="5" height="10" fill="#fff" stroke="#0f766e" strokeWidth="1.5" />
                  <rect x="65" y="55" width="5" height="10" fill="#fff" stroke="#0f766e" strokeWidth="1.5" />
                </svg>
              )
            },
            {
              id: 'spicy-chocolate',
              title: 'Шоколадка',
              desc: 'с самым необычным вкусом',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Плитка шоколада */}
                  <rect x="25" y="15" width="50" height="70" rx="2" fill="#451a03" stroke="#290f02" strokeWidth="3" />
                  
                  {/* Кубики (дольки) */}
                  <rect x="30" y="20" width="18" height="18" rx="2" fill="#78350f" stroke="#290f02" strokeWidth="2" />
                  <rect x="52" y="20" width="18" height="18" rx="2" fill="#78350f" stroke="#290f02" strokeWidth="2" />
                  <rect x="30" y="42" width="18" height="18" rx="2" fill="#78350f" stroke="#290f02" strokeWidth="2" />
                  <rect x="52" y="42" width="18" height="18" rx="2" fill="#78350f" stroke="#290f02" strokeWidth="2" />
                  
                  {/* Вкрапления (Перец чили и соль) */}
                  <circle cx="35" cy="25" r="1.5" fill="#ef4444" stroke="none" />
                  <circle cx="42" cy="30" r="1.5" fill="#f8fafc" stroke="none" />
                  <circle cx="60" cy="25" r="1.5" fill="#f8fafc" stroke="none" />
                  <circle cx="65" cy="32" r="1.5" fill="#ef4444" stroke="none" />
                  <circle cx="38" cy="50" r="1.5" fill="#ef4444" stroke="none" />
                  <circle cx="58" cy="52" r="1.5" fill="#f8fafc" stroke="none" />
                  
                  {/* Обертка (наполовину снята) */}
                  <path d="M 20 60 L 80 60 L 75 90 L 25 90 Z" fill="#ec4899" stroke="#be185d" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 20 60 Q 30 50 40 60 Q 50 70 60 60 Q 70 50 80 60" fill="none" stroke="#be185d" strokeWidth="3" />
                  
                  {/* Фольга */}
                  <path d="M 23 55 L 77 55 L 75 60 L 25 60 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 25 60 L 30 45 L 35 60 L 45 48 L 55 60 L 65 45 L 75 60" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Этикетка/Бренд */}
                  <rect x="35" y="70" width="30" height="10" fill="#fff" stroke="#be185d" strokeWidth="2" />
                  <line x1="40" y1="75" x2="60" y2="75" stroke="#1f2937" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'bread-bag',
              title: 'Бумажный пакет',
              desc: 'из которого вкусно пахнет хлебом',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Багет/Хлеб выглядывает */}
                  <ellipse cx="60" cy="40" rx="15" ry="35" fill="#fcd34d" stroke="#b45309" strokeWidth="3" transform="rotate(20 60 40)" />
                  <path d="M 52 20 Q 60 25 60 30" fill="none" stroke="#b45309" strokeWidth="2" />
                  <path d="M 60 35 Q 68 40 68 45" fill="none" stroke="#b45309" strokeWidth="2" />
                  
                  {/* Бумажный пакет (Крафт) */}
                  <path d="M 25 85 L 75 85 L 85 45 L 20 45 Z" fill="#d97706" stroke="#92400e" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Зубчатый край пакета */}
                  <path d="M 20 45 L 25 40 L 30 45 L 35 40 L 40 45 L 45 40 L 50 45 L 55 40 L 60 45 L 65 40 L 70 45 L 75 40 L 80 45 L 85 40 L 85 45" fill="none" stroke="#92400e" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Складки пакета */}
                  <line x1="35" y1="45" x2="30" y2="85" stroke="#b45309" strokeWidth="2" />
                  <line x1="70" y1="45" x2="70" y2="85" stroke="#b45309" strokeWidth="2" />
                  
                  {/* Аромат (Волнистые линии пара) */}
                  <path d="M 35 25 Q 40 15 35 5" fill="none" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
                  <path d="M 75 30 Q 85 20 75 10" fill="none" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
                  <path d="M 55 15 Q 60 5 55 -5" fill="none" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
                </svg>
              )
            },
            {
              id: 'bright-bottle',
              title: 'Стеклянная бутылка',
              desc: 'с напитком и яркой этикеткой',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Силуэт бутылки (стекло) */}
                  <path d="M 35 85 L 65 85 L 65 50 C 65 35 55 30 55 20 L 55 10 L 45 10 L 45 20 C 45 30 35 35 35 50 Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="3" strokeLinejoin="round" opacity="0.9" />
                  
                  {/* Напиток внутри (Газировка) */}
                  <path d="M 35 50 C 35 35 45 35 45 25 L 55 25 C 55 35 65 35 65 50 L 65 85 L 35 85 Z" fill="#0ea5e9" stroke="none" opacity="0.6" />
                  
                  {/* Пузырьки газа */}
                  <circle cx="45" cy="75" r="2" fill="#fff" stroke="none" />
                  <circle cx="55" cy="65" r="1.5" fill="#fff" stroke="none" />
                  <circle cx="40" cy="55" r="1.5" fill="#fff" stroke="none" />
                  <circle cx="50" cy="45" r="2" fill="#fff" stroke="none" />
                  <circle cx="48" cy="30" r="1" fill="#fff" stroke="none" />
                  
                  {/* Яркая неоновая этикетка */}
                  <rect x="33" y="55" width="34" height="20" fill="#f43f5e" stroke="#be123c" strokeWidth="2" />
                  <circle cx="50" cy="65" r="6" fill="#fde047" stroke="none" />
                  <path d="M 38 65 L 44 65 M 56 65 L 62 65" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Металлическая крышка */}
                  <rect x="43" y="5" width="14" height="6" rx="1" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
                  
                  {/* Блик на стекле */}
                  <path d="M 38 35 C 38 45 38 75 38 80" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                </svg>
              )
            }
          ]
        },
		{
          id: 'ch5-signs',
          title: '🏷 Знаки, буквы и цифры',
          subtitle: 'Скидки и навигация',
          theme: 'purple',
          items: [
            {
              id: 'promo-price',
              title: 'Желтый или красный ценник',
              desc: 'акция!',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Пластиковый держатель на полке */}
                  <rect x="15" y="10" width="70" height="15" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
                  <path d="M 15 25 L 85 25 L 80 35 L 20 35 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
                  
                  {/* Яркий акционный ценник */}
                  <rect x="25" y="30" width="50" height="60" fill="#fef08a" stroke="#ca8a04" strokeWidth="3" />
                  <rect x="30" y="35" width="40" height="50" fill="#fde047" stroke="none" />
                  
                  {/* Зачеркнутая старая цена */}
                  <line x1="35" y1="45" x2="45" y2="45" stroke="#1f2937" strokeWidth="2" />
                  <line x1="32" y1="48" x2="48" y2="42" stroke="#ef4444" strokeWidth="2" /> {/* Перечеркивание */}
                  
                  {/* Новая крупная цена */}
                  <path d="M 40 75 L 40 55 L 55 55 L 55 65 L 40 65" fill="none" stroke="#b91c1c" strokeWidth="5" strokeLinejoin="miter" />
                  <circle cx="65" cy="60" r="4" fill="none" stroke="#b91c1c" strokeWidth="3" />
                  <circle cx="65" cy="70" r="4" fill="none" stroke="#b91c1c" strokeWidth="3" />
                  
                  {/* Звезда / Взрыв "Акция" */}
                  <path d="M 75 30 L 85 25 L 80 35 L 90 40 L 78 45 L 80 55 L 70 50 L 60 55 L 65 45 L 55 35 L 65 32 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="72" cy="40" r="2" fill="#fff" stroke="none" />
                </svg>
              )
            },
            {
              id: 'bogo-sign',
              title: 'Табличка «1+1»',
              desc: 'или «Три по цене двух»',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Подвесы с потолка */}
                  <line x1="30" y1="5" x2="30" y2="25" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4 2" />
                  <line x1="70" y1="5" x2="70" y2="25" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4 2" />
                  
                  {/* Табличка */}
                  <rect x="15" y="25" width="70" height="50" rx="4" fill="#ef4444" stroke="#b91c1c" strokeWidth="4" />
                  <rect x="20" y="30" width="60" height="40" rx="2" fill="none" stroke="#fca5a5" strokeWidth="2" />
                  
                  {/* Цифра 1 */}
                  <path d="M 25 45 L 35 40 L 35 65" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="miter" />
                  {/* Плюс */}
                  <line x1="42" y1="52" x2="58" y2="52" stroke="#fde047" strokeWidth="6" strokeLinecap="round" />
                  <line x1="50" y1="44" x2="50" y2="60" stroke="#fde047" strokeWidth="6" strokeLinecap="round" />
                  {/* Цифра 1 */}
                  <path d="M 60 45 L 70 40 L 70 65" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="miter" />
                  
                  {/* Блики и украшения */}
                  <circle cx="25" cy="35" r="2" fill="#fca5a5" stroke="none" />
                  <circle cx="75" cy="65" r="2" fill="#fca5a5" stroke="none" />
                </svg>
              )
            },
            {
              id: 'discount-sticker',
              title: 'Стикер «Скидка -50%»',
              desc: 'или «Уценка»',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Товар (коробка на фоне) */}
                  <rect x="20" y="20" width="60" height="60" rx="5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" />
                  <path d="M 30 35 L 70 35 M 30 45 L 50 45" stroke="#cbd5e1" strokeWidth="2" />
                  
                  {/* Яркий круглый стикер */}
                  <circle cx="70" cy="70" r="25" fill="#facc15" stroke="#ca8a04" strokeWidth="3" />
                  <circle cx="70" cy="70" r="20" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" />
                  
                  {/* Надпись -50% */}
                  <line x1="55" y1="70" x2="62" y2="70" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
                  {/* 5 */}
                  <path d="M 72 60 L 65 60 L 65 68 C 65 68 72 65 72 72 C 72 78 65 78 65 78" fill="none" stroke="#b91c1c" strokeWidth="3" strokeLinecap="round" />
                  {/* 0 */}
                  <ellipse cx="80" cy="69" rx="3" ry="8" fill="none" stroke="#b91c1c" strokeWidth="3" />
                </svg>
              )
            },
            {
              id: 'long-barcode',
              title: 'Штрих-код',
              desc: 'на товаре, который очень длинный',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Белая наклейка со штрихкодом */}
                  <rect x="15" y="25" width="70" height="50" fill="#ffffff" stroke="#94a3b8" strokeWidth="3" />
                  
                  {/* Полосы штрих-кода разной толщины */}
                  <line x1="25" y1="35" x2="25" y2="60" stroke="#1f2937" strokeWidth="2" />
                  <line x1="30" y1="35" x2="30" y2="60" stroke="#1f2937" strokeWidth="4" />
                  <line x1="38" y1="35" x2="38" y2="60" stroke="#1f2937" strokeWidth="1" />
                  <line x1="42" y1="35" x2="42" y2="60" stroke="#1f2937" strokeWidth="3" />
                  <line x1="50" y1="35" x2="50" y2="60" stroke="#1f2937" strokeWidth="2" />
                  <line x1="55" y1="35" x2="55" y2="60" stroke="#1f2937" strokeWidth="5" />
                  <line x1="64" y1="35" x2="64" y2="60" stroke="#1f2937" strokeWidth="1" />
                  <line x1="68" y1="35" x2="68" y2="60" stroke="#1f2937" strokeWidth="3" />
                  <line x1="75" y1="35" x2="75" y2="60" stroke="#1f2937" strokeWidth="2" />
                  
                  {/* Длинные направляющие полосы (по краям и в центре) */}
                  <line x1="20" y1="35" x2="20" y2="65" stroke="#1f2937" strokeWidth="2" />
                  <line x1="46" y1="35" x2="46" y2="65" stroke="#1f2937" strokeWidth="2" />
                  <line x1="80" y1="35" x2="80" y2="65" stroke="#1f2937" strokeWidth="2" />
                  
                  {/* Цифры внизу */}
                  <circle cx="28" cy="65" r="1" fill="#1f2937" stroke="none" />
                  <circle cx="35" cy="65" r="1" fill="#1f2937" stroke="none" />
                  <circle cx="41" cy="65" r="1" fill="#1f2937" stroke="none" />
                  <circle cx="53" cy="65" r="1" fill="#1f2937" stroke="none" />
                  <circle cx="60" cy="65" r="1" fill="#1f2937" stroke="none" />
                  <circle cx="66" cy="65" r="1" fill="#1f2937" stroke="none" />
                  <circle cx="73" cy="65" r="1" fill="#1f2937" stroke="none" />
                </svg>
              )
            },
            {
              id: 'expiry-date',
              title: 'Срок годности',
              desc: 'который заканчивается завтра (или сегодня)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Крышка молочной бутылки или йогурта */}
                  <ellipse cx="50" cy="40" rx="35" ry="15" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="3" />
                  <path d="M 15 40 L 15 50 C 15 60 85 60 85 50 L 85 40" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="3" />
                  <rect x="25" y="55" width="50" height="35" fill="#38bdf8" stroke="#0284c7" strokeWidth="3" />
                  <path d="M 15 50 C 15 60 85 60 85 50" fill="none" stroke="#94a3b8" strokeWidth="3" />
                  
                  {/* Оттиск даты (Матричный принтер) */}
                  <g stroke="#1f2937" strokeWidth="1.5" strokeDasharray="1 1">
                    {/* E X P */}
                    <path d="M 25 35 L 30 35 M 25 38 L 28 38 M 25 41 L 30 41 M 25 35 L 25 41" />
                    <path d="M 33 35 L 37 41 M 37 35 L 33 41" />
                    <path d="M 40 41 L 40 35 L 45 35 C 47 35 47 38 45 38 L 40 38" />
                    {/* : */}
                    <circle cx="48" cy="36" r="0.5" fill="#1f2937" stroke="none" />
                    <circle cx="48" cy="40" r="0.5" fill="#1f2937" stroke="none" />
                    {/* Дата (крупно) */}
                    <path d="M 55 35 L 55 45 M 62 35 L 62 45 M 69 35 L 69 45 M 76 35 L 76 45" strokeWidth="2" strokeDasharray="none" />
                  </g>
                  
                  {/* Красный маркер скидки из-за срока */}
                  <path d="M 65 70 L 85 50 L 95 60 L 75 80 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                  <line x1="72" y1="68" x2="88" y2="68" stroke="#fff" strokeWidth="2" transform="rotate(-45 80 65)" />
                </svg>
              )
            },
            {
              id: 'cardboard-figure',
              title: 'Рекламный картонный человек',
              desc: 'ростовая фигура в полный рост',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Картонная опора сзади */}
                  <polygon points="50,90 80,90 70,50 50,50" fill="#d97706" stroke="#b45309" strokeWidth="2" strokeLinejoin="round" />
                  <line x1="60" y1="50" x2="65" y2="90" stroke="#b45309" strokeWidth="2" />
                  
                  {/* Силуэт картонного человека */}
                  <path d="M 45 10 C 35 10 35 25 45 25 C 55 25 55 10 45 10 Z" fill="#fca5a5" stroke="#1f2937" strokeWidth="2" /> {/* Голова */}
                  <path d="M 30 45 L 35 30 L 55 30 L 60 45 Z" fill="#3b82f6" stroke="#1f2937" strokeWidth="2" strokeLinejoin="round" /> {/* Тело */}
                  <path d="M 35 30 L 20 40 L 25 45 L 32 38" fill="#60a5fa" stroke="#1f2937" strokeWidth="2" strokeLinejoin="round" /> {/* Рука */}
                  <path d="M 55 30 L 70 20 L 75 25 L 60 38" fill="#60a5fa" stroke="#1f2937" strokeWidth="2" strokeLinejoin="round" /> {/* Рука */}
                  <path d="M 35 45 L 35 85 L 43 85 L 45 60 L 47 85 L 55 85 L 55 45 Z" fill="#1e3a8a" stroke="#1f2937" strokeWidth="2" strokeLinejoin="round" /> {/* Ноги */}
                  
                  {/* Картонный край фигурки (белая окантовка) */}
                  <path d="M 45 5 C 30 5 30 30 15 40 L 20 50 L 30 40 L 30 90 L 60 90 L 60 40 L 80 30 L 75 15 L 60 25 C 60 5 45 5 45 5 Z" fill="none" stroke="#fff" strokeWidth="3" opacity="0.8" />
                  <path d="M 45 5 C 30 5 30 30 15 40 L 20 50 L 30 40 L 30 90 L 60 90 L 60 40 L 80 30 L 75 15 L 60 25 C 60 5 45 5 45 5 Z" fill="none" stroke="#94a3b8" strokeWidth="1" />
                </svg>
              )
            },
            {
              id: 'wet-floor-sign',
              title: 'Знак «Осторожно, мокрый пол»',
              desc: 'желтый треугольник',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Лужа на полу */}
                  <ellipse cx="50" cy="85" rx="30" ry="8" fill="#bae6fd" stroke="#38bdf8" strokeWidth="2" />
                  <path d="M 35 85 Q 50 88 65 85" stroke="#fff" strokeWidth="2" fill="none" />
                  
                  {/* Желтый складной знак (Раскладушка) */}
                  <polygon points="50,15 25,80 75,80" fill="#facc15" stroke="#ca8a04" strokeWidth="4" strokeLinejoin="round" />
                  <polygon points="50,15 25,80 30,80 50,25 70,80 75,80" fill="#fde047" stroke="none" />
                  
                  {/* Задняя ножка */}
                  <line x1="50" y1="20" x2="65" y2="70" stroke="#ca8a04" strokeWidth="4" />
                  
                  {/* Красный предупреждающий треугольник */}
                  <polygon points="50,30 35,60 65,60" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinejoin="round" />
                  
                  {/* Иконка падающего человечка */}
                  <circle cx="55" cy="42" r="3" fill="#1f2937" stroke="none" />
                  <path d="M 50 55 L 45 47 L 53 47 Z" fill="#1f2937" stroke="none" />
                  <path d="M 45 47 L 38 40 M 53 47 L 60 52 M 50 55 L 43 55 L 40 60" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )
            },
            {
              id: 'eco-sticker',
              title: 'Наклейка «Эко» или «Био»',
              desc: 'на упаковке',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Текстура эко-упаковки (крафт) */}
                  <rect x="15" y="15" width="70" height="70" rx="5" fill="#d97706" stroke="#92400e" strokeWidth="3" />
                  <line x1="25" y1="25" x2="45" y2="25" stroke="#b45309" strokeWidth="2" />
                  <line x1="60" y1="80" x2="80" y2="80" stroke="#b45309" strokeWidth="2" />
                  
                  {/* Эко стикер (зеленый круг) */}
                  <circle cx="50" cy="50" r="25" fill="#ffffff" stroke="#16a34a" strokeWidth="4" />
                  <circle cx="50" cy="50" r="21" fill="#dcfce7" stroke="none" />
                  
                  {/* Листочек внутри */}
                  <path d="M 50 65 C 30 65 35 40 50 35 C 65 40 70 65 50 65 Z" fill="#22c55e" stroke="#15803d" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 50 65 L 50 35" stroke="#15803d" strokeWidth="2" />
                  <path d="M 50 55 C 45 50 45 50 45 50" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 50 45 C 55 40 55 40 55 40" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Текст BIO (абстрактно) */}
                  <path d="M 35 70 Q 50 80 65 70" fill="none" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'receipt-tape',
              title: 'Чековая лента',
              desc: 'которая торчит из кассы',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кассовый аппарат (край) */}
                  <rect x="20" y="70" width="60" height="25" rx="3" fill="#374151" stroke="#111827" strokeWidth="4" />
                  <line x1="25" y1="80" x2="75" y2="80" stroke="#4b5563" strokeWidth="2" />
                  
                  {/* Прорезь для чека */}
                  <rect x="35" y="65" width="30" height="5" fill="#111827" stroke="none" />
                  
                  {/* Длинный волнистый чек */}
                  <path d="M 40 65 Q 25 45 50 35 T 60 10" fill="none" stroke="#f8fafc" strokeWidth="20" strokeLinecap="butt" />
                  <path d="M 40 65 Q 25 45 50 35 T 60 10" fill="none" stroke="#cbd5e1" strokeWidth="22" strokeLinecap="butt" style={{ mixBlendMode: 'multiply' }} opacity="0.5" />
                  
                  {/* Строки текста на чеке */}
                  <path d="M 41 55 Q 31 43 45 37" fill="none" stroke="#1f2937" strokeWidth="2" strokeDasharray="3 2" />
                  <path d="M 43 50 Q 33 40 48 34" fill="none" stroke="#1f2937" strokeWidth="2" strokeDasharray="2 3" />
                  <path d="M 46 42 Q 40 33 53 28" fill="none" stroke="#1f2937" strokeWidth="2" strokeDasharray="4 2" />
                  <path d="M 49 35 Q 47 28 56 22" fill="none" stroke="#1f2937" strokeWidth="2" strokeDasharray="2 2" />
                  
                  {/* Итого (Жирная линия) */}
                  <path d="M 54 22 Q 54 18 60 12" fill="none" stroke="#000000" strokeWidth="3" />
                </svg>
              )
            },
            {
              id: 'control-scales-sign',
              title: 'Надпись «Контрольные весы»',
              desc: 'и сами весы под ней',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Табличка на стене */}
                  <rect x="25" y="10" width="50" height="25" rx="2" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="3" />
                  <rect x="28" y="13" width="44" height="19" fill="none" stroke="#fff" strokeWidth="1" />
                  
                  {/* Текст на табличке */}
                  <line x1="32" y1="18" x2="68" y2="18" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                  <line x1="38" y1="26" x2="62" y2="26" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Стойка/крепление */}
                  <line x1="50" y1="35" x2="50" y2="60" stroke="#94a3b8" strokeWidth="4" />
                  
                  {/* Контрольные весы */}
                  <path d="M 35 60 L 65 60 L 75 90 L 25 90 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 40 75 L 60 75 L 65 85 L 35 85 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Шкала весов (стрелочная) */}
                  <path d="M 40 85 C 40 75 60 75 60 85" fill="none" stroke="#475569" strokeWidth="2" />
                  <line x1="50" y1="85" x2="52" y2="76" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Чаша весов сверху */}
                  <path d="M 30 55 L 70 55 C 70 65 30 65 30 55 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                </svg>
              )
            }
          ]
        },
		{
          id: 'ch5-people',
          title: '👥 Люди и действия',
          subtitle: 'Суета вокруг',
          theme: 'rose',
          items: [
            {
              id: 'long-list',
              title: 'Длинный список',
              desc: 'покупатель с огромным списком покупок',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Рука, держащая список */}
                  <path d="M 10 40 L 25 35 L 35 45" fill="none" stroke="#fca5a5" strokeWidth="6" strokeLinecap="round" />
                  <circle cx="35" cy="45" r="4" fill="#fca5a5" stroke="none" />
                  
                  {/* Длинный список-свиток */}
                  <path d="M 30 30 L 65 20 L 75 45 L 60 70 L 50 85 L 35 90 L 40 75 L 35 60 L 45 40 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 65 20 C 70 15 75 25 75 45" fill="none" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Строки в списке */}
                  <line x1="40" y1="35" x2="60" y2="30" stroke="#475569" strokeWidth="2" />
                  <line x1="42" y1="42" x2="62" y2="37" stroke="#475569" strokeWidth="2" />
                  <line x1="40" y1="48" x2="55" y2="44" stroke="#475569" strokeWidth="2" />
                  <line x1="38" y1="55" x2="58" y2="52" stroke="#475569" strokeWidth="2" />
                  <line x1="42" y1="62" x2="55" y2="60" stroke="#475569" strokeWidth="2" />
                  <line x1="45" y1="70" x2="58" y2="68" stroke="#475569" strokeWidth="2" />
                  <line x1="40" y1="78" x2="50" y2="76" stroke="#475569" strokeWidth="2" />
                  
                  {/* Галочки (выполненные пункты) */}
                  <path d="M 33 36 L 36 39 L 40 32" stroke="#22c55e" strokeWidth="2" />
                  <path d="M 35 44 L 38 47 L 42 40" stroke="#22c55e" strokeWidth="2" />
                  <path d="M 31 56 L 34 59 L 38 52" stroke="#22c55e" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'choosing-melon',
              title: 'Трудный выбор',
              desc: 'человек, который долго выбирает арбуз',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Гора арбузов (задний план) */}
                  <circle cx="30" cy="70" r="15" fill="#16a34a" stroke="#14532d" strokeWidth="2" />
                  <circle cx="70" cy="70" r="15" fill="#16a34a" stroke="#14532d" strokeWidth="2" />
                  <circle cx="50" cy="65" r="18" fill="#22c55e" stroke="#14532d" strokeWidth="3" />
                  
                  {/* Полоски на главном арбузе */}
                  <path d="M 36 55 Q 50 65 64 55" fill="none" stroke="#14532d" strokeWidth="3" />
                  <path d="M 33 65 Q 50 75 67 65" fill="none" stroke="#14532d" strokeWidth="3" />
                  <path d="M 35 75 Q 50 82 65 75" fill="none" stroke="#14532d" strokeWidth="3" />
                  
                  {/* Рука, стучащая по арбузу */}
                  <path d="M 45 20 L 45 35 C 45 40 55 40 55 35 L 55 25" fill="#fca5a5" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 45 35 C 45 45 60 45 60 35 L 60 25" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Звук стука (вибрация) */}
                  <path d="M 30 45 Q 25 40 30 35" fill="none" stroke="#1f2937" strokeWidth="2" />
                  <path d="M 70 45 Q 75 40 70 35" fill="none" stroke="#1f2937" strokeWidth="2" />
                  <path d="M 40 40 L 45 45 M 60 40 L 55 45" stroke="#1f2937" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'security-guard',
              title: 'Охранник',
              desc: 'внимательно смотрит в монитор',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Силуэт охранника (со спины) */}
                  <path d="M 35 100 L 35 70 C 35 60 65 60 65 70 L 65 100" fill="#1e3a8a" stroke="#1e3a8a" strokeWidth="2" />
                  <circle cx="50" cy="55" r="12" fill="#1f2937" stroke="#111827" strokeWidth="2" />
                  <rect x="35" y="45" width="30" height="8" rx="2" fill="#111827" stroke="none" /> {/* Фуражка сзади */}
                  
                  {/* Стена с мониторами (видеонаблюдение) */}
                  <rect x="15" y="10" width="30" height="20" rx="1" fill="#0f172a" stroke="#475569" strokeWidth="2" />
                  <rect x="55" y="10" width="30" height="20" rx="1" fill="#0f172a" stroke="#475569" strokeWidth="2" />
                  
                  {/* Изображения на экранах (зеленоватое свечение) */}
                  <rect x="17" y="12" width="26" height="16" fill="#064e3b" stroke="none" />
                  <rect x="57" y="12" width="26" height="16" fill="#064e3b" stroke="none" />
                  
                  {/* Силуэты в камерах */}
                  <circle cx="30" cy="20" r="3" fill="#34d399" stroke="none" />
                  <path d="M 25 25 L 35 25" stroke="#34d399" strokeWidth="2" />
                  
                  <circle cx="70" cy="18" r="2" fill="#34d399" stroke="none" />
                  <circle cx="65" cy="22" r="2" fill="#34d399" stroke="none" />
                  <path d="M 68 25 L 75 25 M 62 25 L 68 25" stroke="#34d399" strokeWidth="2" />
                  
                  {/* Блики от экранов на охраннике */}
                  <path d="M 40 55 C 40 50 60 50 60 55" fill="none" stroke="#34d399" strokeWidth="2" opacity="0.6" />
                </svg>
              )
            },
            {
              id: 'baker',
              title: 'Пекарь/Повар',
              desc: 'продавец в высокой белой шляпе',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Высокая поварская шляпа (колпак) */}
                  <path d="M 40 40 L 40 15 C 35 15 35 5 45 5 C 45 0 55 0 55 5 C 65 5 65 15 60 15 L 60 40 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="40" y1="35" x2="60" y2="35" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Голова и лицо */}
                  <circle cx="50" cy="50" r="10" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
                  <circle cx="46" cy="48" r="1" fill="#7f1d1d" stroke="none" />
                  <circle cx="54" cy="48" r="1" fill="#7f1d1d" stroke="none" />
                  <path d="M 46 53 Q 50 56 54 53" fill="none" stroke="#7f1d1d" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Фартук и униформа */}
                  <path d="M 35 60 C 35 60 50 55 65 60 L 65 95 L 35 95 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="3" />
                  <line x1="50" y1="65" x2="50" y2="95" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Багет в руке */}
                  <ellipse cx="75" cy="75" rx="8" ry="25" fill="#fcd34d" stroke="#b45309" strokeWidth="3" transform="rotate(30 75 75)" />
                  <line x1="70" y1="65" x2="75" y2="60" stroke="#b45309" strokeWidth="2" />
                  <line x1="75" y1="75" x2="80" y2="70" stroke="#b45309" strokeWidth="2" />
                  <line x1="80" y1="85" x2="85" y2="80" stroke="#b45309" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'one-banana',
              title: 'Один банан',
              desc: 'человек, который взвешивает только один банан',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Весы */}
                  <path d="M 20 85 L 80 85 L 75 70 L 25 70 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                  <rect x="35" y="40" width="30" height="20" rx="2" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" />
                  <rect x="40" y="45" width="20" height="10" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
                  <path d="M 45 40 L 45 70 M 55 40 L 55 70" stroke="#94a3b8" strokeWidth="4" />
                  
                  {/* Единственный банан на огромной платформе */}
                  <path d="M 35 65 C 45 55 60 55 70 60 C 65 65 50 68 35 65 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 35 65 L 32 66" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" /> {/* Зеленый хвостик */}
                  
                  {/* Цифры на табло (маленький вес) */}
                  <path d="M 45 52 L 45 48 C 45 48 50 48 50 52 C 50 52 45 52 45 52" fill="none" stroke="#0ea5e9" strokeWidth="2" />
                  <path d="M 52 52 L 52 48 L 56 48 L 56 52 Z" fill="none" stroke="#0ea5e9" strokeWidth="2" />
                  <circle cx="58" cy="52" r="0.5" fill="#0ea5e9" stroke="none" />
                </svg>
              )
            },
            {
              id: 'kid-cart',
              title: 'Детская тележка',
              desc: 'малыш со своей крошечной тележкой',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Маленькая тележка */}
                  <path d="M 50 50 L 90 50 L 85 70 L 55 70 Z" fill="#f1f5f9" stroke="#3b82f6" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="60" y1="50" x2="60" y2="70" stroke="#93c5fd" strokeWidth="2" />
                  <line x1="70" y1="50" x2="70" y2="70" stroke="#93c5fd" strokeWidth="2" />
                  <line x1="80" y1="50" x2="80" y2="70" stroke="#93c5fd" strokeWidth="2" />
                  <path d="M 55 70 L 50 90 M 85 70 L 80 90" stroke="#475569" strokeWidth="4" />
                  <circle cx="50" cy="90" r="4" fill="#1f2937" stroke="none" />
                  <circle cx="80" cy="90" r="4" fill="#1f2937" stroke="none" />
                  <path d="M 50 50 L 40 40 L 45 35" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" /> {/* Ручка тележки */}
                  
                  {/* Ребенок */}
                  <circle cx="30" cy="35" r="10" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
                  <path d="M 20 50 C 20 50 35 45 40 40" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" /> {/* Рука тянется к ручке */}
                  <path d="M 20 45 L 20 90 M 35 45 L 35 90" fill="none" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" /> {/* Ноги */}
                  <rect x="15" y="45" width="25" height="25" rx="5" fill="#facc15" stroke="#ca8a04" strokeWidth="2" /> {/* Футболочка */}
                  
                  {/* Игрушка/Сладость в тележке */}
                  <circle cx="65" cy="60" r="6" fill="#a855f7" stroke="#7e22ce" strokeWidth="2" />
                  <rect x="75" y="55" width="8" height="12" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'pallet-jack',
              title: 'Рохля',
              desc: 'грузчик на гидравлической тележке',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Гидравлическая тележка (рохля) */}
                  <path d="M 15 80 L 75 80 L 75 75 L 15 75 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 75 80 L 85 80 L 85 55 L 75 55 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 85 55 L 95 40 L 90 35 L 80 50" fill="#1f2937" stroke="#000" strokeWidth="3" strokeLinejoin="round" /> {/* Ручка */}
                  
                  {/* Колеса */}
                  <circle cx="20" cy="85" r="4" fill="#4b5563" stroke="#1f2937" strokeWidth="2" />
                  <circle cx="80" cy="85" r="5" fill="#4b5563" stroke="#1f2937" strokeWidth="2" />
                  
                  {/* Коробки на рохле */}
                  <rect x="25" y="45" width="30" height="30" fill="#d97706" stroke="#92400e" strokeWidth="3" />
                  <line x1="40" y1="45" x2="40" y2="75" stroke="#92400e" strokeWidth="2" />
                  <rect x="40" y="25" width="25" height="20" fill="#b45309" stroke="#78350f" strokeWidth="3" />
                  
                  {/* Рука грузчика на ручке */}
                  <circle cx="92" cy="37" r="5" fill="#fca5a5" stroke="none" />
                  <path d="M 95 35 Q 100 50 95 65" fill="none" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" />
                  
                  {/* Линии движения */}
                  <line x1="5" y1="85" x2="15" y2="85" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="90" x2="20" y2="90" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'fast-cashier',
              title: 'Сверхбыстрый кассир',
              desc: 'кассир, который сканирует со скоростью света',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кассовый сканер */}
                  <rect x="15" y="65" width="30" height="15" rx="2" fill="#e2e8f0" stroke="#64748b" strokeWidth="3" />
                  <rect x="20" y="65" width="20" height="5" fill="#1e293b" stroke="none" />
                  
                  {/* Лазерные лучи */}
                  <path d="M 25 65 L 10 35 M 30 65 L 20 35 M 35 65 L 45 35 M 25 65 L 50 45" stroke="#ef4444" strokeWidth="2" opacity="0.8" style={{ filter: 'drop-shadow(0 0 2px #ef4444)' }} />
                  
                  {/* Рука со штрих-кодом (размыта в движении) */}
                  <rect x="40" y="30" width="25" height="15" rx="1" fill="#f8fafc" stroke="#475569" strokeWidth="2" transform="rotate(-15 40 30)" />
                  <line x1="45" y1="35" x2="60" y2="35" stroke="#1f2937" strokeWidth="3" transform="rotate(-15 40 30)" />
                  <line x1="45" y1="40" x2="60" y2="40" stroke="#1f2937" strokeWidth="2" transform="rotate(-15 40 30)" />
                  
                  <path d="M 60 20 L 75 40" stroke="#fca5a5" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 50 15 L 65 35" stroke="#fecaca" strokeWidth="6" strokeLinecap="round" opacity="0.6" /> {/* Эффект движения */}
                  <path d="M 70 25 L 85 45" stroke="#fecaca" strokeWidth="6" strokeLinecap="round" opacity="0.4" />
                  
                  {/* Звук «Пик!» */}
                  <path d="M 60 70 Q 70 60 80 70" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 65 75 Q 75 65 85 75" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'long-queue',
              title: 'Длинная очередь',
              desc: 'больше 5 человек на кассе',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кассовый аппарат слева */}
                  <rect x="5" y="40" width="15" height="40" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
                  <rect x="20" y="60" width="10" height="20" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
                  
                  {/* Очередь людей (уходящая вдаль, перспектива) */}
                  {/* Человек 1 */}
                  <circle cx="35" cy="45" r="7" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                  <path d="M 35 52 L 35 80" stroke="#b91c1c" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Человек 2 */}
                  <circle cx="50" cy="40" r="6" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
                  <path d="M 50 46 L 50 70" stroke="#1d4ed8" strokeWidth="5" strokeLinecap="round" />
                  
                  {/* Человек 3 */}
                  <circle cx="62" cy="36" r="5" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  <path d="M 62 41 L 62 60" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Человек 4 */}
                  <circle cx="72" cy="32" r="4" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
                  <path d="M 72 36 L 72 52" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Человек 5 */}
                  <circle cx="80" cy="28" r="3" fill="#a855f7" stroke="#7e22ce" strokeWidth="1" />
                  <path d="M 80 31 L 80 44" stroke="#7e22ce" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Человек 6 (совсем мелкий) */}
                  <circle cx="86" cy="25" r="2" fill="#64748b" stroke="none" />
                  <path d="M 86 27 L 86 38" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
                  
                  {/* Раздраженный вздох первого */}
                  <path d="M 25 35 Q 20 30 15 35" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'forgot-scale',
              title: 'Забыл взвесить!',
              desc: 'человек бежит обратно в отдел',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Бегущий человечек (динамичная поза) */}
                  <circle cx="65" cy="30" r="10" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
                  
                  {/* Туловище наклонено вперед (влево) */}
                  <path d="M 65 40 L 45 60" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Ноги бегут */}
                  <path d="M 45 60 L 30 65 L 20 80" fill="none" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 45 60 L 60 75 L 80 75" fill="none" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Руки */}
                  <path d="M 60 45 L 80 40 L 90 20" fill="none" stroke="#fca5a5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 55 50 L 30 45 L 15 35" fill="none" stroke="#fca5a5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Товар в руке (помидор или яблоко без ценника) */}
                  <circle cx="15" cy="35" r="6" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  
                  {/* Линии скорости (sweat/motion lines) */}
                  <line x1="85" y1="30" x2="95" y2="30" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                  <line x1="75" y1="20" x2="85" y2="15" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                  <line x1="60" y1="85" x2="80" y2="85" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Капля пота */}
                  <path d="M 52 25 C 50 20 55 20 55 25 C 55 30 52 30 52 25 Z" fill="#60a5fa" stroke="none" />
                </svg>
              )
            }
          ]
        }
      ]
    },
  {
      id: 'ch6',
      title: 'Дикий лес',
      emoji: '🌲',
      superTasks: [
        { id: 'ch6-st1', type: '🔊 Звук', text: 'Услышь кукушку и попробуй сосчитать, сколько раз она прокукует.' },
        { id: 'ch6-st2', type: '👃 Запах', text: 'Запах прелой листвы после дождя или аромат хвойной смолы.' },
        { id: 'ch6-st3', type: '🖐️ Текстура', text: 'Сравни на ощупь кору дуба (грубая) и березы (гладкая).' },
        { id: 'ch6-st4', type: '🎨 Искусство', text: 'Сложи на земле фигурку или узор из шишек и палочек.' },
        { id: 'ch6-st5', type: '🏆 Подвиг', text: 'Найди и забери с собой из леса один мусор (пластиковую бутылку или фантик).' }
      ],
      sections: [
        {
          id: 'ch6-trees',
          title: '🌲 Лесные великаны',
          subtitle: 'Деревья и кустарники',
          theme: 'green',
          items: [
            {
              id: 'twin-tree',
              title: 'Дерево-двойняшки',
              desc: 'два ствола, растущие из одного корня',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Крона дерева */}
                  <path d="M 50 10 C 20 10 10 30 25 45 C 10 55 20 70 40 65 C 50 75 80 75 85 55 C 95 45 80 20 65 25 C 60 10 30 10 50 10 Z" fill="#22c55e" stroke="#15803d" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 40 25 Q 50 15 60 30" stroke="#15803d" strokeWidth="2" opacity="0.5" />
                  <path d="M 30 45 Q 40 35 50 50" stroke="#15803d" strokeWidth="2" opacity="0.5" />
                  
                  {/* Два ствола */}
                  <path d="M 35 45 C 35 60 45 70 45 90" fill="none" stroke="#78350f" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 65 45 C 65 60 55 70 55 90" fill="none" stroke="#78350f" strokeWidth="8" strokeLinecap="round" />
                  
                  {/* Общий корень */}
                  <path d="M 40 90 C 35 95 30 95 25 95" fill="none" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 60 90 C 65 95 70 95 75 95" fill="none" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 45 90 C 45 95 50 98 55 90" fill="none" stroke="#78350f" strokeWidth="6" />
                  
                  {/* Трава у корней */}
                  <path d="M 20 95 L 30 85 M 70 85 L 80 95 M 48 95 L 50 88 L 52 95" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'fallen-giant',
              title: 'Поваленный великан',
              desc: 'старое дерево, которое стало домом для растений',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Земля/трава */}
                  <line x1="5" y1="85" x2="95" y2="85" stroke="#15803d" strokeWidth="4" />
                  
                  {/* Поваленный ствол */}
                  <path d="M 10 75 L 80 65 L 85 85 L 15 85 Z" fill="#78350f" stroke="#451a03" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 10 75 Q 5 80 15 85" fill="none" stroke="#451a03" strokeWidth="3" />
                  
                  {/* Оторванные корни */}
                  <path d="M 80 65 Q 90 55 95 45 M 82 75 Q 95 70 98 60 M 85 85 Q 95 90 95 95" fill="none" stroke="#451a03" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Кора (фактура) */}
                  <line x1="20" y1="78" x2="50" y2="73" stroke="#451a03" strokeWidth="2" />
                  <line x1="30" y1="82" x2="60" y2="78" stroke="#451a03" strokeWidth="2" />
                  <line x1="45" y1="70" x2="70" y2="67" stroke="#451a03" strokeWidth="2" />
                  
                  {/* Грибы и мох на стволе */}
                  <path d="M 30 70 C 30 65 40 65 40 70" fill="#fca5a5" stroke="#b91c1c" strokeWidth="2" /> {/* Гриб 1 */}
                  <path d="M 35 70 L 35 76" stroke="#fef08a" strokeWidth="3" />
                  
                  <path d="M 50 67 C 50 63 58 63 58 67" fill="#fca5a5" stroke="#b91c1c" strokeWidth="2" /> {/* Гриб 2 */}
                  <path d="M 54 67 L 54 74" stroke="#fef08a" strokeWidth="3" />
                  
                  {/* Мох */}
                  <path d="M 20 75 Q 25 70 30 75 Q 35 72 40 76 Q 45 74 50 78" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 60 68 Q 65 65 70 70" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'birch-tree',
              title: 'Береза',
              desc: 'с четким узором черных полосок',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ствол березы */}
                  <rect x="42" y="20" width="16" height="75" fill="#f8fafc" stroke="#475569" strokeWidth="3" />
                  
                  {/* Черные полоски (чечевички) */}
                  <path d="M 42 30 Q 46 32 50 30" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 58 35 Q 54 37 50 35" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 42 45 Q 48 48 53 45" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 58 55 Q 52 57 46 55" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 42 65 Q 47 67 52 65" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 58 75 Q 55 77 50 75" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 42 85 Q 48 87 55 85" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Ветви (свисающие вниз, как у плакучей березы) */}
                  <path d="M 42 35 C 30 30 20 45 20 60" fill="none" stroke="#475569" strokeWidth="2" />
                  <path d="M 58 25 C 70 20 80 40 80 55" fill="none" stroke="#475569" strokeWidth="2" />
                  <path d="M 42 50 C 30 45 25 55 25 70" fill="none" stroke="#475569" strokeWidth="2" />
                  
                  {/* Листики */}
                  <path d="M 20 50 Q 15 55 20 60 Q 25 55 20 50 Z" fill="#22c55e" stroke="none" />
                  <path d="M 25 60 Q 20 65 25 70 Q 30 65 25 60 Z" fill="#22c55e" stroke="none" />
                  <path d="M 75 45 Q 70 50 75 55 Q 80 50 75 45 Z" fill="#22c55e" stroke="none" />
                  <path d="M 80 55 Q 75 60 80 65 Q 85 60 80 55 Z" fill="#22c55e" stroke="none" />
                  <path d="M 50 15 Q 40 10 50 5 Q 60 10 50 15 Z" fill="#22c55e" stroke="none" />
                </svg>
              )
            },
            {
              id: 'pine-cones',
              title: 'Ель с шишками',
              desc: 'шишки на самых верхних ветках',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ствол */}
                  <rect x="45" y="80" width="10" height="15" fill="#78350f" stroke="#451a03" strokeWidth="3" />
                  
                  {/* Ветви-ярусы (Елочка) */}
                  <polygon points="50,15 25,45 75,45" fill="#15803d" stroke="#064e3b" strokeWidth="3" strokeLinejoin="round" />
                  <polygon points="50,35 20,65 80,65" fill="#16a34a" stroke="#064e3b" strokeWidth="3" strokeLinejoin="round" />
                  <polygon points="50,55 15,85 85,85" fill="#22c55e" stroke="#064e3b" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Иголки (штрихи) */}
                  <path d="M 30 45 L 35 50 M 40 45 L 45 50 M 60 45 L 55 50 M 70 45 L 65 50" stroke="#064e3b" strokeWidth="2" />
                  <path d="M 30 65 L 35 70 M 45 65 L 50 70 M 60 65 L 55 70 M 75 65 L 70 70" stroke="#064e3b" strokeWidth="2" />
                  
                  {/* Шишки на самом верху */}
                  <ellipse cx="43" cy="25" rx="4" ry="7" fill="#b45309" stroke="#78350f" strokeWidth="2" transform="rotate(15 43 25)" />
                  <ellipse cx="57" cy="25" rx="4" ry="7" fill="#b45309" stroke="#78350f" strokeWidth="2" transform="rotate(-15 57 25)" />
                  <ellipse cx="50" cy="18" rx="4" ry="8" fill="#b45309" stroke="#78350f" strokeWidth="2" />
                  
                  {/* Чешуйки на шишках */}
                  <path d="M 48 15 L 52 15 M 48 18 L 52 18 M 48 21 L 52 21" stroke="#78350f" strokeWidth="1" />
                </svg>
              )
            },
            {
              id: 'mossy-tree',
              title: 'Мшистое дерево',
              desc: 'покрытое мхом только с одной стороны',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ствол дерева */}
                  <path d="M 35 95 C 40 80 40 20 35 5 L 65 5 C 60 20 60 80 65 95 Z" fill="#92400e" stroke="#451a03" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 45 10 L 45 90 M 55 10 L 55 90" stroke="#78350f" strokeWidth="2" />
                  
                  {/* Густой зеленый мох на левой стороне (указывает на север!) */}
                  <path d="M 35 95 C 40 80 40 20 35 5 C 30 15 32 30 35 45 C 32 60 30 80 35 95 Z" fill="#22c55e" stroke="#14532d" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Текстура мха (пушистость) */}
                  <path d="M 35 15 Q 40 20 36 25" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 37 35 Q 42 40 38 45" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 36 55 Q 42 60 37 65" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 38 75 Q 43 80 37 85" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Компас (подсказка) */}
                  <circle cx="80" cy="20" r="12" fill="#f8fafc" stroke="#475569" strokeWidth="2" />
                  <path d="M 80 10 L 83 20 L 77 20 Z" fill="#ef4444" stroke="none" />
                  <path d="M 80 30 L 83 20 L 77 20 Z" fill="#94a3b8" stroke="none" />
                  <text x="76" y="8" fontSize="8" fill="#ef4444" stroke="none" fontFamily="sans-serif">N</text>
                </svg>
              )
            },
            {
              id: 'pine-resin',
              title: 'Сосна со смолой',
              desc: 'янтарные слезы на коре',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ствол сосны (коричнево-оранжевый) */}
                  <rect x="30" y="5" width="40" height="90" fill="#b45309" stroke="#78350f" strokeWidth="3" />
                  
                  {/* Кора сосны (крупные пластинки-чешуйки) */}
                  <path d="M 30 20 C 40 25 50 15 70 20" fill="none" stroke="#78350f" strokeWidth="2" />
                  <path d="M 30 40 C 45 45 55 35 70 40" fill="none" stroke="#78350f" strokeWidth="2" />
                  <path d="M 30 60 C 40 65 50 55 70 60" fill="none" stroke="#78350f" strokeWidth="2" />
                  <path d="M 30 80 C 45 85 55 75 70 80" fill="none" stroke="#78350f" strokeWidth="2" />
                  <line x1="40" y1="5" x2="40" y2="95" stroke="#78350f" strokeWidth="2" strokeDasharray="10 5" />
                  <line x1="55" y1="5" x2="55" y2="95" stroke="#78350f" strokeWidth="2" strokeDasharray="15 8" />
                  
                  {/* Порез на коре */}
                  <path d="M 45 45 L 60 55 M 45 55 L 60 45" stroke="#451a03" strokeWidth="4" />
                  
                  {/* Янтарные капли смолы */}
                  <path d="M 52 50 C 58 50 55 65 52 70 C 49 65 46 50 52 50 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
                  <path d="M 48 65 C 51 65 50 75 48 80 C 46 75 45 65 48 65 Z" fill="#fcd34d" stroke="#d97706" strokeWidth="2" />
                  
                  {/* Блики на смоле */}
                  <line x1="51" y1="55" x2="51" y2="62" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'hazelnut-bush',
              title: 'Куст орешника',
              desc: 'или лещины, с круглыми листьями',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Множество тонких стволов (кустарник) */}
                  <path d="M 50 95 C 45 60 30 40 20 20" fill="none" stroke="#65a30d" strokeWidth="5" strokeLinecap="round" />
                  <path d="M 50 95 C 55 70 65 50 80 30" fill="none" stroke="#4d7c0f" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 50 95 L 50 20" fill="none" stroke="#3f6212" strokeWidth="5" strokeLinecap="round" />
                  <path d="M 50 95 C 40 70 35 40 40 10" fill="none" stroke="#65a30d" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 50 95 C 60 80 75 50 90 60" fill="none" stroke="#4d7c0f" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Круглые листья */}
                  <circle cx="20" cy="20" r="10" fill="#a3e635" stroke="#4d7c0f" strokeWidth="2" />
                  <circle cx="80" cy="30" r="12" fill="#a3e635" stroke="#4d7c0f" strokeWidth="2" />
                  <circle cx="50" cy="20" r="14" fill="#a3e635" stroke="#4d7c0f" strokeWidth="2" />
                  <circle cx="40" cy="10" r="10" fill="#a3e635" stroke="#4d7c0f" strokeWidth="2" />
                  <circle cx="35" cy="40" r="11" fill="#a3e635" stroke="#4d7c0f" strokeWidth="2" />
                  <circle cx="70" cy="50" r="10" fill="#a3e635" stroke="#4d7c0f" strokeWidth="2" />
                  
                  {/* Орешки (лесной орех) */}
                  <g fill="#d97706" stroke="#92400e" strokeWidth="2">
                    {/* Гроздь слева */}
                    <circle cx="30" cy="45" r="4" />
                    <circle cx="36" cy="48" r="4" />
                    {/* Зеленая "юбочка" ореха */}
                    <path d="M 26 40 L 30 45 L 34 40 Z" fill="#84cc16" stroke="none" />
                    <path d="M 32 43 L 36 48 L 40 43 Z" fill="#84cc16" stroke="none" />
                    
                    {/* Гроздь в центре */}
                    <circle cx="55" cy="35" r="5" />
                    <path d="M 50 30 L 55 35 L 60 30 Z" fill="#84cc16" stroke="none" />
                  </g>
                </svg>
              )
            },
            {
              id: 'tree-hollow',
              title: 'Дерево с дуплом',
              desc: 'кто там прячется внутри?',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Широкий старый ствол */}
                  <path d="M 20 95 C 30 60 25 40 20 5 L 80 5 C 75 40 70 60 80 95 Z" fill="#b45309" stroke="#78350f" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 30 10 L 35 90 M 70 10 L 65 90 M 40 10 L 45 40 M 60 60 L 55 90" stroke="#92400e" strokeWidth="3" />
                  
                  {/* Дупло (темная овальная дыра) */}
                  <ellipse cx="50" cy="50" rx="15" ry="25" fill="#111827" stroke="#451a03" strokeWidth="4" />
                  
                  {/* Светящиеся глаза в темноте */}
                  <circle cx="45" cy="45" r="3" fill="#fde047" stroke="none" style={{ filter: 'drop-shadow(0 0 3px #fde047)' }} />
                  <circle cx="55" cy="45" r="3" fill="#fde047" stroke="none" style={{ filter: 'drop-shadow(0 0 3px #fde047)' }} />
                  <circle cx="45" cy="45" r="1" fill="#111827" stroke="none" />
                  <circle cx="55" cy="45" r="1" fill="#111827" stroke="none" />
                  
                  {/* Ветка, отходящая вбок */}
                  <path d="M 80 30 C 90 25 95 30 100 20" fill="none" stroke="#78350f" strokeWidth="8" strokeLinecap="round" />
                  
                  {/* Гриб на стволе (трутовик) */}
                  <path d="M 24 60 C 15 60 10 65 24 70 Z" fill="#fcd34d" stroke="#b45309" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              )
            },
            {
              id: 'new-sprout',
              title: 'Молодая поросль',
              desc: 'крошечное деревце не больше ладони',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Лесная почва / холмик */}
                  <path d="M 10 90 C 30 75 70 75 90 90 Z" fill="#78350f" stroke="#451a03" strokeWidth="3" strokeLinejoin="round" />
                  <circle cx="30" cy="85" r="3" fill="#451a03" stroke="none" />
                  <circle cx="70" cy="85" r="2" fill="#451a03" stroke="none" />
                  <circle cx="50" cy="88" r="4" fill="#451a03" stroke="none" />
                  
                  {/* Тонкий беззащитный стебелек */}
                  <path d="M 50 80 Q 40 50 50 20" fill="none" stroke="#65a30d" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Два свежих листочка */}
                  <path d="M 50 20 C 65 10 80 20 80 35 C 80 50 55 45 50 20 Z" fill="#a3e635" stroke="#4d7c0f" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 50 20 C 35 10 20 20 20 35 C 20 50 45 45 50 20 Z" fill="#84cc16" stroke="#4d7c0f" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Прожилки на листиках */}
                  <path d="M 50 20 C 60 25 70 30 75 33" stroke="#4d7c0f" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 50 20 C 40 25 30 30 25 33" stroke="#4d7c0f" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Солнечный луч сверху (надежда) */}
                  <line x1="50" y1="0" x2="50" y2="10" stroke="#fde047" strokeWidth="3" strokeLinecap="round" />
                  <line x1="40" y1="5" x2="45" y2="12" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
                  <line x1="60" y1="5" x2="55" y2="12" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'dancing-tree',
              title: 'Танцующее дерево',
              desc: 'с искривленным стволом',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Изогнутый ствол (буква S) */}
                  <path d="M 50 90 C 10 70 10 50 45 45 C 80 40 80 20 50 5" fill="none" stroke="#78350f" strokeWidth="12" strokeLinecap="round" />
                  <path d="M 50 90 C 10 70 10 50 45 45 C 80 40 80 20 50 5" fill="none" stroke="#b45309" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Ветви, как руки в танце */}
                  <path d="M 25 58 C 5 50 15 30 20 20" fill="none" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 68 30 C 85 30 90 15 95 10" fill="none" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Крона/листья (разбросаны в движении) */}
                  <circle cx="20" cy="20" r="12" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  <circle cx="90" cy="15" r="10" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  <circle cx="50" cy="5" r="15" fill="#4ade80" stroke="#15803d" strokeWidth="2" />
                  
                  {/* Динамичные линии "танца" */}
                  <path d="M 15 75 Q 5 65 20 55" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 85 45 Q 95 35 80 25" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              )
            }
          ]
        },
		{
          id: 'ch6-undergrowth',
          title: '🌿 Подлесок и микромир',
          subtitle: 'Смотри под ноги',
          theme: 'lime',
          items: [
            {
              id: 'fern',
              title: 'Папоротник',
              desc: 'похожий на перо сказочной птицы',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Центральный стебель папоротника */}
                  <path d="M 20 90 C 30 50 60 20 90 30" fill="none" stroke="#15803d" strokeWidth="4" />
                  
                  {/* Листочки (перья) */}
                  <path d="M 25 78 L 15 70 M 30 65 L 20 50 M 40 50 L 30 35 M 50 40 L 45 25 M 65 33 L 60 20 M 75 30 L 75 18 M 85 30 L 88 22" stroke="#22c55e" strokeWidth="3" />
                  <path d="M 25 78 L 35 85 M 30 65 L 45 75 M 40 50 L 55 60 M 50 40 L 65 48 M 65 33 L 80 40 M 75 30 L 90 38" stroke="#16a34a" strokeWidth="3" />
                  
                  {/* Детализация листиков (мелкие зубчики) */}
                  <g stroke="#4ade80" strokeWidth="1.5">
                    <line x1="30" y1="65" x2="25" y2="58" /> <line x1="35" y1="58" x2="30" y2="50" />
                    <line x1="40" y1="50" x2="35" y2="43" /> <line x1="45" y1="45" x2="40" y2="38" />
                    <line x1="50" y1="40" x2="48" y2="32" /> <line x1="60" y1="35" x2="58" y2="28" />
                    
                    <line x1="30" y1="65" x2="38" y2="70" /> <line x1="40" y1="50" x2="48" y2="55" />
                    <line x1="50" y1="40" x2="58" y2="45" /> <line x1="65" y1="33" x2="72" y2="38" />
                  </g>
                  
                  {/* Спираль молодого побега (улитка) внизу */}
                  <path d="M 15 90 C 5 90 5 80 10 80 C 15 80 15 85 12 85" fill="none" stroke="#16a34a" strokeWidth="3" />
                </svg>
              )
            },
            {
              id: 'berry-glade',
              title: 'Поляна лесных ягод',
              desc: 'земляника, черника или брусника',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Земля/трава */}
                  <path d="M 10 85 C 30 75 70 75 90 85" fill="none" stroke="#15803d" strokeWidth="3" />
                  
                  {/* Листья земляники (тройные) */}
                  <path d="M 30 65 C 20 60 20 75 30 75 C 40 75 40 60 30 65 Z" fill="#22c55e" stroke="#14532d" strokeWidth="2" />
                  <path d="M 25 55 C 15 50 10 65 25 65 C 35 65 35 50 25 55 Z" fill="#22c55e" stroke="#14532d" strokeWidth="2" />
                  <path d="M 40 58 C 35 45 50 45 45 60 C 40 70 30 70 40 58 Z" fill="#22c55e" stroke="#14532d" strokeWidth="2" />
                  
                  <path d="M 70 65 C 60 60 60 75 70 75 C 80 75 80 60 70 65 Z" fill="#22c55e" stroke="#14532d" strokeWidth="2" />
                  <path d="M 75 55 C 85 50 90 65 75 65 C 65 65 65 50 75 55 Z" fill="#22c55e" stroke="#14532d" strokeWidth="2" />
                  
                  {/* Ягоды земляники */}
                  <path d="M 35 45 C 30 35 45 35 40 45 L 35 45 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                  <circle cx="38" cy="42" r="1" fill="#facc15" stroke="none" />
                  
                  <path d="M 60 55 C 55 45 70 45 65 55 L 60 55 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                  <circle cx="63" cy="52" r="1" fill="#facc15" stroke="none" />
                  
                  <path d="M 80 40 C 75 30 90 30 85 40 L 80 40 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                  
                  {/* Белый цветочек */}
                  <circle cx="50" cy="35" r="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
                  <circle cx="50" cy="35" r="1.5" fill="#facc15" stroke="none" />
                  <path d="M 50 35 L 50 30 M 50 35 L 55 35 M 50 35 L 50 40 M 50 35 L 45 35" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Стебельки */}
                  <path d="M 38 45 Q 35 60 30 70 M 63 55 Q 60 65 65 70 M 83 40 Q 80 55 75 65 M 50 40 Q 50 60 45 75" fill="none" stroke="#16a34a" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'amanita',
              title: 'Гриб с красной шляпкой',
              desc: 'мухомор — только смотри, не трогай!',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ножка гриба */}
                  <path d="M 40 85 C 40 60 45 40 45 40 L 55 40 C 55 40 60 60 60 85 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* "Юбочка" на ножке */}
                  <path d="M 38 55 C 50 65 62 55 62 55 C 55 58 45 58 38 55 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M 38 55 C 35 65 42 55 42 55" fill="none" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M 62 55 C 65 65 58 55 58 55" fill="none" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Красная шляпка */}
                  <path d="M 15 45 C 15 15 85 15 85 45 C 85 50 15 50 15 45 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Внутренняя сторона шляпки (пластинки) */}
                  <path d="M 15 45 C 15 50 85 50 85 45 C 70 40 30 40 15 45 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="30" y1="43" x2="35" y2="47" stroke="#94a3b8" strokeWidth="1" />
                  <line x1="50" y1="42" x2="50" y2="48" stroke="#94a3b8" strokeWidth="1" />
                  <line x1="70" y1="43" x2="65" y2="47" stroke="#94a3b8" strokeWidth="1" />
                  
                  {/* Белые точки на шляпке */}
                  <circle cx="35" cy="28" r="4" fill="#ffffff" stroke="none" />
                  <circle cx="50" cy="22" r="5" fill="#ffffff" stroke="none" />
                  <circle cx="65" cy="30" r="3.5" fill="#ffffff" stroke="none" />
                  <circle cx="45" cy="35" r="3" fill="#ffffff" stroke="none" />
                  <circle cx="75" cy="38" r="4" fill="#ffffff" stroke="none" />
                  <circle cx="25" cy="38" r="3" fill="#ffffff" stroke="none" />
                  <circle cx="58" cy="36" r="4.5" fill="#ffffff" stroke="none" />
                  
                  {/* Трава у основания */}
                  <path d="M 25 85 C 30 70 35 85 35 85 M 65 85 C 60 75 55 85 55 85 M 40 85 L 38 75 M 60 85 L 62 75" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'puffball',
              title: 'Гриб-дождевик',
              desc: 'который «пшикает» пыльцой, если он сухой',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Земля */}
                  <path d="M 20 85 L 80 85" stroke="#78350f" strokeWidth="4" />
                  
                  {/* Круглое тело дождевика */}
                  <path d="M 30 85 C 20 60 40 45 50 45 C 60 45 80 60 70 85 Z" fill="#d6d3d1" stroke="#78716c" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Текстура дождевика (трещинки и точки) */}
                  <path d="M 40 55 Q 45 50 50 55" fill="none" stroke="#a8a29e" strokeWidth="2" />
                  <path d="M 60 65 Q 55 60 65 60" fill="none" stroke="#a8a29e" strokeWidth="2" />
                  <path d="M 35 70 Q 40 65 45 75" fill="none" stroke="#a8a29e" strokeWidth="2" />
                  <circle cx="50" cy="70" r="1" fill="#78716c" stroke="none" />
                  <circle cx="60" cy="75" r="1" fill="#78716c" stroke="none" />
                  <circle cx="45" cy="80" r="1" fill="#78716c" stroke="none" />
                  
                  {/* Отверстие сверху */}
                  <ellipse cx="50" cy="45" rx="6" ry="3" fill="#44403c" stroke="#292524" strokeWidth="2" />
                  
                  {/* Облако спор ("пшик") */}
                  <path d="M 50 40 C 40 20 30 30 40 10 C 50 0 60 20 70 15 C 60 30 70 40 50 40 Z" fill="#e5e7eb" stroke="none" opacity="0.6" />
                  
                  {/* Частицы спор */}
                  <circle cx="45" cy="25" r="1.5" fill="#78716c" stroke="none" />
                  <circle cx="55" cy="20" r="1" fill="#78716c" stroke="none" />
                  <circle cx="50" cy="15" r="2" fill="#78716c" stroke="none" />
                  <circle cx="60" cy="30" r="1.5" fill="#78716c" stroke="none" />
                  <circle cx="40" cy="35" r="1" fill="#78716c" stroke="none" />
                  
                  {/* Линии движения пыльцы */}
                  <path d="M 48 40 L 45 30 M 52 40 L 55 25 M 50 40 L 50 20" stroke="#a8a29e" strokeWidth="2" strokeDasharray="2 2" />
                </svg>
              )
            },
            {
              id: 'honey-fungus',
              title: 'Семейство опят',
              desc: 'много грибочков на старом пне',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Старый пень */}
                  <path d="M 20 90 L 25 50 C 25 40 75 40 75 50 L 80 90 Z" fill="#78350f" stroke="#451a03" strokeWidth="3" strokeLinejoin="round" />
                  <ellipse cx="50" cy="50" rx="25" ry="10" fill="#b45309" stroke="#451a03" strokeWidth="3" />
                  
                  {/* Кольца на срезе пня */}
                  <ellipse cx="50" cy="50" rx="15" ry="5" fill="none" stroke="#78350f" strokeWidth="2" />
                  <ellipse cx="50" cy="50" rx="5" ry="2" fill="none" stroke="#78350f" strokeWidth="2" />
                  
                  {/* Текстура коры */}
                  <line x1="30" y1="60" x2="30" y2="85" stroke="#451a03" strokeWidth="2" />
                  <line x1="70" y1="65" x2="70" y2="85" stroke="#451a03" strokeWidth="2" />
                  <line x1="50" y1="70" x2="50" y2="90" stroke="#451a03" strokeWidth="2" />
                  
                  {/* Группа опят слева */}
                  {/* Ножки */}
                  <path d="M 20 70 Q 15 55 10 50 M 25 75 Q 15 65 15 60 M 30 75 Q 25 55 25 50" fill="none" stroke="#fef08a" strokeWidth="3" strokeLinecap="round" />
                  {/* Шляпки */}
                  <path d="M 5 50 C 5 45 15 45 15 50 Z" fill="#d97706" stroke="#92400e" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 10 60 C 10 55 20 55 20 60 Z" fill="#d97706" stroke="#92400e" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 20 50 C 20 45 30 45 30 50 Z" fill="#d97706" stroke="#92400e" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Группа опят справа сверху */}
                  {/* Ножки */}
                  <path d="M 65 55 Q 75 40 80 35 M 60 55 Q 65 35 70 30 M 70 55 Q 85 45 90 40" fill="none" stroke="#fef08a" strokeWidth="3" strokeLinecap="round" />
                  {/* Шляпки */}
                  <path d="M 75 35 C 75 30 85 30 85 35 Z" fill="#d97706" stroke="#92400e" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 65 30 C 65 25 75 25 75 30 Z" fill="#d97706" stroke="#92400e" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 85 40 C 85 35 95 35 95 40 Z" fill="#d97706" stroke="#92400e" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              )
            },
            {
              id: 'pine-needles',
              title: 'Ковер из хвои',
              desc: 'там, где под деревьями не растет трава',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Лесная подстилка (фон) */}
                  <rect x="10" y="10" width="80" height="80" rx="10" fill="#78350f" stroke="#451a03" strokeWidth="3" />
                  
                  {/* Множество иголок (рыжие, коричневые, зеленоватые) */}
                  <g strokeLinecap="round" strokeWidth="2">
                    {/* Рыжие иголки */}
                    <path d="M 20 20 L 35 25 M 70 15 L 60 30 M 30 50 L 45 45 M 80 60 L 65 70 M 20 80 L 35 75 M 50 85 L 60 75" stroke="#b45309" />
                    <path d="M 25 30 L 15 40 M 85 25 L 75 35 M 40 60 L 25 65 M 75 80 L 85 70 M 45 20 L 55 15 M 65 50 L 80 45" stroke="#b45309" />
                    
                    {/* Темно-коричневые иголки */}
                    <path d="M 15 15 L 25 25 M 85 15 L 75 25 M 50 30 L 60 40 M 20 70 L 30 60 M 70 85 L 80 75 M 35 85 L 45 90" stroke="#451a03" />
                    
                    {/* Светло-коричневые / блеклые иголки */}
                    <path d="M 30 15 L 25 30 M 60 20 L 70 25 M 20 50 L 30 45 M 50 65 L 40 75 M 85 55 L 75 50 M 65 85 L 55 90" stroke="#d97706" />
                  </g>
                  
                  {/* Маленькая упавшая шишечка */}
                  <ellipse cx="50" cy="50" rx="6" ry="10" fill="#451a03" stroke="#290f02" strokeWidth="2" transform="rotate(45 50 50)" />
                  <path d="M 45 45 L 48 48 M 48 42 L 51 45 M 51 49 L 54 52" stroke="#92400e" strokeWidth="2" />
                  
                  {/* Пара сухих листиков */}
                  <path d="M 70 35 C 75 30 80 35 75 40 Z" fill="#92400e" stroke="none" />
                  <path d="M 25 55 C 20 60 25 65 30 60 Z" fill="#92400e" stroke="none" />
                </svg>
              )
            },
            {
              id: 'lichen-stone',
              title: 'Лишайник на камне',
              desc: 'узор, похожий на карту неизвестной страны',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Большой валун */}
                  <path d="M 15 75 C 10 40 30 20 55 25 C 80 30 90 50 85 75 C 80 95 20 95 15 75 Z" fill="#9ca3af" stroke="#4b5563" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Текстура камня (трещины) */}
                  <path d="M 25 40 L 35 50 L 30 65" fill="none" stroke="#64748b" strokeWidth="2" />
                  <path d="M 75 45 L 65 55 L 70 70" fill="none" stroke="#64748b" strokeWidth="2" />
                  
                  {/* Пятна лишайника (как материки на карте) */}
                  <path d="M 40 35 C 45 30 55 35 50 45 C 45 55 30 50 35 40 Z" fill="#bbf7d0" stroke="#4ade80" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 60 40 C 70 35 75 45 65 50 C 55 55 55 45 60 40 Z" fill="#fef08a" stroke="#fde047" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 45 60 C 55 55 65 65 55 75 C 45 85 35 70 45 60 Z" fill="#bbf7d0" stroke="#4ade80" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 25 65 C 30 60 35 70 25 75 C 15 80 20 70 25 65 Z" fill="#fef08a" stroke="#fde047" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Трава у основания камня */}
                  <path d="M 10 85 Q 15 75 20 85 M 80 85 Q 85 75 90 85 M 40 85 Q 45 75 50 85 M 60 85 Q 65 75 70 85" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'snowdrop',
              title: 'Цветок-подснежник',
              desc: 'или другой первый лесной первоцвет',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Остатки снега / земля */}
                  <path d="M 10 85 C 30 75 70 75 90 85 C 70 95 30 95 10 85 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 30 85 C 40 80 60 80 70 85" stroke="#cbd5e1" strokeWidth="2" />
                  
                  {/* Изогнутый зеленый стебель */}
                  <path d="M 50 80 Q 40 40 60 25" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Два узких листика */}
                  <path d="M 50 80 Q 30 60 35 40 Q 45 60 50 80 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 50 80 Q 70 65 75 50 Q 60 70 50 80 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Чашелистик */}
                  <path d="M 60 25 L 63 30 L 57 30 Z" fill="#16a34a" stroke="#15803d" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Поникший белый цветок-колокольчик */}
                  <path d="M 60 30 C 50 45 55 55 60 50 C 65 55 70 45 60 30 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 60 30 C 55 45 60 50 60 50" fill="none" stroke="#94a3b8" strokeWidth="1" />
                  <path d="M 60 30 C 65 45 60 50 60 50" fill="none" stroke="#94a3b8" strokeWidth="1" />
                  
                  {/* Внутренние лепестки (желто-зеленые) */}
                  <path d="M 58 45 L 60 48 L 62 45" fill="none" stroke="#84cc16" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'antler-branch',
              title: 'Сухая ветка',
              desc: 'формой напоминающая рога оленя или букву',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Главная ветка */}
                  <path d="M 50 90 C 45 70 50 50 45 35" fill="none" stroke="#78350f" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 50 90 C 45 70 50 50 45 35" fill="none" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Отвлетвление 1 (направо) */}
                  <path d="M 48 60 C 60 55 70 45 75 30" fill="none" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 48 60 C 60 55 70 45 75 30" fill="none" stroke="#b45309" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Отвлетвление 2 (налево) */}
                  <path d="M 47 45 C 35 40 25 30 20 15" fill="none" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
                  <path d="M 47 45 C 35 40 25 30 20 15" fill="none" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Мелкие "рожки" */}
                  <path d="M 65 48 L 75 55" fill="none" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 32 36 L 20 40" fill="none" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 45 35 L 55 20" fill="none" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Текстура коры (линии) */}
                  <path d="M 48 85 L 47 75 M 52 80 L 51 65 M 46 55 L 46 45" stroke="#451a03" strokeWidth="1.5" />
                  <path d="M 55 58 L 65 52 M 35 40 L 25 30" stroke="#451a03" strokeWidth="1.5" />
                  
                  {/* Листик, лежащий рядом */}
                  <path d="M 70 85 C 80 80 90 85 85 90 C 80 95 70 90 70 85 Z" fill="#d97706" stroke="#92400e" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              )
            },
            {
              id: 'blueberry-bush',
              title: 'Кустик черничника',
              desc: 'с маленькими зелеными листочками',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Земля */}
                  <path d="M 15 85 L 85 85" stroke="#4d7c0f" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Ветви кустарника (зигзагообразные) */}
                  <path d="M 50 85 L 50 60 L 35 45 L 25 55" fill="none" stroke="#65a30d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 50 60 L 65 45 L 80 55" fill="none" stroke="#65a30d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 35 45 L 40 25 L 30 15" fill="none" stroke="#65a30d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 65 45 L 60 25 L 75 15" fill="none" stroke="#65a30d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 50 85 L 40 65 L 20 70" fill="none" stroke="#65a30d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 50 85 L 65 70 L 85 75" fill="none" stroke="#65a30d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Маленькие овальные листья (светло-зеленые) */}
                  <g fill="#a3e635" stroke="#4d7c0f" strokeWidth="2">
                    <ellipse cx="25" cy="55" rx="6" ry="3" transform="rotate(-30 25 55)" />
                    <ellipse cx="35" cy="45" rx="6" ry="3" transform="rotate(20 35 45)" />
                    <ellipse cx="40" cy="25" rx="6" ry="3" transform="rotate(-40 40 25)" />
                    <ellipse cx="30" cy="15" rx="6" ry="3" transform="rotate(10 30 15)" />
                    <ellipse cx="65" cy="45" rx="6" ry="3" transform="rotate(-20 65 45)" />
                    <ellipse cx="80" cy="55" rx="6" ry="3" transform="rotate(30 80 55)" />
                    <ellipse cx="60" cy="25" rx="6" ry="3" transform="rotate(40 60 25)" />
                    <ellipse cx="75" cy="15" rx="6" ry="3" transform="rotate(-10 75 15)" />
                    <ellipse cx="40" cy="65" rx="6" ry="3" transform="rotate(15 40 65)" />
                    <ellipse cx="20" cy="70" rx="6" ry="3" transform="rotate(-15 20 70)" />
                    <ellipse cx="65" cy="70" rx="6" ry="3" transform="rotate(-15 65 70)" />
                    <ellipse cx="85" cy="75" rx="6" ry="3" transform="rotate(15 85 75)" />
                  </g>
                  
                  {/* Темно-синие ягоды (черника) */}
                  <circle cx="30" cy="50" r="3.5" fill="#1e3a8a" stroke="#0f172a" strokeWidth="1.5" />
                  <circle cx="70" cy="40" r="3.5" fill="#1e3a8a" stroke="#0f172a" strokeWidth="1.5" />
                  <circle cx="45" cy="30" r="3.5" fill="#1e3a8a" stroke="#0f172a" strokeWidth="1.5" />
                  <circle cx="55" cy="20" r="3.5" fill="#1e3a8a" stroke="#0f172a" strokeWidth="1.5" />
                  <circle cx="30" cy="70" r="3.5" fill="#1e3a8a" stroke="#0f172a" strokeWidth="1.5" />
                  
                  {/* Маленькие вмятинки на ягодах */}
                  <circle cx="30" cy="50" r="0.5" fill="#fff" stroke="none" />
                  <circle cx="70" cy="40" r="0.5" fill="#fff" stroke="none" />
                  <circle cx="45" cy="30" r="0.5" fill="#fff" stroke="none" />
                  <circle cx="55" cy="20" r="0.5" fill="#fff" stroke="none" />
                  <circle cx="30" cy="70" r="0.5" fill="#fff" stroke="none" />
                </svg>
              )
            }
          ]
        },
		{
          id: 'ch6-traces',
          title: '🦊 Следы и улики',
          subtitle: 'Кто здесь был?',
          theme: 'amber',
          items: [
            {
              id: 'anthill',
              title: 'Муравейник',
              desc: 'попробуй найти тот, что выше колена',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Огромная куча хвои и земли */}
                  <path d="M 5 90 C 20 40 40 20 50 20 C 60 20 80 40 95 90 Z" fill="#b45309" stroke="#78350f" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Текстура муравейника (хвоинки и веточки) */}
                  <path d="M 40 30 L 45 35 M 60 40 L 55 45 M 35 50 L 42 48 M 65 60 L 58 62 M 30 70 L 35 75 M 75 75 L 65 72 M 50 50 L 50 55 M 25 85 L 35 80 M 80 85 L 70 82" stroke="#92400e" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 45 40 L 50 35 M 55 55 L 60 50 M 40 60 L 45 65" stroke="#fcd34d" strokeWidth="1.5" strokeLinecap="round" />
                  
                  {/* Муравьи (маленькие силуэты) */}
                  <g fill="#1f2937" stroke="none">
                    {/* Муравей 1 */}
                    <circle cx="30" cy="80" r="1.5" /> <circle cx="33" cy="78" r="1.5" /> <circle cx="36" cy="76" r="2" />
                    <path d="M 33 78 L 30 75 M 33 78 L 36 80" stroke="#1f2937" strokeWidth="1" />
                    {/* Муравей 2 */}
                    <circle cx="50" cy="65" r="1.5" /> <circle cx="50" cy="61" r="1.5" /> <circle cx="50" cy="57" r="2" />
                    <path d="M 50 61 L 47 63 M 50 61 L 53 59" stroke="#1f2937" strokeWidth="1" />
                    {/* Муравей 3 */}
                    <circle cx="65" cy="45" r="1.5" /> <circle cx="62" cy="48" r="1.5" /> <circle cx="59" cy="51" r="2" />
                    <path d="M 62 48 L 65 51 M 62 48 L 59 45" stroke="#1f2937" strokeWidth="1" />
                    {/* Муравей 4 (на самом верху) */}
                    <circle cx="48" cy="25" r="1.5" /> <circle cx="51" cy="24" r="1.5" /> <circle cx="54" cy="23" r="2" />
                    <path d="M 51 24 L 49 21 M 51 24 L 53 27" stroke="#1f2937" strokeWidth="1" />
                  </g>
                  
                  {/* Трава у основания */}
                  <path d="M 10 90 Q 15 75 20 90 M 80 90 Q 85 75 90 90" fill="none" stroke="#16a34a" strokeWidth="3" />
                </svg>
              )
            },
            {
              id: 'animal-trail',
              title: 'Звериная тропа',
              desc: 'узкая и без следов человека',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Фон - густой подлесок */}
                  <path d="M 5 60 C 5 30 20 20 30 30 C 40 20 60 20 70 30 C 80 20 95 30 95 60" fill="#15803d" stroke="#14532d" strokeWidth="3" />
                  <path d="M 0 95 L 100 95 L 100 60 C 90 55 80 65 70 60 C 50 70 30 60 20 65 C 10 60 0 65 0 60 Z" fill="#22c55e" stroke="#15803d" strokeWidth="3" />
                  
                  {/* Извилистая тропинка, уходящая вглубь */}
                  <path d="M 35 95 C 45 75 25 60 45 45 C 55 35 45 25 50 20" fill="none" stroke="#78350f" strokeWidth="12" strokeLinecap="round" />
                  <path d="M 35 95 C 45 75 25 60 45 45 C 55 35 45 25 50 20" fill="none" stroke="#b45309" strokeWidth="8" strokeLinecap="round" />
                  
                  {/* Примятая трава по краям тропы */}
                  <path d="M 28 90 Q 35 85 32 80 M 44 92 Q 35 85 40 80 M 35 70 Q 25 65 30 60 M 40 60 Q 50 65 45 55 M 48 40 Q 55 45 52 35" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Следы животных на тропе (крошечные) */}
                  <g fill="#78350f" stroke="none">
                    <circle cx="38" cy="85" r="1.5" /> <circle cx="41" cy="83" r="1" /> <circle cx="35" cy="83" r="1" />
                    <circle cx="42" cy="70" r="1.5" /> <circle cx="45" cy="68" r="1" /> <circle cx="39" cy="68" r="1" />
                    <circle cx="35" cy="55" r="1" /> <circle cx="37" cy="53" r="0.8" /> <circle cx="33" cy="53" r="0.8" />
                    <circle cx="47" cy="40" r="1" /> <circle cx="49" cy="38" r="0.8" /> <circle cx="45" cy="38" r="0.8" />
                  </g>
                </svg>
              )
            },
            {
              id: 'chewed-cone',
              title: 'Разгрызенная шишка',
              desc: 'работа белки или дятла',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Основной "стержень" (огрызок) шишки */}
                  <path d="M 45 80 L 50 20 L 55 80 Z" fill="#b45309" stroke="#78350f" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="50" y1="20" x2="50" y2="80" stroke="#78350f" strokeWidth="2" strokeDasharray="4 2" />
                  
                  {/* Оставшиеся чешуйки на макушке */}
                  <path d="M 50 20 L 40 25 L 45 30 L 38 35 L 48 38 L 50 25" fill="#92400e" stroke="#451a03" strokeWidth="2" />
                  <path d="M 50 20 L 60 25 L 55 30 L 62 35 L 52 38 L 50 25" fill="#92400e" stroke="#451a03" strokeWidth="2" />
                  
                  {/* Оставшиеся чешуйки в самом низу */}
                  <path d="M 45 80 L 35 75 L 40 70 L 30 65 L 45 60 Z" fill="#92400e" stroke="#451a03" strokeWidth="2" />
                  <path d="M 55 80 L 65 75 L 60 70 L 70 65 L 55 60 Z" fill="#92400e" stroke="#451a03" strokeWidth="2" />
                  
                  {/* Разбросанные чешуйки на земле */}
                  <path d="M 25 85 Q 20 80 15 85" fill="none" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 80 88 Q 85 82 90 85" fill="none" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 20 95 Q 25 90 30 92" fill="none" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 70 95 Q 75 92 80 97" fill="none" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Иголки сосны на фоне */}
                  <path d="M 10 40 L 25 45 M 15 30 L 30 40 M 85 45 L 70 50 M 90 35 L 75 45" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'animal-burrow',
              title: 'Нора',
              desc: 'в земле или между корней',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Земляной холмик */}
                  <path d="M 5 85 C 20 40 80 40 95 85 Z" fill="#b45309" stroke="#78350f" strokeWidth="4" strokeLinejoin="round" />
                  
                  {/* Корни старого дерева, оплетающие нору */}
                  <path d="M 20 20 C 25 40 15 60 25 85" fill="none" stroke="#451a03" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 80 20 C 75 40 85 60 75 85" fill="none" stroke="#451a03" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 45 15 C 40 30 35 45 40 60 L 22 75" fill="none" stroke="#451a03" strokeWidth="5" strokeLinecap="round" />
                  <path d="M 60 15 C 65 30 70 45 60 60 L 78 75" fill="none" stroke="#451a03" strokeWidth="5" strokeLinecap="round" />
                  
                  {/* Сама нора (темный провал) */}
                  <path d="M 35 85 C 35 65 65 65 65 85 Z" fill="#111827" stroke="#292524" strokeWidth="4" />
                  <path d="M 40 85 C 40 70 60 70 60 85 Z" fill="#000000" stroke="none" />
                  
                  {/* Свежевырытая земля (кучка перед норой) */}
                  <ellipse cx="50" cy="90" rx="25" ry="5" fill="#78350f" stroke="none" />
                  <circle cx="35" cy="90" r="2" fill="#451a03" stroke="none" />
                  <circle cx="45" cy="88" r="2" fill="#451a03" stroke="none" />
                  <circle cx="55" cy="92" r="2" fill="#451a03" stroke="none" />
                  <circle cx="65" cy="89" r="2" fill="#451a03" stroke="none" />
                  
                  {/* Трава */}
                  <path d="M 10 85 Q 15 75 20 85 M 80 85 Q 85 75 90 85" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'bird-feather',
              title: 'Птичье перо',
              desc: 'застрявшее в кустах или лежащее на земле',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Очин (основание пера) */}
                  <path d="M 20 80 L 30 70" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Центральный стержень пера */}
                  <path d="M 30 70 C 50 50 70 30 85 15" stroke="#f1f5f9" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Опахало пера (боковые волоски) - левая сторона */}
                  <path d="M 32 68 C 25 55 35 35 60 20 C 70 15 85 15 85 15 C 85 15 65 35 35 65" fill="#64748b" stroke="#334155" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Опахало пера - правая сторона */}
                  <path d="M 35 65 C 45 70 65 60 80 35 C 85 25 85 15 85 15 C 85 15 65 35 35 65" fill="#475569" stroke="#334155" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Разрывы (расщепленные бороздки) */}
                  <path d="M 45 33 L 55 25 M 65 48 L 75 35 M 48 55 L 60 48" stroke="#f1f5f9" strokeWidth="1.5" />
                  <path d="M 50 30 L 40 40 M 70 30 L 60 40" stroke="#f1f5f9" strokeWidth="1.5" />
                  
                  {/* Полосатый узор на пере (например, сойка или ястреб) */}
                  <path d="M 38 60 C 42 62 45 58 45 55" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 50 48 C 55 52 60 45 60 42" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 65 32 C 70 35 75 25 75 22" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'paw-prints',
              title: 'Следы лап',
              desc: 'на влажной почве (у ручья или после дождя)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Грязь/влажная почва */}
                  <path d="M 10 20 C 30 10 70 30 90 10 C 100 40 80 80 90 90 C 60 100 20 80 10 90 C 0 60 20 40 10 20 Z" fill="#78350f" stroke="#451a03" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Лужицы в грязи */}
                  <path d="M 20 30 C 30 25 40 35 30 40 Z" fill="#60a5fa" stroke="none" opacity="0.6" />
                  <path d="M 75 75 C 85 70 85 85 75 80 Z" fill="#60a5fa" stroke="none" opacity="0.6" />
                  
                  {/* След 1 (внизу слева) */}
                  <g fill="#451a03" stroke="none">
                    <path d="M 30 75 C 25 70 35 65 40 70 C 45 75 35 85 30 75 Z" /> {/* Пяточная мозоль */}
                    <circle cx="22" cy="65" r="4" /> {/* Палец 1 */}
                    <circle cx="28" cy="55" r="4" /> {/* Палец 2 */}
                    <circle cx="38" cy="55" r="4" /> {/* Палец 3 */}
                    <circle cx="45" cy="62" r="4" /> {/* Палец 4 */}
                    {/* Когти (опционально, если собака/волк) */}
                    <path d="M 22 61 L 20 57 M 28 51 L 26 47 M 38 51 L 40 47 M 45 58 L 48 55" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
                  </g>
                  
                  {/* След 2 (вверху справа) */}
                  <g fill="#451a03" stroke="none">
                    <path d="M 60 45 C 55 40 65 35 70 40 C 75 45 65 55 60 45 Z" />
                    <circle cx="52" cy="35" r="4" />
                    <circle cx="58" cy="25" r="4" />
                    <circle cx="68" cy="25" r="4" />
                    <circle cx="75" cy="32" r="4" />
                    <path d="M 52 31 L 50 27 M 58 21 L 56 17 M 68 21 L 70 17 M 75 28 L 78 25" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
                  </g>
                  
                  {/* Камешки вокруг */}
                  <circle cx="80" cy="50" r="3" fill="#9ca3af" stroke="none" />
                  <circle cx="15" cy="50" r="2" fill="#9ca3af" stroke="none" />
                  <circle cx="45" cy="25" r="2.5" fill="#9ca3af" stroke="none" />
                </svg>
              )
            },
            {
              id: 'holed-nut',
              title: 'Скорлупа ореха',
              desc: 'с дырочкой от зубов мыши',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Земля и мох (фон) */}
                  <path d="M 10 80 Q 50 70 90 85" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 30 80 Q 40 60 50 80" fill="#22c55e" stroke="none" />
                  
                  {/* Лесной орех (фундук) */}
                  <circle cx="50" cy="55" r="25" fill="#d97706" stroke="#92400e" strokeWidth="3" />
                  
                  {/* Полоски/Текстура ореха */}
                  <path d="M 35 40 C 45 35 55 35 65 40" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 30 55 C 45 50 55 50 70 55" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 35 70 C 45 68 55 68 65 70" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Дырочка, прогрызенная мышью */}
                  <circle cx="45" cy="45" r="8" fill="#1f2937" stroke="#451a03" strokeWidth="2" />
                  
                  {/* Следы зубов по краям дырочки (мелкие зубчики) */}
                  <path d="M 37 45 L 39 45 M 45 37 L 45 39 M 53 45 L 51 45 M 45 53 L 45 51 M 39 40 L 41 41 M 51 40 L 49 41" stroke="#fcd34d" strokeWidth="1.5" strokeLinecap="round" />
                  
                  {/* Светлое пятнышко на основании ореха */}
                  <ellipse cx="50" cy="75" rx="8" ry="4" fill="#fcd34d" stroke="#b45309" strokeWidth="2" />
                  
                  {/* Осенний листик рядом */}
                  <path d="M 70 85 C 85 75 95 85 80 95 C 70 95 65 85 70 85 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              )
            },
            {
              id: 'scratched-tree',
              title: 'Ободранная кора',
              desc: 'об это дерево мог чесаться лось или кабан',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ствол дерева */}
                  <path d="M 30 10 L 30 90 M 70 10 L 70 90" fill="#78350f" stroke="#451a03" strokeWidth="4" />
                  <rect x="30" y="10" width="40" height="80" fill="#78350f" stroke="none" />
                  
                  {/* Кора (оставшаяся) */}
                  <path d="M 35 10 L 35 30 M 45 10 L 45 25 M 65 10 L 65 35" stroke="#451a03" strokeWidth="3" />
                  <path d="M 35 75 L 35 90 M 60 80 L 60 90 M 65 70 L 65 90" stroke="#451a03" strokeWidth="3" />
                  
                  {/* Участок без коры (светлая древесина) */}
                  <path d="M 35 35 C 45 30 55 35 65 30 L 65 70 C 55 65 45 75 35 70 Z" fill="#fef3c7" stroke="#b45309" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Царапины от клыков / рогов / когтей */}
                  <path d="M 40 40 L 40 65" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 45 35 L 45 60" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 50 45 L 50 70" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 55 38 L 55 68" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 60 42 L 60 62" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Свисающие куски содранной коры */}
                  <path d="M 35 70 L 32 75" stroke="#451a03" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 65 70 L 68 78" stroke="#451a03" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 45 25 L 47 30 L 45 32" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 55 33 L 53 38 L 56 40" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'empty-nest',
              title: 'Пустое гнездо',
              desc: 'которое упало после сильного ветра',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Земля и трава */}
                  <path d="M 10 85 Q 50 75 90 85" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Форма гнезда (чаша) */}
                  <path d="M 25 60 C 25 85 75 85 75 60 Z" fill="#d97706" stroke="#78350f" strokeWidth="3" strokeLinejoin="round" />
                  <ellipse cx="50" cy="60" rx="25" ry="8" fill="#451a03" stroke="#78350f" strokeWidth="3" />
                  
                  {/* Ветки, из которых сплетено гнездо */}
                  <path d="M 25 65 Q 40 75 55 70" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 35 75 Q 55 85 70 70" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 30 70 Q 50 80 65 75" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 40 80 Q 60 80 75 65" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Торчащие во все стороны веточки и травинки */}
                  <line x1="25" y1="60" x2="15" y2="50" stroke="#92400e" strokeWidth="2" strokeLinecap="round" />
                  <line x1="28" y1="65" x2="18" y2="70" stroke="#92400e" strokeWidth="2" strokeLinecap="round" />
                  <line x1="75" y1="60" x2="85" y2="55" stroke="#92400e" strokeWidth="2" strokeLinecap="round" />
                  <line x1="72" y1="65" x2="82" y2="75" stroke="#92400e" strokeWidth="2" strokeLinecap="round" />
                  <line x1="45" y1="83" x2="40" y2="92" stroke="#92400e" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Пушинка/перо, оставшееся внутри */}
                  <path d="M 45 62 Q 50 55 55 60" stroke="#f1f5f9" strokeWidth="2" strokeLinecap="round" />
                  <line x1="48" y1="58" x2="52" y2="60" stroke="#f1f5f9" strokeWidth="1" />
                </svg>
              )
            },
            {
              id: 'dewy-web',
              title: 'Паутина с росой',
              desc: 'натянутая между деревьями',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Две ветки, на которых держится паутина */}
                  <path d="M 10 10 L 25 40 L 15 90" fill="none" stroke="#78350f" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 90 20 L 75 50 L 85 90" fill="none" stroke="#78350f" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Основные нити паутины (каркас) */}
                  <g stroke="#94a3b8" strokeWidth="1.5" opacity="0.6">
                    <line x1="50" y1="50" x2="15" y2="20" />
                    <line x1="50" y1="50" x2="85" y2="30" />
                    <line x1="50" y1="50" x2="20" y2="70" />
                    <line x1="50" y1="50" x2="80" y2="70" />
                    <line x1="50" y1="50" x2="50" y2="10" />
                    <line x1="50" y1="50" x2="50" y2="90" />
                  </g>
                  
                  {/* Круговые нити паутины */}
                  <g stroke="#cbd5e1" strokeWidth="1" opacity="0.8">
                    {/* Внутренний круг */}
                    <polygon points="50,35 65,45 60,60 40,60 35,45" />
                    {/* Средний круг */}
                    <polygon points="50,20 75,40 70,70 30,70 25,40" />
                  </g>
                  
                  {/* Капельки росы (блестят) */}
                  <g fill="#bae6fd" stroke="none">
                    <circle cx="50" cy="35" r="2" />
                    <circle cx="65" cy="45" r="1.5" />
                    <circle cx="40" cy="60" r="2" />
                    <circle cx="25" cy="40" r="1.5" />
                    <circle cx="75" cy="40" r="2" />
                    <circle cx="70" cy="70" r="1.5" />
                    <circle cx="30" cy="70" r="2" />
                    <circle cx="50" cy="20" r="1.5" />
                    
                    {/* Самая большая капля */}
                    <circle cx="50" cy="50" r="3" fill="#7dd3fc" />
                    <path d="M 49 48 L 51 50" stroke="#fff" strokeWidth="1" />
                  </g>
                  
                  {/* Маленький паучок в углу */}
                  <circle cx="75" cy="30" r="3" fill="#1f2937" stroke="none" />
                  <path d="M 75 30 L 72 27 M 75 30 L 72 33 M 75 30 L 78 27 M 75 30 L 78 33" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )
            }
          ]
        },
		{
          id: 'ch6-animals',
          title: '🐞 Лесные жители',
          subtitle: 'Тихие соседи',
          theme: 'emerald',
          items: [
            {
              id: 'squirrel',
              title: 'Белка',
              desc: 'прыгающая по веткам',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ветка */}
                  <path d="M 10 80 L 90 80" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
                  <path d="M 70 80 L 85 65" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Хвост (пушистый, буквой С) */}
                  <path d="M 55 50 C 70 45 75 35 65 25 C 50 15 35 30 35 50 C 35 70 45 80 50 75" fill="none" stroke="#ea580c" strokeWidth="10" strokeLinecap="round" />
                  <path d="M 55 50 C 70 45 75 35 65 25 C 50 15 35 30 35 50 C 35 70 45 80 50 75" fill="none" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Туловище */}
                  <path d="M 35 75 C 35 55 55 50 55 65 L 60 75 Z" fill="#ea580c" stroke="#c2410c" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Голова */}
                  <circle cx="50" cy="45" r="7" fill="#ea580c" stroke="#c2410c" strokeWidth="2" />
                  
                  {/* Ушки с кисточками */}
                  <polygon points="46,40 48,32 50,38" fill="#ea580c" stroke="#c2410c" strokeWidth="1" />
                  <polygon points="52,40 54,32 56,38" fill="#ea580c" stroke="#c2410c" strokeWidth="1" />
                  <line x1="48" y1="32" x2="48" y2="28" stroke="#ea580c" strokeWidth="1" />
                  <line x1="54" y1="32" x2="54" y2="28" stroke="#ea580c" strokeWidth="1" />
                  
                  {/* Глаз и носик */}
                  <circle cx="53" cy="43" r="1.5" fill="#1f2937" stroke="none" />
                  <circle cx="57" cy="46" r="1" fill="#1f2937" stroke="none" />
                  
                  {/* Лапки с орешком */}
                  <path d="M 52 55 L 58 55" stroke="#c2410c" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="60" cy="54" r="2" fill="#d97706" stroke="none" />
                </svg>
              )
            },
            {
              id: 'woodpecker',
              title: 'Дятел',
              desc: 'работающий своим «клювом-отбойником»',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ствол дерева */}
                  <rect x="20" y="10" width="15" height="80" fill="#78350f" stroke="#451a03" strokeWidth="3" />
                  <line x1="25" y1="20" x2="25" y2="40" stroke="#451a03" strokeWidth="2" />
                  <line x1="30" y1="60" x2="30" y2="80" stroke="#451a03" strokeWidth="2" />
                  
                  {/* Туловище и хвост (опирается на ствол) */}
                  <path d="M 45 65 C 65 65 70 45 55 35 C 50 30 35 40 40 55 Z" fill="#1f2937" stroke="#111827" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 45 65 L 45 80 L 35 70" fill="#1f2937" stroke="#111827" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Крыло (белые пятна) */}
                  <path d="M 55 45 C 60 55 50 60 45 55" fill="none" stroke="#f1f5f9" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="1.5" fill="#f1f5f9" stroke="none" />
                  <circle cx="55" cy="55" r="1.5" fill="#f1f5f9" stroke="none" />
                  
                  {/* Голова с белой щекой */}
                  <circle cx="45" cy="35" r="6" fill="#1f2937" stroke="none" />
                  <path d="M 45 35 C 40 35 35 40 40 45 C 45 45 48 40 45 35 Z" fill="#f1f5f9" stroke="none" />
                  <circle cx="43" cy="33" r="1" fill="#fff" stroke="none" /> {/* Глаз */}
                  
                  {/* Красная шапочка */}
                  <path d="M 42 30 C 45 27 50 30 48 35" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Клюв */}
                  <path d="M 39 36 L 25 38 L 39 40 Z" fill="#475569" stroke="#1f2937" strokeWidth="1" strokeLinejoin="round" />
                  
                  {/* Лапки */}
                  <path d="M 40 60 L 35 65 L 35 55" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Отлетающие щепки (работа кипит!) */}
                  <line x1="20" y1="35" x2="10" y2="30" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
                  <line x1="15" y1="40" x2="5" y2="42" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
                  <line x1="18" y1="45" x2="12" y2="52" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'lizard',
              title: 'Ящерица',
              desc: 'греющаяся на камне или пне',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Камень */}
                  <path d="M 10 80 C 30 60 70 60 90 80 C 70 100 30 100 10 80 Z" fill="#9ca3af" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 30 70 L 40 75 M 60 75 L 75 70" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Извилистое тело и хвост */}
                  <path d="M 30 60 C 40 45 55 50 65 60 C 75 70 90 50 85 40" fill="none" stroke="#22c55e" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 30 60 C 40 45 55 50 65 60 C 75 70 90 50 85 40" fill="none" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Голова */}
                  <ellipse cx="25" cy="65" rx="6" ry="4" fill="#22c55e" stroke="#15803d" strokeWidth="2" transform="rotate(45 25 65)" />
                  <circle cx="23" cy="63" r="1" fill="#111827" stroke="none" />
                  <circle cx="27" cy="67" r="1" fill="#111827" stroke="none" />
                  
                  {/* Лапки */}
                  <path d="M 38 52 L 32 45 L 35 40 M 32 45 L 28 42" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 45 60 L 40 68 L 35 65 M 40 68 L 45 72" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 60 55 L 65 48 L 70 45 M 65 48 L 60 42" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 62 62 L 68 68 L 75 65 M 68 68 L 70 72" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Узор на спине (точечки) */}
                  <circle cx="45" cy="53" r="1" fill="#15803d" stroke="none" />
                  <circle cx="55" cy="55" r="1" fill="#15803d" stroke="none" />
                  <circle cx="70" cy="60" r="1" fill="#15803d" stroke="none" />
                </svg>
              )
            },
            {
              id: 'stag-beetle',
              title: 'Жук-олень',
              desc: 'или другой крупный лесной жук',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ноги */}
                  <path d="M 40 50 L 25 40 L 15 45 M 60 50 L 75 40 L 85 45" stroke="#290f02" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 40 60 L 20 60 L 15 65 M 60 60 L 80 60 L 85 65" stroke="#290f02" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 45 70 L 30 85 L 25 85 M 55 70 L 70 85 L 75 85" stroke="#290f02" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Тело (Брюшко и панцирь) */}
                  <ellipse cx="50" cy="65" rx="15" ry="20" fill="#451a03" stroke="#290f02" strokeWidth="3" />
                  <line x1="50" y1="45" x2="50" y2="85" stroke="#290f02" strokeWidth="3" /> {/* Разделение надкрылий */}
                  
                  {/* Голова и грудь */}
                  <rect x="38" y="38" width="24" height="10" rx="3" fill="#290f02" stroke="none" />
                  <circle cx="50" cy="35" r="7" fill="#290f02" stroke="none" />
                  
                  {/* Рога (Жвалы) */}
                  <path d="M 45 30 C 35 15 35 10 40 5" fill="none" stroke="#451a03" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 55 30 C 65 15 65 10 60 5" fill="none" stroke="#451a03" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Зубцы на рогах */}
                  <line x1="42" y1="18" x2="38" y2="15" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
                  <line x1="58" y1="18" x2="62" y2="15" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
                  <line x1="40" y1="10" x2="36" y2="8" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
                  <line x1="60" y1="10" x2="64" y2="8" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Блики на панцире */}
                  <path d="M 42 55 Q 40 65 43 75" fill="none" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 58 55 Q 60 65 57 75" fill="none" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'frog',
              title: 'Лягушка',
              desc: 'которая маскируется под цвет листвы',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Лист (маскировка) */}
                  <path d="M 10 50 C 30 20 70 20 90 50 C 70 80 30 80 10 50 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="3" strokeLinejoin="round" />
                  <line x1="20" y1="50" x2="80" y2="50" stroke="#16a34a" strokeWidth="2" opacity="0.5" />
                  <line x1="50" y1="50" x2="60" y2="35" stroke="#16a34a" strokeWidth="2" opacity="0.5" />
                  <line x1="40" y1="50" x2="30" y2="65" stroke="#16a34a" strokeWidth="2" opacity="0.5" />
                  
                  {/* Лапы (задние и передние) */}
                  <path d="M 30 45 C 20 40 20 55 25 55 L 35 55" fill="none" stroke="#15803d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 70 45 C 80 40 80 55 75 55 L 65 55" fill="none" stroke="#15803d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 40 55 L 35 65 M 60 55 L 65 65" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Туловище лягушки */}
                  <ellipse cx="50" cy="48" rx="15" ry="12" fill="#22c55e" stroke="#15803d" strokeWidth="3" />
                  
                  {/* Выпуклые глаза */}
                  <circle cx="42" cy="38" r="4" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  <circle cx="58" cy="38" r="4" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  <circle cx="42" cy="37" r="1.5" fill="#111827" stroke="none" />
                  <circle cx="58" cy="37" r="1.5" fill="#111827" stroke="none" />
                  
                  {/* Рот и пятнышки */}
                  <path d="M 45 52 Q 50 55 55 52" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="50" cy="45" r="1" fill="#15803d" stroke="none" />
                  <circle cx="45" cy="48" r="1" fill="#15803d" stroke="none" />
                  <circle cx="55" cy="48" r="1" fill="#15803d" stroke="none" />
                </svg>
              )
            },
            {
              id: 'forest-mouse',
              title: 'Лесная мышь',
              desc: 'или землеройка, шмыгнувшая в траву',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Трава (заросли) */}
                  <path d="M 10 90 Q 20 60 30 90 M 30 90 Q 40 50 50 90 M 50 90 Q 60 55 70 90 M 70 90 Q 80 65 90 90" fill="none" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 20 90 Q 25 70 40 90 M 60 90 Q 75 60 85 90" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Хвост мышки (длинный и тонкий) */}
                  <path d="M 60 75 C 75 75 85 65 90 50" fill="none" stroke="#fca5a5" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Туловище мышки */}
                  <path d="M 35 80 C 35 65 55 65 65 75 C 65 85 35 85 35 80 Z" fill="#b45309" stroke="#78350f" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Мордочка (острая) */}
                  <path d="M 35 80 L 25 80 L 35 70 Z" fill="#b45309" stroke="#78350f" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="25" cy="80" r="1.5" fill="#111827" stroke="none" /> {/* Носик */}
                  
                  {/* Глазик */}
                  <circle cx="32" cy="76" r="1.5" fill="#111827" stroke="none" />
                  
                  {/* Ушки (круглые) */}
                  <circle cx="38" cy="70" r="4" fill="#b45309" stroke="#78350f" strokeWidth="2" />
                  <circle cx="38" cy="70" r="2" fill="#fca5a5" stroke="none" />
                  
                  {/* Усики */}
                  <path d="M 23 80 L 15 78 M 23 82 L 17 84" fill="none" stroke="#4b5563" strokeWidth="1" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'yellow-butterfly',
              title: 'Бабочка-лимонница',
              desc: 'ярко-желтая (или крапивница)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Траектория полета */}
                  <path d="M 10 70 Q 20 60 30 75 T 50 60" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                  
                  {/* Крылья (форма лимонницы с острыми уголками) */}
                  <path d="M 50 45 C 30 30 20 50 45 60 C 20 70 30 90 50 75 C 70 90 80 70 55 60 C 80 50 70 30 50 45 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 45 60 C 35 70 40 80 50 75" fill="#fde047" stroke="none" />
                  <path d="M 55 60 C 65 70 60 80 50 75" fill="#fde047" stroke="none" />
                  
                  {/* Оранжевые пятнышки на крыльях */}
                  <circle cx="38" cy="48" r="2" fill="#ea580c" stroke="none" />
                  <circle cx="62" cy="48" r="2" fill="#ea580c" stroke="none" />
                  <circle cx="42" cy="70" r="1.5" fill="#ea580c" stroke="none" />
                  <circle cx="58" cy="70" r="1.5" fill="#ea580c" stroke="none" />
                  
                  {/* Прожилки на крыльях */}
                  <path d="M 50 45 L 35 40 M 50 45 L 65 40 M 50 75 L 40 80 M 50 75 L 60 80" stroke="#ca8a04" strokeWidth="1.5" strokeLinecap="round" />
                  
                  {/* Тельце бабочки */}
                  <ellipse cx="50" cy="60" rx="3" ry="12" fill="#451a03" stroke="none" />
                  
                  {/* Усики */}
                  <path d="M 50 48 Q 45 40 40 42 M 50 48 Q 55 40 60 42" fill="none" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'slug',
              title: 'Слизняк',
              desc: 'оставляющий блестящий след на листе',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Большой зеленый лист */}
                  <path d="M 10 70 C 30 40 80 40 90 70 C 80 95 30 95 10 70 Z" fill="#22c55e" stroke="#15803d" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 10 70 C 30 65 60 65 90 70" fill="none" stroke="#15803d" strokeWidth="2" opacity="0.6" />
                  
                  {/* Блестящий слизистый след */}
                  <path d="M 20 65 Q 40 75 60 65" fill="none" stroke="#e0f2fe" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
                  <path d="M 25 65 Q 40 73 55 65" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Тело слизняка (вытянутое) */}
                  <path d="M 45 60 C 40 50 75 50 80 65 C 80 70 45 70 45 60 Z" fill="#94a3b8" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Узор на теле (складки) */}
                  <path d="M 50 56 Q 55 58 50 65 M 58 55 Q 63 58 58 65 M 66 55 Q 71 58 66 65" fill="none" stroke="#64748b" strokeWidth="1.5" />
                  
                  {/* Мантия слизняка (утолщение) */}
                  <ellipse cx="70" cy="58" rx="8" ry="4" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="74" cy="58" r="1" fill="#1f2937" stroke="none" /> {/* Дыхальце */}
                  
                  {/* Рожки (щупальца) */}
                  <path d="M 78 60 L 85 53 M 80 63 L 88 58" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="85" cy="53" r="1" fill="#111827" stroke="none" />
                  <circle cx="88" cy="58" r="1" fill="#111827" stroke="none" />
                </svg>
              )
            },
            {
              id: 'tit-flock',
              title: 'Стая синиц',
              desc: 'перелетающих с дерева на дерево',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Синичка 1 (вверху слева) */}
                  <path d="M 15 35 C 10 30 20 20 25 25 C 30 30 20 40 15 35 Z" fill="#facc15" stroke="#1f2937" strokeWidth="2" />
                  <path d="M 22 22 L 25 18 M 25 25 L 32 20 M 20 35 L 12 42" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="18" cy="23" r="3" fill="#111827" stroke="none" />
                  <path d="M 18 23 C 15 23 15 26 18 26 Z" fill="#fff" stroke="none" /> {/* Щечка */}
                  <path d="M 15 20 L 12 20 L 14 23 Z" fill="#111827" stroke="none" /> {/* Клюв */}
                  
                  {/* Синичка 2 (в центре) */}
                  <path d="M 50 60 C 45 55 55 45 60 50 C 65 55 55 65 50 60 Z" fill="#facc15" stroke="#1f2937" strokeWidth="2" />
                  <path d="M 57 47 L 60 43 M 60 50 L 67 45 M 50 60 L 45 67" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="53" cy="48" r="3" fill="#111827" stroke="none" />
                  <path d="M 53 48 C 50 48 50 51 53 51 Z" fill="#fff" stroke="none" />
                  <path d="M 50 45 L 47 45 L 49 48 Z" fill="#111827" stroke="none" />
                  
                  {/* Синичка 3 (справа) */}
                  <path d="M 75 35 C 70 30 80 20 85 25 C 90 30 80 40 75 35 Z" fill="#facc15" stroke="#1f2937" strokeWidth="2" />
                  <path d="M 82 22 L 85 18 M 85 25 L 92 20 M 75 35 L 68 42" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="78" cy="23" r="3" fill="#111827" stroke="none" />
                  <path d="M 78 23 C 75 23 75 26 78 26 Z" fill="#fff" stroke="none" />
                  <path d="M 75 20 L 72 20 L 74 23 Z" fill="#111827" stroke="none" />
                  
                  {/* Линии перелета */}
                  <path d="M 10 70 Q 25 55 40 65" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 55 35 Q 65 25 80 45" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              )
            },
            {
              id: 'dragonfly-forest',
              title: 'Стрекоза',
              desc: 'у лесного озера или болота',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Трава/камыши на фоне */}
                  <path d="M 10 90 Q 20 60 15 30 M 90 90 Q 80 60 85 30" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
                  <rect x="13" y="40" width="4" height="20" rx="2" fill="#78350f" stroke="none" />
                  <rect x="83" y="45" width="4" height="15" rx="2" fill="#78350f" stroke="none" />
                  
                  {/* Тело стрекозы */}
                  <path d="M 25 75 L 75 25" stroke="#0ea5e9" strokeWidth="5" strokeLinecap="round" />
                  <path d="M 25 75 L 50 50" stroke="#0284c7" strokeWidth="5" strokeLinecap="round" /> {/* Более темный хвост */}
                  
                  {/* Голова и глаза */}
                  <circle cx="77" cy="23" r="5" fill="#0369a1" stroke="none" />
                  <circle cx="75" cy="21" r="2" fill="#38bdf8" stroke="none" />
                  <circle cx="79" cy="25" r="2" fill="#38bdf8" stroke="none" />
                  
                  {/* Крылья (две пары) */}
                  <path d="M 65 35 C 80 20 95 30 85 45 Z" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2" strokeLinejoin="round" opacity="0.8" />
                  <path d="M 65 35 C 50 20 35 30 45 45 Z" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2" strokeLinejoin="round" opacity="0.8" />
                  <path d="M 55 45 C 70 30 85 40 75 55 Z" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2" strokeLinejoin="round" opacity="0.8" />
                  <path d="M 55 45 C 40 30 25 40 35 55 Z" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2" strokeLinejoin="round" opacity="0.8" />
                  
                  {/* Сетка на крыльях */}
                  <path d="M 65 35 L 80 35 M 65 35 L 45 30 M 55 45 L 70 45 M 55 45 L 35 45" stroke="#bae6fd" strokeWidth="1.5" />
                </svg>
              )
            }
          ]
        },
		{
          id: 'ch6-magic',
          title: '✨ Магия света и звука',
          subtitle: 'Слушай и смотри',
          theme: 'purple',
          items: [
            {
              id: 'sunbeam',
              title: 'Солнечный столб',
              desc: 'луч света, пробивающийся сквозь густые ветви',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Темный фон чащи */}
                  <rect x="10" y="10" width="80" height="80" rx="5" fill="#1f2937" stroke="#374151" strokeWidth="2" />
                  
                  {/* Силуэты деревьев на фоне */}
                  <path d="M 20 90 L 20 10 M 80 90 L 80 10 M 35 90 L 35 40 M 65 90 L 65 30" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
                  
                  {/* Солнечные лучи (диагональные) */}
                  <polygon points="10,10 50,10 90,90 40,90" fill="#fef08a" stroke="none" opacity="0.3" />
                  <polygon points="30,10 70,10 85,90 45,90" fill="#fef08a" stroke="none" opacity="0.2" />
                  
                  {/* Пылинки, танцующие в луче света */}
                  <circle cx="45" cy="40" r="1" fill="#fff" stroke="none" opacity="0.8" />
                  <circle cx="55" cy="55" r="1.5" fill="#fff" stroke="none" opacity="0.6" />
                  <circle cx="35" cy="65" r="1" fill="#fff" stroke="none" opacity="0.7" />
                  <circle cx="65" cy="30" r="1" fill="#fff" stroke="none" opacity="0.9" />
                  <circle cx="50" cy="70" r="2" fill="#fff" stroke="none" opacity="0.4" />
                </svg>
              )
            },
            {
              id: 'fern-shadow',
              title: 'Тень от папоротника',
              desc: 'красивый узор на земле',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Лесная почва */}
                  <path d="M 10 90 C 30 75 70 85 90 90 Z" fill="#78350f" stroke="#451a03" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Солнечное пятно на земле */}
                  <circle cx="55" cy="65" r="25" fill="#fde047" stroke="none" opacity="0.3" />
                  
                  {/* Тень папоротника (силуэт) */}
                  <path d="M 20 85 C 40 60 55 50 85 45" fill="none" stroke="#1f2937" strokeWidth="4" opacity="0.5" strokeLinecap="round" />
                  <path d="M 35 70 L 50 60 M 45 60 L 60 52 M 55 52 L 70 45 M 65 48 L 78 40 M 75 42 L 85 35" stroke="#1f2937" strokeWidth="3" opacity="0.5" strokeLinecap="round" />
                  <path d="M 30 80 L 45 85 M 40 70 L 55 78 M 50 62 L 65 72 M 60 55 L 75 65 M 70 50 L 82 58" stroke="#1f2937" strokeWidth="3" opacity="0.5" strokeLinecap="round" />
                  
                  {/* Маленький камешек рядом */}
                  <circle cx="25" cy="75" r="3" fill="#9ca3af" stroke="none" />
                </svg>
              )
            },
            {
              id: 'water-drop',
              title: 'Блестящая капля',
              desc: 'воды или росы на кончике листа',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Зеленый лист */}
                  <path d="M 10 30 C 40 10 80 40 80 50 C 60 60 20 60 10 30 Z" fill="#22c55e" stroke="#15803d" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Прожилки */}
                  <path d="M 10 30 C 40 35 60 45 80 50" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 30 35 L 45 25 M 50 40 L 65 35 M 40 45 L 30 55 M 60 45 L 50 55" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Большая капля воды на самом кончике */}
                  <path d="M 78 52 C 85 62 85 75 78 80 C 71 75 71 62 78 52 Z" fill="#bae6fd" stroke="#0ea5e9" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Блик на капле */}
                  <path d="M 75 65 Q 74 70 76 75" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="80" cy="72" r="1" fill="#ffffff" stroke="none" />
                </svg>
              )
            },
            {
              id: 'forest-echo',
              title: 'Лесное эхо',
              desc: 'найди место, где твой голос возвращается',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Стволы деревьев по краям (создают акустику) */}
                  <path d="M 15 90 L 15 20 M 85 90 L 85 20" stroke="#451a03" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 25 90 L 25 30 M 75 90 L 75 30" stroke="#78350f" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
                  
                  {/* Силуэт человечка, кричащего "Ау!" */}
                  <circle cx="45" cy="65" r="5" fill="#1f2937" stroke="none" />
                  <path d="M 45 70 C 40 70 35 80 35 90 L 55 90 C 55 80 50 70 45 70 Z" fill="#1f2937" stroke="none" />
                  <path d="M 45 75 L 55 70" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" /> {/* Рука рупором */}
                  
                  {/* Исходящие звуковые волны */}
                  <path d="M 55 60 Q 60 55 55 50" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 60 65 Q 70 55 60 45" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 65 70 Q 80 55 65 40" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Возвращающееся эхо (пунктир) */}
                  <path d="M 80 35 Q 65 25 80 15" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
                  <path d="M 70 40 Q 50 25 70 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
                </svg>
              )
            },
            {
              id: 'hidden-stream',
              title: 'Звук ручья',
              desc: 'который скрыт за кустами',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Густые кусты на переднем плане */}
                  <path d="M 5 95 C 5 60 40 60 50 95 C 60 50 95 60 95 95 Z" fill="#16a34a" stroke="#14532d" strokeWidth="3" strokeLinejoin="round" />
                  <circle cx="25" cy="75" r="15" fill="#22c55e" stroke="#14532d" strokeWidth="2" />
                  <circle cx="75" cy="80" r="12" fill="#22c55e" stroke="#14532d" strokeWidth="2" />
                  <circle cx="50" cy="85" r="18" fill="#4ade80" stroke="#14532d" strokeWidth="2" />
                  
                  {/* Журчащая вода на заднем плане (выглядывает) */}
                  <path d="M 20 45 Q 50 55 80 35" fill="none" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 30 50 Q 60 60 90 40" fill="none" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 10 40 Q 40 50 70 30" fill="none" stroke="#bae6fd" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Музыкальные ноты (символизируют звук воды) */}
                  <path d="M 40 30 L 40 15 L 55 10 L 55 25" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="38" cy="30" r="3" fill="#f59e0b" stroke="none" />
                  <circle cx="53" cy="25" r="3" fill="#f59e0b" stroke="none" />
                  
                  <path d="M 70 25 L 70 15 L 75 13" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="68" cy="25" r="2.5" fill="#fbbf24" stroke="none" />
                </svg>
              )
            },
            {
              id: 'rustling-leaves',
              title: 'Шелест листвы',
              desc: 'только на одном дереве, когда остальные стоят тихо',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ствол дерева */}
                  <path d="M 50 95 L 50 30" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 50 50 L 25 30" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Неподвижная ветка (слева) */}
                  <circle cx="25" cy="25" r="12" fill="#16a34a" stroke="none" />
                  <circle cx="15" cy="35" r="8" fill="#16a34a" stroke="none" />
                  
                  {/* Ветка, которая шелестит (справа) */}
                  <path d="M 50 65 L 75 45" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="75" cy="45" r="15" fill="#4ade80" stroke="#15803d" strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="85" cy="35" r="10" fill="#4ade80" stroke="#15803d" strokeWidth="2" strokeDasharray="3 3" />
                  
                  {/* Линии ветра и шелеста */}
                  <path d="M 60 55 Q 75 35 90 55" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 65 65 Q 80 45 95 65" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Отрывающиеся листочки */}
                  <path d="M 70 30 C 75 25 80 30 75 35 Z" fill="#a3e635" stroke="none" />
                  <path d="M 90 45 C 95 40 100 45 95 50 Z" fill="#a3e635" stroke="none" />
                </svg>
              )
            },
            {
              id: 'creaking-tree',
              title: 'Скрип старого дерева',
              desc: 'скрипящего на ветру',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Согнутый ветром старый ствол */}
                  <path d="M 50 95 C 50 60 70 30 85 10" fill="none" stroke="#451a03" strokeWidth="10" strokeLinecap="round" />
                  <path d="M 50 95 C 50 60 70 30 85 10" fill="none" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Оставшаяся листва (сдуваемая) */}
                  <path d="M 85 10 C 60 5 45 20 60 30 C 75 40 95 25 85 10 Z" fill="#22c55e" stroke="#14532d" strokeWidth="2" />
                  
                  {/* Сильный ветер (линии) */}
                  <line x1="10" y1="20" x2="50" y2="20" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 5" />
                  <line x1="20" y1="40" x2="60" y2="40" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 5" />
                  <line x1="30" y1="60" x2="70" y2="60" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 5" />
                  <line x1="40" y1="80" x2="60" y2="80" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 5" />
                  
                  {/* Символы скрипа и напряжения (молнии/зигзаги у основания) */}
                  <path d="M 60 70 L 55 65 L 65 60 L 55 55" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 70 75 L 65 70 L 75 65 L 65 60" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Трещина на стволе */}
                  <path d="M 51 80 L 53 70 L 51 60" fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'dark-thicket',
              title: 'Темная чаща',
              desc: 'место, где лес становится очень темным',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Очень темный фон (ночь/чаща) */}
                  <rect x="10" y="10" width="80" height="80" rx="10" fill="#0f172a" stroke="#1e293b" strokeWidth="4" />
                  
                  {/* Густо посаженные стволы */}
                  <path d="M 20 90 L 25 10 M 40 90 L 35 10 M 60 90 L 55 10 M 80 90 L 75 10 M 30 90 L 45 10 M 70 90 L 65 10" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 50 90 L 50 10 M 25 90 L 15 10 M 85 90 L 90 10" stroke="#020617" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Угрожающие или таинственные светящиеся глаза */}
                  <circle cx="50" cy="55" r="2" fill="#fde047" stroke="none" style={{ filter: 'drop-shadow(0 0 2px #fde047)' }} />
                  <circle cx="58" cy="55" r="2" fill="#fde047" stroke="none" style={{ filter: 'drop-shadow(0 0 2px #fde047)' }} />
                  
                  <circle cx="30" cy="40" r="1.5" fill="#ef4444" stroke="none" style={{ filter: 'drop-shadow(0 0 2px #ef4444)' }} />
                  <circle cx="36" cy="40" r="1.5" fill="#ef4444" stroke="none" style={{ filter: 'drop-shadow(0 0 2px #ef4444)' }} />
                  
                  {/* Туман внизу */}
                  <path d="M 10 80 Q 30 70 50 85 T 90 80" fill="none" stroke="#334155" strokeWidth="4" opacity="0.6" />
                  <path d="M 10 70 Q 40 60 60 75 T 90 65" fill="none" stroke="#334155" strokeWidth="4" opacity="0.4" />
                </svg>
              )
            },
            {
              id: 'sunny-glade',
              title: 'Яркая поляна',
              desc: 'лесная опушка, залитая солнцем',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Яркое солнце в небе */}
                  <circle cx="50" cy="30" r="15" fill="#fef08a" stroke="#fde047" strokeWidth="3" />
                  
                  {/* Лучи солнца */}
                  <path d="M 50 8 L 50 4 M 50 52 L 50 56 M 28 30 L 24 30 M 72 30 L 76 30" stroke="#fde047" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 34 14 L 31 11 M 66 46 L 69 49 M 66 14 L 69 11 M 34 46 L 31 49" stroke="#fde047" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Темные деревья расступаются по краям */}
                  <path d="M 10 90 C 20 70 20 40 10 20" fill="none" stroke="#14532d" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 90 90 C 80 70 80 40 90 20" fill="none" stroke="#14532d" strokeWidth="8" strokeLinecap="round" />
                  
                  {/* Ярко-зеленая трава на поляне */}
                  <path d="M 5 90 C 30 70 70 70 95 90 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Цветочки на поляне, тянущиеся к свету */}
                  <circle cx="40" cy="80" r="2.5" fill="#ffffff" stroke="none" />
                  <circle cx="60" cy="85" r="2.5" fill="#ffffff" stroke="none" />
                  <circle cx="50" cy="75" r="2.5" fill="#fbbf24" stroke="none" />
                  
                  <line x1="40" y1="83" x2="40" y2="87" stroke="#15803d" strokeWidth="2" />
                  <line x1="60" y1="88" x2="60" y2="92" stroke="#15803d" strokeWidth="2" />
                  <line x1="50" y1="78" x2="50" y2="82" stroke="#15803d" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'mossy-stone',
              title: 'Замшелый камень',
              desc: 'полностью обросший мягким зеленым мхом',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Земля */}
                  <path d="M 10 85 L 90 85" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Основа камня (серый) */}
                  <path d="M 20 85 C 10 50 30 30 50 25 C 70 20 90 40 85 85 Z" fill="#9ca3af" stroke="#4b5563" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Сплошной покров мха */}
                  <path d="M 25 80 C 15 55 35 35 50 30 C 65 25 80 45 75 80 C 60 90 40 90 25 80 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Текстура мха (пушистые волны) */}
                  <path d="M 30 45 Q 35 40 40 45 Q 45 50 35 55 Z" fill="#22c55e" stroke="none" />
                  <path d="M 50 40 Q 60 30 65 45 Q 55 50 50 40 Z" fill="#22c55e" stroke="none" />
                  <path d="M 40 60 Q 50 55 60 65 Q 50 75 40 60 Z" fill="#22c55e" stroke="none" />
                  <path d="M 65 60 Q 75 55 75 65 Q 65 75 65 60 Z" fill="#22c55e" stroke="none" />
                  <path d="M 30 70 Q 40 65 40 75 Q 30 80 30 70 Z" fill="#22c55e" stroke="none" />
                  
                  {/* Спороносы мха (маленькие «антеннки») */}
                  <path d="M 45 31 L 43 25" fill="none" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="43" cy="24" r="1.5" fill="#facc15" stroke="none" />
                  
                  <path d="M 55 30 L 57 23" fill="none" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="57" cy="22" r="1.5" fill="#facc15" stroke="none" />
                  
                  <path d="M 35 38 L 30 32" fill="none" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="29" cy="31" r="1.5" fill="#facc15" stroke="none" />
                </svg>
              )
            }
          ]
        }
	   ]
    },
	{
      id: 'ch7',
      title: 'Транспорт',
      emoji: '🚌',
      superTasks: [
        { id: 'ch7-st1', type: '🎫 Счастливый билет', text: 'Найди билет, сумма первых трех цифр которого равна сумме последних трех.' },
        { id: 'ch7-st2', type: '🔊 Звук', text: 'Шипение открывающихся дверей или визг тормозов трамвая на повороте.' },
        { id: 'ch7-st3', type: '👃 Запах', text: 'Запах резины, дизельного топлива или специфический «запах метро».' },
        { id: 'ch7-st4', type: '🖐️ Текстура', text: 'Потрогай поручень в автобусе (гладкий) и обивку сиденья (шершавая).' },
        { id: 'ch7-st5', type: '👀 Взгляд', text: 'Поймай свое отражение в темном окне поезда, когда он заезжает в тоннель.' }
      ],
      sections: [
        {
          id: 'ch7-ground',
          title: '🚌 Наземный общественный транспорт',
          subtitle: 'Смотри в окно',
          theme: 'blue',
          items: [
            {
              id: 'accordion-bus',
              title: 'Автобус-гармошка',
              desc: 'сочлененный автобус с «резиновой» серединой',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Дорога */}
                  <line x1="5" y1="80" x2="95" y2="80" stroke="#94a3b8" strokeWidth="4" />
                  
                  {/* Задняя часть автобуса */}
                  <path d="M 10 70 L 10 35 C 10 30 15 25 20 25 L 40 25 L 40 70 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="3" strokeLinejoin="round" />
                  {/* Передняя часть автобуса */}
                  <path d="M 60 70 L 60 25 L 80 25 C 85 25 90 30 90 40 L 95 65 C 95 68 93 70 90 70 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Резиновая "гармошка" в центре */}
                  <rect x="40" y="27" width="20" height="41" fill="#475569" stroke="#1f2937" strokeWidth="3" />
                  <line x1="45" y1="27" x2="45" y2="68" stroke="#1f2937" strokeWidth="2" />
                  <line x1="50" y1="27" x2="50" y2="68" stroke="#1f2937" strokeWidth="2" />
                  <line x1="55" y1="27" x2="55" y2="68" stroke="#1f2937" strokeWidth="2" />
                  
                  {/* Окна */}
                  <rect x="15" y="32" width="20" height="15" rx="2" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
                  <rect x="65" y="32" width="15" height="15" rx="2" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
                  <path d="M 85 32 L 85 47 L 90 47 Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" /> {/* Лобовое стекло */}
                  
                  {/* Двери */}
                  <rect x="20" y="50" width="10" height="20" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
                  <rect x="65" y="50" width="10" height="20" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
                  
                  {/* Колеса */}
                  <circle cx="25" cy="75" r="7" fill="#1f2937" stroke="#475569" strokeWidth="2" />
                  <circle cx="25" cy="75" r="2" fill="#cbd5e1" stroke="none" />
                  <circle cx="50" cy="75" r="7" fill="#1f2937" stroke="#475569" strokeWidth="2" /> {/* Колесо под гармошкой */}
                  <circle cx="50" cy="75" r="2" fill="#cbd5e1" stroke="none" />
                  <circle cx="80" cy="75" r="7" fill="#1f2937" stroke="#475569" strokeWidth="2" />
                  <circle cx="80" cy="75" r="2" fill="#cbd5e1" stroke="none" />
                </svg>
              )
            },
            {
              id: 'tram-cars',
              title: 'Трамвай',
              desc: 'состоящий из двух или трех вагонов',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Рельсы */}
                  <line x1="5" y1="85" x2="95" y2="85" stroke="#64748b" strokeWidth="4" />
                  <line x1="10" y1="88" x2="90" y2="88" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Пантограф (токоприемник) */}
                  <path d="M 65 10 L 80 10 M 72 10 L 65 20 L 75 30 M 72 10 L 80 20 L 75 30" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />
                  <line x1="10" y1="5" x2="95" y2="5" stroke="#94a3b8" strokeWidth="2" strokeDasharray="10 5" /> {/* Провод */}
                  
                  {/* Первый вагон (справа) */}
                  <path d="M 55 30 L 85 30 C 90 30 95 35 95 45 L 95 75 L 55 75 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" />
                  <rect x="60" y="35" width="15" height="18" rx="2" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                  <path d="M 80 35 L 90 35 L 90 53 L 80 53 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" /> {/* Лобовое */}
                  <rect x="62" y="55" width="10" height="20" fill="#f8fafc" stroke="#b91c1c" strokeWidth="2" /> {/* Дверь */}
                  
                  {/* Сцепка */}
                  <line x1="45" y1="65" x2="55" y2="65" stroke="#1f2937" strokeWidth="4" />
                  
                  {/* Второй вагон (слева) */}
                  <path d="M 10 30 L 45 30 L 45 75 L 10 75 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" />
                  <rect x="15" y="35" width="12" height="18" rx="2" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                  <rect x="30" y="35" width="12" height="18" rx="2" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                  <rect x="16" y="55" width="10" height="20" fill="#f8fafc" stroke="#b91c1c" strokeWidth="2" />
                  
                  {/* Колеса (тележки) */}
                  <rect x="15" y="75" width="25" height="8" rx="2" fill="#374151" stroke="none" />
                  <circle cx="20" cy="81" r="3" fill="#cbd5e1" stroke="none" />
                  <circle cx="35" cy="81" r="3" fill="#cbd5e1" stroke="none" />
                  
                  <rect x="65" y="75" width="25" height="8" rx="2" fill="#374151" stroke="none" />
                  <circle cx="70" cy="81" r="3" fill="#cbd5e1" stroke="none" />
                  <circle cx="85" cy="81" r="3" fill="#cbd5e1" stroke="none" />
                </svg>
              )
            },
            {
              id: 'trolleybus',
              title: 'Троллейбус',
              desc: 'у которого одна «штанга» соскочила с провода',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Провода */}
                  <line x1="5" y1="10" x2="95" y2="10" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="5" y1="15" x2="95" y2="15" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Штанги (рога) */}
                  {/* Левая (на проводе) */}
                  <line x1="40" y1="25" x2="70" y2="10" stroke="#4b5563" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="70" cy="10" r="2" fill="#ef4444" stroke="none" />
                  {/* Правая (соскочила и повисла) */}
                  <line x1="45" y1="25" x2="80" y2="5" stroke="#4b5563" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 80 5 C 85 10 90 20 85 25" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="2 2" /> {/* Искры/пружина */}
                  
                  {/* Кузов троллейбуса */}
                  <path d="M 15 25 L 75 25 C 85 25 90 35 90 45 L 90 75 L 15 75 C 10 75 10 70 10 65 L 10 30 C 10 25 15 25 15 25 Z" fill="#10b981" stroke="#047857" strokeWidth="3" strokeLinejoin="round" />
                  <rect x="25" y="10" width="30" height="15" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" transform="skewX(-20)" /> {/* Ящик на крыше */}
                  
                  {/* Окна и двери */}
                  <rect x="20" y="35" width="20" height="15" rx="2" fill="#e0f2fe" stroke="#047857" strokeWidth="2" />
                  <rect x="45" y="35" width="15" height="15" rx="2" fill="#e0f2fe" stroke="#047857" strokeWidth="2" />
                  <path d="M 65 35 L 80 35 Q 85 35 85 45 L 85 50 L 65 50 Z" fill="#e0f2fe" stroke="#047857" strokeWidth="2" />
                  <rect x="45" y="55" width="15" height="20" fill="#f8fafc" stroke="#047857" strokeWidth="2" /> {/* Дверь */}
                  
                  {/* Фары и бампер */}
                  <circle cx="85" cy="65" r="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
                  <rect x="10" y="70" width="80" height="5" fill="#475569" stroke="none" />
                  
                  {/* Колеса */}
                  <circle cx="30" cy="75" r="8" fill="#1f2937" stroke="#374151" strokeWidth="2" />
                  <circle cx="30" cy="75" r="3" fill="#94a3b8" stroke="none" />
                  <circle cx="75" cy="75" r="8" fill="#1f2937" stroke="#374151" strokeWidth="2" />
                  <circle cx="75" cy="75" r="3" fill="#94a3b8" stroke="none" />
                </svg>
              )
            },
            {
              id: 'colored-minibus',
              title: 'Маршрутка',
              desc: 'необычного цвета (не белая и не желтая)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кузов микроавтобуса (Яркий фиолетовый) */}
                  <path d="M 15 35 L 65 35 C 75 35 80 45 85 55 L 90 75 L 10 75 C 5 75 5 70 5 65 L 5 45 C 5 35 10 35 15 35 Z" fill="#a855f7" stroke="#7e22ce" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Окна (тонированные) */}
                  <rect x="15" y="42" width="20" height="12" rx="2" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
                  <rect x="40" y="42" width="20" height="12" rx="2" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
                  <path d="M 65 42 L 75 42 C 78 42 80 47 82 54 L 65 54 Z" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2" /> {/* Переднее окно водителя */}
                  
                  {/* Дверь пассажира */}
                  <rect x="38" y="40" width="24" height="35" rx="1" fill="none" stroke="#7e22ce" strokeWidth="2" />
                  <line x1="42" y1="58" x2="45" y2="58" stroke="#7e22ce" strokeWidth="2" /> {/* Ручка */}
                  
                  {/* Табличка с номером маршрута на лобовом */}
                  <rect x="68" y="46" width="10" height="6" fill="#fff" stroke="#0f172a" strokeWidth="1" />
                  <text x="70" y="51" fontSize="4" fill="#000" stroke="none" fontFamily="sans-serif">99</text>
                  
                  {/* Фара и решетка */}
                  <ellipse cx="88" cy="65" rx="2" ry="4" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
                  <line x1="85" y1="70" x2="88" y2="70" stroke="#1f2937" strokeWidth="2" />
                  
                  {/* Колеса */}
                  <circle cx="25" cy="75" r="7" fill="#1f2937" stroke="#475569" strokeWidth="2" />
                  <circle cx="25" cy="75" r="2" fill="#cbd5e1" stroke="none" />
                  <circle cx="75" cy="75" r="7" fill="#1f2937" stroke="#475569" strokeWidth="2" />
                  <circle cx="75" cy="75" r="2" fill="#cbd5e1" stroke="none" />
                </svg>
              )
            },
            {
              id: 'electrobus',
              title: 'Электробус',
              desc: 'со знаком молнии или вилки',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Современный кузов (голубой/белый) */}
                  <path d="M 10 25 L 80 25 C 90 25 95 35 95 45 L 95 75 L 10 75 C 5 75 5 70 5 65 L 5 35 C 5 25 10 25 10 25 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="3" strokeLinejoin="round" />
                  <rect x="5" y="55" width="90" height="20" fill="#f8fafc" stroke="none" /> {/* Белый низ */}
                  <line x1="5" y1="55" x2="95" y2="55" stroke="#0284c7" strokeWidth="2" />
                  
                  {/* Огромные тонированные окна (единая панель) */}
                  <rect x="15" y="32" width="70" height="20" rx="3" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />
                  
                  {/* Надпись "Это электробус" */}
                  <text x="20" y="68" fontSize="6" fill="#0284c7" stroke="none" fontFamily="sans-serif" fontWeight="bold">ЭЛЕКТРОБУС</text>
                  
                  {/* Значок молнии/вилки */}
                  <circle cx="75" cy="65" r="6" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
                  <path d="M 75 61 L 72 65 L 76 65 L 75 69" fill="none" stroke="#ca8a04" strokeWidth="2" strokeLinejoin="miter" />
                  
                  {/* Зарядный пантограф на крыше (сложенный) */}
                  <rect x="60" y="18" width="25" height="7" rx="2" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
                  <line x1="70" y1="15" x2="80" y2="18" stroke="#64748b" strokeWidth="2" />
                  
                  {/* Колеса с колпаками */}
                  <circle cx="25" cy="75" r="8" fill="#1f2937" stroke="#475569" strokeWidth="2" />
                  <circle cx="25" cy="75" r="4" fill="#0284c7" stroke="none" />
                  <circle cx="75" cy="75" r="8" fill="#1f2937" stroke="#475569" strokeWidth="2" />
                  <circle cx="75" cy="75" r="4" fill="#0284c7" stroke="none" />
                </svg>
              )
            },
            {
              id: 'bright-taxi',
              title: 'Такси',
              desc: 'с шашечками или светящимся коробом на крыше',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кузов автомобиля (Классический желтый) */}
                  <path d="M 15 65 L 5 65 C 5 55 10 50 15 50 L 30 45 L 45 30 C 50 25 65 25 75 35 L 85 45 L 95 50 C 95 60 95 65 85 65 L 15 65 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Окна */}
                  <path d="M 35 45 L 47 33 L 58 33 L 58 45 Z" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" /> {/* Переднее окно */}
                  <path d="M 62 35 L 72 45 L 62 45 Z" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" /> {/* Заднее окно */}
                  
                  {/* Светящийся короб "TAXI" на крыше */}
                  <rect x="45" y="20" width="20" height="8" rx="2" fill="#fff" stroke="#ca8a04" strokeWidth="2" />
                  <text x="47" y="26" fontSize="5" fill="#1f2937" stroke="none" fontFamily="sans-serif" fontWeight="bold">TAXI</text>
                  <path d="M 40 25 Q 55 15 70 25" fill="none" stroke="#fef08a" strokeWidth="2" opacity="0.6" /> {/* Свечение */}
                  
                  {/* Шашечки (полоса на борту) */}
                  <rect x="25" y="55" width="50" height="4" fill="#1f2937" stroke="none" />
                  <rect x="30" y="55" width="4" height="4" fill="#fff" stroke="none" />
                  <rect x="40" y="55" width="4" height="4" fill="#fff" stroke="none" />
                  <rect x="50" y="55" width="4" height="4" fill="#fff" stroke="none" />
                  <rect x="60" y="55" width="4" height="4" fill="#fff" stroke="none" />
                  <rect x="70" y="55" width="4" height="4" fill="#fff" stroke="none" />
                  
                  {/* Фары и бампер */}
                  <ellipse cx="10" cy="55" rx="2" ry="4" fill="#ef4444" stroke="none" /> {/* Задняя */}
                  <ellipse cx="90" cy="55" rx="3" ry="5" fill="#fff" stroke="#ca8a04" strokeWidth="1" /> {/* Передняя */}
                  
                  {/* Колеса */}
                  <circle cx="25" cy="65" r="7" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                  <circle cx="25" cy="65" r="3" fill="#cbd5e1" stroke="none" />
                  <circle cx="75" cy="65" r="7" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                  <circle cx="75" cy="65" r="3" fill="#cbd5e1" stroke="none" />
                </svg>
              )
            },
            {
              id: 'double-decker',
              title: 'Двухэтажный автобус',
              desc: 'туристический даблдекер',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Высокий кузов (Красный) */}
                  <path d="M 15 15 L 85 15 C 90 15 95 20 95 30 L 95 75 L 15 75 C 10 75 10 70 10 65 L 10 20 C 10 15 15 15 15 15 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Окна второго этажа */}
                  <rect x="15" y="20" width="15" height="12" rx="2" fill="#e0f2fe" stroke="#b91c1c" strokeWidth="2" />
                  <rect x="35" y="20" width="15" height="12" rx="2" fill="#e0f2fe" stroke="#b91c1c" strokeWidth="2" />
                  <rect x="55" y="20" width="15" height="12" rx="2" fill="#e0f2fe" stroke="#b91c1c" strokeWidth="2" />
                  <path d="M 75 20 L 88 20 C 90 20 91 22 91 25 L 91 32 L 75 32 Z" fill="#e0f2fe" stroke="#b91c1c" strokeWidth="2" />
                  
                  {/* Окна первого этажа */}
                  <rect x="15" y="45" width="15" height="15" rx="2" fill="#e0f2fe" stroke="#b91c1c" strokeWidth="2" />
                  <rect x="35" y="45" width="15" height="15" rx="2" fill="#e0f2fe" stroke="#b91c1c" strokeWidth="2" />
                  <rect x="55" y="45" width="15" height="15" rx="2" fill="#e0f2fe" stroke="#b91c1c" strokeWidth="2" />
                  <path d="M 75 45 L 88 45 C 90 45 92 47 92 50 L 92 60 L 75 60 Z" fill="#e0f2fe" stroke="#b91c1c" strokeWidth="2" />
                  
                  {/* Разделительная полоса */}
                  <line x1="10" y1="38" x2="95" y2="38" stroke="#fef08a" strokeWidth="2" />
                  <line x1="10" y1="40" x2="95" y2="40" stroke="#fef08a" strokeWidth="2" />
                  
                  {/* Входная дверь (сзади) */}
                  <rect x="15" y="45" width="10" height="30" fill="#f8fafc" stroke="#b91c1c" strokeWidth="2" />
                  <line x1="20" y1="45" x2="20" y2="75" stroke="#b91c1c" strokeWidth="1" />
                  
                  {/* Колеса */}
                  <circle cx="35" cy="75" r="8" fill="#1f2937" stroke="#475569" strokeWidth="2" />
                  <circle cx="35" cy="75" r="3" fill="#cbd5e1" stroke="none" />
                  <circle cx="75" cy="75" r="8" fill="#1f2937" stroke="#475569" strokeWidth="2" />
                  <circle cx="75" cy="75" r="3" fill="#cbd5e1" stroke="none" />
                </svg>
              )
            },
            {
              id: 'school-bus',
              title: 'Школьный автобус',
              desc: 'желтый, с надписью «Дети»',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кузов классического школьного автобуса (Капотный) */}
                  <path d="M 15 25 L 65 25 C 70 25 75 30 75 35 L 85 45 C 90 50 95 55 95 60 L 95 75 L 15 75 Z" fill="#eab308" stroke="#a16207" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Характерный выступающий капот */}
                  <rect x="75" y="45" width="20" height="15" fill="#facc15" stroke="#a16207" strokeWidth="2" />
                  <line x1="80" y1="45" x2="80" y2="60" stroke="#a16207" strokeWidth="1" />
                  <line x1="85" y1="45" x2="85" y2="60" stroke="#a16207" strokeWidth="1" />
                  <line x1="90" y1="45" x2="90" y2="60" stroke="#a16207" strokeWidth="1" />
                  
                  {/* Черные полосы на бортах */}
                  <line x1="15" y1="50" x2="70" y2="50" stroke="#1f2937" strokeWidth="3" />
                  <line x1="15" y1="65" x2="70" y2="65" stroke="#1f2937" strokeWidth="2" />
                  
                  {/* Окна (много маленьких) */}
                  <rect x="18" y="30" width="10" height="12" rx="1" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
                  <rect x="32" y="30" width="10" height="12" rx="1" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
                  <rect x="46" y="30" width="10" height="12" rx="1" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
                  <rect x="60" y="30" width="12" height="12" rx="1" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" /> {/* Лобовое */}
                  
                  {/* Знак "STOP" откинутый сбоку */}
                  <polygon points="25,55 35,55 38,62 35,69 25,69 22,62" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" strokeLinejoin="round" />
                  <line x1="28" y1="62" x2="32" y2="62" stroke="#fff" strokeWidth="2" />
                  
                  {/* Фара на крыше и спереди */}
                  <circle cx="20" cy="22" r="3" fill="#ef4444" stroke="none" />
                  <circle cx="70" cy="22" r="3" fill="#fef08a" stroke="none" />
                  <circle cx="95" cy="55" r="3" fill="#fff" stroke="#a16207" strokeWidth="1" />
                  
                  {/* Колеса */}
                  <circle cx="30" cy="75" r="8" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                  <circle cx="30" cy="75" r="3" fill="#cbd5e1" stroke="none" />
                  <circle cx="75" cy="75" r="8" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                  <circle cx="75" cy="75" r="3" fill="#cbd5e1" stroke="none" />
                </svg>
              )
            },
            {
              id: 'bus-validator',
              title: 'Валидатор',
              desc: 'с горящей лампочкой',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Металлический поручень (Желтый) */}
                  <line x1="50" y1="5" x2="50" y2="95" stroke="#facc15" strokeWidth="8" strokeLinecap="round" />
                  
                  {/* Корпус валидатора */}
                  <rect x="30" y="30" width="40" height="45" rx="5" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" />
                  
                  {/* Экран/Зона прикладывания карты */}
                  <rect x="35" y="45" width="30" height="25" rx="3" fill="#1e293b" stroke="none" />
                  
                  {/* Светящийся круг (Успешная оплата) */}
                  <circle cx="50" cy="57" r="8" fill="#22c55e" stroke="none" style={{ filter: 'drop-shadow(0 0 4px #22c55e)' }} />
                  <path d="M 46 57 L 49 60 L 55 54" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Верхние индикаторы */}
                  <circle cx="38" cy="38" r="2" fill="#ef4444" stroke="none" />
                  <circle cx="45" cy="38" r="2" fill="#22c55e" stroke="none" style={{ filter: 'drop-shadow(0 0 2px #22c55e)' }} />
                  <circle cx="52" cy="38" r="2" fill="#3b82f6" stroke="none" />
                  <circle cx="59" cy="38" r="2" fill="#f59e0b" stroke="none" />
                  
                  {/* Прикладываемая карта (в руке невидимки) */}
                  <path d="M 65 75 L 85 55 L 75 45 L 55 65 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" strokeLinejoin="round" />
                  <rect x="62" y="55" width="5" height="5" fill="#fcd34d" stroke="none" transform="rotate(-45 62 55)" /> {/* Чип */}
                  
                  {/* Сигналы связи (NFC) */}
                  <path d="M 45 70 Q 50 75 55 70" fill="none" stroke="#22c55e" strokeWidth="2" opacity="0.8" />
                  <path d="M 40 75 Q 50 82 60 75" fill="none" stroke="#22c55e" strokeWidth="2" opacity="0.5" />
                </svg>
              )
            },
            {
              id: 'stop-button',
              title: 'Кнопка «Стоп»',
              desc: 'или связь с водителем',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Желтый поручень автобуса */}
                  <line x1="30" y1="10" x2="30" y2="90" stroke="#facc15" strokeWidth="12" strokeLinecap="round" />
                  
                  {/* Красный блок кнопки на поручне */}
                  <rect x="22" y="40" width="28" height="40" rx="4" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" />
                  
                  {/* Сама кнопка (круглая, выпуклая) */}
                  <circle cx="36" cy="60" r="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
                  <circle cx="36" cy="60" r="5" fill="#ef4444" stroke="none" />
                  
                  {/* Надпись STOP */}
                  <text x="25" y="50" fontSize="8" fill="#fff" stroke="none" fontFamily="sans-serif" fontWeight="bold">STOP</text>
                  
                  {/* Динамик/микрофон (дырочки) */}
                  <circle cx="32" cy="72" r="1" fill="#7f1d1d" stroke="none" />
                  <circle cx="36" cy="72" r="1" fill="#7f1d1d" stroke="none" />
                  <circle cx="40" cy="72" r="1" fill="#7f1d1d" stroke="none" />
                  <circle cx="34" cy="75" r="1" fill="#7f1d1d" stroke="none" />
                  <circle cx="38" cy="75" r="1" fill="#7f1d1d" stroke="none" />
                  
                  {/* Указательный палец, нажимающий на кнопку */}
                  <path d="M 80 80 L 60 65 C 55 60 45 60 40 65 L 43 58 C 45 55 50 55 55 60 L 70 70" fill="#fca5a5" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 43 58 C 40 58 35 60 36 60" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Эффект нажатия (линии) */}
                  <path d="M 20 60 L 15 60 M 25 50 L 20 45 M 25 70 L 20 75" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            }
          ]
        },
		  {
          id: 'ch7-stations',
          title: '🚉 Станции, остановки и рельсы',
          subtitle: 'Метро и вокзалы',
          theme: 'orange',
          items: [
            {
              id: 'electronic-board',
              title: 'Электронное табло',
              desc: 'сколько минут ждать следующий рейс?',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Столб остановки */}
                  <line x1="80" y1="10" x2="80" y2="90" stroke="#64748b" strokeWidth="6" />
                  
                  {/* Корпус табло */}
                  <rect x="10" y="20" width="70" height="30" rx="3" fill="#111827" stroke="#374151" strokeWidth="4" />
                  
                  {/* Крепления к столбу */}
                  <line x1="80" y1="30" x2="90" y2="30" stroke="#374151" strokeWidth="4" />
                  <line x1="80" y1="40" x2="90" y2="40" stroke="#374151" strokeWidth="4" />
                  
                  {/* Иконка автобуса на табло */}
                  <path d="M 18 35 L 30 35 C 32 35 32 40 32 40 L 18 40 Z" fill="#f59e0b" stroke="none" />
                  <circle cx="21" cy="42" r="1.5" fill="#f59e0b" stroke="none" />
                  <circle cx="28" cy="42" r="1.5" fill="#f59e0b" stroke="none" />
                  
                  {/* Светящиеся цифры (например, "5 MIN") */}
                  <path d="M 40 30 L 45 30 L 40 35 L 45 35 L 45 42 L 40 42" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="square" style={{ filter: 'drop-shadow(0 0 2px #f59e0b)' }} />
                  <text x="50" y="42" fontSize="12" fill="#f59e0b" stroke="none" fontFamily="monospace" style={{ filter: 'drop-shadow(0 0 2px #f59e0b)' }}>MIN</text>
                  
                  {/* Дополнительная строка на табло (бегущая строка) */}
                  <line x1="15" y1="46" x2="65" y2="46" stroke="#ef4444" strokeWidth="2" strokeDasharray="2 2" style={{ filter: 'drop-shadow(0 0 1px #ef4444)' }} />
                </svg>
              )
            },
            {
              id: 'route-map-funny',
              title: 'Схема маршрутов',
              desc: 'с нарисованной смешной рожицей',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Информационный стенд */}
                  <rect x="20" y="15" width="60" height="70" rx="2" fill="#f8fafc" stroke="#94a3b8" strokeWidth="4" />
                  <rect x="20" y="15" width="60" height="15" fill="#3b82f6" stroke="#0284c7" strokeWidth="2" />
                  <line x1="30" y1="22" x2="70" y2="22" stroke="#ffffff" strokeWidth="3" />
                  
                  {/* Линии маршрутов на карте */}
                  <path d="M 30 40 L 45 40 L 55 60 L 70 60" stroke="#ef4444" strokeWidth="3" />
                  <circle cx="30" cy="40" r="2" fill="#fff" stroke="#ef4444" strokeWidth="2" />
                  <circle cx="45" cy="40" r="2" fill="#fff" stroke="#ef4444" strokeWidth="2" />
                  <circle cx="55" cy="60" r="2" fill="#fff" stroke="#ef4444" strokeWidth="2" />
                  
                  <path d="M 40 80 L 40 50 L 60 35 L 75 35" stroke="#22c55e" strokeWidth="3" />
                  <circle cx="40" cy="80" r="2" fill="#fff" stroke="#22c55e" strokeWidth="2" />
                  <circle cx="40" cy="50" r="2" fill="#fff" stroke="#22c55e" strokeWidth="2" />
                  <circle cx="60" cy="35" r="2" fill="#fff" stroke="#22c55e" strokeWidth="2" />
                  
                  {/* Вандальная смешная рожица маркером */}
                  <circle cx="60" cy="70" r="8" fill="none" stroke="#1f2937" strokeWidth="2" style={{ transform: 'rotate(-15deg)', transformOrigin: '60px 70px' }} />
                  <circle cx="57" cy="67" r="1" fill="#1f2937" stroke="none" />
                  <circle cx="63" cy="67" r="1" fill="#1f2937" stroke="none" />
                  <path d="M 56 73 Q 60 76 64 73" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 64 73 C 66 75 66 78 64 80" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" /> {/* Высунутый язык */}
                </svg>
              )
            },
            {
              id: 'grass-rails',
              title: 'Трамвайные рельсы',
              desc: 'уходящие в зеленую траву',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Трава (фон) */}
                  <rect x="5" y="40" width="90" height="55" rx="5" fill="#4ade80" stroke="#16a34a" strokeWidth="3" />
                  
                  {/* Рельсы в перспективе */}
                  <path d="M 35 95 L 45 40" stroke="#9ca3af" strokeWidth="5" strokeLinecap="square" />
                  <path d="M 65 95 L 55 40" stroke="#9ca3af" strokeWidth="5" strokeLinecap="square" />
                  
                  {/* Шпалы (частично скрыты травой) */}
                  <line x1="38" y1="80" x2="62" y2="80" stroke="#78350f" strokeWidth="4" />
                  <line x1="41" y1="65" x2="59" y2="65" stroke="#78350f" strokeWidth="3" />
                  <line x1="43" y1="50" x2="57" y2="50" stroke="#78350f" strokeWidth="2" />
                  
                  {/* Травинки, нарастающие на рельсы */}
                  <path d="M 30 85 Q 35 75 40 85" fill="none" stroke="#15803d" strokeWidth="2" />
                  <path d="M 60 75 Q 65 65 70 75" fill="none" stroke="#15803d" strokeWidth="2" />
                  <path d="M 45 90 Q 50 80 55 90" fill="none" stroke="#15803d" strokeWidth="2" />
                  <path d="M 38 60 Q 42 55 45 60" fill="none" stroke="#15803d" strokeWidth="2" />
                  
                  {/* Солнечные блики на металле рельсов */}
                  <line x1="38" y1="80" x2="41" y2="65" stroke="#ffffff" strokeWidth="1.5" />
                  <line x1="62" y1="80" x2="59" y2="65" stroke="#ffffff" strokeWidth="1.5" />
                </svg>
              )
            },
            {
              id: 'rail-switch',
              title: 'Железнодорожная стрелка',
              desc: 'место, где рельсы расходятся',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Камни/щебень (основание) */}
                  <path d="M 10 90 L 90 90 L 70 10 L 30 10 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Шпалы */}
                  <line x1="20" y1="75" x2="80" y2="75" stroke="#78350f" strokeWidth="4" />
                  <line x1="25" y1="60" x2="75" y2="60" stroke="#78350f" strokeWidth="3.5" />
                  <line x1="30" y1="45" x2="70" y2="45" stroke="#78350f" strokeWidth="3" />
                  <line x1="35" y1="30" x2="65" y2="30" stroke="#78350f" strokeWidth="2.5" />
                  <line x1="40" y1="15" x2="60" y2="15" stroke="#78350f" strokeWidth="2" />
                  
                  {/* Главные рельсы */}
                  <path d="M 40 90 L 45 10" stroke="#475569" strokeWidth="4" strokeLinecap="square" />
                  <path d="M 60 90 L 55 10" stroke="#475569" strokeWidth="4" strokeLinecap="square" />
                  
                  {/* Отводные рельсы (стрелка) */}
                  <path d="M 60 60 C 70 45 85 20 85 10" fill="none" stroke="#475569" strokeWidth="4" strokeLinecap="square" />
                  <path d="M 44 60 C 50 45 65 20 65 10" fill="none" stroke="#475569" strokeWidth="4" strokeLinecap="square" />
                  
                  {/* Переводной механизм (рычаг) */}
                  <rect x="15" y="55" width="10" height="8" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
                  <circle cx="20" cy="50" r="3" fill="#ef4444" stroke="none" />
                  <line x1="20" y1="55" x2="20" y2="50" stroke="#1f2937" strokeWidth="2" />
                  <line x1="25" y1="59" x2="43" y2="59" stroke="#1f2937" strokeWidth="2" /> {/* Тяга к рельсам */}
                </svg>
              )
            },
            {
              id: 'turnstile',
              title: 'Турникет',
              desc: 'в метро или на вокзале',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Левая и правая стойки турникета */}
                  <path d="M 20 90 L 20 40 L 40 40 L 40 90 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 60 90 L 60 40 L 80 40 L 80 90 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Верхние панели (с валидаторами) */}
                  <polygon points="20,40 30,30 40,40" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
                  <polygon points="60,40 70,30 80,40" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
                  <circle cx="30" cy="36" r="3" fill="#38bdf8" stroke="none" />
                  <circle cx="70" cy="36" r="3" fill="#22c55e" stroke="none" style={{ filter: 'drop-shadow(0 0 3px #22c55e)' }} />
                  
                  {/* Стеклянные створки (открываются) */}
                  <path d="M 40 60 L 50 45" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
                  <path d="M 60 60 L 50 45" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
                  
                  {/* Экран на передней панели */}
                  <rect x="65" y="50" width="10" height="15" rx="1" fill="#1e293b" stroke="none" />
                  <circle cx="70" cy="55" r="2" fill="#22c55e" stroke="none" />
                  <line x1="68" y1="60" x2="72" y2="60" stroke="#fff" strokeWidth="1" />
                </svg>
              )
            },
            {
              id: 'escalator',
              title: 'Эскалатор',
              desc: 'который едет вниз',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Балюстрада эскалатора (наклонная) */}
                  <path d="M 10 20 L 70 80 L 90 80 L 90 95 L 60 95 L 10 45 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Резиновый поручень (черный) */}
                  <path d="M 10 20 L 70 80 L 85 80" fill="none" stroke="#1f2937" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 85 80 C 90 80 90 90 85 90 L 70 90 L 10 30" fill="none" stroke="#1f2937" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Ступени эскалатора (ребристые) */}
                  <path d="M 35 45 L 50 45 L 50 60 L 65 60 L 65 75 L 80 75" fill="none" stroke="#475569" strokeWidth="3" strokeLinejoin="miter" />
                  <line x1="35" y1="47" x2="50" y2="47" stroke="#94a3b8" strokeWidth="1" />
                  <line x1="50" y1="62" x2="65" y2="62" stroke="#94a3b8" strokeWidth="1" />
                  
                  {/* Светильники (лампы) на балюстраде */}
                  <ellipse cx="25" cy="45" rx="3" ry="5" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" transform="rotate(-45 25 45)" style={{ filter: 'drop-shadow(0 0 3px #fef08a)' }} />
                  <ellipse cx="45" cy="65" rx="3" ry="5" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" transform="rotate(-45 45 65)" style={{ filter: 'drop-shadow(0 0 3px #fef08a)' }} />
                  <ellipse cx="65" cy="85" rx="3" ry="5" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" transform="rotate(-45 65 85)" style={{ filter: 'drop-shadow(0 0 3px #fef08a)' }} />
                  
                  {/* Стрелка "Вниз" */}
                  <path d="M 80 40 L 80 60 M 75 55 L 80 60 L 85 55" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )
            },
            {
              id: 'ticket-machine',
              title: 'Автомат по продаже билетов',
              desc: 'какие монеты он принимает?',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Корпус автомата */}
                  <rect x="25" y="15" width="50" height="80" rx="4" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="4" />
                  
                  {/* Козырек сверху */}
                  <path d="M 20 15 L 80 15 L 75 5 L 25 5 Z" fill="#1e3a8a" stroke="none" />
                  
                  {/* Экран (сенсорный) */}
                  <rect x="35" y="25" width="30" height="25" rx="2" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
                  {/* Элементы на экране */}
                  <rect x="38" y="28" width="10" height="8" rx="1" fill="#38bdf8" stroke="none" />
                  <rect x="52" y="28" width="10" height="8" rx="1" fill="#38bdf8" stroke="none" />
                  <rect x="38" y="38" width="24" height="8" rx="1" fill="#22c55e" stroke="none" />
                  
                  {/* Щели для монет и купюр */}
                  <rect x="70" y="30" width="2" height="10" fill="#1f2937" stroke="none" /> {/* Монеты */}
                  <rect x="70" y="45" width="10" height="2" fill="#1f2937" stroke="none" /> {/* Карты */}
                  <circle cx="71" cy="27" r="1.5" fill="#facc15" stroke="none" /> {/* Монетка летит */}
                  
                  {/* Лоток выдачи билетов/сдачи */}
                  <rect x="35" y="65" width="30" height="15" rx="2" fill="#1e293b" stroke="none" />
                  {/* Билетик торчит */}
                  <rect x="42" y="60" width="16" height="10" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
                  <line x1="45" y1="63" x2="55" y2="63" stroke="#ca8a04" strokeWidth="1" />
                </svg>
              )
            },
            {
              id: 'platform-mirror',
              title: 'Зеркало на перроне',
              desc: 'чтобы машинист видел весь поезд',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Столб */}
                  <line x1="50" y1="95" x2="50" y2="15" stroke="#4b5563" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Кронштейн зеркала */}
                  <path d="M 50 25 L 75 25" stroke="#374151" strokeWidth="4" />
                  
                  {/* Выпуклое зеркало (круглое) */}
                  <circle cx="75" cy="40" r="20" fill="#facc15" stroke="#ca8a04" strokeWidth="4" />
                  <circle cx="75" cy="40" r="16" fill="#e0f2fe" stroke="none" />
                  
                  {/* Отражение поезда в зеркале (изогнутое) */}
                  <path d="M 65 45 C 75 40 85 45 85 50" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 65 35 C 75 30 85 35 85 40" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="68" cy="48" r="2" fill="#1f2937" stroke="none" />
                  <circle cx="82" cy="48" r="2" fill="#1f2937" stroke="none" />
                  
                  {/* Блик на выпуклом стекле */}
                  <path d="M 63 32 C 67 28 73 26 79 28" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                  
                  {/* Полоса безопасности на перроне (внизу) */}
                  <rect x="10" y="85" width="80" height="5" fill="#facc15" stroke="none" />
                  <line x1="20" y1="85" x2="15" y2="90" stroke="#ca8a04" strokeWidth="2" />
                  <line x1="40" y1="85" x2="35" y2="90" stroke="#ca8a04" strokeWidth="2" />
                  <line x1="60" y1="85" x2="55" y2="90" stroke="#ca8a04" strokeWidth="2" />
                  <line x1="80" y1="85" x2="75" y2="90" stroke="#ca8a04" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'audio-announcement',
              title: 'Звуковое объявление',
              desc: 'о прибытии поезда или закрытии дверей',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Рупор громкоговорителя на стене */}
                  <path d="M 45 40 L 25 25 L 25 75 L 45 60 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                  <rect x="45" y="45" width="10" height="10" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
                  
                  {/* Крепление к стене/потолку */}
                  <path d="M 50 45 L 65 45 L 65 20" fill="none" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
                  <line x1="55" y1="20" x2="75" y2="20" stroke="#4b5563" strokeWidth="4" />
                  
                  {/* Звуковые волны (громко!) */}
                  <path d="M 15 40 C 10 45 10 55 15 60" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 8 30 C -2 40 -2 60 8 70" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Ноты / Пиктограмма звука */}
                  <path d="M 70 80 L 70 65 L 80 62 L 80 77" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="68" cy="80" r="3" fill="#1f2937" stroke="none" />
                  <circle cx="78" cy="77" r="3" fill="#1f2937" stroke="none" />
                  
                  <path d="M 85 55 L 85 45 L 90 43" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="83" cy="55" r="2.5" fill="#1f2937" stroke="none" />
                </svg>
              )
            },
            {
              id: 'exit-sign',
              title: 'Табло «Выход в город»',
              desc: 'со списком улиц',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Подвесы с потолка */}
                  <line x1="30" y1="5" x2="30" y2="20" stroke="#9ca3af" strokeWidth="2" />
                  <line x1="70" y1="5" x2="70" y2="20" stroke="#9ca3af" strokeWidth="2" />
                  
                  {/* Светящийся короб (знак выхода) */}
                  <rect x="15" y="20" width="70" height="40" rx="3" fill="#f8fafc" stroke="#9ca3af" strokeWidth="3" />
                  <rect x="18" y="23" width="64" height="34" rx="2" fill="#1e3a8a" stroke="none" />
                  
                  {/* Надпись ВЫХОД / EXIT */}
                  <text x="35" y="45" fontSize="12" fill="#fff" stroke="none" fontFamily="sans-serif" fontWeight="bold">ВЫХОД</text>
                  
                  {/* Стрелка */}
                  <path d="M 22 40 L 30 40 M 26 36 L 22 40 L 26 44" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Дополнительная табличка со списком улиц */}
                  <rect x="25" y="65" width="50" height="25" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="30" y1="72" x2="65" y2="72" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
                  <line x1="30" y1="78" x2="55" y2="78" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
                  <line x1="30" y1="84" x2="60" y2="84" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            }
          ]
        },
		        {
          id: 'ch7-personal',
          title: '🚲 Личный транспорт',
          subtitle: 'Микромобильность',
          theme: 'emerald',
          items: [
            {
              id: 'electric-scooter',
              title: 'Электросамокат',
              desc: 'припаркованный в необычном месте',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Батарейный отсек и дека (Желтый кикшеринг) */}
                  <rect x="25" y="75" width="45" height="6" rx="3" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
                  
                  {/* Рулевая стойка */}
                  <line x1="70" y1="75" x2="60" y2="20" stroke="#1f2937" strokeWidth="5" strokeLinecap="round" />
                  <line x1="60" y1="20" x2="60" y2="10" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Руль и экран */}
                  <path d="M 45 20 L 75 20" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" />
                  <rect x="55" y="15" width="10" height="5" rx="1" fill="#38bdf8" stroke="none" />
                  
                  {/* Колеса (массивные, черные) */}
                  <circle cx="25" cy="80" r="8" fill="#1f2937" stroke="#475569" strokeWidth="2" />
                  <circle cx="25" cy="80" r="3" fill="#cbd5e1" stroke="none" />
                  <circle cx="70" cy="80" r="8" fill="#1f2937" stroke="#475569" strokeWidth="2" />
                  <circle cx="70" cy="80" r="3" fill="#cbd5e1" stroke="none" />
                  
                  {/* Заднее крыло */}
                  <path d="M 17 75 C 20 70 25 70 30 75" fill="none" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Провода на руле */}
                  <path d="M 55 20 Q 50 30 60 40" fill="none" stroke="#475569" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'bike-child-seat',
              title: 'Велосипед',
              desc: 'с детским креслом сзади',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Рама велосипеда */}
                  <path d="M 30 50 L 50 50 L 65 35 M 30 50 L 45 75 L 75 75 L 65 35 M 45 75 L 50 50 L 75 75 M 50 50 L 40 25" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Колеса */}
                  <circle cx="30" cy="75" r="15" fill="none" stroke="#1f2937" strokeWidth="4" />
                  <circle cx="30" cy="75" r="1" fill="#1f2937" stroke="none" />
                  <circle cx="75" cy="75" r="15" fill="none" stroke="#1f2937" strokeWidth="4" />
                  <circle cx="75" cy="75" r="1" fill="#1f2937" stroke="none" />
                  
                  {/* Спицы (схематично) */}
                  <line x1="30" y1="60" x2="30" y2="90" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="15" y1="75" x2="45" y2="75" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="75" y1="60" x2="75" y2="90" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="60" y1="75" x2="90" y2="75" stroke="#9ca3af" strokeWidth="1" />
                  
                  {/* Руль и сиденье взрослого */}
                  <path d="M 60 30 L 65 35 L 75 30" fill="none" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 35 25 L 45 25" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Детское кресло (на багажнике сзади) */}
                  <path d="M 25 50 L 15 50 L 15 25 L 25 25 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 15 35 L 25 35" stroke="#ca8a04" strokeWidth="2" />
                  <path d="M 25 50 L 25 60 L 20 60" fill="none" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> {/* Подножка */}
                </svg>
              )
            },
            {
              id: 'monowheel-courier',
              title: 'Курьер на моноколесе',
              desc: 'или гироскутере',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Моноколесо */}
                  <circle cx="50" cy="80" r="15" fill="#374151" stroke="#1f2937" strokeWidth="4" />
                  <circle cx="50" cy="80" r="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" />
                  <circle cx="50" cy="80" r="2" fill="#ef4444" stroke="none" />
                  <path d="M 30 80 L 40 80 M 60 80 L 70 80" stroke="#9ca3af" strokeWidth="3" strokeLinecap="round" /> {/* Педали */}
                  
                  {/* Ноги курьера */}
                  <path d="M 40 80 L 40 60 L 45 50 L 50 60 M 60 80 L 60 60 L 55 50 L 50 60" fill="none" stroke="#1e3a8a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 45 50 L 55 50 L 55 35 L 45 35 Z" fill="#3b82f6" stroke="none" /> {/* Тело */}
                  
                  {/* Огромный квадратный рюкзак курьера (зеленый или желтый) */}
                  <rect x="25" y="15" width="30" height="35" rx="3" fill="#22c55e" stroke="#15803d" strokeWidth="3" />
                  <line x1="25" y1="25" x2="55" y2="25" stroke="#15803d" strokeWidth="2" />
                  <line x1="40" y1="15" x2="40" y2="50" stroke="#15803d" strokeWidth="2" />
                  
                  {/* Шлем курьера */}
                  <path d="M 45 30 C 45 20 60 20 60 30" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
                  <circle cx="53" cy="28" r="4" fill="#fca5a5" stroke="none" />
                  
                  {/* Линии скорости */}
                  <line x1="10" y1="80" x2="20" y2="80" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                  <line x1="15" y1="70" x2="25" y2="70" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'sidecar-motorcycle',
              title: 'Мотоцикл с коляской',
              desc: 'редкая находка!',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Коляска (боковой прицеп) - на переднем плане */}
                  <path d="M 40 65 L 85 65 C 90 65 95 70 95 80 L 95 85 L 40 85 Z" fill="#65a30d" stroke="#4d7c0f" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 60 65 C 60 55 75 55 75 65" fill="#0f172a" stroke="#1e293b" strokeWidth="2" /> {/* Ветровое стекло коляски */}
                  <circle cx="85" cy="80" r="10" fill="#1f2937" stroke="#374151" strokeWidth="3" /> {/* Колесо коляски */}
                  <circle cx="85" cy="80" r="3" fill="#cbd5e1" stroke="none" />
                  
                  {/* Мотоцикл - на заднем плане (слева) */}
                  <path d="M 10 75 C 10 65 20 60 30 60 C 40 60 50 65 50 75" fill="none" stroke="#4d7c0f" strokeWidth="6" strokeLinecap="round" />
                  <circle cx="20" cy="80" r="12" fill="none" stroke="#1f2937" strokeWidth="4" /> {/* Заднее колесо */}
                  <circle cx="50" cy="80" r="12" fill="none" stroke="#1f2937" strokeWidth="4" /> {/* Переднее колесо */}
                  
                  {/* Руль и бак */}
                  <path d="M 45 60 L 40 45 L 35 45" fill="none" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 25 60 C 25 55 35 55 40 60 Z" fill="#65a30d" stroke="#4d7c0f" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Фара мотоцикла */}
                  <circle cx="52" cy="55" r="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
                </svg>
              )
            },
            {
              id: 'skater-helmet',
              title: 'Скейтер в шлеме',
              desc: 'и наколенниках',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Скейтборд */}
                  <path d="M 20 85 L 80 85" stroke="#d97706" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 15 80 L 25 85 M 85 80 L 75 85" stroke="#d97706" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="30" cy="90" r="4" fill="#374151" stroke="none" />
                  <circle cx="70" cy="90" r="4" fill="#374151" stroke="none" />
                  
                  {/* Ноги скейтера (в динамичной позе) */}
                  <path d="M 40 85 L 45 60 L 50 45 M 70 85 L 60 60 L 50 45" fill="none" stroke="#3b82f6" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Наколенники (безопасность!) */}
                  <rect x="40" y="60" width="10" height="12" rx="3" fill="#1f2937" stroke="none" transform="rotate(-15 45 60)" />
                  <rect x="55" y="60" width="10" height="12" rx="3" fill="#1f2937" stroke="none" transform="rotate(15 60 60)" />
                  
                  {/* Туловище */}
                  <path d="M 50 45 L 60 25 M 50 45 L 35 30" fill="none" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" />
                  
                  {/* Шлем */}
                  <path d="M 45 20 C 45 10 65 10 65 20 L 45 20 Z" fill="#1f2937" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 45 20 C 45 25 65 25 65 20" fill="none" stroke="#1f2937" strokeWidth="2" /> {/* Ремешок */}
                </svg>
              )
            },
            {
              id: 'stunt-scooter',
              title: 'Трюковой самокат',
              desc: 'с маленькими колесами',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Дека (короткая и массивная) */}
                  <rect x="35" y="80" width="35" height="5" rx="2" fill="#cbd5e1" stroke="#64748b" strokeWidth="3" />
                  
                  {/* Колеса (очень маленькие, полиуретановые) */}
                  <circle cx="35" cy="85" r="5" fill="#f8fafc" stroke="#1f2937" strokeWidth="3" />
                  <circle cx="70" cy="85" r="5" fill="#f8fafc" stroke="#1f2937" strokeWidth="3" />
                  
                  {/* Рулевой стакан и вилка */}
                  <path d="M 65 80 L 70 70 L 60 40" fill="none" stroke="#64748b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Монолитный руль (T-Bar) */}
                  <line x1="60" y1="40" x2="50" y2="10" stroke="#374151" strokeWidth="5" strokeLinecap="round" />
                  <line x1="30" y1="15" x2="70" y2="15" stroke="#374151" strokeWidth="5" strokeLinecap="round" />
                  
                  {/* Грипсы (ручки) */}
                  <line x1="25" y1="15" x2="35" y2="15" stroke="#ef4444" strokeWidth="7" strokeLinecap="round" />
                  <line x1="65" y1="15" x2="75" y2="15" stroke="#ef4444" strokeWidth="7" strokeLinecap="round" />
                  
                  {/* Эффект полета/прыжка */}
                  <path d="M 20 95 L 40 95 M 60 95 L 80 95" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4 2" />
                  <path d="M 15 85 Q 25 75 35 80" fill="none" stroke="#9ca3af" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'glowing-rollerblades',
              title: 'Роликовые коньки',
              desc: 'которые светятся при движении',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ботинок ролика */}
                  <path d="M 30 20 L 45 20 L 50 45 L 75 60 C 80 65 80 75 75 75 L 25 75 C 20 75 20 65 25 60 L 30 50 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Застежки/Бакли */}
                  <line x1="30" y1="30" x2="45" y2="30" stroke="#1e293b" strokeWidth="4" />
                  <line x1="32" y1="45" x2="52" y2="45" stroke="#1e293b" strokeWidth="4" />
                  
                  {/* Рама для колес */}
                  <rect x="25" y="75" width="50" height="5" rx="2" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
                  
                  {/* Светящиеся колеса (LED) */}
                  <g style={{ filter: 'drop-shadow(0 0 4px #22c55e)' }}>
                    <circle cx="30" cy="85" r="5" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                    <circle cx="43" cy="85" r="5" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                  </g>
                  <g style={{ filter: 'drop-shadow(0 0 4px #ec4899)' }}>
                    <circle cx="56" cy="85" r="5" fill="#ec4899" stroke="#be185d" strokeWidth="2" />
                    <circle cx="69" cy="85" r="5" fill="#ec4899" stroke="#be185d" strokeWidth="2" />
                  </g>
                  
                  {/* Внутреннее свечение колес */}
                  <circle cx="30" cy="85" r="1.5" fill="#fff" stroke="none" />
                  <circle cx="43" cy="85" r="1.5" fill="#fff" stroke="none" />
                  <circle cx="56" cy="85" r="1.5" fill="#fff" stroke="none" />
                  <circle cx="69" cy="85" r="1.5" fill="#fff" stroke="none" />
                  
                  {/* Линии движения */}
                  <path d="M 10 85 L 20 85 M 5 75 L 15 75" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'bike-lane-sign',
              title: 'Велосипедная дорожка',
              desc: 'с нарисованным белым велосипедом',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Дорожка (красный или серый асфальт) */}
                  <path d="M 20 95 L 40 5 L 60 5 L 80 95 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Белая прерывистая линия границы */}
                  <line x1="85" y1="95" x2="65" y2="5" stroke="#ffffff" strokeWidth="4" strokeDasharray="10 10" />
                  <line x1="15" y1="95" x2="35" y2="5" stroke="#ffffff" strokeWidth="4" strokeDasharray="10 10" />
                  
                  {/* Пиктограмма велосипеда на асфальте (в перспективе) */}
                  <g stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" transform="scale(1, 0.6) translate(0, 45)">
                    <circle cx="35" cy="70" r="12" fill="none" />
                    <circle cx="65" cy="70" r="12" fill="none" />
                    <path d="M 35 70 L 45 50 L 60 50 L 65 70 M 45 50 L 55 70" />
                    <path d="M 60 50 L 65 40 M 60 40 L 70 40" />
                    <path d="M 45 50 L 40 45 L 50 45" />
                  </g>
                </svg>
              )
            },
            {
              id: 'helmet-moped',
              title: 'Шлем на мопеде',
              desc: 'висящий на руле припаркованного мопеда',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Приборная панель и фара мопеда (вид спереди/сверху) */}
                  <path d="M 30 40 C 30 20 70 20 70 40 C 70 60 60 70 50 70 C 40 70 30 60 30 40 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="3" strokeLinejoin="round" />
                  <circle cx="50" cy="35" r="10" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" /> {/* Фара */}
                  
                  {/* Руль */}
                  <path d="M 30 45 L 15 50 M 70 45 L 85 50" stroke="#1f2937" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Зеркала заднего вида */}
                  <path d="M 30 30 L 20 15 M 70 30 L 80 15" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="20" cy="15" r="6" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
                  <circle cx="80" cy="15" r="6" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
                  
                  {/* Шлем-каска (висит на левой ручке) */}
                  <path d="M 10 75 C 5 60 25 60 25 75 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 12 75 C 15 85 22 85 23 75" fill="none" stroke="#1f2937" strokeWidth="2" /> {/* Ремешок */}
                  <line x1="15" y1="50" x2="18" y2="75" stroke="#1f2937" strokeWidth="2" /> {/* Ремешок к рулю */}
                  
                  {/* Стекло шлема */}
                  <path d="M 12 70 C 15 65 20 65 23 70 Z" fill="#1e293b" stroke="none" />
                </svg>
              )
            },
            {
              id: 'bike-basket',
              title: 'Корзинка',
              desc: 'на руле велосипеда, полная продуктов или цветов',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Руль велосипеда */}
                  <path d="M 20 20 C 40 30 60 30 80 20" fill="none" stroke="#1f2937" strokeWidth="6" strokeLinecap="round" />
                  <line x1="50" y1="25" x2="50" y2="80" stroke="#1f2937" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Плетеная корзинка */}
                  <path d="M 30 35 L 70 35 L 65 65 L 35 65 Z" fill="#fcd34d" stroke="#b45309" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 35 35 L 35 65 M 45 35 L 45 65 M 55 35 L 55 65 M 65 35 L 65 65" stroke="#d97706" strokeWidth="2" />
                  <path d="M 32 45 L 68 45 M 34 55 L 66 55" stroke="#d97706" strokeWidth="2" />
                  
                  {/* Наполнение корзинки (цветы и багет) */}
                  {/* Багет */}
                  <path d="M 60 35 L 75 15 C 80 10 85 15 80 20 L 65 40 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" strokeLinejoin="round" />
                  <line x1="68" y1="22" x2="72" y2="22" stroke="#ca8a04" strokeWidth="1.5" />
                  <line x1="72" y1="17" x2="76" y2="17" stroke="#ca8a04" strokeWidth="1.5" />
                  
                  {/* Цветы */}
                  <circle cx="45" cy="25" r="6" fill="#ec4899" stroke="#be185d" strokeWidth="2" />
                  <circle cx="35" cy="30" r="5" fill="#a855f7" stroke="#7e22ce" strokeWidth="2" />
                  <circle cx="55" cy="32" r="5" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                  
                  {/* Листочки */}
                  <path d="M 30 35 Q 25 25 35 25" fill="#4ade80" stroke="#16a34a" strokeWidth="2" />
                  <path d="M 50 35 Q 55 20 60 30" fill="#4ade80" stroke="#16a34a" strokeWidth="2" />
                </svg>
              )
            }
          ]
        },
		  {
          id: 'ch7-special',
          title: '🚨 Спецтехника',
          subtitle: 'Машины-помощники',
          theme: 'rose',
          items: [
            {
              id: 'police-car',
              title: 'Полицейская машина',
              desc: 'с включенными маячками (без сирены)',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кузов полицейской машины */}
                  <path d="M 15 65 L 10 65 C 5 65 5 60 10 55 L 25 50 L 40 35 L 65 35 C 75 35 80 45 85 50 L 95 55 C 100 60 95 65 90 65 L 15 65 Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Синяя полоса */}
                  <path d="M 12 58 L 92 58 M 12 62 L 92 62" stroke="#1d4ed8" strokeWidth="2" />
                  
                  {/* Окна */}
                  <path d="M 38 48 L 45 38 L 55 38 L 55 48 Z" fill="#bae6fd" stroke="#1e293b" strokeWidth="2" /> {/* Заднее */}
                  <path d="M 58 48 L 58 38 L 68 38 L 78 48 Z" fill="#bae6fd" stroke="#1e293b" strokeWidth="2" /> {/* Переднее */}
                  
                  {/* Проблесковые маячки (люстра) */}
                  <rect x="52" y="30" width="16" height="5" rx="2" fill="#1e293b" stroke="none" />
                  <path d="M 52 30 L 58 30 L 58 35 L 52 35 Z" fill="#ef4444" stroke="none" style={{ filter: 'drop-shadow(0 0 3px #ef4444)' }} /> {/* Красный */}
                  <path d="M 62 30 L 68 30 L 68 35 L 62 35 Z" fill="#3b82f6" stroke="none" style={{ filter: 'drop-shadow(0 0 3px #3b82f6)' }} /> {/* Синий */}
                  
                  {/* Свечение от маячков */}
                  <path d="M 50 25 Q 45 20 55 15" fill="none" stroke="#ef4444" strokeWidth="2" />
                  <path d="M 70 25 Q 75 20 65 15" fill="none" stroke="#3b82f6" strokeWidth="2" />
                  
                  {/* Колеса */}
                  <circle cx="25" cy="65" r="8" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                  <circle cx="25" cy="65" r="3" fill="#cbd5e1" stroke="none" />
                  <circle cx="75" cy="65" r="8" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                  <circle cx="75" cy="65" r="3" fill="#cbd5e1" stroke="none" />
                </svg>
              )
            },
            {
              id: 'ambulance',
              title: 'Скорая помощь',
              desc: 'с открытыми задними дверями',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кузов скорой помощи (Вид сзади/сбоку) */}
                  <path d="M 20 20 L 70 20 C 75 20 80 25 80 30 L 80 80 L 20 80 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Красная полоса по бокам */}
                  <line x1="20" y1="50" x2="80" y2="50" stroke="#ef4444" strokeWidth="6" />
                  
                  {/* Мигалки на крыше */}
                  <path d="M 25 20 L 25 15 C 25 10 35 10 35 15 L 35 20 Z" fill="#3b82f6" stroke="none" />
                  <path d="M 65 20 L 65 15 C 65 10 75 10 75 15 L 75 20 Z" fill="#3b82f6" stroke="none" />
                  
                  {/* Открытые задние двери */}
                  <path d="M 25 25 L 10 35 L 10 75 L 25 75 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" strokeLinejoin="round" /> {/* Левая дверь */}
                  <path d="M 75 25 L 90 35 L 90 75 L 75 75 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" strokeLinejoin="round" /> {/* Правая дверь */}
                  
                  {/* Окна на дверях с красными крестами */}
                  <rect x="12" y="40" width="10" height="15" fill="#bae6fd" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M 15 47 L 19 47 M 17 45 L 17 49" stroke="#ef4444" strokeWidth="2" />
                  
                  <rect x="78" y="40" width="10" height="15" fill="#bae6fd" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M 81 47 L 85 47 M 83 45 L 83 49" stroke="#ef4444" strokeWidth="2" />
                  
                  {/* Интерьер скорой (носилки) */}
                  <rect x="35" y="60" width="30" height="10" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
                  <line x1="35" y1="65" x2="65" y2="65" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Колеса (видно нижнюю часть) */}
                  <path d="M 25 80 A 10 10 0 0 0 45 80" fill="#1f2937" stroke="none" />
                  <path d="M 55 80 A 10 10 0 0 0 75 80" fill="#1f2937" stroke="none" />
                </svg>
              )
            },
            {
              id: 'fire-truck',
              title: 'Пожарная машина',
              desc: 'с огромной лестницей на крыше',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кузов пожарной машины */}
                  <path d="M 10 70 L 10 40 L 60 40 L 70 50 L 95 50 L 95 70 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Белая полоса */}
                  <line x1="10" y1="60" x2="95" y2="60" stroke="#ffffff" strokeWidth="4" />
                  
                  {/* Отсеки для оборудования (жалюзи) */}
                  <rect x="15" y="45" width="15" height="12" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="15" y1="49" x2="30" y2="49" stroke="#94a3b8" strokeWidth="1" />
                  <line x1="15" y1="53" x2="30" y2="53" stroke="#94a3b8" strokeWidth="1" />
                  
                  <rect x="35" y="45" width="20" height="12" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="35" y1="49" x2="55" y2="49" stroke="#94a3b8" strokeWidth="1" />
                  <line x1="35" y1="53" x2="55" y2="53" stroke="#94a3b8" strokeWidth="1" />
                  
                  {/* Окно кабины */}
                  <polygon points="70,50 85,50 85,40 60,40" fill="#bae6fd" stroke="#b91c1c" strokeWidth="2" />
                  
                  {/* Огромная складная лестница */}
                  <path d="M 15 35 L 85 20" stroke="#cbd5e1" strokeWidth="4" />
                  <path d="M 15 30 L 85 15" stroke="#cbd5e1" strokeWidth="4" />
                  <line x1="20" y1="34" x2="20" y2="29" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="35" y1="31" x2="35" y2="26" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="50" y1="28" x2="50" y2="23" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="65" y1="24" x2="65" y2="19" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="80" y1="21" x2="80" y2="16" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Маячок */}
                  <path d="M 65 40 L 65 35 C 65 30 75 30 75 35 L 75 40 Z" fill="#3b82f6" stroke="none" />
                  
                  {/* Колеса */}
                  <circle cx="25" cy="70" r="8" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                  <circle cx="25" cy="70" r="3" fill="#cbd5e1" stroke="none" />
                  <circle cx="75" cy="70" r="8" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                  <circle cx="75" cy="70" r="3" fill="#cbd5e1" stroke="none" />
                </svg>
              )
            },
            {
              id: 'road-service',
              title: 'Машина дорожной службы',
              desc: 'с оранжевыми проблесковыми маячками',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кузов оранжевого грузовичка */}
                  <path d="M 10 70 L 10 45 L 45 45 L 45 70 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="3" strokeLinejoin="round" /> {/* Кузов */}
                  <path d="M 45 70 L 45 45 L 60 45 L 75 55 L 90 55 L 95 70 Z" fill="#f97316" stroke="#c2410c" strokeWidth="3" strokeLinejoin="round" /> {/* Кабина */}
                  
                  {/* Окно кабины */}
                  <polygon points="45,45 60,45 70,55 45,55" fill="#bae6fd" stroke="#c2410c" strokeWidth="2" />
                  
                  {/* Оранжевые маячки на крыше */}
                  <path d="M 50 45 L 50 40 Q 55 35 60 40 L 60 45 Z" fill="#f59e0b" stroke="none" style={{ filter: 'drop-shadow(0 0 3px #f59e0b)' }} />
                  <path d="M 45 35 L 50 30 M 65 35 L 60 30" stroke="#facc15" strokeWidth="2" strokeLinecap="round" /> {/* Свечение */}
                  
                  {/* Дорожный знак на кузове (Стрелка объезда) */}
                  <rect x="15" y="48" width="25" height="15" fill="#1e40af" stroke="#ffffff" strokeWidth="2" />
                  <path d="M 22 55 L 30 55 M 30 55 L 26 51 M 30 55 L 26 59" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Колеса */}
                  <circle cx="25" cy="70" r="8" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                  <circle cx="75" cy="70" r="8" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'garbage-truck',
              title: 'Мусоровоз',
              desc: 'который поднимает бак',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кабина мусоровоза (Оранжевая) */}
                  <path d="M 65 70 L 65 35 L 80 35 L 95 45 L 95 70 Z" fill="#f97316" stroke="#c2410c" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 65 35 L 80 35 L 90 45 L 65 45 Z" fill="#bae6fd" stroke="#c2410c" strokeWidth="2" /> {/* Окно */}
                  
                  {/* Огромный кузов (Зеленый) */}
                  <path d="M 25 70 L 25 25 L 60 25 L 65 35 L 65 70 Z" fill="#22c55e" stroke="#15803d" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 25 35 L 60 35" stroke="#15803d" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 25 55 L 65 55" stroke="#15803d" strokeWidth="2" strokeDasharray="4 4" />
                  
                  {/* Механизм подъема сзади */}
                  <path d="M 25 25 L 15 35 L 15 70 L 25 70 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Мусорный бак в воздухе (в процессе загрузки) */}
                  <rect x="5" y="20" width="15" height="15" rx="1" fill="#4ade80" stroke="#16a34a" strokeWidth="2" transform="rotate(-30 5 20)" />
                  <path d="M 5 20 L -2 15" stroke="#16a34a" strokeWidth="2" transform="rotate(-30 5 20)" /> {/* Открытая крышка */}
                  
                  {/* Падающий мусор (схематично) */}
                  <circle cx="20" cy="15" r="2" fill="#9ca3af" stroke="none" />
                  <circle cx="25" cy="18" r="1.5" fill="#facc15" stroke="none" />
                  <circle cx="18" cy="22" r="1" fill="#ef4444" stroke="none" />
                  
                  {/* Колеса */}
                  <circle cx="45" cy="70" r="8" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                  <circle cx="80" cy="70" r="8" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'tow-truck',
              title: 'Эвакуатор',
              desc: 'везущий другой автомобиль',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кабина эвакуатора */}
                  <path d="M 70 75 L 70 45 L 85 45 L 95 55 L 95 75 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="3" strokeLinejoin="round" />
                  <polygon points="70,45 85,45 92,55 70,55" fill="#bae6fd" stroke="#ca8a04" strokeWidth="2" />
                  
                  {/* Платформа эвакуатора (Наклонная) */}
                  <path d="M 5 70 L 65 70 L 70 75 L 10 75 Z" fill="#94a3b8" stroke="#475569" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Кран-манипулятор */}
                  <path d="M 65 70 L 65 30 L 40 30" fill="none" stroke="#f59e0b" strokeWidth="4" strokeLinejoin="round" />
                  <line x1="40" y1="30" x2="40" y2="40" stroke="#1f2937" strokeWidth="2" /> {/* Трос */}
                  
                  {/* Эвакуируемый автомобиль на платформе */}
                  <path d="M 20 65 L 15 65 C 10 65 10 60 15 55 L 25 50 L 40 50 L 50 55 C 55 60 55 65 50 65 L 20 65 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 22 55 L 28 50 L 38 50 L 45 55 Z" fill="#f1f5f9" stroke="#b91c1c" strokeWidth="2" />
                  <circle cx="22" cy="65" r="4" fill="#1f2937" stroke="none" />
                  <circle cx="45" cy="65" r="4" fill="#1f2937" stroke="none" />
                  
                  {/* Колеса эвакуатора */}
                  <circle cx="35" cy="75" r="7" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                  <circle cx="80" cy="75" r="7" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'street-sweeper',
              title: 'Поливомоечная машина',
              desc: 'создающая маленькую радугу',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Цистерна с водой */}
                  <ellipse cx="35" cy="55" rx="25" ry="15" fill="#38bdf8" stroke="#0284c7" strokeWidth="3" />
                  <path d="M 15 55 L 55 55" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 4" />
                  
                  {/* Кабина */}
                  <path d="M 60 70 L 60 40 L 75 40 L 90 55 L 90 70 Z" fill="#f8fafc" stroke="#475569" strokeWidth="3" strokeLinejoin="round" />
                  <polygon points="60,40 75,40 85,55 60,55" fill="#bae6fd" stroke="#475569" strokeWidth="2" />
                  
                  {/* Струи воды из-под бампера */}
                  <path d="M 85 70 L 100 85 M 80 70 L 95 85 M 75 70 L 90 85" stroke="#7dd3fc" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                  
                  {/* Маленькая радуга в брызгах */}
                  <path d="M 85 85 C 90 75 100 75 100 85" fill="none" stroke="#ef4444" strokeWidth="2" opacity="0.7" />
                  <path d="M 87 87 C 91 78 99 78 100 87" fill="none" stroke="#facc15" strokeWidth="2" opacity="0.7" />
                  <path d="M 89 89 C 92 81 98 81 100 89" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.7" />
                  
                  {/* Колеса */}
                  <circle cx="30" cy="70" r="8" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                  <circle cx="75" cy="70" r="8" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'snowplow',
              title: 'Снегоуборочный трактор',
              desc: 'летом ищи его на стоянке спецтехники',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кузов трактора (Желтый) */}
                  <path d="M 25 40 L 55 40 L 65 55 L 65 70 L 15 70 L 15 50 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Окно кабины (высокое) */}
                  <rect x="25" y="25" width="20" height="25" fill="#bae6fd" stroke="#ca8a04" strokeWidth="2" />
                  
                  {/* Огромный отвал (ковш) для снега спереди */}
                  <path d="M 65 65 L 85 55 C 90 65 90 80 85 85 L 65 75 Z" fill="#f97316" stroke="#c2410c" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Выхлопная труба */}
                  <path d="M 20 50 L 20 20 L 15 20" fill="none" stroke="#4b5563" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="12" cy="15" r="2" fill="#9ca3af" stroke="none" opacity="0.6" />
                  <circle cx="8" cy="10" r="3" fill="#9ca3af" stroke="none" opacity="0.4" />
                  
                  {/* Большие колеса с глубоким протектором */}
                  <circle cx="30" cy="75" r="12" fill="#1f2937" stroke="#374151" strokeWidth="3" strokeDasharray="4 2" />
                  <circle cx="30" cy="75" r="5" fill="#facc15" stroke="none" />
                  <circle cx="60" cy="75" r="8" fill="#1f2937" stroke="#374151" strokeWidth="3" strokeDasharray="3 2" />
                </svg>
              )
            },
            {
              id: 'gas-service',
              title: 'Аварийная служба газа',
              desc: 'машина с характерной надписью',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кузов цельнометаллического фургона (Желтый) */}
                  <path d="M 10 70 L 10 30 C 10 25 15 25 20 25 L 60 25 L 80 40 C 85 45 90 50 90 70 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Яркая красная полоса вдоль кузова */}
                  <path d="M 10 50 L 85 50 L 88 55 L 10 55 Z" fill="#ef4444" stroke="none" />
                  <line x1="10" y1="50" x2="85" y2="50" stroke="#b91c1c" strokeWidth="1" />
                  <line x1="10" y1="55" x2="88" y2="55" stroke="#b91c1c" strokeWidth="1" />
                  
                  {/* Окно кабины */}
                  <polygon points="60,25 75,40 75,45 60,45" fill="#bae6fd" stroke="#ca8a04" strokeWidth="2" />
                  
                  {/* Надпись "ГАЗ" или символ огня */}
                  <text x="25" y="45" fontSize="12" fill="#ef4444" stroke="none" fontFamily="sans-serif" fontWeight="bold">ГАЗ</text>
                  
                  {/* Сирена/мигалка на крыше */}
                  <path d="M 65 25 L 65 20 C 65 18 70 18 70 20 L 70 25 Z" fill="#3b82f6" stroke="none" />
                  
                  {/* Колеса */}
                  <circle cx="25" cy="70" r="8" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                  <circle cx="70" cy="70" r="8" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                </svg>
              )
            },
            {
              id: 'concrete-mixer',
              title: 'Бетономешалка',
              desc: 'с огромным вращающимся барабаном',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кабина грузовика */}
                  <path d="M 75 70 L 75 40 L 85 40 L 95 50 L 95 70 Z" fill="#f8fafc" stroke="#475569" strokeWidth="3" strokeLinejoin="round" />
                  <polygon points="75,40 85,40 92,50 75,50" fill="#bae6fd" stroke="#475569" strokeWidth="2" />
                  
                  {/* Шасси (рама) */}
                  <rect x="10" y="65" width="80" height="5" fill="#475569" stroke="none" />
                  
                  {/* Вращающийся барабан (Груша) */}
                  <path d="M 15 25 C 40 10 70 20 70 50 C 70 65 40 65 15 50 C 5 40 5 30 15 25 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Спиральные полосы на барабане (показывают вращение) */}
                  <path d="M 20 30 C 40 25 50 40 40 55" fill="none" stroke="#94a3b8" strokeWidth="4" />
                  <path d="M 40 20 C 60 25 70 40 55 55" fill="none" stroke="#94a3b8" strokeWidth="4" />
                  
                  {/* Загрузочная воронка сзади */}
                  <path d="M 10 20 L 25 25 L 15 35 L 5 25 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Много колес (тяжелая техника) */}
                  <circle cx="20" cy="70" r="7" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                  <circle cx="35" cy="70" r="7" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                  <circle cx="80" cy="70" r="7" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                </svg>
              )
            }
          ]
        },
		       {
          id: 'ch7-people',
          title: '👥 Люди в пути',
          subtitle: 'Смотри на пассажиров',
          theme: 'purple',
          items: [
            {
              id: 'passenger-pet',
              title: 'Пассажир с животным',
              desc: 'собака в наморднике или кот в переноске',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ноги и туловище пассажира */}
                  <path d="M 20 90 L 20 50 L 35 50" stroke="#1f2937" strokeWidth="6" />
                  <path d="M 40 10 L 30 30 L 30 60" stroke="#3b82f6" strokeWidth="8" />
                  
                  {/* Пластиковая переноска для кота */}
                  <rect x="35" y="55" width="45" height="30" rx="5" fill="#fca5a5" stroke="#ef4444" strokeWidth="3" />
                  <path d="M 45 55 L 45 45 C 45 40 70 40 70 45 L 70 55" fill="none" stroke="#ef4444" strokeWidth="4" /> {/* Ручка */}
                  
                  {/* Дверца-решетка переноски */}
                  <rect x="60" y="60" width="15" height="20" rx="2" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="65" y1="60" x2="65" y2="80" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="70" y1="60" x2="70" y2="80" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="60" y1="66" x2="75" y2="66" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="60" y1="73" x2="75" y2="73" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Глаза котика выглядывают из темноты */}
                  <circle cx="64" cy="69" r="1.5" fill="#fef08a" stroke="none" />
                  <circle cx="71" cy="69" r="1.5" fill="#fef08a" stroke="none" />
                  
                  {/* Вентиляционные отверстия */}
                  <circle cx="45" cy="65" r="2" fill="#ef4444" stroke="none" />
                  <circle cx="52" cy="65" r="2" fill="#ef4444" stroke="none" />
                  <circle cx="45" cy="73" r="2" fill="#ef4444" stroke="none" />
                  <circle cx="52" cy="73" r="2" fill="#ef4444" stroke="none" />
                </svg>
              )
            },
            {
              id: 'running-passenger',
              title: 'Опаздывающий',
              desc: 'человек, который бежит за уходящим трамваем',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Уходящий транспорт (край автобуса/трамвая справа) */}
                  <path d="M 80 15 L 95 15 L 95 85 L 80 85 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" />
                  <rect x="85" y="30" width="10" height="20" fill="#bae6fd" stroke="#b91c1c" strokeWidth="2" />
                  <circle cx="90" cy="85" r="6" fill="#1f2937" stroke="none" />
                  
                  {/* Линии движения транспорта */}
                  <path d="M 70 40 L 55 40 M 70 60 L 65 60" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2" />
                  
                  {/* Бегущий человек (силуэт в динамике) */}
                  <circle cx="25" cy="30" r="7" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
                  {/* Туловище (наклонено вперед) */}
                  <path d="M 25 37 L 35 60" stroke="#3b82f6" strokeWidth="7" strokeLinecap="round" />
                  {/* Руки (размашисто) */}
                  <path d="M 15 50 L 28 45 L 45 40" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Ноги (бег) */}
                  <path d="M 35 60 L 15 70 L 25 85" stroke="#1f2937" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 35 60 L 50 75 L 45 90" stroke="#1f2937" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Капли пота / эмоции */}
                  <path d="M 12 25 C 10 20 15 15 15 15 C 15 15 20 20 18 25 Z" fill="#60a5fa" stroke="none" />
                  <path d="M 5 35 C 2 30 8 25 8 25 C 8 25 12 30 10 35 Z" fill="#60a5fa" stroke="none" transform="rotate(-30 8 30)" />
                </svg>
              )
            },
            {
              id: 'driver-cap',
              title: 'Водитель',
              desc: 'в форменной фуражке или жилетке',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Кабина (окно) */}
                  <rect x="15" y="15" width="70" height="70" rx="10" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="4" />
                  <line x1="15" y1="85" x2="85" y2="85" stroke="#38bdf8" strokeWidth="6" />
                  
                  {/* Водитель */}
                  <path d="M 30 85 C 30 65 70 65 70 85" fill="#1e3a8a" stroke="#0f172a" strokeWidth="3" /> {/* Форма */}
                  <path d="M 45 65 L 50 75 L 55 65" fill="#fff" stroke="#0f172a" strokeWidth="2" /> {/* Галстук/воротник */}
                  <line x1="50" y1="75" x2="50" y2="85" stroke="#ef4444" strokeWidth="4" />
                  
                  <circle cx="50" cy="50" r="12" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />
                  
                  {/* Фуражка */}
                  <path d="M 35 42 C 35 30 65 30 65 42" fill="#1e3a8a" stroke="#0f172a" strokeWidth="2" />
                  <path d="M 30 42 C 50 45 70 42 70 42" fill="none" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" /> {/* Козырек */}
                  <circle cx="50" cy="35" r="3" fill="#facc15" stroke="none" /> {/* Кокарда */}
                  
                  {/* Лицо */}
                  <path d="M 45 50 Q 50 52 55 50" stroke="#c2410c" strokeWidth="2" /> /* Усы */
                  
                  {/* Руль (частично перекрывает) */}
                  <path d="M 25 95 C 25 75 75 75 75 95" fill="none" stroke="#1f2937" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 50 95 L 50 82" stroke="#1f2937" strokeWidth="6" />
                </svg>
              )
            },
            {
              id: 'sleeping-passenger',
              title: 'Спящий пассажир',
              desc: 'уснул, прислонившись лбом к стеклу',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Окно поезда/автобуса */}
                  <rect x="20" y="20" width="60" height="50" rx="5" fill="#bae6fd" stroke="#94a3b8" strokeWidth="4" />
                  <line x1="20" y1="75" x2="80" y2="75" stroke="#475569" strokeWidth="8" strokeLinecap="round" />
                  
                  {/* Тело пассажира */}
                  <path d="M 35 95 C 35 70 65 70 65 95" fill="#f59e0b" stroke="#b45309" strokeWidth="3" />
                  
                  {/* Голова (прислонилась вправо) */}
                  <ellipse cx="60" cy="55" rx="12" ry="15" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" transform="rotate(30 60 55)" />
                  
                  {/* Волосы */}
                  <path d="M 50 50 C 50 40 70 40 70 55 C 65 45 55 45 50 50 Z" fill="#451a03" stroke="none" />
                  
                  {/* Закрытый глаз */}
                  <path d="M 62 58 Q 65 60 68 58" fill="none" stroke="#c2410c" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Значки "Zzz" (Спит) */}
                  <path d="M 25 35 L 35 35 L 25 45 L 35 45" fill="none" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 38 25 L 45 25 L 38 32 L 45 32" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 48 18 L 53 18 L 48 23 L 53 23" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )
            },
            {
              id: 'big-luggage',
              title: 'Огромный багаж',
              desc: 'человек с чемоданом выше колена',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Пол */}
                  <line x1="10" y1="90" x2="90" y2="90" stroke="#9ca3af" strokeWidth="4" />
                  
                  {/* Огромный чемодан */}
                  <rect x="50" y="40" width="35" height="45" rx="4" fill="#818cf8" stroke="#4f46e5" strokeWidth="3" />
                  <line x1="55" y1="40" x2="55" y2="85" stroke="#4f46e5" strokeWidth="2" />
                  <line x1="60" y1="40" x2="60" y2="85" stroke="#4f46e5" strokeWidth="2" />
                  <line x1="65" y1="40" x2="65" y2="85" stroke="#4f46e5" strokeWidth="2" />
                  <line x1="70" y1="40" x2="70" y2="85" stroke="#4f46e5" strokeWidth="2" />
                  <line x1="75" y1="40" x2="75" y2="85" stroke="#4f46e5" strokeWidth="2" />
                  <line x1="80" y1="40" x2="80" y2="85" stroke="#4f46e5" strokeWidth="2" />
                  
                  {/* Выдвинутая ручка чемодана */}
                  <path d="M 60 40 L 60 25 L 75 25 L 75 40" fill="none" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Колесики */}
                  <circle cx="55" cy="87" r="3" fill="#1f2937" stroke="none" />
                  <circle cx="80" cy="87" r="3" fill="#1f2937" stroke="none" />
                  
                  {/* Пассажир (с трудом тянет) */}
                  <path d="M 35 90 L 35 60 L 40 45 L 30 45" stroke="#1f2937" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 35 60 L 35 30" stroke="#10b981" strokeWidth="8" strokeLinecap="round" />
                  <circle cx="35" cy="20" r="7" fill="#fca5a5" stroke="none" />
                  <path d="M 35 35 L 55 25" stroke="#10b981" strokeWidth="6" strokeLinecap="round" /> {/* Рука тянется к ручке */}
                </svg>
              )
            },
            {
              id: 'ticket-inspector',
              title: 'Контролер',
              desc: 'сотрудник в специальной форме',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Тело в форме (синяя рубашка/жилетка) */}
                  <path d="M 25 90 L 30 50 L 70 50 L 75 90 Z" fill="#0284c7" stroke="#0c4a6e" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Яркая жилетка сверху (часто желтая или оранжевая) */}
                  <path d="M 30 50 L 45 75 L 55 75 L 70 50 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
                  <line x1="35" y1="65" x2="65" y2="65" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="4 2" /> {/* Светоотражающая полоса */}
                  
                  {/* Голова */}
                  <circle cx="50" cy="35" r="10" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />
                  
                  {/* Бейджик/Удостоверение на груди */}
                  <rect x="55" y="55" width="8" height="12" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
                  <circle cx="59" cy="58" r="1.5" fill="#3b82f6" stroke="none" />
                  
                  {/* Рука с валидатором */}
                  <path d="M 30 60 L 15 50 L 20 35" fill="none" stroke="#0284c7" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="15" y="25" width="12" height="15" rx="1" fill="#1e293b" stroke="#0f172a" strokeWidth="2" /> {/* Устройство проверки */}
                  <circle cx="21" cy="30" r="2" fill="#22c55e" stroke="none" style={{ filter: 'drop-shadow(0 0 2px #22c55e)' }} />
                </svg>
              )
            },
            {
              id: 'subway-musician',
              title: 'Музыкант в переходе',
              desc: 'или прямо в вагоне поезда',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Человек (Играет на гитаре) */}
                  <path d="M 35 90 L 40 60 C 40 45 60 45 60 60 L 65 90 Z" fill="#6366f1" stroke="#4338ca" strokeWidth="3" />
                  <circle cx="50" cy="35" r="10" fill="#fcd34d" stroke="#ca8a04" strokeWidth="2" />
                  
                  {/* Акустическая гитара */}
                  <path d="M 35 65 C 25 65 25 80 40 85 C 45 85 45 75 55 75 C 65 75 65 65 55 60 C 45 55 45 65 35 65 Z" fill="#d97706" stroke="#92400e" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="45" cy="70" r="4" fill="#451a03" stroke="none" /> {/* Розетка гитары */}
                  
                  {/* Гриф гитары */}
                  <path d="M 50 65 L 80 40" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 80 40 L 85 35" stroke="#451a03" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Руки */}
                  <path d="M 40 60 L 35 70" stroke="#6366f1" strokeWidth="5" strokeLinecap="round" />
                  <path d="M 60 60 L 70 48" stroke="#6366f1" strokeWidth="5" strokeLinecap="round" />
                  
                  {/* Чехол для гитары (открытый, для монет) */}
                  <path d="M 10 90 L 30 90 L 25 75 Z" fill="#374151" stroke="#1f2937" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="20" cy="85" r="1.5" fill="#facc15" stroke="none" />
                  <circle cx="25" cy="87" r="1" fill="#facc15" stroke="none" />
                  <circle cx="15" cy="88" r="1.5" fill="#9ca3af" stroke="none" />
                  
                  {/* Музыкальные ноты летят вверх */}
                  <path d="M 65 25 L 65 15 L 75 13" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="63" cy="25" r="2.5" fill="#1f2937" stroke="none" />
                  <path d="M 85 20 L 85 10 L 90 8 L 90 18" fill="none" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="83" cy="20" r="2" fill="#1f2937" stroke="none" />
                  <circle cx="88" cy="18" r="2" fill="#1f2937" stroke="none" />
                </svg>
              )
            },
            {
              id: 'map-reader',
              title: 'Человек с картой',
              desc: 'изучающий бумажную схему маршрутов',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Тело человека */}
                  <path d="M 30 90 L 35 50 C 35 35 65 35 65 50 L 70 90 Z" fill="#10b981" stroke="#047857" strokeWidth="3" strokeLinejoin="round" />
                  <circle cx="50" cy="25" r="10" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
                  
                  {/* Огромная бумажная карта в руках (развернутая) */}
                  <path d="M 15 45 L 85 45 L 80 80 L 20 80 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Сгибы на карте */}
                  <line x1="38" y1="45" x2="38" y2="80" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="62" y1="45" x2="62" y2="80" stroke="#cbd5e1" strokeWidth="2" />
                  
                  {/* Линии маршрутов на карте */}
                  <path d="M 25 55 Q 40 50 50 60 T 75 55" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 30 70 Q 50 75 60 50" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Метка (Вы здесь) */}
                  <circle cx="50" cy="60" r="3" fill="#fff" stroke="#1f2937" strokeWidth="2" />
                  <circle cx="50" cy="60" r="1" fill="#ef4444" stroke="none" />
                  
                  {/* Руки, держащие карту */}
                  <path d="M 25 50 L 15 50" stroke="#10b981" strokeWidth="5" strokeLinecap="round" />
                  <path d="M 75 50 L 85 50" stroke="#10b981" strokeWidth="5" strokeLinecap="round" />
                </svg>
              )
            },
            {
              id: 'tourist-group',
              title: 'Группа туристов',
              desc: 'одновременно смотрящие в одну сторону',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Турист 1 (на переднем плане) */}
                  <path d="M 20 90 L 25 50 C 25 40 45 40 45 50 L 50 90 Z" fill="#f43f5e" stroke="#be123c" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="35" cy="30" r="8" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
                  
                  {/* Турист 2 (с фотоаппаратом) */}
                  <path d="M 45 85 L 50 45 C 50 35 70 35 70 45 L 75 85 Z" fill="#0ea5e9" stroke="#0284c7" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="60" cy="25" r="8" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />
                  <rect x="65" y="40" width="10" height="8" rx="1" fill="#1f2937" stroke="none" /> {/* Фотоаппарат */}
                  <circle cx="75" cy="44" r="3" fill="#9ca3af" stroke="none" /> {/* Объектив */}
                  
                  {/* Турист 3 (чуть сзади) */}
                  <path d="M 70 80 L 75 40 C 75 30 95 30 95 40 L 90 80 Z" fill="#10b981" stroke="#047857" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="85" cy="20" r="7" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
                  
                  {/* Все смотрят вверх и вправо (Указательный палец) */}
                  <path d="M 40 60 L 55 25" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Линии их взглядов */}
                  <path d="M 42 25 L 50 15 M 68 20 L 76 10 M 90 15 L 98 5" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3 3" />
                </svg>
              )
            },
            {
              id: 'scooter-bag',
              title: 'Самокат в чехле',
              desc: 'удобно для поездки в метро',
              svg: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Человек (Силуэт) */}
                  <path d="M 40 95 L 40 50 C 40 30 60 30 60 50 L 60 95" fill="none" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
                  <circle cx="50" cy="20" r="10" fill="none" stroke="#64748b" strokeWidth="4" />
                  
                  {/* Длинный чехол с самокатом за плечом */}
                  <path d="M 75 25 C 80 20 85 25 80 30 L 35 85 C 30 90 20 85 25 80 L 70 25 Z" fill="#1f2937" stroke="#0f172a" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Ремень через плечо */}
                  <path d="M 65 35 C 50 40 40 50 35 65" fill="none" stroke="#1f2937" strokeWidth="4" />
                  
                  {/* Выпирающие части самоката (Колесико проглядывает) */}
                  <circle cx="28" cy="80" r="4" fill="#9ca3af" stroke="#475569" strokeWidth="1.5" />
                  <path d="M 28 80 L 22 83 M 28 80 L 25 75 M 28 80 L 34 77" stroke="#475569" strokeWidth="1" /> {/* Спицы колеса */}
                  
                  {/* Рука, держащая ремень */}
                  <path d="M 40 55 L 45 65" stroke="#64748b" strokeWidth="5" strokeLinecap="round" />
                </svg>
              )
            }
          ]
        }
		
      ]
    }
]; 

export default bookData;
