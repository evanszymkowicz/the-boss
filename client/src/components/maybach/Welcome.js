import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//	components
import Loader from '../layout/Loader';
import Profile from './Profile';
import News from './News';
import { getCurrentProfile } from '../../actions/profile';

const Welcome = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
	useEffect(
		() => {
			getCurrentProfile();
		},
		[ getCurrentProfile ]
	);

	return (
		<Fragment>
			{loading && profile === null ? (
				<Loader />
			) : (
				<Fragment>
					{profile !== null ? (
						<Fragment>
							<Profile {...profile} />
						</Fragment>
					) : (
						<Fragment>
							<p className="no-profile">Please Create a Profile!</p>
							<Link to="/maybach/create-profile" className="btn ml">
								Create Profile
							</Link>
						</Fragment>
					)}
				</Fragment>
			)}
			<News />
		</Fragment>
	);
};

Welcome.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile })(Welcome);
