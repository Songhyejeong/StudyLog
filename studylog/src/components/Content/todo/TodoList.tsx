import React, { useState } from 'react';
import { TodoContentType } from '../../../types';
import TodoContent from './TodoContent';

interface TodoListProps {
  todoList: TodoContentType[];
  removeTodoContent: (id: string) => void;
  updateTodoContent: (id: string, isChecked: boolean) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todoList,
  removeTodoContent,
  updateTodoContent,
}: TodoListProps) => {
  const [isCompleted, setIsCompleted] = useState(false);

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
          updateTodoContent={updateTodoContent}
        />
      ))}
    </div>
  );
};

export default TodoList;
