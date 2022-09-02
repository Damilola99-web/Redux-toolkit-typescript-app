import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface visitedSliceType {
	value: {
		name: string;
		orders: string[];
        id : number
	}[];
}

const initialState: visitedSliceType = {
	value: []
};

export const visitedSlice = createSlice({
	name: 'visited',
	initialState,
	reducers:
		{
			addVisited:
				(state, action: PayloadAction<string>) => {
					state.value.push({
						name: action.payload,
                        id : Math.random(),
						orders: []
					});
				},
			addOrder:
				(
					state,
					action: PayloadAction<{
						value: string;
						id: number;
					}>
				) => {
                    state.value.forEach(customer => {
                        if (customer.id === action.payload.id) {
                            customer.orders.push(action.payload.value)
                        }
                    })
                }
		}
});

export const visitedReducer = visitedSlice.reducer;
export const { addVisited, addOrder } = visitedSlice.actions;
