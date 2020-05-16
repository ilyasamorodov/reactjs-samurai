import * as serviceWorker from './serviceWorker';
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import './index.css';
import store from "./redux/state";
import App from "./App";

let reRenderDOM = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} store={store}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

reRenderDOM(store.getState());

store.subscribe(reRenderDOM);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
