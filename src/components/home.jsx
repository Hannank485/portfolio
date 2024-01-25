import Navbar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./home.css";
const Home = () => {
  return (
    <>
      <Navbar />

      <div className="home-container">
        <div className="background"></div>
        <div className="home-content">
          <div className="social-media">
            <div className="social-media-content">
              <a href="https://www.instagram.com/hxnnah.khn/" target="blank">
                <FontAwesomeIcon icon={faInstagram} className="social" />
              </a>
              <a
                href="https://www.linkedin.com/in/hannan-khan-9a9524249/"
                target="blank"
              >
                <FontAwesomeIcon icon={faLinkedin} className="social" />
              </a>
              <a href="https://github.com/Hannank485" target="blank">
                <FontAwesomeIcon icon={faGithub} className="social" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCS6wpKNSrhid-BDHQF-JNhQ"
                target="blank"
              >
                <FontAwesomeIcon icon={faYoutube} className="social" />
              </a>
            </div>
          </div>
          <div className="home-hero">
            <div className="box box-js">
              <p>Javascript</p>
            </div>
            <div className="box box-html">
              <p>Html</p>
            </div>
            <div className="box box-react">
              <p>React</p>
            </div>

            <div className="home-text">
              <p id="txt-red">Hi, My name is</p>
              <h1 className="hero-main">Abdul Hannan Khan</h1>
              <h1 className="hero-main2">
                I am a <span className="color-change">Front-End </span>
                Web Developer.
              </h1>
              <p className="hero-info">
                As an emerging web developer, I leverage HTML, CSS, and
                JavaScript, complemented by a burgeoning proficiency in React.
                Committed to precision and innovation, I specialize in creating
                polished, dynamic user interfaces.
              </p>
            </div>
            <div className="home-img">
              <img src="/pngegg.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
