import { useState } from 'react';

export const useSelectedDay = () => {
  const [day, setDay] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  return { day, setDay, isCompleted, setIsCompleted };
};
