import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { TbHexagon3D } from "react-icons/tb";
import Link from "next/link";
import styles from "./header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top_bar}>
        <a className="top_bar_link">
          <FaEnvelope /> info@3dprintstore.com
        </a>
        <a className="top_bar_link">
          <FaPhoneAlt /> 204-000-0000
        </a>
      </div>

      {/* <p><TbHexagon3D /> 3D Print</p> */}

      <div className={styles.bot_bar_wrapper}>
        <div className={styles.bot_bar}>
          <div className={styles.logo}>
            <TbHexagon3D /> 
            <span>3D Print</span>
          </div>
          <nav>
            <ul className={styles.nav_list}>
              <li className={styles.nav_item}>
                <Link className={styles.nav_link} href="/">
                  Home
                </Link>
              </li>
              <li className={styles.nav_item}>
                <Link className={styles.nav_link} href="/products">
                  Products
                </Link>
              </li>
              <li className={styles.nav_item}>
                <Link className={styles.nav_link} href="/about">
                  About
                </Link>
              </li>
              <li className={styles.nav_item}>
                <Link className={styles.nav_link} href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
