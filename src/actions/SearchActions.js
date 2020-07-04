import { ACTIONST_TYPE } from '../const';

export const onChangeInput = (value) => ({
  type: ACTIONST_TYPE.ON_CHANGE_SEARCH,
  payload: value,
});
