import React from 'react';
import { NavLink } from 'react-router-dom';

/*Imagenes */
import imgFooter1 from '../assets/home/maderaLogoBlanco.png'
import imgFooter2 from '../assets/home/lumberPlusLogoBlanco.png'

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
                        <h2 className="items-one">Inicio</h2>

                    </div>
                    <div className='footer-sections'>
                        <h2 className="items-one">Sobre Nosotros</h2>

                    </div>

                    <div className='footer-sections'>
                        <h2 className="items-one">Productos</h2>
                        <ul>
                            <li> <NavLink className='footer-items'>Maderas Tropicales</NavLink></li>
                            <li> <NavLink className='footer-items'>Thermawood</NavLink></li>
                            <li> <NavLink className='footer-items'>Compustos</NavLink></li>
                        </ul>

                    </div>
                    <div className='footer-sections'>
                        <h2 className="items-one"> Subcategoria</h2>
                        <ul>
                            <li> <NavLink className='footer-items'>Norx</NavLink></li>
                            <li> <NavLink className='footer-items'>Camaru</NavLink></li>
                            <li> <NavLink className='footer-items'>Ash</NavLink></li>
                            <li> <NavLink className='footer-items'>Ayous</NavLink></li>
                            <li> <NavLink className='footer-items'>Pine</NavLink></li>
                            <li> <NavLink className='footer-items'>Ipe</NavLink></li>
                        </ul>

                    </div>
                    <div className='footer-sections'>
                        <h2 className="items-one">Contacto</h2>
                        <ul>
                            <li> <NavLink className='footer-items'>809-999-9999</NavLink></li>
                            <li> <NavLink className='footer-items'> info@madeiratech.do</NavLink></li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
