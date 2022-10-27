import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../MainPage/mainPage';
import Authorization from '../Authorization/authorization';
import ProductDetails from "../ProductDetails/productDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Authorization />} />
          <Route path="products/:id" element={<ProductDetails />}/>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;