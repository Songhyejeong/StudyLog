import React from 'react';
import { TodoContentType } from '../../../types';
import TodoContent from './TodoContent';

interface TodoListProps {
  todoList: TodoContentType[];

  removeTodoContent: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todoList,
  removeTodoContent,
}: TodoListProps) => {
  if (todoList.length === 0) {
    return <p>todoList를 추가해주세요</p>;
  }

  return (
    <div className="w-full bg-white flex flex-col gap-5 px-5 py-5 rounded-md ">
      {todoList.map((todo) => (
        <TodoContent
          key={todo.id}
          todo={todo}
          removeTodoContent={removeTodoContent}
        />
      ))}
    </div>
  );
};

export default TodoList;
