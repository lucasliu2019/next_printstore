// import React from 'react';
import styles from './footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>&copy; {new Date().getFullYear()} 3DPrintStore. All rights reserved.</p>
    </footer>
  );
};
export default Footer;