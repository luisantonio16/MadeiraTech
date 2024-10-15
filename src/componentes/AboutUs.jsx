import React, { useEffect } from 'react';
import Footer from '../Layouts/Footer'

/*Css */
import '../Css/about.css'

/*Imagenes */
import imgCirculo from '../assets/about/circuloAbout.png'
import imgCirculo1 from '../assets/about/circuloAbout1.png'
import imgCirculo2 from '../assets/about/circuloAbout2.png'
import imgCirculo3 from '../assets/about/circuloAbout3.png'
import imgCirculo4 from '../assets/about/circuloFotoAbout.png'
import PuenteValores from '../assets/about/puenteAbout.png'
import cardImagen1 from '../assets/about/graduation.png'
import cardImagen2 from '../assets/about/hand.png'
import cardImagen3 from '../assets/about/scales.png'
import mision from '../assets/about/mision.png'
import vision from '../assets/about/vision.png'
import { NavLink } from 'react-router-dom';


/*ANIMACIONES */
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';



const AboutUs = () => {
    useEffect(()=>{
        AOS.init({
          duration: 2000, // Duración de la animación en milisegundos
    
        });
    
      },[]);


    return (
        <section className='about'>
            <section className='about-us'>
                <section className='about-container-titulo'>
                    <div className='about-us-imagen'>
                        {/* <img src={aboutimgTitulo} className='img-titulo' /> */}
                    </div>
                    <div className='about-us--linea'></div>

                </section>
                <div className='about-titulo'>
                    <h2 >Sobre Nosotros</h2>
                </div>
            </section>

            <section className='about-container-informacion'>
                <section className='about-container'>
                    <div className='about-info'>
                        <p> Contamos con el inventario de maderas decorativas mas
                            imortante en el mercado dominicano, orgullosos
                            representantes exclusivos de la renombrada marca
                            norteamericana Lumber+. Nuestros productos combinan
                            calidad, sostenibilidad e innovación, proporcionando
                            soluciones únicas y elegantes para embellecer y
                            enriquecer los espacios arquitectónicos de nuestros
                            clientes.</p>
                    </div>
                    <div className='about-info'>
                        <p> Nada como la madera natural para lograr un impacto
                            unico. Nuestro compromise es ofrecer las mejores
                            especies con terminacion de primera, siempre
                            observando las mejores practicas de sostenibilidad y
                            respeto al medio ambiente.</p>
                    </div>

                </section>
            </section>

            <section className='about-info-imagenes'>
                <div className='about-imagenes '>
                    <div className='about-imagens animate__animated animate__pulse animate__infinite'>
                        <img src={imgCirculo} className='about-imagen '  />
                    </div>
                    <div className='about-imagens animate__animated animate__pulse animate__infinite'>
                        <img src={imgCirculo1} className='about-imagen' />
                    </div>
                    <div className='about-imagens animate__animated animate__pulse animate__infinite'>
                        <img src={imgCirculo2} className='about-imagen' />
                    </div>
                    <div className='about-imagens animate__animated animate__pulse animate__infinite'>
                        <img src={imgCirculo3} className='about-imagen' />
                    </div>
                </div>

            </section>

            <section className="about-mision">
                <div className="mision-container">
                    <div className="mision"  data-aos="zoom-in">
                        <div className='mision-info'>
                            <h2>Misión</h2>
                            <p> Proveer soluciones de madera decorativa y
                                derivados en la Republica Dominicana,
                                combinando calidad, responsablidad con el
                                medio ambiente e innovación para
                                embellecer y enriquecer los proyectos
                                arquitectócos de nuestros clientes,
                                superando sus expectativas, así como las de
                                nuestros directores y accionista, a través de
                                un servicio personalizado y profesional.</p>
                        </div>

                        <div className='mision-imagenes'>
                            <img src={mision} className='mision-img' />
                        </div>

                    </div>
                    <div className="mision"  data-aos="zoom-in">
                        <div className='mision-imagenes'>
                            <img src={vision} className='vision-img' />
                        </div>

                        <div className='mision-info'>
                            <h2>Visión</h2>
                            <p> Ser la empresa de distribución líder en
                                materiales de construcción en República
                                Dominicana y el Caribe, destacándonos por la exelencia
                                 de nuestros productos, los más
                                altos estándares de calidad, un firme
                                compromiso con la sostenibilidad y una
                                constante innovación. Buscamos establecer relaciones duraderas con nuestros clientes y socios comerciales,
                                 consolidando nuestra reputación como referentes en el sector.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-valores">
                <img src={PuenteValores} alt="" />
            </section>

            <section className="about-cards">
                <div className="about-card--container">
                    <div className="about-card-one">
                        <div className="about-card" data-aos="fade-up"
                                         data-aos-anchor-placement="top-center">
                            <div className="about-card-imagen">
                                <img src={cardImagen1} className='about-card--img' />
                            </div>
                            <div className="about-card-info">
                                <h2>Compromiso</h2>
                                <p> Compromiso inquebrantable
                                    con la excelencia en todos
                                    nuestros productos y servicios.</p>

                            </div>
                        </div>

                    </div>
                    <div className="cards">
                        <div className="about-card" data-aos="fade-up"
                               data-aos-anchor-placement="top-center">
                            <div className="about-card-imagen">
                                <img src={cardImagen2} className='about-card--img' />
                            </div>
                            <div className="about-card-info">
                                <h2>Resposabilidad</h2>
                                <p> Responsabilidad ambiental en la seleccion y manejo
                                    de nuestros recursos, promoviendo practicas sostenibles en
                                    toda la cadena de suministro.</p>

                            </div>
                        </div>
                        <div className="about-card" data-aos="fade-up"
                               data-aos-anchor-placement="top-center">
                            <div className="about-card-img">
                                <img src={cardImagen3} className='about-card--img' />
                            </div>
                            <div className="about-card-info">
                                <h2>Integridad</h2>
                                <p> Conducta
                                    ética y transparente en todas nuestras
                                    operaciones y relaciones comerciales.</p>

                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <section className="section-about--contact">
                <div className='about-contact-fondo'>
                    <div className="about-contact--imagen">
                        <img src={imgCirculo4} className='about-contact--img' />
                    </div>
                </div>

                <div className='about-contact--button'>
                    <NavLink to='/contacto' className='about-contact--btn'>Contactanos</NavLink>
                </div>


            </section>

        <Footer />
        </section>

    );
}

export default AboutUs;
