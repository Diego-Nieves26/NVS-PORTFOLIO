import React from "react";
import useLocales from "../../hooks/useLocales";

// CSS
import "./customButtonOne.css";

// --------------------------------------------------------------------

const CustomButtonOne = ({ name, task }) => {
  // LANGUAGES
  const { t } = useLocales();

  return (
    <button className="btn__shine flex__center" onClick={task}>
      <span id="btn__shine_span">{t(`buttons.${name}`)}</span>
    </button>
  );
};

export default CustomButtonOne;
