import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLogin } from './useLogin';

export const useLogout = () => {
  const auth = getAuth();
  const [logoutError, setLogoutError] = useState<unknown>(null);
  const navigate = useNavigate();

  const { setIsLoggedIn } = useLogin();

  const googleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        navigate('/');
      })
      .catch((error) => {
        setLogoutError(error);
      });
  };

  return { googleLogout, logoutError };
};
