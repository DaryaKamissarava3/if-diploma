import React, {useState} from 'react';
import './authorization.css';
import {users} from '../../constants';
import {Navigate} from 'react-router-dom';
import actions from '../../actions/actions';
import {useSelector, useDispatch} from 'react-redux';

const Authorization = () => {
  const userStatus = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const emailChange = (email) => {
    setEmail(email);
  };

  const passwordChange = (password) => {
    setPassword(password);
  };

  const change_email = (e) => {
    emailChange(e.target.value);
    setDisabled(false);
  };

  const change_password = (e) => {
    passwordChange(e.target.value);
    setDisabled(false);
  };

  const inLog = (e) => {
    e.preventDefault();
    const resultLogin = users.filter((item) =>
      Object.values(item)
        .toString()
        .includes(email && password),
    );
    if (!resultLogin.length) {
      alert('Введен неверный логин или пароль. Попробуйте еще раз.');
    }
    dispatch(actions.logIn(resultLogin));
  };

  return (
    <>
      <div className="auth-block">
        <form className="authorization-form">
          <div className="authorization_title">CREATE ACCOUNT</div>
          <input
            placeholder="First Name"
            type="text"
            className="authorization-input"
            onChange={change_email}
          />
          <input
            placeholder="Last Name"
            type="text"
            className="authorization-input"
            onChange={change_email}
          />
          <input
            placeholder="Email"
            type="email"
            className="authorization-input"
            onChange={change_email}
          />
          <input
            placeholder="Password"
            type="password"
            className="authorization-input"
            onChange={change_password}
          />
          <div className="authorization-terms">
            <input
              className="authorization-checkbox"
              type="checkbox"
            />
            Let's get personal! We'll send you only the good stuff:<br/>
            Exclusive early access to Sale, new arrivals and
            promotions. No nasties.
          </div>
          <div className="authorization-terms-rules">
            By signing up you agree to <a href="#" className="auth-links">Terms of Service</a> and <a href="#" className="auth-links">
            Privacy Policy
          </a>
          </div>
          <div>
            <button
              type="submit"
              className="authorization-button"
              onClick={inLog}
              disabled={disabled}
            >
              Sign in
            </button>
          </div>
          <div className="have-an-account">
            <a href="#" className="auth-links">I HAVE AN ACCOUNT</a>
          </div>
        </form>
      </div>
      {!!userStatus && <Navigate to="/"/>}
    </>
  );
};

export default Authorization;