import { useSelector, useDispatch } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";
import { getPixabay } from "../store/slice/pixabaySlice";
import { setSwiperSlides } from "../store/slice/swiperSlice";

const SwiperEx = () => {
  const dispatch = useDispatch();
  const swiperRef = useRef(null);
  const pics = useSelector((state) => state.pixabay.data);
  const swiperSlides = useSelector((state) => state.swiperSlides.slides);

  useEffect(() => {
    dispatch(getPixabay());
  }, [dispatch]);
  useEffect(() => {
    dispatch(setSwiperSlides(pics));
  }, [pics]);

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        ref={swiperRef}>
        {swiperSlides.map((img) => (
          <SwiperSlide key={img.id}>
            <img
              src={img.ImageUrl}
              alt={img.tags}
              style={{ width: "200px", height: "200px" }}
            />
            <h3>{img.tags.split(",", 1)}</h3>
            <p>{img.tags}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperEx;
