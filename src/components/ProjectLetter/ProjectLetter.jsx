import { useInView } from "framer-motion";
import React, { useRef } from "react";
import useLocales from "../../hooks/useLocales";

// CSS
import "./projectLetter.css";

// --------------------------------------------------------------------

const ProjectLetter = ({ data, i }) => {
  // LANGUAGE
  const { t } = useLocales("global");

  // ANIMACION
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });

  return (
    <div
      className="card__proyect_home"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(200px) translateY(50px)",
        opacity: isInView ? 1 : 0,
        transitionDelay: `${i * 0.1}s`,
      }}
    >
      <h6 className="bold">
        <span>{data.category}</span>END
      </h6>
      <div
        className="flex__center"
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
        }}
      >
        <img src={data.img.img} alt={data.img.info} title={data.img.info} />
      </div>
      <div className="flex__center">
        <span
          className="bold"
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
          }}
        >
          {data.date}
        </span>
        <p
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
          }}
        >
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectLetter;
