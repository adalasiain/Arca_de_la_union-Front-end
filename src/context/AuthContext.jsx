
import React, { createContext, useState, useEffect } from 'react';
import AuthService from '../services/AuthService';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const auth = new AuthService()
  const [isLoggedIn, setIsLoggedIn] = useState(auth.isAuthenticated());

  useEffect(() => {
    const token = auth.getAuthToken();
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginUser = () => setIsLoggedIn(true);
  const logoutUser = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
