import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD", (text) => {
  return {
    payload: {
      text,
      id: Date.now(),
    },
  };
});
const deleteToDo = createAction("DELETE");

/*
const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [...state, { text: action.payload.text, id: action.payload.id }];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};
*/

// redux toolkit을 사용할때는 state를 mutate시켜도 된다?
// 방식이 2가지가 있는데 Map Object 방식보다 builder callback방식을 권장함.
const reducer = createReducer([], (builder) => {
  builder
    .addCase(addToDo, (state, action) => {
      state.push({ text: action.payload.text, id: action.payload.id });
    })
    .addCase(deleteToDo, (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload)
    );

  /*
    // Map Object
    [addToDo]: (state, action) => {
      state.push({ text: action.payload.text, id: action.payload.id });
    },
    [deleteToDo]: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
      */
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
