import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import Navigation from '../Navigation/navigation';
import './productDetails.css'
import BagButton from "../BagButton/bagButton";
import WishList from "../WishList/wishList";
import Subscription from "../Subscription/subscription";
import Footer from "../Footer/footer";

const ProductDetails = () => {
  const params = useParams();

  const [arr, setArr] = useState(() => {
    const saved = localStorage.getItem("productsArray");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const productInformation = arr.find((el) => {
    if (el.id === params.id) {
      return el;
    }
  });

  const firstImage = productInformation.images[0].toString();
  const secondImage = productInformation.images[1].toString();

  return (
    <>
      <section className="product-details">
        <Navigation  blockTitle="black-title" classForNav="nav-link-black" fill="black"/>
        <div className="product-container">
          <div className="product-inner">
            <div className="product-images first-block">
              <div>
                <img src={firstImage} className="prod-img" alt="img"/>
              </div>
              <div>
                <img src={secondImage} className="prod-img" alt="img"/>
              </div>
            </div>
            <div className="product-description">
              <div className="prod-name">{productInformation.name}</div>
              <div className="prod-price">
                <span className="prod-price-currency">{productInformation.price.currency}</span>
                $
                <span>{productInformation.price.value}</span>
              </div>
              <div className="prod-status">
                PRE-ORDER
              </div>
              <div>
                COLOR
                <div className="prod-color-square" style={{backgroundColor: `${productInformation.color.hex}`,
                }}/>
              </div>
              <div className="prod-sizes">{productInformation.availableSizes}</div>
              <div className="buttons-to-add">
                <BagButton />
                <button className="wish-button">
                  <WishList  fill="white"/>
                </button>
              </div>
              <div>{productInformation.description}</div>
            </div>
          </div>
        </div>
        <Subscription />
        <Footer />
      </section>
    </>
  );
};

export default ProductDetails;