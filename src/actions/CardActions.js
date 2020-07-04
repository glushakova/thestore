import { ACTIONST_TYPE } from '../const';

export const clickMinus = (id) => ({
  type: ACTIONST_TYPE.CLICK_BUTTON_MINUS,
  payload: id,
});

export const clickPlus = (id) => ({
  type: ACTIONST_TYPE.CLICK_BUTTON_PLUS,
  payload: id,
});
