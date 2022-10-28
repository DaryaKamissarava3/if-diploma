import './navigation.css';
import SignOut from "../SignOut/signOut";
import WishList from "../WishList/wishList";
import {useState} from "react";
import Modal from "../Modal/modal";
import React from "react";


const Navigation = ({classForNav, blockTitle, fill, updateClassStatus}) => {
  const [modalActive, setModalActive] = useState(false);

  const handleClick = event => {
    console.log('from handle')
    updateClassStatus((prevState) => !prevState);
  };

  return (
    <>
      <header className="navigation-block">
        <nav className="nav">
      <span className="nav-block">
          <a href="#" className={classForNav}>
            NEW ARRIVALS
          </a>
          <a href="#" className={classForNav}>
            SHOP
          </a>
          <a href="#" className={classForNav}>
            COLLECTIONS
          </a>
        </span>
          <span className={blockTitle}>
           <p>MODNIKKY</p>
        </span>
          <span className="nav-block nav-block-3">
            <button className="search-btn" onClick={() => setModalActive(true)}>
              SEARCH
           </button>
            <a href="#" className={classForNav}>
              <SignOut/>
           </a>
            <a href="#" className={classForNav}>
              BAG
            </a>
            <a href="#" className={classForNav}>
              <WishList fill={fill}/>
            </a>
          </span>
        </nav>
      </header>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="modal-container">
          <input className="modal-input" type="text"/>
        </div>
      </Modal>
    </>
  );
};

export default Navigation;