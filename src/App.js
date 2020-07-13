import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import './App.css';

const App = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/shop" exact component={Shop} />
		</Switch>
	);
};

export default App;
