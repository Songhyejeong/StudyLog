import { useState } from 'react';
import { db } from '../../firebaseConfig';
import { arrayUnion, setDoc, getDoc, doc, updateDoc } from 'firebase/firestore';
import { useAuth } from '../common/useAuth';

const useTodo = (day: string) => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const addTodo = async (newTodo: {
    content: string;
    isCompleted: boolean;
  }) => {
    setIsLoading(true);

    try {
      const docRef = doc(db, 'users', user.uid, 'studyLogWeek', day);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          todos: [newTodo],
        });
      } else {
        await updateDoc(docRef, {
          todos: arrayUnion(newTodo),
        });
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const removeTodo = async (todoId: string) => {
    setIsLoading(true);

    try {
      const docRef = doc(db, 'users', user.uid, 'studyLogWeek', day);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const todos = docSnap.data()?.todos;
        if (todos) {
          const updatedTodos = todos.filter((todo: any) => todo.id !== todoId);
          await updateDoc(docRef, { todos: updatedTodos });
        }
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
