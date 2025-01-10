import { useEffect, useState } from 'react';
import useAuth from '../common/useAuth';
import { StudyLogDayType, TodoContentType } from '../../types';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const useGetTodoList = (weekId: string, day: string) => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown | null>(null);
  const [todoList, setTodoList] = useState<TodoContentType[]>();

  if (!user) {
    setError('사용자를 찾지 못했습니다.');
    return;
  }

  const getTodoList = async () => {
    setIsLoading(true);

    try {
      const docRef = doc(db, 'users', user.uid, 'studyLogWeek', weekId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const studyLogWeeks: StudyLogDayType[] = docSnap.data().studyLogWeek;
        const studyLogDay = studyLogWeeks?.find(
          (week: StudyLogDayType) => week.day === day
        );

        if (studyLogDay) {
          setTodoList(studyLogDay.todoList);
        } else {
          setTodoList([]);
        }
      }
    } catch {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTodoList();
  }, [user, weekId, day]);

  return { getTodoList, todoList, isLoading, error };
};

export default useGetTodoList;
