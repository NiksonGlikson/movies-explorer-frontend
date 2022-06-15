import React from 'react';

function NotFound() {
  return (
    <div className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className='not-found__description'>Страница не найдена</p>
      <button className='not-found__back'>Назад</button>
    </div>
  );
}

export default NotFound;