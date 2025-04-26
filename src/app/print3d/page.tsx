import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      {/* Title */}
      <section className={styles.hero}>
        <h1 className={styles.heading}>3D Printing & Scanning</h1>
        <p className={styles.subheading}>
          All you need to do is go through a quick scanning procedure — we&apos;ll take care of the rest
        </p>
      </section>

      {/* Creation Steps */}
      <section className={styles.section_wrapper}>
        <h2 className={styles.sectionTitle}>Creation steps</h2>
        <div className={styles.grid_wrapper}>
          <div className={styles.grid}>
            <div className={styles.step}>
              <Image src="/print_scanning.png" alt="Scanning" width={300} height={500} className={styles.imageDisplay} />
              <p className={styles.stepLabel}>Scanning</p>
            </div>
            <div className={styles.step}>
              <Image src="/print_modeling.png" alt="Modeling" width={300} height={500} className={styles.imageDisplay} />
              <p className={styles.stepLabel}>Modeling</p>
            </div>
            <div className={styles.step}>
              <Image src="/printing.jpg" alt="Print Result" width={300} height={500} className={styles.imageDisplay} />
              <p className={styles.stepLabel}>Print Result</p>
            </div>
          </div>
        </div>

        <div className={styles.pricing}>
          <div className={styles.left_text}>
            <h3 className={styles.pricingTitle}>Flexible pricing</h3>
            <p className={styles.price}>150-300$</p>
          </div>
          <div className={`${styles.right_text} ${styles.priceDetails}`}>
            <p>- We will scan and print you or your loved ones</p>
            <p>- Prices starting from 150$ for a 10 cm model</p>
            <p>- 200$ for a 15 cm model</p>
            <p>- 300$ for a 20 cm model</p>
          </div>
        </div>
      </section>

      {/* Scan Your Car Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Scan your car</h2>
        <div className={styles.pricing_container}>
          <div className={styles.pricing_car}>
            <h3 className={styles.pricingTitle}>400-500$</h3>
            <p className={styles.smallText}>Scan and print your car</p>
            <p className={styles.smallText}>Possibility to modify the model to suit your needs</p>
          </div>
          <div className={styles.carImage_warpper}>
            <Image src="/print_car.png" alt="Car 1" fill className={styles.image} />
          </div>
        </div>

        <div className={styles.car_container}>
          <div className={styles.car_wrapper}>
            <Image src="/print_car_baby.png" alt="Car 2" fill className={styles.imgCar} />
          </div>
        </div>
      </section>
    </main>
  );
}