import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

/*Componenetes */
import Footer from '../Layouts/Footer';


/*Imagenes */
import thermowoodRadiata from '../assets/thermowood/foto.png';
import thermowood from '../assets/thermowood/ayou.png'
import thermowood1 from '../assets/thermowood/pino.png'
import thermowood2 from '../assets/thermowood/radiata.png'
import thermowood3 from '../assets/thermowood/ash.png'

/*ANIMACIONES */
import AOS from 'aos';
import 'aos/dist/aos.css';


const ThermowoodRadiata = () => {
    useEffect(()=>{
        AOS.init({
          duration: 2000, // Duración de la animación en milisegundos
    
        });
    
      },[]);

    return (
        <section className='compuestos'>
            <div className="container-compuestos">
                <section className='about-us'>
                    <section className='about-container-titulo'>
                        <div className='about-us-imagen--thermowood'>
                            {/* <img src={thermowoodRadiata} className='img-titulo' /> */}
                        </div>
                        <div className='about-us--linea'></div>

                    </section>
                    <div className='about-titulo'>
                        <h2 >Thermowood</h2>
                        <h4>Thermo-Modified</h4>
                    </div>
                    <div className='header-line'></div>
                </section>

                <section className="header-subcategorias">
                    <div className="header-subcategorias--container">
                        <div className="header-subcategorias--textos">
                            <p>El termotratamiento no utiliza productos químicos, lo que lo convierte en una
                                opción más ecológica en comparación con otros tratamientos de madera.
                            </p>
                        </div>
                        <div className="header-subcategorias-line"></div>
                    </div>

                </section>

                <section className='subcategorias'>
                    <div className="subcategorias-container">
                        <div className="subcategorias-informaciones">
                            <div className="subcategoria-imagenes"  data-aos="fade-right">
                                <img src={thermowood} className='subcategoria-imagen' />
                            </div>
                            <div className="subcategorias-texto" data-aos="fade-left">
                                <div className='subcategorias-titulos'>
                                    <h2 className='subcategorias-titulo'>
                                        AYOUS
                                    </h2>
                                </div>
                                <div className="subcategorias-texto--info">
                                    <p>
                                        Esta madera, reconocida como la reina de los techos, irradia elegancia. Es ligera fácil de instalar y está respaldada por una  vida útil de 25 años de belleza y calidad que perduran.
                                    </p>

                                    <NavLink to='/thermowood/ayous' className='subcategoria-btn'>Saber más</NavLink>
                                </div>
                            </div>
                        </div>


                        <div className="subcategorias-informaciones">
                            <div className="subcategorias-texto"  data-aos="fade-right">
                                <div className='subcategorias-titulos'>
                                    <h2 className='subcategorias-titulo'>
                                        PINO ESCANDINAVO
                                    </h2>
                                </div>
                                <div className="subcategorias-texto--info">
                                    <p>
                                        El Pino Escandinavo es una madera térmicamente modificada que presenta un color beige claro y una textura
                                        en nudos. Es una excelente
                                        opción para áreas con alta
                                        humedad, ya que es resistente
                                        a la putrefacción y al deterioro.
                                    </p>

                                    <NavLink to='/thermowood/pino' className='subcategoria-btn'>Saber más</NavLink>
                                </div>
                            </div>
                            <div className="subcategoria-imagenes"  data-aos="fade-left">
                                <img src={thermowood1} className='subcategoria-imagen' />
                            </div>
                        </div>

                        <div className="subcategorias-informaciones " >
                            <div className="subcategoria-imagenes"  data-aos="fade-right">
                                <img src={thermowood2} className='subcategoria-imagen' />
                            </div>
                            <div className="subcategorias-texto"  data-aos="fade-left">
                                <div className='subcategorias-titulos'>
                                    <h2 className='subcategorias-titulo'>
                                        CLEAR RADIATA
                                    </h2>
                                </div>
                                <div className="subcategorias-texto--info">
                                    <p>
                                       Thermo-Modified (radiata) tiene
                                        una apariencia impecable. Esta
                                        madera es lisa, sin nudos
                                        y visualmente impactante, lo que la
                                        convierte en una excelente opción
                                        para aplicaciones tanto en
                                        interiores como en exteriores.
                                    </p>

                                    <NavLink to='/thermowood/radiata' className='subcategoria-btn'>Saber más</NavLink>
                                </div>
                            </div>
                        </div>


                        <div className="subcategorias-informaciones">
                            <div className="subcategorias-texto"  data-aos="fade-right">
                                <div className='subcategorias-titulos'>
                                    <h2 className='subcategorias-titulo'>
                                        ASH
                                    </h2>
                                </div>
                                <div className="subcategorias-texto--info">
                                    <p>
                                        El arce ceniza (también conocido
                                        como arce blanco, arce de ceniza
                                        o ash tree en ingles) es un árbol
                                        perteneciente al género
                                        Fraxinus, que es parte de la
                                        familia de las oleáceas.
                                    </p>

                                    <NavLink to='/thermowood/ash' className='subcategoria-btn'>Saber más</NavLink>
                                </div>
                            </div>
                            <div className="subcategoria-imagenes"  data-aos="fade-left">
                                <img src={thermowood3} className='subcategoria-imagen' />
                            </div>
                        </div>

                    </div>

                </section>
            </div>
            <Footer />
        </section>
    );
}

export default ThermowoodRadiata;
