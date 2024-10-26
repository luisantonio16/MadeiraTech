import React, { useState } from 'react';


/*Sub Categorias Css*/
import '../Css/subCategorias.css'

/*Imagenes*/
import heart from "../assets/norxSubCategoria/Heart_Norx.png"
import heart1 from "../assets/norxSubCategoria/virus_ipe.png"
import heart2 from "../assets/norxSubCategoria/storm_ipe.png"
import heart3 from "../assets/norxSubCategoria/lab_cumaru.png"
import heart4 from "../assets/norxSubCategoria/fire_ipe.png"

import arrow from '../assets/norxSubCategoria/arrow.png'
import norx1 from '../assets/norxSubCategoria/etiquetas_cumaru_ipe.png'
import norx2 from '../assets/norxSubCategoria/longituds_IPE_CUMARU.png'


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
                    <div className='sub-categorias-imagen-cumaru'>
                        {/* <img src={aboutimgTitulo} className='img-titulo' /> */}
                    </div>
                    <div className='sub-categorias--linea'></div>

                </section>
                <div className='sub-categorias--titulo'>
                    <h2>CUMARÚ</h2>
                    <h3>Maderas Tropicales</h3>
                </div>
            </section>

        </div>

        <section className='sub-categorias--informacion'>
            <div className="design-container">
                <div className="wood-image-ipe"></div>

                <div className="circle circle-left">
                  
                    <div className='circle-imagenes'>
                        <img src={heart} alt="" />
                    </div>
                    <p className='circle-texto-left'>Vida útil más de 25 años.</p>
                </div>
                <div className="circle circle-right">
                    <div className='circle-imagenes'>
                        <img src={heart1} alt="" />
                    </div>
                    <p>Resistente a los insectos,
                    moho y hongos.</p>
                </div>
                <div className="circle circle-top">
                
                    <div className='circle-imagenes'>
                        <img src={heart4} alt="" />
                    </div>
                    <p className='circle-texto-left'>Resistencia al fuego clase
                                                A, comparado al acero y
                                                hormigón.</p>
                </div>
                <div className="circle circle-bottom-left">
                 
                    <div className='circle-imagenes'>
                        <img src={heart3} alt="" />
                    </div>
                    <p>Resistente a la prutrefacción.</p>
                </div>
                <div className="circle circle-bottom-right">
                    <div className='circle-imagenes'>
                        <img src={heart2} alt="" />
                    </div>
                    <p>Resistente alos cambios
                    climaticos.</p>
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
                    <h2>Caracteristicas Principales</h2>
                    <p>Se considera una madera de alta durabilidad, clasificada como muy resistente a la intemperie y a los ataques de insectos y hongos, lo que la hace ideal para uso exterior, como terrazas y mobiliario de jardín.</p>

                </div>


            </div>
        </section>


        <Footer />

    </section>
    );
}

export default IpeMaderasTropicales;
