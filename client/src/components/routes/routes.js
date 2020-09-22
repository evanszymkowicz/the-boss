import React from 'react';
import { Route, Switch } from 'react-router-dom';
//  components
import Register from '../auth/Register';
import Login from '../auth/Login';
import Maybach from '../maybach/Maybach';
import CreateProfile from '../maybach/CreateProfile';
import EditProfile from '../maybach/EditProfile';
import AllProfiles from '../maybach/AllProfiles';
import Discussion from '../maybach/Discussion';
import Post from '../maybach/Post';
import PrivateRoute from './PrivateRoute';
//	layout
import NotFound from '../layout/NotFound';

const Routes = () => {
	return (
		<section>
			<Switch>
				<Route exact path="/maybach/register" component={Register} />
				<Route exact path="/maybach/login" component={Login} />
				<PrivateRoute exact path="/maybach" component={Maybach} />
				<PrivateRoute exact path="/maybach/create-profile" component={CreateProfile} />
				<PrivateRoute exact path="/maybach/edit-profile" component={EditProfile} />
				<PrivateRoute exact path="/maybach/users" component={AllProfiles} />
				<PrivateRoute exact path="/maybach/posts" component={Discussion} />
				<PrivateRoute exact path="/maybach/posts/:id" component={Post} />
				<Route component={NotFound} />
			</Switch>
		</section>
	);
};

export default Routes;
