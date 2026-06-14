import React from 'react';

export default function SuperTasksView({ view, onBackToMenu, foundItems, toggleItem, bookData }) {
  const chapter = bookData.find(c => c.id === view.chapterId);

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
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-amber-600 mb-2">Сверхзадания</h1>
            <p className="text-2xl md:text-3xl text-gray-500 underline decoration-wavy decoration-amber-400">Включай все органы чувств!</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        {chapter.superTasks.map(task => {
          const isChecked = foundItems.has(task.id);
          return (
            <div
              key={task.id}
              onClick={() => toggleItem(task.id)}
              className={`border-4 rounded-2xl p-6 cursor-pointer transition-all flex gap-4 items-center ${isChecked ? 'bg-amber-100 border-amber-400' : 'bg-white border-gray-200 hover:border-amber-300'}`}
            >
              <div className={`w-14 h-14 flex-shrink-0 border-4 border-gray-700 rounded-lg flex items-center justify-center transition-colors shadow-sm ${isChecked ? 'bg-yellow-400' : 'bg-white'}`}>
                {isChecked && <span className="text-4xl font-bold text-gray-900 leading-none mb-1">✓</span>}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800">{task.type}</h3>
                <p className="text-xl text-gray-600 mt-1">{task.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
