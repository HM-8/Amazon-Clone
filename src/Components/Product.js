import React from "react";
import "../css/Product.css";
import { useStateValue } from "../stateProvider";

function Product({ index, id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  
  
  const addToBasket = () => {
    const index = basket.length;
    //dispach the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        index: index,
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="text">⭐</span>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
