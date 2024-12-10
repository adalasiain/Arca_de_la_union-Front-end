import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[#b87333] flex items-center justify-center p-6">
      {/* Contenedor de 2 columnas en pantallas grandes, 1 columna en pantallas pequeñas */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-xl gap-6">
        
        {/* Sección de Imagen y Descripción */}
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://icon-library.com/images/google-maps-icon-transparent/google-maps-icon-transparent-0.jpg"
            alt="Mapa"
            className="w-full h-[60vh] md:h-[70vh] object-cover"
          />
          <p className="text-lg text-center text-white mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            eveniet quo.
          </p>
        </div>

        {/* Sección de Título y Formulario */}
        <div className="flex flex-col justify-center bg-[#b87333] p-6 w-full">
          <h1 className="text-4xl font-extrabold text-center text-white mb-6">
            Cotiza tu Proyecto
          </h1>

          {/* Formulario sin contenedor */}
          <form className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">Nombre:</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-orange-300 focus:outline-none bg-white"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Email:</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-orange-300 focus:outline-none bg-white"
                placeholder="Ingresa tu email"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Mensaje:</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-orange-300 focus:outline-none bg-white"
                rows="4"
                placeholder="Escribe tu mensaje"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition duration-300"
            >
              Enviar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10.5v3M3 12h15.75M16.5 6.75l5.25 5.25m-5.25 5.25l5.25-5.25"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
