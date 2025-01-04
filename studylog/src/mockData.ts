import { StudyLogWeekType, TodoListType } from './types';

export const mockStudyLogList: StudyLogWeekType[] = [
  {
    title: '2025년 1월 첫째 주',
    studyLogWeek: [
      {
        isCatStickerApplied: true,
        studyTime: 7200,
        day: '월',
      },
      {
        isCatStickerApplied: true,
        studyTime: 8439,
        day: '화',
      },
      {
        isCatStickerApplied: true,
        studyTime: 3948,
        day: '수',
      },
      {
        isCatStickerApplied: false,
        studyTime: 3948,
        day: '목',
      },
      {
        isCatStickerApplied: false,
        isToday: true,
        studyTime: 3948,
        day: '금',
      },
      {
        isCatStickerApplied: false,
        studyTime: 3948,
        day: '토',
      },
      {
        isCatStickerApplied: false,
        studyTime: 3948,
        day: '일',
      },
    ],
  },
  {
    title: '2025년 1월 둘째 주',
    studyLogWeek: [
      {
        isCatStickerApplied: true,
        studyTime: 3948,
        day: '월',
      },
      {
        isCatStickerApplied: true,
        studyTime: 3948,
        day: '화',
      },
      {
        isCatStickerApplied: true,
        studyTime: 3948,
        day: '수',
      },
    ],
  },
];

export const mockTodoList: TodoListType[] = [
  {
    day: '월',
    studyTime: 3948,
    todoList: [
      {
        id: 1,
        isChecked: false,
        todoName: '타입스크립트 공부',
        isToday: true,
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
        todoName: '타입스크립트 공부하기',
        priority: 'high',
      },
    ],
  },
  {
    day: '화',
    studyTime: 3948,
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
