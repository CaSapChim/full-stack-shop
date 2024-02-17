import { useCallback, useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const Slider = () => {
  const slides = [
    <div key={1} className='flex w-full flex-none flex-col items-center justify-center space-y-4'>
      <img src="/slide1.jpg" alt="" />
    </div>,

    <div key={2} className='flex w-full flex-none flex-col items-center justify-center space-y-4'>
      <img src="/slide2.jpg" alt="" />
    </div>,

    <div key={3} className='flex w-full flex-none flex-col items-center justify-center space-y-4'>
      <img src="/slide3.jpg" alt="" />
    </div>,

    <div key={4} className='flex w-full flex-none flex-col items-center justify-center space-y-4'>
      <img src="/slide4.jpg" alt="" />
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
    <div className="pb-20 px-10 pt-10 font-mono">
      <div id="sliderRoot" className="relative flex h-[300px] w-full bg-no-repeat">
        <button
          onClick={moveSlideRight}
          className="absolute -right-5 top-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-center shadow-md"
        >
          <FontAwesomeIcon icon={faArrowRight}/>
        </button>

        <button
          onClick={moveSlideLeft}
          className="absolute -left-5 top-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-center shadow-md"
        >
          <FontAwesomeIcon icon={faArrowLeft}/>
          
        </button>

        <div
          id="slider"
          className="flex h-full w-full snap-mandatory flex-nowrap overflow-hidden scroll-smooth rounded-3xl text-center"
        >
          {slides.map((value) => value)}
        </div>
      </div>
    </div>
  )
}
