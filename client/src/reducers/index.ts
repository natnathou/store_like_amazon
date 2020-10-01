import { combineReducers } from 'redux';
import { productListReducer, ProductsListState } from './productsListReducer';
import { formUnitsReducer, FormUnitsState } from './formUnitsReducer';
import { cartReducer, CartState } from './cartReducer';
import { Action } from '../actions';

export interface StoreState {
	productsList: ProductsListState;
	formUnits: FormUnitsState;
	cart: CartState;
}
export const reducers = combineReducers<StoreState, Action>({
	productsList: productListReducer,
	formUnits: formUnitsReducer,
	cart: cartReducer
});
