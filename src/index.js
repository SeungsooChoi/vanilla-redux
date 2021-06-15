import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (state = 0, action) => {
  if (action.type === "ADD") {
    return state + 1;
  } else if (action.type === "MINUS") {
    return state - 1;
  } else {
    return state;
  }
};

// data를 저장할 store
const countStore = createStore(countModifier);

// dispatch를 통해 상태 업데이트를 알림(매개변수는 action)
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());
