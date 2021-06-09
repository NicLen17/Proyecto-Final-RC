import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper/core";
import "./Carro.css";
import { Autoplay } from "swiper/core";
import React, { Component } from "react";

SwiperCore.use([EffectFade, Navigation, Pagination]);
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function App() {
  return (
    // <>
    <Swiper
      autoplay={true}
      loop={true}
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      className="mySwiper Carro"
    >
      <SwiperSlide>
        <img
          className="cimg"
          src="https://i.blogs.es/577f1e/imagen-lest/1366_2000.jpg"
          alt="imagencarro"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="cimg"
          src="https://www.muycomputer.com/wp-content/uploads/2021/02/Samsung-Galaxy-F62-e1613391724450.jpg"
          alt="imagencarro"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="cimg"
          src="https://cdn.pocket-lint.com/r/s/970x/assets/images/156147-phones-news-samsung-main-pics-image1-uhsmkahfla.jpg"
          alt="imagencarro"
        />
      </SwiperSlide>
    </Swiper>
    // </>
  );
}
