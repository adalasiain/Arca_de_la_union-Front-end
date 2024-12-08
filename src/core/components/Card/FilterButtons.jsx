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
    <div className="flex flex-wrap items-center justify-between gap-4 p-8">
      {/* Botones de Filtro */}
      <div className="flex flex-wrap gap-4">
        <button
          className={`px-4 py-2 rounded-full font-bold ${
            activeFilter === "all"
              ? "bg-[#ee9f05] text-white"
              : "bg-white text-[#ee9f05] hover:bg-[#ffb300] hover:text-white"
          }`}
          onClick={() => handleFilter("all")}
        >
          Todo
        </button>
        <button
          className={`px-4 py-2 rounded-full font-bold ${
            activeFilter === "mate"
              ? "bg-[#ee9f05] text-white"
              : "bg-white text-[#ee9f05] hover:bg-[#ffb300] hover:text-white"
          }`}
          onClick={() => handleFilter("mate")}
        >
          Mate
        </button>
        <button
          className={`px-4 py-2 rounded-full font-bold ${
            activeFilter === "pulido"
              ? "bg-[#ee9f05] text-white"
              : "bg-white text-[#ee9f05] hover:bg-[#ffb300] hover:text-white"
          }`}
          onClick={() => handleFilter("pulido")}
        >
          Pulido
        </button>
        <button
          className={`px-4 py-2 rounded-full font-bold ${
            activeFilter === "esmalte"
              ? "bg-[#ee9f05] text-white"
              : "bg-white text-[#ee9f05] hover:bg-[#ffb300] hover:text-white"
          }`}
          onClick={() => handleFilter("esmalte")}
        >
          Esmalte
        </button>
        <button
          className={`px-4 py-2 rounded-full font-bold ${
            activeFilter === "patina"
              ? "bg-[#ee9f05] text-white"
              : "bg-white text-[#ee9f05] hover:bg-[#ffb300] hover:text-white"
          }`}
          onClick={() => handleFilter("patina")}
        >
          Patina
        </button>
      </div>

      {/* Campo de Búsqueda */}
      <div className="flex items-center justify-between relative w-full md:w-auto bg-white rounded-full">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full px-5 py-3 pr-12 rounded-full font-bold focus:outline-none focus:ring-2 focus:ring-[#ee9f05] focus:border-transparent"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="absolute right-[-0.3em] rounded-full bg-[#ee9f05] w-12 h-12 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-white w-6 h-6" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/></svg>
        </div>
      </div>
    </div>
  );
};

export default FilterButtons;
