import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Lincoln from '../../images/Abraham_Lincoln_Real.jpg';
import Gandhi from '../../images/Mahatma_Gandhi_Real.jpg';
import Einstein from '../../images/Albert_Einstein_Real.jpg';

function GetToKnow(props) {
	return (
		<Container className='container-fluid justify-content-center'>
			<Row className='row justify-content-center'>
				<Col sm={true} className='text-center col-lg-4 col-sm-12 col-md-6'>
					<Card style={{ width: '18rem' }} className='team-card'>
						<Link
							to={`/get_to_know/abraham_lincoln`}
							className='subcategory item btn stretched-link'>
							<Card.Img variant='top' src={Lincoln} />
							<h5>Abraham Lincoln</h5>
						</Link>
					</Card>
				</Col>
				<Col sm={true} className='text-center col-lg-4 col-sm-12 col-md-6'>
					<Card style={{ width: '18rem' }} className='team-card'>
						<Link
							to={`/get_to_know/mahatma_gandhi`}
							className='subcategory item btn stretched-link'>
							<Card.Img variant='top' src={Gandhi} />
							<h5>Mahatma Gandhi</h5>
						</Link>
					</Card>
				</Col>
				<Col sm={true} className='text-center col-lg-4 col-sm-12 col-md-6'>
					<Card style={{ width: '18rem' }} className='team-card'>
						<Link
							to={`/get_to_know/albert_einstein`}
							className='subcategory item btn stretched-link'>
							<Card.Img variant='top' src={Einstein} />
							<h5>Albert Einstein</h5>
						</Link>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default GetToKnow;
