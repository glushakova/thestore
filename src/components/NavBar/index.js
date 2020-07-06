import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import logo from './logo.svg';
import cart from './cart.svg';
import search from './search.svg';
import log_out from './log_out.svg';

import { ROUTES } from '../../const';
import { autoSignIn, signOut } from '../../actions/';

import './style.css';

const NavBar = () => {
  const token = localStorage.getItem('token');

  const history = useHistory();
  const toMainPage = () => {
    history.push('/main');
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      const decoded = jwt_decode(token);
      dispatch(autoSignIn({ decoded }));
    }
  }, [token, dispatch]);

  const user = useSelector((state) => state.auth.user);
  const card = useSelector((state) => state.card.value);
  const goods = useSelector((state) => state.goods.goods);
  const value = useSelector((state) => state.card.value);

  const amount = goods
    .filter((product) => card[product.id])
    .map((product) => value[product.id])
    .reduce((sum, amount) => {
      return sum + amount;
    }, 0);

  return (
    <nav className="navbar">
      <div className="navbar-elem-flex">
        <Link className="navbar-elem" to={ROUTES.GOODS}>
          Домашние растения
        </Link>
      </div>
      <Link to={ROUTES.MAIN}>
        <img className="img" src={logo} alt="logo" />
      </Link>
      <div className="navbar-elem-flex">
        <Link className="navbar-elem" to={ROUTES.SEARCH}>
          <img src={search} alt="search" />
        </Link>
        <Link
          className={amount > 0 ? 'navbar-elem navbar-card' : 'navbar-elem'}
          to={ROUTES.CART}
        >
          <img src={cart} alt="cart" />
          {amount > 0 && <div className="navbar-card-elem">{amount}</div>}
        </Link>
        {!user ? (
          <Link className="navbar-elem" to={ROUTES.SIGNIN}>
            Вход
          </Link>
        ) : (
          <>
            <button
              className="button"
              onClick={() => {
                dispatch(signOut());
                toMainPage();
              }}
            >
              <img src={log_out} alt="log out" />
            </button>
            <Link className="navbar-elem" to={ROUTES.HISTORY}>
              {user.firstName}
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export { NavBar };
