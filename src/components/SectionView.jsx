import React from 'react';
import { themeColors } from '../constants';

export default function SectionView({ view, onBackToMenu, foundItems, toggleItem, bookData }) {
  const chapter = bookData.find(c => c.id === view.chapterId);
  const section = chapter.sections.find(s => s.id === view.sectionId);
  const colors = themeColors[section.theme] || themeColors.blue;

  return (
    <div className="font-[Neucha]">
      <div
        className="sticky top-0 z-50 -mx-4 sm:-mx-8 md:-mx-12 px-4 sm:px-8 md:px-12 py-3 mb-8 bg-[#fef3c7] shadow-sm border-b-2 border-slate-200/50"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onBackToMenu}
            className="p-4 shrink-0 self-start sm:self-center bg-white border-2 border-gray-700 rounded-full font-bold shadow-sm hover:bg-yellow-300 transition-all text-lg"
          >
            ← В меню
          </button>
          <div className="flex-1 text-center min-w-0">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-gray-800 mb-2">{section.title}</h1>
            <p className={`text-2xl md:text-3xl text-gray-500 underline decoration-wavy ${colors.decoration}`}>{section.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6">
        {section.items.map(item => {
          const isChecked = foundItems.has(item.id);
          return (
            <div
              key={item.id}
              className="flex flex-col items-center relative p-2 transition-transform hover:-translate-y-1 cursor-pointer"
              onClick={() => toggleItem(item.id)}
            >
              <div className="flex items-center gap-3 w-full justify-center mb-3">
                <div className={`w-12 h-12 border-4 border-gray-700 rounded-lg flex items-center justify-center transition-colors shadow-sm ${isChecked ? 'bg-yellow-400' : 'bg-white'}`}>
                  {isChecked && <span className="text-4xl font-bold text-gray-900 leading-none mb-1">✓</span>}
                </div>
                <div className="w-24 h-24 text-gray-700 drop-shadow-sm flex items-center justify-center">
                  {item.svg}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-center uppercase tracking-wide leading-none">{item.title}</h3>
              <p className="text-gray-500 text-center text-xl leading-tight mt-2">{item.desc}</p>
            </div>
          );
        })}
      </div>

      <div className={`mt-16 p-5 border-2 border-dashed border-gray-300 rounded-2xl ${colors.bg}`}>
        <p className="text-2xl text-gray-600 flex items-center gap-3">
          <span>✏️</span> <b>Заметка:</b> Самая крутая находка на этой странице была...
        </p>
        <div className="border-b-2 border-gray-400 mt-8 w-full opacity-50"></div>
      </div>
    </div>
  );
}
