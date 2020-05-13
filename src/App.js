import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";

const App = (props) => {
    return (
        <div className="app-wrapper hl">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content hl">
                <Route path="/profile" render={() => <Profile state={props.state.profilePage}/>}/>
                <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                {/*<Route path="/news" component={News}/>*/}
                {/*<Route path="/music" component={Music}/>*/}
                {/*<Route path="/settings" component={Settings}/>*/}
            </div>
        </div>

    );
}

export default App;
