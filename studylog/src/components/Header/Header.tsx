import React from 'react';
import { Link } from 'react-router-dom';
import StudyLogButton from '../Button/StudyLogButton';

const Header: React.FC = () => {
  return (
    <header className="bg-white">
      <div className="container w-[780px] h-15 flex items-center justify-between py-4 px-6">
        <Link to="/" className="text-2xl  text-gray-800 ">
          StudyLog
        </Link>
        <StudyLogButton text="Login" />
      </div>
    </header>
  );
};

export default Header;
