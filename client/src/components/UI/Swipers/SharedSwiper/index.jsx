import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

SwiperCore.use([EffectCoverflow, Navigation]);

const SharedSwiper = ({ swiperSettings, slides, SwiperButtons }) => {
  return (
    <Swiper {...swiperSettings} rewind={true}>
      {slides?.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
      {SwiperButtons}
    </Swiper>
  );
};
export default SharedSwiper;
