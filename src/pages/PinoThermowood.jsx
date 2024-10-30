import React, { useState } from 'react';


/*Sub Categorias css*/
import '../css/subCategorias.css'

/*Imagenes*/
import heart from "../assets/norxSubCategoria/ayous/icono_organico.png"
import heart1 from "../assets/norxSubCategoria/ayous/icono_mantenimiento.png"
import heart2 from "../assets/norxSubCategoria/ayous/icono_humedad.png"
import heart3 from "../assets/norxSubCategoria/ayous/icono_sostenible.png"
import heart5 from "../assets/norxSubCategoria/ayous/ESTABILIDAD.png"
import ayousMadera from "../assets/norxSubCategoria/ayous/maderas_ayous.png"

import arrow from '../assets/norxSubCategoria/arrow.png'
import norx1 from '../assets/norxSubCategoria/ayous/tablilla.png'
import norx2 from '../assets/norxSubCategoria/pino/longitudes_tamañoPino.png'


import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';


const PinoThermowood = () => {
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
                    <div className='sub-categorias-imagen-pino'>
                        {/* <img src={aboutimgTitulo} className='img-titulo' /> */}
                    </div>
                    <div className='sub-categorias--linea'></div>

                </section>
                <div className='sub-categorias--titulo'>
                    <h2>PINO ESCANDINAVO</h2>
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
                    <p className='circle-texto-left'>100%  Orgánica</p>
                </div>
                <div className="circle circle-right">
                    <div className='circle-imagenes'>
                        <img src={heart1} alt="" />
                    </div>
                    <p>Minímo mantenimiento.</p>
                </div>
                <div className="circle circle-top">
                    <div className='circle-imagenes'>
                        <h2 className='circle-imagen-texto'>+ 25</h2>
                    </div>
                    <p className='circle-texto-left'>Vida útil.</p>
                    
                </div>
                <div className="circle circle-bottom-left">
                   
                    <div className='circle-imagenes'>
                        <img src={heart3} alt="" />
                    </div>
                    <p>Sostenible</p>
                </div>
                <div className="circle circle-bottom-right">
                    <div className='circle-imagenes'>
                        <img src={heart5} alt="" />
                    </div>
                    <p>Alta estabilidad.</p>
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
                    <p>El Pino Escandinavo es una madera térmicamente modificada que presenta un color beige claro y una textura en nudos. Es una excelente opción para áreas con alta humedad, ya que es resistente a la putrefacción y al deterioro. Perfecta para soluciones contemporáneas o rústicas que prefieren el aspecto natural de la madera. Excelente para revestimientos de paredes y techos.</p>

                </div>


            </div>
        </section>


        <Footer />

    </section>
    );
}

export default PinoThermowood;
