const STORAGE_KEYS = {
  USER: "@manufacotry:user",
  CURRENT_POSITION: "@manufacotry:current_position"
};

const CONSTANTS = {
  STR_EMPTY: "",
  DATE_FORMAT: "YYYY-MM-DD",
  TIME_FORMAT: "h : MM A"
};

const HTTPC_CODE = {
  OK: 200,
  NOT_RECEIVED: -1
};

const API_STATUS_CODE = {
  OK: 0,
  EXCEPTION: -1
};

enum ITEM_ACTION {
  NONE = 0,
  SELL = 1,
  BUY = 2,
  PUBLISH = 3,
  CANCEL = 4,
  RECEIVE = 5
}

export {STORAGE_KEYS, CONSTANTS, HTTPC_CODE, API_STATUS_CODE, ITEM_ACTION};
