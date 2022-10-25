import Footer from '../Footer/footer';
import TopSection from "../TopSection/topSection";
import Category from "../Category/category";
import Products from "../Products/Products";
import ShopInstagram from "../ShopInstagram/shopInstagram";
import Subscription from "../Subscription/subscription";

const MainPage = () => {
    return (
    <>
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