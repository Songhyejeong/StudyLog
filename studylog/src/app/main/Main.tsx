import React from 'react';
import StudyLogList from '../../components/Content/StudyLogList';
import { mockStudyLogList } from '../../mockData';
import Modal from '../../components/Modal/Modal';
import { useLogin } from '../../hooks/useLogin';

const Main: React.FC = () => {
  const { isLoggedIn } = useLogin();

  if (!isLoggedIn) {
    return <div>로그인 후 서비스를 이용해 주세요.</div>;
  }

  return (
    <main className=" max-w-[780px] flex flex-col gap-10 justify-center h-screen bg-background px-10 py-10">
      <StudyLogList studyLogList={mockStudyLogList} />
      <Modal />
    </main>
  );
};

export default Main;
