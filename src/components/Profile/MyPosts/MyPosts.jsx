import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsItems = props.posts.map(post =>
        <Post id={post.id} message={post.message} likesCount={post.likesCount}/>
    );

    return (
        <div className={styles.posts}>
            <h2>My posts</h2>
            <div className={styles.form}>
                <textarea></textarea>
                <input type="button" value="Send"/>
            </div>
            { postsItems }
        </div>
    );
}

export default MyPosts;