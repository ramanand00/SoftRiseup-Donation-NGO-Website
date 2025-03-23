import React, { useState } from 'react'
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import sudhaar from '../assets/Initiatives/Sudhaar.jpeg';
import gyaan from '../assets/Initiatives/Gyaan.jpeg';
import nirmaan from '../assets/Initiatives/Nirmaan.jpeg';
import gogreen from '../assets/Initiatives/Go-Green.jpeg';
import muskaan from '../assets/Initiatives/Muskaan.jpeg';
import '../css/initiatives.css';

const Initiatives = () => {
  const isMobile = window.innerWidth <= 768;
  const [card, setCard] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.slow
  });

  const InCards = [
    {
      key: uuidv4(),
      content: <img src={sudhaar} alt="1" />,
      
    },
    {
      key: uuidv4(),
      content: <img src={gyaan} alt="2" />,
     
    },
    {
      key: uuidv4(),
      content: <img src={nirmaan} alt="3" />,
      
    },
    {
      key: uuidv4(),
      content: <img src={gogreen} alt="4" />,
     
    },
    {
      key: uuidv4(),
      content: <img src={muskaan} alt="5" />,
     
    },
    {
      key: uuidv4(),
      content: <img src={sudhaar} alt="1" />,
      
    },
    {
      key: uuidv4(),
      content: <img src={gyaan} alt="2" />,
      
    },
    {
      key: uuidv4(),
      content: <img src={nirmaan} alt="3" />,
     
    },
    {
      key: uuidv4(),
      content: <img src={gogreen} alt="4" />,
      
    },
    {
      key: uuidv4(),
      content: <img src={muskaan} alt="5" />,
     
    },
  ].map((slide, index) => {
    return {
      ...slide,
      onClick: () => {
        if (index === card.goToSlide)
          window.open(slide.link);
        setCard({ ...card, goToSlide: index })
      }
    }
  });

  const onRight = () => {
    setCard({ ...card, goToSlide: card.goToSlide + 1 })
  }

  const onLeft = () => {
    setCard({ ...card, goToSlide: card.goToSlide - 1 })
  }

  return (
    <div className="Initiatives">
      <br />
      <br />
      <div className="title">
        <h1><span>OUR</span> Projects</h1>
      </div>
      <div className="initiative-cards">
        <Carousel
          slides={InCards}
          goToSlide={card.goToSlide}
          offsetRadius={card.offsetRadius}
          showNavigation={card.showNavigation}
          animationConfig={card.config}
        />
      </div>

      <div className="arrows">
        <svg onClick={onLeft} xmlns="http://www.w3.org/2000/svg" width={isMobile?"30":"40"} height={isMobile?"30":"40"} fill="currentColor" className="leftarr bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
        </svg>
        <svg onClick={onRight} xmlns="http://www.w3.org/2000/svg" width={isMobile?"30":"40"}  height={isMobile?"30":"40"}  fill="currentColor" className="rightarr bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
        </svg>
      </div>
    </div>
  )
}

export default Initiatives
