let initValue = {
  count: 0
};
// increment
// decrement

// the job of the reducer is to let react know
// what the new state will be
// based on an inital state, and an action -> a new state has to be formed

export function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT": {
      let updatedState = {
        ...state,
        // if you have a payload, you can write state.count + action.payload
        count: state.count + 1
      };
      console.log(`updated state is`, updatedState);
      return updatedState;
    }
    case "DECREMENT": {
      return {
        ...state,
        count: state.count - 1
      };
    }
    default:
      return state;
  }
}
// let initValue = {
//   count: 0
// };
export const incrementAction = { type: "INCREMENT", payload: 1000 };
export const decrementAction = { type: "DECREMENT" };
console.log(initValue);
let s = countReducer(initValue, incrementAction);
console.log(`after first time`, s);
s = countReducer({ count: 2 }, incrementAction);
s = countReducer(s, decrementAction);
console.log(`last time`, s);
// 1. {count:1 }
// 2. {count:2 }
// 3. {count:3}
// 4. {count:0 }
// 5. {count:4 }
// 6. error
