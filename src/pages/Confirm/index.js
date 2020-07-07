import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../const';
import './style.css';

const ConfirmPage = () => {
  const error = useSelector((state) => state.order.err);

  return error ? (
    <div className="container">
      <h2>Упс, произошла ошибка, попробуйте еще раз</h2>
      <div>
        <Link to={ROUTES.CHECKOUT}>
          <button className="confirm-link-btn">
            Перейти к оформлению заказа
          </button>
        </Link>
        <Link to={ROUTES.GOODS}>
          <button className="confirm-link-btn"> Перейти в каталог</button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="container">
      <h2>Спасибо за ваш заказ!</h2>
      <div className="confirm-info">
        <p>В ближайшее время мы свяжемся с Вами для подтверждение заказа.</p>
        <p>
          Появились вопросы? Наиболее оперативный ответ Вы получите, написав нам
          письмо на email: email@email.email
        </p>
      </div>
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
