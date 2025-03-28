import Heading from "../components/heading/heading";
import Slideshow from "../components/slideshow/slideshow";
import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
        <Heading/>

        <div className={styles.slideshow}>
          <h2>Baby Scapture</h2>
          <div className={styles.slide}>
          </div>
          <p>Create your memory with 3D Figures.</p>
        </div>
    </div>
  );
}
