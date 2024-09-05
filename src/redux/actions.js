// src/redux/actions.js

// Action types
export const LOGIN_USER = 'LOGIN_USER';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_SHIPPING_METHOD = 'SET_SHIPPING_METHOD';

// Action creators
export const loginUser = (username) => ({
  type: LOGIN_USER,
  payload: username,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const setShippingMethod = (method) => ({
  type: SET_SHIPPING_METHOD,
  payload: method,
});