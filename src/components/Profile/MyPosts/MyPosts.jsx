import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postTextareaReference = React.createRef();

    let postsItems = props.posts.map(post =>
        <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/>
    );

    let _addPost = () => {
        let postText = postTextareaReference.current.value;
        let action = {type: 'ADD_POST', postText: postText};
        props.dispatch(action);
        postTextareaReference.current.value = '';
    };

    let handleInputPost = () => {
        let postText = postTextareaReference.current.value;
        let action = {type: 'HANDLE_INPUT_POST', postText: postText};
        props.dispatch(action)
    };

    return (
        <div className={styles.posts}>
            <h2>My posts</h2>
            <div className={styles.form}>
                <textarea ref={postTextareaReference} onChange={handleInputPost} value={props.postTextInput}/>
                <input onClick={_addPost} type="button" value="Send"/>
            </div>
            <ul className={styles.items}>
                { postsItems }
            </ul>
        </div>
    );
}

export default MyPosts;