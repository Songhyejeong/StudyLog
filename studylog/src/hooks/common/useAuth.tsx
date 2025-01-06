import { useState, useEffect } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';
import { app } from '../../firebaseConfig';
import { useLogin } from '../common/useLogin';

export const useAuth = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [user, setUser] = useState<any>(null);
  const [loginError, setLoginError] = useState<unknown>(null);

  const { setIsLoggedIn } = useLogin();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, [auth, setIsLoggedIn]);

  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const credential = GoogleAuthProvider.credentialFromResult(data);
        if (credential) {
          const token: string = credential.accessToken || '';
          localStorage.setItem('accessToken', token);
        }
        setUser(data.user);
        console.log(data.user);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        setLoginError(error);
      });
  };

  return { googleLogin, user, loginError };
};
