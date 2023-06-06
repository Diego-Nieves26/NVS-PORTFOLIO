import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// --------------------------------------------------------------------
import { slidesHomeImages } from "../../../../data";

// CSS
import "./index.css";

const HomeCertificates = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true }}
      className="slider_home"
      slidesPerView={"auto"}
      centeredSlides={true}
      grabCursor={true}
      spaceBetween={0}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {slidesHomeImages.map((image, i) => (
        <SwiperSlide key={i + 1}>
          <img
            className="certificado__slider"
            src={image.img}
            alt={image.alt}
            title={image.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeCertificates;
