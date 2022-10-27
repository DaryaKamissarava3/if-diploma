import React from 'react';
import TitleBlock from "../TitleBlock/title_block";
import './category.css'
import CategoryItem from "../CategoryItem/categoryItem";
import {useEffect} from "react";
import {useState} from "react";
import Beauty from '../../images/categories/deauty.svg';
import Tops from '../../images/categories/tops.svg';
import Denim from '../../images/categories/denim.svg';
import Swimwear from '../../images/categories/swimwear.svg';
import Tees from '../../images/categories/tees.svg';
import Dresses from '../../images/categories/dress.svg';

const Category = ({updateStatus, updateData}) => {
  return (
    <div className="category-container">
      <TitleBlock title="Shop by the Category"/>
      <div className="category">
        <CategoryItem pass={Dresses} name={'Dresses'}  updateStatus={updateStatus} updateData={updateData} />
        <CategoryItem pass={Tees} name={'Tees'}  updateStatus={updateStatus} updateData={updateData} />
        <CategoryItem pass={Swimwear} name={'Swimwear'} updateStatus={updateStatus} updateData={updateData} />
        <CategoryItem pass={Denim} name={'Denim'} updateStatus={updateStatus} updateData={updateData} />
        <CategoryItem pass={Tops} name={'Tops'} updateStatus={updateStatus} updateData={updateData} />
        <CategoryItem pass={Beauty} name={'Beauty'} updateStatus={updateStatus} updateData={updateData} />
      </div>
    </div>
  );
};

export default Category;