import React from 'react';
import './QuestionForm.css';

function QuestionForm(props) {
	// destructure the props
	const { handleSubmit, handleChange, searchString } = props;

	return (
		<form onSubmit={handleSubmit}>
			<input
				placeholder='Should I...'
				type='text'
				name='searchString'
				required
				onChange={handleChange}
				value={searchString}
				className='search-input'
			/>
			<button type='submit'>Ask The Great</button>
		</form>
	);
}

export default QuestionForm;
