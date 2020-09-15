import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/layout/Nav';
import NotFound from './components/layout/NotFound';
import Home from './components/home';
import Story from './components/Story';
import Shop from './components/shop';
import Routes from './components/routes/routes';
import Footer from './components/layout/Footer';
import './css/app.css';
//redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

//check if there is any user logged in, get their token if so
if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/story" component={Story} />
					<Route path="/shop" component={Shop} />
					<Route path="/hustlin" component={Routes} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		</Provider>
	);
};

export default App;
