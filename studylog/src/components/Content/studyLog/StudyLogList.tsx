import React from 'react';
import { StudyLogWeekType } from '../../../types';
import StudyLogWeek from './StudyLogWeek';

interface StudyLogListProps {
  studyLogList: StudyLogWeekType[];
  refetch: () => void;
}

const StudyLogList: React.FC<StudyLogListProps> = ({
  studyLogList,
  refetch,
}: StudyLogListProps) => {
  return (
    <div className="flex flex-col gap-10 items-center">
      {studyLogList.map((item) => (
        <StudyLogWeek
          refetch={refetch}
          weekId={item.id}
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export default StudyLogList;
