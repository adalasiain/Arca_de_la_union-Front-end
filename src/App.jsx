import React from 'react';
import { Link, Navigate } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componentes/login';
import Dashboard from './componentes/dashboard';

import Productos_olf from './componentes/productos_olf';
import ErrorPage from './componentes/error';

import './styles.css';
import Ventas from './componentes/ventas';
import ProductInterface from './componentes/productos_campanas';
import { useAuth } from './context/AuthContext';
import AdminCampanas from './componentes/AdminCampanas';
import Productos from './componentes/productos_img';

const App = () => {
  const {  isLoggedIn } = useAuth();
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/campanas" element={<AdminCampanas />} />
        <Route path="/productos" element={<Productos/>} />
        <Route path="/productosOlfebreria" element={<Productos_olf />} />
        <Route path="/productosCampanas" element={<ProductInterface />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
