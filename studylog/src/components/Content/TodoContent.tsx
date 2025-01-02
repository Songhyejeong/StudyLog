import React from 'react';
import { TodoContentType } from '../../types';
import { Checkbox } from '@mui/material';

interface TodoContentProps {
  todo: TodoContentType;
}

const TodoContent: React.FC<TodoContentProps> = ({
  todo,
}: TodoContentProps) => {
  return (
    <div className="flex flex-row items-center justify-between pr-4 border">
      <div className="flex flex-row items-center">
        <Checkbox />
        <p>{todo.todoName}</p>
      </div>
      <p>{todo.priority}</p>
      <div>trashcan</div>
    </div>
  );
};

export default TodoContent;
