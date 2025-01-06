import React, { useState } from 'react';
import AddWeekModal from '../../components/Modal/AddWeekModal';
import StudyLogButton from '../../components/Button/StudyLogButton';

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddNewWeek = () => {
    setIsOpen(true);
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <StudyLogButton onClick={handleAddNewWeek} text="새로운 주 추가하기" />
      </div>
      <AddWeekModal isOpen={isOpen} onClick={handleBackdropClick} />
    </>
  );
};

export default Modal;
