import React, { useState, useEffect } from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import QuestionForm from '../QuestionForm/QuestionForm';

function Home() {
	// set variables and setters
	const [searchString, setSearchString] = useState('');
	const [question, setQuestion] = useState([]);

	// handle event change functions
	function handleChange(event) {
		setSearchString(event.target.value);
	}
	function handleSubmit(event) {
		event.preventDefault();
		// getGames(searchString);
		setQuestion(searchString);
	}

	return (
		<Container className='container-fluid d-flex justify-content-center'>
			<h1>Ask The Greats</h1>
			<QuestionForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
			<h3>{question}</h3>
		</Container>
	);
}

export default Home;
