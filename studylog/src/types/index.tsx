export interface StudyLogDayType {
  isCatStickerApplied: boolean;
  studyTime: number;
  isToday?: boolean;
  day: weekType;
}

export type weekType = '월' | '화' | '수' | '목' | '금' | '토' | '일';

export interface StudyLogWeekType {
  title: string;
  studyLogWeek: StudyLogDayType[];
}

export interface TodoContentType {
  id: number;
  isChecked: boolean;
  isToday?: boolean;
  todoName: string;
  priority: 'high' | 'middle' | 'row';
}

export interface TodoListType
  extends Omit<StudyLogDayType, 'isCatStickerApplied'> {
  todoList: TodoContentType[];
}
