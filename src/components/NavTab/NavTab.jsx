import React from 'react';

function NavTab() {
    return (
        <section className='navtab'>
            <ul className='navtab__list'>
                <li className='navtab__text'>
                <a
                className='navtab__link'
                href="/"
                >О проекте</a>
                </li>
                <li className='navtab__text'> 
                <a
                className='navtab__link'
                href="/"
                >Технологии</a></li>
                <li className='navtab__text'>
                <a
                className='navtab__link'
                href="/"
                >Студент</a>
                </li>
            </ul>
        </section>
    );
}

export default NavTab;