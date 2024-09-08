// User actions
export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

// Cart actions
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_SHIPPING_METHOD = 'SET_SHIPPING_METHOD';

// User action creators
export const registerUser = (userData) => ({
  type: REGISTER_USER,
  payload: userData
});

export const loginUser = (username) => ({
  type: LOGIN_USER,
  payload: username
});

export const logoutUser = () => ({
  type: LOGOUT_USER
});

// Cart action creators
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId
});

export const setShippingMethod = (method) => ({
  type: SET_SHIPPING_METHOD,
  payload: method
});