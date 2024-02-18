import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Img from "../components/Img";

export const Slider = () => {
  const sildeStyle =
    "flex w-full overflow-hidden h-full flex-none flex-col items-center justify-center space-y-4";
  const slides = [
    <div key={1} className={sildeStyle}>
      <Img src="/slide1.jpg" alt="" className="size-full object-cover" />
    </div>,

    <div key={2} className={sildeStyle}>
      <Img src="/slide2.jpg" alt="" className="size-full object-cover" />
    </div>,

    <div key={3} className={sildeStyle}>
      <Img src="/slide3.jpg" alt="" className="size-full object-cover" />
    </div>,

    <div key={4} className={sildeStyle}>
      <Img src="/slide4.jpg" alt="" className="size-full object-cover" />
    </div>,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const moveSlideRight = useCallback(() => {
    const slider = document.getElementById("slider");
    if (!slider) return;
    const nextSlideIndex =
      currentIndex + 1 >= slides.length ? 0 : currentIndex + 1;
    const nextSlideOffset = nextSlideIndex * slider.clientWidth;

    slider.scrollTo({ left: nextSlideOffset });

    setCurrentIndex(nextSlideIndex);
  }, [currentIndex]);

  const moveSlideLeft = useCallback(() => {
    const slider = document.getElementById("slider");
    if (!slider) return;
    const nextSlideIndex =
      currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;
    const nextSlideOffset = nextSlideIndex * slider.clientWidth + 1;

    slider.scrollTo({ left: nextSlideOffset });

    setCurrentIndex(nextSlideIndex);
  }, [currentIndex]);

  useEffect(() => {
    const slider = document.getElementById("slider");
    if (!slider) return;

    const intervalSlideMove = setInterval(moveSlideRight, 5000);

    return () => {
      clearInterval(intervalSlideMove);
    };
  }, [moveSlideRight, moveSlideLeft]);

  return (
    <div className="pt-10">
      <div
        id="sliderRoot"
        className="relative flex h-[300px] w-full bg-no-repeat px-5 "
      >
        <button
          onClick={moveSlideRight}
          className="absolute -right-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl bg-white text-center"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>

        <button
          onClick={moveSlideLeft}
          className="absolute -left-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl bg-white text-center"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <div
          id="slider"
          className="flex h-full w-full snap-mandatory flex-nowrap overflow-hidden scroll-smooth rounded-xl text-center"
        >
          {slides.map((value) => value)}
        </div>
      </div>
    </div>
  );
};
