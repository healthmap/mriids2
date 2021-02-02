import { combineReducers } from "redux";
import ebola from "./ebola";
import filters from "./filters";
import covid from "./covid";
export default combineReducers({
  ebola,
  covid,
  filters,
});
