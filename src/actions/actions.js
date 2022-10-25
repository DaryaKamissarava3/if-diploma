import { LOGIN, LOGOUT } from './actionTypes';

const logIn = (userObj) => ({
  type: LOGIN,
  payload: userObj,
});

const logOut = () => ({
  type: LOGOUT,
});

export default {
  logIn,
  logOut,
};