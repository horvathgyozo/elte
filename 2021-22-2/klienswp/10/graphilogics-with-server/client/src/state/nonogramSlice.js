import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  solution: [],
  table: [],
};

const szin = {
  FEHER: 0,
  FEKETE: 1,
  SZURKE: 2,
};

const nonogramSlice = createSlice({
  name: "nonogram",
  initialState,
  reducers: {
    startGame: (state, { payload: puzzle }) => {
      state.solution = puzzle.map((s) =>
        s.split("").map((c) => (c === "#" ? szin.FEKETE : szin.SZURKE))
      );
      state.table = puzzle.map((s) => s.split("").map((c) => szin.FEHER));
    },
  },
});

// reducer
export const nonogramReducer = nonogramSlice.reducer;
// actions

// selectors
export const selectTable = (state) => {
  const { solution } = state;
  // [1, 1, 2, 1] ==> 1121 ==> 11, 1 ==> [2, 1]
  const leftNumbers = solution.map((row) =>
    row
      .join("")
      .split("2")
      .filter((e) => e !== "")
      .map((e) => e.length)
  );
  const upperNumbers = solution[0]?.map((e, i) =>
    solution
      .map((row) => row[i])
      .join("")
      .split("2")
      .filter((e) => e !== "")
      .map((e) => e.length)
  );
  return {
    leftNumbers,
    upperNumbers,
  };
};
