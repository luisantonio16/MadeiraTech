import { useState } from 'react';

/*Sub Categorias css*/
import '../styles/subCategorias.css'

/*Imagenes*/
import heart1 from "../assets/norxSubCategoria/ASH/icono_durabilidad.png"
import heart2 from "../assets/norxSubCategoria/ASH/icono_plaga.png"
import heart3 from "../assets/norxSubCategoria/ASH/icono_bajo_niveles _humedad.png"
import ashMadera from "../assets/norxSubCategoria/ASH/madera_Ash.png"
import arrow from '../assets/norxSubCategoria/arrow.png'
import norx1 from '../assets/norxSubCategoria/ayous/tablilla.png'
import norx2 from '../assets/norxSubCategoria/ASH/longitudes_tamaños.png'


import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';


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
                        <div className='sub-categorias-imagen-ash'>
                            {/* <img src={aboutimgTitulo} className='img-titulo' /> */}
                        </div>
                        <div className='sub-categorias--linea'></div>

                    </section>
                    <div className='sub-categorias--titulo'>
                        <h2>Ash</h2>
                        <h3>Thermowood</h3>
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
                           <h2 className='circle-imagen-texto'>+ 25</h2>
                        </div>
                        <p className='circle-texto-left'>Vida útil.</p>
                    </div>
                    <div className="circle circle-right">
                        <div className='circle-imagenes'>
                            <img src={heart2} alt="" />
                        </div>
                        <p>Resistente a las plagas.</p>
                    </div>
                    <div className="circle circle-bottom-left">
                       
                        <div className='circle-imagenes'>
                            <img src={heart1} alt="" />
                        </div>
                        <p>Durabilidad.</p>
                    </div>
                    <div className="circle circle-bottom-right">
                        <div className='circle-imagenes'>
                            <img src={heart3} alt="" />
                        </div>
                        <p>Bajos Niveles de Humedad.</p>
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
                        <p>El arce ceniza (también conocido como arce blanco, arce de ceniza o ash tree en inglés) es un árbol perteneciente al género Fraxinus, que es parte de la familia de las oleáceas. Pueden alcanzar entre 15 a 30 metros de altura. Thermowood Ash es un material esencial en la carpintería, gracias a su increíble durabilidad. El fresno termotratado es una madera dura con un alto número de anillos de crecimiento y presenta una apariencia estética con su textura ondulada y fina, lo que la hace ideal para muebles, pisos y elementos de construcción.</p>

                    </div>


                </div>
            </section>


            <Footer />

        </section>
    );
}

export default Norx;
