import { useState } from 'react';
import { db } from '../../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import useAuth from '../common/useAuth';
import { WEEK_DAY } from '../../constants/STUDYLOGWEEK';
import { TodoContentType, StudyLogDayType } from '../../types';
import { toast } from 'react-toastify';

export type TodoServiceType = 'ADD' | 'REMOVE' | 'UPDATE';

interface TodoServieceProps {
  todoServiceType: TodoServiceType;
  newTodo?: TodoContentType;
  todoId?: string;
  isChecked?: boolean;
}

const useTodoService = (day: string, weekId: string) => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | ''>('null');

  const todoService = async ({
    todoServiceType,
    newTodo,
    todoId,
    isChecked,
  }: TodoServieceProps) => {
    setIsLoading(true);
    if (!user) {
      setErrorMessage('사용자를 찾지 못했습니다.');
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
        let updatedTodoList;

        if (todoServiceType === 'ADD') {
          updatedTodoList = [...(selectedDay?.todoList || []), newTodo];
        }

        if (todoServiceType === 'REMOVE') {
          updatedTodoList = selectedDay.todoList.filter(
            (todo: TodoContentType) => todo.id !== todoId
          );
        }

        if (todoServiceType === 'UPDATE') {
          const currentTodo = selectedDay.todoList.find(
            (todo: TodoContentType) => todo.id === todoId
          );
          const currentTodoIndex = selectedDay.todoList.findIndex(
            (todo: TodoContentType) => todo.id === todoId
          );
          const updatedTodo = {
            ...currentTodo,
            isChecked: isChecked,
          };

          updatedTodoList = [
            ...selectedDay.todoList.slice(0, currentTodoIndex),
            updatedTodo,
            ...selectedDay.todoList.slice(currentTodoIndex + 1),
          ];
        }

        const updatedStudyLogWeek = [
          ...studyLogWeeks.slice(0, dayIndex),
          {
            ...selectedDay,
            todoList: updatedTodoList,
          },
          ...studyLogWeeks.slice(dayIndex + 1),
        ];

        await updateDoc(docRef, {
          studyLogWeek: updatedStudyLogWeek,
        });
      }
    } catch (error) {
      setErrorMessage('할일 업데이트 중 오류 발생');

      toast.error(errorMessage, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: 'light',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { todoService, isLoading };
};

export default useTodoService;
