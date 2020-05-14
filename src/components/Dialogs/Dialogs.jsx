import React from 'react';

import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let dialogsItems = props.state.dialogsData.map(item =>
        <DialogItem id={item.id} avatar={item.avatar} name={item.name}/>
    );

    let messagesItems = props.state.messagesData.map(message =>
        <MessageItem id={message.id} own={message.own} text={message.text}/>
    );

    return (
        <div className={styles.wrapper}>

            <ul className={styles.dialogs}>
                {dialogsItems}
            </ul>

            <div className={styles.messages}>
                <ul className={styles.items}>
                    {messagesItems}
                </ul>
                <div className={styles.form}>
                    <input type="text" className={styles.message} placeholder="type in message..."/> <input
                    type="button" className={styles.button} value="Send"/>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;