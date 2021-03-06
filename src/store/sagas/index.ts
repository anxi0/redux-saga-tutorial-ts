import { all } from "redux-saga/effects";
import configSaga from "./config";
import counterSaga from "./counter";

export default function* rootSaga() {
  yield all([counterSaga(), configSaga()]);
}
