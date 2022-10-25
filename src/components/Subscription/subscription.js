import React from 'react';
import './subscription.css'

const Subscription = () => {
  return (
    <div className="subscription container">
      <div className="subscription-inner">
        <div className="subscription-title">
          <h3 className="title-text">SIGN UP FOR UPDATES</h3>
        </div>
        <div className="subscription-describe">
          <p className="describe-text">Sign up for exclusive early sale access and tailored new arrivals.</p>
        </div>
        <form className="subscription-form">
          <input
            className="subscription-input"
            placeholder="Your email address"
            type="email"
          />
          <button className="subscription-button" type="submit">JOIN</button>
        </form>
      </div>
    </div>
  );
};
export default Subscription;