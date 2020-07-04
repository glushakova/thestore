import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { getOneOrder } from '../../actions';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../const';
import { Card, Loader } from '../../components';
import '../Cart/style.css';

const LastOrderPage = (props) => {
  const lastOrder = useSelector((state) => state.order.oneLastOrder?.products);
  const loading = useSelector((state) => state.order.loading);
  const error = useSelector((state) => state.order.err);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneOrder(props.match.params.index));
  }, [props.match.params.index, dispatch]);

  console.log(props.match.params.index);

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
      <h2>{`Прошлый заказ № ${1 + 14234}`}</h2>
      <div className="card">
        <div className="cart-list">
          {lastOrder?.map((order) => {
            return (
              <Link key={order.id} to={`${ROUTES.GOODS}/${order.id}`}>
                <Card
                  id={order.id}
                  name={order.name}
                  price={order.price}
                  country={order.country}
                  countAvailable={order.countAvailable}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

LastOrderPage.propTypes = {
  match: PropTypes.object,
};

export { LastOrderPage };
