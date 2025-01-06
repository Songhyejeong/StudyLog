import React, { useState } from 'react';
import { TodoListType } from '../../types';
import TodoList from './TodoList';
import Stopwatch from '../Stopwatch/Stopwatch';
import StudyLogButton from '../Button/StudyLogButton';
import { useSelectedDay } from '../../hooks/common/useSelectedDay';

interface SelectedDayProps {
  todo: TodoListType;
}

const SelectedDay: React.FC<SelectedDayProps> = ({
  todo,
}: SelectedDayProps) => {
  const { day } = useSelectedDay();
  const [stopwatch, setStopwatch] = useState(0);

  const saveDayTodoContent = () => {
    /*TODO: isCompleted ? 
      currentDay 저장하기
    */
  };

  return (
    <main className="w-[780px] flex flex-col  items-center gap-10  h-screen bg-background px-10 py-10">
      <p className="text-2xl">{day}</p>
      <input
        name="todo"
        placeholder="Enter your todo List"
        className="w-full h-10 rounded-md px-6"
      />
      <TodoList todoList={todo.todoList} />
      <div className="flex justify-center mt-20 flex-col items-center w-[300px] gap-10">
        <Stopwatch studyTime={todo.studyTime} />
        <StudyLogButton
          text="저장하기"
          size="medium"
          onClick={saveDayTodoContent}
        />
      </div>
    </main>
  );
};

export default SelectedDay;
