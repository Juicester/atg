import React from 'react';
import './GreatShowPage.css';

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
			<h2>{great.img_url}</h2>
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
