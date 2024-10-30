import React from 'react';
import Footer from '../Layouts/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';


/*importando el json */
import catalogoJson from '../../public/catalogo.json'


/*css del catalogo */
import '../Css/catalogo.css'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';


// import required modules
import 'swiper/css/effect-coverflow';
import { EffectCards } from 'swiper/modules';
import { NavLink } from 'react-router-dom';


const Catalogo = () => {
  return (
    <section className='catalogo'>
      <section className='catalogo-container'>
        <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
         
        >
           {catalogoJson.map((user) => (
            <div className='catalogo-slider' key={user.id} >
               <SwiperSlide><img src={user.url} className='catalogo-imagenes' /></SwiperSlide>
               <SwiperSlide><NavLink>Descargar catalogo Completo</NavLink></SwiperSlide>
            </div>

        ))}
    
        

        </Swiper>
      </section>
      <section>
        <Footer />
      </section>
    </section>

  );
}

export default Catalogo;
