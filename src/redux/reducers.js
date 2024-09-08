import { combineReducers } from 'redux';
import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_SHIPPING_METHOD
} from './actions';

// User reducer
const initialUserState = {
  firstName: '',
  surname: '',
  username: '',
  email: '',
  isLoggedIn: false
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true
      };
    case LOGIN_USER:
      return {
        ...state,
        username: action.payload,
        isLoggedIn: true
      };
    case LOGOUT_USER:
      return initialUserState;
    default:
      return state;
  }
};

// Cart reducer
const initialCartState = {
  items: [],
  shippingMethod: 'standard'
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + 1
        };
        return { ...state, items: newItems };
      } else {
        return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case SET_SHIPPING_METHOD:
      return {
        ...state,
        shippingMethod: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default rootReducer;