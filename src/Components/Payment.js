import React, { useEffect, useState } from "react";
import "../css/Payment.css";
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

	console.log("THE SECRET IS >>>", clientSecret);

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
					<div className="payment__right__top">
						<div className="payment__right__title">
							<h3>Delivery Address</h3>
						</div>
						<div className="payment__right__address">
							<p>{user?.email}</p>
							<p>123 React Lane</p>
							<p>Los Angeles, CA</p>
						</div>
					</div>

					<div className="payment__right__bottom">
						<div className="payment__right__title">
							<h3>Payment Method</h3>
						</div>
						<div className="payment__right__details">
							<form onSubmit={handleSubmit}>
								<div className="payment__right__details__priceContainer">
									<CurrencyFormat
										renderText={(value) => (
											<p>
												Order Total: <strong>{value}</strong>
											</p>
										)}
										decimalScale={2}
										value={getBasketTotal(basket)}
										displayType={"text"}
										thousandSeparator={true}
										prefix={"$"}
									/>

									<CardElement
										className="payment__card"
										onChange={handleChange}
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
