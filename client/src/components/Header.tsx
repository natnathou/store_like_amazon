import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { StoreState } from '../reducers';
import { CartState } from '../reducers/cartReducer';
import { FormUnitsState } from '../reducers/formUnitsReducer';
import '../styles/Header.css';
interface HeaderProps {
	cart: CartState;
	formUnits: FormUnitsState;
}

export const _Header = ({ cart, formUnits }: HeaderProps): JSX.Element => {
	const totalItem = () => {
		let result = 0;
		_.toArray(cart).forEach((data) => {
			result = result + 1 * formUnits[data.id];
		});
		return result;
	};
	return (
		<div
			className='ui dividing header'
			style={{ marginBottom: `50px`, marginTop: `30px` }}
		>
			<div style={{ marginBottom: `10px` }}>
				<Link to='/checkout' className='ui right floated header'>
					<div className='ui blue circular label numberItem'>
						{totalItem()}
					</div>
					<i
						className='cart arrow down icon teal'
						style={{ cursor: `pointer` }}
					></i>
				</Link>
				<Link to='/store' className='ui left floated '>
					<i
						className='th large icon black'
						style={{ cursor: `pointer` }}
					></i>
				</Link>
			</div>
		</div>
	);
};

const mapStateToProps = ({
	cart,
	formUnits
}: StoreState): { cart: CartState; formUnits: FormUnitsState } => {
	return { cart, formUnits };
};

export const Header = connect(mapStateToProps, {})(_Header);
