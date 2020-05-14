import React from 'react';

import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let messageInputReference = React.createRef();

    let dialogsItems = props.state.dialogsData.map(item =>
        <DialogItem id={item.id} avatar={item.avatar} name={item.name}/>
    );

    let messagesItems = props.state.messagesData.map(message =>
        <MessageItem id={message.id} own={message.own} text={message.text}/>
    );

    let sendMessage = () => {
        let messageText = messageInputReference.current.value;
        props.sendMessage(messageText);
    };

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
                    <input ref={messageInputReference} type="text" placeholder="type in message..."/> <input
                    type="button" onClick={sendMessage} value="Send"/>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;