import React from 'react';
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className={styles.info}>
            <div className={styles.banner}>
                <h1>{props.username}Test User</h1>
            </div>

            <div className={styles.user}>
                <div className = {styles.avatar}>
                    <img src="https://picsum.photos/id/1062/160/160" alt = "profile image" />
                </div>
                <div className={styles.details}>
                    <h2 className={styles.name}>
                        Name Surname
                    </h2>
                    <ul className={styles.facts}>
                        <li>Date of birth: <span className={styles.value}>01.01.1970</span></li>
                        <li>City: <span className={styles.value}>Atlanta</span></li>
                        <li>Education: <span className={styles.value}>MIT</span></li>
                        <li>Website: <span className={styles.value}>http://phd.atlanta.com</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;