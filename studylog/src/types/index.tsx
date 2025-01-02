export interface StudyLogDayType {
  isCatStickerApplied: boolean;
  timer: string | null;
  day: string;
}

export interface StudyLogWeekType {
  title: string;
  studyLogWeek: StudyLogDayType[];
}

export interface TodoContentType {
  id: number;
  isChecked: boolean;
  todoName: string;
  priority: string;
}

export interface TodoListType
  extends Omit<StudyLogDayType, 'isCatStickerApplied'> {
  todoList: TodoContentType[];
}
