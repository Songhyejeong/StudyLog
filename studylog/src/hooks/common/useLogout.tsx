import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuth from './useAuth';

export const useLogout = () => {
  const auth = getAuth();
  const [logoutError, setLogoutError] = useState<unknown>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const googleLogout = () => {
    signOut(auth)
      .then(() => {
        login(null);
        navigate('/');
      })
      .catch((error) => {
        setLogoutError(error);
      });
  };

  return { googleLogout, logoutError };
};
