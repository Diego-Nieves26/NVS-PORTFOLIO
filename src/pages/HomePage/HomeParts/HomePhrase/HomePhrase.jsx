import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GalerySP } from "../../../../components";
import { ramdomPhrase } from "../../../../data";
import useLocales from "../../../../hooks/useLocales";
import useMath from "../../../../hooks/useMath";
import useRandom from "../../../../hooks/useRandom";

const HomePhrase = () => {
  // LANGUAGE
  const { t } = useLocales();

  // RAMDOM PHRASE
  const [indexPhrase, setIndexPhrase] = useState(
    useRandom(0, ramdomPhrase.length - 1)
  );
  const [indexDice, setIndexDice] = useState(useRandom(1, 6));

  const valRef = useRef(null);
  const valIsInView = useInView(valRef, {
    once: true,
    margin: "0px 100px -50px 0px",
  });

  return (
    <div className="ramdom__phrase_home-container limit__width">
      <GalerySP />
      <section className="ramdom__phrase_home">
        <h3 className="ramdom__phrase_title">{t("captions.randomPhrase")}</h3>
        <div>
          <h4>
            <span>#{indexPhrase + 1}</span>/{ramdomPhrase.length}
          </h4>
          <div className="ramdom__phrase__math">
            <span>{useMath(indexPhrase + 1, indexDice)}</span>
            <button
              className="flex__center"
              onClick={() => {
                setIndexDice(useRandom(1, 6));
                setIndexPhrase(useRandom(0, ramdomPhrase.length - 1));
              }}
            >
              <i className={`bx bx-dice-${indexDice}`}></i>
            </button>
          </div>
        </div>
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          ref={valRef}
          style={{
            transform: valIsInView ? "none" : "scaleY(0)",
            opacity: valIsInView ? 1 : 0,
            transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {t(`phrases.${ramdomPhrase[indexPhrase]}`)}
        </motion.article>
      </section>
    </div>
  );
};

export default HomePhrase;
