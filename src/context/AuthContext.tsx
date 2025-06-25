import { createContext, useEffect, useState, type ReactNode } from "react";
import { onAuthStateChanged } from "../services/authService";
import type { User } from "firebase/auth";

type AuthContextType = {
  user: User | null;
};

export const AuthContext = createContext<AuthContextType>({ user: null });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
