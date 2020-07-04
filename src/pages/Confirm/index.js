import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../const';
import './style.css';

const ConfirmPage = () => {
  return (
    <div className="container">
      <h2>Спасибо за ваш заказ!</h2>
      <div className="confirm-info">
        <p>В ближайшее время мы свяжемся с Вами для подтверждение заказа.</p>
        <p>
          Появились вопросы? Наиболее оперативный ответ Вы получите, написав нам
          письмо на email: email@email.email
        </p>
      </div>
      {/* <h3>{`№ заказа: ${1 + 1}`}</h3> */}
      <div>
        <Link to={ROUTES.MAIN}>
          <button className="confirm-link-btn">Перейти на главную</button>
        </Link>
        <Link to={ROUTES.GOODS}>
          <button className="confirm-link-btn"> Перейти в каталог</button>
        </Link>
      </div>
    </div>
  );
};

export { ConfirmPage };
