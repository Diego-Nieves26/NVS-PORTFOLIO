import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const SlideImage = ({ name, proyectId }) => {
  const myImage = new CloudinaryImage(
    `portafolio/proyects/${proyectId}/${name}`,
    {
      cloudName: "dlbsphdwv",
    }
  );

  return (
    <AdvancedImage
      cldImg={myImage}
      alt={`Proyecto ${proyectId} - Imagen ${name}`}
      title={`Proyecto ${proyectId} - Imagen ${name}`}
    />
  );
};

const Carousel = ({ images, proyectId }) => {
  return (
    <Swiper
      modules={[Pagination]}
      className="swiper_proyect flex__center"
      slidesPerView={1}
      grabCursor={true}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
    >
      {images.map((imageName, i) => (
        <SwiperSlide key={i + 1} className="proyect-slide flex__center">
          <SlideImage name={imageName} proyectId={proyectId} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
