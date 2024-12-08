import React from "react";

const Card = ({ peso, material, tamaño, acabado, precio }) => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50 rounded-lg p-4 w-64 shadow-lg">
      {/* Imagen del producto */}
      <div>
        <img
          src="/img/img.jpeg"
          alt="Campana"
          className="rounded-lg object-cover w-32 h-32"
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
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          <svg
            className="w-4 h-4 text-gray-200"
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
      <div className="flex items-center justify-between w-full mt-4">
        <span className="text-xl font-bold text-gray-900">
          ${precio}
        </span>
        <button
          className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-1 text-center"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

const CardList = () => {
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

  return (
    <div className="bg-orange-50 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
