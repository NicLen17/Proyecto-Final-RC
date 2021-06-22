import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper/core";
import "./Carro.css";
import { Autoplay } from "swiper/core";
import React, { useEffect } from "react";
import Aos from 'aos'
import "aos/dist/aos.css"


SwiperCore.use([EffectFade, Navigation, Pagination]);
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function App() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    // <>
    <Swiper data-aos="fade-down"
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
          src="https://www.optimagazine.com/wp-content/uploads/2020/11/Huawei-P50.jpg"
          alt="imagencarro"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="cimg"
          src="https://www.ventasrosario.com.ar/wp-content/uploads/2020/07/Samsung-Galaxy-A21s-portada.jpg"
          alt="imagencarro"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="cimg"
          src="https://i.blogs.es/cfa3f7/xiaomi-mi-11-ultra-03/1366_2000.jpg"
          alt="imagencarro"
        />
      </SwiperSlide>
    </Swiper>
    // </>
  );
}
