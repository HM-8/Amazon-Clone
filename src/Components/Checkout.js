import React from "react";
import "../css/Checkout.css";
import Subtotal from "./Subtotal";
import BasketProduct from "./BasketProduct";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/GCLP/EGCU_D_1024x180_v1_EN_20200318._CB1584039996_.jpg"
          alt="gift-card-ad"
        />

        <div>
          <h3 className="checkout__title">Your Shopping Basket</h3>
        </div>

        
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
