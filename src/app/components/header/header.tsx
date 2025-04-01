"use client";

import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
// import { TbHexagon3D } from "react-icons/tb";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import useRouter
import { useState, useEffect, useRef } from "react";
import styles from "./header.module.css";
const Header = () => {
  const pathname = usePathname(); // Get the current route

  const [menuOpen, setMenuOpen] = useState(false); // State to track if the menu is open
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLLIElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLLabelElement>(null); // Ref for the hamburger menu


  // Close the menu when clicked!

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    console.log("Clicked outside");
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      (!dropdownRef.current || !dropdownRef.current.contains(event.target as Node)) &&
      (!hamburgerRef.current || !hamburgerRef.current.contains(event.target as Node)) // Ignore clicks on the hamburger menu
    ) {
      console.log("Closing menus");
      setMenuOpen(false);
      setIsDropdownOpen(false);
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the hamburger menu
    setIsDropdownOpen(false); // Close the dropdown menu
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
            <span>Valerii Brovko</span>
          </div>

          <input
            type="checkbox"
            id="menu-toggle"
            className={styles.menu_toggle}
            checked={menuOpen}
            onChange={() => { 
              setMenuOpen(!menuOpen);
            }}
          />
          {/* Attach ref to the hamburger menu */}
          <label htmlFor="menu-toggle" className={styles.hamburger} ref={hamburgerRef} > 
            <span></span>
            <span></span>
            <span></span>
          </label>

          <nav className={styles.nav} ref={menuRef}>
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
              <li
                className={`${styles.nav_item} ${styles.dropdown}`}
                ref={dropdownRef}
              >
                <Link
                  className={styles.nav_link}
                  onClick={handleDropdownToggle}
                  href=""
                >
                  Services
                </Link>
                {isDropdownOpen && (
                  <ul className={styles.dropdown_menu}>
                    <li className={styles.dropdown_item}>
                      <Link
                        href="/print3d"
                        className={styles.dropdown_link}
                        onClick={handleLinkClick}
                      >
                        3D Scan & Print
                      </Link>
                    </li>
                    <li className={styles.dropdown_item}>
                      <Link
                        href="/baby3d"
                        className={styles.dropdown_link}
                        onClick={handleLinkClick}
                      >
                        3D Print Baby
                      </Link>
                    </li>
                    <li className={styles.dropdown_item}>
                      <Link
                        href="/photo"
                        className={styles.dropdown_link}
                        onClick={handleLinkClick}
                      >
                        Photo Printing
                      </Link>
                    </li>
                    <li className={styles.dropdown_item}>
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
