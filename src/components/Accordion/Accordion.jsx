import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { skills } from "../../data/index";
import useLocales from "../../hooks/useLocales";

// CSS
import "./accordion.css";

// --------------------------------------------------------------------

const Accordion = ({ id }) => {
  // LANGUAGE
  const { t } = useLocales();

  // ANIMACION
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });

  return (
    <div
      className="code__skills_card"
      ref={ref}
      style={{
        transform: isInView ? "none" : "skew(30deg) translateX(-200px)",
        opacity: isInView ? 1 : 0,
      }}
    >
      <input type="radio" name="acc" id={skills[id].identificador} />
      <label htmlFor={skills[id].identificador}>
        <h4>{skills[id].icon}</h4>
        <h5>
          {t(`information.technicalSkills.subtitles.${skills[id].title}`)}
        </h5>
      </label>
      <div className="code__skill_content">
        <ul>
          {skills[id].skills.map((skill, i) => (
            <li
              key={i + 1}
              className="float-anim"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {skill.icon}
              <span>
                {t(`information.technicalSkills.levels.${skill.level}`)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
