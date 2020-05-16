import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import {functionAddPost, functionSendMessage, handleInputMessage, handleInputPost} from "./redux/state";

export let reRenderDOM = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} handleInputMessage={handleInputMessage} handleInputPost={handleInputPost} addPost={functionAddPost} sendMessage={functionSendMessage}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
};