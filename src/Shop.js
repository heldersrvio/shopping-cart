import React from 'react';
import NavigationBar from './NavigationBar';
import PropTypes from 'prop-types';

const Shop = (props) => {
	return (
		<div>
			<NavigationBar numberOfItemsInCart={props.numberOfItemsInCart} />
			<h1>This is the shop page</h1>
		</div>
	);
};

Shop.propTypes = {
	numberOfItemsInCart: PropTypes.number,
};

export default Shop;
