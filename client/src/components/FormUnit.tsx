import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { updateFormUnits } from '../actions';
import { FormUnitsState } from '../reducers/formUnitsReducer';
import { StoreState } from '../reducers/index';

interface FormUnitsProps {
	formUnits: FormUnitsState;
	updateFormUnits: typeof updateFormUnits;
	id: number;
}

const _FormUnit = ({
	formUnits,
	updateFormUnits,
	id
}: FormUnitsProps): JSX.Element => {
	const handlechange = (event: ChangeEvent<HTMLInputElement>) => {
		updateFormUnits(parseInt(event.currentTarget.value), id);
	};

	return (
		<input
			type='number'
			placeholder='Units..'
			style={{ width: `90px` }}
			onChange={handlechange}
			value={formUnits[id] ? formUnits[id] : ''}
		/>
	);
};

const mapStateToProps = ({
	formUnits
}: StoreState): { formUnits: FormUnitsState } => {
	return { formUnits };
};

export const FormUnit = connect(mapStateToProps, {
	updateFormUnits
})(_FormUnit);
