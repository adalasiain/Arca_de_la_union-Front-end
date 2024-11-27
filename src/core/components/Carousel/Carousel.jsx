import { useState } from "react";

const Carousel = ({ images }) => {
  // const images = [
  //     "https://mueblesvizcaya.com.mx/wp-content/uploads/2021/01/SILLA-CORCEGA-FRENTE-600x600.png",
  //     "https://mueblesvizcaya.com.mx/wp-content/uploads/2021/01/SILLA-CORCEGA-LADO-600x600.png",
  //     "https://mueblesvizcaya.com.mx/wp-content/uploads/2021/01/3.-SILLA-CORCEGA-DETALLE-600x600.png",
  //     "https://mueblesvizcaya.com.mx/wp-content/uploads/2021/01/SILLA-CORCEGA-FRENTE-600x600.png",
  //     "https://mueblesvizcaya.com.mx/wp-content/uploads/2021/01/SILLA-CORCEGA-LADO-600x600.png"
  // ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images?.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images?.length) % images?.length
    );
  };

  return (
    <div id="carousel" className="relative w-full" data-carousel="slide">
      {/* Images */}
      {images?.length > 0 ? (
        <div className="bg-[#d8d9de] relative h-96 overflow-hidden rounded-3xl md:h-136 ">
          {images?.map((image, index) => (
            <div
              key={index}
              className={`carousel-item duration-700 ease-in-out ${
                index === activeIndex ? "block" : "hidden"
              }`}
              data-carousel-item
            >
              <img
                src={image?.url}
                alt={`Imagen del producto ${index + 1}`}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
            </div>
          ))}
        </div>
      ) : (
        <div
          className="bg-[#d8d9de] relative h-96 overflow-hidden
                rounded-3xl md:h-136 "
        >
          <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <img
              src="https://via.placeholder.com/600x600.png"
              alt="Imagen del producto"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images?.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-[#b87333]" : "bg-gray-400"
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>

      {/* Controls */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
