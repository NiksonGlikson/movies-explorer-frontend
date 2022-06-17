import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logoHeader from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation.jsx';

function Header({ loggedIn }) {
    return (
        <header className='header'>
            <div className='header__container'>
                <Link to='/'>
                    <img className='header__logo' src={logoHeader} alt='логотип'/>
                </Link>
                <Navigation loggedIn={loggedIn} />
            </div>
        </header>
    )
}

export default Header;