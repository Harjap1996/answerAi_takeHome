import { auth, googleProvider } from "./firebase";
import { signInWithPopup, signOut, type User } from "firebase/auth";

// Google sign-in
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

// Sign out
export const logout = () => signOut(auth);

// Observe user state
export const onAuthStateChanged = (callback: (user: User | null) => void) => {
  return auth.onAuthStateChanged(callback);
};
