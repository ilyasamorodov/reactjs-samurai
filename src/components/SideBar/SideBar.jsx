import React from 'react';
import styles from './SideBar.module.css';
import NavBar from "./NavBar/NavBar";
import FriendsBlock from "./FriendsBlock/FriendsBlock";

const SideBar = (props) => {
    return (
        <nav className={styles.nav}>
            <NavBar/>
            <FriendsBlock state={props.state.blocks[0]}/>
        </nav>
    );
}

export default SideBar;