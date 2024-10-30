import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

/*Componentes*/
import Header from "../components/header";
import Home from "../components/home";
import Contacto from "../components/contacto";
import AboutUs from "../components/AboutUs";
import MenuProductos from "../components/menuProductos";
import Productos from "../components/Productos";
import Compuestos from "../components/Compuestos";
import MaderasTropicales from "../components/MaderasTropicales";
import ThermowoodRadiata from "../components/ThermowoodRadiata";
import Norx from "../components/Norx";
import IpeMaderasTropicales from "../components/IpeMaderasTropicales";
import CumaruMaderasTropicales from "../components/CumaruMaderasTropicales";
import Ayous from "../components/AyousThermowood";
import Ash from "../components/AshThermowood";
import Pino from "../components/PinoThermowood";
import Radiata from "../components/RadiataThermowood";
import Catalogo from "../components/Catalogo";
import Projects from "../components/Projects";

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
