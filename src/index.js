import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { hydrate, render } from "react-dom";

const app = <React.StrictMode>
<BrowserRouter>
  <App />
</BrowserRouter>
</React.StrictMode>

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
