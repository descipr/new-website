import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "../assets/css/BigImageSlider.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BigImageSlider = () => {
  const images = [
    "/images/team/1.jpg",
    "/images/team/2.jpg",
    "/images/team/3.jpg",
    "/images/team/4.jpg",
    "/images/team/0011.jpg",
    "/images/team/0022.JPG",
  ];

  return (
    <div className="big-slider-container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },      // mobile
          800: { slidesPerView: 2 },    // tablet
          1200: { slidesPerView: 3 },   // desktop
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Team member ${index + 1}`} className="slider-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BigImageSlider;