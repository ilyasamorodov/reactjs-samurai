import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import {fnAddPost, fnSendMessage} from "./redux/state";

export let reRenderDOM = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={fnAddPost} sendMessage={fnSendMessage}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
};