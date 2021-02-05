import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import store from './redux/store';

import "./styles/index.scss";
import 'emoji-mart/css/emoji-mart.css';



import App from "./App";
import { userActions } from "./redux/actions/indexActions";
store.dispatch(userActions.fetchUserData());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
