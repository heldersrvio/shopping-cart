import React from 'react';
import NavigationBar from './NavigationBar';
import PropTypes from 'prop-types';
import DanmachiOratoria from './images/DanmachiOratoria.jpg';
import iOS13 from './images/iOS13.jpg';
import KotlinStandardLibrary from './images/KotlinStandardLibrary.png';
import Lear from './images/Lear.jpg';
import NyahyssavEmiliLonneberga from './images/NyahyssavEmiliLonneberga.jpg';
import Python from './images/Python.jpg';
import TennouNoNihonshi from './images/TennouNoNihonshi.jpg';
import ThePriorityOfTheOrangeTree from './images/ThePriorityOfTheOrangeTree.jpg';
import ProductCard from './ProductCard';

const Shop = (props) => {
	const products = [
		{
			id: 1,
			name:
				'ダンジョンに出会いを求めるのは間違っているだろうかソードオラトリア１巻',
			description:
				'A blonde girl holding a sword with an orange-haired elf girl behind her',
			image: DanmachiOratoria,
		},
		{
			id: 2,
			name: 'Programming iOS 13',
			description: 'A bird',
			image: iOS13,
		},
		{
			id: 3,
			name: 'Kotlin Standard Library',
			description: 'Green leaves with droplets of dew',
			image: KotlinStandardLibrary,
		},
		{
			id: 4,
			name: 'Lear',
			description: 'A crown with a torn red cloth on top of it',
			image: Lear,
		},
		{
			id: 5,
			name: 'Nya hyss av Emil i Lönneberga',
			description: 'A blond boy with blue clothes running',
			image: NyahyssavEmiliLonneberga,
		},
		{
			id: 6,
			name: 'Programming Python',
			description: 'A snake',
			image: Python,
		},
		{
			id: 7,
			name: '天皇の日本史',
			description: 'A Japanese archer',
			image: TennouNoNihonshi,
		},
		{
			id: 8,
			name: 'The Priority of the Orange Tree',
			description: 'A tower with a dragon coiling around it',
			image: ThePriorityOfTheOrangeTree,
		},
	];

	return (
		<div>
			<NavigationBar numberOfItemsInCart={props.numberOfItemsInCart} />
			{products.map((product) => {
				return (
					<ProductCard
						productId={product.id}
						productDescription={product.description}
						productName={product.name}
						productImage={product.image}
						updateCart={props.updateCart}
					/>
				);
			})}
		</div>
	);
};

Shop.propTypes = {
	numberOfItemsInCart: PropTypes.number,
	updateCart: PropTypes.func,
};

export default Shop;
