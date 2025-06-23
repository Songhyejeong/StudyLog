import React from 'react';
import StudyLogList from '../../components/Content/studyLog/StudyLogList';
import Modal from '../../components/Modal/Modal';
import useGetStudyLogWeeks from '../../hooks/studyLog/useGetStudyLogWeeks';
import useAuth from '../../hooks/common/useAuth';
import { isValidDateString } from '../../utils';

const Main: React.FC = () => {
  const { user } = useAuth();
  const { data: studyLogWeeks, isLoading, refetch } = useGetStudyLogWeeks();

  const sortStudyLogWeeks = studyLogWeeks
    .filter((week) => isValidDateString(week.id))
    .sort((a, b) => new Date(b.id).getTime() - new Date(a.id).getTime());

  if (!user) {
    return <div>로그인 후 서비스를 이용해 주세요.</div>;
  }

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <main className="w-[780px] flex flex-col gap-10 justify-center h-auto bg-background px-10 py-10">
      <p>모든 할일을 완료하면 고양이 스티커가 부착돼요!</p>
      <StudyLogList refetch={refetch} studyLogList={sortStudyLogWeeks} />
      <Modal refetch={refetch} />
    </main>
  );
};

export default Main;
