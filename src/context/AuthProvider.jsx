/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

// Creating a context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  // User create
  let createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // User login
  let logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // User signUp
  let signOutUser = () => {
    return signOut(auth);
  };

  // Sign in with Google
  let signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  // Update user
  let updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  useEffect(() => {
    let unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    createUser,
    logIn,
    user,
    signOutUser,
    setUser,
    loading,
    updateUser,
    signInWithGoogle,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
