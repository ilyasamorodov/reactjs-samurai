import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.banner}>
        <img src="https://picsum.photos/700/140" />
      </div>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <img src="https://picsum.photos/id/1062/160/160" alt="profile image" />
        </div>
        <div className={styles.about}>
          <div className={styles.title}>Name Surname</div>
          <ul>
            <li>Date of birth:</li>
            <li>City: </li>
            <li>Education: </li>
            <li>Website: </li>
          </ul>
        </div>
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;