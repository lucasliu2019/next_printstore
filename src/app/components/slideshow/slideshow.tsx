"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./slideshow.module.css";

const data = [
  {
    src: "/baby_alpha1.png",
    text: "A baby cradled in a protective hand, symbolizing love and care.",
  },
  {
    src: "/baby_alpha2.png",
    text: "A baby peacefully resting on a lily pad, symbolizing purity, serenity, and new beginnings.",
  },
  {
    src: "/baby_alpha3.png",
    text: "A charming 3D sculpture of a baby sitting on a chair, capturing innocence and curiosity in a timeless design.",
  },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);
  };

  const setSlide = (index: number) => () => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <div className={styles.slideshow_container}>
        {data.map((item, index) => (
          <div
            className={`${styles.mySlides} ${styles.fade} ${
              index === currentSlide ? styles.active : ""
            }`}
            key={index}
          >
            <div className={styles.numbertext}>
              {index + 1} / {data.length}
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={item.src}
                alt={item.text}
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.text}>{item.text}</div>
          </div>
        ))}

        <a className={styles.prev} onClick={prevSlide}>
          ❮
        </a>
        <a className={styles.next} onClick={nextSlide}>
          ❯
        </a>
      </div>
      <br />
      <div className={styles.nav_dots}>
        {data.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.active : ""
            }`}
            onClick={setSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
