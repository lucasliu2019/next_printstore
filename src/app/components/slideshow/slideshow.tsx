"use client";

import { useState, useEffect } from "react";
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
    text: "A charming 3D sculpture of a baby sitting on a chair, capturing innocence and curiosity.",
  },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility
  const [modalItem, setModalItem] = useState<SlideItem | null>(null); // State to track the item in the modal

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length); // Loop through slides
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);
  };

  const setSlide = (index: number) => () => {
    setCurrentSlide(index);
  };

  // Image Click
  interface SlideItem {
    src: string;
    text: string;
  }

  const handleSlideClick = (item: SlideItem) => {
    setModalItem(item); // Set the clicked item as the modal item
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
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
            onClick={() => handleSlideClick(item)} // Open modal on click
          >
            <div className={styles.numbertext}>
              {index + 1} / {data.length}
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={item.src}
                alt={item.text}
                fill
                style={{ objectFit: "contain", cursor: "pointer" }}
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

        {/* Modal for Large Picture View */}
        {isModalOpen && modalItem && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modal_content}>
              <Image
                src={modalItem.src}
                alt={modalItem.text} // Use the text from the modal item
                fill
                style={{ objectFit: "contain" }}
              />
              <div className={styles.modal_text}>{modalItem.text}</div>{" "}
              {/* Add text at the bottom */}
            </div>
          </div>
        )}
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
