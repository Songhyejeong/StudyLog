export interface StudyLogDayType {
  isCatStickerApplied: boolean;
  timer: string | null;
  day: string;
}

export interface StudyLogWeekType {
  title: string;
  studyLogWeek: StudyLogDayType[];
}
