import React, { useState } from 'react';
import './Quiz.css';

function Quiz() {
	const questions = [
		{
			questionText:
				'Would this decision be the play it safe option or the high risk reward choice?',
			answerOptions: [
				{ answerText: 'Very safe and stable', isCorrect: false },
				{ answerText: 'Fairly safe choice', isCorrect: false },
				{ answerText: 'Neutral / Not Applicable', isCorrect: false },
				{ answerText: 'This would be fairly risky', isCorrect: true },
				{ answerText: 'Go bif or go home!', isCorrect: true },
			],
		},
		{
			questionText:
				'Will this benefit you more in the long term or short term?',
			answerOptions: [
				{ answerText: 'Very much a short term benefit', isCorrect: false },
				{ answerText: 'Mildly short term', isCorrect: false },
				{ answerText: 'Neutral / Not Applicable', isCorrect: false },
				{ answerText: 'Mildly long term', isCorrect: true },
				{ answerText: 'Very much a long term benefit', isCorrect: true },
			],
		},
		{
			questionText: 'Who will benefit from this decision more, you or others?',
			answerOptions: [
				{ answerText: 'Definitely others', isCorrect: false },
				{ answerText: 'Others', isCorrect: false },
				{ answerText: 'Neutral / Not Applicable', isCorrect: false },
				{ answerText: 'Me', isCorrect: true },
				{ answerText: 'Definitely Me', isCorrect: true },
			],
		},
		{
			questionText:
				'Will this decision lead to more responsibility or more calm and peace of mind?',
			answerOptions: [
				{ answerText: 'Much more responsibility', isCorrect: false },
				{ answerText: 'More responsibility', isCorrect: false },
				{ answerText: 'Neutral / Not Applicable', isCorrect: false },
				{ answerText: 'More calm', isCorrect: true },
				{ answerText: 'Much more calm', isCorrect: true },
			],
		},
		{
			questionText: 'How conventional is this decision?',
			answerOptions: [
				{ answerText: 'Very Conventional', isCorrect: false },
				{ answerText: 'Conventional', isCorrect: false },
				{ answerText: 'Neutral / Not Applicable', isCorrect: false },
				{ answerText: "It's kinda out there", isCorrect: true },
				{ answerText: "It's an off the walls idea", isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='quiz'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
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
								onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
								{answerOption.answerText}
							</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Quiz;
