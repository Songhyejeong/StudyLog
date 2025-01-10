import React from 'react';
import { StudyLogDayType } from '../../../types';
import StudyLogDay from './StudyLogDay';
import { v4 as uuidv4 } from 'uuid';

interface StudyLogWeekProps {
  title: string;
  studyLogWeek: StudyLogDayType[];
  weekId: string;
}

const StudyLogWeek: React.FC<StudyLogWeekProps> = ({
  title,
  studyLogWeek,
  weekId,
}: StudyLogWeekProps) => {
  return (
    <div className="max-w-[700px] bg-white items-center flex flex-col rounded-lg px-10">
      <h2 className="text-lg text-black">{title}</h2>
      <div className="grid grid-cols-7 gap-4 h-[200px] justify-items-center items-center">
        {studyLogWeek.map((item) => (
          <StudyLogDay weekId={weekId} key={uuidv4()} {...item} />
        ))}
      </div>
    </div>
  );
};

export default StudyLogWeek;
