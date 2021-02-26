import React, { useState } from 'react';
import './Quiz.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import LincolnNeutral from '../../images/The Greats/Abraham Lincoln/Abraham_Lincoln_neutral.png';
import LincolnAgree from '../../images/The Greats/Abraham Lincoln/Abraham_Lincoln_agree.png';
import LincolnDisagree from '../../images/The Greats/Abraham Lincoln/Abraham_Lincoln_disagree.png';
import GandhiNeutral from '../../images/The Greats/Mahatma Gandhi/Mahatma_Gandhi_neutral.png';
import GandhiAgree from '../../images/The Greats/Mahatma Gandhi/Mahatma_Gandhi_agree.png';
import GandhiDisagree from '../../images/The Greats/Mahatma Gandhi/Mahatma_Gandhi_disagree.png';
import EinsteinNeutral from '../../images/The Greats/Albert Einstein/Albert_Einstein_neutral.png';
import EinsteinAgree from '../../images/The Greats/Albert Einstein/Albert_Einstein_agree.png';
import EinsteinDisagree from '../../images/The Greats/Albert Einstein/Albert_Einstein_disagree.png';
import CleopatraNeutral from '../../images/The Greats/Cleopatra/Cleopatra_neutral.png';
import CleopatraAgree from '../../images/The Greats/Cleopatra/Cleopatra_agree .png';
import CleopatraDisagree from '../../images/The Greats/Cleopatra/Cleopatra_disagree.png';
import MLKNeutral from '../../images/The Greats/Martin Luther King Jr/Martin_Luther_King_Jr_neutral.png';
import MLKAgree from '../../images/The Greats/Martin Luther King Jr/Martin_Luther_King_Jr_agree.png';
import MLKDisagree from '../../images/The Greats/Martin Luther King Jr/Martin_Luther_King_Jr_disagree.png';
import EarhartNeutral from '../../images/The Greats/Amelia Earhart/Amelia_Earhart_neutral.png';
import EarhartAgree from '../../images/The Greats/Amelia Earhart/Amelia_Earhart_agree.png';
import EarhartDisagree from '../../images/The Greats/Amelia Earhart/Amelia_Earhart_disagree.png';
import CaesarNeutral from '../../images/The Greats/Julius Caesar/Julius_Caesar_neutral.png';
import CaesarAgree from '../../images/The Greats/Julius Caesar/Julius_Caesar_agree.png';
import CaesarDisagree from '../../images/The Greats/Julius Caesar/Julius_Caesar_disagree.png';
import MonroeNeutral from '../../images/The Greats/Marilyn Monroe/Marilyn_Monroe_neutral.png';
import MonroeAgree from '../../images/The Greats/Marilyn Monroe/Marilyn_Monroe_agree.png';
import MonroeDisagree from '../../images/The Greats/Marilyn Monroe/Marilyn_Monroe_disagree.png';
import Image from 'react-bootstrap/Image';

function imgAdder(quizScore, greatName) {
	let img;
	if (quizScore <= -3) {
		if (greatName === 'Abraham Lincoln') {
			img = LincolnDisagree;
		} else if (greatName === 'Mahatma Gandhi') {
			img = GandhiDisagree;
		} else if (greatName === 'Martin Luther King Jr') {
			img = MLKDisagree;
		} else {
			img = EinsteinDisagree;
		}
	} else if (quizScore <= 3) {
		if (greatName === 'Abraham Lincoln') {
			img = LincolnNeutral;
		} else if (greatName === 'Mahatma Gandhi') {
			img = GandhiNeutral;
		} else if (greatName === 'Martin Luther King Jr') {
			img = MLKNeutral;
		} else {
			img = EinsteinNeutral;
		}
	} else {
		if (greatName === 'Abraham Lincoln') {
			img = LincolnAgree;
		} else if (greatName === 'Mahatma Gandhi') {
			img = GandhiAgree;
		} else if (greatName === 'Martin Luther King Jr') {
			img = MLKAgree;
		} else {
			img = EinsteinAgree;
		}
	}
	return img;
}

function textAdder(quizScore) {
	let text;
	if (quizScore <= -3) {
		text = 'Disagree';
	} else if (quizScore <= 3) {
		text = ' be so, so';
	} else {
		text = 'Agree';
	}
	return text;
}

