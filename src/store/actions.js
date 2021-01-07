export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

// action creator qui fabrique une action de type CHANGE_INPUT
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const login = () => ({
  type: LOGIN,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const logout = () => ({
  type: LOGOUT,
});
