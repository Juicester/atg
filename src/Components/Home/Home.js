import React, { useState, useEffect } from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import QuestionForm from '../QuestionForm/QuestionForm';
import Quiz from '../Quiz/Quiz';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
		<Container className='container-fluid justify-content-center'>
			<h1>Ask The Greats</h1>
			<QuestionForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
			<h3>{question}</h3>
			<Row className='row justify-content-center'>
				<Col>
					<Link to={`/abraham_lincoln`}>Lincoln</Link>
				</Col>
				<Col>
					<Link to={`/mahatma_gandhi`}>Gandhi</Link>
				</Col>
				<Col>
					<Link to={`/albert_einstein`}>Einstein</Link>
				</Col>
			</Row>
			{/* <Quiz /> */}
		</Container>
	);
}

export default Home;
