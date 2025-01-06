import React from 'react';
import { StudyLogDayType } from '../../types';
import { weekType } from '../../types';
import StudyLogDay from './StudyLogDay';
import { addMissingDays } from '../../utils/StudyLog';
import { v4 as uuidv4 } from 'uuid';

interface StudyLogWeekProps {
  title: string;
  studyLogWeek: StudyLogDayType[];
}

const StudyLogWeek: React.FC<StudyLogWeekProps> = ({
  title,
  studyLogWeek,
}: StudyLogWeekProps) => {
  const weekDays: weekType[] = ['월', '화', '수', '목', '금', '토', '일'];

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
          <StudyLogDay id={uuidv4()} key={day} {...item} />
        ))}
      </div>
    </div>
  );
};

export default StudyLogWeek;
