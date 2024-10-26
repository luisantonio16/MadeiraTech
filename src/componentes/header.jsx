import React, { useState } from 'react';
import logoNav from '../assets/home/logoHeader.png'
import iconMenu from '../assets/iconMenu.png'
import iconClose from '../assets/iconClose.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
    return (
        <header className='header'>
            <div className='header-container'>
                <div className='header-logo'>
                    <NavLink to='/inicio'><img src={logoNav} className='logo-nav' /></NavLink>
                    
                </div>
                <div className= {`header-menu  ${menuOpen ? "menu-show" : ""}`}>
                <div className='header-menu-responsive-Logo'>
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
                                <NavLink to='/productos'  className={({isActive})=> isActive ? 'active': 'nav-items'}>
                                    Productos
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

                        </div>
                      
                    </nav>
                </div>
                <div className='header-menu--responsive' onClick={toggleMenu}>
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
