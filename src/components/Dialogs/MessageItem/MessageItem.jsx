import React from 'react';

import styles from './../Dialogs.module.css';

const MessageItem = (props) => {
    let avatar = "https://picsum.photos/50";

    return (
        <li className={styles.item}>
            <img src={avatar} className={styles.avatar}/>
            <p className={styles.text}>{props.text}</p>
        </li>
    );
}

export default MessageItem;