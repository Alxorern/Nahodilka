import { useEffect, useRef } from 'react';
import { parseJsonResponse } from '../utils/apiFetch';

export const useSyncProgress = (userId, foundItems, setFoundItems) => {
  const isInitialMount = useRef(true);

  // Initial load
  useEffect(() => {
    if (userId) {
      const fetchProgress = async () => {
        try {
          const response = await fetch(`/api/progress/${userId}`);
          const data = await parseJsonResponse(response);
          if (response.ok && data?.foundItems) {
            setFoundItems(new Set(data.foundItems));
          }
        } catch (error) {
          console.error('Error loading progress:', error);
        }
      };
      fetchProgress();
    }
  }, [userId, setFoundItems]);

  // Sync on changes with debounce
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (!userId) return;

    const timer = setTimeout(async () => {
      try {
        const res = await fetch('/api/progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId,
            foundItems: Array.from(foundItems),
          }),
        });
        await parseJsonResponse(res);
        if (!res.ok) console.error('Error syncing progress:', res.status);
      } catch (error) {
        console.error('Error syncing progress:', error);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [foundItems, userId]);
};
