import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  serverTimestamp
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAzSyy27FcV9thpife8Px5BMIA_ZwdUmtw",
    authDomain: "sf-lens-1f4d9.firebaseapp.com",
    projectId: "sf-lens-1f4d9",
    storageBucket: "sf-lens-1f4d9.firebasestorage.app",
    messagingSenderId: "732596484412",
    appId: "1:732596484412:web:1a2eec132f4c2798ac8639",
    measurementId: "G-5PE3N2P2T8"
  };  

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Initialize Firestore
const db = getFirestore(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  db,
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  serverTimestamp
};
