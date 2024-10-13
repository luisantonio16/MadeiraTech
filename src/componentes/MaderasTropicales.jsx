import React, { useEffect } from 'react';

/*css */
import '../Css/compuestos.css'

/*Imagenes */
import headerCompuesto from '../assets/about/tituloAbout.png';
import infoImg from '../assets/SliderHome/sh8.jpg'
import { NavLink } from 'react-router-dom';
import Footer from '../Layouts/Footer';


/*ANIMACIONES */
import AOS from 'aos';
import 'aos/dist/aos.css';


const MaderasTropicales = () => {
    useEffect(()=>{
        AOS.init({
          duration: 3000, // Duración de la animación en milisegundos
    
        });
    
      },[]);

    return (
        <section className='compuestos'>
            <div className="container-compuestos">
                <section className='about-us'>
                    <section className='about-container-titulo'>
                        <div className='about-us-imagen'>
                            <img src={headerCompuesto} className='img-titulo' />
                        </div>
                        <div className='about-us--linea'></div>

                    </section>
                    <div className='about-titulo'>
                        <h2 >Maderas Tropicales</h2>
                    </div>
                    <div className='header-line'></div>
                </section>

                <section className="header-subcategorias">
                    <div className="header-subcategorias--container">
                        <div className="header-subcategorias--textos">
                            <p>Los Proyectos construidos con maderas tropicales
                                se destacan por su calidez, elegancia y
                                frescura inigualable.
                            </p>
                        </div>
                        <div className="header-subcategorias-line"></div>
                    </div>

                </section>

                <section className='subcategorias'>
                    <div className="subcategorias-container">
                        <div className="subcategorias-informaciones">
                            <div className="subcategoria-imagenes" data-aos="fade-right">
                                <img src={infoImg} className='subcategoria-imagen' />
                            </div>
                            <div className="subcategorias-texto" data-aos="fade-left">
                                <div className='subcategorias-titulos'>
                                    <h2 className='subcategorias-titulo'>
                                        CUMARU MADERA TROPICALES
                                    </h2>
                                </div>
                                <div className="subcategorias-texto--info">
                                    <p>
                                        Toda nuestra madera Cumaru
                                        está meticulosamente clasificada,
                                        seleccionada a mano y S4S E4E
                                        (Cepillada en 4 lados y con bordes
                                        suavizados en 4 lados)para un
                                        acabado suave y pulido.
                                    </p>

                                    <NavLink className='subcategoria-btn'>Saber Mas</NavLink>
                                </div>
                            </div>
                        </div>


                        <div className="subcategorias-informaciones">
                            <div className="subcategorias-texto" data-aos="fade-right">
                                <div className='subcategorias-titulos'>
                                    <h2 className='subcategorias-titulo'>
                                        IPE MADERA TROPICALES
                                    </h2>
                                </div>
                                <div className="subcategorias-texto--info">
                                    <p>
                                        Toda nuestra madera dura
                                        Ipe está meticulosamente
                                        clasificada, seleccionada a
                                        mano y S4S E4E(acabada
                                        en 4 lados y con bordes
                                        redondeados en 4 lados)
                                        para una terminación suave.
                                    </p>

                                    <NavLink className='subcategoria-btn'>Saber Mas</NavLink>
                                </div>
                            </div>
                            <div className="subcategoria-imagenes" data-aos="fade-left">
                                <img src={infoImg} className='subcategoria-imagen' />
                            </div>
                        </div>

                    </div>

                </section>
            </div>
            <Footer />
        </section>
    );
}

export default MaderasTropicales;
