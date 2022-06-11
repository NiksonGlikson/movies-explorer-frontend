import React from "react";

function AboutProject() {
    return (
        <section className="about">
            <h2 className="about__title">О проекте</h2>
            <div className="about__description">
                <div className="about__description-item">
                    <h2 className="about__description-title">
                        Дипломный проект включал 5 этапов
                    </h2>
                    <p className="about__description-exp">
                        Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и финальные доработки.
                    </p>
                </div>
                <div className="about__description-item">
                    <h2 className="about__description-title">
                        На выполнение диплома ушло 5 недель
                    </h2>
                    <p className="about__description-exp">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                        соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className="about__duration">
                <ul className="about__duration-description">
                    <li>
                        <h3 className="about__duration-title about__duration-title_green">
                                1 неделя
                        </h3>
                        <p className="about__duration-exp">Back-end</p>
                    </li>
                    <li>
                        <h3 className="about__duration-title about__duration-title_white">
                                4 недели
                        </h3>
                        <p className="about__duration-exp">Front-end</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default AboutProject;
