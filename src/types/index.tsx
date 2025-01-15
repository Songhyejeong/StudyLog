import { User } from 'firebase/auth';

export interface StudyLogWeekType {
  id: string;
  title: string;
  studyLogWeek: StudyLogDayType[];
}

export interface StudyLogDayType {
  id: string;
  isCatStickerApplied: boolean;
  studyTime: number;
  isToday?: boolean;
  day: weekType;
  todoList: TodoContentType[];
}

export type weekType = '월' | '화' | '수' | '목' | '금' | '토' | '일';

export interface TodoContentType {
  id: string;
  isChecked: boolean;
  todoName: string;
}

export type UserType = User | null;
