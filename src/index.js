import ReactDOM from "react-dom";
import "./index.css";

import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
