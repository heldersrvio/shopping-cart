import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavigationBar.css';

const NavigationBar = (props) => {
	return (
		<div id="navigation-bar">
			<div id="navigation-top-section">
				<div id="title">
					<h1>Bookstore</h1>
				</div>
				<div id="cart">
					<span>Items in cart: {props.numberOfItemsInCart}</span>
					<span>Total: ${props.totalToPay}.00</span>
					<button onClick={() => console.log('Checking out')}>Check out</button>
				</div>
			</div>
			<div id="navigation-bottom-section">
				<Link to="/" className={props.isHome ? 'active' : ''}>
					Home
				</Link>
				<Link to="/shop" className={!props.isHome ? 'active' : ''}>
					Shop
				</Link>
			</div>
		</div>
	);
};

NavigationBar.propTypes = {
	numberOfItemsInCart: PropTypes.number,
	isHome: PropTypes.bool,
	totalToPay: PropTypes.number,
};

export default NavigationBar;
