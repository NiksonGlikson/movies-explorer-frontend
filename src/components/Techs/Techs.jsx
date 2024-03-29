import React, { forwardRef } from "react";

const Techs = forwardRef((props, ref) => {
  return (
    <section className="techs" id="techs" ref={ref}>
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__technologies">
        <h3 className="techs__name">7 технологий</h3>
        <p className="techs__description">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <nav>
          <ul className="techs__list">
            <li className="techs__item">HTML</li>
            <li className="techs__item">CSS</li>
            <li className="techs__item">JS</li>
            <li className="techs__item">React</li>
            <li className="techs__item">Git</li>
            <li className="techs__item">Express.js</li>
            <li className="techs__item">mongoDB</li>
          </ul>
        </nav>
      </div>
    </section>
  );
});

export default Techs;
