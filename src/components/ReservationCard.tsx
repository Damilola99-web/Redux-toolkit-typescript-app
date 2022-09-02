import React from 'react';
import { useDispatch } from 'react-redux';
import { removeReservation } from '../features/reservationSlice';
import { addVisited } from '../features/visitedSlice';
interface propType {
	name: string;
	index: number;
}

export default function ReservationCard({ name, index }: propType) {
	const dispatch = useDispatch();
	const handleClick = () => {
        dispatch(addVisited(name))
		dispatch(removeReservation(index));
	};
	return (
		<div onClick={handleClick} className="reservation-card-container">
			{name}
		</div>
	);
}
