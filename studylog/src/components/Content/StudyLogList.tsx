import React from 'react';
import { StudyLogWeekType } from '../../types';
import StudyLogWeek from './StudyLogWeek';

interface StudyLogListProps {
  studyLogList: StudyLogWeekType[];
}

const StudyLogList: React.FC<StudyLogListProps> = ({
  studyLogList,
}: StudyLogListProps) => {
  return (
    <div className="flex flex-col gap-10 items-center">
      {studyLogList.map((item, day) => (
        <StudyLogWeek key={day} {...item} />
      ))}
    </div>
  );
};

export default StudyLogList;
