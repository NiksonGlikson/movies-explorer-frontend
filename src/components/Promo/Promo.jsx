import React from 'react';
import promologo from '../../images/promologo.svg';

function Promo() {
    return (
        <section className='promo'>
            <div className='promo__container'>
                <h1 className='promo__title'>
                    Учебный проект студента факультета Веб-разработки.
                </h1>
                <img className='promo__logo' src={promologo} alt='картинка лого' />
            </div>
        </section>
    )
}

export default Promo;