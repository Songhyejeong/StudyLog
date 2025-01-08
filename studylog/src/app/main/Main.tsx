import React from 'react';
import StudyLogList from '../../components/Content/studyLog/StudyLogList';
import Modal from '../../components/Modal/Modal';
import useGetStudyLogWeeks from '../../hooks/studyLog/useGetStudyLogWeeks';
import useAuth from '../../hooks/common/useAuth';

const Main: React.FC = () => {
  const { user } = useAuth();
  const { data, isLoading } = useGetStudyLogWeeks();

  if (!user) {
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
