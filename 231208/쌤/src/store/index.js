import { combineReducers } from "redux";
import counter from "./modules/counterStore";
import colorPrint from "./modules/colorPrintStore";

export default combineReducers({
  counter,
  colorPrint,
});
