import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Card } from '../../components';
import { ROUTES } from '../../const';
import { getGoods } from '../../actions';
import './style.css';

const CartPage = () => {
  const card = useSelector((state) => state.card.value);
  const goods = useSelector((state) => state.goods.goods);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!goods) {
      dispatch(getGoods());
    }
  }, [dispatch, goods]);

  const cartGoods = goods.filter((product) => card[product.id]);

  return (
    <>
      <Helmet>
        <title>Корзина</title>
      </Helmet>
      <div className="container">
        <h2>Ваша корзина</h2>
        <div className="card">
          {!cartGoods.length && (
            <div>{`Ваша корзина в данный момент пуста`}</div>
          )}
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
                    imageUrl={product.imageUrl}
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
    </>
  );
};

export { CartPage };
