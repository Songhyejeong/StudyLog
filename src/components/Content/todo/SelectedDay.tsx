import React, { useEffect, useState } from 'react';
import { StudyLogDayType, TodoContentType } from '../../../types';
import TodoList from './TodoList';
import Stopwatch from '../../Stopwatch/Stopwatch';
import { v4 as uuidv4 } from 'uuid';
import useGetTodoList from '../../../hooks/todo/useGetTodo';
import useSaveCatSticker from '../../../hooks/todo/useSaveCatSticker';
import useGetStudyLogWeeks from '../../../hooks/studyLog/useGetStudyLogWeeks';
import TodoInputField from './TodoInputField';
import useTodoService from '../../../hooks/todo/useTodo';
import { toast } from 'react-toastify';

interface SelectedDayProps {
  studyLogDay: StudyLogDayType;
  weekId: string;
}

const SelectedDay: React.FC<SelectedDayProps> = ({
  studyLogDay,
  weekId,
}: SelectedDayProps) => {
  const [todoName, setTodoName] = useState<string>('');
  const { todoService } = useTodoService(studyLogDay.day, weekId);

  const todoListData = useGetTodoList(weekId, studyLogDay.day);
  const getTodoList = todoListData?.getTodoList;
  const todoList = todoListData?.todoList;

  const { saveStickerStatus } = useSaveCatSticker(studyLogDay.day);
  const { refetch } = useGetStudyLogWeeks();

  if (todoList) {
    studyLogDay.todoList = todoList;
  }

  useEffect(() => {
    let count = 0;
    studyLogDay.todoList.forEach((todo) => {
      if (todo.isChecked) {
        count++;
      }
    });

    if (todoList?.length !== 0 && count === todoList?.length) {
      saveStickerStatus(weekId, true);
    } else {
      saveStickerStatus(weekId, false);
    }

    refetch();
  }, [todoList]);

  const newTodo: TodoContentType = {
    id: uuidv4(),
    isChecked: false,
    todoName,
  };

  const addTodoContent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await todoService({ todoServiceType: 'ADD', newTodo: newTodo });

    toast.success('할일 추가 완료 ', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      theme: 'light',
    });

    setTodoName('');
    if (getTodoList) {
      getTodoList();
    }
  };

  const removeTodoContent = async (todoId: string) => {
    await todoService({
      todoServiceType: 'REMOVE',
      todoId: todoId,
    });

    toast.success('할일 삭제 완료 ', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      theme: 'light',
    });

    if (getTodoList) {
      getTodoList();
    }
  };

  const updateTodoContent = async (todoId: string, isChecked: boolean) => {
    await todoService({
      todoServiceType: 'UPDATE',
      todoId: todoId,
      isChecked: isChecked,
    });
    if (getTodoList) {
      getTodoList();
    }
  };

  return (
    <main className="w-[780px] flex flex-col  items-center gap-10  h-screen bg-background px-10 py-10">
      <p className="text-2xl">{studyLogDay.day}</p>
      <TodoInputField
        addTodoContent={addTodoContent}
        setTodoName={setTodoName}
        todoName={todoName}
      />
      <TodoList
        todoList={studyLogDay.todoList}
        removeTodoContent={removeTodoContent}
        updateTodoContent={updateTodoContent}
      />
      <div className="flex justify-center mt-20 flex-col items-center w-[300px] gap-10">
        <Stopwatch
          weekId={weekId}
          day={studyLogDay.day}
          studyTime={studyLogDay.studyTime}
        />
      </div>
    </main>
  );
};

export default SelectedDay;
