import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductCard = (props) => {
	const [isInCart, setIsInCart] = useState(false);
	const [quantity, setQuantity] = useState(0);

	const addToCart = () => {
		setIsInCart(true);
		props.updateCart(quantity);
	};

	const removeFromCart = () => {
		setIsInCart(false);
		props.updateCart(-quantity);
	};

	const changeQuantity = (newQuantity) => {
		if (newQuantity >= 0) {
			const oldQuantity = quantity;
			if (newQuantity === 0 && isInCart) {
				setIsInCart(false);
			}
			setQuantity(newQuantity);
			props.updateCart(quantity - oldQuantity);
		}
	};

	const addRemoveButton = isInCart ? (
		<button className="remove-button" onClick={removeFromCart}>
			Remove product from cart
		</button>
	) : (
		<button className="add-button" onClick={addToCart}>
			Add product to cart
		</button>
	);

	return (
		<div className="product-card" key={props.productId}>
			<div className="product-card-top-section">
				<img src={props.productImage} alt={props.productDescription} />
				<span>{props.productName}</span>
			</div>
			<div className="product-card-bottom-section">
				{addRemoveButton}
				<input
					type="number"
					min="0"
					value={quantity}
					onChange={(e) => changeQuantity(e.target.value)}
				></input>
			</div>
		</div>
	);
};

ProductCard.propTypes = {
	productId: PropTypes.number,
	productDescription: PropTypes.string,
	productName: PropTypes.string,
	updateCart: PropTypes.func,
};

export default ProductCard;
