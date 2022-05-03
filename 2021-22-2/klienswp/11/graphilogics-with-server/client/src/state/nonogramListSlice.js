import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 1,
      puzzle: ["###", " # "],
    },
  ],
};

const nonogramListSlice = createSlice({
  name: "nonogramList",
  initialState,
  reducers: {
    // setList: (state, { payload: puzzles }) => {
    //   state.list = puzzles;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchList.fulfilled, (state, { payload: puzzles }) => {
      state.list = puzzles;
    });
  },
});

// reducer
export const nonogramListReducer = nonogramListSlice.reducer;
// action creators
export const { setList } = nonogramListSlice.actions;
export const fetchList = createAsyncThunk(
  "nonogramList/fetchList",
  async () => {
    const response = await fetch("http://localhost:3030/puzzles");
    const result = await response.json();
    return result.data;
  }
);
// export const fetchList = () => async (dispatch) => {
//   const response = await fetch("http://localhost:3030/puzzles");
//   const result = await response.json();
//   dispatch(setList(result.data));
// };
// selectors
