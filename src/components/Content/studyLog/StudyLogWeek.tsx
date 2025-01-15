import React from 'react';
import { StudyLogDayType } from '../../../types';
import StudyLogDay from './StudyLogDay';
import { v4 as uuidv4 } from 'uuid';
import StudyLogButton from '../../Button/StudyLogButton';
import useRemoveWeek from '../../../hooks/studyLog/useRemoveWeek';

interface StudyLogWeekProps {
  title: string;
  studyLogWeek: StudyLogDayType[];
  weekId: string;
  refetch: () => void;
}

const StudyLogWeek: React.FC<StudyLogWeekProps> = ({
  title,
  studyLogWeek,
  weekId,
  refetch,
}: StudyLogWeekProps) => {
  const { removeWeek, error } = useRemoveWeek();

  const handleRemoveWeek = async () => {
    await removeWeek(weekId);

    if (!error) {
      refetch();
    }
  };
  return (
    <div className="max-w-[700px] bg-white items-center flex flex-col rounded-lg px-10">
      <h2 className="text-lg text-black">{title}</h2>
      <div className="grid grid-cols-7 gap-4 h-[200px] justify-items-center items-center">
        {studyLogWeek.map((item) => (
          <StudyLogDay weekId={weekId} key={uuidv4()} {...item} />
        ))}
      </div>
      <div className="py-3">
        <StudyLogButton
          text="주 삭제하기"
          color="delete"
          onClick={handleRemoveWeek}
          size="small"
        />
      </div>
    </div>
  );
};

export default StudyLogWeek;
