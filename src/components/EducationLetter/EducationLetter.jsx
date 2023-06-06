import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { animateProp } from "../../helper/animateFunctions";
import useLocales from "../../hooks/useLocales";

// CSS
import "./educationLetter.css";

// --------------------------------------------------------------------

const EducationLetter = ({ edueducationInformation, i }) => {
  // LANGUAGE
  const { t } = useLocales("global");

  // ANIMACION
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });

  return (
    <li className="education__letter" ref={ref}>
      <span style={animateProp(0.1, isInView)}>
        {edueducationInformation.date}
      </span>
      <h4 style={animateProp(0.2, isInView)}>
        {edueducationInformation.institution}
      </h4>
      <h6 style={animateProp(0.3, isInView)}>
        {edueducationInformation.typeInstitution}
      </h6>
      <p style={animateProp(0.4, isInView)}>
        {t(edueducationInformation.description)}
      </p>
    </li>
  );
};

export default EducationLetter;
