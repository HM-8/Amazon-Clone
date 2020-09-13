import React from "react";
import "../css/Order.css";
import moment from "moment";
import BasketProduct from "./BasketProduct";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../stateProvider";

function Order({ order }) {
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className="order">
			<p>
				<strong>Purchased at: </strong>
				{moment.unix(order.data.created).format("MMMM Do YYYY h:mma")}
			</p>
			<p className="order__id">
				<strong>Id: </strong>
				<small>{order.id}</small>
			</p>

			<CurrencyFormat
				renderText={(value) => (
					<p>
						<strong>Order Total: </strong>
						<strong>{value}</strong>
					</p>
				)}
				decimalScale={2}
				value={order.data.amount / 100}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			{order.data.basket?.map((item) => (
				<BasketProduct
					id={item.id}
					title={item.title}
					image={item.image}
					price={item.price}
					rating={item.rating}
					hideButton
				/>
			))}
		</div>
	);
}

export default Order;