function Quiz(props) {
	const questions = [
		{
			questionText:
				'Would this decision be the play it safe option or the high risk reward choice?',
			answerOptions: [
				{ answerText: 'Very safe and stable', isCorrect: -2 },
				{ answerText: 'Fairly safe choice', isCorrect: -1 },
				{ answerText: 'Neutral / Not Applicable', isCorrect: 0 },
				{ answerText: 'This would be fairly risky', isCorrect: 1 },
				{ answerText: 'Go big or go home!', isCorrect: 2 },
			],
		},
		{
			questionText:
				'Will this benefit you more in the long term or short term?',
			answerOptions: [
				{ answerText: 'Very much a short term benefit', isCorrect: -2 },
				{ answerText: 'Mildly short term', isCorrect: -1 },
				{ answerText: 'Neutral / Not Applicable', isCorrect: 0 },
				{ answerText: 'Mildly long term', isCorrect: 1 },
				{ answerText: 'Very much a long term benefit', isCorrect: 2 },
			],
		},
		{
			questionText: 'Who will benefit from this decision more, you or others?',
			answerOptions: [
				{ answerText: 'Definitely others', isCorrect: -2 },
				{ answerText: 'Others', isCorrect: -1 },
				{ answerText: 'Neutral / Not Applicable', isCorrect: 0 },
				{ answerText: 'Me', isCorrect: 1 },
				{ answerText: 'Definitely Me', isCorrect: 2 },
			],
		},
		{
			questionText:
				'Will this decision lead to more responsibility or more calm and peace of mind?',
			answerOptions: [
				{ answerText: 'Much more responsibility', isCorrect: -2 },
				{ answerText: 'More responsibility', isCorrect: -1 },
				{ answerText: 'Neutral / Not Applicable', isCorrect: 0 },
				{ answerText: 'More calm', isCorrect: 1 },
				{ answerText: 'Much more calm', isCorrect: 2 },
			],
		},
		{
			questionText: 'How conventional is this decision?',
			answerOptions: [
				{ answerText: 'Very Conventional', isCorrect: -2 },
				{ answerText: 'Conventional', isCorrect: -1 },
				{ answerText: 'Neutral / Not Applicable', isCorrect: 0 },
				{ answerText: "It's kinda out there", isCorrect: 1 },
				{ answerText: "It's an off the walls idea", isCorrect: 2 },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	// const { name, adviceQuestion } = props;

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect === 1) {
			setScore(score + 1);
		} else if (isCorrect === 2) {
			setScore(score + 2);
		} else if (isCorrect === -1) {
			setScore(score - 1);
		} else if (isCorrect === -2) {
			setScore(score - 2);
		} else {
			setScore(score + 0);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<Container fluid>
			<h1>Should You {props.match.params.question}</h1>
			<h2>Before {props.match.params.great} can weigh in,</h2>
			<h2>just a few questions about this decision:</h2>
			<div className='quiz'>
				{showScore ? (
					<div>
						<div className='score-section'>You scored {score} out of 10</div>
						<h3 className='score-section'>
							{props.match.params.great} would {textAdder(score)} with a{' '}
							{props.match.params.question}
						</h3>
						<Image
							src={imgAdder(score, props.match.params.great)}
							style={{ width: '25rem' }}
						/>
					</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>
								{questions[currentQuestion].questionText}
							</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button
									className='answer-button'
									onClick={() =>
										handleAnswerOptionClick(answerOption.isCorrect)
									}>
									{answerOption.answerText}
								</button>
							))}
						</div>
					</>
				)}
			</div>
			<Row>
				<Col>
					<Button variant='primary'>
						<Link to={`/get_to_know/${props.match.params.great}`}>
							More About {props.match.params.great}
						</Link>
					</Button>
				</Col>
				<Col>
					<Button variant='primary'>
						<Link to={`/how_it_works`}>More About Our Process</Link>
					</Button>
				</Col>
			</Row>
			<Row>
				<Col>
					<Button variant='primary'>
						<Link to={`/`}>Ask Another Question!</Link>
					</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default Quiz;
