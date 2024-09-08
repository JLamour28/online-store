// Action types
export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Action creators
export const loginUser = (userData) => ({
  type: LOGIN_USER,
  payload: userData
});

export const registerUser = (userData) => ({
  type: REGISTER_USER,
  payload: userData
});

export const logoutUser = () => ({
  type: LOGOUT_USER
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId
});