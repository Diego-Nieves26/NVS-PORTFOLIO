import React from "react";
import useDataContext from "../../hooks/useDataContext";

// CSS
import "./customSet.css";

// --------------------------------------------------------------------

const CustomSet = () => {
  const { showCustomSet, setShowCustomSet, changePreferences } =
    useDataContext();

  if (showCustomSet)
    return (
      <div className="backdrop flex__center">
        <div
          className="backdrop__close"
          onClick={() => setShowCustomSet(false)}
        ></div>
        <div className="custom__set_container flex__center">
          <h3>Tu dispositivo, tus gustos</h3>
          <p>
            Controla aspectos de diseño de mi web, para que te sea agradable y
            util.
          </p>
          <div className="custom__set_select">
            Tipo de letra
            <div className="flex__center">
              <span onClick={() => changePreferences("fontFamily", "cool")}>
                Cool
              </span>
              <span
                onClick={() => changePreferences("fontFamily", "super-cool")}
              >
                Super Cool
              </span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CustomSet;
