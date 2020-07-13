import React, { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import './App.css';

const App = () => {
	const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route
						path="/"
						exact
						render={(props) => (
							<Home {...props} numberOfItemsInCart={numberOfItemsInCart} />
						)}
					/>
					<Route
						path="/shop"
						exact
						render={(props) => (
							<Shop {...props} numberOfItemsInCart={numberOfItemsInCart} />
						)}
					/>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
