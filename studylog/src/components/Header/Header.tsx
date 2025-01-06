import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLoginButton from '../Button/GoogleLoginButton';
import { useAuth } from '../../hooks/common/useAuth';
import StudyLogButton from '../Button/StudyLogButton';
import { useLogout } from '../../hooks/common/useLogout';
import { ToastContainer, toast } from 'react-toastify';
import { useLogin } from '../../hooks/common/useLogin';

const Header: React.FC = () => {
  const { googleLogin, loginError } = useAuth();
  const { googleLogout, logoutError } = useLogout();
  const { isLoggedIn } = useLogin();

  const handleGoogleLogin = () => {
    googleLogin();

    if (loginError) {
      toast('로그인 중 에러 발생', {
        position: 'top-right',
        autoClose: 5000,
        closeOnClick: true,
        theme: 'light',
      });
    }

    if (!loginError) {
      toast('로그인 시도 중', {
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
      toast(' 로그아웃 중 에러 발생 ', {
        position: 'top-right',
        autoClose: 5000,
        closeOnClick: true,
        theme: 'light',
      });
    }

    if (!logoutError) {
      toast('로그아웃 시도 중', {
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
