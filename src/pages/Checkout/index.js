import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './style.css';
import { CartOrderInfo } from '../../components';
import { ROUTES } from '../../const';
import {
  postOrder,
  onChangeAddress,
  onChangePhone,
  onChangeComment,
} from '../../actions';

const CheckoutPage = () => {
  const card = useSelector((state) => state.card.value);
  const goods = useSelector((state) => state.goods.goods);
  const phone = useSelector((state) => state.order.phone);
  const address = useSelector((state) => state.order.address);
  const comment = useSelector((state) => state.order.comments);
  const fullName = useSelector((state) => state.auth.user?.firstName);
  const dispatch = useDispatch();
  const history = useHistory();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      history.push('/sign-in');
    }
  }, [token, history]);

  const orderProducts = goods
    .filter((product) => card[product.id])
    .map((product) => ({
      count: card[product.id],
      product: { id: product.id },
    }));

  return (
    <>
      <Helmet>
        <title>Оформление заказа</title>
      </Helmet>
      <div className="container">
        <h2>Оформление заказа</h2>
        <div className="checkout">
          <div className="checkout-info">
            <input
              type="text"
              placeholder="Адрес"
              required
              onChange={(event) =>
                dispatch(onChangeAddress(event.target.value))
              }
              value={address}
            ></input>
            <input
              type="text"
              placeholder="Телефон"
              required
              onChange={(event) => dispatch(onChangePhone(event.target.value))}
              value={phone}
            ></input>
            <textarea
              placeholder="Комментарии к заказу"
              rows="5"
              onChange={(event) =>
                dispatch(onChangeComment(event.target.value))
              }
              value={comment}
            ></textarea>
          </div>
          <div className="checkout-info">
            <CartOrderInfo />
          </div>
        </div>
        <Link to={ROUTES.CONFIRM}>
          <button
            className="checkout-btn"
            onClick={() => {
              dispatch(
                postOrder({ address, fullName, phone, comment, orderProducts })
              );
            }}
            disabled={!address || !phone || orderProducts.length === 0}
          >
            Подтвердить заказ
          </button>
        </Link>
      </div>
    </>
  );
};

export { CheckoutPage };
