import { useInView } from "framer-motion";
import React, { useRef } from "react";
import useLocales from "../../hooks/useLocales";

//CSS
import "./objectivesLetter.css";

// --------------------------------------------------------------------

const ObjectivesLetter = ({ text }) => {
  // LANGUAGE
  const { t } = useLocales();

  // ANIMACION
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 100px -50px 0px",
  });

  return (
    <article
      className="flex__center objectives__letter"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(20px)",
        opacity: isInView ? 1 : 0,
      }}
    >
      {t(`information.goals.${text}`)}
    </article>
  );
};

export default ObjectivesLetter;
