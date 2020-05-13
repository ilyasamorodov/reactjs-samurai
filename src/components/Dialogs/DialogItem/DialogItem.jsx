import React from 'react';

import styles from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <li className={styles.item + ' ' + styles.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </li>
    );
}

export default DialogItem;