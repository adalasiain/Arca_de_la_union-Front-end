// CarouselContent.js
import { useState } from 'react';
import campana_1 from '../../../assets/img/campana_1.jpg';
import campana_2 from '../../../assets/img/campana_2.jpg';
import campana_3 from '../../../assets/img/campana_3.jpg';

const carouselItems = [
  {
    id: 1,
    image: campana_1,
    title: 'Campana #1',
    description: 'Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl. Campana 1.',
  },
  {
    id: 2,
    image: campana_2,
    title: 'Campana #2',
    description: 'Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl. Campana 2.',
  },
  {
    id: 3,
    image: campana_3,
    title: 'Campana #3',
    description: 'Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl. Campana 3.',
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