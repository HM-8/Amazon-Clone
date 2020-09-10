import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import HeaderTwo from "./Components/HeaderTwo";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import CreateAccount from "./Components/CreateAccount";
import { auth } from "./js/firebase";
import { useStateValue } from "./stateProvider";

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="app">
				<Switch>
					{/* login route */}
					<Route path="/login">
						<Login />
					</Route>

					{/* createaccount route */}
					<Route path="/createAccount">
						<CreateAccount />
					</Route>

					{/* checkout route */}
					<Route path="/checkout">
						<Header />
						<HeaderTwo />
						<Checkout />
						<Footer />
					</Route>

					{/* home route/ Default route */}
					<Route path="/">
						<Header />
						<HeaderTwo />
						<Home />
						<Footer />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
