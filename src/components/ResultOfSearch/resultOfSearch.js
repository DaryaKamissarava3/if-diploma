import React from 'react';
import ProductsItem from "../ProductsItem/productsItem";

const ResultOfSearch = ({isActiveBlock,foundResultsOfSearch}) => {
  return (
    <section className={isActiveBlock ? 'section products-list' : 'hide'}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-subtitle underline">Search results</h2>
        </div>
        <div className="card">
          {foundResultsOfSearch.map((item) =>
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

export default ResultOfSearch;