import React from 'react';

interface StudyLogButton {
  text: string;
  type?: 'submit' | 'button';
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'white' | 'delete';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const sizeGroup = {
  small: 'py-1 px-2 text-sm',
  medium: 'py-2 px-4 text-base',
  large: 'py-3 px-6 text-lg',
};

const colorGroup = {
  primary: 'bg-primary hover:bg-blue-600 text-white',
  white: 'bg-white-500 hover:bg-white-600 text-black',
  delete: 'bg-red-500 hover:bg-red-600 text-white',
};

const StudyLogButton: React.FC<StudyLogButton> = ({
  text,
  type,
  disabled = false,
  size = 'medium',
  color = 'primary',
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`rounded-lg font-semibold transition-all ${sizeGroup[size]} ${
        disabled
          ? 'text-white bg-gray-300 cursor-not-allowed'
          : colorGroup[color]
      }`}
    >
      {text}
    </button>
  );
};

export default StudyLogButton;
