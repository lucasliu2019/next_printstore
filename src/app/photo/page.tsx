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
          <div className={styles.left}>
            <h2 className={styles.sectionTitle}>Custom Calendars</h2>
            <p className={styles.text}>
              <strong>Looking for a personalized calendar?</strong><br />
              We create custom calendars designed just for you with your photos, logo, branding, or special dates.<br />
              <br />
              <strong>Wall calendar</strong> (Letter, 12 months)<br />
              <strong>$50 – $100</strong>
            </p>
          </div>
          <div className={styles.right}>
            <Image
              src="/photo_calendar.png"
              alt="Calendar"
              width={300}
              height={300}
              className={styles.image}
            />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.left}>
            <Image
              src="/photo_photos.png"
              alt="Photo Printing"
              width={300}
              height={300}
              className={styles.image}
            />
          </div>
          <div className={styles.right}>

            <h2 className={styles.sectionTitle}>Passport & ID Photos</h2>
            <p className={styles.text}><strong>Fast and Professional</strong></p>
            <ul>
              <li>Passport photos</li>
              <li>Visa, ID, driver’s license photos</li>
              <li>Digital photos for online applications</li>
              <li>Printed copies in standard formats</li>
              <li>Fast service — ready in minutes!</li>
            </ul>
            <p className={styles.text}>
              <strong>Passport photo (print + digital)</strong> – 20$<br />
              <strong>Extra printed copies</strong> – 3$
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.left}>
          <h2 className={styles.sectionTitle}>Custom Brochure Design & Printing</h2>
          <ul>
            <li>Tri-fold, bi-fold, and multi-page brochures</li>
            <li>Custom design with your text, images, and branding</li>
            <li>High-resolution printing on premium paper</li>
            <li>Glossy or matte finishes</li>
            <li>Fast turnaround and affordable prices</li>
          </ul>
          <p className={styles.text}>
            Basic design using a template – <strong>20 – 50$</strong><br />
            Custom design (1–2 pages) – <strong>40 – 60$</strong><br />
            Full custom tri-fold brochure (6 panels) – <strong>70 – 150$</strong>
          </p>
          </div>
          <div className={styles.right}>
            <Image
              src="/photo_brochure.png"
              alt="Brochure"
              width={300}
              height={300}
              className={styles.image}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
