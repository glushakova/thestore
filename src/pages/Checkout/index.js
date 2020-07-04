import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';
import { CartOrderInfo } from '../../components';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../const';
import {
  postOrder,
  onChangeName,
  onChangeAddress,
  onChangePhone,
  onChangeComment,
} from '../../actions';

const CheckoutPage = () => {
  const card = useSelector((state) => state.card.value);
  const goods = useSelector((state) => state.goods.goods);
  const fullName = useSelector((state) => state.order.fullName);
  const phone = useSelector((state) => state.order.phone);
  const address = useSelector((state) => state.order.address);
  const comments = useSelector((state) => state.order.comments);
  const dispatch = useDispatch();

  const products = goods
    .filter((product) => card[product.id])
    .map((product) => product);

  return (
    <div className="container">
      <h2>Оформление заказа</h2>
      <div className="checkout">
        <div className="checkout-info">
          <input
            type="text"
            placeholder="Имя"
            autoFocus
            required
            onChange={(event) => dispatch(onChangeName(event.target.value))}
            value={fullName}
          ></input>
          <input
            type="text"
            placeholder="Адрес"
            required
            onChange={(event) => dispatch(onChangeAddress(event.target.value))}
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
            onChange={(event) => dispatch(onChangeComment(event.target.value))}
            value={comments}
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
              postOrder({ address, fullName, phone, comments, products })
            );
          }}
          disabled={!address || !fullName || !phone || products.length === 0}
        >
          Подтвердить заказ
        </button>
      </Link>
    </div>
  );
};

export { CheckoutPage };
