import React from "react";
import "../css/BasketProduct.css";
import { useStateValue } from "../stateProvider";

function BasketProduct({ index, id, title, price, image, rating }) {
	const [{ basket }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		const index = basket.length;
		dispatch({
			type: "REMOVE_FROM_BASKET",
			index: index,
			id: id,
		});
	};

	return (
		<div className="basketProduct">
			<img className="basketProduct__image" src={image} alt="text" />

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
							<span role="img" aria-label="text">⭐</span>
						))}
				</div>

				<button onClick={removeFromBasket}>Remove from basket</button>
			</div>
		</div>
	);
}

export default BasketProduct;
