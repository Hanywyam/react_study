import { combineReducers } from "redux";
import counter from "./modules/counterStore";
import ColorPrint from "./modules/colorPrintStore";

export default combineReducers({
  // 키와 값이 같을 때는 생략 가능.
  counter,
  ColorPrint,
});
