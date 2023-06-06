import React from "react";
import { Link, useLocation } from "react-router-dom";
import images from "../../assets/images";
import { linksNav } from "../../data/index";
import useLocales from "../../hooks/useLocales";
import SocialMediaList from "../SocialMediaList/SocialMediaList";

// CSS
import "./footer.css";

// --------------------------------------------------------------------

const Footer = () => {
  // LANGUAGE
  const { t } = useLocales();

  // LOCATION ROUTE
  const location = useLocation().pathname;

  return (
    <footer>
      <div className="shape__footer">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
      </div>
      <section className="limit__width flex__center">
        <div>
          <article>
            <h3 className="footer__title">Diego Nieves</h3>
            <ul className="footer__links_nav">
              {linksNav.map((link, i) => (
                <li key={i + 1}>
                  <Link
                    to={link.toPage}
                    title={t(link.name)}
                    className={
                      location === link.toPage
                        ? "active__link active__link_footer float-anim"
                        : ""
                    }
                  >
                    {location !== link.toPage && "-"} {t(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h4>{t("footer.networks")}</h4>
            <SocialMediaList />
          </article>
          <article>
            <img
              className="footer__logo float-anim"
              src={images.Logo02.img}
              alt={images.Logo02.info}
              title={images.Logo02.info}
            />
          </article>
        </div>
        <p>
          {t("footer.fired")} <br /> © {t("footer.reserved")}
        </p>
      </section>
    </footer>
  );
};

export default Footer;
