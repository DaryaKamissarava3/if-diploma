
import './signOut.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import actions from '../../actions/actions';
import { useDispatch } from 'react-redux';

const SignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(actions.logOut());
    navigate('/');
  };

  return (
    <p className="underline-item" onClick={logout} >SIGN OUT</p>
  );
};

export default SignOut;