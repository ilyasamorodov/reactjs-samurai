import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postTextareaReference = React.createRef();

    let postsItems = props.posts.map(post =>
        <Post id={post.id} message={post.message} likesCount={post.likesCount}/>
    );

    let _addPost =  () => {
        let postText = postTextareaReference.current.value;
        props.addPost(postText);
    };

    return (
        <div className={styles.posts}>
            <h2>My posts</h2>
            <div className={styles.form}>
                <textarea ref={postTextareaReference}></textarea>
                <input onClick={_addPost} type="button" value="Send"/>
            </div>
            { postsItems }
        </div>
    );
}

export default MyPosts;