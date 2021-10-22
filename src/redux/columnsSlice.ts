import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from './store';

// Define a type for the slice state
interface ColumnsState {
  paths: Array<string>;
  submitted: boolean;
}

// Define the initial state using that type
const initialState: ColumnsState = {
  paths: [],
  submitted: false,
};

export const columnsSlice = createSlice({
  name: 'columns',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateColumns: (state, action: PayloadAction<Array<string>>) => {
      state.paths = action.payload;
    },
    submitColumns: (state) => {
      state.submitted = true;
    },
    deferColumns: (state) => {
      state.submitted = false;
    },
    resetColumns: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { updateColumns, submitColumns, deferColumns, resetColumns } =
  columnsSlice.actions;
export const selectColumnsPaths = (state: RootState) => state.columns.paths;
export const selectColumnsSubmitted = (state: RootState) =>
  state.columns.submitted;
export default columnsSlice.reducer;