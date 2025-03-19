// import React from 'react';
import styles from './header.module.css';
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.top_bar}>
                <a className="top_bar_link" href='/'>Email: info@3dprintstore.com</a>
                <a className="top_bar_link" href='/'>Phone: 204-000-0000</a>
            </div>


            <p>Welcome to my 3DPrintStore!</p>


            <div className={styles.bot_bar}>
                <div className={styles.logo}>Logo Here</div>
                <nav>
                    <ul className={styles.nav_list}>
                        <li className={styles.nav_item}>
                            <a className={styles.nav_link} href="/">Home</a>
                        </li >
                        <li className={styles.nav_item}>
                            <a className={styles.nav_link} href="/products">Products</a>
                        </li>
                        <li className={styles.nav_item}>
                            <a className={styles.nav_link} href="/about">About</a>
                        </li>
                        <li className={styles.nav_item}>
                            <a className={styles.nav_link} href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Header;