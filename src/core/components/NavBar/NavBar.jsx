import React from 'react';
import './NavBar.css';
import logo from '../../../assets/img/logo.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      {/* Elemento NavBar */}
      <div className="bg-[#b87333] w-full z-40 top-0 start-0 px-[1%] md:px-[2%] 2xl:px-[8%]">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-2 md:p-4">
          {/* Botón Logo */}
          <button href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-11 md:h-11 px-2 md:px-0" alt="Logo" />
            <span className="poppins font-semibold text-white self-center text-lg md:text-xl xl:text-2xl whitespace-nowrap hidden md:block">Arca de la Alianza</span>
          </button>
          {/* Botón Carrito */}
          <div className="flex order-2 space-x-0 rtl:space-x-reverse">
            <button type="button" className="poppins md:text-base xl:text-lg font-bold flex text-white bg-transparent hover:bg-[#ee9f05] focus:ring focus:outline-none focus:ring-[#ffbb05] rounded-full px-2 py-0 md:px-3.5 md:py-1.5 lg:px-4 lg:py-2 text-center"><svg className="w-6 h-6 my-2 md:w-7 md:h-7 md:my-2 lg:w-6 lg:h-6 lg:my-0 lg:mr-2 xl:w-7 xl:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="white" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24m128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0m336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96"/></svg><p className="hidden lg:block">Carrito de Compras</p></button>
          </div>
          {/* Redirecciones Páginas */}
          <div className="flex items-center justify-between w-auto order-1 py-2">
            <ul className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-0 flex rounded-lg bg-transparent">
              <li className="xl:col-span-1 2xl:col-span-1 flex justify-center items-center py-1 px-5 md:py-2 md:px-10 lg:py-0 lg:px-8 xl:px-10 2xl:px-12">
                <button className="poppins font-bold text-xs md:text-base lg:text-base xl:text-lg block text-[#ee9f05] rounded">
                  <Link to="/">Inicio</Link>
                </button>
              </li>
              <li className="xl:col-span-1 2xl:col-span-1 flex justify-center items-center">
                <button href="#" className="poppins font-bold text-xs md:text-base lg:text-base xl:text-lg block text-white rounded hover:text-[#ee9f05]">
                  <Link to="/products">Productos </Link>
                </button>
              </li>
              <li className="xl:col-span-1 2xl:col-span-1 flex justify-center items-center">
                <button href="#" className="poppins font-bold text-xs md:text-base lg:text-base xl:text-lg block text-white rounded hover:text-[#ee9f05]">Galería</button>
              </li>
              <li className="xl:col-span-1 2xl:col-span-1 flex justify-center items-center py-1 md:py-2 lg:py-0">
                <button href="#" className="poppins font-bold text-xs md:text-base lg:text-base xl:text-lg block text-white rounded hover:text-[#ee9f05]">Conócenos</button>
              </li>
              <li className="xl:col-span-1 2xl:col-span-1 flex justify-center items-center">
                <button href="#" className="poppins font-bold text-xs md:text-base lg:text-base xl:text-lg block text-white rounded hover:text-[#ee9f05]">Contacto</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;