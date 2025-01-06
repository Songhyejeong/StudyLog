import React from 'react';
import StudyLogList from '../../components/Content/StudyLogList';
import Modal from '../../components/Modal/Modal';
import { useLogin } from '../../hooks/common/useLogin';
import useGetStudyLogs from '../../hooks/studyLog/useGetStudyLog';

const Main: React.FC = () => {
  const { isLoggedIn } = useLogin();
  const { data, isLoading } = useGetStudyLogs();

  if (!isLoggedIn) {
    return <div>로그인 후 서비스를 이용해 주세요.</div>;
  }

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <main className="w-[780px] flex flex-col gap-10 justify-center h-screen bg-background px-10 py-10">
      <StudyLogList studyLogList={data} />
      <Modal />
    </main>
  );
};

export default Main;
