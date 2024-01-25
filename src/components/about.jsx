import Navbar from "./navbar";
import "./about.css";
import about from "../images/about.png";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="circle1"></div>
      <div className="about-wrapper">
        <img src={about} alt="" />
        <div className="about-info">
          <h1>About Me</h1>
          <p className="info-loc">
            I am a <span className="info-jb">Web Developer</span> based in
            Mumbai,India
          </p>
          <p className="info">
            As a second-year B.Sc Microbiology student at{" "}
            <span className="info-jb">St. Xavier&#39;s College</span>, I&#39;ve
            embraced a transformative shift from exploring the intricacies of
            microscopic life to crafting the digital landscape. Trading petri
            dishes for VS Code, my journey unfolds from the world of
            microbiology to the boundless realm of web development.
          </p>

          <h2>Skills:</h2>
          <div className="skills">
            <p>&gt; HTML</p>
            <p> &gt; CSS</p>
            <p>&gt; Javascript</p>
            <p>&gt; ReactJS (Vite)</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
