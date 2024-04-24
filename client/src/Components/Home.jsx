
import React, { useState, useEffect } from 'react';
import { SliderData } from '../utils/constants';
import About from './About';

const Home = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  let intervalId;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    intervalId = setInterval(nextSlide, 3000);
  }, [nextSlide]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
    <section className='slider'>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
      
    </section> 
    <About/>
   
    </div>
  );
};

export default Home