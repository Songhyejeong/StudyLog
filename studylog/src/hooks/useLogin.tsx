import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useLogin = () => {
  const googleLoginContext = useContext(AuthContext);
  if (!googleLoginContext) {
    throw new Error('로그인 context 에러 발생');
  }
  return googleLoginContext;
};
