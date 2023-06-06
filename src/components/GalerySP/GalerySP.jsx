import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// --------------------------------------------------------------------
import { galerySP } from "../../data/index";

// CSS
import "swiper/css";
import "swiper/css/effect-cards";
import "./galerySP.css";

// --------------------------------------------------------------------

export default function GalerySP() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="galerySP"
        loop={true}
        autoplay={true}
        initialSlide={4}
      >
        {galerySP.map((el, i) => (
          <SwiperSlide style={{ backgroundColor: el.color }} key={i + 1}>
            <img src={el.img} alt={el.info} title={el.info} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
