import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import catData from "./DB/catData";
import swiperStyle from "./style/swiperStyle.module.css";

// 스와이퍼 이미지
const MainSwiper = () => {
  const [data, setData] = useState(catData);
  // const path = process.env.PUBLIC_URL;
  return (
    <>
      <div className={swiperStyle.swiperWrap}>
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper">
          {data.map((img) => (
            <SwiperSlide key={img.id}>
              <img src={img.image} alt={img.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className={swiperStyle.txtP}>Types of clients we want to work</p>
    </>
  );
};

export default MainSwiper;
