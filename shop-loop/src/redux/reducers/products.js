import { loop, Cmd } from 'redux-loop';
import API from '../../api';

const defaultState = {
  model: [],
  loading: false,
  error: undefined
};

const PRODUCTS_INIT          = 'PRODUCTS_INIT';
const PRODUCTS_FETCH_SUCCESS = 'PRODUCTS_FETCH_SUCCESS';
const PRODUCTS_FETCH_ERROR   = 'PRODUCTS_FETCH_ERROR';

export const productsInit = () => ({
  type: PRODUCTS_INIT
});

const productsFetchOnSuccess = (products) => ({
  type: PRODUCTS_FETCH_SUCCESS,
  products
});

const productsFetchOnError = (error) => ({
  type: PRODUCTS_FETCH_ERROR,
  error
});

export default (state = defaultState, action) => {
  switch(action.type) {
  case PRODUCTS_INIT:
    return loop(
      { ...state, loading: true },
      Cmd.run(API.fetchProducts, {
        successActionCreator: productsFetchOnSuccess,
        failActionCreator: productsFetchOnError
      })
    );
  case PRODUCTS_FETCH_SUCCESS:
    return { ...state, model: action.products, loading: false };
  case PRODUCTS_FETCH_ERROR:
    return { ...state, error: action.error, loading: false };
  default:
    return state;
  }
}
