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
					path={`/get_to_know/Abraham Lincoln`}
					exact={true}
					render={() => (
						<GreatShowPage name={'Abraham Lincoln'} data={greatData} />
					)}
				/>
				<Route
					path={`/get_to_know/Mahatma Gandhi`}
					exact={true}
					render={() => (
						<GreatShowPage name={'Mahatma Gandhi'} data={greatData} />
					)}
				/>
				<Route
					path={`/get_to_know/Albert Einstein`}
					exact={true}
					render={() => (
						<GreatShowPage name={'Albert Einstein'} data={greatData} />
					)}
				/>
				<Route
					path={`/get_to_know/Cleopatra`}
					exact={true}
					render={() => <GreatShowPage name={'Cleopatra'} data={greatData} />}
				/>
				<Route
					path={`/get_to_know/Martin Luther King Jr`}
					exact={true}
					render={() => (
						<GreatShowPage name={'Martin Luther King Jr'} data={greatData} />
					)}
				/>
				<Route
					path={`/get_to_know/Amelia Earhart`}
					exact={true}
					render={() => (
						<GreatShowPage name={'Amelia Earhart'} data={greatData} />
					)}
				/>
				<Route
					path={`/get_to_know/Julius Caesar`}
					exact={true}
					render={() => (
						<GreatShowPage name={'Julius Caesar'} data={greatData} />
					)}
				/>
				<Route
					path={`/get_to_know/Marilyn Monroe`}
					exact={true}
					render={() => (
						<GreatShowPage name={'Marilyn Monroe'} data={greatData} />
					)}
				/>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
