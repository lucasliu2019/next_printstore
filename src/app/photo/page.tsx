// import Heading from "../components/heading/heading";
// import Slideshow from "../components/slideshow/slideshow";
import styles from "./page.module.css";
import Image from 'next/image';

export default function PrintPage() {
  return (
    <main className={styles.main}>

      <div className={styles.container}>
        <h1 className={styles.title}>
          <span>Photo</span>
          <span className={styles.highlight}>Printing</span>
          <span>Publishing</span>
        </h1>

        <section className={styles.section}>
          <div className={`${styles.left} ${styles.one}`} >
            <div className={styles.textWrapper}>
              <h2 className={styles.sectionTitle}>Custom Calendars</h2>
              <p className={styles.text}>
                <strong>Looking for a personalized calendar?</strong><br />
                We create custom calendars designed just for you with your photos, logo, branding, or special dates.<br />
                <br />
              </p>
              <div className={styles.textPricing}>
                <h3>Wall calendar (Letter, 12 months)</h3>
                <h3>$50 – $100</h3>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imageWrapper}>
              <Image
                src="/photo_calendar.png"
                alt="Calendar"
                fill
                className={`${styles.image} ${styles.imgOne}`}
              />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.reverse}`}>
          <div className={`${styles.left} ${styles.two}`}>
            <div className={styles.textWrapper}>
              <h2 className={styles.sectionTitle}>Passport & ID Photos</h2>
              <h2 className={styles.sectionTitle}>Fast and Professional</h2>
              <ul className={styles.customList}>
                <li>Passport photos</li>
                <li>Visa, ID, driver’s license photos</li>
                <li>Digital photos for online applications</li>
                <li>Printed copies in standard formats</li>
                <li>Fast service — ready in minutes!</li>
              </ul>
              <div className={styles.textPricing}>
                <h3>Passport photo (print + digital) – 20$</h3>
                <h3>Extra printed copies – 3$</h3>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imageWrapper}>
              <Image
                src="/photo_photos.png"
                alt="Photo Printing"
                fill
                className={`${styles.image} ${styles.imgTwo}`}
              />
            </div>
          </div>

        </section>

        <section className={styles.section}>
          <div className={`${styles.left} ${styles.three}`}>
            <div className={styles.textWrapper}>
              <h2 className={styles.sectionTitle}>Custom Brochure Design & Printing</h2>
              <ul className={styles.customList}>
                <li>Tri-fold, bi-fold, and multi-page brochures</li>
                <li>Custom design with your text, images, and branding</li>
                <li>High-resolution printing on premium paper</li>
                <li>Glossy or matte finishes</li>
                <li>Fast turnaround and affordable prices</li>
              </ul>
              <div className={styles.textPricing}>
                <h4>Basic design using a template – 20 – 50$</h4>
                <h4>Custom design (1–2 pages) – 40 – 60$</h4>
                <h4>Full custom tri-fold brochure (6 panels) – 70 – 150$</h4>
              </div>
            </div>
          </div>


          <div className={styles.right}>
            <div className={styles.imageWrapper}>
              <Image
                src="/photo_brochure.png"
                alt="Brochure"
                fill
                className={`${styles.image} ${styles.imgThree}`}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
