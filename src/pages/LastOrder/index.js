import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { getOneOrder } from '../../actions';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../const';
import { Card, Loader } from '../../components';
import '../Cart/style.css';

const LastOrderPage = (props) => {
  const lastOrder = useSelector((state) => state.order.oneLastOrder);
  const loading = useSelector((state) => state.order.loading);
  const error = useSelector((state) => state.order.err);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneOrder(props.match.params.index));
  }, [props.match.params.index, dispatch]);

  if (!lastOrder && !loading) {
    return (
      <div className="container">
        <div>{`Ошибка: ${error}`}</div>
      </div>
    );
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <h2>{`Прошлый заказ № ${lastOrder.id}`}</h2>
      <div className="card">
        <div className="cart-list">
          {lastOrder?.orderProducts.map((order) => {
            return (
              <Link
                key={order.product.id}
                to={`${ROUTES.GOODS}/${order.product.id}`}
              >
                <Card
                  id={order.product.id}
                  name={order.product.name}
                  price={order.product.price}
                  country={order.product.country}
                  countAvailable={order.product.countAvailable}
                  count={order.count}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <h3>{`Итоговая сумма: ${lastOrder.totalCost}$`}</h3>
    </div>
  );
};

LastOrderPage.propTypes = {
  match: PropTypes.object,
};

export { LastOrderPage };
