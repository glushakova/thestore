import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../const';
import { getOrder } from '../../actions';
import './style.css';

const ProfilePage = () => {
  const user = useSelector((state) => state.auth.user);
  const order = useSelector((state) => state.order.lastOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Профиль</title>
      </Helmet>
      <div className="container">
        <h2>Профиль</h2>
        <div className="profile">
          <ul className="profile-list">
            <li className="profile-info">Имя</li>
            <li className="profile-info">{user.firstName}</li>
          </ul>
          <ul className="profile-list">
            <li className="profile-info">Фамилия</li>
            <li className="profile-info">{user.lastName}</li>
          </ul>
          <ul className="profile-list">
            <li className="profile-info">Почта</li>
            <li className="profile-info">{user.email}</li>
          </ul>
          <ul className="profile-list">
            <li className="profile-info">Количество заказов</li>
            <li className="profile-info">{order?.length}</li>
          </ul>
        </div>
        <div>
          <Link to={ROUTES.HISTORY}>
            <button>Посмотреть историю заказов</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export { ProfilePage };
