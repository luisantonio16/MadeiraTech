import React, { useState } from 'react';

/*Sub Categorias Css*/
import '../Css/subCategorias.css'

/*Imagenes*/
import heart from "../assets/norxSubCategoria/Heart_Norx.png"
import heart1 from "../assets/norxSubCategoria/settings_Norx.png"
import heart2 from "../assets/norxSubCategoria/recycle_norx.png"
import heart3 from "../assets/norxSubCategoria/Scales_norx.png"
import ashMadera from "../assets/norxSubCategoria/ASH/madera_Ash.png"

import arrow from '../assets/norxSubCategoria/arrow.png'
import norx1 from '../assets/norxSubCategoria/revestimientos.png'
import norx2 from '../assets/norxSubCategoria/colores.png'


import { NavLink } from 'react-router-dom';
import Footer from '../Layouts/Footer';


const Norx = () => {

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
                        <div className='sub-categorias-imagen'>
                            {/* <img src={aboutimgTitulo} className='img-titulo' /> */}
                        </div>
                        <div className='sub-categorias--linea'></div>

                    </section>
                    <div className='sub-categorias--titulo'>
                        <h2 >NORX</h2>
                        <h3>Compuestos</h3>
                    </div>
                </section>

            </div>

            <section className='sub-categorias--informacion'>
                <div className="design-container">
                    <div >
                       <img className="wood-image-Ash" src={ashMadera}  />
                    </div>

                    <div className="circle circle-left">
                        <div className='circle-imagenes'>
                            <img src={heart} alt="" />
                        </div>
                        <p className='circle-texto-left'>Vida útil más de 50 años.</p>
                    </div>
                    <div className="circle circle-right">
                        <div className='circle-imagenes'>
                            <img src={heart2} alt="" />
                        </div>
                        <p>95% material reciclado.</p>
                    </div>
                    <div className="circle circle-bottom-left">
                       
                        <div className='circle-imagenes'>
                            <img src={heart1} alt="" />
                        </div>
                        <p>Mínimo Mantenimiento.</p>
                    </div>
                    <div className="circle circle-bottom-right">
                        <div className='circle-imagenes'>
                            <img src={heart3} alt="" />
                        </div>
                        <p>Alta estabilidad.</p>
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
                                    <h2>Disponibilidad</h2>
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
                        <p>Tienen el aspecto y el tacto de la madera
                            tradicional, pero con la resistencia, longevidad y
                            sostenibilidad adicionales de un material
                            compuesto. Material resistente al moho, manchas,
                            rayones, podredumbre, grietas y mucho.
                            Nuestra plataforma compuesta es lo suficientemente
                            fuerte como para soportar todo lo que
                            su vida al aire libre le depare. Estos es tan compuestos
                            de 95% de material reciclado.</p>

                    </div>


                </div>
            </section>


            <Footer />

        </section>
    );
}

export default Norx;
