import { useState } from 'react';
import { db } from '../../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import useAuth from '../common/useAuth';
import { WEEK_DAY } from '../../constants/STUDYLOGWEEK';
import {
  TodoContentType,
  StudyLogDayType,
  StudyLogWeekType,
} from '../../types';

const useTodo = (day: string) => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const updateStudyLogWeek = (
    currentStudyLogWeek: StudyLogWeekType[],
    dayIndex: number,
    selectedDay: StudyLogDayType,
    updatedTodoList: TodoContentType[]
  ) => {
    return [
      ...currentStudyLogWeek.slice(0, dayIndex),
      {
        ...selectedDay,
        todoList: updatedTodoList,
      },
      ...currentStudyLogWeek.slice(dayIndex + 1),
    ];
  };

  const addTodo = async (weekId: string, newTodo: TodoContentType) => {
    setIsLoading(true);
    if (!user) {
      return;
    }

    try {
      const docRef = doc(db, 'users', user.uid, 'studyLogWeek', weekId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const studyLogWeeks = docSnap.data()?.studyLogWeek;
        const selectedDay = studyLogWeeks?.find(
          (week: StudyLogDayType) => week.day === day
        );
        const dayIndex = WEEK_DAY.findIndex((weekDay) => weekDay === day);

        const updatedTodoList = [...(selectedDay?.todoList || []), newTodo];
        const updatedStudyLogWeek = updateStudyLogWeek(
          studyLogWeeks,
          dayIndex,
          selectedDay,
          updatedTodoList
        );

        await updateDoc(docRef, {
          studyLogWeek: updatedStudyLogWeek,
        });
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const removeTodo = async (todoId: string, weekId: string) => {
    setIsLoading(true);

    if (!user) {
      return;
    }

    try {
      const docRef = doc(db, 'users', user.uid, 'studyLogWeek', weekId);
      const docSnap = await getDoc(docRef);

      if (docRef) {
        const studyLogWeeks = docSnap.data()?.studyLogWeek;
        const selectedDay = studyLogWeeks?.find(
          (week: StudyLogDayType) => week.day === day
        );
        const dayIndex = WEEK_DAY.findIndex((weekDay) => weekDay === day);

        const updatedTodoList = selectedDay.todoList.filter(
          (todo: TodoContentType) => todo.id !== todoId
        );
        const updatedStudyLogWeek = updateStudyLogWeek(
          studyLogWeeks,
          dayIndex,
          selectedDay,
          updatedTodoList
        );

        await updateDoc(docRef, {
          studyLogWeek: updatedStudyLogWeek,
        });
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { addTodo, removeTodo, isLoading, error };
};

export default useTodo;
