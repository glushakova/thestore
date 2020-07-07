import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  onChangeEmail,
  onChangePassword,
  onChangeFirstName,
  onChangeLastName,
  registration,
  clear,
} from '../../actions/AuthActions';
import { Loader } from '../../components';
import '../SignIn/style.css';

const RegisterPage = () => {
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const firstName = useSelector((state) => state.auth.firstName);
  const lastName = useSelector((state) => state.auth.lastName);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(clear());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="container">
        <div className="sign-in">
          <h1 className="sign-in__title">Create account</h1>
          <input
            type="text"
            placeholder="first name"
            onChange={(event) =>
              dispatch(onChangeFirstName(event.target.value))
            }
            value={firstName}
          />
          <input
            type="text"
            placeholder="last name"
            onChange={(event) => dispatch(onChangeLastName(event.target.value))}
            value={lastName}
          />
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
              dispatch(
                registration({ firstName, lastName, email, password, history })
              );
            }}
            disabled={!firstName || !lastName || !email || !password}
          >
            {user && !error ? 'Success' : 'Sign up'}
          </button>
          {!loading && error && <div>{`Ошибка: ${error}`}</div>}
        </div>
      </div>
    </>
  );
};

export { RegisterPage };
