import React, { useState } from 'react';
import './Quiz.css';
import Container from 'react-bootstrap/Container';
import LincolnNeutral from '../../images/The Greats/Abraham Lincoln/Abraham_Lincoln_neutral.png';
import LincolnAgree from '../../images/The Greats/Abraham Lincoln/Abraham_Lincoln_agree.png';
import LincolnDisagree from '../../images/The Greats/Abraham Lincoln/Abraham_Lincoln_disagree.png';
import Image from 'react-bootstrap/Image';

function imgAdder(quizScore) {
	let img;
	if (quizScore <= -3) {
		img = LincolnDisagree;
	} else if (quizScore <= 3) {
		img = LincolnNeutral;
	} else {
		img = LincolnAgree;
	}
	return img;
}

function textAdder(quizScore) {
	let text;
	if (quizScore <= -3) {
		text = 'Disagree';
	} else if (quizScore <= 3) {
		text = 'Neutral';
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

	const { name, adviceQuestion } = props;

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
			<h1>{adviceQuestion}</h1>
			<h2>Before {name} can weigh in,</h2>
			<h2>just a few questions about this decision:</h2>
			<div className='quiz'>
				{showScore ? (
					<div>
						<div className='score-section'>You scored {score} out of 10</div>
						<h3 className='score-section'>
							{name} would {textAdder(score)} with {adviceQuestion}
						</h3>
						<Image src={imgAdder(score)} style={{ width: '25rem' }} />
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
		</Container>
	);
}

export default Quiz;
