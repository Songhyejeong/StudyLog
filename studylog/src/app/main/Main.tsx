import React from 'react';
import StudyLogList from '../../components/Content/StudyLogList';
import { mockStudyLogList } from '../../mockData';
import Modal from '../../components/Modal/Modal';

const Main: React.FC = () => {
  return (
    <main className=" max-w-[780px] flex flex-col gap-10 justify-center h-screen bg-background px-10 py-10">
      <StudyLogList studyLogList={mockStudyLogList} />
      <Modal />
    </main>
  );
};

export default Main;
