import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Card } from '../../components';
import { ROUTES } from '../../const';
import { onChangeInput, getGoods } from '../../actions';
import './style.css';

const SearchPage = () => {
  const inputValue = useSelector((state) => state.search.value);
  const goods = useSelector((state) => state.goods.goods);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!goods) {
      dispatch(getGoods());
    }
  }, [dispatch, goods]);

  const result = useMemo(
    () =>
      goods.filter(
        (element) =>
          inputValue &&
          element.name.toLowerCase().includes(inputValue.toLowerCase())
      ),

    [goods, inputValue]
  );

  return (
    <>
      <Helmet>
        <title>
          {inputValue.length > 0 ? `Поиск: ${inputValue}` : 'Поиск'}
        </title>
      </Helmet>
      <div className="container">
        <h2>Поиск</h2>
        <input
          className="search_input"
          type="text"
          autoFocus
          onChange={(event) => dispatch(onChangeInput(event.target.value))}
          value={inputValue}
          placeholder="Введите поисковой запрос"
        ></input>
        {inputValue.length > 0 && (
          <div className="card">
            {result.length > 0 ? (
              <div className="cart-list">
                {result.map((product) => {
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
            ) : (
              <div>{`По запросу ${inputValue} ничего не найдено`}</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export { SearchPage };
