import React from 'react';
import './QuestionForm.css';

function QuestionForm(props) {
	// destructure the props
	const { handleSubmit, handleChange, searchString } = props;

	return (
		<form onSubmit={handleSubmit}>
			<input
				placeholder='Search'
				type='text'
				name='searchString'
				required
				onChange={handleChange}
				value={searchString}
				className='search-input'
			/>
			<button type='submit'>Search</button>
		</form>
	);
}

export default QuestionForm;
