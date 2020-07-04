import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getGoods } from '../../actions';
import { Order } from '../../components';

export const CartOrderInfo = () => {
  const card = useSelector((state) => state.card.value);
  const goods = useSelector((state) => state.goods.goods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoods());
  }, [dispatch]);

  let totalCost = goods
    .filter((product) => card[product.id])
    .reduce((sum, product) => {
      return sum + product.price * card[product.id];
    }, 0);

  return (
    <Order
      order={{
        totalCost: totalCost,
        orderProducts: goods
          .filter((product) => card[product.id])
          .map((product) => ({ count: card[product.id], product })),
      }}
    />
  );
};
