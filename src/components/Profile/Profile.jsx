import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={styles.wrapper}>
      <ProfileInfo/>
      <MyPosts
          posts={props.profilePage.postsData}
          postTextInput={props.profilePage.postTextInput}
          handleInputPost={props.handleInputPost}
          addPost={props.addPost}/>
    </div>
  );
}

export default Profile;