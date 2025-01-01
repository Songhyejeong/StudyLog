import { StudyLogDayType } from '../types';

export const addMissingDays = (weekDays: string[], week: StudyLogDayType[]) => {
  const filledWeek = [...week];

  while (filledWeek.length < 7) {
    filledWeek.push({
      isCatStickerApplied: false,
      timer: '',
      day: weekDays[filledWeek.length],
    });
  }

  return filledWeek;
};
