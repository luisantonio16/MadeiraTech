import React from 'react';
import "../css/contacto.css";

/*Imagenes*/
import contactImg from '../assets/contact/contact.png'
import Footer from '../components/Footer';

const Contacto = () => {
    return (
        <section className='contacto'>
            <div className='contacto-container'>
                <div className='contacto-imagenes'>
                    <img src={contactImg} className='contact-img' />
                </div>
                <div className='contacto-formulario'>
                    <div>
                        <h2 className='contacto-titulo'>Estamos aquí para
                            asistirte</h2>
                    </div>
                    <form className='form'>
                        <div className='form-inpunts'>
                            <input type="text" placeholder='Nombre*' className='inpunts' />
                        </div>
                        <div className='form-inpunts'>
                            <input type="text" placeholder='Apellidos*' className='inpunts' />
                        </div>
                        <div className='form-inpunts'>
                            <input type="text" placeholder='Teléfono*' className='inpunts' />
                        </div>

                        <div className='form-inpunts'>
                            <input type="text" placeholder='Correo*' className='inpunts' />
                        </div>
                        <div className='form-inpunts'>
                            <select  className='inpunts'>
                                <option value="someOption">Profesión</option>
                                <option value="otherOption">Arquitecto</option>
                                <option value="otherOption">Ingeniero Civil</option>
                                <option value="otherOption">Gerente de Construccion</option>
                                <option value="otherOption">Diseñador de Interiores</option>
                                <option value="otherOption">Decorador de Interiores</option>
                                <option value="otherOption">Contratista General</option>
                                <option value="otherOption">Artista de la Madera</option>
                                <option value="otherOption">Dueño de inmuebles</option>
                                <option value="otherOption">Otro</option>
                            </select>
                        </div>

                        <div className='form-inpunts'>
                            <select  className='inpunts'>
                                <option value="someOption">Ubicación</option>
                                <option value="otherOption">Región Norte</option>
                                <option value="otherOption">Región Este</option>
                                <option value="otherOption">Región Sur</option>
                                <option value="otherOption">Distrito Nacional</option>
                                <option value="otherOption">Santo Domingo</option>
                                <option value="otherOption">Internacional</option>
                                <option value="otherOption">Otro</option>
                            </select>
                        </div>
                        <div className='form-inpunts'>
                            <select  className='inpunts'>
                                <option value="someOption">Aplicación</option>
                                <option value="otherOption">Pisos de Terraza</option>
                                <option value="otherOption">Mobiliario</option>
                                <option value="otherOption">Estructural</option>
                                <option value="otherOption">Fachada</option>
                                <option value="otherOption">Puertas</option>
                                <option value="otherOption">Revestimientos Interiores</option>
                                <option value="otherOption">Pasarelas o Pavimento exterior</option>
                                <option value="otherOption">Otro</option>
                            </select>
                        </div>

                        <div className='form-select'>
                            <select  className='select'>
                                <option value="someOption">Tipo Proyecto</option>
                                <option value="otherOption">Proyecto Comercial Retail</option>
                                <option value="otherOption">Proyecto inmobiliario Residencial</option>
                                <option value="otherOption">Proyecto Público </option>
                                <option value="otherOption">Proyecto de remodelación </option>
                                <option value="otherOption">Proyecto turístico </option>
                                <option value="otherOption">Otro</option>
                            </select>
                            <select  className='select'>
                                <option value="someOption">Tiempo Proyecto</option>
                                <option value="otherOption">Planificación  y Conceptualización</option>
                                <option value="otherOption">Reconstrucción</option>
                                <option value="otherOption">Construcción  en Pogreso</option>
                                <option value="otherOption">Diseño</option>
                            </select>
                            <select  className='select'>
                                <option value="someOption">Pies cuadrados de proyecto</option>
                                <option value="otherOption">5-15 m2</option>
                                <option value="otherOption">15'30 m2</option>
                                <option value="otherOption">30m2 o mas</option>
                            </select>

                        </div>
                        <div className="form-select--textArea">
                            <div>
                                <textarea  className='form-textArea' placeholder='¿Algún detalle de tu proyecto que te gustaría compartir?'></textarea>
                            </div>
                            <div className='form-checkBox'>
                                <span>  <input type="checkbox"  /> Acepto recibir comunicaciones de MaderiaTech y autorizo
                                a que almacenen y procesen mis datos.</span>
                               
                            </div>

                        </div>
                        <div className='form-enviar'>
                            <input type="submit" value="Enviar" className='form-btn' />

                        </div>

                    </form>

                </div>

            </div>

            <Footer />



        </section>
    );
}

export default Contacto;
