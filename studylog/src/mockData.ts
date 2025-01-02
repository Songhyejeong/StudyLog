import { StudyLogWeekType, TodoListType } from './types';

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

export const mockTodoList: TodoListType[] = [
  {
    day: '월',
    timer: '02:30',
    todoList: [
      {
        id: 1,
        isChecked: false,
        todoName: '타입스크립트 공부',
        priority: 'high',
      },
      {
        id: 2,
        isChecked: false,
        todoName: '타입스크립트 공부',
        priority: 'high',
      },
      {
        id: 3,
        isChecked: false,
        todoName: '타입스크립트 공부',
        priority: 'high',
      },
    ],
  },
  {
    day: '화',
    timer: '01:45',
    todoList: [
      {
        id: 1,
        isChecked: false,
        todoName: '타입스크립트 공부',
        priority: 'high',
      },
      {
        id: 2,
        isChecked: false,
        todoName: '타입스크립트 공부',
        priority: 'high',
      },
      {
        id: 3,
        isChecked: false,
        todoName: '타입스크립트 공부',
        priority: 'high',
      },
    ],
  },
];
