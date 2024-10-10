import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../componentes/header';
import Home from '../componentes/home';
import Contacto from '../componentes/contacto';
import AboutUs from '../componentes/AboutUs';
import MenuProductos from '../componentes/menuProductos';
import Productos from '../componentes/Productos';


const Rutas = () => {
    return (
        <BrowserRouter> 
        
             {/*Layouts */}
             <Header />
             <MenuProductos />
             <section className='contenedor-principal' id='contenedor-principal'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/inicio' element={<Home />} />  
                    <Route path='/contacto' element={<Contacto />} />  
                    <Route path='/about' element={<AboutUs />} />  
                    <Route path='/productos' element={<Productos />} /> 
                </Routes>
             </section>
        
        </BrowserRouter>
    );
}

export default Rutas;
