import * as type from "../types";

export const selectedMenuAdd = (selectedMenu) => {
  return {
    type: type.SELECTED_MENU,
    payload: selectedMenu,
  };
};
