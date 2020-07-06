import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { ROUTES } from '../../const';

import './style.css';

const Order = ({ order }) => {
  return (
    <div className="order">
      <div className="order-list">
        <h4>Ваш заказ:</h4>
        {order.id && <h4>{`№${order.id}`}</h4>}
      </div>
      <div>
        <ul className="order-list">
          <li className="order-li--bold">Товар</li>
          <li className="order-li--bold">Итого</li>
        </ul>
        {order.orderProducts.map((orderProduct) => (
          <Link
            key={orderProduct.product.id}
            to={`${ROUTES.GOODS}/${orderProduct.product.id}`}
          >
            <div className="order-table">
              <ul className="order-list">
                <li className="order-li">{`${orderProduct.product.name} x ${orderProduct.count}`}</li>
                <li className="order-li">{`${
                  orderProduct.product.price * orderProduct.count
                }$`}</li>
              </ul>
            </div>
          </Link>
        ))}
        <ul className="order-list">
          <li className="order-li--bold">Итого</li>
          <li className="order-li--bold">{`${order.totalCost}$`}</li>
        </ul>
      </div>
    </div>
  );
};

Order.propTypes = {
  order: PropTypes.object,
  optionalObjectWithShape: PropTypes.shape({
    products: PropTypes.array,
    name: PropTypes.string,
    id: PropTypes.number,
    price: PropTypes.number,
  }),
};

export { Order };
