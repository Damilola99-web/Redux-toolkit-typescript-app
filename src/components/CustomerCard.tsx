import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from '../features/visitedSlice';

interface propType {
	details: {
		name: string;
		orders: string[];
		id: number;
	};
}

export default function CustomerCard({ details }: propType) {
	const [ inputValue, setInputValue ] = useState('');
	const dispatch = useDispatch();
	const handleClick = () => {
		if (!inputValue) {
			return;
		}
		const trimmed = inputValue.trim();
		if (trimmed === '') {
			return;
		}
		dispatch(addOrder({ value: trimmed, id: details.id }));
		setInputValue('');
	};

	return (
		<div className="customer-food-card-container">
			<p>{details.name}</p>
			<div className="customer-foods-container">
				<div className="customer-food">
					{details.orders.map((order) => <p>{order}</p>)}
				</div>
				<div className="customer-food-input-container">
					<input
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
					<button onClick={handleClick}>Add</button>
				</div>
			</div>
		</div>
	);
}
