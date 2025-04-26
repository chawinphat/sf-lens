import React, { createContext, useState, useEffect, useContext } from 'react';
import {
  auth,
  createUserWithEmailAndPassword as _register,
  signInWithEmailAndPassword as _login,
  signOut as _logout,
} from './firebase';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(u => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  const register = (email, password) => _register(auth, email, password);
  const login    = (email, password) => _login(auth, email, password);
  const logout   = () => _logout(auth);
  const continueAsGuest = () => setUser({ guest: true });

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout, continueAsGuest }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
