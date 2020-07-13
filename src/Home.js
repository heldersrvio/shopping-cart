import React from 'react';
import NavigationBar from './NavigationBar';
import PropTypes from 'prop-types';

const Home = (props) => {
	return (
		<div>
			<NavigationBar numberOfItemsInCart={props.numberOfItemsInCart} />
			<h1>This is the homepage</h1>
		</div>
	);
};

Home.propTypes = {
	numberOfItemsInCart: PropTypes.number,
};

export default Home;
