import React, { useState } from 'react';


/*Sub Categorias Css*/
import '../Css/subCategorias.css'

/*Imagenes*/
import heart from "../assets/norxSubCategoria/ayous/icono_organico.png"
import heart1 from "../assets/norxSubCategoria/ayous/icono_mantenimiento.png"
import heart2 from "../assets/norxSubCategoria/ayous/icono_humedad.png"
import heart3 from "../assets/norxSubCategoria/ayous/icono_sostenible.png"
import heart5 from "../assets/norxSubCategoria/ayous/ESTABILIDAD.png"
import ayousMadera from "../assets/norxSubCategoria/ayous/maderas_ayous.png"

import arrow from '../assets/norxSubCategoria/arrow.png'
import norx1 from '../assets/norxSubCategoria/ayous/tablilla.png'
import norx2 from '../assets/norxSubCategoria/ayous/longitud_tamaño.png'


import { NavLink } from 'react-router-dom';
import Footer from '../Layouts/Footer';


const IpeMaderasTropicales = () => {
    const [openIndex, setOpenIndex] = useState(null);


    // Función para alternar el estado del acordeón
    const toggleAcordeon = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className='norx-subcategorias'>
        <div className="norx-subcategorias--container">
            <section className='sub-categorias--header'>
                <section className='sub-categorias-titulo'>
                    <div className='sub-categorias-imagen-ayous'>
                        {/* <img src={aboutimgTitulo} className='img-titulo' /> */}
                    </div>
                    <div className='sub-categorias--linea'></div>

                </section>
                <div className='sub-categorias--titulo'>
                    <h2>Ayous</h2>
                    <h3>Thermowood</h3>
                </div>
            </section>

        </div>

        <section className='sub-categorias--informacion'>
            <div className="design-container">
                <div >
                    <img className='wood-image-Ayous' src={ayousMadera} alt="" />
                </div>

                <div className="circle circle-left">
                    <div className='circle-imagenes'>
                        <img src={heart} alt="" />
                    </div>
                    <p className='circle-texto-left'>100% organica</p>
                </div>
                <div className="circle circle-right">
                    <div className='circle-imagenes'>
                        <img src={heart1} alt="" />
                    </div>
                    <p>Minimo Rendimiento.</p>
                </div>
                <div className="circle circle-top">
                <p className='circle-texto-left'>vida Util.</p>
                    <div className='circle-imagenes'>
                        <h2 className='circle-imagen-texto'>+ 25</h2>
                    </div>
                 
                </div>
                <div className="circle circle-bottom-left">
                   
                    <div className='circle-imagenes'>
                        <img src={heart3} alt="" />
                    </div>
                    <p>sostenible</p>
                </div>
                <div className="circle circle-bottom-right">
                    <div className='circle-imagenes'>
                        <img src={heart5} alt="" />
                    </div>
                    <p>Alta Estabilidad.</p>
                </div>
                <div className="circle circle-bottom">
                    <div className='circle-imagenes'>
                        <img src={heart2} alt="" />
                    </div>
                    <p>Rango de humedad</p>
                </div>
            </div>
        </section>
        <section className='sub-categorias-contact'>
            <NavLink to='/contacto' className="contact-button">Contáctanos</NavLink>
        </section>

        <section className="sub-categorias-textos">
            <div className="sub-categorias-textos--container">
                <div className="sub-categorias-acordeon">
                    <div className="arcodeon-container">
                        <div className="acordeon-items">
                            <div className="acordeon-titulos" onClick={() => toggleAcordeon(0)}>
                                <h2>Perfil / Terminaciones</h2>
                                <img src={arrow} alt="" />
                            </div>
                            <div className={`acordeon-informacion ${openIndex === 0 ? 'open' : ''}`}>
                                <div className='acordeon-info'>
                                    <img src={norx1} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="acordeon-items">
                            <div className="acordeon-titulos" onClick={() => toggleAcordeon(1)}>
                                <h2>Longitudes y Tamaños</h2>
                                <img src={arrow} alt="" />
                            </div>
                            <div className={`acordeon-informacion ${openIndex === 1 ? 'open' : ''}`}>
                                <div className='acordeon-info'>
                                    <img src={norx2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-categorias-texto">
                    <h2>Características Principales</h2>
                    <p>Esta madera, reconocida como la reina de los techos, irradia elegancia. ES ligera fácil de instalar y está respaldada por una sustancial vida útil de 25 años de belleza y calidad que perduran.</p>

                </div>


            </div>
        </section>


        <Footer />

    </section>
    );
}

export default IpeMaderasTropicales;