import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '../actions';

export interface Product {
	title: string;
	picture: string;
	description: string;
	price: number;
	serialNumber: string;
	id: number;
}

export interface FetchDb {
	type: ActionTypes.fetchDb;
	payload: Product[];
}

export const fetchDb = () => async (dispatch: Dispatch) => {
	let response: AxiosResponse<Product[]>;

	try {
		response = await axios.get<Product[]>('/products');
	} catch (e) {
		response = e;
	}
	dispatch<FetchDb>({
		type: ActionTypes.fetchDb,
		payload: response.data
	});
};
