import React from "react";
import studentAvatar from '../../images/ава.jpg';

function AboutMe() {
    return (
        <section className="aboutme">
            <h2 className="aboutme__title">Студент</h2>
            <div className="aboutme__main">
                <div className="aboutme__info">
                <h3 className="aboutme__name">Никита</h3>
                <p className="aboutme__work">Frontend-developer, 30 лет</p>
                <p className="aboutme__description">Родился в Москве. Учился в финансовом институте.
                Начал изучать фронтенд в 2021г.
                10 месяцев изучал веб-разработку в Яндекс.Практикуме.
                Увлекаюсь путешествиями, кино, люблю компьютерные игры, стримы, аниме.
                </p>
                <ul className="aboutme__socials">
                    <li>
                        <a 
                        href="https://vk.com/gemininiko"
                        className="aboutme__link"
                        target='_blank'
                        rel='noreferrer'>Vk</a>
                    </li>
                    <li>
                        <a 
                        href="https://github.com/NiksonGlikson"
                        className="aboutme__link"
                        target='_blank'
                        rel='noreferrer'>GitHub</a>
                    </li>
                </ul>
                </div>
                <div className="aboutme__img">
                <img className='aboutme__avatar' src={studentAvatar} alt='аватар студента' />
                </div>
            </div>
        </section>
)}

export default AboutMe;