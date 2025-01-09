import React, { useEffect, useState } from 'react';
import { StudyLogDayType } from '../../../types';
import TodoList from './TodoList';
import Stopwatch from '../../Stopwatch/Stopwatch';
import useTodo from '../../../hooks/todo/useTodo';
import { v4 as uuidv4 } from 'uuid';
import useGetTodoList from '../../../hooks/todo/useGetTodo';
import useSaveCatSticker from '../../../hooks/todo/useSaveCatSticker';
import useGetStudyLogWeeks from '../../../hooks/studyLog/useGetStudyLogWeeks';

interface SelectedDayProps {
  studyLogDay: StudyLogDayType;
  weekId: string;
}

const SelectedDay: React.FC<SelectedDayProps> = ({
  studyLogDay,
  weekId,
}: SelectedDayProps) => {
  const [todoName, setTodoName] = useState<string>('');
  const { addTodo, removeTodo, saveIsCheckedTodo } = useTodo(studyLogDay.day);

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

  const newTodoContent = {
    id: uuidv4(),
    isChecked: false,
    todoName,
  };

  const addTodoContent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addTodo(weekId, newTodoContent);
    if (getTodoList) {
      getTodoList();
    }
  };

  const removeTodoContent = async (todoId: string) => {
    await removeTodo(todoId, weekId);
    if (getTodoList) {
      getTodoList();
    }
  };

  const updateTodoContent = async (todoId: string, isChecked: boolean) => {
    await saveIsCheckedTodo(todoId, weekId, isChecked);
    if (getTodoList) {
      getTodoList();
    }
  };

  return (
    <main className="w-[780px] flex flex-col  items-center gap-10  h-screen bg-background px-10 py-10">
      <p className="text-2xl">{studyLogDay.day}</p>
      <form onSubmit={(e) => addTodoContent(e)}>
        <label className="flex flex-row w-[600px] items-center">
          <p className=" w-[100px]">할 일 추가:</p>
          <input
            onChange={(e) => setTodoName(e.target.value)}
            name="todo"
            value={todoName}
            placeholder="Enter your todo List"
            className="w-full h-10 rounded-md px-6"
          />
        </label>
      </form>

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
