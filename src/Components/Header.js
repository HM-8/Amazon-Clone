import React from "react";
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../stateProvider";
import { auth } from "../js/firebase";

function Header() {
	const [{ basket, user }, dispatch] = useStateValue();

	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className="header">
			<Link className="link" to="/">
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
				></img>
			</Link>

			<div className="header__search">
				<input className="header__searchInput" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>

			<div className="header__nav">
				<Link className="link" to={!user && "/login"}>
					<div onClick={handleAuthentication} className="header__option">
						<span className="header__optionOne">
							Hello, <strong className='user'>{user ? user?.email : "Guest"}</strong>
						</span>
						<span className="header__optionTwo">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>

				<div className="header__option">
					<span className="header__optionOne">Returns</span>
					<span className="header__optionTwo">& Orders</span>
				</div>

				<div className="header__option">
					<span className="header__optionOne">Your</span>
					<span className="header__optionTwo">Prime</span>
				</div>

				<Link className="link" to="/checkout">
					<div className="header_optionBasket">
						<ShoppingCartIcon />

						<span className="header__optionTwo header__basketCount">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
