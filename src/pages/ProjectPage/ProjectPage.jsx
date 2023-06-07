// --------------------------------------------------------------------
import { useNavigate, useParams } from "react-router-dom";
import images from "../../assets/images";
import { Caption, CustomButtonOne, Navbar, Wallpaper } from "../../components";
import { projectsData } from "../../data";
import useToTop from "../../hooks/useToTop";
import Carousel from "./Carousel/Carousel";

//CSS
import "./projectPage.css";

// --------------------------------------------------------------------

const ProjectPage = () => {
  // WHEN LOADING THE VIEW, SCROLL UP
  useToTop();

  // NAVIGATE
  const navigate = useNavigate();

  // DATA PROYECT
  const { id: indexProyect } = useParams();
  const data = projectsData[indexProyect];

  return (
    <>
      <Navbar />
      <Wallpaper wallpaper={images.Bg02.img} opacity={0.3} />
      <section className="limit__width project__page_container">
        <div className="proyect__header">
          <Caption name={"proyectPage.title"} />
          <span className="flex__center">
            {String(+indexProyect + 1).padStart(2, "0")}
          </span>
        </div>
        <article className="proyect__article flex__center">
          <div className="proyect__article_images flex__center">
            <Carousel
              images={data.images}
              proyectId={String(+indexProyect + 1).padStart(2, "0")}
            />
          </div>
          <div className="proyect__article_body">
            <h3>{data.title}</h3>
            <h4>{data.category}END</h4>
            <p>{data.description}</p>
            <div className="preview__container">
              <h5>ver</h5>
              <ul>
                <li>
                  <a
                    className="flex__center"
                    href={data.links[0].link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="bx bx-code-alt"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="flex__center"
                    href={data.links[1].link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="bx bx-windows"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <div className="btn__proyect_container limit__width">
          <CustomButtonOne name="back" task={() => navigate("/works")} />
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
