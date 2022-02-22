import { COUNTER_INCREASE, COUNTER_DECREASE } from "../actions/counter";

const counterReducer = (state = 0, action: { type: string }) => {
  switch (action.type) {
    case COUNTER_INCREASE:
      return state + 1;
    case COUNTER_DECREASE:
      return state - 1;
    default:
      return state;
  }
};
export default counterReducer;
