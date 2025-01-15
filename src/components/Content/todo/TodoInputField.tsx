import StudyLogButton from '../../Button/StudyLogButton';

interface TodoInputFieldProps {
  addTodoContent: (e: React.FormEvent<HTMLFormElement>) => void;
  setTodoName: (todoName: string) => void;
  todoName: string;
}

const TodoInputField: React.FC<TodoInputFieldProps> = ({
  addTodoContent,
  setTodoName,
  todoName,
}: TodoInputFieldProps) => {
  return (
    <form onSubmit={(e) => addTodoContent(e)}>
      <label className="flex flex-row w-[600px] items-center gap-5">
        <p className=" w-[100px]">할 일 추가</p>
        <input
          onChange={(e) => setTodoName(e.target.value)}
          name="todo"
          value={todoName}
          placeholder="Enter your todo List"
          className="w-full h-10 rounded-md px-6"
        />
        <StudyLogButton type="submit" text="+" size="medium" />
      </label>
    </form>
  );
};

export default TodoInputField;
