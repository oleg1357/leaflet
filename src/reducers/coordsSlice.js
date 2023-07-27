import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const counterSlice = createSlice({
  name: "coords",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { change } = counterSlice.actions;

export default counterSlice.reducer;
