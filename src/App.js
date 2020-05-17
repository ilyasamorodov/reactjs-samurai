import React from 'react';
import {Route} from "react-router-dom";
import './App.css';

import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import SideBar from "./components/SideBar/SideBar";

const App = (props) => {
    return (
        <div className="app-wrapper hl">
            <Header/>
            <SideBar state={props.state.sideBar}/>
            <div className="app-wrapper-content hl">
                <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>

    );
}

export default App;
