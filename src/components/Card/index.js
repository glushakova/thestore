import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { clickMinus, clickPlus } from '../../actions';
import img from './fon.jpeg';
import './style.css';

const Card = ({ id, name, price, country, countAvailable }) => {
  const value = useSelector((state) => state.card.value);
  const dispatch = useDispatch();

  function plus(event) {
    event.preventDefault();
    dispatch(clickPlus(id));
  }

  function minus(event) {
    event.preventDefault();
    dispatch(clickMinus(id));
  }

  let personValue = value[id] || 0;

  return (
    <div id="card">
      <h4 className="card-title">{name}</h4>
      <img src={img} alt="flower" className="card-img" />
      <p className="card-info">{`${price}$`}</p>
      <p className="card-info">{country}</p>
      <div className="card-counter">
        <button
          className="card-counter__btn"
          onClick={(event) => minus(event)}
          disabled={personValue <= 0}
        >
          -
        </button>
        <div>{personValue}</div>
        <button
          className="card-counter__btn"
          onClick={(event) => plus(event)}
          disabled={personValue >= countAvailable}
        >
          +
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  country: PropTypes.string,
  countAvailable: PropTypes.number,
};

export { Card };
