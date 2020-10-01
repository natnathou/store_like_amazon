import React from 'react';
import { Link } from 'react-router-dom';

export const Header = (): JSX.Element => {
	return (
		<div
			className='ui dividing header'
			style={{ marginBottom: `50px`, marginTop: `30px` }}
		>
			<div style={{ marginBottom: `10px` }}>
				<Link to='/checkout' className='ui right floated header'>
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
