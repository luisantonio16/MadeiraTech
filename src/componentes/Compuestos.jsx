import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Layouts/Footer';

/*css */
import '../Css/compuestos.css'

/*Imagenes */
import headerCompuesto from '../assets/compuestos/compuestoPrincipal.png';
import compuestos from '../assets/compuestos/compustos1.png';


/*ANIMACIONES */
import AOS from 'aos';
import 'aos/dist/aos.css';



const Compuestos = () => {
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
                        <h2 >Compuestos</h2>
                    </div>
                    <div className='header-line'></div>
                </section>

                <section className="header-subcategorias">
                    <div className="header-subcategorias--container">
                        <div className="header-subcategorias--textos">
                            <p>Diseñado para máxima durabilidad, el compuesto resiste la
                                decoloración, las manchas, los arañazos y el moho, no se
                                pudre, agrieta ni deforma.
                            </p>
                        </div>
                        <div className="header-subcategorias-line"></div>
                    </div>

                </section>

                <section className='subcategorias'>
                    <div className="subcategorias-container">
                        <div className="subcategorias-informaciones">
                            <div className="subcategoria-imagenes" data-aos="fade-right">
                                <img src={compuestos} className='subcategoria-imagen' />
                            </div>
                            <div className="subcategorias-texto" data-aos="fade-left">
                                <div className='subcategorias-titulos'>
                                    <h2 className='subcategorias-titulo'>
                                        Norx
                                    </h2>
                                </div>
                                <div className="subcategorias-texto--info">
                                    <p>
                                        Es un compuesto vibrante y
                                        elegante, presenta soluciones
                                        pioneras, que crean una
                                        sensación de cuidado y
                                        delicadeza diseñado para
                                        permitir que el
                                        aire fluya fácilmente entre
                                        revestimientos y vigas.
                                    </p>

                                    <NavLink className='subcategoria-btn'>Saber Mas</NavLink>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
            </div>
            <Footer />
        </section>
    );
}

export default Compuestos;
