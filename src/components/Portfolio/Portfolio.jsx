import React from "react";
import imgPortfolio from "../../images/sterelka.svg";

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__info">
            <div className="portfolio__main">
                <ul className="portfolio__list">
                    <li className="portfolio__item">
                        <a
                        href="https://github.com/NiksonGlikson"
                        className="portfolio__link"
                        target='_blank'
                        rel='noreferrer'>Статичный сайт</a>
                        <img className="portfolio__image" src={imgPortfolio} alt="переход по ссылке"></img>
                    </li>
                    <li className="portfolio__item">
                        <a
                        href="https://github.com/NiksonGlikson"
                        className="portfolio__link"
                        target='_blank'
                        rel='noreferrer'>Адаптивный сайт</a>
                        <img className="portfolio__image" src={imgPortfolio} alt="переход по ссылке"></img>
                    </li>
                    <li className="portfolio__item">
                        <a
                        href="https://github.com/NiksonGlikson"
                        className="portfolio__link"
                        target='_blank'
                        rel='noreferrer' >Одностраничное приложение</a>
                        <img className="portfolio__image" src={imgPortfolio} alt="переход по ссылке"></img>
                    </li>
                </ul>
            </div>
            </div>
        </section>
    )}

export default Portfolio;