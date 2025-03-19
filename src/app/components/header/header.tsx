// import React from 'react';
import styles from './header.module.css';
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.top_bar}>
                <a href='/'>Email: info@3dprintstore.com</a>
                <a href='/'>Phone: 204-000-0000</a>
            </div>


            <p>Welcome to my 3DPrintStore!</p>


            <div className={styles.bot_bar}>
                <div className={styles.logo}>Logo Here</div>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/products">Products</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Header;