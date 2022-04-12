import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const useAuthService = () => {
  // Data
  const [loggedInUser, setLoggedInUser] = useState(null);
  // Operations
  const login = (username) => setLoggedInUser(username);
  const logout = () => setLoggedInUser(null);
  // Service
  const service = { loggedInUser, login, logout };

  return service;
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const service = useAuthService();
  return (
    <AuthContext.Provider value={service}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("No auth context");
  }
  return context;
};
