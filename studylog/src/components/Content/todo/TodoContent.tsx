import React, { useState } from 'react';
import { TodoContentType } from '../../../types';
import { Checkbox } from '@mui/material';
import StudyLogButton from '../../Button/StudyLogButton';

interface TodoContentProps {
  todo: TodoContentType;
  removeTodoContent: (id: string) => void;
}

const TodoContent: React.FC<TodoContentProps> = ({
  todo,
  removeTodoContent,
}: TodoContentProps) => {
  const [isChecked, setIsChecked] = useState(todo.isChecked);

  const handleCheckbox = (id: number) => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-row items-center justify-between pr-4 border">
      <div className="flex flex-row items-center gap-5">
        <Checkbox checked={isChecked} onChange={() => handleCheckbox(1)} />
        <p>{todo.todoName}</p>
      </div>

      <div className="flex flex-row gap-5">
        <StudyLogButton
          text="삭제"
          size="small"
          color="delete"
          onClick={() => removeTodoContent(todo.id)}
        />
      </div>
    </div>
  );
};

export default TodoContent;
