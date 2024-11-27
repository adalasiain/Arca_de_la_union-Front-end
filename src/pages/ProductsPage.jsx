import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../core/components/NavBar/NavBar';
import Footer from '../core/components/Footer/Footer';

const CustomProductPage = () => {
  return (
    <>
      <div className='flex flex-col h-screen'>
        <NavBar />
        <main className='flex-grow'>
          <h1 className='text-xl font-bold mb-5'>Lista de Productos:</h1>
          <Link to="/customize-product" className='bg-orange-300 p-2 rounded'>Personaliza tu Producto</Link>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default CustomProductPage;
