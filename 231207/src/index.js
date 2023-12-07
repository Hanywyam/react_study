import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
// rootReducer를 가져옴. index.js로 되어 있는 경우 파일명 생략 가능.
import rootReducer from "./store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

// redux 스토어 생성 == rootReducer를 스토어로 생성.
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
