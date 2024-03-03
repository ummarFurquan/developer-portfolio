import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Art.css";

// import required modules
import { EffectCoverflow } from "swiper/modules";

export default function Art() {
  return (
    <>
      <div className="container" id="art">
        <div className="heading-1">
          <h1>Art Work</h1>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="img-1"
            />
            <h5 className="image-description">Sample Text</h5>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt="img-1"
            />
            <h5 className="image-description">Sample Text</h5>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              alt="img-1"
            />
            <h5 className="image-description">Sample Text</h5>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              alt="img-1"
            />
            <h5 className="image-description">Sample Text</h5>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              alt="img-1"
            />
            <h5 className="image-description">Sample Text</h5>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-6.jpg"
              alt="img-1"
            />
            <h5 className="image-description">Sample Text</h5>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-7.jpg"
              alt="img-1"
            />
            <h5 className="image-description">Sample Text</h5>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-8.jpg"
              alt="img-1"
            />
            <h5 className="image-description">Sample Text</h5>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-9.jpg"
              alt="img-1"
            />
            <h5 className="image-description">Sample Text</h5>
          </SwiperSlide>
      
        </Swiper>
      </div>
    </>
  );
}
