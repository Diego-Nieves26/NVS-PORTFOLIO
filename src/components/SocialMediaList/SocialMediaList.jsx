import { motion } from "framer-motion";
import React from "react";
import { linksNetwork } from "../../data/index";
import {
  variantsItemsListNav,
  variantsItemsNav,
} from "../../helper/framerVariants";

// CSS
import "./socialMediaList.css";

// --------------------------------------------------------------------

const SocialMediaList = () => {
  return (
    <motion.ul variants={variantsItemsListNav} className="wrapper">
      {linksNetwork.map((network, i) => (
        <motion.li
          key={i + 1}
          variants={variantsItemsNav}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="icon flex__center"
          style={{ "--icon-color": network.color }}
        >
          <span className="tooltip">{network.name}</span>
          <span className="flex__center">{network.icons}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default SocialMediaList;
