import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "../SingleProduct";
import FilterProduct from '../FilterProduct'
import filterProduct from '../logic/filter'

const HealthCare = () => {
  const products = useSelector((state) => state.product);
  const mobiles = products.filter((item) => item.category === "skincare" || item.category === "fragrances");
  //console.log(mobiles);
  const {sort} = useSelector(state => state.filter)
  //console.log(filter);
  const dispatch = useDispatch();
  const [mode, setMode] = useState('');
  //console.log(mode);
  //console.log(mobiles);

  //get sort mode
  const handleChange = (e) => {
    setMode(e.target.value);
    dispatch({
      type:'SORT_BY_PRICE',
      payload:e.target.value
    })
  }

 
  filterProduct(mobiles,sort);
  return (
    <div className="product--container">
      <FilterProduct handleChange={handleChange} val={mode}/>
      <div className="products">
      {mobiles.map((item, i) => {
        return <SingleProduct prod={item} key={i} category="healthcare"/>;
      })}
      </div>
    </div>
  );
};

export default HealthCare;
