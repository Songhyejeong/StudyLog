import { Control, FieldValues, Path } from 'react-hook-form';

export type CheckboxProps<T extends FieldValues> = {
  type?: 'check';
  control: Control<T>;
  name: Path<T>;
  isDisabled?: boolean;
};

const Checkbox = <T extends FieldValues>({
  name,
  control,
  isDisabled = false,
  type = 'check',
}: CheckboxProps<T>) => {
  return (
    <div className="w-full h-full transition-all bg-indigo-700">
      <input
        className="opacity-0"
        type="checkbox"
        disabled={isDisabled}
        {...control.register(name)}
      />
    </div>
  );
};

export default Checkbox;
