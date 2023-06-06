import { motion, useIsPresent } from "framer-motion";
import React from "react";
import "./pageTurn.css";
import images from "../../assets/images";

const PageTurn = () => {
  const isPresent = useIsPresent();

  console.log(isPresent);

  return (
    <motion.div className="page__turn_container">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1, transition: { duration: 20, ease: "circOut" } }}
      ></motion.div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: [1, 0],
          transition: { duration: 20, ease: "circOut" },
        }}
        exit={{ scaleX: 0, transition: { duration: 20, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 0, "--accent" : "#fffdf0" }}
        className="privacy-screen"
      ></motion.div>
    </motion.div>
  );
};

export default PageTurn;
