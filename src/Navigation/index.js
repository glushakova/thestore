import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
  console.log(user);
  const authRoutes = [
    <Route
      path={ROUTES.PROFILE}
      component={ProfilePage}
      key={ROUTES.PROFILE}
    />,
    <Route
      path={ROUTES.HISTORY}
      component={HistoryOrderPage}
      key={ROUTES.HISTORY}
    />,
    <Route
      path={ROUTES.LASTORDER}
      component={LastOrderPage}
      key={ROUTES.LASTORDER}
    />,
    <Route
      path={ROUTES.CONFIRM}
      component={ConfirmPage}
      key={ROUTES.CONFIRM}
    />,
  ];
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {user && authRoutes}
        <Route path={ROUTES.SEARCH} component={SearchPage} />
        <Route path={ROUTES.CART} component={CartPage} />
        <Route path={ROUTES.PRODUCT} component={ProductPage} />
        <Route path={ROUTES.GOODS} component={GoodsPage} />
        <Route path={ROUTES.CHECKOUT} component={CheckoutPage} />
        <Route path={ROUTES.REGISTER} component={RegisterPage} />
        <Route path={ROUTES.SIGNIN} component={SignInPage} />
        <Route path={ROUTES.MAIN} component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
