import React from 'react';
import { Link } from 'react-router-dom';
import logoHeader from '../../images/logo.svg';

function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <Link to='/'>
                <img className='header__logo' src={logoHeader} alt='логотип'/>
                </Link>
                    <div className='header__links'>
                        <Link to='/signup' className='registration__link'>Регистрация</Link>
                        <Link to='/signin' className='authorization__link'>Войти</Link>
                    </div>
            </div>  
        </header>
    )
}

export default Header;