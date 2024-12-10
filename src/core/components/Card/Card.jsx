import React from "react";
import { Link } from 'react-router-dom';

const Card = ({ peso, material, tamaño, acabado, precio, imagen, isCustom }) => {
  return (
    <div className="flex flex-col items-center bg-[#eeeeee] rounded-3xl p-4 shadow-lg min-w-72 sm:min-w-60">
      {/* Imagen del producto */}
      <div className="flex justify-center w-full bg-[#d8d9de] rounded-3xl">
        <img
          src={imagen}
          alt="Campana"
          className="rounded-lg object-cover w-auto h-40"
        />
      </div>

      {/* Detalles del producto */}
      {isCustom ? (
      <div className="mt-4 text-center">
          <h2 className="font-bold text-gray-800">¡Personaliza tu producto!</h2>
          <p>Haz que sea único</p>
          <p>¡Elige todos los detalles!</p>
          <button className="mt-6 text-white text-center uppercase font-bold bg-[#ee9f05] hover:bg-[#be8d2e] focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full px-4 py-3">
            <div className="flex items-center justify-center">
              <p>Personalizar</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-2" viewBox="0 0 20 20">
                <path fill="currentColor" d="M18.33 3.57s.27-.8-.31-1.36c-.53-.52-1.22-.24-1.22-.24c-.61.3-5.76 3.47-7.67 5.57c-.86.96-2.06 3.79-1.09 4.82c.92.98 3.96-.17 4.79-1c2.06-2.06 5.21-7.17 5.5-7.79M1.4 17.65c2.37-1.56 1.46-3.41 3.23-4.64c.93-.65 2.22-.62 3.08.29c.63.67.8 2.57-.16 3.46c-1.57 1.45-4 1.55-6.15.89"/>
              </svg>
            </div>
          </button>
      </div>
      ) : (
        <div className="mt-4 text-center">
          <ul className="text-gray-800 text-sm font-medium">
            <li><strong>Peso:</strong> {peso}</li>
            <li><strong>Material:</strong> {material}</li>
            <li><strong>Tamaño:</strong> {tamaño}</li>
            <li><strong>Acabado:</strong> {acabado}</li>
          </ul>
        </div>
      )}

      {/* Precio y Botón */}
      {!isCustom && (
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
      )}
    </div>
  );
};

const CardList = ({ filter, searchTerm }) => {
  const cardsData = [
    { peso: "70 Kg", material: "Bronce", tamaño: "30 x 70 cm", acabado: "Pulido", precio: 599, imagen: 'https://cdn-icons-png.flaticon.com/512/1827/1827312.png' },
    { peso: "150 Kg", material: "Cobre", tamaño: "90 x 120 cm", acabado: "Esmalte", precio: 999, imagen: 'https://cdn-icons-png.flaticon.com/512/6650/6650802.png' },
    { peso: "30 Kg", material: "Acero", tamaño: "15 x 30 cm", acabado: "Patina", precio: 299, imagen: 'https://www.iconpacks.net/icons/2/free-bell-icon-2031-thumb.png' },
    { peso: "80 Kg", material: "Hierro", tamaño: "40 x 80 cm", acabado: "Mate", precio: 699, imagen: 'https://cdn-icons-png.flaticon.com/512/1827/1827312.png' },
    { peso: "60 Kg", material: "Bronce", tamaño: "35 x 75 cm", acabado: "Satinado", precio: 549, imagen: 'https://cdn-icons-png.flaticon.com/512/6650/6650802.png' },
    { peso: "45 Kg", material: "Acero Inoxidable", tamaño: "25 x 60 cm", acabado: "Pulido", precio: 499, imagen: 'https://cdn-icons-png.flaticon.com/512/1827/1827312.png' },
    { peso: "90 Kg", material: "Latón", tamaño: "50 x 90 cm", acabado: "Antiguo", precio: 799, imagen: 'https://www.iconpacks.net/icons/2/free-bell-icon-2031-thumb.png' },
    { peso: "110 Kg", material: "Aluminio", tamaño: "55 x 95 cm", acabado: "Brillante", precio: 849, imagen: 'https://cdn.icon-icons.com/icons2/1520/PNG/512/bellflat_106006.png' },
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
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 px-2 py-8">
        <Link to="/customize-product">
          <Card
            imagen="https://cdn-icons-png.flaticon.com/512/4226/4226577.png"
            isCustom={true}
          />
        </Link>
        {filteredCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
