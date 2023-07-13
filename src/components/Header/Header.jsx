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
    </header>
  );
};

export default Header;
