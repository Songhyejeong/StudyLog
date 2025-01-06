import React, { useState } from 'react';
import { TodoContentType } from '../../types';
import { Checkbox } from '@mui/material';
import StudyLogButton from '../Button/StudyLogButton';

interface TodoContentProps {
  todo: TodoContentType;
}

const TodoContent: React.FC<TodoContentProps> = ({
  todo,
}: TodoContentProps) => {
  const [isCompleted, setIsCompleted] = useState(todo.isChecked);

  const handleCheckbox = () => {
    setIsCompleted(!isCompleted);
  };

  const deleteTodoService = () => {};

  return (
    <div className="flex flex-row items-center justify-between pr-4 border">
      <div className="flex flex-row items-center gap-5">
        <Checkbox checked={isCompleted} onChange={handleCheckbox} />
        <p>{todo.todoName}</p>
      </div>

      <div className="flex flex-row gap-5">
        <p>{todo.priority}</p>
        <StudyLogButton
          text="삭제"
          size="small"
          color="delete"
          onClick={deleteTodoService}
        />
      </div>
    </div>
  );
};

export default TodoContent;
