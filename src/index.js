import * as serviceWorker from './serviceWorker';
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import './index.css';
import state, {subscribe} from "./redux/state";
import {functionAddPost, functionSendMessage, handleInputMessage, handleInputPost} from "./redux/state";
import App from "./App";

let reRenderDOM = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} handleInputMessage={handleInputMessage} handleInputPost={handleInputPost} addPost={functionAddPost} sendMessage={functionSendMessage}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

reRenderDOM(state);

subscribe(reRenderDOM);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
