import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  editor: "",
  selectedIndex: null,
  haikus: [
    `Téged vártalak
Mint hajnali fényt éjjel
Félve-remélve`,
  ],
};

export const changeText = createAction("haiku/changeText");
console.log(changeText("alma"));
console.log(changeText.toString());

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeText, (state, { payload }) => {
    state.editor = payload;
  });
});

// const reducer = (state = initialState, { type, payload }) => {
//   if (type === changeText.toString()) {
//     return {
//       ...state,
//       editor: payload,
//     };
//   }
//   return state;
// };

export const store = configureStore({
  reducer: reducer,
});
