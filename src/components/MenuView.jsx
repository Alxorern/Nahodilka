import React from 'react';
import { chapterColors, pencilBorderStyle } from '../constants';
import HeaderBanner from './HeaderBanner';
import LeaderboardMini from './Leaderboard';

export default function MenuView({ navigate, expandedChapter, setExpandedChapter, foundItems, bookData, session, onAuthClick }) {
  return (
    <div className="relative z-10 w-full max-w-2xl mx-auto pb-20">

      <HeaderBanner 
        username={session?.username} 
        isRegistered={session?.isRegistered} 
        onAuthClick={onAuthClick}
        score={foundItems.size}
      />

      <div className="text-center mb-10 relative z-10 px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-slate-800 mb-4 font-[Neucha] tracking-tight" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.1)' }}>ЗАМЕЧАЛКИ</h1>
        <div className="max-w-2xl mx-auto mb-6">
          <p className="text-lg md:text-xl text-amber-900 font-[Neucha] leading-tight italic">
            Гуляй, смотри по сторонам и отмечай всё необычное! 
            Собери полную коллекцию находок и стань главным чемпионом по внимательности в своём дворе.
          </p>
        </div>
        <p className="text-2xl text-slate-700 underline decoration-wavy decoration-amber-500 font-[Neucha]">Оглавление</p>
      </div>

      {/* Аккордеон глав */}
      <div className="space-y-6 relative z-10 mb-12">
        {bookData.map((chapter, index) => {
          const totalChapterItems = chapter.sections.reduce((sum, sec) => sum + sec.items.length, 0);
          const foundChapterItems = chapter.sections.reduce((sum, sec) => sum + sec.items.filter(item => foundItems.has(item.id)).length, 0);

          const isExpanded = expandedChapter === chapter.id;
          const borderColor = chapterColors[index % chapterColors.length];
          const isComplete = totalChapterItems > 0 && foundChapterItems === totalChapterItems;

          return (
            <div key={chapter.id} className="transition-all duration-300">
              {/* Плашка главы */}
              <button
                onClick={() => setExpandedChapter(prev => prev === chapter.id ? null : chapter.id)}
                className="w-full flex items-center justify-between p-4 mb-2 hover:brightness-95 transition-all shadow-sm active:scale-95"
                style={{
                  ...pencilBorderStyle,
                  borderColor,
                  transform: `rotate(${index % 2 === 0 ? '-1deg' : '1deg'})`,
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl drop-shadow-sm">{chapter.emoji}</span>
                  <div className="text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 font-[Neucha]">{chapter.title}</h2>
                    <div className="text-sm md:text-base font-bold mt-1 text-slate-600">
                      Найдено: {foundChapterItems} / {totalChapterItems} {isComplete && '✨'}
                    </div>
                  </div>
                </div>
                <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} style={{ color: borderColor }}>
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Раскрывающийся список разделов */}
              {isExpanded && (
                <div className="pl-4 pr-2 py-2 space-y-3">
                  {chapter.sections.map(section => {
                    const secTotal = section.items.length;
                    const secFound = section.items.filter(item => foundItems.has(item.id)).length;
                    const isSecComplete = secFound === secTotal;

                    return (
                      <button
                        key={section.id}
                        onClick={() => navigate({ type: 'section', chapterId: chapter.id, sectionId: section.id })}
                        className="w-full flex items-center justify-between p-3 rounded-xl border-2 border-dashed border-slate-400 hover:border-slate-600 transition-all active:scale-95"
                        style={{ backgroundColor: '#fefce8' }}
                      >
                        <div className="text-left">
                          <h3 className="text-xl font-bold text-slate-800 font-[Neucha]">{section.title}</h3>
                          <p className="text-xs md:text-sm text-slate-600 uppercase tracking-wider font-semibold mt-1">{section.subtitle}</p>
                        </div>
                        <div className={`px-3 py-1 rounded-lg text-sm font-bold ${isSecComplete ? 'bg-green-200 text-green-800' : 'bg-slate-200 text-slate-700'}`}>
                          {secFound} / {secTotal}
                        </div>
                      </button>
                    );
                  })}

                  {/* Кнопка "Сверхзадания" */}
                  {chapter.superTasks && chapter.superTasks.length > 0 && (
                    <button
                      onClick={() => navigate({ type: 'super', chapterId: chapter.id })}
                      className="w-full flex items-center justify-between p-3 rounded-xl border-2 border-dashed border-amber-500 hover:bg-amber-200 bg-amber-100/50 transition-all active:scale-95"
                    >
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-amber-900 font-[Neucha]">Сверхзадания</h3>
                        <p className="text-xs md:text-sm text-amber-700 uppercase tracking-wider font-semibold mt-1">Особые испытания</p>
                      </div>
                      <span className="text-2xl">🏆</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <LeaderboardMini 
        currentUsername={session?.username} 
        foundItemsCount={foundItems.size} 
      />
    </div>
  );
}
