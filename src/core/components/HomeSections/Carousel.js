// CarouselContent.js
import { useState } from 'react';
import campana_1 from '../../../assets/img/campana_1.jpg';
import campana_2 from '../../../assets/img/campana_2.jpg';
import campana_3 from '../../../assets/img/campana_3.jpg';

const carouselItems = [
  {
    id: 1,
    image: campana_1,
    title: 'Campana Esmaltada', 
    description: 'Campana esmaltada con colores vibrantes, perfecta para decoraciones modernas.'
  },
  {
    id: 2,
    image: campana_2,
    title: 'Campana de Aluminio', 
    description: 'Campana ligera de aluminio, resistente y con un sonido nítido y claro.'
  },
  {
    id: 3,
    image: 'https://http2.mlstatic.com/D_NQ_NP_977455-MLM75036576199_032024-O.webp',
    title: 'Campana Bronce', 
    description: 'Campana de bronce, ideal para ambientes clásicos con sonido profundo y resonante.'
  },
  {
    id: 4,
    image: 'https://http2.mlstatic.com/D_NQ_NP_752137-MLM77227174994_072024-O.webp',
    title: 'Campana Cobre', 
    description: 'Elegante campana de cobre con tonalidad cálida, perfecta para decoración vintage.'
  },
  {
    id: 5,
    image: 'https://m.media-amazon.com/images/I/413KPMgKPIL._AC_UF894,1000_QL80_.jpg',
    title: 'Campana Pulida', 
    description: 'Campana con acabado pulido que resalta por su brillo y sonido claro.'
  },
  {
    id: 6,
    image: 'https://http2.mlstatic.com/D_NQ_NP_835805-MLM49591285063_042022-O.webp',
    title: 'Campana Barroco', 
    description: 'Campana estilo barroco, con detalles ornamentales que la hacen única y llamativa.'
  },
  {
    id: 7,
    image: 'https://resources.claroshop.com/imagenes-sanborns-ii/1200/2001671095843.jpg',
    title: 'Campana de Plata', 
    description: 'Campana de plata con acabado refinado, perfecta para decoraciones elegantes y sofisticadas.'
  },
  {
    id: 8,
    image: 'https://campanasparaiglesias.com.mx/wp-content/uploads/2024/08/Campanas_Para_Iglesias_Mexico_500kg.png',
    title: 'Campana Bronce', 
    description: 'Campana de diseño moderno y minimalista, ideal para espacios contemporáneos.'
  },
  {
    id: 9,
    image: 'https://http2.mlstatic.com/D_NQ_NP_664266-MLM77441263253_072024-O.webp',
    title: 'Campana Pulida', 
    description: 'Campana de estilo vintage con detalles envejecidos, evocando nostalgia y elegancia.'
  },
  {
    id: 10,
    image: 'https://http2.mlstatic.com/D_NQ_NP_987396-MLM31702468931_082019-O.webp',
    title: 'Campana Rústica', 
    description: 'Campana de hierro forjado con acabado rústico, ideal para decoraciones campestres.'
  },
  {
    id: 11,
    image: 'https://i0.wp.com/www.quenotelacuenten.org/wp-content/uploads/2019/03/campana.png?resize=430%2C445&ssl=1',
    title: 'Campana de Hierro', 
    description: 'Campana de hierro robusta y de gran resonancia, perfecta para exteriores.'
  },
  {
    id: 12,
    image: 'https://http2.mlstatic.com/D_NQ_NP_630873-MLM32009745675_082019-O.webp',
    title: 'Campana de Bronce', 
    description: 'Campana de cristal con detalles tallados, creando un sonido suave y armonioso.'
  },
  {
    id: 13,
    image: campana_3,
    title: 'Campana Artesanal', 
    description: 'Campana hecha a mano, con un diseño único y acabado artesanal especial.'
  }
];

export function useCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating1, setIsAnimating1] = useState(false);
  const [isAnimating2, setIsAnimating2] = useState(false);

  const prevSlide = () => {
    setIsAnimating1(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
      setIsAnimating1(false);
    }, 200);
  };

  const nextSlide = () => {
    setIsAnimating2(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
      setIsAnimating2(false);
    }, 200);
  };

  const getSlides = () => {
    const prevIndex = (currentIndex + 1) % carouselItems.length;
    const nextIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    return {
      previous: carouselItems[prevIndex],
      current: carouselItems[currentIndex],
      next: carouselItems[nextIndex],
    };
  };

  return { getSlides, prevSlide, nextSlide, isAnimating1, isAnimating2 };
}