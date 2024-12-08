import React, { useState } from "react";

const FilterButtons = ({
  onFilterChange,
  onSearchChange,
  placeholder = "Buscar Producto...",
}) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-orange-100 rounded-lg">
      {/* Botones de Filtro */}
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-4 py-2 rounded-md ${
            activeFilter === "all"
              ? "bg-orange-500 text-white"
              : "bg-white text-orange-500 hover:bg-orange-500 hover:text-white"
          }`}
          onClick={() => handleFilter("all")}
        >
          Filtro 1
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeFilter === "mate"
              ? "bg-orange-500 text-white"
              : "bg-white text-orange-500 hover:bg-orange-500 hover:text-white"
          }`}
          onClick={() => handleFilter("mate")}
        >
          Filtro 1
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeFilter === "pulido"
              ? "bg-orange-500 text-white"
              : "bg-white text-orange-500 hover:bg-orange-500 hover:text-white"
          }`}
          onClick={() => handleFilter("pulido")}
        >
          Filtro 1
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeFilter === "esmaltè"
              ? "bg-orange-500 text-white"
              : "bg-white text-orange-500 hover:bg-orange-500 hover:text-white"
          }`}
          onClick={() => handleFilter("esmaltè")}
        >
          Filtro 1
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeFilter === "patina"
              ? "bg-orange-500 text-white"
              : "bg-white text-orange-500 hover:bg-orange-500 hover:text-white"
          }`}
          onClick={() => handleFilter("patina")}
        >
          Filtro 1
        </button>
      </div>

      {/* Campo de Búsqueda */}
      <div className="relative flex items-center w-full md:w-auto bg-white border border-gray-300 rounded-md">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full px-4 py-2 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="absolute right-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="text-orange-500" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/></svg>
        </div>
      </div>
    </div>
  );
};

export default FilterButtons;
