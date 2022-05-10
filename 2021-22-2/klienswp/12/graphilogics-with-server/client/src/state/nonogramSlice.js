import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  solution: [],
  table: [],
  isSolutionChecking: false,
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
    startSolutionCheck: (state) => {
      state.isSolutionChecking = true;
    },
    stopSolutionCheck: (state) => {
      state.isSolutionChecking = false;
    },
  },
});

// reducer
export const nonogramReducer = nonogramSlice.reducer;
// action creators
export const { startGame, startSolutionCheck, stopSolutionCheck } =
  nonogramSlice.actions;
export const checkSolution = () => (dispatch) => {
  dispatch(startSolutionCheck());
  setTimeout(() => dispatch(stopSolutionCheck()), 3000);
};
// selectors
export const selectTable = (state) => {
  const { solution } = state.nonogram;
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
