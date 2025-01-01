import { UseFormRegisterReturn } from 'react-hook-form';

interface TextFieldFromProps {
  label: string;
  id: string;
  error?: string;
  register: UseFormRegisterReturn;
  isRequired?: boolean;
  isDisabled: boolean;
  placeholder?: string;
}

const TextField = ({
  label,
  id,
  register,
  error,
  isRequired = false,
  isDisabled = false,
  placeholder,
}: TextFieldFromProps) => {
  return (
    <label htmlFor={id} className="flex flex-col">
      <span className="mb-1 text-sm">
        {label}
        <span className="font-semibold ml-0.5  text-red-500">
          {isRequired ? '*' : ''}
        </span>
      </span>
      <input
        {...register}
        placeholder={placeholder}
        autoComplete="off"
        disabled={isDisabled}
        id={id}
        type="text"
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
      ></input>
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </label>
  );
};

export default TextField;
