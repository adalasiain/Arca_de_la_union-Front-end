import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './HomeSections.css';
import { useCarousel } from './Carousel';
import fondo from '../../../assets/img/fondo.jpg';
import fondoCampana from '../../../assets/img/fondoCampana.png';

function HomeSections() {
  const { getSlides, prevSlide, nextSlide, isAnimating1, isAnimating2 } = useCarousel();
  const { previous, current, next } = getSlides();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/products');
  };

  return (
    <div>
      {/* Elemento Secciones del Inicio */}
      {/* Sección 1 Galería */}
      <div className="h-screen overflow-hidden relative flex justify-center">
        {/* Fondo */}
        <div className="flex justify-center items-center">
          <img src={fondo} alt="Fondo" className="absolute z-10 object-cover h-screen w-full" />
          <img src={fondoCampana} alt="Fondo Campana" className="absolute z-30 object-cover h-[60%] lg:h-screen" />
          <div className="absolute z-20 bg-[#b87333] opacity-60 h-screen w-full"></div>
        </div>
        <div className="w-full absolute">
          <div className="circuloFondo absolute z-30 -left-[25vw] -top-[15vh] w-[75vw] lg:w-[50vw]"></div>
        </div>
        {/* Subsecciones Galería */}
        <div className="w-full absolute z-40">
          <div className="grid grid-cols-12 gap-0 h-screen flex items-center">
            {/* Subseccion 1 */}
            <div className="col-span-12 lg:col-span-5 px-10">
              <div className="grid grid-cols-2 hidden md:grid gap-0 pb-10 lg:pb-14">
                <div className="col-span-1 flex justify-start">
                  <div className="arrowContainer">
                    <div className="arrow w-5 h-5"></div>
                    <div className="arrow w-5 h-5"></div>
                    <div className="arrow w-5 h-5"></div>
                    <div className="arrow w-5 h-5"></div>
                    <div className="arrow w-5 h-5"></div>
                  </div>
                </div>
                <div className="col-span-1 flex justify-end">
                  <div className="circleContainer gap-0.5 xl:gap-1.5 2xl:gap-2">
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-0 pb-5">
                <div className="col-span-1">
                  <div className="rectangle h-full w-1.5 md:w-2 xl:w-2.5"></div>
                </div>
                <div className="col-span-11">
                  <p className="league-spartan text-white text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold">VENTA DE</p>
                  <p className="league-spartan text-[#ee9f05] text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold">CAMPANAS</p>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-0 pb-4 md:pb-8">
                <div className="col-span-12">
                  {/* <p className="poppins text-white text-sm md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p> */}
                </div>
              </div>
              <div className="grid grid-cols-12 gap-0 pb-0 md:pb-14">
                <div className="col-span-12 pl-3">
                  <Link to="/gallery">
                    <button type="button" className="poppins text-base md:text-xl xl:text-2xl 2xl:text-3xl font-bold flex items-center text-white px-8 py-2 bg-[#b87333] hover:bg-[#ee9f05] focus:ring focus:outline-none focus:ring-[#ffbb05] rounded-full text-center">GALERÍA<svg className="w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 ml-1 md:ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="m11 15l3-3l-3-3"/></g></svg></button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-0 hidden md:grid">
                <div className="col-span-1 flex justify-start">
                  <div className="circleContainer gap-0.5 xl:gap-1.5 2xl:gap-2">
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                    <div className="circle w-1.5 h-1.5"></div>
                  </div>
                </div>
                <div className="col-span-1 flex justify-end">
                  <div className="arrowContainer">
                    <div className="arrow w-6 h-6 2xl:w-7 2xl:h-7"></div>
                    <div className="arrow w-6 h-6 2xl:w-7 2xl:h-7"></div>
                    <div className="arrow w-6 h-6 2xl:w-7 2xl:h-7"></div>
                    <div className="arrow w-6 h-6 2xl:w-7 2xl:h-7"></div>
                    <div className="arrow w-6 h-6 2xl:w-7 2xl:h-7"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Subseccion 2 */}
            <div className="col-span-12 lg:col-span-7 h-full flex justify-center items-center">
              {/* Elemento 1 */}
              <div className={`grid grid-rows-12 gap-0 relative bg-white w-full 2xl:w-[30%] h-[40vh] md:h-[38vh] lg:h-[60vh] rounded-[25px] md:rounded-[30px] xl:rounded-[35px] 2xl:rounded-[40px] relative -right-28 md:-right-20 z-10 shadow-xl opacity-95 transition-opacity transform ${isAnimating1 ? 'bg-opacity-95 -translate-x-[0%] transition-all duration-500 ease-in-out' : ''} ${isAnimating2 ? 'bg-opacity-95 translate-x-[0%] transition-all duration-500 ease-in-out' : ''}`}>
                <div className="row-span-6 rounded-t-[40px] flex justify-center items-center overflow-hidden select-none">
                  <img src={previous.image} alt={previous.title} className={`object-cover w-full h-full p-6 rounded-[40px] md:rounded-[45px] xl:rounded-[50px] transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60' : ''} ${isAnimating2 ? 'duration-500 opacity-60' : ''}`} />
                </div>
                <div className="row-span-4 px-6 pb-6 overflow-hidden overflow-y-scroll scrollbar">
                  <p className={`league-spartan text-black text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold pb-2 transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60 select-none' : ''} ${isAnimating2 ? 'opacity-60 select-none' : ''}`}>{previous.title}</p>
                  <p className={`poppins text-black text-xs md:text-sm xl:text-base 2xl:text-lg font-normal text-justify transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60 select-none' : ''} ${isAnimating2 ? 'opacity-60 select-none' : ''}`}>{previous.description}</p>
                </div>
                <div className="row-span-2 rounded-b-[40px] flex justify-center">
                  <button 
                    type="button"
                    onClick={handleClick}
                    className={`poppins text-sm md:text-base xl:text-lg font-semibold flex justify-between items-center text-white px-4 md:px-6 lg:px-4 xl:px-6 2xl:px-8 w-full h-10 md:h-11 xl:h-12 mx-10 bg-black hover:bg-[#4c4c4c] focus:ring focus:outline-none focus:ring-[#989898] rounded-full transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60 pointer-events-none select-none' : ''} ${isAnimating2 ? 'duration-500 opacity-60 pointer-events-none select-none' : ''}`}
                  >Detalles
                    <svg className="w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="m11 15l3-3l-3-3"/></g></svg>
                  </button>
                </div>
              </div>
              {/* Elemento 2 */}
              <div className={`grid grid-rows-12 gap-0 relative bg-white bg-opacity-95 w-full 2xl:w-1/3 h-[48vh] md:h-[45vh] lg:h-[70vh] rounded-[25px] md:rounded-[30px] xl:rounded-[35px] 2xl:rounded-[40px] z-20 shadow-xl transition-opacity transform ${isAnimating1 ? 'bg-opacity-80 -translate-x-[15%] transition-all duration-500 ease-in-out' : ''} ${isAnimating2 ? 'bg-opacity-80 translate-x-[15%] transition-all duration-500 ease-in-out' : ''}`}>
                <div className="row-span-6 rounded-t-[40px] flex justify-center items-center overflow-hidden opacity-95 select-none">
                  <img src={current.image} alt={current.title} className={`object-cover w-full h-full p-6 rounded-[40px] md:rounded-[45px] xl:rounded-[50px] transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60' : ''} ${isAnimating2 ? 'duration-500 opacity-60' : ''}`} />
                </div>
                <div className="row-span-4 pt-0 pb-6 px-6 md:pt-2 xl:pt-4 2xl:p-6 opacity-95 overflow-hidden overflow-y-scroll scrollbar">
                  <p className={`league-spartan text-black text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold pb-2 transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60 select-none' : ''} ${isAnimating2 ? 'opacity-60 select-none' : ''}`}>{current.title}</p>
                  <p className={`poppins text-black text-xs md:text-sm xl:text-base 2xl:text-lg font-normal text-justify transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60 select-none' : ''} ${isAnimating2 ? 'opacity-60 select-none' : ''}`}>{current.description}</p>
                </div>
                <div className="row-span-2 rounded-b-[40px] flex justify-center opacity-95">
                  <button 
                      type="button"
                      onClick={handleClick}
                      className={`poppins text-sm md:text-base xl:text-lg font-semibold flex justify-between items-center text-white px-4 md:px-6 lg:px-4 xl:px-6 2xl:px-8 w-full h-10 md:h-11 xl:h-12 mx-10 bg-black hover:bg-[#4c4c4c] focus:ring focus:outline-none focus:ring-[#989898] rounded-full transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60 pointer-events-none select-none' : ''} ${isAnimating2 ? 'duration-500 opacity-60 pointer-events-none select-none' : ''}`}
                    >Detalles
                      <svg className="w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="m11 15l3-3l-3-3"/></g></svg>
                  </button>
                </div>
                <div className="absolute w-full h-10 h-[54%] flex flex-col justify-end">
                  <div className={`grid grid-cols-2 gap-0 ${isAnimating1 ? 'translate-x-[15%] pointer-events-none' : ''} ${isAnimating2 ? '-translate-x-[15%] pointer-events-none' : ''}`}>
                    <div className="row-col-1 flex justify-start relative -left-5 md:-left-6 xl:-left-7">
                      <button onClick={prevSlide} type="button" className="poppins text-3xl font-bold flex items-center text-white px-0 py-0 bg-[#b87333] hover:bg-[#ee9f05] focus:ring focus:outline-none focus:ring-[#ffbb05] rounded-full text-center drop-shadow-md"><svg className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="m7.825 12l3.875 3.9q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.213-.325T5.426 12t.063-.375t.212-.325l4.6-4.6q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7zm6.6 0l3.875 3.9q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.213-.325T12.026 12t.063-.375t.212-.325l4.6-4.6q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7z"/></svg></button>
                    </div>
                    <div className="row-col-1 flex justify-end relative -right-5 md:-right-6 xl:-right-7">
                      <button onClick={nextSlide} type="button" className="poppins text-3xl font-bold flex items-center text-white px-0 py-0 bg-[#b87333] hover:bg-[#ee9f05] focus:ring focus:outline-none focus:ring-[#ffbb05] rounded-full text-center drop-shadow-md"><svg className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M9.575 12L5.7 8.1q-.275-.275-.288-.687T5.7 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.288T5.7 17.3q-.275-.275-.275-.7t.275-.7zm6.6 0L12.3 8.1q-.275-.275-.288-.687T12.3 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.288T12.3 17.3q-.275-.275-.275-.7t.275-.7z"/></svg></button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Elemento 3 */}
              <div className={`grid grid-rows-12 gap-0 relative bg-white w-full 2xl:w-[30%] h-[40vh] md:h-[38vh] lg:h-[60vh] rounded-[25px] md:rounded-[30px] xl:rounded-[35px] 2xl:rounded-[40px] relative -left-28 md:-left-20 z-10 shadow-xl opacity-95 transition-opacity transform ${isAnimating1 ? 'bg-opacity-95 -translate-x-[0%] transition-all duration-500 ease-in-out' : ''} ${isAnimating2 ? 'bg-opacity-95 translate-x-[0%] transition-all duration-500 ease-in-out' : ''}`}>
                <div className="row-span-6 rounded-t-[40px] flex justify-center items-center overflow-hidden select-none">
                  <img src={next.image} alt={next.title} className={`object-cover w-full h-full p-6 rounded-[40px] md:rounded-[45px] xl:rounded-[50px] transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60' : ''} ${isAnimating2 ? 'duration-500 opacity-60' : ''}`} />
                </div>
                <div className="row-span-4 px-6 pb-6 overflow-hidden overflow-y-scroll scrollbar">
                  <p className={`league-spartan text-black text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold pb-2 transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60 select-none' : ''} ${isAnimating2 ? 'opacity-60 select-none' : ''}`}>{next.title}</p>
                  <p className={`poppins text-black text-xs md:text-sm xl:text-base 2xl:text-lg font-normal text-justify transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60 select-none' : ''} ${isAnimating2 ? 'opacity-60 select-none' : ''}`}>{next.description}</p>
                </div>
                <div className="row-span-2 rounded-b-[40px] flex justify-center">
                  <button 
                      type="button"
                      onClick={handleClick}
                      className={`poppins text-sm md:text-base xl:text-lg font-semibold flex justify-between items-center text-white px-4 md:px-6 lg:px-4 xl:px-6 2xl:px-8 w-full h-10 md:h-11 xl:h-12 mx-10 bg-black hover:bg-[#4c4c4c] focus:ring focus:outline-none focus:ring-[#989898] rounded-full transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60 pointer-events-none select-none' : ''} ${isAnimating2 ? 'duration-500 opacity-60 pointer-events-none select-none' : ''}`}
                    >Detalles
                      <svg className="w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="m11 15l3-3l-3-3"/></g></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSections;