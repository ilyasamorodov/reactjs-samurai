import React from 'react';

import styles from './../Dialogs.module.css';

const MessageItem = (props) => {
    let avatar = "https://picsum.photos/50";

    let own = props.own ? ' ' + styles.own : '';

    return (
        <li className={styles.item + own}>
            <img src={avatar} className={styles.avatar} alt="avatar"/>
            <p className={styles.text}>{props.text}</p>
        </li>
    );
}

export default MessageItem;