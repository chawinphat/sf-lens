import React, { createContext, useState, useEffect, useContext } from 'react';
import { Alert } from 'react-native';
import {
  auth,
  createUserWithEmailAndPassword as _register,
  signInWithEmailAndPassword as _login,
  signOut as _logout,
  signInAnonymously as _anon,
} from './firebase';

import { updateProfile, onAuthStateChanged, updatePassword as firebaseUpdatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';

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
    setLoading(true);
    try {
      const userCredential = await _register(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: username });
      const randomId = Math.floor(Math.random() * 99) + 1;
      const avatarUrl = `https://avatar.iran.liara.run/public/${randomId}`;
      await updateProfile(auth.currentUser, { photoURL: avatarUrl });
      setUser(auth.currentUser);
      setLoading(false);
      return userCredential;
    } catch (error) {
      console.error("Registration or profile update failed:", error);
      setLoading(false);
      throw error;
    }
  };
  
  const login = async (email, password) => {
    setLoading(true);
    try {
      const result = await _login(auth, email, password);
      setLoading(false);
      return result;
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
      setLoading(false);
      throw error;
    }
  };

  const logout = async () => {
    setLoading(true);
    await _logout(auth);
    setLoading(false);
  };

  const continueAsGuest = async () => {
    const userCredential = await _anon(auth); 
    return userCredential;
  };

  const updateUsername = async (newUsername) => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, { displayName: newUsername });
      setUser({ ...auth.currentUser });
      setLoading(false);
    } catch (error) {
      console.error("Username update failed:", error);
      setLoading(false);
      throw error;
    }
  };

  const reauthenticateUser = async (currentPassword) => {
    setLoading(true);
    try {
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        currentPassword
      );
      await reauthenticateWithCredential(auth.currentUser, credential);
      setLoading(false);
    } catch (error) {
      console.error("Reauthentication failed:", error);
      setLoading(false);
      throw error;
    }
  };

  const updatePassword = async (currentPassword, newPassword) => {
    setLoading(true);
    try {
      // Ensure user has recently signed in
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        currentPassword
      );
      await reauthenticateWithCredential(auth.currentUser, credential);
      await firebaseUpdatePassword(auth.currentUser, newPassword);
      setLoading(false);
    } catch (error) {
      console.error("Password update failed:", error);
      setLoading(false);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, updateUsername, reauthenticateUser, updatePassword, error, clearError, logout, continueAsGuest }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
