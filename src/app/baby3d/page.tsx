// import Heading from "../components/heading/heading";
// import Slideshow from "../components/slideshow/slideshow";
import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
          <h2>3D Print Baby</h2>
          <div className={styles.slide}>
          </div>
          <p>Unique service creating 3D sculptures of your baby</p>
          <ul>
          <li>Personal inscriptions </li>
          <li>Bespoke stands </li>
          <li>Exclusive packaging options available</li>
          </ul>
    </div>
  );
}
