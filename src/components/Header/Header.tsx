import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLoginButton from '../Button/GoogleLoginButton';
import StudyLogButton from '../Button/StudyLogButton';
import { useLogout } from '../../hooks/common/useLogout';
import { useLogin } from '../../hooks/common/useLogin';
import useAuth from '../../hooks/common/useAuth';

const Header: React.FC = () => {
  const { googleLogin } = useLogin();
  const { googleLogout } = useLogout();
  const { user } = useAuth();

  const handleGoogleLogin = async () => {
    googleLogin();
  };

  const handleLogout = async () => {
    googleLogout();
  };

  return (
    <header className="bg-white">
      <div className="container w-[780px] h-15 flex items-center justify-between py-4 px-6">
        <Link to="/" className="text-2xl  text-gray-800 ">
          StudyLog
        </Link>
        {!user && <GoogleLoginButton onClick={handleGoogleLogin} />}
        {user && (
          <StudyLogButton
            text="Logout"
            color="primary"
            size="medium"
            onClick={handleLogout}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
