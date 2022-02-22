import {
  CONFIG_SUCCEED,
  CONFIG_FAILED,
  Config,
  Error,
} from "../actions/config";

const configReducer = (
  state = "",
  action: { type: string; payload?: Config; error?: Error }
) => {
  switch (action.type) {
    case CONFIG_SUCCEED:
      return action.payload;
    case CONFIG_FAILED:
      return action.error;
    default:
      return state;
  }
};

export default configReducer;
