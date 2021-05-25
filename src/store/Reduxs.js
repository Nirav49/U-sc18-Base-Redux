import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({

    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        }, decrement(state) {
            state.counter--;
        }, increase(state, action) {
            state.counter = state.counter + action.payload;
        }, decrease(state, action) {
            state.counter = state.counter - action.payload;
        }, reset(state) {
            state.counter = 0;
        }, toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
})

const istate = {
    authanticated: false
};

const authanctications = createSlice({
    name: 'auth',
    initialState: istate,
    reducers: {
        login(state) {
            state.authanticated = true;
        },
        logout(state) {
            state.authanticated = false;
        }
    }

})

const store = configureStore(
    {
        reducer: {
            counter: counterSlice.reducer,
            auth: authanctications.reducer
        }
    });

export const allActions = counterSlice.actions;
export const authActions = authanctications.actions;

export default store;