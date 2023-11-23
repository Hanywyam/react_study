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
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import styles from "./styles.module.css";
import catData from "../assets/DB/catData";

const SwiperCom = () => {
  const [data, setData] = useState(catData);
  const path = process.env.PUBLIC_URL;

  return (
    <div className={styles.swiperCom}>
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper">
        {/* Map으로 DB 이용하여 데이터 불러오기 */}
        {data.map((img) => (
          <SwiperSlide key={img.id}>
            <img src={path + img.image} alt={img.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCom;
