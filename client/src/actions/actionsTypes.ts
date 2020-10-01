import {
	FetchDb,
	UpdateFormUnits,
	AddToCart,
	RemoveFromCart
} from '../actions';

export enum ActionTypes {
	fetchDb,
	updateFormUnits,
	addToCart,
	deleteFromCart
}

export type Action = FetchDb | UpdateFormUnits | AddToCart | RemoveFromCart;
