import React from 'react';
import NavigationBar from './NavigationBar';
import PropTypes from 'prop-types';
import './Home.css'

const Home = (props) => {
	return (
		<div id="home">
			<NavigationBar numberOfItemsInCart={props.numberOfItemsInCart} isHome={true} totalToPay={props.totalToPay} />
			<h2>Welcome</h2>
			<br></br>
			<p>In our website you are going to find a wide array of books about many different topics and in many different languages. And best of all, at a fair price. Have fun!</p>
			<p>En nuestro sitio web, encontrará una gran variedad de libros sobre diferentes temas y en diferentes idiomas. Y lo mejor de todo, a un precio justo. ¡Que te diviertas!</p>
			<p>うちのウェブサイトでいろんな主題といろんな言語で筆記された本が見つけられる。そして何よりも、公正な価格で。 楽しんで！</p>
			<p>在我們的網站上，您會找到許多有關許多不同主題和語言的書籍。 最重要的是，價格公道。 玩得開心！</p>
		</div>
	);
};

Home.propTypes = {
	numberOfItemsInCart: PropTypes.number,
	totalToPay: PropTypes.number,
};

export default Home;
