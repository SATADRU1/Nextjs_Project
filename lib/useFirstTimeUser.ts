import { useEffect, useState } from 'react';

type Storage = {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
};

const getStorage = (): Storage | null => {
  if (typeof window !== 'undefined') {
    return window.localStorage;
  }
  return null;
};

export const useFirstTimeUser = (): boolean => {
  const [isFirstTime, setIsFirstTime] = useState<boolean>(false);

  useEffect(() => {
    const storage = getStorage();
    if (!storage) return;

    const hasVisited = storage.getItem('hasVisitedBefore');
    
    if (!hasVisited) {
      setIsFirstTime(true);
      storage.setItem('hasVisitedBefore', 'true');
    }
  }, []);

  return isFirstTime;
};