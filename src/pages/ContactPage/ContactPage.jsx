import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// --------------------------------------------------------------------
import images from "../../assets/images";
import { CustomButtonOne, Footer, Navbar, Wallpaper } from "../../components";
import { emails, linksNetwork, regexEmail } from "../../data/index";
import { animateBlock } from "../../helper/animateFunctions";
import useLocales from "../../hooks/useLocales";
import useToTop from "../../hooks/useToTop";

// CSS
import "./contactPage.css";

// --------------------------------------------------------------------

const ContactPage = () => {
  // WHEN LOADING THE VIEW, SCROLL UP
  useToTop();

  // LANGUAGE
  const { t } = useLocales();

  // ANIMACION
  const formRef = useRef(null);
  const formIsInView = useInView(formRef, {
    once: true,
  });

  // FORM VARIABLES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // VALIDATION OF THE FORM
  const [emoji, setEmoji] = useState(images.Gif02);
  const [colors] = useState({
    fildOne: "#e7e600ff",
    fildTwo: "#e7e600ff",
    fildThree: "#e7e600ff",
  });

  const sendMessage = () => {
    let templateParams = {
      to_name: "Diego",
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_x9oa076",
        "template_87px19u",
        templateParams,
        "j0gMb7RxyfBa-J71V"
      )
      .then(
        function (response) {
          console.debug("SUCCESS!", response.status, response.text);
          setEmoji(images.Gif04);
        },
        function (error) {
          console.debug("FAILED...", error);
          setEmoji(images.Gif05);
        }
      );
  };

  const validateForm = (e) => {
    e.preventDefault();

    if (
      colors.fildOne !== "#fa9427" ||
      colors.fildTwo !== "#fa9427" ||
      colors.fildThree !== "#fa9427"
    ) {
      setEmoji(images.Gif05);

      if (colors.fildOne !== "#fa9427") {
        colors.fildOne = "#b70000ff";
      }

      if (colors.fildTwo !== "#fa9427") {
        colors.fildTwo = "#b70000ff";
      }

      if (colors.fildThree !== "#fa9427") {
        colors.fildThree = "#b70000ff";
      }

      return;
    }

    sendMessage(name, email, message, setEmoji);
  };

  const changeValueFilds = (fild, value) => {
    setEmoji(images.Gif03);

    // NAME
    if (fild === "name") {
      setName(value);
      if (value.length >= 1) {
        colors.fildOne = "#fa9427";
      } else {
        colors.fildOne = "#e7e600ff";
      }
    }
    // EMAIL
    if (fild === "email") {
      setEmail(value);
      if (value.length >= 1) {
        if (regexEmail.test(email)) {
          colors.fildTwo = "#fa9427";
        } else {
          colors.fildTwo = "#b70000ff";
        }
      } else {
        colors.fildTwo = "#e7e600ff";
      }
    }
    // MESSAGE
    if (fild === "message") {
      setMessage(value);
      if (value.length >= 1) {
        colors.fildThree = "#fa9427";
      } else {
        colors.fildThree = "#e7e600ff";
      }
    }
  };

  return (
    <>
      <Navbar />
      <Wallpaper wallpaper={images.Bg02.img} opacity={0.3} />
      <div className="contact__page_container limit__width">
        <div
          className="contact__container"
          ref={formRef}
          style={{
            transform: formIsInView ? "none" : "skew(30deg)",
            opacity: formIsInView ? 1 : 0,
          }}
        >
          <motion.h2 {...animateBlock(0)}>
            {t("navbar.links.contact")}
          </motion.h2>
          <motion.p {...animateBlock(0.1)}>{t("contact.text")}</motion.p>
          <motion.span
            {...animateBlock(0.2)}
            className="flex__center contact__emoji"
          >
            <img src={emoji.img} alt={emoji.info} title={emoji.info} />
          </motion.span>
          <form onSubmit={(e) => validateForm(e)}>
            <motion.div
              style={{ "--alert-color": colors.fildOne }}
              className="container__input"
              {...animateBlock(0.3)}
            >
              <input
                onChange={(e) => changeValueFilds("name", e.target.value)}
                placeholder={t("contact.form.name")}
                value={name}
                type="text"
              />
            </motion.div>
            <motion.div
              style={{ "--alert-color": colors.fildTwo }}
              className="container__input"
              {...animateBlock(0.4)}
            >
              <input
                onChange={(e) => changeValueFilds("email", e.target.value)}
                placeholder={t("contact.form.email")}
                value={email}
                type="email"
              />
            </motion.div>
            <motion.div
              style={{ "--alert-color": colors.fildThree }}
              className="container__input"
              {...animateBlock(0.5)}
            >
              <textarea
                onChange={(e) => changeValueFilds("message", e.target.value)}
                placeholder={t("contact.form.message")}
                value={message}
                type="text"
              />
            </motion.div>
            <CustomButtonOne name="send" />
          </form>
        </div>
        <ul className="list__contact">
          {linksNetwork.map((link, i) => (
            <motion.li
              transition={{ duration: 1, delay: (i + 1) / 4 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={i + 1}
            >
              <a
                href={link.to}
                target="_blank"
                rel="noreferrer"
                title={link.name}
              >
                {link.name}: {link.title}
              </a>
            </motion.li>
          ))}
          {emails.map((link, i) => (
            <motion.li
              transition={{ duration: 1, delay: (i + 3) / 4 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex__center"
              key={i + 1}
            >
              {link}
              <button
                className="btn__copy flex__center"
                onClick={() => {
                  if (!navigator.clipboard) {
                    return;
                  }
                  navigator.clipboard.writeText(link);
                }}
              >
                <i className="bx bx-copy"></i>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
