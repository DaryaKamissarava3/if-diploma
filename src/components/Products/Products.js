import React from 'react';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import ProductsItem from "../ProductsItem/productsItem";
import './products.css';
import More from "../../images/more.svg"
import Slider from "../Slider/Slider";

const Products = () => {
  const [minNumberImg, setMinNumberImg] = useState(0);
  const [maxNumberImg, setMaxNumberImg] = useState(4);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://modnikky-api.herokuapp.com/api/catalog')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);


  useEffect(() => {
    localStorage.setItem('productsArray', JSON.stringify(products));
  }, [products]);

  const [arrFromLocalStorage, setArrFromLocalStorage] = useState(() => {
    const saved = localStorage.getItem("productsArray");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  // console.log(arrFromLocalStorage);
  // arrFromLocalStorage.map((item)=>{
  //   console.log(item.id)
  // })

  const scrollAhead = () => {
    setMaxNumberImg(maxNumberImg + 1);
    setMinNumberImg(minNumberImg + 1);
  };

  const scrollBack = () => {
    setMaxNumberImg(maxNumberImg - 1);
    setMinNumberImg(minNumberImg - 1);
  };

  return (
    <div className="products-section container">
      <div className="section-header">
        <h2 className="section-products">#MODNIKKY_Sale</h2>
      </div>
      <div className="products">
        <div className="products-items">
          <Slider
            sliderBtn={More}
            changeSlide={scrollBack}
            classForBtn="minus"
            minNumberOfImg={minNumberImg}
          />
          {arrFromLocalStorage.slice(minNumberImg, maxNumberImg).map((item) =>
            (
              <Link className="product-link" to={`/products/${item.id}`} key={item.id}>
                <ProductsItem
                  imgUrl={item.images[0]}
                  name={item.name}
                  type={item.type}
                  price={item.price}
                  color={item.color}
                  availableSizes={item.availableSizes}
                  description={item.description}
                  key={item.id}
                />
              </Link>
            ))}
          <Slider
            sliderBtn={More}
            changeSlide={scrollAhead}
            classForBtn="plus"
            maxNumberOfImg={maxNumberImg}
            numberOfImg={products.length}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;