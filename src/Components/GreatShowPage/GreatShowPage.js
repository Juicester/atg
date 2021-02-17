import React from 'react';
import './GreatShowPage.css';
import Image from 'react-bootstrap/Image';
import Lincoln from '../../images/Abraham_Lincoln_Real.jpg';
import Gandhi from '../../images/Mahatma_Gandhi_Real.jpg';
import Einstein from '../../images/Albert_Einstein_Real.jpg';

function imgAdder(greatName) {
	let img;
	switch (greatName) {
		case 'Abraham Lincoln':
			img = Lincoln;
			break;
		case 'Mahatma Gandhi':
			img = Gandhi;
			break;
		case 'Albert Einstein':
			img = Einstein;
			break;
		default:
			img = '';
	}
	return img;
}

function GreatShowPage(props) {
	const { name, data } = props;
	let great;

	for (let i = 0; i < data.length; i++) {
		if (name === data[i].name) {
			great = data[i];
		}
	}

	return (
		<div>
			<h1>{great.name}</h1>
			<Image
				src={imgAdder(great.name)}
				style={{ width: '18rem' }}
				roundedCircle
			/>
			<h3>{great.stats.birthplace}</h3>
			<h3>{great.stats.time_period}</h3>
			<h3>{great.milestones.milestone_0}</h3>
			<h3>{great.milestones.milestone_1}</h3>
			<h3>{great.milestones.milestone_2}</h3>
			<h3>{great.famous_quote}</h3>
			<h3>{great.bio}</h3>
		</div>
	);
}

export default GreatShowPage;
