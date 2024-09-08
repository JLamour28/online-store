// reducers.js
import { combineReducers } from 'redux';
import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from './actions';

// Initial state for user
const initialUserState = {
  username: '',
  isLoggedIn: false
};

// User reducer
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case LOGIN_USER:
    case REGISTER_USER:
      return {
        ...state,
        username: action.payload.username,
        isLoggedIn: true
      };
    case LOGOUT_USER:
      return initialUserState;
    default:
      return state;
  }
};

// Initial state for cart
const initialCartState = {
  items: []
};

// Cart reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // If item exists, increase quantity
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        // If item doesn't exist, add it to cart
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }]
        };
      }
    case REMOVE_FROM_CART:
      // Remove item from cart
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default rootReducer;