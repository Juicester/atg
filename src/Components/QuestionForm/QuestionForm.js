import React from 'react';
import './QuestionForm.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function QuestionForm(props) {
	// destructure the props
	const {
		handleSubmit,
		handleChange,
		handleGreatChange,
		searchString,
		chosenGreat,
	} = props;

	return (
		<form onSubmit={handleSubmit}>
			<Row>
				<input
					placeholder='Should I...'
					type='text'
					name='searchString'
					required
					onChange={handleChange}
					value={searchString}
					className='search-input'
				/>
			</Row>
			<Row>
				<Col>
					<input
						id='great1'
						type='radio'
						value='Abraham Lincoln'
						name='a'
						onChange={handleGreatChange}
						checked={chosenGreat}
					/>
					<label for='great1'>Abraham Lincoln</label>
				</Col>
				<Col>
					<input
						id='great2'
						type='radio'
						value='Mahatma Gandhi'
						name='a'
						onChange={handleGreatChange}
						checked={chosenGreat}
					/>
					<label for='great2'>Mahatma Gandhi</label>
				</Col>
				<Col>
					<input
						id='great3'
						type='radio'
						name='a'
						value='Albert Einstein'
						onChange={handleGreatChange}
						checked={chosenGreat}
					/>
					<label for='great3'>Albert Einstein</label>
				</Col>
				<Col>
					<input
						id='great4'
						type='radio'
						name='a'
						value='Cleopatra'
						onChange={handleGreatChange}
						checked={chosenGreat}
					/>
					<label for='great4'>Cleopatra</label>
				</Col>
			</Row>
			<Row>
				<Col>
					<input
						id='great5'
						type='radio'
						name='a'
						value='Martin Luther King Jr'
						onChange={handleGreatChange}
						checked={chosenGreat}
					/>
					<label for='great5'>Martin Luther King Jr</label>
				</Col>
				<Col>
					<input
						id='great6'
						type='radio'
						name='a'
						value='Emelia Earhart'
						onChange={handleGreatChange}
						checked={chosenGreat}
					/>
					<label for='great6'>Emelia Earhart</label>
				</Col>
				<Col>
					<input
						id='great7'
						type='radio'
						name='a'
						value='Julius Caesar'
						onChange={handleGreatChange}
						checked={chosenGreat}
					/>
					<label for='great7'>Julius Caesar</label>
				</Col>
				<Col>
					<input
						id='great8'
						type='radio'
						name='a'
						value='Marilyn Monroe'
						onChange={handleGreatChange}
						checked={chosenGreat}
					/>
					<label for='great8'>Marilyn Monroe</label>
				</Col>
			</Row>

			<button type='submit'>Ask The Greats</button>
		</form>
	);
}

export default QuestionForm;
