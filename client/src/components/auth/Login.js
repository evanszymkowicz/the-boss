import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import Alert from '../layout/Alert';

const Login = ({ login, isAuthenticated }) => {
	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});

	const { email, password } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		login(email, password);
	};

	//redirect if logged in
	if (isAuthenticated) {
		return <Redirect to="/hustlin" />;
	}

	return (
		<Fragment>
			<Alert />
			<section className="hustlin-register">
				<h1 className="hustlin-login__title">Welcome hustlers!</h1>
				<div className="testaccount">
					<p>TEST ACCOUNT: test@hustlin.com</p>
					<p>PASSWORD: test123</p>
				</div>

				<div className="hustlin-register__form">
					<form className="form" onSubmit={onSubmit}>
						<div className="form-input">
							<input
								type="email"
								placeholder="Email Address"
								name="email"
								value={email}
								onChange={onChange}
								required
							/>
						</div>
						<div className="form-input">
							<input
								type="password"
								placeholder="Password"
								name="password"
								minLength="6"
								value={password}
								onChange={onChange}
								required
							/>
						</div>
						<input type="submit" className="btn" value="Let me in!" />
					</form>
					<p>
						Not a Hustler?{' '}
						<Link className="btn" to="/hustlin/register">
							Become one!
						</Link>
					</p>
				</div>
			</section>
		</Fragment>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
