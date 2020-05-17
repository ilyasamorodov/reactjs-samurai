import React from 'react';

import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let messageInputReference = React.createRef();

    let dialogsItems = props.dialogsPage.dialogsData.map(item =>
        <DialogItem key={item.id} id={item.id} avatar={item.avatar} name={item.name}/>
    );

    let messagesItems = props.dialogsPage.messagesData.map(message =>
        <MessageItem key={message.id} id={message.id} own={message.own} text={message.text}/>
    );

    let sendMessage = () => {
        let messageText = messageInputReference.current.value;
        let action = {type: 'SEND_MESSAGE', messageText: messageText};
        props.dispatch(action);
        messageInputReference.current.value = '';
    };

    let handleInputMessage = () => {
        let messageText = messageInputReference.current.value;
        let action = {type: 'HANDLE_INPUT_MESSAGE', messageText: messageText};
        props.dispatch(action);
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
                    <input ref={messageInputReference} onChange={handleInputMessage} type="text" value={props.dialogsPage.messageTextInput} placeholder="type in message..."/> <input
                    type="button" onClick={sendMessage} value="Send"/>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;