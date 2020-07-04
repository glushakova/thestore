import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ROUTES } from '../../const';
import { onChangeEmail, onChangePassword, signIn } from '../../actions';
import { Loader } from '../../components';
import './style.css';

const SignInPage = () => {
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.err);
  const dispatch = useDispatch();

  const history = useHistory();
  const toMainPage = () => {
    history.push('/main');
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="sign-in">
        <h2 className="sign-in__title">Sign in</h2>
        <input
          type="text"
          placeholder="email"
          onChange={(event) => dispatch(onChangeEmail(event.target.value))}
          value={email}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(event) => dispatch(onChangePassword(event.target.value))}
          value={password}
        />
        <button
          onClick={() => {
            dispatch(signIn({ email, password }));
            toMainPage();
          }}
        >
          Sign in
        </button>
        {!loading && error && <div>{`Ошибка: ${error}`}</div>}
        <Link className="sign-in__title" to={ROUTES.REGISTER}>
          <h4>Don’t have an account?</h4>
        </Link>
      </div>
    </div>
  );
};

export { SignInPage };
