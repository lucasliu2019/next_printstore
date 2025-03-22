import styles from "./star.module.css";

export default function Star() {
  const stars = Array.from({ length: 10 }); // Generate 10 stars dynamically

  return (
    <div className={styles.sky}>
      {stars.map((_, index) => (
        <div key={index} className={styles.star}></div>
      ))}
    </div>
  );
}