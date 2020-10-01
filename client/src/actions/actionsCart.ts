import { ActionTypes } from '.';
import { Product } from './apiRequest';

export interface AddToCart {
	type: ActionTypes.addToCart;
	payload: Product;
}

export interface RemoveFromCart {
	type: ActionTypes.deleteFromCart;
	payload: number;
}

export const addToCart = (product: Product): AddToCart => {
	return {
		type: ActionTypes.addToCart,
		payload: product
	};
};

export const removeFromCart = (id: number): RemoveFromCart => {
	return {
		type: ActionTypes.deleteFromCart,
		payload: id
	};
};
