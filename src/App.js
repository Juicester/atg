import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

function App(props) {
	return (
		// <Container className='container-fluid d-flex justify-content-center'></Container>
		<div className={props.location.pathname === '/' ? 'App bg' : 'App'}>
			<Header />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
