import React from "react";

// CSS
import "./wallpaper.css";

// --------------------------------------------------------------------

const Wallpaper = ({ wallpaper, opacity }) => {
  return (
    <div
      style={{ backgroundImage: `url("${wallpaper}")`, opacity }}
      className="wallpaper"
    ></div>
  );
};

export default Wallpaper;
