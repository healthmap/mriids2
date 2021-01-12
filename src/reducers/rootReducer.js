import { combineReducers } from "redux";
import ebola from "./ebola";
import filters from "./filters";
import covid from "./covid";
import ui from "./ui";
export default combineReducers({
  ebola,
  covid,
  filters,
  ui,
});
