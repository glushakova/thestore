import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Card, Loader } from '../../components';
import { ROUTES } from '../../const';
import {
  getGoods,
  sortGoodsDecreasing,
  sortGoodsIncreasing,
} from '../../actions';
import './style.css';

const GoodsPage = () => {
  const goods = useSelector((state) => state.goods.goods);
  const loading = useSelector((state) => state.goods.loading);
  const error = useSelector((state) => state.goods.err);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoods());
  }, [dispatch]);

  function sort() {
    let goods = document.getElementsByClassName('goods')[0];
    let selectedValue = goods.options[goods.selectedIndex].value;

    switch (selectedValue) {
      case 'цена по возрастанию':
        dispatch(sortGoodsIncreasing('price'));
        break;
      case 'цена по убыванию':
        dispatch(sortGoodsDecreasing('price'));
        break;
      case 'по имени':
        dispatch(sortGoodsIncreasing('name'));
        break;
      case 'по производителю':
        dispatch(sortGoodsIncreasing('country'));
        break;
      default:
        return;
    }
  }

  if (!goods && !loading) {
    return <div>{`Ошибка: ${error}`}</div>;
  }

  if (loading && !goods) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Каталог домашних растений</title>
      </Helmet>
      <div className="container">
        <h2>Домашние растения</h2>
        <div>
          <select className="goods" onChange={() => sort()}>
            <option disabled selected>
              Сортировать
            </option>
            <option>цена по возрастанию</option>
            <option>цена по убыванию</option>
            <option>по имени</option>
            <option>по производителю</option>
          </select>

          <div className="goods-list">
            {goods?.map((element) => {
              return (
                <Link key={element.id} to={`${ROUTES.GOODS}/${element.id}`}>
                  <Card
                    id={element.id}
                    name={element.name}
                    price={element.price}
                    country={element.country}
                    countAvailable={element.countAvailable}
                    imageUrl={element.imageUrl}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export { GoodsPage };
