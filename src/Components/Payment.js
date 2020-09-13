import React, { useEffect, useState } from "react";
import "../css/Payment.css";
import { db } from "../js/firebase";
import { useStateValue } from "../stateProvider";
import BasketProduct from "./BasketProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import axios from "../js/axios";
import { useHistory } from "react-router-dom";

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();
	const history = useHistory();

	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState(true);

	const stripe = useStripe();
	const elements = useElements();

	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axios({
				method: "post",
				//stripe expects the total in a currencies subunits
				url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
			});

			setClientSecret(response.data.clientSecret);
		};

		getClientSecret();
	}, [basket]);

	const handleSubmit = async (event) => {
		//fancy strip stuff
		event.preventDefault();
		setProcessing(true);

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				// paymentIntent = payment confirmation

				db.collection("users")
					.doc(user?.uid)
					.collection("orders")
					.doc(paymentIntent.id)
					.set({
						basket: basket,
						amount: paymentIntent.amount,
						created: paymentIntent.created,
					});

				setSucceeded(true);
				setError(null);
				setProcessing(false);

				dispatch({
					type: "EMPTY_BASKET",
				});

				history.replace("/orders");
			});
	};

	const handleChange = (event) => {
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	};

	return (
		<div className="payment">
			{/* <div className="payment__title">
				<h1>Checkout</h1>
			</div> */}
			<div className="payment__container">
				<div className="payment__left">
					<div className="payment__left__title">
						<h3>
							Review Items and Delivery | <span>{basket?.length} items</span>
						</h3>
					</div>

					<div className="payment__items">
						{basket.length === 0 && (
							<div className="checkout__main">
								<img
									className="checkout__image"
									src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
								/>

								<h3 className="checkout__emptyCart">
									You have no orders to review
								</h3>
							</div>
						)}

						{basket.map((item) => (
							<div className="checkout__product">
								<BasketProduct
									index={0}
									id={item.id}
									title={item.title}
									image={item.image}
									price={item.price}
									rating={item.rating}
								/>
							</div>
						))}
					</div>
				</div>

				<div className="payment__right">
					{user !== null && (
						<div className="payment__right__top">
							<div className="payment__right__title">
								<h3>Delivery Address</h3>
							</div>
							<div className="payment__right__address">
								<p>
									<strong>Email: </strong>
									{user?.email}
								</p>
								<p>
									<strong>Street: </strong>123 Rawanda Lane
								</p>
								<p>
									<strong>State: </strong>Addis Ababa, ET
								</p>
							</div>
						</div>
					)}

					<div className="payment__right__bottom">
						<div className="payment__right__title">
							<h3>Payment Method</h3>
						</div>
						<div className="payment__right__details">
							<form onSubmit={handleSubmit}>
								<div className="payment__right__details__priceContainer">
									<CardElement
										className="payment__card"
										onChange={handleChange}
									/>

									<CurrencyFormat
										renderText={(value) => (
											<p>
												<strong>Order Total: {value}</strong>
											</p>
										)}
										decimalScale={2}
										value={getBasketTotal(basket)}
										displayType={"text"}
										thousandSeparator={true}
										prefix={"$"}
									/>
									<button
										className="payment__button"
										disabled={processing || disabled || succeeded}
									>
										<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
									</button>
								</div>

								{error && <div>{error}</div>}
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
