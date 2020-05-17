import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <li className={styles.post}>
            <img src="https://picsum.photos/id/1062/50/50" className={styles.avatar} alt="user"/>
            <p className={styles.message}>{props.message}</p>
            <p className={styles.likes}>Likes: {props.likesCount}</p>
        </li>
    );
}

export default Post;