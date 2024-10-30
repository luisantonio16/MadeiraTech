import { useEffect, useState } from 'react';
import logoNav from '../assets/home/logoHeader.png'
import iconMenu from '../assets/iconMenu.png'
import iconClose from '../assets/iconClose.png'
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(prev => !prev);

    /* when the location changes, close the menu */
    useEffect(() => setMenuOpen(false), [location]);

    return (
        <header className='sticky top-0 z-50 bg-white header'>
            <div className='header-container'>
                <div className='header-logo'>
                    <NavLink to='/inicio'><img src={logoNav} className='logo-nav' /></NavLink>
                </div>
                <div className= {`header-menu  ${menuOpen ? "menu-show" : ""}`}>
                <div className='header-menu-responsive-Logo px-8 py-4'>
                    <img src={logoNav} className='responsive-Logo' />
                </div>
                    <nav className='nav'>
                        <div className='container-nav'>
                            <div className='nav-item'>
                                <NavLink to='/' className={({isActive})=> isActive ? 'active': 'nav-items'} >
                                    Inicio
                                </NavLink>
                            </div>
                            <div className='nav-item'>
                                <NavLink to='/about'  className={({isActive})=> isActive ? 'active': 'nav-items'}>
                                    Sobre nosotros
                                </NavLink>
                            </div>
                            <div className='nav-item'>
                                <NavLink to='/proyectos'  className={({isActive})=> isActive ? 'active': 'nav-items'}>
                                    Proyectos
                                </NavLink>
                            </div>
                            <div className='nav-item'>
                                <NavLink to='/catalogo'  className={({isActive})=> isActive ? 'active': 'nav-items'}>
                                    Catálogo
                                </NavLink>
                            </div>
                            <div className='nav-item'>
                                <NavLink to='/contacto'  className={({isActive})=> isActive ? 'active': 'nav-items'}>
                                    Contacto
                                </NavLink>
                            </div>

                        </div>
                    </nav>
                </div>
                
                <div className='cursor-pointer absolute top-15 right-5 z-[99] flex items-center gap-4 md:hidden' onClick={toggleMenu}>
                    <div className='menu-responsive--icon'>
                        <div className={`icon-show ${menuOpen ? 'hide' : 'show'}`}>
                            <img src={iconMenu} className='icon-menu' />
                        </div>
                        <div className={`icon-close ${menuOpen ? 'show' : 'hide'}`}>
                            <img src={iconClose} className='icon-menu'/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
