import * as type from "../types";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const table = (state = initialState, action) => {
  switch (action.type) {
    case type.TABLE_DATA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case type.TABLE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case type.TABLE_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default table;
