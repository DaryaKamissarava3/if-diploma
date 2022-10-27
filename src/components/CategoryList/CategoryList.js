import React from 'react';
import ProductsItem from "../ProductsItem/productsItem";

const CategoryList = ({ isActive, foundProducts }) => {
  return (
    <section className={isActive ? 'section available-hotels' : 'hide'}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-subtitle underline">Available Hotels</h2>
        </div>
        <div className="card">
          {foundProducts.map((item) =>
            (
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
            ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;