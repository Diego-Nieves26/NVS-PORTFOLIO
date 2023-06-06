import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import images from "../../assets/images";
import useLocales from "../../hooks/useLocales";

// CSS
import "./caption.css";

// --------------------------------------------------------------------

const Caption = ({ name }) => {
  // LANGUAGE
  const { t } = useLocales("global");

  // ANIMACION
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });

  return (
    <motion.h2
      className="caption float-anim"
      ref={ref}
      style={{
        transform: isInView ? "none" : "skew(30deg) translateX(-200px)",
        opacity: isInView ? 1 : 0,
      }}
    >
      <img
        title={images.Shape01.info}
        alt={images.Shape01.info}
        src={images.Shape01.img}
      />
      <span
        className="bold"
        style={{
          transform: isInView ? "none" : "translatey(20px)",
          opacity: isInView ? 1 : 0,
        }}
      >
        {t(name)}
      </span>
    </motion.h2>
  );
};

export default Caption;
