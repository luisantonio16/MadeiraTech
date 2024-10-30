import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Layouts/Footer';


/*css */
import '../Css/compuestos.css'

/*Imagenes */
import madera from '../assets/maderasTropicales/fotoCumaru.png'
import madera1 from '../assets/maderasTropicales/fotoIpe.png'


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
                        <div className='about-us-imagen--Maderas'>
                            {/* <img src={maderasTropicales} className='img-titulo' /> */}
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
                            <p>Los Proyectos construidos con Maderas Tropicales
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
                                <img src={madera} className='subcategoria-imagen' />
                            </div>
                            <div className="subcategorias-texto" data-aos="fade-left">
                                <div className='subcategorias-titulos'>
                                    <h2 className='subcategorias-titulo'>
                                        CUMARÚ
                                    </h2>
                                </div>
                                <div className="subcategorias-texto--info">
                                    <p>
                                    Se considera una madera de alta durabilidad, clasificada como muy resistente a la intemperie y a los ataques de insectos y hongos, lo que la hace ideal para uso exterior, como terrazas y mobiliario de jardín.
                                    </p>

                                    <NavLink to="/maderas-tropicales/cumaru" className='subcategoria-btn'>Saber más</NavLink>
                                </div>
                            </div>
                        </div>


                        <div className="subcategorias-informaciones">
                            <div className="subcategorias-texto" data-aos="fade-right">
                                <div className='subcategorias-titulos'>
                                    <h2 className='subcategorias-titulo'>
                                        Ipé
                                    </h2>
                                </div>
                                <div className="subcategorias-texto--info">
                                    <p>
                                    Madera tropical que se destaca por su resistencia y durabilida. Su color varía de un marrón dorado a un marrón oscuro, a menudo con vetas más oscuras que añaden belleza y carácter.
                                    </p>

                                    <NavLink to='/maderas-tropicales/ipe' className='subcategoria-btn'>Saber más</NavLink>
                                </div>
                            </div>
                            <div className="subcategoria-imagenes" data-aos="fade-left">
                                <img src={madera1} className='subcategoria-imagen' />
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
