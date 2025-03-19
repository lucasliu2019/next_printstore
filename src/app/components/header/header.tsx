import Link from 'next/link';
import styles from './header.module.css';
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.top_bar}>
                <a className="top_bar_link">Email: info@3dprintstore.com</a>
                <a className="top_bar_link">Phone: 204-000-0000</a>
            </div>


            <p>Welcome to my 3DPrintStore!</p>


            <div className={styles.bot_bar}>
                <div className={styles.logo}>Logo Here</div>
                <nav>
                    <ul className={styles.nav_list}>
                        <li className={styles.nav_item}>
                            <Link className={styles.nav_link} href="/">Home</Link>
                        </li >
                        <li className={styles.nav_item}>
                            <Link className={styles.nav_link} href="/products">Products</Link>
                        </li>
                        <li className={styles.nav_item}>
                            <Link className={styles.nav_link} href="/about">About</Link>
                        </li>
                        <li className={styles.nav_item}>
                            <Link className={styles.nav_link} href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Header;