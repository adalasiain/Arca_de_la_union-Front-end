import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      {/* Elemento Footer */}
      <div className="bg-[#b87333] w-full z-40 bottom-0 start-0 py-5 md:py-4 lg:py-5 xl:py-6 2xl:py-7 flex justify-center items-center">
        <div className="grid grid-rows-3 md:grid-rows-2 gap-0 w-11/12">
          <div className="row-span-1">
            {/* Botones Redes Sociales */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
              <div className="col-span-1 hidden md:flex md:gap-x-2 lg:gap-x-3 xl:gap-x-4 2xl:gap-x-5 justify-center items-center">
                <button
                  type="button"
                  className="poppins flex justify-center items-center bg-white hover:bg-[#4c4c4c] focus:ring focus:outline-none focus:ring-[#989898] rounded-full"
                  onClick={() => window.open("https://www.facebook.com/VentaCampanas", "_blank")}
                >
                  <svg
                    className="md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="2.05 2.1 19.9 19.9"
                  >
                    <path fill="black" d="M22 12.08a10 10 0 0 1-8.91 9.893V14.8h2.35a.423.423 0 0 0 .422-.37l.254-2.202a.402.402 0 0 0-.402-.465H13.09v-1.8c0-.836.233-1.407 1.428-1.407h1.112a.423.423 0 0 0 .412-.424V6.238a.423.423 0 0 0-.423-.413H13.82a3.482 3.482 0 0 0-3.714 3.81v2.116H8.339a.413.413 0 0 0-.413.424v2.2a.413.413 0 0 0 .413.413h1.767v7.037A10 10 0 0 1 2 12.08a10 10 0 1 1 20 0" />
                  </svg>
                </button>
                {/* <button type="button" className="poppins flex justify-center items-center bg-white hover:bg-[#4c4c4c] focus:ring focus:outline-none focus:ring-[#989898] rounded-full"><svg className="md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12" xmlns="http://www.w3.org/2000/svg" viewBox="2.05 2.1 19.9 19.9"><path fill="black" d="M13.61 12.243a1.6 1.6 0 1 1-1.56-1.63a1.62 1.62 0 0 1 1.56 1.63" /><path fill="black" d="M14.763 7.233H9.338a2.024 2.024 0 0 0-2.024 2.024v5.547a2.024 2.024 0 0 0 2.024 2.024h5.425a2.024 2.024 0 0 0 2.024-2.024V9.267a2.026 2.026 0 0 0-2.024-2.034m-2.713 7.723a2.703 2.703 0 1 1 2.642-2.703a2.67 2.67 0 0 1-2.642 2.703m2.936-5.405a.496.496 0 0 1-.496-.506a.506.506 0 1 1 1.012 0a.496.496 0 0 1-.557.506z" /><path fill="black" d="M12.05 2a10 10 0 1 0-.1 20a10 10 0 0 0 .1-20m6.073 12.702a3.39 3.39 0 0 1-3.41 3.411H9.389a3.39 3.39 0 0 1-3.411-3.41V9.378a3.39 3.39 0 0 1 3.41-3.411h5.325a3.39 3.39 0 0 1 3.41 3.41z" /></svg></button>
                <button type="button" className="poppins flex justify-center items-center bg-white hover:bg-[#4c4c4c] focus:ring focus:outline-none focus:ring-[#989898] rounded-full"><svg className="md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 30 450 450"><path fill="black" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z" /></svg></button>
                <button type="button" className="poppins flex justify-center items-center bg-white hover:bg-[#4c4c4c] focus:ring focus:outline-none focus:ring-[#989898] rounded-full"><svg className="md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 10 495 495"><path fill="black" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m169.5 338.9c-3.5 8.1-18.1 14-44.8 18.2c-1.4 1.9-2.5 9.8-4.3 15.9c-1.1 3.7-3.7 5.9-8.1 5.9h-.2c-6.2 0-12.8-2.9-25.8-2.9c-17.6 0-23.7 4-37.4 13.7c-14.5 10.3-28.4 19.1-49.2 18.2c-21 1.6-38.6-11.2-48.5-18.2c-13.8-9.7-19.8-13.7-37.4-13.7c-12.5 0-20.4 3.1-25.8 3.1s-7.5-3.3-8.3-6c-1.8-6.1-2.9-14.1-4.3-16c-13.8-2.1-44.8-7.5-45.5-21.4c-.2-3.6 2.3-6.8 5.9-7.4c46.3-7.6 67.1-55.1 68-57.1c0-.1.1-.2.2-.3c2.5-5 3-9.2 1.6-12.5c-3.4-7.9-17.9-10.7-24-13.2c-15.8-6.2-18-13.4-17-18.3c1.6-8.5 14.4-13.8 21.9-10.3c5.9 2.8 11.2 4.2 15.7 4.2c3.3 0 5.5-.8 6.6-1.4c-1.4-23.9-4.7-58 3.8-77.1C183.1 100 230.7 96 244.7 96c.6 0 6.1-.1 6.7-.1c34.7 0 68 17.8 84.3 54.3c8.5 19.1 5.2 53.1 3.8 77.1c1.1.6 2.9 1.3 5.7 1.4q6.45-.3 14.7-4.2c4-1.9 9.6-1.6 13.6 0c6.3 2.3 10.3 6.8 10.4 11.9c.1 6.5-5.7 12.1-17.2 16.6c-1.4.6-3.1 1.1-4.9 1.7c-6.5 2.1-16.4 5.2-19 11.5c-1.4 3.3-.8 7.5 1.6 12.5c.1.1.1.2.2.3c.9 2 21.7 49.5 68 57.1c4 1 7.1 5.5 4.9 10.8" /></svg></button> */}
                <button
                  type="button"
                  className="poppins flex justify-center items-center bg-white hover:bg-[#4c4c4c] focus:ring focus:outline-none focus:ring-[#989898] rounded-full"
                  onClick={() => window.open("https://www.tiktok.com/@arcadelaalianza0?is_from_webapp=1&sender_device=pc", "_blank")}
                >
                  <svg
                    className="md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="2.05 2.1 19.9 19.9"
                  >
                    <path fill="black" d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m5.939 7.713v.646a.37.37 0 0 1-.38.37a5.36 5.36 0 0 1-2.903-1.108v4.728a3.94 3.94 0 0 1-1.18 2.81a4 4 0 0 1-2.87 1.17a4.1 4.1 0 0 1-2.862-1.17a3.98 3.98 0 0 1-1.026-3.805c.159-.642.48-1.232.933-1.713a3.58 3.58 0 0 1 2.79-1.313h.82v1.703a.348.348 0 0 1-.39.348a1.918 1.918 0 0 0-1.23 3.631c.27.155.572.246.882.267c.24.01.48-.02.708-.092a1.93 1.93 0 0 0 1.313-1.816V5.754a.36.36 0 0 1 .359-.36h1.415a.36.36 0 0 1 .359.34a3.3 3.3 0 0 0 1.282 2.245a3.25 3.25 0 0 0 1.641.636a.37.37 0 0 1 .338.35z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="poppins flex justify-center items-center bg-white hover:bg-[#4c4c4c] focus:ring focus:outline-none focus:ring-[#989898] rounded-full"
                  onClick={() => window.open("https://wa.me/5217711980579", "_blank")}
                >
                  <svg
                    className="md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12 rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-2.5 30 450 450"
                  >
                    <path fill="black" d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8c0 24.9 7 49.2 20.2 70.1l3.1 5l-13.3 48.6l49.9-13.1l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7m77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8c-12.6 1.9-22.4.9-47.5-9.9c-39.7-17.2-65.7-57.2-67.7-59.8s-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6.1c2.4.1 5.7-.9 8.9 6.8c3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48M223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5" />
                  </svg>
                </button>

              </div>
              {/* Teléfono */}
              <div className="col-span-1 gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5 flex justify-center items-center">
                <p className="poppins text-white text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-bold">Teléfono:</p>
                <p className="poppins text-white text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-normal break-all">771 198 05 79</p>
              </div>
              {/* Correo Electrónico */}
              <div className="col-span-1 gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5 flex justify-center items-center">
                <p className="poppins text-white text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-bold">Correo Electrónico:</p>
                <p className="poppins text-white text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-normal break-all">arcadelaalianza049@gmail.com</p>
              </div>
            </div>
          </div>
          {/* Botones Redes Sociales Vista Móvil */}
          <div className="row-span-1 block md:hidden">
            <div className="grid grid-cols-1 gap-0 h-full pt-2.5">
              <div className="col-span-1 gap-x-1 md:gap-x-2 lg:gap-x-3 xl:gap-x-4 2xl:gap-x-5 flex justify-center items-center">
                <button 
                  type="button" 
                  className="poppins flex justify-center items-center bg-white hover:bg-[#4c4c4c] focus:ring focus:outline-none focus:ring-[#989898] rounded-full" 
                  onClick={() => window.open("https://www.facebook.com/VentaCampanas", "_blank")}
                >
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="2.05 2.1 19.9 19.9"><path fill="black" d="M22 12.08a10 10 0 0 1-8.91 9.893V14.8h2.35a.423.423 0 0 0 .422-.37l.254-2.202a.402.402 0 0 0-.402-.465H13.09v-1.8c0-.836.233-1.407 1.428-1.407h1.112a.423.423 0 0 0 .412-.424V6.238a.423.423 0 0 0-.423-.413H13.82a3.482 3.482 0 0 0-3.714 3.81v2.116H8.339a.413.413 0 0 0-.413.424v2.2a.413.413 0 0 0 .413.413h1.767v7.037A10 10 0 0 1 2 12.08a10 10 0 1 1 20 0" /></svg>
                </button>
                {/*<button type="button" className="poppins flex justify-center items-center bg-white hover:bg-[#4c4c4c] focus:ring focus:outline-none focus:ring-[#989898] rounded-full"><svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="2.05 2.1 19.9 19.9"><path fill="black" d="M13.61 12.243a1.6 1.6 0 1 1-1.56-1.63a1.62 1.62 0 0 1 1.56 1.63" /><path fill="black" d="M14.763 7.233H9.338a2.024 2.024 0 0 0-2.024 2.024v5.547a2.024 2.024 0 0 0 2.024 2.024h5.425a2.024 2.024 0 0 0 2.024-2.024V9.267a2.026 2.026 0 0 0-2.024-2.034m-2.713 7.723a2.703 2.703 0 1 1 2.642-2.703a2.67 2.67 0 0 1-2.642 2.703m2.936-5.405a.496.496 0 0 1-.496-.506a.506.506 0 1 1 1.012 0a.496.496 0 0 1-.557.506z" /><path fill="black" d="M12.05 2a10 10 0 1 0-.1 20a10 10 0 0 0 .1-20m6.073 12.702a3.39 3.39 0 0 1-3.41 3.411H9.389a3.39 3.39 0 0 1-3.411-3.41V9.378a3.39 3.39 0 0 1 3.41-3.411h5.325a3.39 3.39 0 0 1 3.41 3.41z" /></svg></button>
                <button type="button" className="poppins flex justify-center items-center bg-white hover:bg-[#4c4c4c] focus:ring focus:outline-none focus:ring-[#989898] rounded-full"><svg className="w-6 h-6 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 30 450 450"><path fill="black" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z" /></svg></button>
                <button type="button" className="poppins flex justify-center items-center bg-white hover:bg-[#4c4c4c] focus:ring focus:outline-none focus:ring-[#989898] rounded-full"><svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 10 495 495"><path fill="black" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m169.5 338.9c-3.5 8.1-18.1 14-44.8 18.2c-1.4 1.9-2.5 9.8-4.3 15.9c-1.1 3.7-3.7 5.9-8.1 5.9h-.2c-6.2 0-12.8-2.9-25.8-2.9c-17.6 0-23.7 4-37.4 13.7c-14.5 10.3-28.4 19.1-49.2 18.2c-21 1.6-38.6-11.2-48.5-18.2c-13.8-9.7-19.8-13.7-37.4-13.7c-12.5 0-20.4 3.1-25.8 3.1s-7.5-3.3-8.3-6c-1.8-6.1-2.9-14.1-4.3-16c-13.8-2.1-44.8-7.5-45.5-21.4c-.2-3.6 2.3-6.8 5.9-7.4c46.3-7.6 67.1-55.1 68-57.1c0-.1.1-.2.2-.3c2.5-5 3-9.2 1.6-12.5c-3.4-7.9-17.9-10.7-24-13.2c-15.8-6.2-18-13.4-17-18.3c1.6-8.5 14.4-13.8 21.9-10.3c5.9 2.8 11.2 4.2 15.7 4.2c3.3 0 5.5-.8 6.6-1.4c-1.4-23.9-4.7-58 3.8-77.1C183.1 100 230.7 96 244.7 96c.6 0 6.1-.1 6.7-.1c34.7 0 68 17.8 84.3 54.3c8.5 19.1 5.2 53.1 3.8 77.1c1.1.6 2.9 1.3 5.7 1.4q6.45-.3 14.7-4.2c4-1.9 9.6-1.6 13.6 0c6.3 2.3 10.3 6.8 10.4 11.9c.1 6.5-5.7 12.1-17.2 16.6c-1.4.6-3.1 1.1-4.9 1.7c-6.5 2.1-16.4 5.2-19 11.5c-1.4 3.3-.8 7.5 1.6 12.5c.1.1.1.2.2.3c.9 2 21.7 49.5 68 57.1c4 1 7.1 5.5 4.9 10.8" /></svg></button>*/}
                <button 
                  type="button" 
                  className="poppins flex justify-center items-center bg-white hover:bg-[#4c4c4c] focus:ring focus:outline-none focus:ring-[#989898] rounded-full"
                  onClick={() => window.open("https://www.tiktok.com/@arcadelaalianza0?is_from_webapp=1&sender_device=pc", "_blank")}
                >
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="2.05 2.1 19.9 19.9"><path fill="black" d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m5.939 7.713v.646a.37.37 0 0 1-.38.37a5.36 5.36 0 0 1-2.903-1.108v4.728a3.94 3.94 0 0 1-1.18 2.81a4 4 0 0 1-2.87 1.17a4.1 4.1 0 0 1-2.862-1.17a3.98 3.98 0 0 1-1.026-3.805c.159-.642.48-1.232.933-1.713a3.58 3.58 0 0 1 2.79-1.313h.82v1.703a.348.348 0 0 1-.39.348a1.918 1.918 0 0 0-1.23 3.631c.27.155.572.246.882.267c.24.01.48-.02.708-.092a1.93 1.93 0 0 0 1.313-1.816V5.754a.36.36 0 0 1 .359-.36h1.415a.36.36 0 0 1 .359.34a3.3 3.3 0 0 0 1.282 2.245a3.25 3.25 0 0 0 1.641.636a.37.37 0 0 1 .338.35z" /></svg>
                </button>
                <button 
                  type="button" 
                  className="poppins flex justify-center items-center bg-white hover:bg-[#4c4c4c] focus:ring focus:outline-none focus:ring-[#989898] rounded-full"
                  onClick={() => window.open("https://wa.me/5217711980579", "_blank")}
                >
                  <svg className="w-6 h-6 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 30 450 450"><path fill="black" d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8c0 24.9 7 49.2 20.2 70.1l3.1 5l-13.3 48.6l49.9-13.1l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7m77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8c-12.6 1.9-22.4.9-47.5-9.9c-39.7-17.2-65.7-57.2-67.7-59.8s-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6.1c2.4.1 5.7-.9 8.9 6.8c3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48M223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5" /></svg>
                </button>
              </div>
            </div>
          </div>
          {/* Elemento Grafico */}
          <div className="row-span-1">
            <div className="grid grid-cols-1 gap-0 h-full">
              <div className="col-span-1 flex justify-center items-center">
                <div className="bg-white h-1 w-full"></div>
              </div>
            </div>
          </div>
          {/* Texto Derechos de la Página */}
          <div className="row-span-1">
            <div className="grid grid-cols-1 gap-0">
              <div className="col-span-1 flex justify-center items-center">
                <p className="poppins text-white text-center text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg font-normal">© Arca de la Alianza 2024. Todos los derechos reservados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;