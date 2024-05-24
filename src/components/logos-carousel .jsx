import React, { useEffect, useRef } from "react";
import "../styles.css";

const logos = [
  "https://i.pinimg.com/originals/0b/77/a6/0b77a61ba7f8810d715dedde29875272.png",
  "https://www.freepnglogos.com/uploads/sbi-logo-png/sbi-logo-state-bank-india-group-vector-eps-0.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lenovo_Global_Corporate_Logo.png/2560px-Lenovo_Global_Corporate_Logo.png",
  "https://logos-world.net/wp-content/uploads/2022/12/Bajaj-Auto-Logo.png",
  "https://i.pinimg.com/originals/c8/55/03/c85503ffac45d4b8b14ba397f4b44ce9.png",
];

function LogosCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let isScrolling = true;

    const startScrolling = () => {
      isScrolling = true;
      scrollContinuously();
    };

    const stopScrolling = () => {
      isScrolling = false;
    };

    const scrollContinuously = () => {
      if (!isScrolling) return;
      carousel.scrollLeft += 0.5; // Adjust speed if necessary
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      }
      requestAnimationFrame(scrollContinuously);
    };

    carousel.addEventListener("mouseover", stopScrolling);
    carousel.addEventListener("mouseout", startScrolling);

    startScrolling();

    return () => {
      carousel.removeEventListener("mouseover", stopScrolling);
      carousel.removeEventListener("mouseout", startScrolling);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center mt-12">
        <p className="text-slate-400 opacity-50">TRUSTED BY COMPANIES LIKE</p>
      </div>
      <div className="flex justify-center">
        <div
          className="carousel-container overflow-hidden whitespace-nowrap"
          ref={carouselRef}
        >
          <div className="carousel-track inline-block">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="inline-block mx-8"
              />
            ))}
            {logos.map((logo, index) => (
              <img
                key={`clone-${index}`}
                src={logo}
                alt={`Logo clone ${index + 1}`}
                className="inline-block mx-8"
              />
            ))}
          </div>
        </div>
        {/* <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-[#121215] to-transparent pointer-events-none"></div> */}
        {/* <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-[#121215] to-transparent pointer-events-none"></div> */}
      </div>
    </>
  );
}

export default LogosCarousel;
