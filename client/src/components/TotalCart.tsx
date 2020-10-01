import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { StoreState } from '../reducers';
import { CartState } from '../reducers/cartReducer';
import '../styles/TotalCart.css';
import { FormUnitsState } from '../reducers/formUnitsReducer';

interface TotalCartProps {
	cart: CartState;
	formUnits: FormUnitsState;
}
const _TotalCart = ({ cart, formUnits }: TotalCartProps) => {
	const totalResult = () => {
		let result = 0;
		_.toArray(cart).forEach((data) => {
			result = result + data.price * formUnits[data.id];
		});
		return result;
	};
	totalResult();
	return (
		<div className='TotalCart'>
			<div className=''>
				<div>
					<div className='ui mini steps'>
						<div className='active step'>
							<i className='dollar sign icon grey'></i>
							<div className='content'>
								<div
									className='title black'
									style={{ color: `#767676` }}
								>
									TOTAL
								</div>
							</div>
						</div>
						<div className='step'>
							<div className='content'>
								<div
									className='title'
									style={{ fontWeight: `initial` }}
								>
									{totalResult()}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className=''>
				<div className='ui buttons '>
					<Link to='store'>
						<button className='ui button primary'>
							CONTINUE SHOPPING
						</button>
					</Link>

					<div className='or'></div>
					<button className='ui button teal'>PAY NOW</button>
				</div>
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

export const TotalCart = connect(mapStateToProps, {})(_TotalCart);
