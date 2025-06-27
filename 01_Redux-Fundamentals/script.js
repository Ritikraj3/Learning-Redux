import { createStore } from "redux";

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
//     return { ...state, count: state.count + action.payload };
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

const store = createStore(reducer);

// console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: INCREASE });

// console.log(store.getState());

store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE_BY, payload: 10 });
store.dispatch({ type: DECREASE_BY, payload: 5 });

//what redux will do

// reduxState = reducer(reduxState, {type: 'count/increment'})
// console.log(reduxState);
// reduxState = reducer(reduxState, {type: 'count/increment'})
// console.log(reduxState);
// reduxState = reducer(reduxState, {type: 'count/decrement'})
// console.log(reduxState);
// reduxState = reducer(reduxState, {type: 'count/incrementBy', payload: 10})
// console.log(reduxState);
