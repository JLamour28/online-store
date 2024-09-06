// Action types
export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';

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