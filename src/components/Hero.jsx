import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import iconSrc from "../data/iconsrc";

const Hero = () => {
  const scrollAmount = 500; // Define the amount of scroll in pixels

  const slide = (direction) => {
    const slider = document.getElementById("slider");
    slider.scrollLeft += direction * scrollAmount;
  };

  return (
    <div className="relative flex items-center mt-4 px-4">
      {/* Left Arrow Button */}
      <MdChevronLeft
        className="opacity-50 cursor-pointer hover:opacity-100 transition-opacity duration-300"
        onClick={() => slide(-1)}
        size={40}
      />

      {/* Image Container with Horizontal Scrolling */}
      <div
        id="slider"
        className="flex w-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide gap-8 ml-2"
      >
        {iconSrc.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`icon-${index}`}
            className="inline-block p-2 cursor-pointer hover:scale-105 transition-transform duration-300 w-10 h-10 opacity-50 hover:opacity-90 font-thin"
          />
        ))}
      </div>

      {/* Right Arrow Button */}
      <MdChevronRight
        className="opacity-50 cursor-pointer hover:opacity-100 transition-opacity duration-300"
        onClick={() => slide(1)}
        size={40}
      />
    </div>
  );
};

export default Hero;
