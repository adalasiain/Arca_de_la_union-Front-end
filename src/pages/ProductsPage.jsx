import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../core/components/NavBar/NavBar';
import Footer from '../core/components/Footer/Footer';
import Card from '../core/components/Card/Card';
import FilterButtons from '../core/components/Card/FilterButtons';

const CustomProductPage = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <>
      <div className='flex flex-col h-screen'>
        <NavBar />
        <main className='flex-grow text-center bg-[url("/img/backgroundProducts.jpg")] bg-cover sm:bg-center sm:bg-no-repeat'>
          <FilterButtons 
            onFilterChange={handleFilterChange}
            onSearchChange={handleSearchChange}
            placeholder="Buscar productos..."
          />
          <Card filter={filter} searchTerm={searchTerm}/>
          <Link to="/customize-product" className='bg-orange-300'>Personaliza tu Producto</Link>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default CustomProductPage;
