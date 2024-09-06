import { combineReducers } from 'redux';
import { 
  LOGIN_USER, 
  REGISTER_USER, 
  ADD_TO_CART, 
  REMOVE_FROM_CART, 
  UPDATE_CART_ITEM_QUANTITY,
  SET_SHIPPING_METHOD 
} from './actions';

// Initial state for user
const initialUserState = {
  username: '',
  isLoggedIn: false,
};

// User reducer
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, username: action.payload, isLoggedIn: true };
    case REGISTER_USER:
      return { ...state, ...action.payload, isLoggedIn: true };
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
      // Check if item already exists in cart
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // If item exists, increase its quantity
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If item doesn't exist, add it to cart with quantity 1
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case UPDATE_CART_ITEM_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case SET_SHIPPING_METHOD:
      return {
        ...state,
        shippingMethod: action.payload,
      };
    default:
      return state;
  }
};

// Combine all reducers
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;