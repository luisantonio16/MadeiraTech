import React, { useState } from 'react';


/*Sub Categorias Css*/
import '../Css/subCategorias.css'

/*Imagenes*/
import heart from "../assets/norxSubCategoria/ayous/icono_organico.png"
import heart1 from "../assets/norxSubCategoria/ayous/icono_mantenimiento.png"
import heart2 from "../assets/norxSubCategoria/ayous/icono_humedad.png"
import heart3 from "../assets/norxSubCategoria/ayous/icono_sostenible.png"
import heart5 from "../assets/norxSubCategoria/ayous/ESTABILIDAD.png"
import ayousMadera from "../assets/norxSubCategoria/radiata/maderaRadiata.png"

import arrow from '../assets/norxSubCategoria/arrow.png'
import norx1 from '../assets/norxSubCategoria/ayous/tablilla.png'


import { NavLink } from 'react-router-dom';
import Footer from '../Layouts/Footer';


const RadiataThermowood = () => {
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
                    <h2>Radiata</h2>
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
                    <div className='circle-imagenes'>
                        <h2 className='circle-imagen-texto'>+ 25</h2>
                    </div>
                    <p className='circle-texto-left'>vida Util.</p>
          
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
                    </div>
                </div>
                <div className="sub-categorias-texto">
                    <h2>Características Principales</h2>
                    <p>La madera termomodificada Radiata es lisa y tiene una apariencia impecable. Esta madera es sin nudos y visualmente impactante, lo que la convierte en una excelente opción para aplicaciones tanto en interiores como en exteriores. Su acabado refinado agrega un toque de elegancia a cualquier proyecto, desde ambientes exteriores hasta revestimientos de paredes y techos interiores. Este producto de vanguardia combina la belleza natural de la madera con tecnología avanzada, ofreciendo una durabilidad inigualable, resistencia a las inclemencias del tiempo y protección contra termitas.</p>

                </div>


            </div>
        </section>


        <Footer />

    </section>
    );
}

export default RadiataThermowood;
