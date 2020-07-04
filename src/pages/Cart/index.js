import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Card } from '../../components';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../const';
import { getGoods } from '../../actions';
import './style.css';

const CartPage = () => {
  const card = useSelector((state) => state.card.value);
  const goods = useSelector((state) => state.goods.goods);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGoods());
  }, [dispatch]);

  const cartGoods = goods.filter((product) => card[product.id]);

  return (
    <div className="container">
      <h2>Ваша корзина</h2>
      <div className="card">
        {!cartGoods.length && <div>{`Ваша корзина в данный момент пуста`}</div>}
        <div className="cart-list">
          {cartGoods.map((product) => {
            return (
              <Link key={product.id} to={`${ROUTES.GOODS}/${product.id}`}>
                <Card
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  country={product.country}
                  countAvailable={product.countAvailable}
                />
              </Link>
            );
          })}
        </div>
      </div>
      {cartGoods.length > 0 && (
        <Link to={ROUTES.CHECKOUT}>
          <button className="cart-btn">Оформить заказ</button>
        </Link>
      )}
    </div>
  );
};

export { CartPage };
