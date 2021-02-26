import React from 'react';
import './GreatShowPage.css';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lincoln from '../../images/Abraham_Lincoln_Real.jpg';
import LincolnAgree from '../../images/The Greats/Abraham Lincoln/Abraham_Lincoln_agree.png';
import LincolnDisagree from '../../images/The Greats/Abraham Lincoln/Abraham_Lincoln_disagree.png';
import Gandhi from '../../images/Mahatma_Gandhi_Real.jpg';
import GandhiAgree from '../../images/The Greats/Mahatma Gandhi/Mahatma_Gandhi_agree.png';
import GandhiDisagree from '../../images/The Greats/Mahatma Gandhi/Mahatma_Gandhi_disagree.png';
import Einstein from '../../images/Albert_Einstein_Real.jpg';
import EinsteinAgree from '../../images/The Greats/Albert Einstein/Albert_Einstein_agree.png';
import EinsteinDisagree from '../../images/The Greats/Albert Einstein/Albert_Einstein_disagree.png';
import Cleopatra from '../../images/The Greats/Cleopatra/Cleopatra_signature.png';
import CleopatraAgree from '../../images/The Greats/Cleopatra/Cleopatra_agree .png';
import CleopatraDisagree from '../../images/The Greats/Cleopatra/Cleopatra_disagree.png';
import MLK from '../../images/The Greats/Martin Luther King Jr/Martin_Luther_King_Jr_signature.png';
import MLKAgree from '../../images/The Greats/Martin Luther King Jr/Martin_Luther_King_Jr_agree.png';
import MLKDisagree from '../../images/The Greats/Martin Luther King Jr/Martin_Luther_King_Jr_disagree.png';
import Earhart from '../../images/The Greats/Amelia Earhart/Amelia_Earhart_signature.png';
import EarhartAgree from '../../images/The Greats/Amelia Earhart/Amelia_Earhart_agree.png';
import EarhartDisagree from '../../images/The Greats/Amelia Earhart/Amelia_Earhart_disagree.png';
import Caesar from '../../images/The Greats/Julius Caesar/Julius_Caesar_signature.png';
import CaesarAgree from '../../images/The Greats/Julius Caesar/Julius_Caesar_agree.png';
import CaesarDisagree from '../../images/The Greats/Julius Caesar/Julius_Caesar_disagree.png';
import Monroe from '../../images/The Greats/Marilyn Monroe/Marilyn_Monroe_signature.png';
import MonroeAgree from '../../images/The Greats/Marilyn Monroe/Marilyn_Monroe_agree.png';
import MonroeDisagree from '../../images/The Greats/Marilyn Monroe/Marilyn_Monroe_disagree.png';

function imgAdder(greatName) {
	let img;
	switch (greatName) {
		case 'Abraham Lincoln':
			img = Lincoln;
			// imgAgree = LincolnAgree;
			// imgDis = LincolnDisagree;
			break;
		case 'Mahatma Gandhi':
			img = Gandhi;
			break;
		case 'Albert Einstein':
			img = Einstein;
			break;
		case 'Cleopatra':
			img = Cleopatra;
			break;
		case 'Martin Luther King Jr':
			img = MLK;
			break;
		case 'Amelia Earhart':
			img = Earhart;
			break;
		case 'Julius Caesar':
			img = Caesar;
			break;
		case 'Marilyn Monroe':
			img = Monroe;
			break;
		default:
			img = '';
	}
	return img;
}
function imgAdderAgree(greatName) {
	let imgAgree;
	switch (greatName) {
		case 'Abraham Lincoln':
			imgAgree = LincolnAgree;
			break;
		case 'Mahatma Gandhi':
			imgAgree = GandhiAgree;
			break;
		case 'Albert Einstein':
			imgAgree = EinsteinAgree;
			break;
		case 'Cleopatra':
			imgAgree = CleopatraAgree;
			break;
		case 'Martin Luther King Jr':
			imgAgree = MLKAgree;
			break;
		case 'Amelia Earhart':
			imgAgree = EarhartAgree;
			break;
		case 'Julius Caesar':
			imgAgree = CaesarAgree;
			break;
		case 'Marilyn Monroe':
			imgAgree = MonroeAgree;
			break;
		default:
			imgAgree = '';
	}
	return imgAgree;
}
function imgAdderDisagree(greatName) {
	let imgDisagree;
	switch (greatName) {
		case 'Abraham Lincoln':
			imgDisagree = LincolnDisagree;
			break;
		case 'Mahatma Gandhi':
			imgDisagree = GandhiDisagree;
			break;
		case 'Albert Einstein':
			imgDisagree = EinsteinDisagree;
			break;
		case 'Cleopatra':
			imgDisagree = CleopatraDisagree;
			break;
		case 'Martin Luther King Jr':
			imgDisagree = MLKDisagree;
			break;
		case 'Amelia Earhart':
			imgDisagree = EarhartDisagree;
			break;
		case 'Julius Caesar':
			imgDisagree = CaesarDisagree;
			break;
		case 'Marilyn Monroe':
			imgDisagree = MonroeDisagree;
			break;
		default:
			imgDisagree = '';
	}
	return imgDisagree;
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
			<h1 className='name-text'>{great.name}</h1>
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
			<Row>
				<Col>
					<Image
						src={imgAdderAgree(great.name)}
						style={{ width: '12rem' }}
						thumbnail
					/>
				</Col>
				<Col>
					<Image
						src={imgAdderDisagree(great.name)}
						style={{ width: '12rem' }}
						thumbnail
					/>
				</Col>
			</Row>
		</div>
	);
}

export default GreatShowPage;
