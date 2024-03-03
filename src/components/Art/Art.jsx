import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import 'swiper/css/pagination';

import "./Art.css";


import  image1 from '../../assets/Art/art1.jpg'
import image2 from '../../assets/Art/project2.jpg'
import image3 from '../../assets/Art/art section 3.jpg'
import bgImg from '../../assets/Art/background image.png'

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

export default function Art() {
  return (
    <>
      <div className="container" id="art">
        <div className="heading-1">
          <h1>Art Work</h1>
          <div className="desc">
            <h6>Welcome to my gallery of original creations</h6></div>
        </div>
        <div>
          <div className="bg-img">
            <img src={bgImg} alt=" " />
          </div>
        <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable:true,
        }}
          modules={[EffectFade,Navigation,Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={image3}
              alt="img-1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image2}
              alt="img-1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image1}
              alt="img-1"
            />
          </SwiperSlide>
        </Swiper>
        </div>
      </div>

    </>
  );
}
