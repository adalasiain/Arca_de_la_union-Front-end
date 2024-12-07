import React, { useState, useEffect } from "react";
import '../styles.css';
import img1 from '../assets/image.png';
import { FaHome, FaBoxes, FaDollarSign } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineProduct } from "react-icons/ai";
import { GrStakeholder } from "react-icons/gr";
import { IoPricetagsOutline } from "react-icons/io5";
import { Home } from 'lucide-react';
import { Link } from "react-router-dom";

const Dashboard = () => {

    const [productsCount, setProductsCount] = useState(0);
    const [ordersCount, setOrdersCount] = useState(0);
    const [totalEarnings, setTotalEarnings] = useState(0);
    const [discountedProductsCount, setDiscountedProductsCount] = useState(0);

    // Simulación de consulta a la base de datos
    useEffect(() => {
        const fetchData = async () => {
            // Simula una llamada a la base de datos con un retraso
            const simulatedData = {
                products: 230,
                orders: 5,
                earnings: 1000000,
                discountedProducts: 15,
            };

            setTimeout(() => {
                setProductsCount(simulatedData.products);
                setOrdersCount(simulatedData.orders);
                setTotalEarnings(simulatedData.earnings);
                setDiscountedProductsCount(simulatedData.discountedProducts);
            }, 1000); // Simula un retraso de 1 segundo
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col items-center bg-gray-50 min-h-screen">
  {/* Menú Superior */}
  <header className="bg-base text-white relative h-16 w-full">
    <nav className="container mx-auto flex items-center justify-between px-32 py-2">
      <Link to="/dashboard">
        <button className="bg-letras p-3 rounded-full">
          <Home className="h-6 w-6 text-base" />
        </button>
      </Link>
      <Link to="/productosCampanas">
        <button className="text-2xl font-serif w-40 flex justify-center hover:text-letras">
          <FaBoxes className="mr-2 mt-1" />
          Productos
        </button>
      </Link>
      <Link to="/ventas">
        <button className="text-2xl font-serif w-40 flex justify-center hover:text-letras">
          <GiMoneyStack className="mr-2 mt-1" />
          Ventas
        </button>
      </Link>
      <Link to="/">
        <button className="text-2xl font-serif w-40 flex justify-center hover:text-letras">
          <BiLogOut className="mr-2 mt-1" />
          Salir
        </button>
      </Link>
    </nav>
  </header>

  {/* Contenedor Principal */}
  <div className="flex flex-col items-center max-w-6xl mx-auto p-4 relative w-screen">
    {/* Ilustración Central */}
    <div className="flex justify-center my-8 z-10">
      <img src={img1} alt="Arca de la Alianza" className="logo mb-4" />
    </div>

    {/* Tarjetas */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 absolute top-20 left-0 right-0">
      {/* Productos */}
      <div className="flex flex-col items-center bg-orange-100 py-11 pb-11 px-6 rounded-md text-center shadow">
        <AiOutlineProduct className="h-10 w-10 text-orange-500 mb-4" />
        <h3 className="text-xl font-semibold">Productos</h3>
        <p className="text-2xl font-bold">{productsCount}</p>
      </div>

      {/* Pedidos */}
      <div className="flex flex-col items-center bg-orange-100 py-11 pb-11 px-6 rounded-md text-center shadow">
        <GrStakeholder className="h-10 w-10 text-orange-500 mb-4" />
        <h3 className="text-xl font-semibold">Pedidos</h3>
        <p className="text-2xl font-bold">{ordersCount}</p>
      </div>

      {/* Ganancias Totales */}
      <div className="flex flex-col items-center bg-orange-100 py-11 pb-11 rounded-md text-center shadow">
        <FaDollarSign className="h-10 w-10 text-orange-500 mb-4" />
        <h3 className="text-xl font-semibold">Ganancias Totales</h3>
        <p className="text-2xl font-bold">${totalEarnings.toLocaleString()}</p>
      </div>

      {/* Productos en Descuento */}
      <div className="flex flex-col items-center bg-orange-100 py-11 pb-11 rounded-md text-center shadow">
        <IoPricetagsOutline className="h-10 w-10 text-orange-500 mb-4" />
        <h3 className="text-xl font-semibold">Productos en Descuento</h3>
        <p className="text-2xl font-bold">{discountedProductsCount}</p>
      </div>
    </div>
  </div>
</div>


    );
};

export default Dashboard;
