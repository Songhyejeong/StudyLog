import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuth from './useAuth';
import { toast } from 'react-toastify';

export const useLogout = () => {
  const auth = getAuth();
  const [logoutError, setLogoutError] = useState<unknown>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const googleLogout = () => {
    signOut(auth)
      .then(() => {
        login(null);
      })
      .catch((error) => {
        setLogoutError(error);
      })
      .finally(() => {
        toast.success('로그아웃 성공', {
          position: 'top-right',
          autoClose: 2000,
          closeOnClick: true,
          theme: 'light',
          hideProgressBar: true,
        });
        navigate('/');
      });
  };

  return { googleLogout, logoutError };
};
