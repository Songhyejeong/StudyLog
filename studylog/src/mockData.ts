import { StudyLogWeekType } from './types';
export const mockStudyLogList: StudyLogWeekType[] = [
  {
    title: '2025년 1월 첫째 주',
    studyLogWeek: [
      {
        isCatStickerApplied: true,
        timer: '1h 30m',
        day: '월요일',
      },
      {
        isCatStickerApplied: true,
        timer: '1h 30m',
        day: '화요일',
      },
      {
        isCatStickerApplied: true,
        timer: '1h 30m',
        day: '수요일',
      },
      {
        isCatStickerApplied: false,
        timer: null,
        day: '목요일',
      },
      {
        isCatStickerApplied: false,
        timer: null,
        day: '금요일',
      },
      {
        isCatStickerApplied: false,
        timer: null,
        day: '토요일',
      },
      {
        isCatStickerApplied: false,
        timer: null,
        day: '일요일',
      },
    ],
  },
  {
    title: '2025년 1월 둘째 주',
    studyLogWeek: [
      {
        isCatStickerApplied: true,
        timer: '2h 30m',
        day: '월요일',
      },
      {
        isCatStickerApplied: true,
        timer: '1h 30m',
        day: '화요일',
      },
      {
        isCatStickerApplied: true,
        timer: '1h 30m',
        day: '수요일',
      },
    ],
  },
];
