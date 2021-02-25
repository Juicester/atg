import React from 'react';
import './QuestionForm.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import LincolnFace from '../../images/The Greats/Abraham Lincoln/Abraham_Lincoln_Face_v1.png';
import GandhiFace from '../../images/The Greats/Mahatma Gandhi/Mahatma_Gandhi_Face_v1.png';
import EinsteinFace from '../../images/The Greats/Albert Einstein/Albert_Einstein_Face_v1.png';
import CleopatraFace from '../../images/The Greats/Cleopatra/Cleopatra_Face_v1.png';
import MLKFace from '../../images/The Greats/Martin Luther King Jr/Martin_Luther_King_Jr_Face_v1.png';
import EarhartFace from '../../images/The Greats/Amelia Earhart/Emelia_Earhart_Face_v1.png';
import CaesarFace from '../../images/The Greats/Julius Caesar/Julius_Caesar_Face_v1.png';
import MonroeFace from '../../images/The Greats/Marilyn Monroe/Marilyn_Monroe_Face_v1.png';

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
		<Container className='container-fluid justify-content-center'>
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
				<div className='radio-container'>
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
							<label for='great1' className='radio-img'>
								<Image src={LincolnFace} thumbnail /> Abraham Lincoln
							</label>
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
							<label for='great2' className='radio-img'>
								<Image src={GandhiFace} thumbnail /> Mahatma Gandhi
							</label>
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
							<label for='great3' className='radio-img'>
								<Image src={EinsteinFace} thumbnail /> Albert Einstein
							</label>
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
							<label for='great4' className='radio-img'>
								<Image src={CleopatraFace} thumbnail /> Cleopatra
							</label>
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
							<label for='great5' className='radio-img'>
								<Image src={MLKFace} thumbnail /> Martin Luther King Jr
							</label>
						</Col>
						<Col>
							<input
								id='great6'
								type='radio'
								name='a'
								value='Amelia Earhart'
								onChange={handleGreatChange}
								checked={chosenGreat}
							/>
							<label for='great6' className='radio-img'>
								<Image src={EarhartFace} thumbnail /> Amelia Earhart
							</label>
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
							<label for='great7' className='radio-img'>
								<Image src={CaesarFace} thumbnail /> Julius Caesar
							</label>
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
							<label for='great8' className='radio-img'>
								<Image src={MonroeFace} thumbnail /> Marilyn Monroe
							</label>
						</Col>
					</Row>
				</div>
				<button type='submit'>Ask The Greats</button>
			</form>
		</Container>
	);
}

export default QuestionForm;
