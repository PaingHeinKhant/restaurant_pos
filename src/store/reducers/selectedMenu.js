// selectedMenu.js (reducer file)
import * as type from "../types";

const initialState = {
  selectedMenuList: [], // Adjust state variable name
};

const selectedMenuReducer = (state = initialState, action) => {
  // Adjust reducer function name
  switch (action.type) {
    case type.SELECTED_MENU:
      return {
        ...state,
        selectedMenuList: [...state.selectedMenuList, action.payload],
      };
    default:
      return state;
  }
};

export default selectedMenuReducer; // Adjust export name
