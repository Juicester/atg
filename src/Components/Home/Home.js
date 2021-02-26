import React, { useState } from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import QuestionForm from '../QuestionForm/QuestionForm';
import { Link, Redirect } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Home(props) {
	// set variables and setters
	const [searchString, setSearchString] = useState('');
	const [greatString, setGreatString] = useState([]);
	const [chosenGreat, setChosenGreat] = useState('');
	const [question, setQuestion] = useState([]);
	const [toNewPage, setToNewPage] = useState(false);

	// handle event change functions
	function handleChange(event) {
		setSearchString(event.target.value);
	}
	function handleGreatChange(event) {
		setGreatString(event.target.value);
		// console.log(greatString);
	}
	function handleSubmit(event) {
		event.preventDefault();
		setQuestion(searchString);
		setChosenGreat(greatString);
		setTimeout(() => setToNewPage(true), 500);
	}

	return (
		<Container className='container-fluid justify-content-center'>
			{toNewPage ? <Redirect to={`/quiz/${chosenGreat}/${question}`} /> : null}

			<h1 className='title-text'>Need Help Making A Decision?</h1>
			<h3>Find Out What Abraham Lincoln and Other Historical</h3>
			<h3>Figures Would Do In Your Shoes!</h3>

			<QuestionForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				handleGreatChange={handleGreatChange}
				searchString={searchString}
				greatString={greatString}
			/>
			{/* <h3>{question}</h3>
			<h3>{chosenGreat}</h3> */}
			<Row>
				<Col>
					<p>
						Should you go back to school? Should you text your Ex? Should you
						move to tokyo? What ever decision you're contemplating, let the
						Great Ones help you decide!
					</p>
				</Col>
				<Col>
					<p>
						We combine our cutting edge technical algorithms with authentic
						historical character profiling to allow history's greatest icons to
						offer you their insight!
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default Home;
