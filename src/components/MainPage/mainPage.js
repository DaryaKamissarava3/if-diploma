import Footer from '../Footer/footer';
import TopSection from "../TopSection/topSection";
import Category from "../Category/category";
import Products from "../Products/Products";
import ShopInstagram from "../ShopInstagram/shopInstagram";
import Subscription from "../Subscription/subscription";
import {useState} from "react";
import Navigation from "../Navigation/navigation";
import React from "react";

const MainPage = () => {
  const [signOut, setSignOut] = useState(false);

  return (
    <>
      <Navigation blockTitle="white-title" classForNav="nav-link dedicated" fill="white" onClick={() => setSignOut(!signOut)} />
      <TopSection />
      <Category />
      <Products />
      <ShopInstagram />
      <Subscription />
      <Footer />
    </>
  );
};

export default MainPage;