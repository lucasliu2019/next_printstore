import styles from "./heading.module.css";

export default function Heading() {
  const stars = Array.from({ length: 10 }); // Generate 10 stars dynamically

  return (
    <div className={styles.title}>
    <h1 className={styles.mainheading}>Exceptional Quality, Redefined.</h1>
    <p className={styles.subheading}>We design and create high-quality 3D models with precision and expertise, ensuring every detail meets professional standards. Using top-tier materials, we deliver durable and visually stunning prints tailored to your needs.</p>
    <div className={styles.buttongroup}>
      <div className={styles.button}>Explore</div> 
      <div className={styles.button}>Contact</div>
    </div>
    {/* <p className={styles.subheading}>Expertly Crafted 3D Models, Printed with Premium Materials. </p> */}
  </div>
  );
}