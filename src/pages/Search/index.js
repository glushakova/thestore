import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Card } from '../../components';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../const';
import { onChangeInput, getGoods } from '../../actions';
import './style.css';

const SearchPage = () => {
  const inputValue = useSelector((state) => state.search.value);
  const goods = useSelector((state) => state.goods.goods);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoods());
  }, [dispatch]);

  const result = goods.filter(
    (element) =>
      inputValue &&
      element.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
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
  );
};

export { SearchPage };
