import React, { useState } from 'react';
import AddWeekModal from '../../components/Modal/AddWeekModal';
import StudyLogButton from '../../components/Button/StudyLogButton';

interface ModalProps {
  refetch: () => void;
}

const Modal: React.FC<ModalProps> = ({ refetch }) => {
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
      <AddWeekModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClick={handleBackdropClick}
        refetch={refetch}
      />
    </>
  );
};

export default Modal;
