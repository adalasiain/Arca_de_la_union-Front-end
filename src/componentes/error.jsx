import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/image.png'; 
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-colorCafe2 text-white">
      <img src={img1} alt="Página no encontrada" className="w-60 h-64 mb-10" />
      <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
      <p className="text-lg mb-6 text-center">
        Lo sentimos, la página que estás buscando no existe. Por favor, verifica la URL o regresa al inicio.
      </p>
      <Link
        to="/"
        className="bg-colorCafe1 hover:bg-[#6e3c0d] text-white font-bold py-2 px-8 rounded-lg"
      >
        Ir al Inicio
      </Link>
    </div>
  );
};

export default ErrorPage;
