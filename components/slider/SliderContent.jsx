"use client";
import FadeIn from "../FadeIn";
import slides from "./slides";

import { AnimatePresence } from "framer-motion";

const SliderContent = ({ activeSlide }) => {
  return (
    <AnimatePresence mode="wait" initial={true}>
      {" "}
      <FadeIn key={activeSlide}>
        <div className="slide-content">
          {slides[activeSlide]["content"] ? (
            <video muted autoPlay className="video-cover">
              <source
                src={`/img/slides/${slides[activeSlide]["content"]["url"]}`}
                type="video/mp4"
              />
            </video>
          ) : (
            <img
              className={"object-cover"}
              src={`/img/slides/${slides[activeSlide]["img"]}`}
              alt=""
            />
          )}
        </div>
      </FadeIn>
    </AnimatePresence>
  );
};

export default SliderContent;
