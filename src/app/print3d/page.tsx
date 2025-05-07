"use client";
import { useEffect, useRef, useState } from "react";


import Image from "next/image";
import styles from "./page.module.css";


type CartItem = {
  id: string | number;
  name: string;
  price: string;
  quantity: number;
};

export default function Page() {

  const [showPopup, setShowPopup] = useState(false);

  const imageRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState("scale(1) translateY(0px)");

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    // Get existing cart or initialize an empty array
    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if item already exists in the cart
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    // Save updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // hide after 2s
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const visibleRatio = 1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);

      const scale = 0.6 + visibleRatio * 0.6; // max scale 1.1
      const translateX = -visibleRatio * 500 + 400; // max translateY -20px

      setTransformStyle(`scale(${scale}) translateX(${translateX}px)`);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className={styles.main}>
      {showPopup && (
        <div className={styles.popup}>
          ✅ Added to cart!
        </div>
      )}
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

        <div style={{ width: '100%', maxWidth: '560px', overflow: 'hidden', margin: 'auto', marginTop: '25px' }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CUWhoTc2pGw?si=7hJrEOvl4YnJA_cS"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ width: '100%', maxWidth: '100%' }}
          ></iframe>
        </div>

        <div className={styles.pricing}>
          <div className={styles.left_text}>
            <h2 className={styles.sectionSubtitle}>Human Scanning</h2>
            <h3 className={`${styles.pricingTitle} ${styles.huamScanPrice}`}>Flexible pricing</h3>
            <p className={styles.price}>150-300$</p>
            <button className={styles.grayButton} onClick={() =>
              addToCart({
                id: 1,
                name: "3D Human Scan",
                price: "150 - 300",
              })
            }>Order</button>
          </div>
          <div className={`${styles.right_text} ${styles.priceDetails}`}>
            <h3> What&apos;s included in the price:</h3>
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
            <p className={styles.sectionSubtitle}>Scan and print your car</p>
            <p className={styles.smallText}>Possibility to modify the model to suit your needs</p>

            <h3 className={styles.pricingTitle}>Pricing <br /> 400-500$</h3>
            <button className={styles.grayButton}
              onClick={() =>
                addToCart({
                  id: 2,
                  name: "3D Car Scan",
                  price: "400 - 500",
                })
              }
            >Order</button>
          </div>
          <div className={styles.carImage_wrapper}>
            <Image src="/print_car.png" alt="Car 1" fill className={styles.image} />
            <div className={styles.scanLine}></div>
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