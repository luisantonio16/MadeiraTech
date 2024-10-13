import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/*Componentes*/
import Header from '../componentes/header';
import Home from '../componentes/home';
import Contacto from '../componentes/contacto';
import AboutUs from '../componentes/AboutUs';
import MenuProductos from '../componentes/menuProductos';
import Productos from '../componentes/Productos';
import Compuestos from '../componentes/Compuestos';
import MaderasTropicales from '../componentes/MaderasTropicales';
import ThermowoodRadiata from '../componentes/ThermowoodRadiata';



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
        <section className='contenedor-principal' id='contenedor-principal'>
          {/* TransitionGroup y CSSTransition para manejar animaciones de ruta */}
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={300} // Duración de la animación
              classNames="fade" // Nombre de las clases CSS para las transiciones
            >
              <Routes location={location}>
                    <Route path='/' element={<Home />} />
                    <Route path='/inicio' element={<Home />} />  
                    <Route path='/contacto' element={<Contacto />} />  
                    <Route path='/about' element={<AboutUs />} />  
                    <Route path='/productos' element={<Productos />} /> 
                    <Route path='/proyectos' element={<Productos />} /> 
                    <Route path='/catalogo' element={<Productos />} /> \
                    <Route path='/compuestos' element={<Compuestos />} /> 
                    <Route path='/maderas-tropicales' element={<MaderasTropicales />} /> 
                    <Route path='/thermowood' element={<ThermowoodRadiata />} /> 
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
}

export default Rutas;
