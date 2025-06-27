
# 🔥 Redux Basics - Counter State Manager

This is a **basic Redux implementation** using vanilla JavaScript to manage state for a simple counter app. The code introduces Redux core concepts like **store**, **reducer**, **actions**, and **dispatch**, helping you understand how Redux handles application state in a predictable and centralized way.

---

## 📦 Technologies Used

- JavaScript
- Redux (Core - no React)
- Node.js environment (optional, for testing)

---

## 🧠 Core Concepts Explained

### 🧾 1. Initial State

```js
const initialState = {
  count: 0,
  name: "John",
  age: 30,
};
```

This is the **default state** of your app.  
It contains:
- `count`: a number we’ll modify using Redux actions.
- `name` and `age`: extra state to show how Redux can manage more than one piece of data.

---

### 🏷️ 2. Action Types

```js
const INCREASE = "count/increment";
const DECREASE = "count/decrement";
const INCREASE_BY = "count/increaseByBy";
const DECREASE_BY = "count/decreaseBy";
```

These are just string constants used to **identify the type of action**.  
Using constants avoids typos and helps maintain large codebases.

---

### 🔁 3. Reducer Function

```js
function reducer(state = initialState, action) {
  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 };
  } else if (action.type === DECREASE) {
    return { ...state, count: state.count - 1 };
  } else if (action.type === INCREASE_BY) {
    return { ...state, count: state.count + action.payload };
  } else if (action.type === DECREASE_BY) {
    return { ...state, count: state.count - action.payload }; 
  }
  return state;
}
```

Redux reducers:
- Take the **current state** and an **action**
- Return the **new state**
- Must be **pure functions** (no side effects)

---

### 🏪 4. Create Redux Store

```js
const store = createStore(reducer);
```

The Redux `store`:
- Holds the entire state tree
- Lets you read state via `store.getState()`
- Allows state updates via `store.dispatch()`
- Notifies listeners via `store.subscribe()`

---

### 👂 5. Subscribe to Store

```js
store.subscribe(() => {
  console.log(store.getState());
});
```

Whenever the state changes, this function runs and logs the updated state.

---

### 🚀 6. Dispatching Actions

```js
store.dispatch({ type: INCREASE });         // count = 1
store.dispatch({ type: DECREASE });         // count = 0
store.dispatch({ type: INCREASE_BY, payload: 10 }); // count = 10
store.dispatch({ type: DECREASE_BY, payload: 5 });  // count = 5
```

These actions tell Redux what to do.

💡 In Redux:
```js
reduxState = reducer(reduxState, action);
```
This is exactly what Redux does under the hood.

---

## 🧪 Final Output Example

With correct logic (`DECREASE_BY` subtracts), here’s what happens step-by-step:

1. `count = 0` (initial)
2. `INCREASE`: `count = 1`
3. `DECREASE`: `count = 0`
4. `INCREASE_BY` 10: `count = 10`
5. `DECREASE_BY` 5: `count = 5`

Console:
```
{count: 1, name: "John", age: 30}
{count: 0, name: "John", age: 30}
{count: 10, name: "John", age: 30}
{count: 5, name: "John", age: 30}
```

---

## ✅ Summary

This project demonstrates:
- 🔄 Redux flow (Action → Reducer → Store)
- 📦 Immutable state updates using spread operator
- 🚦 Action types and dispatching
- 👀 Subscribing to state changes

---

## ⚠️ Fix Recommendation

Fix this line inside the reducer:

```js
// Was:
return { ...state, count: state.count + action.payload };

// Should be:
return { ...state, count: state.count - action.payload };
```

---

## 📁 File Structure

```
redux-counter/
│
├── index.js  # All Redux logic
├── README.md # This file
```

---

## 🧠 Learning Tip

Try building a small **React Counter App** using this same reducer logic with `useReducer` or `react-redux` to solidify your understanding.

---

## 💬 Have Questions?

