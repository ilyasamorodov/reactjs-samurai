import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.avatar}>
                <img src="https://via.placeholder.com/40" />
            </div>
            <div className={styles.message}>
                {props.message}
            </div>
        </div>
    );
}

export default Post;