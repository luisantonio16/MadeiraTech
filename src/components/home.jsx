import React, { useEffect } from "react";
import SliderHeader from "./sliderHeader";
import { NavLink } from "react-router-dom";
import HomeLumber from "./homeLumber";
import "../Css/style.css";

/*imagnes */
import HomeImg from "../assets/home/logoHome.png";
import imgSection from "../assets/home/home1.png";
import imgCirculoMarron from '../assets/home/circuloMarron.png'
import homeMadera from '../assets/home/homeMadera.png'
import Plus from '../assets/home/plus.png'

/*Componetes */
import Footer from "./Footer";

/*ANIMACIONES */
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 3000, // Duración de la animación en milisegundos

    });

  }, []);


  return (
    <section className="home-main">

      <SliderHeader />

      <section className="home">
        <div className="home-container">
          <div className="home-header" data-aos="zoom-in" data-aos-delay="300">
            <img src={HomeImg} className="header-logo" />
          </div>
          <div className="home-section">
            <div className="home-section--imagen" data-aos="fade-right" data-aos-delay="400">
              <img src={imgSection} className="section-img" />
              <div className="section-img--fondo"></div>
            </div>
            <div className="home-section--texto" data-aos="fade-left" data-aos-delay="400">
              <p>
                Distribuidores de maderas decorativas para el mercado
                dominicano, representantes exclusivos de la prestigiosa marca
                norteamericana lumber+ que combina; calidad, sostenibilidad e
                innovación para embellecer y enriquecer los espacios
                arquitectónicos de nuestros clientes.
              </p>
              <NavLink to="/contacto" className="btn">Contáctanos</NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="home-about" >
        <div className="flex flex-col md:flex-row md:h-[760px]">
          <NavLink to='/maderas-tropicales' className="w-full min-h-72 maderas">
            <div className="gap-6 md:gap-0 h-full flex flex-col justify-between items-center py-12 md:py-24">
              <div className="text-center">
                <h2 className="text-white text-2xl font-bold">Maderas Tropicales</h2>
              </div>
              <div className="flex justify-center items-center text-white bg-[#00000070] w-full h-32 p-6">
                <p>
                  Los Proyectos construidos con Maderas Tropicales se destacan
                  por su calidez, elegancia y frescura inigualable.
                </p>
              </div>
            </div>
          </NavLink>

          <NavLink to='/thermowood' className="w-full min-h-72 thermowood">
            <div className="gap-6 md:gap-0 h-full flex flex-col justify-between items-center py-12 md:py-24">
              <div className="text-center">
                <h2 className="text-white text-2xl font-bold rights-icon">Thermowood</h2>
                <h4>Powered by Novawood Technologies</h4>
                <span className="imagen-subtitulo">Thermo-Modified</span>
              </div>
              <div className="flex justify-center items-center text-white bg-[#00000070] w-full h-32 p-6">
                <p>
                  Diseñado para ofrecer durabilidad,
                  belleza atemporal y sostenibilidad,
                  Thermowood es una madera liviana
                  de fácil instalación, ideal para
                  paredes y techos
                </p>
              </div>
            </div>
          </NavLink>

          <NavLink to='/compuestos' className="w-full min-h-72 compuesto">
            <div className="gap-6 md:gap-0 h-full flex flex-col justify-between items-center py-12 md:py-24">
              <div className="text-center">
                <h2 className="text-white text-2xl font-bold">Compuestos</h2>
              </div>
              <div className="flex justify-center items-center text-white bg-[#00000070] w-full h-32 p-6">
                <p>
                  Máxima durabilidad y resistencia. Nuestros
                  Compuestos NORX son altamente
                  resistentes a las manchas, rayones y al moho,
                  lo que los hace perfectos para fachadas
                  exteriores.
                </p>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="home-about-footer">
          <div className="about-footer">
            <div>
              <h3>Estamos listos para ser tus aliados en tu próximo proyecto 
              arquitectónico</h3>
              {/* <p> Puedes ponerte en contacto con nosotros</p> */}
            </div>
            <div >
              <img src={imgCirculoMarron} className="about-img " />
            </div>
            <div>
              <NavLink to="/contacto" className='about-btn'>Contáctanos</NavLink>
            </div>
          </div>
        </div>
      </section>

      <HomeLumber />

      <section className="section-five">
        <div className="section-five--enlaces">
          <div className="five-enlace-one">
            <NavLink to='/contacto'>
              <img src={Plus} className="five-enlace--imagen" />
              <h2 className="five-enlace-titulo">Techos</h2>

            </NavLink>
          </div>
          <div className="five-enlace-two">
            <NavLink to="/contacto">
              <img src={Plus} className="five-enlace--imagen" />
              <h2 className="five-enlace-titulo">Paredes</h2>

            </NavLink>
          </div>
        </div>
        <div className="section-five--imagen">
          <img src={homeMadera} className="five-imagen" />
        </div>
        <div className="five-enlace-three">
          <NavLink to='/contacto'>
            <img src={Plus} className="five-enlace--imagen" />
            <h2 className="five-enlace-titulo">Pisos</h2>
          </NavLink>

        </div>
      </section>

      <section className="footer-componente">
        <Footer />
      </section>
    </section>
  );
};

export default Home;
