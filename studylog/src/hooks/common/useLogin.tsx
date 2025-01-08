import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../../firebaseConfig';
import useAuth from './useAuth';

export const useLogin = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const { user, login } = useAuth();
  const [loginError, setError] = useState<unknown>();

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
    signInWithPopup(auth, provider)
      .then((data) => {
        const credential = GoogleAuthProvider.credentialFromResult(data);
        if (credential) {
          login(data.user);
        }
      })
      .catch((error) => {
        setError(error);
      });
  };

  return { googleLogin, user, loginError };
};
