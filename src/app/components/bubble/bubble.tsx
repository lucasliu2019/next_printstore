import styles from "./bubble.module.css";

const Bubble = () => {
  { /* Background Bubbles */ }
  return (
    <div className={styles.bubbles}>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
    </div>
  );
};

export default Bubble;
