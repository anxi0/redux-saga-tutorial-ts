export const CONFIG_LOAD: string = "CONFIG_LOAD";
export const CONFIG_SUCCEED: string = "CONFIG_SUCCEED";
export const CONFIG_FAILED: string = "CONFIG_FAILED";

export interface Config {
  agree01: string;
  agree02: string;
  agree03: string;
  clapPoint: string[];
  clapPointName: string[];
  clapPointimg: string[];
  companyper: number;
  faq_cate: string[];
  filter01: string[];
  filter02: string[];
  idx: number;
  liveviewprice01: number;
  liveviewprice02: number;
  liveviewprice03: number;
  pointsetPriceValue: string[];
  pointsetValue: string[];
  vodviewprice01: number;
  vodviewprice02: number;
  vodviewprice03: number;
  waterH: number;
  waterImg: string;
  waterO: number;
  waterW: number;
}

export interface Error {
  message: string;
}

export const loadConfig = () => {
  return {
    type: CONFIG_LOAD,
  };
};
export const loadConfigSucceed = (payload: Config) => {
  return {
    type: CONFIG_SUCCEED,
    payload,
  };
};
export const loadConfigFailed = (error: unknown) => {
  return {
    type: CONFIG_SUCCEED,
    error,
  };
};
