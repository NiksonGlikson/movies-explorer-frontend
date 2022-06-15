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
                        <p className="portfolio__link">Статичный сайт</p>
                        <a
                         href="https://github.com/NiksonGlikson"
                         target='_blank'
                         rel='noreferrer'>
                        <img className="portfolio__image" src={imgPortfolio} alt="переход по ссылке"></img>
                        </a>
                    </li>
                    <li className="portfolio__item">
                        <p className="portfolio__link">Адаптивный сайт</p>
                        <a
                        href="https://github.com/NiksonGlikson"
                        target='_blank'
                        rel='noreferrer'>
                        <img className="portfolio__image" src={imgPortfolio} alt="переход по ссылке"></img>
                        </a>
                    </li>
                    <li className="portfolio__item">
                        <p className="portfolio__link">Одностраничное приложение</p>
                        <a
                         href="https://github.com/NiksonGlikson"
                         target='_blank'
                         rel='noreferrer'>
                        <img className="portfolio__image" src={imgPortfolio} alt="переход по ссылке"></img>
                        </a>
                    </li>
                </ul>
            </div>
            </div>
        </section>
    )}

export default Portfolio;