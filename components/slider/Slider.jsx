"use client";

import { use, useState } from "react";
import "./slider.css";

import slidesData from "./slides";

const SlideItem = ({ data, handler, index }) => {
  return (
    <li className="slide-list__item">
      <button
        onClick={() => handler(data.id, index)}
        className={`button ${data.isActive ? "button--open" : ""}`}
      >
        {data.isActive ? (
          <>
            <span>
              <strong>{data.title}.</strong> {data.desc}
            </span>
          </>
        ) : (
          <>
            <img className="button__icon" src="./img/icons/plus.svg" alt="#" />
            <strong>{data.title}</strong>
          </>
        )}
      </button>
    </li>
  );
};

const Slider = () => {
  const [slides, setSlides] = useState(slidesData);
  const [activeSlide, setActiveSlide] = useState(null);
  const clickHandler = (id, index) => {
    setActiveSlide(index);

    setSlides((prev) => {
      return prev.map((slide) => {
        let isActive = false;
        if (slide.id === id) isActive = true;

        return { ...slide, isActive: isActive };
      });
    });
  };

  const slideMovePrev = () => {
    setSlides((prevSlides) => {
      return prevSlides.map((slide, index) => {
        let isActive = false;

        if (activeSlide - 1 === index) {
          isActive = true;
        }

        return {
          ...slide,
          isActive: isActive,
        };
      });
    });
    setActiveSlide((prev) => --prev);
  };
  const slideMoveNext = () => {
    setSlides((prevSlides) => {
      return prevSlides.map((slide, index) => {
        let isActive = false;
        if (activeSlide + 1 === index) {
          isActive = true;
        }

        return {
          ...slide,
          isActive: isActive,
        };
      });
    });
    setActiveSlide((prev) => ++prev);
  };

  return (
    <div className="slider">
      <div className="controls">
        <div
          className={`controls__arrows ${
            activeSlide === null && "constrols__arows--hidden"
          }`}
        >
          <button
            disabled={activeSlide === 0 ? true : false}
            onClick={slideMovePrev}
            className="arrow__up"
          >
            <img src="./img/icons/chevronup.svg" alt="#" />
          </button>
          <button
            disabled={activeSlide === slides.length - 1 ? true : false}
            onClick={slideMoveNext}
            className="arrow__down"
          >
            {" "}
            <img src="./img/icons/chevrondown.svg" alt="#" />
          </button>
        </div>
        <ul className="slide-list">
          {slides.map((slide, index) => (
            <SlideItem
              handler={clickHandler}
              data={slide}
              key={index}
              index={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Slider;
