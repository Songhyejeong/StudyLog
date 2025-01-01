import React from 'react';
import AddWeekModal from '../../components/Modal/AddWeekModal';
import StudyLogButton from '../../components/Button/StudyLogButton';

const Modal: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <StudyLogButton text="새로운 주 추가하기" />
      </div>
      <AddWeekModal isOpen={true} />
    </>
  );
};

export default Modal;
