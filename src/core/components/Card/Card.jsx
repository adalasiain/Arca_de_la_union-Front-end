import React from "react";

const Card = ({ peso, material, tamaño, acabado, precio }) => {
  return (
    <div className="flex flex-col items-center bg-[#eeeeee] rounded-3xl p-4 shadow-lg min-w-72 sm:min-w-60">
      {/* Imagen del producto */}
      <div className="flex justify-center w-full bg-[#d8d9de] rounded-3xl">
        <img
          src="/img/img.png"
          alt="Campana"
          className="rounded-lg object-cover w-32 h-40"
        />
      </div>

      {/* Detalles del producto */}
      <div className="mt-4 text-center">
        <ul className="text-gray-800 text-sm font-medium">
          <li><strong>Peso:</strong> {peso}</li>
          <li><strong>Material:</strong> {material}</li>
          <li><strong>Tamaño:</strong> {tamaño}</li>
          <li><strong>Acabado:</strong> {acabado}</li>
        </ul>
      </div>

      {/* Estrellas y Calificación */}
      <div className="flex items-center mt-4">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          <svg
            className="w-4 h-4 text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-3">
          5.0
        </span>
      </div>

      {/* Precio y Botón */}
      <div className="flex items-center justify-around w-full mt-4">
        <button
          className="text-white text-center uppercase font-bold bg-[#ee9f05] hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm px-4 py-2"
        >
          Comprar
        </button>
        <span className="text-xl font-bold text-gray-900">
          ${precio}
        </span>
      </div>
    </div>
  );
};

const CardList = ({ filter, searchTerm }) => {
  const cardsData = [
    { peso: "70 Kg", material: "Bronce", tamaño: "30 x 70 cm", acabado: "Pulido", precio: 599 },
    { peso: "150 Kg", material: "Cobre", tamaño: "90 x 120 cm", acabado: "Esmalte", precio: 999 },
    { peso: "30 Kg", material: "Acero", tamaño: "15 x 30 cm", acabado: "Patina", precio: 299 },
    { peso: "80 Kg", material: "Hierro", tamaño: "40 x 80 cm", acabado: "Mate", precio: 699 },
    { peso: "60 Kg", material: "Bronce", tamaño: "35 x 75 cm", acabado: "Satinado", precio: 549 },
    { peso: "45 Kg", material: "Acero Inoxidable", tamaño: "25 x 60 cm", acabado: "Pulido", precio: 499 },
    { peso: "90 Kg", material: "Latón", tamaño: "50 x 90 cm", acabado: "Antiguo", precio: 799 },
    { peso: "110 Kg", material: "Aluminio", tamaño: "55 x 95 cm", acabado: "Brillante", precio: 849 },
  ];

  const filteredCards = cardsData.filter((card) => {
    const matchesFilter = filter === "all" || card.acabado.toLowerCase() === filter.toLowerCase();
    const matchesSearch = 
      card.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.acabado.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.tamaño.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.peso.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.precio.toString().includes(searchTerm);
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 px-2 py-8">
        {filteredCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
