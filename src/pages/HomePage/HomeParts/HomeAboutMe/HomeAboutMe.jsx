import { useInView } from "framer-motion";
import { useRef } from "react";

// --------------------------------------------------------------------
import CVpdf from "../../../../assets/other-assets/docs/Diego_Nieves_CV.pdf";
import { Caption, Letter } from "../../../../components";
import useLocales from "../../../../hooks/useLocales";

// CSS
import "./index.css";

const marginView = {
  once: true,
  margin: "0px 100px -50px 0px",
};

const HomeAboutMe = () => {
  // LANGUAGE
  const { t } = useLocales();

  const aboutMeOneRef = useRef(null);
  const aboutMeOneIsInView = useInView(aboutMeOneRef, marginView);
  const aboutMeTwoRef = useRef(null);
  const aboutMeTwoIsInView = useInView(aboutMeTwoRef, marginView);
  const aboutMeThreeRef = useRef(null);
  const aboutMeThreeIsInView = useInView(aboutMeThreeRef, marginView);

  return (
    <section className="about__me_container">
      <div className="limit__width">
        <Caption name="captions.aboutMe" />
        <div className="about__me_container--div flex__center">
          <div className="about__me_container--card">
            <p
              ref={aboutMeOneRef}
              style={{
                transform: aboutMeOneIsInView ? "none" : "scaleY(0)",
                opacity: aboutMeOneIsInView ? 1 : 0,
              }}
            >
              {t("home.aboutMe.paragraphOne")}
            </p>
            <Letter
              letter="D"
              isInView={aboutMeOneIsInView}
              img={"Shape02"}
              i={1}
            />
          </div>
          <div className="about__me_container--card">
            <Letter
              letter="L"
              isInView={aboutMeTwoIsInView}
              direction="translateX(-200px)"
              img={"Shape03"}
              i={2}
            />
            <p
              ref={aboutMeTwoRef}
              style={{
                transform: aboutMeTwoIsInView ? "none" : "scaleY(0)",
                opacity: aboutMeTwoIsInView ? 1 : 0,
              }}
            >
              {t("home.aboutMe.paragraphTwo")}
            </p>
          </div>
          <div className="about__me_container--card">
            <p
              ref={aboutMeThreeRef}
              style={{
                transform: aboutMeThreeIsInView ? "none" : "scaleY(0)",
                opacity: aboutMeThreeIsInView ? 1 : 0,
              }}
            >
              {t("home.aboutMe.paragraphThree")}
            </p>
            <Letter
              letter="C"
              isInView={aboutMeThreeIsInView}
              img={"Shape04"}
              i={3}
            />
          </div>
        </div>
      </div>
      <div className="flex__center">
        <button className="btn__shine flex__center">
          <span id="btn__shine_span">
            <a
              download="Diego_Nieves_CV.pdf"
              style={{ color: "black" }}
              href={CVpdf}
              title="Diego_Nieves_CV.pdf"
            >
              {t("buttons.cv")}
            </a>
          </span>
        </button>
      </div>
    </section>
  );
};

export default HomeAboutMe;
