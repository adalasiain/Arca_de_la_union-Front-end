import React, { createContext, useState, useEffect } from 'react';
import AuthService from './../services/AuthService'; // Asegúrate de tener la clase de servicio


export const AuthContext = createContext();

// Crear el proveedor
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 

  const authService = new AuthService()

 
  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error("No se pudo obtener el usuario", error);
      } finally {
        setLoading(false);
      }
    };

    checkUserStatus();
  }, []);

  // Función de inicio de sesión
  const login = async (username, password) => {
    try {
      const loggedInUser = await authService.login(username, password);
      setUser(loggedInUser);
    } catch (error) {
      console.error("Error en el login", error);
      throw new Error('Credenciales inválidas');
    }
  };

  // Función de cierre de sesión
//   const logout = () => {
//     AuthService.logout();
//     setUser(null);
//   };

  return (
    <AuthContext.Provider value={{ user, loading, login, }}>
      {children}
    </AuthContext.Provider>
  );
};
