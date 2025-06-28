import { createStore } from "redux";
import { myCreateStore } from "./my-redux";

const countSpan = document.querySelector(".count-span");

const initialState = {
  count: 0,
  name: "John",
  age: 30,
};
const INCREASE = "count/increment";
const DECREASE = "count/decrement";
const INCREASE_BY = "count/increaseByBy";
const DECREASE_BY = "count/decreaseBy";

function reducer(state = initialState, action) {
//   if (action.type === INCREASE) {
//     return { ...state, count: state.count + 1 };
//   } else if (action.type === DECREASE) {
//     return { ...state, count: state.count - 1 };
//   } else if (action.type === INCREASE_BY) {
//     return { ...state, count: state.count + action.payload };
//   } else if (action.type === DECREASE_BY) {
//     return { ...state, count: state.count - action.payload };
//   }
//   return state;

  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case INCREASE_BY:
      return { ...state, count: state.count + action.payload };
    case DECREASE_BY:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
const myStore = myCreateStore(reducer);
console.log(store);
console.log(myStore);





// console.log(store.getState());

const unSubscribe =  myStore.subscribe(() => {
  console.log(myStore.getState());
  countSpan.innerText = myStore.getState().count;
});

const unSubscribe2 =myStore.subscribe(() => {
  console.log('hiiiii');
});

const unSubscribe3 = myStore.subscribe(() => {
  console.log('hellooooo');
});

countSpan.innerText = myStore.getState().count;

// console.log(store.getState());


myStore.dispatch({ type: INCREASE });
unSubscribe2();
unSubscribe3();

myStore.dispatch({ type: DECREASE });
myStore.dispatch({ type: INCREASE_BY, payload: 10 });
myStore.dispatch({ type: DECREASE_BY, payload: 5 });


countSpan.addEventListener("click", () => {
  myStore.dispatch({ type: INCREASE });
  console.log('clicked');
});

//what redux will do

// reduxState = reducer(reduxState, {type: 'count/increment'})
// console.log(reduxState);
// reduxState = reducer(reduxState, {type: 'count/increment'})
// console.log(reduxState);
// reduxState = reducer(reduxState, {type: 'count/decrement'})
// console.log(reduxState);
// reduxState = reducer(reduxState, {type: 'count/incrementBy', payload: 10})
// console.log(reduxState);
