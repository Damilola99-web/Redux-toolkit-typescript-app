import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootState } from './app/store';
import CustomerCard from './components/CustomerCard';
import ReservationCard from './components/ReservationCard';
import { addReservation } from './features/reservationSlice';

function App() {
	const [ inputValue, setInputValue ] = useState('');
	const reservations = useSelector(
		(state: RootState) => state.reservations.value
	);
	const visited = useSelector((state: RootState) => state.visited.value);

	const dispatch = useDispatch();

	const handleReservations = () => {
		if (!inputValue) {
			return;
		}
		const trimmed = inputValue.trim();
		if (trimmed === '') {
			return;
		}
		dispatch(addReservation(trimmed));
		setInputValue('');
	};

	return (
		<div className="App">
			<div className="container">
				<div className="reservation-container">
					<div>
						<h5 className="reservation-header">Reservations</h5>
						<div className="reservation-cards-container">
							{reservations &&
								reservations.map((reservation, index) => (
									<ReservationCard
										index={index}
										key={reservation}
										name={reservation}
									/>
								))}
						</div>
					</div>
					<div className="reservation-input-container">
						<input
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
						/>
						<button onClick={handleReservations}>Add</button>
					</div>
				</div>
				<div className="customer-food-container">
					{visited.map((visit) => <CustomerCard details={visit} />)}
				</div>
			</div>
		</div>
	);
}

export default App;
