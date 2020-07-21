import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  MainPage,
  SignInPage,
  RegisterPage,
  ConfirmPage,
  CheckoutPage,
  HistoryOrderPage,
  ProductPage,
  ProfilePage,
  GoodsPage,
  CartPage,
  LastOrderPage,
  SearchPage,
} from '../pages';
import { NavBar } from '../components';
import { ROUTES } from '../const';

const Navigation = () => {
  const user = useSelector((state) => state.auth.user);
  const authRoutes = [
    <Route
      exact
      path={ROUTES.PROFILE}
      component={ProfilePage}
      key={ROUTES.PROFILE}
    />,
    <Route
      exact
      path={ROUTES.HISTORY}
      component={HistoryOrderPage}
      key={ROUTES.HISTORY}
    />,
    <Route
      exact
      path={ROUTES.LASTORDER}
      component={LastOrderPage}
      key={ROUTES.LASTORDER}
    />,
    <Route
      exact
      path={ROUTES.CONFIRM}
      component={ConfirmPage}
      key={ROUTES.CONFIRM}
    />,
  ];
  return (
    <>
      <NavBar />
      <Switch>
        {user && authRoutes}
        <Route exact path={ROUTES.SEARCH} component={SearchPage} />
        <Route exact path={ROUTES.CART} component={CartPage} />
        <Route exact path={ROUTES.PRODUCT} component={ProductPage} />
        <Route exact path={ROUTES.GOODS} component={GoodsPage} />
        <Route exact path={ROUTES.CHECKOUT} component={CheckoutPage} />
        <Route exact path={ROUTES.REGISTER} component={RegisterPage} />
        <Route exact path={ROUTES.SIGNIN} component={SignInPage} />
        <Route path={ROUTES.MAIN} component={MainPage} />
      </Switch>
    </>
  );
};

export default withRouter(Navigation);
