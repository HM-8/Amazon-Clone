import React, { useEffect, useState } from "react";
import "../css/Orders.css";
import { db } from "../js/firebase";
import { useStateValue } from "../stateProvider";
import Order from "./Order";

function Orders() {
	const [{ basket, user }, dispatch] = useStateValue();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if (user) {
			db.collection("users")
				.doc(user?.uid)
				.collection("orders")
				.orderBy("created", "desc")
				.onSnapshot((snapshot) =>
					setOrders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					)
				);
		} else {
			setOrders([]);
		}
	}, [user]);

	return (
		<div className="orders">
			<div className="orders__container">
				<div className="orders__title">
					<h3>Your Orders</h3>
				</div>

				<div className="orders__order">
					{orders?.map((order) => (
						<Order order={order} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Orders;
