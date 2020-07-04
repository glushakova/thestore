import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { getProduct, clickMinus, clickPlus } from '../../actions';
import { Loader } from '../../components';
import './style.css';
import img from '../../components/Card/fon.jpeg';

const ProductPage = (props) => {
  const product = useSelector((state) => state.product.product);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.err);
  const value = useSelector((state) => state.card.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(props.match.params.index));
  }, [props.match.params.index, dispatch]);

  if (!product && !loading) {
    return (
      <div className="container">
        <div>{`Ошибка: ${error}`}</div>
      </div>
    );
  }

  if (loading) {
    return <Loader />;
  }

  let personValue = value[props.match.params.index] || 0;

  return (
    <div className="container">
      <h2>{product.name}</h2>
      <img src={img} className="product-img" alt="product"></img>
      <div className="product">
        <h3 className="product-price">{`${product.price}$`}</h3>
        <div className="product-counter">
          <button
            className="product-counter__btn"
            disabled={personValue <= 0}
            onClick={() => dispatch(clickMinus(props.match.params.index))}
          >
            -
          </button>
          <div className="product-counter__value">{personValue}</div>
          <button
            className="product-counter__btn"
            disabled={personValue >= product.countAvailable}
            onClick={() => dispatch(clickPlus(props.match.params.index))}
          >
            +
          </button>
        </div>
        <div>
          <h5 className="product-title">Описание</h5>
          <p className="product-text">{product.description}</p>
        </div>
        <div>
          <h5 className="product-title">Страна происхождения</h5>
          <p className="product-text">{product.country}</p>
        </div>
        <p className="product-text">
          Получить консультацию и уточнить наличие товара можно по телефону +375
          (33) 384-33-22
        </p>
      </div>
    </div>
  );
};

ProductPage.propTypes = {
  match: PropTypes.object,
};

export { ProductPage };
