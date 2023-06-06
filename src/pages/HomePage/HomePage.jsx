// --------------------------------------------------------------------
import {
  Caption,
  Footer,
  GithubCalendar,
  Header,
  Navbar,
  ParallaxScroller,
  Sentence,
} from "../../components";
import useToTop from "../../hooks/useToTop";
import { HomeAboutMe, HomePhrase, HomeProyects, HomeTech } from "./HomeParts";

//CSS
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./homePage.css";

// --------------------------------------------------------------------

const HomePage = () => {
  // WHEN LOADING THE VIEW, SCROLL UP
  useToTop();

  return (
    <>
      <Navbar />
      <Header />
      <HomeProyects />
      <Sentence sentence={0} />
      <HomeAboutMe />
      <Sentence sentence={1} direction={false} />
      <HomeTech />
      <Sentence sentence={2} />
      <section className="letter__container">
        <div className="special__day_container limit__width">
          <Caption name="captions.daysICode" />
          <GithubCalendar />
        </div>
      </section>
      <Sentence sentence={3} direction={false} />
      <HomePhrase />
      <ParallaxScroller />
      <Footer />
    </>
  );
};

export default HomePage;
