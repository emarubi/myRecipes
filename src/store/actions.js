export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

// action creator qui fabrique une action de type CHANGE_INPUT
export const changeField = (field, text) => ({
  type: CHANGE_FIELD,
  field,
  text,
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});
