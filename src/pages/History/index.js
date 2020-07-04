import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { getOrder } from '../../actions';
import { Loader, Order } from '../../components';
import { ROUTES } from '../../const';
import './style.css';

const HistoryOrderPage = () => {
  const historyOrder = useSelector((state) => state.order.lastOrders);
  const loading = useSelector((state) => state.order.loading);
  const error = useSelector((state) => state.order.err);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  if (!historyOrder && !loading) {
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
      <h2>История заказов</h2>
      {!historyOrder && <h4>История заказов пуста :(</h4>}
      <div className="history-orders">
        {historyOrder?.map((order) => {
          return (
            <Link key={order.id} to={`${ROUTES.HISTORY}/${order.id}`}>
              <Order order={order} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export { HistoryOrderPage };
