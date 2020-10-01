import _ from 'lodash';
import { Action, ActionTypes } from '../actions';

export interface FormUnitsState {
	[id: number]: number;
}

export const formUnitsReducer = (
	state: FormUnitsState = {},
	action: Action
) => {
	switch (action.type) {
		case ActionTypes.updateFormUnits:
			if (action.payload.value >= 0) {
				return { ...state, [action.payload.id]: action.payload.value };
			} else if (!action.payload.value) {
				return { ...state, [action.payload.id]: 0 };
			} else {
				return { ...state };
			}
		case ActionTypes.deleteFromCart:
			return { ..._.omit(state, [action.payload]) };
		default:
			return state;
	}
};
