"use client";

import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
// import { TbHexagon3D } from "react-icons/tb";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import useRouter
import { useState, useEffect } from "react";
import styles from "./header.module.css";
const Header = () => {
  const pathname = usePathname(); // Get the current route

  const [menuOpen, setMenuOpen] = useState(false); // State to track if the menu is open
  const [isSmallScreen, setIsSmallScreen] = useState(false); // State to track screen size

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    if (isSmallScreen) {
      setMenuOpen(false); // Close the menu only on small screens
    }
    setIsDropdownOpen(false); // Close the dropdown when a link is clicked
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
            {/* <TbHexagon3D /> */}
            <span>Valeri Brovko</span>
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
              <li className={`${styles.nav_item} ${styles.dropdown}`}>
          <Link
            className={styles.nav_link}
            onClick={handleDropdownToggle}
            href=""
          >
            Services
          </Link>
          {isDropdownOpen && (
            <ul className={styles.dropdown_menu}>
              <li>
                <Link
                  href="/print3d"
                  className={styles.dropdown_link}
                  onClick={handleLinkClick}
                >
                  3D Scan & Print
                </Link>
              </li>
              <li>
                <Link
                  href="/baby3d"
                  className={styles.dropdown_link}
                  onClick={handleLinkClick}
                >
                  3D Print Baby
                </Link>
              </li>
              <li>
                <Link
                  href="/photo"
                  className={styles.dropdown_link}
                  onClick={handleLinkClick}
                >
                  Photo Printing
                </Link>
              </li>
              <li>
                <Link
                  href="/web"
                  className={styles.dropdown_link}
                  onClick={handleLinkClick}
                >
                  Web Design
                </Link>
              </li>
            </ul>
          )}
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
