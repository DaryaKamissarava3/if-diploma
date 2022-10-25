import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Picture from "../Picture/picture";

const ProductDetails = () => {
  const [arrOfProductDetails, setArrOfProductsDetails] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  const params = useParams();

  useEffect(() => {
    setIsLoad(true);
    fetch(`https://modnikky-api.herokuapp.com/api/catalog/${params.cardId}`)
      .then((response) => {
        return response.json();
      }).then((data) => {
      setArrOfProductsDetails(data);
    }).catch(() => setIsLoad(false));
  }, []);

  return (
    <>
      {
        isLoad ? (
          <section className="hotel-details">
            <Picture
              imageUrl={arrOfProductDetails.imageUrl}
              name={arrOfProductDetails.name}
            />
            <span>ergftyuiuujhytgfr</span>
            <div className="card-hostel-name">{arrOfProductDetails.name}</div>
            <div className="card-hostel-location">
              {arrOfProductDetails.type},
              <span className="card-hostel-country">
                {arrOfProductDetails.description}
              </span>
            </div>
          </section>
        ) : <div className="loader"/>
      }
    </>
  );
};

export default ProductDetails;