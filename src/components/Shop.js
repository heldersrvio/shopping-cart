import React from 'react';
import NavigationBar from './NavigationBar';
import PropTypes from 'prop-types';
import DanmachiOratoria from '../images/DanmachiOratoria.jpg';
import iOS13 from '../images/iOS13.jpg';
import KotlinStandardLibrary from '../images/KotlinStandardLibrary.png';
import Lear from '../images/Lear.jpg';
import NyahyssavEmiliLonneberga from '../images/NyahyssavEmiliLonneberga.jpg';
import Python from '../images/Python.jpg';
import TennouNoNihonshi from '../images/TennouNoNihonshi.jpg';
import ThePriorityOfTheOrangeTree from '../images/ThePriorityOfTheOrangeTree.jpg';
import ProductCard from './ProductCard';
import './Shop.css';

const Shop = (props) => {
	const products = [
		{
			id: 1,
			name:
				'ダンジョンに出会いを求めるのは間違っているだろうかソードオラトリア１巻',
			description:
				'A blonde girl holding a sword with an orange-haired elf girl behind her',
			image: DanmachiOratoria,
			price: 5,
		},
		{
			id: 2,
			name: 'Programming iOS 13',
			description: 'A bird',
			image: iOS13,
			price: 30,
		},
		{
			id: 3,
			name: 'Kotlin Standard Library',
			description: 'Green leaves with droplets of dew',
			image: KotlinStandardLibrary,
			price: 30,
		},
		{
			id: 4,
			name: 'Lear',
			description: 'A crown with a torn red cloth on top of it',
			image: Lear,
			price: 10,
		},
		{
			id: 5,
			name: 'Nya hyss av Emil i Lönneberga',
			description: 'A blond boy with blue clothes running',
			image: NyahyssavEmiliLonneberga,
			price: 5,
		},
		{
			id: 6,
			name: 'Programming Python',
			description: 'A snake',
			image: Python,
			price: 30,
		},
		{
			id: 7,
			name: '天皇の日本史',
			description: 'A Japanese archer',
			image: TennouNoNihonshi,
			price: 20,
		},
		{
			id: 8,
			name: 'The Priority of the Orange Tree',
			description: 'A tower with a dragon coiling around it',
			image: ThePriorityOfTheOrangeTree,
			price: 15,
		},
	];

	return (
		<div>
			<NavigationBar
				numberOfItemsInCart={props.numberOfItemsInCart}
				isHome={false}
				totalToPay={props.totalToPay}
			/>
			<div id="products-grid">
				{products.map((product) => {
					return (
						<ProductCard
							productId={product.id}
							productDescription={product.description}
							productName={product.name}
							productImage={product.image}
							productPrice={product.price}
							updateCart={props.updateCart}
						/>
					);
				})}
			</div>
		</div>
	);
};

Shop.propTypes = {
	numberOfItemsInCart: PropTypes.number,
	updateCart: PropTypes.func,
	totalToPay: PropTypes.number,
};

export default Shop;
