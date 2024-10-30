import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

/* Components */
import MenuProductos from "../components/menuProductos";
import Header from "../components/header";

/* Pages */
import Home from "../pages/home";
import Contacto from "../pages/contacto";
import AboutUs from "../pages/AboutUs";
import Productos from "../pages/Productos";
import Compuestos from "../pages/Compuestos";
import MaderasTropicales from "../pages/MaderasTropicales";
import ThermowoodRadiata from "../pages/ThermowoodRadiata";
import Norx from "../pages/Norx";
import IpeMaderasTropicales from "../pages/IpeMaderasTropicales";
import CumaruMaderasTropicales from "../pages/CumaruMaderasTropicales";
import Ayous from "../pages/AyousThermowood";
import Ash from "../pages/AshThermowood";
import Pino from "../pages/PinoThermowood";
import Radiata from "../pages/RadiataThermowood";
import Catalogo from "../pages/Catalogo";
import Projects from "../pages/Projects";
import NotFound from "../pages/NotFound";

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
              <Route path="/compuestos" element={<Compuestos />} />
              <Route
                path="/maderas-tropicales"
                element={<MaderasTropicales />}
              />
              <Route path="/thermowood" element={<ThermowoodRadiata />} />
              {/* sub categorias */}
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

              <Route path="*" element={<NotFound />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </section>
    </>
  );
};

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default RoutesWrapper;
