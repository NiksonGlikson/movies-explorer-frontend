import React from 'react';
import cardImg from '../../images/Benksi.jpg';
import likeImg from '../../images/like.svg';

function MoviesCard() {
    return (
        <div className="movies-card">
            <div className="movies-card__info">
                <img className='movies-card__image' src={cardImg} alt='Фото-фрагмент фильма' />
                <div className="movies-card__description">
                    <h2 className="movies-card__title">В погоне за Бенкси</h2>
                    <img className='movies-card__like' src={likeImg} alt='Лайк' />
                </div>
                <p className="movies-card__duration">1ч42м</p>
            </div>
        </div>
    )
}

export default MoviesCard;