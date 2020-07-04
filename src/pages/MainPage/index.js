import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../const';

const MainPage = () => {
  return (
    <div className="main">
      <div className="main-description">
        <h1 className="main-title">
          Зелень для вашего внутреннего пространства
        </h1>
        <p className="main-text">
          Создайте умиратворяющее убежище у себя дома, добавив зелени в свое
          внутренеее пространство. Известно, что комнатные растения улучшают
          качество воздуха, настроение и снимают стресс
        </p>
        <Link to={ROUTES.GOODS}>
          <button className="main-btn">Перейти в каталог</button>
        </Link>
      </div>
    </div>
  );
};

export { MainPage };
