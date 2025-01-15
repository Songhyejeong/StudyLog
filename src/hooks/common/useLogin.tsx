import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../../firebaseConfig';
import useAuth from './useAuth';
import { toast } from 'react-toastify';

export const useLogin = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const { user, login } = useAuth();
  const [loginError, setError] = useState<unknown>();
  const [isInitialLogin, setIsInitialLogin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        login(currentUser);
      } else {
        login(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const googleLogin = () => {
    setIsInitialLogin(true);
    signInWithPopup(auth, provider)
      .then((data) => {
        const credential = GoogleAuthProvider.credentialFromResult(data);
        if (credential) {
          login(data.user);
        }
      })
      .catch((error) => {
        setError(error);
        toast.error('로그인 중 에러 발생', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          theme: 'light',
        });
      })
      .finally(() => {
        toast.success('로그인 성공', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          theme: 'light',
        });
        toast.clearWaitingQueue();
      });
  };

  return { googleLogin, user, loginError, isInitialLogin };
};
