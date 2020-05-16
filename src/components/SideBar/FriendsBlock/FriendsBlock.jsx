import React from 'react';
import styles from './FriendsBlock.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";

const FriendsBlock = (props) => {

    let friendItems = props.state.items.map(friend =>
        <FriendsItem key={friend.id} id={friend.id} avatar={friend.avatar} name={friend.name} />
    );

    return (
        <div className={styles.block}>
            <h2>{props.state.title}</h2>
            <ul className={styles.items}>
                {friendItems}
            </ul>
        </div>
    );
};

export default FriendsBlock;