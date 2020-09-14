import React from 'react';
import { Route, Switch } from 'react-router-dom';
//  customization
import Register from '../auth/Register';
import Login from '../auth/Login';
import hustlin from '../hustlin/hustlin';
import CreateProfile from '../hustlin/CreateProfile';
import EditProfile from '../hustlin/EditProfile';
import AllProfiles from '../hustlin/AllProfiles';
import Discussion from '../hustlin/Discussion';
import Post from '../hustlin/Post';
import PrivateRoute from '../routing/PrivateRoute';
import NotFound from '../layout/NotFound';

const Routes = () => {
	return (
		<section>
			<Switch>
				<Route exact path="/hustlin/register" component={Register} />
				<Route exact path="/hustlin/login" component={Login} />
				<PrivateRoute exact path="/hustlin" component={hustlin} />
				<PrivateRoute exact path="/hustlin/create-profile" component={CreateProfile} />
				<PrivateRoute exact path="/hustlin/edit-profile" component={EditProfile} />
				<PrivateRoute exact path="/hustlin/users" component={AllProfiles} />
				<PrivateRoute exact path="/hustlin/posts" component={Discussion} />
				<PrivateRoute exact path="/hustlin/posts/:id" component={Post} />
				<Route component={NotFound} />
			</Switch>
		</section>
	);
};

export default Routes;
