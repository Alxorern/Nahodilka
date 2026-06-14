import { useState, useEffect } from 'react';
import { fetchJson } from '../utils/apiFetch';

const ADJECTIVES = [
  'Безумный',
  'Неуловимый',
  'Космический',
  'Ленивый',
  'Голодный',
  'Хитрый',
  'Любопытный',
  'Ворчливый',
  'Пушистый',
  'Громкий',
  'Скользкий',
  'Дерзкий',
  'Загадочный',
  'Весёлый',
  'Юркий',
  'Шумный',
  'Лазурный',
  'Звёздный',
  'Озорный',
  'Сонный',
];

const ANIMALS = [
  'Капибара',
  'Енот',
  'Утконос',
  'Сурикат',
  'Ленивец',
  'Осьминог',
  'Слот',
  'Манул',
  'Трубкозуб',
  'Носуха',
  'Скунс',
  'Коала',
  'Пингвин',
  'Фламинго',
  'Дикобраз',
  'Колибри',
  'Шиншилла',
  'Кальмар',
  'Нарвал',
  'Аксолотль',
];

function readSessionFromStorage() {
  return {
    userId: localStorage.getItem('local_user_id'),
    username: localStorage.getItem('local_username'),
    isRegistered: localStorage.getItem('local_is_registered') === '1',
  };
}

export const useGuestSession = () => {
  const [session, setSession] = useState(readSessionFromStorage);

  useEffect(() => {
    const syncFromStorage = () => {
      setSession(readSessionFromStorage());
    };

    window.addEventListener('nahodilka-auth', syncFromStorage);
    window.addEventListener('storage', syncFromStorage);

    const initializeSession = async () => {
      let userId = localStorage.getItem('local_user_id');
      let username = localStorage.getItem('local_username');

      if (!userId || !username) {
        const randomAdj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
        const randomAnimal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
        const generatedName = `${randomAdj} ${randomAnimal}`;

        try {
          const data = await fetchJson('/api/guest', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: generatedName }),
          });

          if (data.id) {
            userId = data.id;
            username = generatedName;
            localStorage.setItem('local_user_id', userId);
            localStorage.setItem('local_username', username);
            localStorage.setItem('local_is_registered', '0');
            setSession(readSessionFromStorage());
          }
        } catch (error) {
          console.error('Failed to create guest session:', error);
        }
      }
    };

    initializeSession();

    return () => {
      window.removeEventListener('nahodilka-auth', syncFromStorage);
      window.removeEventListener('storage', syncFromStorage);
    };
  }, []);

  return session;
};
