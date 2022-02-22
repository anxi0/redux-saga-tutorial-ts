import actions from "../actions/index";
import {
  COUNTER_ASYNC_INCREASE,
  COUNTER_ASYNC_DECREASE,
} from "../actions/counter";
import { put, delay, takeLatest } from "redux-saga/effects";

function* asyncIncrease() {
  yield delay(1000);
  yield put(actions.increase());
}
function* asyncDecrease() {
  yield delay(1000);
  yield put(actions.decrease());
}
export default function* counterSaga() {
  yield takeLatest(COUNTER_ASYNC_INCREASE, asyncIncrease);
  yield takeLatest(COUNTER_ASYNC_DECREASE, asyncDecrease);
}
