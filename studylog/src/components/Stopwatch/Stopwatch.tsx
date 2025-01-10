import React, { useState, useEffect } from 'react';
import StudyLogButton from '../Button/StudyLogButton';
import useSaveStopwatchTime from '../../hooks/todo/useSaveTimer';
import { weekType } from '../../types';

interface StopwatchProps {
  studyTime: number;
  day: weekType;
  weekId: string;
}

const Stopwatch: React.FC<StopwatchProps> = ({
  studyTime,
  day,
  weekId,
}: StopwatchProps) => {
  const [currentSeconds, setCurrentSeconds] = useState<number>(studyTime);
  const [currentTime, setCurrentTime] = useState<string>();
  const [nIntervId, setNIntervId] = useState<NodeJS.Timeout | undefined>(
    undefined
  );

  const { saveStopwatchTime } = useSaveStopwatchTime(day);

  const getTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    setCurrentTime(
      `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    );
  };

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      getTime(currentSeconds);
    }

    return () => {
      ignore = true;
    };
  }, [currentSeconds]);

  const startStopwatch = () => {
    const nIntervId = setInterval(() => {
      setCurrentSeconds((prev) => prev + 1);
    }, 1000);
    setNIntervId(nIntervId);
  };

  const stopStopwatch = () => {
    if (nIntervId) {
      clearInterval(nIntervId);
    }
  };

  const saveDayTodoContent = () => {
    saveStopwatchTime(weekId, currentSeconds);
  };

  return (
    <div className="rounded-full bg-white w-[250px] h-[250px] flex  flex-col gap-5 justify-center items-center shadow-md">
      <p className="text-2xl">{currentTime}</p>
      <div className="flex flex-row gap-5 ">
        <StudyLogButton
          text="stop"
          size="small"
          color="white"
          onClick={stopStopwatch}
        />
        <StudyLogButton
          text="start"
          size="small"
          color="primary"
          onClick={startStopwatch}
        />
      </div>
      <StudyLogButton
        text="공부시간 저장하기"
        size="small"
        onClick={saveDayTodoContent}
      />
    </div>
  );
};

export default Stopwatch;
