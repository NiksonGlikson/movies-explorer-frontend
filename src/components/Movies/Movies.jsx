import React from 'react';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';

function Movies() {
    return (
        <main className="movies">
            <SearchForm />
            <MoviesCardList />
        </main>
)}

export default Movies;