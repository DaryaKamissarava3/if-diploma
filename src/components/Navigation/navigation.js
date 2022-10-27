import './navigation.css';
import SignOut from "../SignOut/signOut";
import WishList from "../WishList/wishList";

const Navigation = ({classForNav,blockTitle,fill}) => {
  return (
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
        <a href="#" className={classForNav}>
          SEARCH
        </a>
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
  );
};

export default Navigation;