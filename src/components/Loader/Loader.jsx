// CSS
import images from "../../assets/images";
import "./loader.css";

// --------------------------------------------------------------------

const Loader = () => {
  return (
    <div className="backdrop__loader flex__center">
      <img src={images.Logo02.img} alt="Logo" title="Logo" />
      <h1 className="code-loader">¡Generando Recursos!</h1>
    </div>
  );
};

export default Loader;
