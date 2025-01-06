import React from 'react';
import catSticker from '../../assets/cat.jpeg';
import { useNavigate } from 'react-router-dom';
import { useSelectedDay } from '../../hooks/common/useSelectedDay';

interface StudyLogDayProps {
  id: string;
  isCatStickerApplied: boolean;
  studyTime: number;
  day: string;
}

interface StikerProps {
  id: string;
  isCatStickerApplied: boolean;
  day: string;
}

const Day: React.FC<{ day: string }> = ({ day }) => {
  return <p>{day}</p>;
};

const Sticker: React.FC<StikerProps> = ({ isCatStickerApplied, id, day }) => {
  const navigate = useNavigate();
  const { setDay, setIsCompleted } = useSelectedDay();

  const handleStickerClick = () => {
    setDay(day);
    setIsCompleted(true);
    navigate(`/todo/${id}`);
  };

  return (
    <div
      onClick={handleStickerClick}
      className="bg-neutral w-14 h-14 flex justify-center items-center rounded-full overflow-hidden cursor-pointer"
    >
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

const Timer: React.FC<{ studyTime: number }> = ({ studyTime }) => {
  const getTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const formatTime = getTime(studyTime);

  return (
    <p className="h-10 w-20 font-bold flex justify-center">{formatTime}</p>
  );
};

const StudyLogDay: React.FC<StudyLogDayProps> = ({
  isCatStickerApplied,
  studyTime,
  day,
  id,
}: StudyLogDayProps) => {
  return (
    <div className="bg-white mx-auto h-[150px] flex flex-col items-center justify-center">
      <Day day={day} />
      <Sticker id={id} day={day} isCatStickerApplied={isCatStickerApplied} />
      <Timer studyTime={studyTime} />
    </div>
  );
};

export default StudyLogDay;
