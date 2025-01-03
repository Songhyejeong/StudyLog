import React from 'react';
import catSticker from '../../assets/cat.jpeg';

interface StudyLogDayProps {
  isCatStickerApplied: boolean;
  timer: string | null;
  day: string;
}

const Day: React.FC<{ day: string }> = ({ day }) => {
  return <p>{day}</p>;
};

const Sticker: React.FC<{ isCatStickerApplied: boolean }> = ({
  isCatStickerApplied,
}) => {
  return (
    <div className="bg-neutral w-14 h-14 flex justify-center items-center rounded-full overflow-hidden">
      {isCatStickerApplied && (
        <img
          src={catSticker}
          alt="고양이 스티커"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

const Timer: React.FC<{ timer: string | null }> = ({ timer }) => {
  return <p className="h-10 w-20 font-bold flex justify-center">{timer}</p>;
};

const StudyLogDay: React.FC<StudyLogDayProps> = ({
  isCatStickerApplied,
  timer,
  day,
}: StudyLogDayProps) => {
  return (
    <div className="bg-white mx-auto h-[150px] flex flex-col items-center justify-center">
      <Day day={day} />
      <Sticker isCatStickerApplied={isCatStickerApplied} />
      <Timer timer={timer} />
    </div>
  );
};

export default StudyLogDay;
