import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Card, Loader } from '../../components';
import { ROUTES } from '../../const';
import { getGoods, setSortParam } from '../../actions';
import './style.css';

const ASC = 'asc';

const PRICE_DECS = 'price_desc';
const PRICE_ASC = 'price_asc';
const NAME_ASC = 'name_asc';
const COUNTRY_ASC = 'country_asc';

const GoodsPage = () => {
  const goods = useSelector((state) => state.goods.goods);
  const sortParam = useSelector((state) => state.goods.sortParam);
  const loading = useSelector((state) => state.goods.loading);
  const error = useSelector((state) => state.goods.err);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoods());
  }, [dispatch]);

  if (!goods && !loading) {
    return <div>{`Ошибка: ${error}`}</div>;
  }

  if (loading && !goods) {
    return <Loader />;
  }

  const [property, direction] = sortParam.split('_');
  const sortedGoods = goods.sort((a, b) => {
    if (a[property] > b[property]) {
      return direction === ASC ? 1 : -1;
    }
    if (a[property] < b[property]) {
      return direction === ASC ? -1 : 1;
    }
    return 0;
  });

  return (
    <>
      <Helmet>
        <title>Каталог домашних растений</title>
      </Helmet>
      <div className="container">
        <h2>Домашние растения</h2>
        <div>
          <label>Сортировать: </label>
          <select
            className="goods"
            onChange={(e) => dispatch(setSortParam(e.target.value))}
            value={sortParam}
          >
            <option value={PRICE_ASC}>цена по возрастанию</option>
            <option value={PRICE_DECS}>цена по убыванию</option>
            <option value={NAME_ASC}>по имени</option>
            <option value={COUNTRY_ASC}>по производителю</option>
          </select>

          <div className="goods-list">
            {sortedGoods?.map((element) => {
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
