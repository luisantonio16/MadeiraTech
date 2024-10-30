import { useState } from 'react';
import Footer from '../components/Footer';
import PdfViewer from '../components/PdfViewer';
import { Swiper, SwiperSlide } from 'swiper/react';

/*importando las imagenes */
import cat1 from '../assets/catalogo/1.png'
import cat2 from '../assets/catalogo/2.jpg'
import cat3 from '../assets/catalogo/3.jpg'
import cat4 from '../assets/catalogo/4.jpg'
import cat5 from '../assets/catalogo/5.jpg'
import cat6 from '../assets/catalogo/6.jpg'
import cat7 from '../assets/catalogo/7.jpg'
import cat8 from '../assets/catalogo/8.jpg'
import cat9 from '../assets/catalogo/9.jpg'
import cat10 from '../assets/catalogo/10.jpg'
import cat11 from '../assets/catalogo/11.jpg'
import cat12 from '../assets/catalogo/12.jpg'
import cat13 from '../assets/catalogo/13.jpg'
import cat14 from '../assets/catalogo/14.jpg'
import cat15 from '../assets/catalogo/15.jpg'



/*css del catalogo */
import '../css/catalogo.css'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';


// import required modules
import 'swiper/css/effect-coverflow';
import { EffectCards } from 'swiper/modules';

const pdfUrl = '../assets/catalogo/catalogoMadeiraTech.pdf';


const Catalogo = () => {
  const [showPdf, setShowPdf] = useState(false);

  const handleClick = () => {
      setShowPdf(true);
  };
  return (
    <section className='catalogo'>
      <section className='catalogo-container'>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >

          <SwiperSlide><img src={cat1} className='catalogo-imagenes' /></SwiperSlide>
          <SwiperSlide><img src={cat2}  className='catalogo-imagenes' /></SwiperSlide>
          <SwiperSlide><img src={cat3} className='catalogo-imagenes' /></SwiperSlide>
          <SwiperSlide><img src={cat4} className='catalogo-imagenes' /></SwiperSlide>
          <SwiperSlide><img src={cat5} className='catalogo-imagenes' /></SwiperSlide>
          <SwiperSlide><img src={cat6} className='catalogo-imagenes' /></SwiperSlide>
          <SwiperSlide><img src={cat7} className='catalogo-imagenes' /></SwiperSlide>
          <SwiperSlide><img src={cat8} className='catalogo-imagenes' /></SwiperSlide>
          <SwiperSlide><img src={cat9} className='catalogo-imagenes' /></SwiperSlide>
          <SwiperSlide><img src={cat10} className='catalogo-imagenes' /></SwiperSlide>
          <SwiperSlide><img src={cat11} className='catalogo-imagenes' /></SwiperSlide>
          <SwiperSlide><img src={cat12} className='catalogo-imagenes' /></SwiperSlide>
          <SwiperSlide><img src={cat13} className='catalogo-imagenes' /></SwiperSlide>
          <SwiperSlide><img src={cat14} className='catalogo-imagenes' /></SwiperSlide>
          <SwiperSlide><img src={cat15} className='catalogo-imagenes' /></SwiperSlide>
          <SwiperSlide className='catalogo-boton'><button onClick={handleClick} className='catalogo-btn'>Vizualizar catalogo Completo</button>
          {showPdf && <PdfViewer pdfUrl={pdfUrl} />}</SwiperSlide>





        </Swiper>
      </section>
      <section>
        <Footer />
      </section>
    </section>

  );
}

export default Catalogo;
