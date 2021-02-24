export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

// une fonction pure qui renvoie une action
export const changeAuthField = (value, name) => ({
  type: CHANGE_AUTH_FIELD,
  name,
  value,
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
