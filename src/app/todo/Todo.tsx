import React from 'react';
import SelectedDay from '../../components/Content/todo/SelectedDay';
import useGetStudyLogDay from '../../hooks/studyLog/useGetStudyLogDay';
import { useParams } from 'react-router-dom';

const Todo: React.FC = () => {
  const { weekId = '', day = '' } = useParams<{
    weekId: string;
    day: string;
  }>();

  const { studyLogDay } = useGetStudyLogDay(weekId, day);

  if (!studyLogDay) {
    return <p>요일 정보가 없습니다.</p>;
  }

  return <SelectedDay weekId={weekId} studyLogDay={studyLogDay} />;
};

export default Todo;
