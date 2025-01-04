import React from 'react';
import { TodoListType } from '../../types';
import TodoList from './TodoList';
import Stopwatch from '../Stopwatch/Stopwatch';

interface SelectedTodoProps {
  todo: TodoListType;
}

const SelectedTodo: React.FC<SelectedTodoProps> = ({
  todo,
}: SelectedTodoProps) => {
  return (
    <main className="w-[780px] flex flex-col gap-10  h-screen bg-background px-10 py-10">
      <p className="text-2xl">{todo.day}</p>
      <input
        placeholder="Enter your todo List"
        className="w-full h-10 rounded-md px-6"
      />
      <TodoList todoList={todo.todoList} />
      <div className="flex justify-center mt-20">
        <Stopwatch studyTime={todo.studyTime} />
      </div>
    </main>
  );
};

export default SelectedTodo;
