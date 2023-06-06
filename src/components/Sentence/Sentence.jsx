import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { sentencesData } from "../../data/index";
import useLocales from "../../hooks/useLocales";

// CSS
import "./sentence.css";

// --------------------------------------------------------------------

const Sentence = ({ sentence, direction = true }) => {
  // LANGUAGE
  const { t } = useLocales();

  // ANIMACION
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const styles = {
    "--direction": direction
      ? "polygon(0px calc(14.0625vw), 100% 0px, 100% calc(100% - 14.0625vw), 0px 100%)"
      : "polygon(0px 0px,100% calc(14.0625vw),100% 100%,0px calc(100% - 14.0625vw))",
    "--direction-img": direction
      ? "polygon(0px 80px, 100% 0px, 100% calc(100% - 80px), 0px 100%)"
      : "polygon(0px 0px,100% 80px,100% 100%,0px calc(100% - 80px))",
    "--dir-phrase": direction ? "end" : "start",
    "--dir-img": direction ? "flex-start" : "flex-end",
    "--dir-seb-1": direction ? "initial" : "0",
    "--dir-seb-2": direction ? "0" : "initial",
  };

  return (
    <section className="sentence__container" style={styles}>
      <div
        ref={ref}
        className="sentence flex__center"
        style={{
          transform: isInView ? "none" : "scaleY(0)",
          opacity: isInView ? 1 : 0,
        }}
      >
        <div>
          <span className="sentence__icon">
            <img
              src={sentencesData[sentence].icon.img}
              alt={sentencesData[sentence].icon.info}
              title={sentencesData[sentence].icon.info}
            />
          </span>
          <span
            className="bold sentence__phrase float-anim"
            style={{
              transform: isInView ? "none" : "translateY(-20px)",
              opacity: isInView ? 1 : 0,
            }}
          >
            <i className="bx bxs-quote-left"></i>
            {t(sentencesData[sentence].src)}
            <i className="bx bxs-quote-right"></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Sentence;
