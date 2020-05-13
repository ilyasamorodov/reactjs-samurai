import React from 'react';
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className={styles.info}>
            <div className={styles.banner}>
                <img src="https://picsum.photos/800/140"/>
            </div>

            <div className={styles.user}>
                <div className = {styles.avatar}>
                    <img src="https://picsum.photos/id/1062/160/160" alt = "profile image" />
                </div>
                <div className={styles.details}>
                    <div className={styles.name}>
                        Name Surname
                    </div>
                    <ul className={styles.facts}>
                        <li>Date of birth:</li>
                        <li>City:</li>
                        <li>Education:</li>
                        <li>Website:</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;