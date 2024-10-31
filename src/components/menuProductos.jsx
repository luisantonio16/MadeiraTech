import { NavLink } from "react-router-dom";
import iconPlus from "../assets/plus-naranja.png";
import "../styles/menuProductos.css";
import facebookIcon from "../assets/facebook-w.png";
import instagramIcon from "../assets/instagram-w.png";
import linkedinIcon from "../assets/linkedin-w.png";
import tiktokIcon from "../assets/tik-tok-w.png";

const MenuProductos = () => {
  return (
    <div className="header-menuProductos">
      <div className="menu-social-links">
        <ul className="social-icon-link">
          <li>
            <a href="https://www.instagram.com/madeiratech_?igsh=MTdsZTBjYWZpZjQ3NA==" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} className="footer-img" alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/madeiratech/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} className="footer-img" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@madeiratech?_t=8r0nb1wpe7B&_r=1" target="_blank" rel="noopener noreferrer">
              <img src={tiktokIcon} className="footer-img" alt="TikTok" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/share/TygV3j9iWifvADNG/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} className="footer-img" alt="Facebook" />
            </a>
          </li>
        </ul>
      </div>
      <div className="menu-Productos">
        <div className="menu-Productos-juntos">
          <NavLink
            to="/maderas-tropicales"
            className={({ isActive }) =>
              isActive ? "active menu-productos-active" : ""
            }
          >
            Maderas Tropicales
            <img src={iconPlus} className="link-plus" />
          </NavLink>
          <NavLink
            to="/thermowood"
            className={({ isActive }) =>
              isActive ? "active menu-productos-active" : ""
            }
          >
            Thermowood
            <img src={iconPlus} className="link-plus" />
          </NavLink>
        </div>
        <NavLink
          to="/compuestos"
          className={({ isActive }) =>
            isActive ? "active menu-productos-active" : ""
          }
        >
          Compuestos
          <img src={iconPlus} className="link-plus" />
        </NavLink>
      </div>
    </div>
  );
};

export default MenuProductos;
