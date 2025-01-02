import React from 'react';

interface StudyLogButton {
  text: string;
  disabled?: boolean;
}

const StudyLogButton: React.FC<StudyLogButton> = ({
  text,
  disabled,
}: StudyLogButton) => {
  return (
    <button
      disabled={disabled}
      className={`py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-primary ${
        disabled ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-accent'
      }`}
    >
      {text}
    </button>
  );
};

export default StudyLogButton;
