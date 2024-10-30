import { NavLink } from "react-router-dom";
import iconPlus from "../assets/plus-naranja.png";
import "../styles/menuProductos.css";

const MenuProductos = () => {
  return (
    <div className="header-menuProductos">
      <div className="menu-Productos">
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
