/** @format */

import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CourseSlider = ({ title, data }) => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [active, setActive] = useState(0);

  // AUTO UPDATE ACTIVE DOT WHEN SCROLL MOVES
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const handleScroll = () => {
      const index = Math.round(slider.scrollLeft / 350);
      setActive(index);
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  // SCROLL NEXT
  const scrollNext = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollBy({
      left: slider.clientWidth, // FIXED
      behavior: "smooth",
    });
  };

  // SCROLL PREVIOUS
  const scrollPrev = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollBy({
      left: -slider.clientWidth, // FIXED
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 mt-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <button className="text-pink-600 font-medium flex items-center gap-1">
          See All →
        </button>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* SLIDER */}
        <div
          ref={sliderRef}
          onClick={() => {
            navigate(`/course/${0}`);
          }}
          className="slider-container flex overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide gap-6"
        >
          {data.map((item, i) => (
            <div
              key={i}
              className="min-w-full bg-white rounded-xl shadow border p-4 flex gap-6"
            >
              <img
                src={item.img}
                className="w-48 h-48 rounded-lg object-cover"
                alt=""
              />

              <div className="flex flex-col justify-between w-full">
                <div className="flex gap-2 flex-wrap">
                  {item.tags.map((t, j) => (
                    <span
                      key={j}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-gray-800 font-semibold leading-snug mt-2">
                  {item.title}
                </h3>

                <p className="font-bold mt-1">₹ {item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={scrollNext}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center"
        >
          →
        </button>

        {/* LEFT ARROW */}
        <button
          onClick={scrollPrev}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center"
        >
          ←
        </button>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-4 gap-2">
        {data.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              active === i ? "bg-pink-500 scale-125" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CourseSlider;
