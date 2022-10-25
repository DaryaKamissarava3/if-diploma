import React from 'react';

const CategoryItem = ({pass,name}) => {
  return (
    <div className="category-item">
      <span className="category-item-img">{pass}</span>
      <span className="category-item-title">{name}</span>
    </div>
  );
};

export default CategoryItem;