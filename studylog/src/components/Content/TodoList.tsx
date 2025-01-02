import React from 'react';
import { TodoContentType } from '../../types';
import TodoContent from './TodoContent';

interface TodoListProps {
  todoList: TodoContentType[];
}

const TodoList: React.FC<TodoListProps> = ({ todoList }: TodoListProps) => {
  return (
    <div className="w-full bg-white flex flex-col gap-5 px-5 py-5 rounded-md ">
      {todoList.map((todo) => (
        <TodoContent key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
