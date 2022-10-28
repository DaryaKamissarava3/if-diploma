import React from 'react';
import ProductsItem from '../ProductsItem/productsItem';
import './categoryList.css';

const CategoryList = ({ isActive, foundProducts,sectionTitle }) => {
  return (
    <section className={isActive ? 'section products-list' : 'hide'}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-subtitle underline">{sectionTitle}</h2>
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