import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Container from 'react-bootstrap/Container';

function Home() {
	return (
		<Container className='container-fluid d-flex justify-content-center'>
			<h1>Ask The Greats</h1>
		</Container>
	);
}

export default Home;
