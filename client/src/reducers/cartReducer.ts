import _ from 'lodash';
import { Action, ActionTypes, Product } from '../actions';

export interface CartState {
	[id: string]: Product;
}

export const cartReducer = (state = {}, action: Action) => {
	switch (action.type) {
		case ActionTypes.addToCart:
			return { ...state, [action.payload.id]: action.payload };
		case ActionTypes.deleteFromCart:
			return { ..._.omit(state, [action.payload]) };
		default:
			return state;
	}
};
