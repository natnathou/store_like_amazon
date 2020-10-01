import React, { MouseEvent } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';
import { CartState } from '../reducers/cartReducer';
import { Product, removeFromCart } from '../actions';
import { ProductsListState } from '../reducers/productsListReducer';
import { FormUnit } from './FormUnit';
import { TotalCart } from './TotalCart';
import '../styles/Cart.css';

interface CartProps {
	cart: ProductsListState;
	removeFromCart: typeof removeFromCart;
}

const _Cart = ({ cart, removeFromCart }: CartProps): JSX.Element => {
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		removeFromCart(
			parseInt(event.currentTarget.getAttribute('data-id') as string)
		);
	};

	const cartRender = (): JSX.Element[] => {
		return _.toArray<Product>(cart).map((data, index) => {
			return (
				<div key={index}>
					<div className='lineCart'>
						<div className='infoItemInCart'>
							<div>
								<img
									className='ui avatar image'
									src={`${data.picture}`}
									alt={`${data.title}`}
								></img>
							</div>
							<div>{data.title}</div>
							<div>{data.serialNumber}</div>
							<div>
								<FormUnit id={data.id} />
							</div>
							<div>{data.price}$</div>
						</div>
						<button
							className='ui button'
							data-id={`${data.id}`}
							onClick={handleClick}
						>
							Remove
						</button>
					</div>
					{_.toArray<Product>(cart)[index + 1] ? (
						<div className='ui inverted divider'></div>
					) : null}
				</div>
			);
		});
	};

	return (
		<div>
			<div className='ui segment'>
				<div className='infoItemInCart'>
					<div>
						<b>PICTURE</b>
					</div>
					<div>
						<b>NAME</b>
					</div>
					<div>
						<b>SERIAL NUMBER</b>
					</div>
					<div>
						<b>UNITS</b>
					</div>
					<div>
						<b>PRICE</b>
					</div>
				</div>
				<div className='ui inverted divider'></div>
				{cartRender()}
			</div>
			<TotalCart />
		</div>
	);
};

const mapStateToProps = ({ cart }: StoreState): { cart: CartState } => {
	return { cart };
};

export const Cart = connect(mapStateToProps, {
	removeFromCart
})(_Cart);
