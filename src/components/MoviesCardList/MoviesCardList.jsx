import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';

function MoviesCardList() {
    return (
        <section className="cards">
            <div className="cards__movies">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
            <div className="cards__mov">
                <button className="cards__button">Еще</button>
            </div>
        </section>
    )
}

export default MoviesCardList;