import React from 'react';
import searchImg from '../../images/find.svg';
import FilterCheckbox from '../FilterCheckBox/FilterCheckBox';

function SearchForm() {
    return (
        <section className="search-form">
            <div className="search-form__info">
                <form className="search-form__form">
                    <input
                    name='movie'
                    id='movie'
                    type='text'
                    placeholder='Фильм'
                    className="search-form__input"
                    required
                    >
                    </input>
                    <button className="search-form__button" type="submit">
                    <img className='search-form__image' src={searchImg} alt='поиск' />
                    </button>
                    <FilterCheckbox />
                </form>
                <div className="search-form__switch">
                    <button className="search-form__button_switch" type="submit">
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SearchForm;