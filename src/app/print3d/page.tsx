"use client";
import { useEffect, useRef, useState } from "react";


import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {

  const imageRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState("scale(1) translateY(0px)");

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const visibleRatio = 1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);

      const scale = 0.6+ visibleRatio*0.6; // max scale 1.1
      const translateX = -visibleRatio * 500+ 400; // max translateY -20px

      setTransformStyle(`scale(${scale}) translateX(${translateX}px)`);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
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
              <div className={styles.stepImage}>
                <Image src="/print_scanning.png" alt="Scanning" fill className={styles.imageDisplay} />
              </div>
              <p className={styles.stepLabel}>Scanning</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepImage}>
                <Image src="/print_modeling.png" alt="Modeling" fill className={styles.imageDisplay} />
              </div>
              <p className={styles.stepLabel}>Modeling</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepImage}>
                <Image src="/printing.jpg" alt="Print Result" fill className={styles.imageDisplay} />
              </div>
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
          <h3> What's included in the price:</h3>
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
          <div className={styles.car_wrapper} ref={imageRef}
           style={{ transform: transformStyle, transition: "transform 0.2s ease-out", willChange: "transform" }}
          >
            <Image src="/print_car_baby.png" alt="Car 2" fill className={styles.imgCar} />
          </div>
        </div>
      </section>
    </main>
  );
}