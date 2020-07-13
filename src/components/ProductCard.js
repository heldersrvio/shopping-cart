import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

const ProductCard = (props) => {
	const [isInCart, setIsInCart] = useState(false);
	const [quantity, setQuantity] = useState(1);

	const addToCart = () => {
        if (quantity > 0) {
            setIsInCart(true);
		    props.updateCart(quantity, props.productPrice);
        }
	};

	const removeFromCart = () => {
		setIsInCart(false);
		props.updateCart(-quantity, props.productPrice);
	};

	const changeQuantity = (newQuantity) => {
		if (newQuantity >= 0) {
            console.log('Changing quantity...');
			const oldQuantity = quantity;
			if (newQuantity === 0 && isInCart) {
				setIsInCart(false);
			}
            setQuantity(newQuantity);
            if (isInCart) {
                props.updateCart(newQuantity - oldQuantity, props.productPrice);
            }
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
				<div className="product-info">
					<span>{props.productName}</span>
					<br></br>
					<span>${props.productPrice}.00</span>
				</div>
			</div>
			<div className="product-card-bottom-section">
				{addRemoveButton}
				<br></br>
				<label
					for={`${props.productId}-quantity`}
				>Quantity: </label>
				<input
					id={`${props.productId}-quantity`}
					type="number"
					min="0"
					value={quantity}
					onChange={(e) => changeQuantity(Number(e.target.value))}
				></input>
			</div>
		</div>
	);
};

ProductCard.propTypes = {
	productId: PropTypes.number,
	productDescription: PropTypes.string,
	productImage: PropTypes.string,
	productName: PropTypes.string,
	productPrice: PropTypes.number,
	updateCart: PropTypes.func,
};

export default ProductCard;
