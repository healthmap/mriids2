import { combineReducers } from "redux";
import ebola from "./ebola";
import filters from "./filters";
export default combineReducers({
  ebola,
  filters,
});
