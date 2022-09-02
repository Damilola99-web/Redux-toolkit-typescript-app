import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "../features/reservationSlice";
import { visitedReducer } from "../features/visitedSlice";

export const store = configureStore({
    reducer: {
        reservations : reservationReducer,
        visited: visitedReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch