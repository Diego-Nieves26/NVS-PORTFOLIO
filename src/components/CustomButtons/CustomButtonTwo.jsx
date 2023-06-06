import useLocales from "../../hooks/useLocales";
import React from "react";

// CSS
import "./customButtonTwo.css";

// --------------------------------------------------------------------

const CustomButtonTwo = ({ name, task }) => {
  // LANGUAGES
  const { t } = useLocales();

  return (
    <button className="custom__button_two bold" onClick={task}>
      {t(name)}
    </button>
  );
};

export default CustomButtonTwo;
