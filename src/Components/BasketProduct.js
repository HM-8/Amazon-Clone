import React from "react";
import "../css/BasketProduct.css";
import { useStateValue } from "../stateProvider";

function BasketProduct({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="basketProduct">
      <img className="basketProduct__image" src={image} />

      <div className="basketProduct__info">
        <p className="basketProduct__title">{title}</p>

        <p className="basketProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="basketProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default BasketProduct;
