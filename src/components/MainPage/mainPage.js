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
import ResultOfSearch from "../ResultOfSearch/resultOfSearch";


const MainPage = () => {
  const [signOut, setSignOut] = useState(false);
  const [searchProducts, setSearchProducts] = useState([]);
  const [isClassName, setClassName] = useState(false);
  const [sectionName, setSectionName] = useState('');

  const [resultOfSearch, setResultOfSearch] = useState([]);
  const [isClassNameOfSearch, setClassNameOfSearch] = useState(false);
  return (
    <>
      <Navigation blockTitle="white-title" classForNav="nav-link dedicated" fill="white"
                  onClick={() => setSignOut(!signOut)}
                  updateClassStatus={setClassNameOfSearch} updateDataSearch={setResultOfSearch}/>
      <TopSection/>
      <ResultOfSearch isActiveBlock={isClassNameOfSearch} foundResultsOfSearch={resultOfSearch}/>

      <Category categoryTitle={setSectionName} updateStatus={setClassName} updateData={setSearchProducts}/>
      <CategoryList sectionTitle={sectionName} isActive={isClassName} foundProducts={searchProducts}/>

      <Products/>
      <ShopInstagram/>
      <Subscription/>
      <Footer/>
    </>
  );
};

export default MainPage;