import React, { useEffect } from "react";

import img from "../assets/home/homeLumber1.png";
import img1 from "../assets/home/homeLumber2.png";
import lumberPlusLogo from "../assets/home/lumberPlusLogo.png";

/*aNIMACIONES */
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeLumber = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Duración de la animación en milisegundos

    });

  }, []);
  return (
    <section className="Home-lumber">
      <div className="home-lumber--container">
        <div data-aos="fade-right" data-aos-delay="300" className="lumber-container--imagenes">
          <div className="lumber-imagenes">
            <img src={img} className="lumber-img" />
          </div>
          <div className="lumber-imagenes">
            <img src={img1} className="lumber-img" />
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="300" className="lumber-textos">
         <img src={lumberPlusLogo} className="lumberPlusLogo" />
          <p>
            Lumber + es una marca estadounidense de
            gran prestigio en el mercado, dedicada a la
            fabricación y distribución de madera
            decorativa de la más alta calidad. Sus
            productos se distinguen por su excepcional
            durabilidad, resistencia al moho y la
            descomposición, así como por su
            compromiso con la sostenibilidad
            ambiental. Su misión es empoderar a
            propietarios, constructores, arquitectos y
            diseñadores proporcionando madera
            decorativa de la más alta calidad.
          </p>
        </div>
      </div>
      <div className="lumber-footer">
        <div className="lumber-footer--container">
          <p>Tus espacios decorados con la madera de la más alta calidad,
            con una acabado elegante y resistencia inigualable.</p>

        </div>

      </div>
    </section>
  );
};

export default HomeLumber;
