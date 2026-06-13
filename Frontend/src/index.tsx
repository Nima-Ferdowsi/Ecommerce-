import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Main from "./container/Main";
import { store } from "./RX/store/store";

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>,
  document.getElementById("root")
);
