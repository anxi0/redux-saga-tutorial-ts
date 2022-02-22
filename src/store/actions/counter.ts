export const COUNTER_ASYNC_INCREASE = "ASYNC_INCREASE";
export const COUNTER_INCREASE = "INCREASE";
export const COUNTER_DECREASE = "DECREASE";
export const COUNTER_ASYNC_DECREASE = "ASYNC_DECREASE";

export const asyncIncrease = () => ({ type: COUNTER_ASYNC_INCREASE });
export const asyncDecrease = () => ({ type: COUNTER_ASYNC_DECREASE });
export const decrease = () => ({ type: COUNTER_DECREASE });
export const increase = () => ({ type: COUNTER_INCREASE });
