import React from 'react';
import { mockTodoList } from '../../mockData';
import SelectedTodo from '../../components/Content/SelectedTodo';

const Todo: React.FC = () => {
  return <SelectedTodo todo={mockTodoList[0]} />;
};

export default Todo;
