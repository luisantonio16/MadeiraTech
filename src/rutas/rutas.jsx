import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

/*Componentes*/
import Header from "../componentes/header";
import Home from "../componentes/home";
import Contacto from "../componentes/contacto";
import AboutUs from "../componentes/AboutUs";
import MenuProductos from "../componentes/menuProductos";
import Productos from "../componentes/Productos";
import Compuestos from "../componentes/Compuestos";
import MaderasTropicales from "../componentes/MaderasTropicales";
import ThermowoodRadiata from "../componentes/ThermowoodRadiata";
import Norx from "../componentes/Norx";
import IpeMaderasTropicales from "../componentes/IpeMaderasTropicales";
import CumaruMaderasTropicales from "../componentes/CumaruMaderasTropicales";
import Ayous from "../componentes/AyousThermowood";
import Ash from "../componentes/AshThermowood";
import Pino from "../componentes/PinoThermowood";
import Radiata from "../componentes/RadiataThermowood";
import Catalogo from "../componentes/Catalogo";
import Projects from "../componentes/Projects";

// El componente que maneja las rutas y las animaciones, con useLocation dentro del contexto correcto
const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    // Cada vez que cambie de ruta, hacer scroll hasta el inicio
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {/* Layouts */}
      <Header />
      <MenuProductos />
      <section className="contenedor-principal" id="contenedor-principal">
        {/* TransitionGroup y CSSTransition para manejar animaciones de ruta */}
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={1000} // Duración de la animación
            classNames="fade-scale" // Nombre de las clases CSS para las transiciones
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/inicio" element={<Home />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/proyectos" element={<Projects />} />
              <Route path="/catalogo" element={<Productos />} /> \
              <Route path="/compuestos" element={<Compuestos />} />
              <Route
                path="/maderas-tropicales"
                element={<MaderasTropicales />}
              />
              <Route path="/thermowood" element={<ThermowoodRadiata />} />
              /*sub categorias */
              <Route path="/compuestos/norx" element={<Norx />} />
              <Route
                path="/maderas-tropicales/ipe"
                element={<IpeMaderasTropicales />}
              />
              <Route
                path="/maderas-tropicales/cumaru"
                element={<CumaruMaderasTropicales />}
              />
              <Route path="/thermowood/ayous" element={<Ayous />} />
              <Route path="/thermowood/ash" element={<Ash />} />
              <Route path="/thermowood/pino" element={<Pino />} />
              <Route path="/thermowood/radiata" element={<Radiata />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </section>
    </>
  );
};

const Rutas = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default Rutas;
