import React, { useEffect, useState } from 'react';
import { TodoContentType } from '../../../types';
import { Checkbox } from '@mui/material';
import StudyLogButton from '../../Button/StudyLogButton';

interface TodoContentProps {
  todo: TodoContentType;
  removeTodoContent: (id: string) => void;
  updateTodoContent: (id: string, isChecked: boolean) => void;
}

const TodoContent: React.FC<TodoContentProps> = ({
  todo,
  removeTodoContent,
  updateTodoContent,
}: TodoContentProps) => {
  const [isChecked, setIsChecked] = useState(todo.isChecked);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    updateTodoContent(todo.id, isChecked);
  }, [isChecked]);

  return (
    <div className="flex flex-row items-center justify-between pr-4 border">
      <div className="flex flex-row items-center gap-5">
        <Checkbox checked={isChecked} onChange={() => handleCheckbox()} />
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
