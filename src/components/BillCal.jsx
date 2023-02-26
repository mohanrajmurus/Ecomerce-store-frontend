import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const BillCal = () => {
  const cartData = useSelector((state) => state.cart);
  const [orgPrice, setOrgPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  useEffect(() => {
    const currPrice = cartData.reduce(
      (acc, curr) =>
        (acc +=
          Math.floor(Number(curr.price) * 50) * curr.qty -
          (Math.floor(Number(curr.price) * 50) *
            curr.qty *
            curr.discountPercentage) /
            100),
      0
    );
    const originalPrice = cartData.reduce(
      (acc, curr) => (acc += Math.floor(Number(curr.price) * 50) * curr.qty),
      0
    );
    setOrgPrice(Math.floor(originalPrice));
    setDiscountPrice(Math.floor(currPrice));

    setQty(cartData.reduce((acc, curr) => (acc += curr.qty), 0));
  }, [cartData]);
  //console.log(totalPrice);
  return (
    <div className="bill-container">
      <h1>Price Details</h1>
      <div className="bill--details">
        <span className="price">
          <span>Price({`${qty} items`})</span>
          <span>₹ {orgPrice}</span>
        </span>
        <span className="discount">
          <span>Discount</span>
          <span>-₹{orgPrice - discountPrice}</span>
        </span>
        <span className="delivery">
          <span>Delivery Charges</span>
          <span>Free</span>
        </span>
        <span className="total--price">
          <span className="total">Total Price</span>
          <span>₹ {orgPrice - (orgPrice - discountPrice)}</span>
        </span>
        <span className="message">
          <span>You will save ₹{orgPrice - discountPrice} on this order</span>
        </span>
      </div>
      <div className="place--order">
        <button>Place Order</button>
      </div>
    </div>
  );
};

export default BillCal;
