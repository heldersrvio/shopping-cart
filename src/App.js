import React, { useState } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import './App.css';

const App = () => {
	const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);
	const [totalToPay, setTotalToPay] = useState(0);

	const updateCart = (increment, price) => {
		setNumberOfItemsInCart(() => numberOfItemsInCart + increment);
		setTotalToPay(() => totalToPay + increment * price);
	};

	return (
		<div>
			<HashRouter basename="/">
				<Switch>
					<Route
						path="/"
						exact
						render={(props) => (
							<Home
								{...props}
								numberOfItemsInCart={numberOfItemsInCart}
								totalToPay={totalToPay}
							/>
						)}
					/>
					<Route
						path="/shop"
						exact
						render={(props) => (
							<Shop
								{...props}
								numberOfItemsInCart={numberOfItemsInCart}
								totalToPay={totalToPay}
								updateCart={updateCart}
							/>
						)}
					/>
				</Switch>
			</HashRouter>
		</div>
	);
};

export default App;
