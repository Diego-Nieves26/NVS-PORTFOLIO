import React from "react";
import images from "../../assets/images";

// CSS
import "./letter.css";

// --------------------------------------------------------------------

const Letter = ({
  letter,
  direction = "translateX(200px)",
  isInView,
  img,
  i,
}) => {
  return (
    <div
      className="leeter__decoration flex__center float-anim"
      style={{
        transform: isInView ? "none" : direction,
        opacity: isInView ? 1 : 0,
        animationDelay: `${i / 3}s`,
      }}
    >
      <span className="bold">{letter}</span>
      <img
        style={{
          transform: isInView ? "scale(1)" : "scale(0.1)",
          opacity: isInView ? 0.9 : 0,
        }}
        src={images[img].img}
        alt={images[img].info}
        title={images[img].info}
      />
    </div>
  );
};

export default Letter;
