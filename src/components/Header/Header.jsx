import React from 'react';
import { Link } from 'react-router-dom';
import logoHeader from '../../images/logo.svg';

function Header() {
    return (
        <section className='header'>
            <img className='header__logo' src={logoHeader} alt='логотип'/>
            <Link to='/signup' className='registration__link'>Регистрация</Link>
            <Link to='/signin' className='authorization__link'>Войти</Link>     
        </section>
    )
}

export default Header;