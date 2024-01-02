import * as type from "../types";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const menuCategory = (state = initialState, action) => {
  switch (action.type) {
    case type.MENU_DATA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case type.MENU_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case type.MENU_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default menuCategory;
