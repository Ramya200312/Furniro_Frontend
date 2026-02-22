import { useState } from "react";
import Image1 from "../../assets/images/Image1.png";
import Image2 from "../../assets/images/Image2.png";

export default function RoomsInspiration() {
  const slides = [
    {
      img: Image1,
      title: "Inner Peace",
      category: "01 — Bed Room",
    },
    {
      img: Image2,
      title: "Modern Dining",
      category: "02 — Dining Room",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const nextIndex = (current + 1) % slides.length;

  return (
    <section className="bg-[#f9f1e7] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 leading-snug">
            50+ Beautiful rooms inspiration
          </h1>

          <p className="text-gray-500 mt-4 max-w-md">
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </p>

          <button className="mt-6 bg-[#B88E2F] text-white px-6 py-3">
            Explore More
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center gap-6">

          {/* MAIN IMAGE */}
          <div className="relative">
            <img
              src={slides[current].img}
              className="w-[400px] h-[500px] object-cover"
              alt="main"
            />

            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md p-4 w-[260px]">
              <p className="text-sm text-gray-500">
                {slides[current].category}
              </p>
              <h3 className="text-lg font-semibold">
                {slides[current].title}
              </h3>
            </div>

            <button
                onClick={nextSlide}
                className="absolute right-0 bottom-0 bg-[#B88E2F] text-white w-10 h-10 flex items-center justify-center"
              >
                →
              </button>
          </div>

          <img
            src={slides[nextIndex].img}
            className="w-[250px] h-[500px] object-cover opacity-80"
            alt="preview"
          />

          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  current === index ? "bg-[#B88E2F]" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

