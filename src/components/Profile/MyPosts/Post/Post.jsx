import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.avatar}>
                <img src="https://picsum.photos/50" alt="user"/>
            </div>
            <div className={styles.message}>
                <p>Likes: {props.likesCount}</p>
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default Post;