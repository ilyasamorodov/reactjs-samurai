import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src="https://via.placeholder.com/960x60.png" alt="Site logo" />
        </header>
    );
}

export default Header;