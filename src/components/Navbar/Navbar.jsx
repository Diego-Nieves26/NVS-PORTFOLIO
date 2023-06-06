import { motion, useCycle } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { variantsBackgroundNav } from "../../helper/framerVariants";
import useDataContext from "../../hooks/useDataContext";
import useLocales from "../../hooks/useLocales";
import Logo from "../Logo/Logo";
import MenuToggle from "./MenuToggle";
import { Navigation } from "./Navigation";

// CSS
import "./navbar.css";

// --------------------------------------------------------------------

const UseDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};

const Navbar = () => {
  const { setShowCustomSet, playSound } = useDataContext();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = UseDimensions(containerRef);
  const { onChangeLang, t, allLangs, currentLang } = useLocales();
  const [language, setLanguage] = useState(currentLang.value);

  const changeLanguage = (lan) => {
    onChangeLang(lan);
    setLanguage(lan);
  };

  return (
    <div className="nav__general">
      <Logo />
      <div>
        <div>
          <div
            className="flex__center play__music_container"
            style={{ visibility: "hidden" }}
          >
            <span className="bold">{t("navbar.sound")}</span>
            <label className="cont">
              <input
                type="checkbox"
                onChange={(e) => playSound(e.target.checked)}
              />
              <span></span>
            </label>
          </div>
          <div className="settings__nav_container">
            <button
              className="btn__cog flex__center"
              onClick={() => setShowCustomSet(true)}
              style={{ visibility: "hidden" }}
            >
              <i className="bx bxs-cog bx-tada"></i>
            </button>
            <div className="dropdown__container">
              <div className="dropdown__select">
                <span className="bold">{language}</span>
                <i className="bx bx-chevron-down"></i>
              </div>
              <div className="dropdown__list bold">
                {allLangs.map((lang) => (
                  <div
                    key={lang.value}
                    className="dropdown__item"
                    onClick={() => changeLanguage(lang.value)}
                  >
                    {lang.value.toUpperCase()}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          className="nav__container"
        >
          <MenuToggle toggle={() => toggleOpen()} />
          <motion.div
            className="nav__background"
            variants={variantsBackgroundNav}
          >
            <div>
              <Navigation toggle={() => toggleOpen()} />
            </div>
          </motion.div>
        </motion.nav>
      </div>
    </div>
  );
};

export default Navbar;
