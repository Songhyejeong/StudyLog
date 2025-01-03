import React from 'react';
import { StudyLogDayType } from '../../types';
import StudyLogDay from './StudyLogDay';
import { addMissingDays } from '../../utils/StudyLog';

interface StudyLogWeekProps {
  title: string;
  studyLogWeek: StudyLogDayType[];
}

const StudyLogWeek: React.FC<StudyLogWeekProps> = ({
  title,
  studyLogWeek,
}: StudyLogWeekProps) => {
  const weekDays = ['월', '화', '수', '목', '금', '토', '일'];

  const weekWithDays = addMissingDays(weekDays, studyLogWeek).map(
    (studylog, index) => ({
      ...studylog,
      day: weekDays[index],
    })
  );

  return (
    <div className="max-w-[700px] bg-white items-center flex flex-col rounded-lg px-10">
      <h2 className="text-lg text-black">{title}</h2>
      <div className="grid grid-cols-7 gap-4 h-[200px] justify-items-center items-center">
        {weekWithDays.map((item, day) => (
          <StudyLogDay key={day} {...item} />
        ))}
      </div>
    </div>
  );
};

export default StudyLogWeek;
