import {createSlice } from '@reduxjs/toolkit';

const initialState = {
  one: 0,
  two: 0,
  three: 0,
  four: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleOne: (state) => {
      state.one+=1;
    },
    toggleTwo: (state) => {
      state.two+=1;
    },
    toggleThree: (state) => {
      state.three+=1;
    },
    toggleFour: (state) => {
      state.four+=1;
    },
  },

});

export const { toggleOne, toggleTwo, toggleThree, toggleFour } = counterSlice.actions;
export default counterSlice.reducer;
