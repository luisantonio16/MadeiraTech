import { useState } from 'react';

/* Sub Categorías css */
import '../styles/subCategorias.css'

/* Imágenes */
import heart from "../assets/norxSubCategoria/Heart_Norx.png"
import heart1 from "../assets/norxSubCategoria/virus_ipe.png"
import heart2 from "../assets/norxSubCategoria/storm_ipe.png"
import heart3 from "../assets/norxSubCategoria/insect_ipe.png"
import heart4 from "../assets/norxSubCategoria/fire_ipe.png"
import ayousMadera from "../assets/norxSubCategoria/ayous/maderas_ayous.png"

import arrow from '../assets/norxSubCategoria/arrow.png'
import norx1 from '../assets/norxSubCategoria/etiquetas_cumaru_ipe.png'
import norx2 from '../assets/norxSubCategoria/longituds_IPE_CUMARU.png'

import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

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
                    <div className='sub-categorias-imagen-ipe'>
                        {/* <img src={aboutimgTitulo} className='img-titulo' /> */}
                    </div>
                    <div className='sub-categorias--linea'></div>

                </section>
                <div className='sub-categorias--titulo'>
                    <h2 >IPÉ</h2>
                    <h3>Maderas Tropicales</h3>
                </div>
            </section>

        </div>

        <section className='sub-categorias--informacion'>
            <div className="design-container">
                <div >
                  <img className='wood-image-ipe' src={ayousMadera} alt="" />
                </div>

                <div className="circle circle-left">
                    <div className='circle-imagenes'>
                        <img src={heart4} alt="" />
                    </div>
                    <p className='circle-texto-left'>Resistencia al fuego clase
                                                A, comparado al acero y
                                                hormigón.</p>
                </div>
                <div className="circle circle-right">
                    <div className='circle-imagenes'>
                        <img src={heart1} alt="" />
                    </div>
                    <p>Resistente al moho y
                    hongos.</p>
                </div>
                <div className="circle circle-top">
                   <div className='circle-imagenes'>
                        <img src={heart} alt="" />
                    </div>
                    <p className='circle-texto-left'>Vida útil más de 50 años.</p>
                </div>
                <div className="circle circle-bottom-left">
                  
                    <div className='circle-imagenes'>
                        <img src={heart3} alt="" />
                    </div>
                    <p>Resistente a las termitas.</p>
                </div>
                <div className="circle circle-bottom-right">
                    
                    <div className='circle-imagenes'>
                        <img src={heart2} alt="" />
                    </div>
                    <p>Resistente a los cambios climáticos, no se deforma.</p>
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
                    <p>Madera tropical que se destaca por su resistencia y durabilida. Su color varía de un marrón dorado a un marrón oscuro, a menudo con vetas más oscuras que añaden belleza y carácter.</p>

                </div>


            </div>
        </section>


        <Footer />

    </section>
    );
}

export default IpeMaderasTropicales;
