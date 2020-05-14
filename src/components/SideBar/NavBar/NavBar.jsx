import React from 'react';
import styles from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><NavLink activeClassName={styles.active} to="/profile">Профиль</NavLink></li>
                <li><NavLink activeClassName={styles.active} to="/dialogs">Диалоги</NavLink></li>
                <li><NavLink activeClassName={styles.active} to="/news">Новости</NavLink></li>
                <li><NavLink activeClassName={styles.active} to="/music">Музыка</NavLink></li>
                <li><NavLink activeClassName={styles.active} to="/settings">Настройки</NavLink></li>
            </ul>
      </nav>
    );
}

export default NavBar;