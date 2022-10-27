import React, {useState} from 'react';

const CategoryItem = ({pass, name, updateStatus, updateData}) => {
  const [arr, setArr] = useState(() => {
    const saved = localStorage.getItem("productsArray");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  console.log(arr);
  const handleClick = async () => {
    const resArr = arr.filter(el => el.type === name)
    if (resArr.length === 0) {
      alert('nothing was found');
      return;
    }
    updateStatus((prevState) => !prevState);
    updateData(resArr);
  };

  return (
    <button className="category-item" onClick={handleClick}>
      <img src={pass} className="category-item-img"/>
      <span className="category-item-title">{name}</span>
    </button>
  );
};

export default CategoryItem;