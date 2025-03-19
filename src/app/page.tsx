import styles from "./page.module.css";
import Slideshow from "./components/slideshow/slideshow";
// import Slideshow from "@/components/slideshow/slideshow";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h2>3D Printers</h2>
            <p>Find the right 3D printer for your needs.</p>
          </div>
          <div className={styles.card}>
            <h2>3D Printing Materials</h2>
            <p>Explore a variety of 3D printing materials.</p>
          </div>
          <div className={styles.card}>
            <h2>3D Printing Services</h2>
            <p>Get your 3D models printed by professionals.</p>
          </div>

          <div className={styles.card}>
            <h2>3D Figures</h2>
            <div className={styles.slide}>
              <Slideshow />
            </div>
            <p>Create your memory with 3D Figures.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
