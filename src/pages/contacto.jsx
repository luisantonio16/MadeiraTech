import "../styles/contacto.css";

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
                            <input type="text" placeholder='Nombre*' name="nombre" className='inpunts' />
                        </div>
                        <div className='form-inpunts'>
                            <input type="text" placeholder='Apellidos*' name="apellido" className='inpunts' />
                        </div>
                        <div className='form-inpunts'>
                            <input type="text" placeholder='Teléfono*' name="telefono" className='inpunts' />
                        </div>

                        <div className='form-inpunts'>
                            <input type="text" placeholder='Correo*' className='inpunts' />
                        </div>
                        <div className='form-inpunts'>
                            <select  className='inpunts'>
                                <option name="profesion"  value="someOption">Profesión</option>
                                <option name="profesion"  value="otherOption">Arquitecto</option>
                                <option name="profesion"  value="otherOption">Ingeniero Civil</option>
                                <option name="profesion"  value="otherOption">Gerente de Construcción</option>
                                <option name="profesion"  value="otherOption">Diseñador de Interiores</option>
                                <option name="profesion"  value="otherOption">Decorador de Interiores</option>
                                <option name="profesion"  value="otherOption">Contratista General</option>
                                <option name="profesion"  value="otherOption">Artista de la Madera</option>
                                <option name="profesion"  value="otherOption">Dueño de inmuebles</option>
                                <option name="profesion"  value="otherOption">Otro</option>
                            </select>
                        </div>

                        <div className='form-inpunts'>
                            <select  className='inpunts'>
                                <option name="ubicacion"  value="someOption">Ubicación</option>
                                <option name="ubicacion"  value="otherOption">Región Norte</option>
                                <option name="ubicacion"  value="otherOption">Región Este</option>
                                <option name="ubicacion"  value="otherOption">Región Sur</option>
                                <option name="ubicacion"  value="otherOption">Distrito Nacional</option>
                                <option name="ubicacion"  value="otherOption">Santo Domingo</option>
                                <option  name="ubicacion" value="otherOption">Internacional</option>
                                <option name="ubicacion"  value="otherOption">Otro</option>
                            </select>
                        </div>
                        <div className='form-inpunts'>
                            <select  className='inpunts'>
                                <option name="aplicacion"  value="someOption">Aplicación</option>
                                <option name="aplicacion" value="otherOption">Pisos de Terraza</option>
                                <option name="aplicacion" value="otherOption">Mobiliario</option>
                                <option name="aplicacion" value="otherOption">Estructural</option>
                                <option name="aplicacion" value="otherOption">Fachada</option>
                                <option name="aplicacion" value="otherOption">Puertas</option>
                                <option name="aplicacion" value="otherOption">Revestimientos Interiores</option>
                                <option name="aplicacion" value="otherOption">Pasarelas o Pavimento exterior</option>
                                <option name="aplicacion" value="otherOption">Otro</option>
                            </select>
                        </div>

                        <div className='form-select'>
                            <select  className='select'>
                                <option name="tipoProyecto" value="someOption">Tipo Proyecto</option>
                                <option name="tipoProyecto" value="otherOption">Proyecto Comercial Retail</option>
                                <option name="tipoProyecto" value="otherOption">Proyecto inmobiliario Residencial</option>
                                <option name="tipoProyecto" value="otherOption">Proyecto Público </option>
                                <option name="tipoProyecto" value="otherOption">Proyecto de remodelación </option>
                                <option name="tipoProyecto" value="otherOption">Proyecto turístico </option>
                                <option name="tipoProyecto" value="otherOption">Otro</option>
                            </select>
                            <select  className='select'>
                                <option name="tiempoProyecto" value="someOption">Tiempo Proyecto</option>
                                <option name="tiempoProyecto" value="otherOption">Planificación y Conceptualización</option>
                                <option name="tiempoProyecto" value="otherOption">Reconstrucción</option>
                                <option name="tiempoProyecto" value="otherOption">Construcción en Progreso</option>
                                <option name="tiempoProyecto" value="otherOption">Diseño</option>
                            </select>
                            <select  className='select'>
                                <option value="someOption">Pies cuadrados de proyecto</option>
                                <option value="otherOption">5-15 m2</option>
                                <option value="otherOption">15-30 m2</option>
                                <option value="otherOption">30 m2 o mas</option>
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
