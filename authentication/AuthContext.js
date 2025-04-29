import React, { createContext, useState, useEffect, useContext } from 'react';
import {
  auth,
  createUserWithEmailAndPassword as _register,
  signInWithEmailAndPassword as _login,
  signOut as _logout,
  signInAnonymously as _anon,
} from './firebase';

import { updateProfile, onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  const register = (email, password, username) => {
    return _register(auth, email, password)
      .then(userCredential => {
        return updateProfile(auth.currentUser, { displayName: username })
          .then(() => {
            setUser(auth.currentUser);
            return userCredential;
          });
      })
      .catch(error => {
        console.error("Registration or profile update failed:", error);
        throw error;
      });
  };
  
  const login    = (email, password) => _login(auth, email, password);
  const logout   = () => _logout(auth);
  const continueAsGuest = async () => {
  const userCredential = await _anon(auth);
    return userCredential;
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout, continueAsGuest }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
