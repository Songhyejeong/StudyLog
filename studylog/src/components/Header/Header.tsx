import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLoginButton from '../Button/GoogleLoginButton';
import { useAuth } from '../../hooks/useAuth';
import StudyLogButton from '../Button/StudyLogButton';
import { useLogout } from '../../hooks/useLogout';
import { ToastContainer, toast } from 'react-toastify';
import { useLogin } from '../../hooks/useLogin';

const Header: React.FC = () => {
  const { googleLogin, loginError } = useAuth();
  const { googleLogout, logoutError } = useLogout();
  const { isLoggedIn } = useLogin();

  const handleGoogleLogin = () => {
    googleLogin();

    if (loginError) {
      toast('Login Error', {
        position: 'top-right',
        autoClose: 5000,
        closeOnClick: true,
        theme: 'light',
      });
    }

    if (!loginError) {
      toast('Success Login', {
        position: 'top-right',
        autoClose: 5000,
        closeOnClick: true,
        theme: 'light',
      });
    }
  };

  const handleLogout = () => {
    googleLogout();

    if (logoutError) {
      toast(' Logout Error', {
        position: 'top-right',
        autoClose: 5000,
        closeOnClick: true,
        theme: 'light',
      });
    }

    if (!logoutError) {
      toast('Success Logout', {
        position: 'top-right',
        autoClose: 5000,
        closeOnClick: true,
        theme: 'light',
      });
    }
  };

  return (
    <header className="bg-white">
      <div className="container w-[780px] h-15 flex items-center justify-between py-4 px-6">
        <Link to="/" className="text-2xl  text-gray-800 ">
          StudyLog
        </Link>
        {!isLoggedIn && <GoogleLoginButton onClick={handleGoogleLogin} />}
        {isLoggedIn && (
          <StudyLogButton
            text="Logout"
            color="primary"
            size="medium"
            onClick={handleLogout}
          />
        )}
      </div>
      <ToastContainer />
    </header>
  );
};

export default Header;
