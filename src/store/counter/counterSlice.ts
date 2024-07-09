import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface counterState {
  count: number;
  isReady: boolean;
}

const initialState: counterState = {
  count: 10,
  isReady: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addOne(state) {
      state.count++;
    },
    substractOne(state) {
      state.count--;
    },
    setCounter(state, action: PayloadAction<number>) {
      if (state.isReady) return;
      state.count = action.payload;
      state.isReady = true;
    },
  },
});

export const { addOne, substractOne, setCounter } = counterSlice.actions;

export default counterSlice.reducer;
