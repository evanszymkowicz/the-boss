import axios from 'axios';
import { GET_PRODUCTS, PRODUCT_ERROR } from './types';

//  get all products
export const getProducts = () => async (dispatch) => {
	try {
		const res = await axios.get(`/store${window.location.search}`);

		dispatch({
			type: GET_PRODUCTS,
			payload: res.data
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_ERROR,
			payload: { msg: error.response.statusText, status: error.response.status }
		});
	}
};
