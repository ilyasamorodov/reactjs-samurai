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
          dispatch={props.dispatch}/>
    </div>
  );
};

export default Profile;