import { Action, ActionTypes, Product } from '../actions';
import _ from 'lodash';

export interface ProductsListState {
	[key: string]: Product;
}

export const productListReducer = (
	state: ProductsListState = {},
	action: Action
) => {
	switch (action.type) {
		case ActionTypes.fetchDb:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		default:
			return { ...state };
	}
};
