import React from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<Navbar bg='dark' variant='dark' expand='lg' fixed='top'>
			<Link to={`/`}>
				<Navbar.Brand>Ask The Greats</Navbar.Brand>
			</Link>
			<Link to={`/get_to_know`}>Get to Know the Greats</Link>
			<Link to={`/how_it_works`}>How It Works</Link>
			<Link to={`/contact`}>Contact Us</Link>
		</Navbar>
	);
}

export default Header;
