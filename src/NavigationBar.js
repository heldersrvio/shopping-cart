import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationBar = (props) => {
	return (
		<div id="navigation-bar">
			<div id="navigation-top-section">
				<div id="title">
					<h1>Shopping Cart App</h1>
				</div>
				<div id="cart">
					<span>Items in cart: {props.numberOfItemsInCart}</span>
					<button onClick={() => console.log('Checking out')}>Check out</button>
				</div>
			</div>
			<div id="navigation-bottom-section">
				<Link to="/">Home</Link>
				<Link to="/shop">Shop</Link>
			</div>
		</div>
	);
};

NavigationBar.propTypes = {
	numberOfItemsInCart: PropTypes.number,
};

export default NavigationBar;
