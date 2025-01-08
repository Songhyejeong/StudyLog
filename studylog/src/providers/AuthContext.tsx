'use client';
import { createContext, ReactNode, useState } from 'react';
import { UserType } from '../types';

interface AuthContextType {
  user: UserType;
  login: (data: UserType) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType>(null);

  const login = (data: UserType) => {
    setUser(data);
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
