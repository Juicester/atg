import React, { useState } from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import QuestionForm from '../QuestionForm/QuestionForm';
import { Link, Redirect } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import LincolnFace from '../../images/The Greats/Abraham Lincoln/Abraham_Lincoln_Face_v1.png';
import GandhiFace from '../../images/The Greats/Mahatma Gandhi/Mahatma_Gandhi_Face_v1.png';
import EinsteinFace from '../../images/The Greats/Albert Einstein/Albert_Einstein_Face_v1.png';
import MLKFace from '../../images/The Greats/Martin Luther King Jr/Martin_Luther_King_Jr_Face_v1.png';
import CleopatraFace from '../../images/The Greats/Cleopatra/Cleopatra_Face_v1.png';
import MonroeFace from '../../images/The Greats/Marilyn Monroe/Marilyn_Monroe_Face_v1.png';
import EarhartFace from '../../images/The Greats/Amelia Earhart/Emelia_Earhart_Face_v1.png';
import CaesarFace from '../../images/The Greats/Julius Caesar/Julius_Caesar_Face_v1.png';

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

			<h1>Ask The Greats</h1>
			<QuestionForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				handleGreatChange={handleGreatChange}
				searchString={searchString}
				greatString={greatString}
			/>
			<h3>{question}</h3>
			<h3>{chosenGreat}</h3>
			{/* <Row className='row justify-content-center'>
				<Col>
					<Card style={{ width: '15rem' }} className='great-card'>
						<Link
							to={`/quiz/abraham_lincoln`}
							className='subcategory item btn stretched-link'>
							<Card.Img variant='top' src={LincolnFace} />
							<h5>Abraham Lincoln</h5>
						</Link>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '15rem' }} className='great-card'>
						<Link
							to={`/quiz/mahatma_gandhi`}
							className='subcategory item btn stretched-link'>
							<Card.Img variant='top' src={GandhiFace} />
							<h5>Mahatma Gandhi</h5>
						</Link>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '15rem' }} className='great-card'>
						<Link
							to={`/quiz/albert_einstein`}
							className='subcategory item btn stretched-link'>
							<Card.Img variant='top' src={EinsteinFace} />
							<h5>Albert Einstein</h5>
						</Link>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '15rem' }} className='great-card'>
						<Link
							to={`/quiz/cleopatra`}
							className='subcategory item btn stretched-link'>
							<Card.Img variant='top' src={CleopatraFace} />
							<h5>Cleopatra</h5>
						</Link>
					</Card>
				</Col>
			</Row>
			<Row className='row justify-content-center'>
				<Col>
					<Card style={{ width: '15rem' }} className='great-card'>
						<Link
							to={`/quiz/martin_luther_king_jr`}
							className='subcategory item btn stretched-link'>
							<Card.Img variant='top' src={MLKFace} />
							<h5>Martin Luther King Jr</h5>
						</Link>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '15rem' }} className='great-card'>
						<Link
							to={`/quiz/amelia_earhart`}
							className='subcategory item btn stretched-link'>
							<Card.Img variant='top' src={EarhartFace} />
							<h5>Emelia Earhart</h5>
						</Link>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '15rem' }} className='great-card'>
						<Link
							to={`/quiz/julius_caesar`}
							className='subcategory item btn stretched-link'>
							<Card.Img variant='top' src={CaesarFace} />
							<h5>Julius Caesar</h5>
						</Link>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '15rem' }} className='great-card'>
						<Link
							to={`/quiz/marilyn_monroe`}
							className='subcategory item btn stretched-link'>
							<Card.Img variant='top' src={MonroeFace} />
							<h5>Marilyn Monroe</h5>
						</Link>
					</Card>
				</Col>
			</Row> */}
		</Container>
	);
}

export default Home;
