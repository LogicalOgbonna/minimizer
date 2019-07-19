import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import decoder from "jwt-decode";
// import axios from "axios";
// import setAuthorizationHeader from "./utils/setAuthorizationHeader";
import history from "./utils/history";
// import { userLoggedIn } from "./actions/auth";
// import { getTest } from "./actions/test";

import store from "./store";

// if (localStorage.cas) {
//   const token = JSON.parse(localStorage.cas);
//   // console.log(user);
//   const user = decoder(token);
//   setAuthorizationHeader(token);
//   store.dispatch(userLoggedIn(user));
// }

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
