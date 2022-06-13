import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import Footer from '../Footer/Footer.jsx';

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
            <button className="cards__button">Еще</button>
            <Footer />
        </section>
    )
}

export default MoviesCardList;