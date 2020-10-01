import { ActionTypes } from '../actions';

export interface UpdateFormUnits {
	type: ActionTypes.updateFormUnits;
	payload: { value: number; id: number };
}
export const updateFormUnits = (value: number, id: number): UpdateFormUnits => {
	return {
		type: ActionTypes.updateFormUnits,
		payload: { value, id }
	};
};
