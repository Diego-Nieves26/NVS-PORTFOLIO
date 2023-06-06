import React from "react";
import images from "../../assets/images";
import useLocales from "../../hooks/useLocales";

// CSS
import "./header.css";

// --------------------------------------------------------------

const Header = () => {
  // LANGUAGE
  const { t } = useLocales();

  const sentence = t("home.header.title").split(".");

  return (
    <header className="header">
      <div></div>
      <article className="limit__width header__content">
        <div className="flex__center">
          <h1>{sentence}</h1>
        </div>
      </article>
      <figure className="limit__width flex__center">
        <img
          className="header__me"
          src={images.DN01.img}
          alt={images.DN01.info}
          title={images.DN01.info}
        />
      </figure>
    </header>
  );
};

export default Header;
