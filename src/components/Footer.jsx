import { NavLink } from "react-router-dom";

/*Imagenes */
import imgFooter1 from "../assets/home/maderaLogoBlanco.png";
import imgFooter2 from "../assets/home/lumberPlusLogoBlanco.png";

import imgFooter3 from "../assets/e-mail-w.png";
import imgFooter4 from "../assets/whatsapp-w.png";
import facebookIcon from "../assets/facebook-w.png";
import instagramIcon from "../assets/instagram-w.png";
import linkedinIcon from "../assets/linkedin-w.png";
import tiktokIcon from "../assets/tik-tok-w.png";

import "../styles/footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-rows">
          <div className="footer-logos">
            <img src={imgFooter1} className="footer-logo" />
            <img src={imgFooter2} className="footer-logo footer-logo1" />
          </div>
          <div className="footer-sections">
            <NavLink to="/" className="items-one">
              Inicio
            </NavLink>
          </div>
          <div className="footer-sections">
            <NavLink to="about" className="items-one">
              Sobre Nosotros
            </NavLink>
          </div>

          <div className="footer-sections">
            <h2 className="items-one">Productos</h2>
            <ul>
              <li>
                <NavLink to="/maderas-tropicales" className="footer-items">
                  Maderas Tropicales
                </NavLink>
              </li>
              <li>
                <NavLink to="/thermowood" className="footer-items">
                  Thermowood
                </NavLink>
              </li>
              <li>
                <NavLink to="/compuestos" className="footer-items">
                  Compuestos
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-sections">
            <h2 className="items-one"> Subcategorías</h2>
            <ul>
              <li>
              <NavLink to="/maderas-tropicales/ipe" className="footer-items">
                  Ipé
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/maderas-tropicales/cumaru"
                  className="footer-items"
                >
                  Cumarú
                </NavLink>
              </li>
              <li>
                <NavLink to="/thermowood/ash" className="footer-items">
                  Ash
                </NavLink>
              </li>
              <li>
                <NavLink to="/thermowood/ayous" className="footer-items">
                  Ayous
                </NavLink>
              </li>
              <li>
                <NavLink to="/thermowood/pino" className="footer-items">
                  Pino
                </NavLink>
              </li>
              <li>
              <NavLink to="/compuestos/norx" className="footer-items">
                  Norx
                </NavLink>
               
              </li>
            </ul>
          </div>
          <div className="footer-sections">
            <h2 className="items-one">Contacto</h2>
            <ul className="text-white md:text-inherit">
              <li>
                <NavLink className="footer-items">
                  <img src={imgFooter4} className="footer-img" /> 809-999-9999
                </NavLink>
              </li>
              <li>
                <NavLink className="footer-items">
                  <img src={imgFooter3} className="footer-img" />
                  info@madeiratech.do
                </NavLink>
              </li>
            </ul>
            <div>
              <ul className="social-icon-link">
                <li>
                  <a href="https://www.instagram.com/madeiratech_?igsh=MTdsZTBjYWZpZjQ3NA==" className="footer-items" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} className="footer-img" alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/madeiratech/" className="footer-items" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} className="footer-img" alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@madeiratech?_t=8r0nb1wpe7B&_r=1" className="footer-items" target="_blank" rel="noopener noreferrer">
                    <img src={tiktokIcon} className="footer-img" alt="TikTok" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/share/TygV3j9iWifvADNG/?mibextid=LQQJ4d" className="footer-items" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} className="footer-img" alt="Facebook" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
