// store/index.js :스토어 디렉토리 안의 스토어 문서는 index.js로 작성
// store 디렉토리를 만들어 index.js를 사용하는 경우는 여러 리듀서를 하나로 합치는 작업을 수행

import { combineReducers } from "redux";
import color from "./modules/colorStore";

// 여러 리듀서를 하나로 합치는 작업 수행(지금은 하나지만..)
export default combineReducers({ colorA: color });
