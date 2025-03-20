"use client";

import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { TbHexagon3D } from "react-icons/tb";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import useRouter
import { useState, useEffect } from "react";
import styles from "./header.module.css";
const Header = () => {
  const pathname = usePathname(); // Get the current route

  const [menuOpen, setMenuOpen] = useState(false); // State to track if the menu is open
  const [isSmallScreen, setIsSmallScreen] = useState(false); // State to track screen size

  // Check screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check screen size on mount
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  const handleLinkClick = () => {
    if (isSmallScreen) {
      setMenuOpen(false); // Close the menu only on small screens
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.top_bar}>
        <a className={styles.top_bar_link}>
          <FaEnvelope /> info@3dprintstore.com
        </a>
        <a className={styles.top_bar_link}>
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

          <input
            type="checkbox"
            id="menu-toggle"
            className={styles.menu_toggle}
            checked={menuOpen}
            onChange={() => setMenuOpen(!menuOpen)} // Toggle menu state
          />
          <label htmlFor="menu-toggle" className={styles.hamburger}>
            <span></span>
            <span></span>
            <span></span>
          </label>

          <nav className={styles.nav}>
            <ul className={styles.nav_list}>
              <li className={styles.nav_item}>
                <Link
                  className={`${styles.nav_link} ${
                    pathname === "/" ? styles.active : ""
                  }`}
                  href="/"
                  onClick={handleLinkClick} // Close menu on link click
                >
                  Home
                </Link>
              </li>
              <li className={styles.nav_item}>
                <Link
                  className={`${styles.nav_link} ${
                    pathname === "/products" ? styles.active : ""
                  }`}
                  href="/products"
                  onClick={handleLinkClick} // Close menu on link click
                >
                  Products
                </Link>
              </li>
              <li className={styles.nav_item}>
                <Link
                  className={`${styles.nav_link} ${
                    pathname === "/about" ? styles.active : ""
                  }`}
                  href="/about"
                  onClick={handleLinkClick} // Close menu on link click
                >
                  About
                </Link>
              </li>
              <li className={styles.nav_item}>
                <Link
                  className={`${styles.nav_link} ${
                    pathname === "/contact" ? styles.active : ""
                  }`}
                  href="/contact"
                  onClick={handleLinkClick} // Close menu on link click
                >
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
