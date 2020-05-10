import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={styles.posts}>
            <h2>My posts</h2>
            <div className={styles.form}>
                <textarea></textarea>
                <input type="button" value="Send"/>
            </div>
            <Post message="123123123123"/>
            <Post message="dsfsdfsdfsdfsdf"/>
            <Post message="sdf sdf hg 3re fwef ewe sd"/>
        </div>
    );
}

export default MyPosts;