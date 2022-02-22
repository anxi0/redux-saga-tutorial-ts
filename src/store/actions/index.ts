import { loadConfig, loadConfigFailed, loadConfigSucceed } from "./config";
import { increase, decrease, asyncDecrease, asyncIncrease } from "./counter";

const actions = {
  loadConfig,
  loadConfigFailed,
  loadConfigSucceed,
  increase,
  decrease,
  asyncDecrease,
  asyncIncrease,
};

export default actions;
