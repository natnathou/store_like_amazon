import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from '../history/History';
import { Header } from './Header';
import { ProductsList } from './ProductsList';
import { Cart } from './Cart';
import '../styles/App.css';

export const App = (): JSX.Element => {
	return (
		<Router history={history}>
			<div className='ui container App'>
				<Header />
				<Switch>
					<Route exact path='/'>
						<Redirect to='/store' />
					</Route>
					<Route exact path='/store'>
						<ProductsList />
					</Route>
					<Route exact path='/checkout'>
						<Cart />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};
