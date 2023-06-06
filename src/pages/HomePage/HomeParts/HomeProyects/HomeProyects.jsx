import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// --------------------------------------------------------------------
import {
  Caption,
  CustomButtonOne,
  CustomButtonTwo,
  ProjectLetter,
} from "../../../../components";
import { projectsData } from "../../../../data";
import HomeCertificates from "../HomeCertificates/HomeCertificates";

// CSS
import "./index.css";

const HomeProyects = () => {
  // NAVIGATE
  const navigate = useNavigate();

  const [swiperState, setSwiperState] = useState(null);
  const [actualProyect, setActualProyect] = useState(0);

  return (
    <section className="home__slider_container">
      <div>
        <div className="limit__width">
          <Caption name="captions.projects" />
        </div>
        <div className="project__home_list">
          {screen.width <= 639 ? (
            projectsData
              .slice(0, 3)
              .map((e, index) => <ProjectLetter data={e} key={index + 1} />)
          ) : (
            <Swiper
              onSlideChange={(swiper) => setActualProyect(swiper.activeIndex)}
              className="slider__projects_home limit__width"
              onSwiper={(swiper) => setSwiperState(swiper)}
              slidesPerView={"auto"}
              grabCursor={true}
              spaceBetween={10}
            >
              {projectsData.slice(0, 10).map((e, i) => (
                <SwiperSlide key={i + 1}>
                  <ProjectLetter data={e} i={i + 1} key={i + 1} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
        <div className="flex__center btn-left limit__width">
          <CustomButtonOne name="plus" task={() => navigate("/works")} />
          <div className="buttons__slider_projects">
            <button
              className={`flex__center ${
                swiperState?.activeIndex === 0 ? "btn-disable" : ""
              }`}
              onClick={() => swiperState.slidePrev()}
            >
              <i className="bx bx-chevron-left"></i>
            </button>
            <button
              className={`flex__center ${
                actualProyect === 3 ? "btn-disable" : ""
              }`}
              onClick={() => swiperState.slideNext()}
            >
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>
        </div>
        <HomeCertificates />
        <div className="flex__center">
          <CustomButtonTwo
            name="navbar.links.information"
            task={() => navigate("/information")}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeProyects;
