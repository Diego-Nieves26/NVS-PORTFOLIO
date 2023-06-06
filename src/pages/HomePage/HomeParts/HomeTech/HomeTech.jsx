// --------------------------------------------------------------------
import images from "../../../../assets/images";
import { Caption } from "../../../../components";

// CSS
import "./index.css";

const HomeTech = () => {
  return (
    <div className="video__container">
      <div className="limit__width">
        <Caption name="captions.iUse" />
      </div>
      <ul className="limit__width flex__center i-use-list">
        <li className="flex__center">
          React
          <img
            src={images.Funko01.img}
            alt={images.Funko01.info}
            title={images.Funko01.info}
            className="float-anim"
            style={{ animationDelay: ".3s" }}
          />
          <span>Frontend</span>
        </li>
        <li className="flex__center">
          Express - DJango
          <img
            src={images.Funko02.img}
            alt={images.Funko02.info}
            title={images.Funko02.info}
            className="float-anim"
            style={{ animationDelay: ".6s" }}
          />
          <span>Backend</span>
        </li>
        <li className="flex__center">
          Flutter
          <img
            src={images.Funko03.img}
            alt={images.Funko03.info}
            title={images.Funko03.info}
            className="float-anim"
            style={{ animationDelay: ".9s" }}
          />
          <span>Mobile</span>
        </li>
      </ul>
    </div>
  );
};

export default HomeTech;
