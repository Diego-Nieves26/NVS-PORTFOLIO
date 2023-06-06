import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { linksNav } from "../../data/index";
import {
  variantsItemsListNav,
  variantsItemsNav,
} from "../../helper/framerVariants";
import useLocales from "../../hooks/useLocales";
import SocialMediaList from "../SocialMediaList/SocialMediaList";

export const Navigation = ({ toggle }) => {
  const { t } = useLocales();
  const location = useLocation().pathname;

  return (
    <>
      <motion.ul variants={variantsItemsListNav} className="nav__list">
        {linksNav.map((i, index) => (
          <motion.li
            key={index + 1}
            variants={variantsItemsNav}
            onClick={toggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`nav__item ${
              location === i.toPage ? "active__link" : ""
            }`}
          >
            <div className="nav__icon_placeholder flex__center">{i.icons}</div>
            <Link
              className="nav__text_placeholder flex__center bold"
              to={i.toPage}
              title={t(i.name)}
            >
              {t(i.name)}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      <SocialMediaList />
    </>
  );
};
