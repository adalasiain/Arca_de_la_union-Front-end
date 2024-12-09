import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col flex-grow items-center justify-center bg-[url("/img/backgroundProducts.jpg")] bg-cover bg-center bg-no-repeat text-white text-center'>
            <img src='/img/bellTower.png' alt='Página no encontrada' className='w-60 h-64 my-10' />
            <h1 className='text-4xl font-bold mb-4'>404 - Página no encontrada</h1>
            <p className='text-lg mb-6'>
                Lo sentimos, la página que estás buscando <b>no existe</b>. Por favor, verifica la URL o regresa al inicio.
            </p>
            <Link
                to='/'
                className='flex items-center text-white text-lg font-bold rounded-full bg-[#b87333] hover:bg-[#9c7653] focus:ring focus:outline-none focus:ring-[#6e3c0d] py-2 px-8 mb-10'
            >
                <p className='mr-3'>Ir al Inicio</p>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292"/></svg>
            </Link>
        </div>
    );
};

export default ErrorPage;