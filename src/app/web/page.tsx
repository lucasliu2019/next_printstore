"use client";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Web Development<br />Web Design</h1>
        <p className={styles.tagline}>
          I Create Modern Websites<br />
          <span className={styles.highlight}>Fast, and Professional!</span>
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What We Offer:</h2>
          <ul className={styles.list}>
            <li>Website design: landing pages, business websites, e-commerce stores;</li>
            <li>Responsive (mobile-friendly) design;</li>
            <li>UX/UI prototyping and wireframing;</li>
            <li>Design in Figma, Adobe XD;</li>
            <li>Full support and consultation throughout the project;</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How We Work:</h2>
          <ol className={styles.list}>
            <li>You send us a request or message.</li>
            <li>We discuss your goals and project details.</li>
            <li>We propose a solution and create a design draft.</li>
            <li>You receive a ready-to-use website design.</li>
          </ol>
        </section>

        <section className={styles.pricing}>
          <h2 className={styles.pricingTitle}>Pricing</h2>
          <p>Starting from $300 per project.</p>
          <p>Final cost depends on the complexity and scope of the work.</p>
        </section>
      </div>
    </main>
  );
}
