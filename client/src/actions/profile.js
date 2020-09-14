import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, GET_PROFILES, PROFILE_ERROR, EDIT_PROFILE, ACCOUNT_DELETED, CLEAR_PROFILE } from './types';

//  get  user profile
export const getCurrentProfile = () => async (dispatch) => {
	try {
		const res = await axios.get('/hustlin/profile/me');
		dispatch({
			type: GET_PROFILE,
			payload: res.data
		});
	} catch (error) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: error.response.statusText, status: error.response.status }
		});
	}
};

//  get all profiles
export const getProfiles = () => async (dispatch) => {
	dispatch({ type: CLEAR_PROFILE });
	try {
		const res = await axios.get('/hustlin/profile');
		dispatch({
			type: GET_PROFILES,
			payload: res.data
		});
	} catch (error) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: error.response.statusText, status: error.response.status }
		});
	}
};

//  get profile by ID
export const getProfileById = (userId) => async (dispatch) => {
	try {
		const res = await axios.get(`/hustlin/profile/user/${userId}`);
		dispatch({
			type: GET_PROFILE,
			payload: res.data
		});
	} catch (error) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: error.response.statusText, status: error.response.status }
		});
	}
};

//  create/update profile
export const createProfile = (formData, history, edit = false) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		const res = await axios.post('/hustlin/profile', formData, config);

		dispatch({
			type: EDIT_PROFILE,
			payload: res.data
		});
		dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

		if (!edit) {
			history.push('/hustlin');
		}
	} catch (error) {
		const errors = error.response.data.errors;
		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: error.response.statusText, status: error.response.status }
		});
	}
};

//  delete profile
export const deleteAccount = () => async (dispatch) => {
	if (window.confirm('Are you sure? This can NOT be undone!')) {
		try {
			await axios.delete('/hustlin/profile/me');
			dispatch({ type: CLEAR_PROFILE });
			dispatch({ type: ACCOUNT_DELETED });
			dispatch(setAlert('Your account has been deleted.'));
		} catch (error) {
			dispatch({
				type: PROFILE_ERROR,
				payload: { msg: error.response.statusText, status: error.response.status }
			});
		}
	}
};
