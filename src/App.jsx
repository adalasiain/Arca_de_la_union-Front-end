import React from 'react';
import { Link } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componentes/login';
import Dashboard from './componentes/dashboard';
import Productos_img from './componentes/productos_img';
import Productos_olf from './componentes/productos_olf';
import ErrorPage from './componentes/error';

import './styles.css';
import Ventas from './componentes/ventas';
import ProductInterface from './componentes/productos_campanas';
import CampanasAdmin from './componentes/AdminCampanas';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ventas" element={<Ventas/>} />
        <Route path="/campanas" element={<CampanasAdmin/>} />
        <Route path="/productosImagenes" element={<Productos_img />} />
        <Route path="/productosOlfebreria" element={<Productos_olf />} />
        <Route path="/productosCampanas" element={<ProductInterface/>} />
        
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
