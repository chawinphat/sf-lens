import React, { createContext, useState, useEffect, useContext } from 'react';
import { Alert } from 'react-native';
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
  const [error, setError] = useState(null);

  const clearError = () => setError(null);

  useEffect(() => {
    if (error) {
      Alert.alert(
        "Please try again...",
        error,
        [
          { text: "OK" }
        ],
        { cancelable: false }
      );
    }
  }, [error]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  const register = async (email, password, username) => {
    try {
      const userCredential = await _register(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: username });
      const avatarUrl = `https://avatar.iran.liara.run/public/${auth.currentUser.uid}`;
      await updateProfile(auth.currentUser, { photoURL: avatarUrl });
      setUser(auth.currentUser);
      return userCredential;
    } catch (error) {
      console.error("Registration or profile update failed:", error);
      throw error;
    }
  };
  
  const login = async (email, password) => {
    try {
      return await _login(auth, email, password);
    } catch (error) {
      let friendlyMessage;
      switch (error.code) {
        case 'auth/invalid-credential':
        case 'auth/wrong-password':
        case 'auth/user-not-found':
          friendlyMessage = 'The email and password you entered is incorrect. Please double-check and try again.';
          break;
        case 'auth/invalid-email':
          friendlyMessage = 'Please enter a valid email address.';
          break;
        case 'auth/user-disabled':
          friendlyMessage = 'This account has been disabled. Please contact support.';
          break;
        default:
          friendlyMessage = 'An unexpected error occurred. Please try again later.';
      }
      setError(friendlyMessage);
      throw error;
    }
  };

  const logout = () => _logout(auth);

  const continueAsGuest = async () => {
    const userCredential = await _anon(auth);
    return userCredential;
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, error, clearError, logout, continueAsGuest }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
