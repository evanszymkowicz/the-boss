import React, { useState, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
	const [ formData, setFormData ] = useState({
		name: '',
		location: '',
		favoriterossalbum: '',
		favoriterosssong: ''
	});
	const { name, location, favoriterossalbum, favoriterosssong } = formData;
	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
	const onSubmit = (e) => {
		e.preventDefault();
		createProfile(formData, history);
		history.push('/maybach');
	};

	return (
		<Fragment>
			<div className="profile__form">
				<h1>Create Your Profile</h1>
				<form className="form" onSubmit={onSubmit}>
					<div className="form-input">
						<input type="text" placeholder="Name" name="name" value={name} onChange={onChange} />
					</div>
					<div className="form-input">
						<input
							type="text"
							placeholder="Location"
							name="location"
							value={location}
							onChange={onChange}
						/>
					</div>
					<div className="form-input">
						<input
							type="text"
							placeholder="Your fav album"
							name="favoriterossalbum"
							value={favoriterossalbum}
							onChange={onChange}
						/>
					</div>
					<div className="form-input">
						<input
							type="text"
							placeholder="Your fav song"
							name="favoriterosssong"
							value={favoriterosssong}
							onChange={onChange}
						/>
					</div>

					<input type="submit" className="btn" value="Done!" />
				</form>
			</div>
		</Fragment>
	);
};

CreateProfile.propTypes = {
	createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
