import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import {
  SET_LOCALE,
} from '../../actionTypes/common';
import config from '../../config';

const initialState = {
  locale: config.common.defaultLocale,
};

export default handleActions({
  [SET_LOCALE]: (state, { payload }) => ({ ...state, locale: payload }),
}, initialState);

const getRoot = (state) => state.common.config;
export const getLocale = createSelector(getRoot, (state) => state.locale);
