import React, { useEffect, MouseEvent } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { StoreState } from '../reducers/index';
import { fetchDb, Product, addToCart } from '../actions';
import { ProductsListState } from '../reducers/productsListReducer';
import { FormUnit } from './FormUnit';
import '../styles/ProductsList.css';

interface AppProps {
	productsList: ProductsListState;
	fetchDb: Function;
	addToCart: typeof addToCart;
}

const _ProductsList = ({
	productsList,
	fetchDb,
	addToCart
}: AppProps): JSX.Element => {
	useEffect(() => {
		fetchDb();
	}, [fetchDb]);

	const renderList = () => {
		const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
			addToCart(
				productsList[
					event.currentTarget.getAttribute('product-id') as string
				]
			);
		};

		return _.toArray<Product>(productsList).map((data, index) => {
			return (
				<div className='item' key={index}>
					<div className='listContainer'>
						<div className='listInfo'>
							<img
								className='ui bordered image'
								width={150}
								height={100}
								src={data.picture}
								alt={data.title}
							/>
							<div>
								<div className='sub header'>
									{data.title}
									<br />
									<br />
								</div>
								<div className='description'>
									{data.description}
									<br />
									<br />
								</div>
								<div>
									{' '}
									<b>Price:</b> {data.price}$
								</div>
								<div className=''>
									<b>Serial Number:</b> {data.serialNumber}
								</div>
							</div>
						</div>
						<div className='checkout'>
							<div className='ui left action input'>
								<button
									className='ui teal labeled icon button'
									product-id={`${data.id}`}
									onClick={handleClick}
								>
									<i className='cart icon'></i>
									Add
								</button>
								<FormUnit id={data.id} />
							</div>
						</div>
					</div>
				</div>
			);
		});
	};

	return <div className='ui divided list'>{renderList()}</div>;
};

const mapStateToProps = ({
	productsList
}: StoreState): { productsList: ProductsListState } => {
	return { productsList };
};

export const ProductsList = connect(mapStateToProps, {
	fetchDb,
	addToCart
})(_ProductsList);
