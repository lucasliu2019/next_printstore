import Heading from "../components/heading/heading";
// import Slideshow from "../components/slideshow/slideshow";
import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
        <div className={styles.slideshow}>
          <h2>Photo Printing Publishing</h2>
          <div className={styles.slide}>
          </div>
          <p>Our Services:</p>
          <ul>
          <li>Brochures – Professional printing of brochures, flyers, leaflets. </li>
          <li>Photo Printing – High-quality photo printing in various formats on premium photo paper. </li>
          <li>Calendar Printing – Personalized calendars (wall, desk, pocket-sized) for businesses and gifts.</li>
          </ul>
        </div>
    </div>
  );
}
