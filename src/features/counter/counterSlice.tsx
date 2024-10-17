import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    count: number
}

const initialState: CounterState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //actions
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1
        },
        reset: (state) => {
            state.count = 0
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
    }
})

// export actions!
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

// reducer ham export mikonim
export default counterSlice.reducer;   