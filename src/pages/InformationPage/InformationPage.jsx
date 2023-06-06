import { useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

// --------------------------------------------------------------------
import images from "../../assets/images";
import {
  Accordion,
  EducationLetter,
  Footer,
  Navbar,
  ObjectivesLetter,
  Wallpaper,
} from "../../components";
import { education } from "../../data/index";
import useLocales from "../../hooks/useLocales";
import useToTop from "../../hooks/useToTop";

//CSS
import "./informationPage.css";

// --------------------------------------------------------------------

const LetterCard = ({ show, letter }) => {
  // LANGUAGE
  const { t } = useLocales();

  return (
    <span style={{ opacity: show ? 1 : 0 }}>
      {t(`information.about.words.${letter}`)}
    </span>
  );
};

const IconStar = ({ n }) => {
  const icons = [];

  for (let i = 0; i < n; i++) {
    icons.push(<i key={i} className="bx bxs-star"></i>);
  }

  return <span>{icons}</span>;
};

const InformationPage = () => {
  // WHEN LOADING THE VIEW, SCROLL UP
  useToTop();

  // LANGUAGE
  const { t } = useLocales();

  // ANIMACION
  const informationContainerRef = useRef(null);
  const informationContainerIsInView = useInView(informationContainerRef, {
    once: true,
    margin: "0px 100px -50px 0px",
  });

  const informationCardRef = useRef(null);
  const informationCardIsInView = useInView(informationCardRef, {
    once: true,
    margin: "0px 100px -50px 0px",
  });

  // NAVIGATE
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Wallpaper wallpaper={images.Bg01.img} opacity={1} />
      <div className="information__page_container limit__width">
        <section
          className="information__part_one"
          ref={informationContainerRef}
          style={{
            transform: informationContainerIsInView
              ? "none"
              : "translateY(20px)",
            opacity: informationContainerIsInView ? 1 : 0,
          }}
        >
          <div>
            <img
              title={images.DN02.info}
              alt={images.DN02.info}
              className="float-anim"
              src={images.DN02.img}
            />
          </div>
          <h4 className="flex__center">
            <i className="bx bx-plus-medical"></i>
            {t("navbar.links.information")}
          </h4>
          <h5>{t("information.subtitles.one")}</h5>
          <ul className="education-container">
            {education.map((edueducationInformation, i) => (
              <EducationLetter
                edueducationInformation={edueducationInformation}
                key={i + 1}
                i={i + 1}
              />
            ))}
          </ul>
        </section>
        <div className="information__content">
          <section className="information__part_two">
            <h5>{t("information.subtitles.two")}</h5>
            <div className="container__skill_information">
              <Accordion id={0} />
              <Accordion id={1} />
              <Accordion id={2} />
            </div>
            <ul className="container__history">
              <li>
                {t("information.technicalSkills.levels.one")}
                <IconStar n={5} />
              </li>
              <li>
                {t("information.technicalSkills.levels.two")}
                <IconStar n={4} />
              </li>
              <li>
                {t("information.technicalSkills.levels.three")}
                <IconStar n={3} />
              </li>
              <li>
                {t("information.technicalSkills.levels.four")}
                <IconStar n={2} />
              </li>
              <li>
                {t("information.technicalSkills.levels.five")}
                <IconStar n={1} />
              </li>
            </ul>
          </section>
          <section className="information__part_three">
            <div>
              <div className="information__card_img">
                <span
                  style={{
                    transform: informationCardIsInView
                      ? "none"
                      : "translateX(20px)",
                    opacity: informationCardIsInView ? 1 : 0,
                  }}
                >
                  2004-????
                </span>
              </div>
              <h4 ref={informationCardRef}>
                {t("information.subtitles.three")}
              </h4>
              <p>
                {t("information.about.per.one")}
                <LetterCard show={informationCardIsInView} letter="one" />,
                {t("information.about.per.two")}
                <LetterCard show={informationCardIsInView} letter="two" />
                {t("information.about.per.three")}
                <LetterCard show={informationCardIsInView} letter="three" />
                {t("information.about.per.four")}
                <LetterCard show={informationCardIsInView} letter="four" />.
                {t("information.about.per.five")}
                <LetterCard show={informationCardIsInView} letter="five" />,
                <LetterCard show={informationCardIsInView} letter="six" />,
                <LetterCard show={informationCardIsInView} letter="seven" />
                ,... . {t("information.about.per.six")}
                <LetterCard
                  show={informationCardIsInView}
                  letter="eight"
                />. {t("information.about.per.seven")}
                <LetterCard show={informationCardIsInView} letter="nine" />.
              </p>
            </div>
            <button onClick={() => navigate("/")} className="hover-button">
              {t("buttons.backToHome")}
            </button>
          </section>
        </div>
        <div className="information__part_four--container">
          <section className="information__part_four">
            <h6>{t("information.subtitles.four")}</h6>
            <ObjectivesLetter text="one" />
            <ObjectivesLetter text="two" />
            <ObjectivesLetter text="three" />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InformationPage;
