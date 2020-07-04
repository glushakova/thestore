import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  MainPage,
  SignInPage,
  RegisterPage,
  ConfirmPage,
  CheckoutPage,
  HistoryOrderPage,
  ProductPage,
  GoodsPage,
  CartPage,
  LastOrderPage,
  SearchPage,
} from '../pages';
import { NavBar } from '../components';
import { ROUTES } from '../const';

const Navigation = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path={ROUTES.SEARCH} component={SearchPage} />
        <Route path={ROUTES.LASTORDER} component={LastOrderPage} />
        <Route path={ROUTES.CART} component={CartPage} />
        <Route path={ROUTES.PRODUCT} component={ProductPage} />
        <Route path={ROUTES.GOODS} component={GoodsPage} />
        <Route path={ROUTES.HISTORY} component={HistoryOrderPage} />
        <Route path={ROUTES.CHECKOUT} component={CheckoutPage} />
        <Route path={ROUTES.REGISTER} component={RegisterPage} />
        <Route path={ROUTES.SIGNIN} component={SignInPage} />
        <Route path={ROUTES.CONFIRM} component={ConfirmPage} />
        <Route path={ROUTES.MAIN} component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
