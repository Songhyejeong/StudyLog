import React from 'react';
import StudyLogButton from '../Button/StudyLogButton';

const Stopwatch: React.FC = () => {
  return (
    <div className="rounded-full bg-white w-[250px] h-[250px] flex  flex-col gap-5 justify-center items-center shadow-md">
      <p className="text-2xl">03:46:08</p>
      <div className="flex flex-row gap-5 ">
        <StudyLogButton text="stop" />
        <StudyLogButton text="start" />
      </div>
    </div>
  );
};

export default Stopwatch;
