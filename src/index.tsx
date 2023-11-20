import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from 'react-redux'
import './index.scss';
import App from "./App";
import './styles/common.scss'
import './styles/reset.scss'
import {store} from './store/store' 
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
    </Provider> */}
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
);