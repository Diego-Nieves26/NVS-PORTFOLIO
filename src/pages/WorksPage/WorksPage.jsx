import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// --------------------------------------------------------------------
import { Caption, CustomButtonOne, Footer, Navbar } from "../../components";
import { projectsData } from "../../data/index";
import useToTop from "../../hooks/useToTop";
import ReIcon from "./ReIcon/ReIcon";

// CSS
import "./worksPage.css";

// --------------------------------------------------------------------

const WorksPage = () => {
  // WHEN LOADING THE VIEW, SCROLL UP
  useToTop();

  // NAVIGATE
  const navigate = useNavigate();

  // PROGRESS BAR
  const [percent, setPercent] = useState(0);

  // SYNC CAROUSEL
  const [activeCard, setActiveCard] = useState(0);

  const slideChange = (e) => {
    setActiveCard(e.activeIndex);
    setPercent(Math.round(e.progress * 100));
  };

  return (
    <>
      <Navbar />
      <section className="projects__container">
        <div className="projects__header">
          <div className="limit__width">
            <Caption name="navbar.links.projects" />
          </div>
        </div>
        <div className="projects__slider">
          <div className="flex__center limit__width">
            <div className="card__header">
              <h4>{projectsData[activeCard].title}</h4>
              <ul>
                {projectsData[activeCard].technologies?.map((technology, i) => (
                  <li key={i + 1}>{technology}</li>
                ))}
              </ul>
            </div>
          </div>
          <Swiper
            spaceBetween={screen.width <= 640 ? 40 : 0}
            onSlideChange={slideChange}
            slidesPerView={"auto"}
            centeredSlides={true}
            effect={"coverflow"}
            grabCursor={true}
          >
            {projectsData.map((data, i) => (
              <SwiperSlide
                className="card__proyects flex__center"
                style={{
                  zIndex: i == activeCard ? "100" : "auto",
                  transform:
                    i == activeCard
                      ? screen.width <= 640
                        ? "scaleX(1.17) scaleY(1.12)"
                        : "scaleX(1.75) scaleY(1.45)"
                      : "none",
                }}
                key={i + 1}
              >
                <img
                  title={data.img.info}
                  alt={data.img.info}
                  src={data.img.img}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="card__footer flex__center">
            <CustomButtonOne
              name="details"
              task={() => navigate(`/works/${activeCard}`)}
            />
          </div>
        </div>
        <div className="progress__section">
          <div className="container-progress limit__width">
            <ReIcon
              iconName="Shape05"
              initialIndex={1}
              totalProyects={projectsData.length}
            />
            <ReIcon
              iconName="Shape06"
              initialIndex={9}
              totalProyects={projectsData.length}
            />
            <ReIcon
              iconName="Shape07"
              initialIndex={13}
              totalProyects={projectsData.length}
            />
            <div
              style={{ width: percent + "%" }}
              className="progress-bar"
              id="myBar"
            >
              <span className="flex__center">
                <i className="bx bx-code-curly"></i>
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WorksPage;
