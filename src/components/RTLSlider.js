import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "../assets/css/RTLSlider.css";

const topSlides = [
  { type: "image", src: "/images/rollingImages/01.jpg" },
  {
    type: "content",
    content: (
      <div className="orbitItem">
        <div className="nebulaNote">
          <h4>
            Attending the bootcamp was a transformative experience for me.
            Highly recommended for anyone looking to accelerate their career in AI
          </h4>
          <h5>Bibhuti Jha</h5>
          <h6>Decision Scientist</h6>
        </div>
      </div>
    ),
  },
  { type: "image", src: "/images/rollingImages/02.jpg" },
  { type: "image", src: "/images/rollingImages/03.jpg" },
  { type: "image", src: "/images/rollingImages/04.jpg" },
];

const bottomSlides = [
  {
    type: "content",
    content: (
      <div className="orbitItem">
        <div className="nebulaOppNote">
          <h4>
            A very insightful session indeed. Looking forward to more case studies.
          </h4>
          <h5>Suryansh Abhijit</h5>
          <h6>Full Stack Developer</h6>
        </div>
      </div>
    ),
  },
  { type: "image", src: "/images/rollingImages/05.jpg" },
  { type: "image", src: "/images/rollingImages/06.jpg" },
  { type: "image", src: "/images/rollingImages/07.jpg" },
  { type: "image", src: "/images/rollingImages/08.jpg" },
];

const CustomSwiper = ({ slides, reverse = false }) => (
  <Swiper
    modules={[Autoplay]}
    loop={true}
    autoplay={{ delay: 3000, disableOnInteraction: false, reverseDirection: reverse, }}
    speed={1000}
    
    breakpoints={{
      800: { // Mobile
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
      },
      993: { // Tablet
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      1025: { // Desktop
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
    }}
    className="custom-swiper"
  >
    {slides.map((slide, i) => (
      <SwiperSlide key={i} className="custom-slide">
        {slide.type === "image" ? (
          <img src={slide.src} alt={`slide-${i}`} className="slide-image" />
        ) : (
          <div className="slide-content">{slide.content}</div>
        )}
      </SwiperSlide>
    ))}
  </Swiper>
);

const RTLSlider = () => {
  return (
    <div className="row mainSliderAbout">
      <div className="container">
        <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
          <CustomSwiper slides={topSlides} reverse={false} />
          <CustomSwiper slides={bottomSlides} reverse={true} />
        </div>
      </div>
    </div>
  );
};

export default RTLSlider;