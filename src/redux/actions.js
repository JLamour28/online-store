// Action types
export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ITEM_QUANTITY = 'UPDATE_CART_ITEM_QUANTITY';
export const SET_SHIPPING_METHOD = 'SET_SHIPPING_METHOD'; // Add this line

// Action creator for user login
export const loginUser = (username) => ({
  type: LOGIN_USER,
  payload: username,
});

// Action creator for user registration
export const registerUser = (userData) => ({
  type: REGISTER_USER,
  payload: userData,
});

// Action creator for adding item to cart
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

// Action creator for removing item from cart
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

// Action creator for updating cart item quantity
export const updateCartItemQuantity = (productId, quantity) => ({
  type: UPDATE_CART_ITEM_QUANTITY,
  payload: { productId, quantity },
});

// Action creator for setting shipping method
export const setShippingMethod = (method) => ({
  type: SET_SHIPPING_METHOD,
  payload: method,
});