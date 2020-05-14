import React from 'react';
import styles from './../FriendsBlock.module.css';
import {NavLink} from "react-router-dom";


const FriendsItem = (props) => {

    let path = '/profile/' + props.id;

    return (
        <li className={styles.item}>
            <img src={props.avatar}/>
            <NavLink className={styles.name} to={path}>{props.name}</NavLink>
        </li>
    );
}

export default FriendsItem;