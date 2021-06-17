import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: {
      reducer: (state, action) => {
        state.push({ text: action.payload.text, id: action.payload.id });
      },
      prepare: (text) => {
        const id = Date.now();
        return { payload: { id, text } };
      },
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
