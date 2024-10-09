import React from 'react';
import { Form, NavLink } from 'react-router-dom';
import iconPlus from '../assets/plus-naranja.png'

const MenuProductos = () => {
    return (
        <div className='header-menuProductos'>
            <div className='menu-Productos'>
                <NavLink className='menu-productos--link'>
                    Maderas Tropicales

                    <img src={iconPlus} className='link-plus' />
                   
                </NavLink>
                <NavLink className='menu-productos--link'>
                    Thermowood
                    <img src={iconPlus} className='link-plus' />
                   
                </NavLink>
                <NavLink className='menu-productos--link'>
                    Compuestos
                    <img src={iconPlus} className='link-plus' />
                   
                </NavLink>

            </div>
        </div>
    );
}

export default MenuProductos;