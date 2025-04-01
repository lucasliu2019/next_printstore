// import Heading from "../components/heading/heading";
// import Slideshow from "../components/slideshow/slideshow";
import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
          <h2>3d Scanning and Printing</h2>
          <div className={styles.slide}>
          </div>
          <p>Our Services:</p>
          <ul>
          <li>Precise digital copying of project and people </li>
          <li>Creating models based on sketches and drawing </li>
          <li>High-quality printing using plastic</li>
          </ul>
    </div>
  );
}
