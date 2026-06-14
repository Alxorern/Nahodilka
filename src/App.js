import React, { useState, useCallback, useEffect, useRef } from 'react';
import bookData from './data/bookData';
import MenuView from './components/MenuView';
import SectionView from './components/SectionView';
import SuperTasksView from './components/SuperTasksView';
import { useGuestSession } from './hooks/useGuestSession';
import { useSyncProgress } from './hooks/useSyncProgress';
import AuthModal from './components/AuthModal';

export default function App() {
  const [view, setView] = useState({ type: 'menu' });
  const [expandedChapter, setExpandedChapter] = useState(null);
  const [foundItems, setFoundItems] = useState(new Set());
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const viewRef = useRef(view);
  viewRef.current = view;

  const session = useGuestSession();

  useSyncProgress(session.userId, foundItems, setFoundItems);

  const navigate = useCallback((newView) => {
    window.history.pushState(null, '', '');
    setView(newView);
  }, []);

  useEffect(() => {
    const onPopState = () => {
      const v = viewRef.current;
      if (v.type === 'section' || v.type === 'super') {
        setExpandedChapter(v.chapterId);
        setView({ type: 'menu' });
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleAuthSuccess = (userData) => {
    localStorage.setItem('local_user_id', userData.userId);
    localStorage.setItem('local_username', userData.username);
    localStorage.setItem('local_is_registered', userData.isRegistered ? '1' : '0');
    window.dispatchEvent(new Event('nahodilka-auth'));
  };

  const toggleItem = (itemId) => {
    setFoundItems(prev => {
      const next = new Set(prev);
      if (next.has(itemId)) next.delete(itemId);
      else next.add(itemId);
      return next;
    });
  };

  return (
    <div
      className="min-h-screen p-2 md:p-6 flex justify-center items-start relative overflow-hidden"
      style={{
        backgroundImage: 'url(/asphalt-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Neucha&display=swap');`}</style>

      <div
        className="relative rounded-xl shadow-2xl max-w-4xl w-full pt-16 pb-12 px-4 sm:px-8 md:px-12 overflow-x-hidden min-h-[85vh]"
        style={{
          backgroundColor: '#fef3c7',
          backgroundImage: `radial-gradient(ellipse at 30% 15%, rgba(255,255,255,0.18) 0%, transparent 50%), radial-gradient(ellipse at 80% 90%, rgba(200,160,60,0.08) 0%, transparent 40%), url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.62' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E")`,
          boxShadow: '0 20px 65px rgba(0,0,0,0.3), inset 0 0 100px rgba(180,140,40,0.06)',
        }}
      >
        {/* Пружины блокнота */}
        <div className="absolute top-0 left-0 w-full h-[30px] bg-amber-100 border-b-2 border-amber-300 flex justify-evenly z-10">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="relative w-3 h-6 rounded-full shadow-md mt-[-10px]" style={{ background: 'linear-gradient(to right, #78350f, #fde68a, #78350f)' }}>
              <div className="absolute bottom-[-6px] left-[2px] w-2 h-2 bg-amber-200 rounded-full shadow-inner"></div>
            </div>
          ))}
        </div>

        {view.type === 'menu' && (
          <MenuView 
            navigate={navigate}
            expandedChapter={expandedChapter}
            setExpandedChapter={setExpandedChapter}
            foundItems={foundItems} 
            bookData={bookData} 
            session={session}
            onAuthClick={() => setIsAuthModalOpen(true)}
          />
        )}
        {view.type === 'section' && (
          <SectionView
            view={view}
            onBackToMenu={() => {
              window.history.back();
              setExpandedChapter(view.chapterId);
              setView({ type: 'menu' });
            }}
            foundItems={foundItems}
            toggleItem={toggleItem}
            bookData={bookData}
          />
        )}
        {view.type === 'super' && (
          <SuperTasksView
            view={view}
            onBackToMenu={() => {
              window.history.back();
              setExpandedChapter(view.chapterId);
              setView({ type: 'menu' });
            }}
            foundItems={foundItems}
            toggleItem={toggleItem}
            bookData={bookData}
          />
        )}
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        currentUser={session}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
}
