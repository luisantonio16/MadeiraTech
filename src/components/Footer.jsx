import React from 'react';
import { NavLink } from 'react-router-dom';

/*Imagenes */
import imgFooter1 from '../assets/home/maderaLogoBlanco.png'
import imgFooter2 from '../assets/home/lumberPlusLogoBlanco.png'

import imgFooter3 from '../assets/iconoMail.png'
import imgFooter4 from '../assets/iconoWS.png'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer-container'>
                <div className='footer-rows'>
                    <div className='footer-logos'>
                        <img src={imgFooter1} className='footer-logo' />
                        <img src={imgFooter2} className='footer-logo' />
                    </div>
                    <div className='footer-sections'>
                        <NavLink to="/" className="items-one">Inicio</NavLink>

                    </div>
                    <div className='footer-sections'>
                        <NavLink to="about" className="items-one">Sobre Nosotros</NavLink>

                    </div>

                    <div className='footer-sections'>
                        <h2 className="items-one">Productos</h2>
                        <ul>
                            <li> <NavLink to="/maderas-tropicales" className='footer-items'>Maderas Tropicales</NavLink></li>
                            <li> <NavLink to="/thermowood" className='footer-items'>Thermowood
                            </NavLink></li>
                            <li> <NavLink to="/compuestos" className='footer-items'>Compuestos</NavLink></li>
                        </ul>

                    </div>
                    <div className='footer-sections'>
                        <h2 className="items-one"> Subcategorías</h2>
                        <ul>
                            <li> <NavLink to="/compuestos/norx" className='footer-items'>Norx</NavLink></li>
                            <li> <NavLink to="/maderas-tropicales/cumaru" className='footer-items'>Cumarú</NavLink></li>
                            <li> <NavLink to="/thermowood/ash" className='footer-items'>Ash</NavLink></li>
                            <li> <NavLink to="/thermowood/ayous" className='footer-items'>Ayous</NavLink></li>
                            <li> <NavLink to="/thermowood/pino" className='footer-items'>Pino</NavLink></li>
                            <li> <NavLink to="/maderas-tropicales/ipe" className='footer-items'>Ipé</NavLink></li>
                        </ul>

                    </div>
                    <div className='footer-sections'>
                        <h2 className="items-one">Contacto</h2>
                        <ul>
                            <li> <NavLink className='footer-items'><img src={imgFooter4} className='footer-img' /> 809-999-9999</NavLink></li>
                            <li> <NavLink className='footer-items'><img src={imgFooter3} className='footer-img' /> info@madeiratech.do</NavLink></li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
