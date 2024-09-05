// src/redux/reducers.js
import { combineReducers } from 'redux';
import { LOGIN_USER, ADD_TO_CART, REMOVE_FROM_CART, SET_SHIPPING_METHOD } from './actions';

// Initial state for user
const initialUserState = {
  username: '',
};

// User reducer
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

// Initial state for cart
const initialCartState = {
  items: [],
  shippingMethod: '',
};

// Cart reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, items: [...state.items, action.payload] };
    case REMOVE_FROM_CART:
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    case SET_SHIPPING_METHOD:
      return { ...state, shippingMethod: action.payload };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;