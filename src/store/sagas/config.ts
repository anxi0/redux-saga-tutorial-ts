import { put, call, takeLatest } from "redux-saga/effects";
import api from "../../apis/config";
import actions from "../actions/index";
import { CONFIG_LOAD } from "../actions/config";

function* getConfig() {
  console.log(`Get Config succeed`);
  try {
    const { data } = yield call(api.getConfig);
    // console.log(data[0]);
    yield put(actions.loadConfigSucceed(data[0]));
  } catch (error) {
    yield put(actions.loadConfigFailed(error));
  }
}

export default function* configSaga() {
  yield takeLatest(CONFIG_LOAD, getConfig);
}
