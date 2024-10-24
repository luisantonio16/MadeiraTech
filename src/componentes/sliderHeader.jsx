import React from 'react';
import s1 from '../assets/SliderHome/slidehome1.png'
import s2 from '../assets/SliderHome/slidehome2.png'
import s3 from '../assets/SliderHome/slideHome3.jpg'
import s4 from '../assets/SliderHome/slidehome4.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

const SliderHeader = () => {
    return (
        <section className='slider-home-imagen'>
            <Swiper

                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 3000, // 3 segundos
                    disableOnInteraction: false, // Evita que se detenga al interactuar con él
                }}
                speed={2000}
                modules={[Pagination, Autoplay]}
                className="mySwiper imagen-container--slider"
            >
                <SwiperSlide className='slider-container'>
                    <div className='slider-texto'>
                        <h2 className='slider-titulo'>
                            Sobre Nosotros
                        </h2>
                        <p className='slider-parrafo'>
                            Somos los principales distribuidores de maderas decorativas
                            de lujo en el mercado dominicano.
                        </p>
                        <NavLink to='/about' className='slider-btn' >
                            Leer más
                        </NavLink>
                    </div>
                    <img src={s1} className='slider-imagen' />
                </SwiperSlide>
                <SwiperSlide className='slider-container'>
                    <div className='slider-texto'>
                        <h2 className='slider-titulo'>
                            Thermowood
                        </h2>
                        <p className='slider-parrafo'>
                            Tratada térmicamente para ofrecer
                            durabilidad superior, resistencia a la
                            humedad y estabilidad dimensional.

                        </p>
                        <NavLink to='/thermowood' className='slider-btn' >
                            Leer más
                        </NavLink>
                    </div>
                    <img src={s2} className='slider-imagen' />
                </SwiperSlide>
                <SwiperSlide className='slider-container'>
                    <div className='slider-texto'>
                        <h2 className='slider-titulo'>
                            Maderas Tropicales
                        </h2>
                        <p className='slider-parrafo'>
                            Material antiguo y noble, cobra vida en tus
                            espacios. Con la más fina selección y
                            tecnología, nuestras maderas, listas para
                            abrazar tus sueños, aportarán una belleza
                            única que transformará cada rincón.
                        </p>
                        <NavLink to='/maderas-tropicales' className='slider-btn' >
                            Leer más
                        </NavLink>
                    </div>
                    <img src={s3} className='slider-imagen' />
                </SwiperSlide>
                <SwiperSlide className='slider-container'>
                    <div className='slider-texto'>
                        <h2 className='slider-titulo'>
                            Nuestros Aliados
                        </h2>
                        <p className='slider-parrafo'>
                            Comprometidos con la excelencia y la innovación.
                            Juntos, trabajamos para ofrecer soluciones de alta
                            calidad que destacan la belleza y durabilidad de la
                            madera en cada proyecto.
                        </p>
                        <NavLink to='/compuestos' className='slider-btn' >
                            Leer más
                        </NavLink>
                    </div>
                    <img src={s4} className='slider-imagen' />
                </SwiperSlide >
                <SwiperSlide className='slider-container'>
                    <div className='slider-texto'>
                        <h2 className='slider-titulo'>
                            Sobre Nosotros
                        </h2>
                        <p className='slider-parrafo'>
                            Somos los principales distribuidores de maderas decorativas
                            de lujo en el mercado dominicano.
                        </p>
                        <NavLink to='/about' className='slider-btn' >
                            Leer más
                        </NavLink>
                    </div>
                    <img src={s1} className='slider-imagen' />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default SliderHeader;
