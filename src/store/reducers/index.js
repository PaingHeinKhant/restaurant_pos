import { combineReducers } from "redux";
import menuCategory from "./menuCategory";
import menu from "./menu";
import selectedMenu from "./selectedMenu";
import table from "./table";

export default combineReducers({
  menuCategory,
  menu,
  selectedMenu,
  table,
});
