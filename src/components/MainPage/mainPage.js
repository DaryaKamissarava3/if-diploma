import React from "react";
import Footer from '../Footer/footer';
import TopSection from "../TopSection/topSection";
import Category from "../Category/category";
import Products from "../Products/Products";
import ShopInstagram from "../ShopInstagram/shopInstagram";
import Subscription from "../Subscription/subscription";
import {useState} from "react";
import Navigation from "../Navigation/navigation";
import CategoryList from "../CategoryList/CategoryList";


const MainPage = () => {
  const [signOut, setSignOut] = useState(false);
  const [searchProducts, setSearchProducts] = useState([]);
  const [isClassName, setClassName] = useState(false);
  const [sectionName,setSectionName]=useState('');

  return (
    <>
      <Navigation blockTitle="white-title" classForNav="nav-link dedicated" fill="white" onClick={() => setSignOut(!signOut)}/>
      <TopSection />

      <Category categoryTitle={setSectionName} updateStatus={setClassName} updateData={setSearchProducts} />
      <CategoryList sectionTitle={sectionName} isActive={isClassName} foundProducts={searchProducts}/>

      <Products />
      <ShopInstagram />
      <Subscription />
      <Footer />
    </>
  );
};

export default MainPage;