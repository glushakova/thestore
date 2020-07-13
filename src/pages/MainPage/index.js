import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { ROUTES } from '../../const';
import './style.css';

const MainPage = () => {
  return (
    <>
    <Helmet><title>The Store</title></Helmet>
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
    </>
  );
};

export { MainPage };
