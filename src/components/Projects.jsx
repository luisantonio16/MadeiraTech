import { NavLink } from "react-router-dom";
import "../Css/Projects.css";
import Footer from "./Footer";
import VideoEmbed from "./VideoEmbed";

const Projects = () => {
  return (
    <section id="projects-page">
      <div className="projects-page-header">
        <h2>Proyectos</h2>
      </div>

      <div className="projects-page-section custom-border-bottom">
        <h3>Proyectos realizados con Thermowood</h3>
        <div className="video-container">
          <VideoEmbed
            url={"https://www.youtube.com/embed/wQmpHe9PoYw"}
            title={"Thermowood horizontal"}
            horizontal
          />
        </div>
        <div className="video-container">
          <VideoEmbed
            url={"https://www.youtube.com/embed/9O63HPqyni0"}
            title={"Thermowood vertical"}
          />
        </div>
        <NavLink to={"/thermowood"} className="learn-more-btn">
          Saber más
        </NavLink>
      </div>

      <div className="projects-page-section custom-border-bottom">
        <h3>Proyectos realizados con Compuestos</h3>
        <div className="video-container">
          <VideoEmbed
            url={"https://www.youtube.com/embed/DNslpEsPUzE"}
            title={"Compuestos horizontal"}
            horizontal
          />
        </div>
        <div className="video-container">
          <VideoEmbed
            url={"https://www.youtube.com/embed/9O63HPqyni0"}
            title={"Compuestos vertical"}
          />
        </div>
        <NavLink to={"/compuestos"} className="learn-more-btn">
          Saber más
        </NavLink>
      </div>
      <div className="projects-page-section">
        <h3>Proyectos realizados con Maderas Tropicales</h3>
        <div className="video-container">
          <VideoEmbed
            url={"https://www.youtube.com/embed/mxUWCMtddiI"}
            title={"Maderas Tropicales horizontal"}
            horizontal
          />
        </div>
        <div className="video-container">
          <VideoEmbed
            url={"https://www.youtube.com/embed/5wu8h8po8zg"}
            title={"Maderas Tropicales vertical"}
          />
        </div>
        <NavLink to={"/maderas-tropicales"} className="learn-more-btn">
          Saber más
        </NavLink>
      </div>

      <div className="footer-componente">
        <Footer />
      </div>
    </section>
  );
};

export default Projects;
