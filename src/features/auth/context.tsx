"use client"

import { createContext, useContext } from 'react';
import { useGetProfile, useLogout } from './hooks';
import { UserResponse } from './types';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserResponse | undefined;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading } = useGetProfile()

  const logout = useLogout();

  return (
    <AuthContext.Provider value={{ isAuthenticated: user?.user !== undefined, user, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 