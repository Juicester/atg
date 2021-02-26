import React from 'react';
import './GetToKnow.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Lincoln from '../../images/The Greats/Abraham Lincoln/Abraham_Lincoln_Face_v1.png';
import Gandhi from '../../images/The Greats/Mahatma Gandhi/Mahatma_Gandhi_Face_v1.png';
import Einstein from '../../images/The Greats/Albert Einstein/Albert_Einstein_Face_v1.png';
import Cleopatra from '../../images/The Greats/Cleopatra/Cleopatra_Face_v1.png';
import MLK from '../../images/The Greats/Martin Luther King Jr/Martin_Luther_King_Jr_Face_v1.png';
import Earhart from '../../images/The Greats/Amelia Earhart/Amelia_Earhart_Face_v1.png';
import Caesar from '../../images/The Greats/Julius Caesar/Julius_Caesar_Face_v1.png';
import Monroe from '../../images/The Greats/Marilyn Monroe/Marilyn_Monroe_Face_v1.png';

function GetToKnow(props) {
	return (
		<Container>
			<h1 className='title-text'>GET TO KNOW THE GREATS</h1>
			<h3>_______________________</h3>
			<h3>
				A Selection of Some of History's Most Admirable Movers and Shakers
			</h3>
			<h4>Click a Historical Figure to Learn More About Them!</h4>

			<Row className='row justify-content-center'>
				<Col sm={true} className='text-center col-lg-4 col-sm-12 col-md-6'>
					<Card style={{ width: '18rem' }} className='great-card'>
						<Link
							to={`/get_to_know/Abraham Lincoln`}
							className='subcategory item btn stretched-link'>
							<Card.Img variant='top' src={Lincoln} />
							<h5>Abraham Lincoln</h5>
						</Link>
					</Card>
				</Col>
				<Col sm={true} className='text-center col-lg-4 col-sm-12 col-md-6'>
					<Card style={{ width: '18rem' }} className='great-card'>
						<Link
							to={`/get_to_know/Mahatma Gandhi`}
							className='subcategory item btn stretched-link'>
							<Card.Img variant='top' src={Gandhi} />
							<h5>Mahatma Gandhi</h5>
						</Link>
					</Card>
				</Col>
				<Col sm={true} className='text-center col-lg-4 col-sm-12 col-md-6'>
					<Card style={{ width: '18rem' }} className='great-card'>
						<Link
							to={`/get_to_know/Albert Einstein`}
							className='subcategory item btn stretched-link'>
							<Card.Img variant='top' src={Einstein} />
							<h5>Albert Einstein</h5>
						</Link>
					</Card>
				</Col>
				<Col sm={true} className='text-center col-lg-4 col-sm-12 col-md-6'>
					<Card style={{ width: '18rem' }} className='great-card'>
						<Link
							to={`/get_to_know/Cleopatra`}
							className='subcategory item btn stretched-link'>
							<Card.Img variant='top' src={Cleopatra} />
							<h5>Cleopatra</h5>
						</Link>
					</Card>
				</Col>
			</Row>
			<Row className='row justify-content-center'>
				<Col sm={true} className='text-center col-lg-4 col-sm-12 col-md-6'>
					<Card style={{ width: '18rem' }} className='great-card'>
						<Link
							to={`/get_to_know/Martin Luther King Jr`}
							className='subcategory item btn stretched-link'>
							<Card.Img variant='top' src={MLK} />
							<h5>Martin Luther King Jr</h5>
						</Link>
					</Card>
				</Col>
				<Col sm={true} className='text-center col-lg-4 col-sm-12 col-md-6'>
					<Card style={{ width: '18rem' }} className='great-card'>
						<Link
							to={`/get_to_know/Amelia Earhart`}
							className='subcategory item btn stretched-link'>
							<Card.Img variant='top' src={Earhart} />
							<h5>Amelia Earhart</h5>
						</Link>
					</Card>
				</Col>
				<Col sm={true} className='text-center col-lg-4 col-sm-12 col-md-6'>
					<Card style={{ width: '18rem' }} className='great-card'>
						<Link
							to={`/get_to_know/Julius Caesar`}
							className='subcategory item btn stretched-link'>
							<Card.Img variant='top' src={Caesar} />
							<h5>Julius Caesar</h5>
						</Link>
					</Card>
				</Col>
				<Col sm={true} className='text-center col-lg-4 col-sm-12 col-md-6'>
					<Card style={{ width: '18rem' }} className='great-card'>
						<Link
							to={`/get_to_know/Marilyn Monroe`}
							className='subcategory item btn stretched-link'>
							<Card.Img variant='top' src={Monroe} />
							<h5>Albert Einstein</h5>
						</Link>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default GetToKnow;
