import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import images from "../../assets/images";
import useDataContext from "../../hooks/useDataContext";

// CSS
import "./logo.css";

// --------------------------------------------------------------------

const Logo = () => {
  const width = window.screen.width <= 680 ? 100 : 190;
  const location = useLocation().pathname;
  const { scrollY } = useDataContext();
  const navigate = useNavigate();

  const styles = {
    display: location === "/" ? "block" : "none",
    width: `${width - scrollY}px`,
    height: `${width - scrollY}px`,
    opacity: `${1 - scrollY / 700}`,
  };

  return (
    <picture className="logo flex__center" style={styles}>
      <img
        src={images.Logo02.img}
        alt={images.Logo02.info}
        title={images.Logo02.info}
        onClick={() => navigate("/")}
      />
    </picture>
  );
};

export default Logo;
