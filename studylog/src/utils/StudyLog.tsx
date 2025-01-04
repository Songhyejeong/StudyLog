import { StudyLogDayType } from '../types';
import { weekType } from '../types';

export const addMissingDays = (
  weekDays: weekType[],
  week: StudyLogDayType[]
) => {
  const filledWeek = [...week];

  while (filledWeek.length < 7) {
    filledWeek.push({
      isCatStickerApplied: false,
      studyTime: 0,
      day: weekDays[filledWeek.length],
    });
  }

  return filledWeek;
};
