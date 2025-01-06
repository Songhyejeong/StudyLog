import { useState } from 'react';
import { db } from '../../firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';
import { useAuth } from '../common/useAuth';
import { TodoListType } from '../../types';

const useGetTodoList = (day: string) => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  const [todoList, setTodoList] = useState<TodoListType>([]);

  const getTodoList = async () => {
    setIsLoading(true);

    try {
      const docRef = doc(db, 'users', user.uid, 'studyLogWeek', day);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const todoData = docSnap.data()?.todoList;
        if (todoData) {
          setTodoList(todoData);
        }
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { getTodoList, todoList, isLoading, error };
};

export default useGetTodoList;
