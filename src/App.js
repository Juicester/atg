import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';
import { Route, Switch } from 'react-router-dom';
import GreatShowPage from './Components/GreatShowPage/GreatShowPage';
import greatData from './data/greats-data.json';
import GetToKnow from './Components/GetToKnow/GetToKnow';
import ContactPage from './Components/ContactPage/ContactPage';
import HowItWorks from './Components/HowItWorks/HowItWorks';

function App(props) {
	return (
		// <Container className='container-fluid d-flex justify-content-center'></Container>
		<div className={props.location.pathname === '/' ? 'App bg' : 'App'}>
			<Header />
			<Switch>
				<Route path={`/`} exact={true} component={Home} />
				<Route path={`/get_to_know`} exact={true} component={GetToKnow} />
				<Route path={`/how_it_works`} exact={true} component={HowItWorks} />
				<Route path={`/contact`} exact={true} component={ContactPage} />
				<Route path={`/quiz/:great/:question`} exact={true} component={Quiz} />
				<Route
					path={`/quiz/abraham_lincoln`}
					exact={true}
					render={() => (
						<Quiz name={'Abraham Lincoln'} adviceQuestion={'Move to Tokyo'} />
					)}
				/>
				<Route
					path={`/quiz/mahatma_Gandhi`}
					exact={true}
					render={() => (
						<Quiz
							name={'Mahatma Gandhi'}
							adviceQuestion={'This is where the question would go'}
						/>
					)}
				/>
				<Route
					path={`/quiz/albert_einstein`}
					exact={true}
					render={() => (
						<Quiz
							name={'Albert Einstein'}
							adviceQuestion={'This is where the question would go'}
						/>
					)}
				/>
				<Route
					path={`/quiz/cleopatra`}
					exact={true}
					render={() => (
						<Quiz
							name={'Cleopatra'}
							adviceQuestion={'This is where the question would go'}
						/>
					)}
				/>
				<Route
					path={`/quiz/martin_luther_king_jr`}
					exact={true}
					render={() => (
						<Quiz
							name={'Martin Luther King Jr'}
							adviceQuestion={'This is where the question would go'}
						/>
					)}
				/>
				<Route
					path={`/quiz/marilyn_monroe`}
					exact={true}
					render={() => (
						<Quiz
							name={'Marilyn Monroe'}
							adviceQuestion={'This is where the question would go'}
						/>
					)}
				/>
				<Route
					path={`/quiz/julius_caesar`}
					exact={true}
					render={() => (
						<Quiz
							name={'Julius Caesar'}
							adviceQuestion={'This is where the question would go'}
						/>
					)}
				/>
				<Route
					path={`/quiz/amelia_earhart`}
					exact={true}
					render={() => (
						<Quiz
							name={'Amelia Earhart'}
							adviceQuestion={'This is where the question would go'}
						/>
					)}
				/>
				<Route
					path={`/get_to_know/abraham_lincoln`}
					exact={true}
					render={() => (
						<GreatShowPage name={'Abraham Lincoln'} data={greatData} />
					)}
				/>
				<Route
					path={`/get_to_know/mahatma_gandhi`}
					exact={true}
					render={() => (
						<GreatShowPage name={'Mahatma Gandhi'} data={greatData} />
					)}
				/>
				<Route
					path={`/get_to_know/albert_einstein`}
					exact={true}
					render={() => (
						<GreatShowPage name={'Albert Einstein'} data={greatData} />
					)}
				/>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
