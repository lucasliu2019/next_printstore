"use client";

import styles from "./fullCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Alfa_Slab_One } from "next/font/google";
const alfa_Slab_One = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin"],
});

const Card = ({
  title,
  subtitle,
  subsubtitle,
  src,
  alt,
  description,
  color,
  titleStyle,
  subtitleStyle,
  subsubtitleStyle,
  imgStyle,
  route,
}: {
  title: string;
  subtitle?: string;
  subsubtitle?: string;
  src: string;
  alt: string;
  description?: string[];
  color: string;
  titleStyle?: React.CSSProperties; // Optional custom style prop
  subtitleStyle?: React.CSSProperties; // Optional custom style prop
  subsubtitleStyle?: React.CSSProperties; // Optional custom style prop
  descriptionStyle?: React.CSSProperties; // Optional custom style prop
  imgStyle?:React.CSSProperties; // Optional custom style prop
  route: string;
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set visible when the element enters the viewport
          } else {
            setIsVisible(false); // Set invisible when the element leaves the viewport
          }
        });
      },
      { threshold: 0.7 } // Trigger when 10% of the element is visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div
      className={styles.card}
      style={{
        // background: `linear-gradient(to bottom, ${color}, black)`,
        background: `${color}`,
      }}
    >
      <div className={styles.card_image_wrapper}>
        <Image
          src={src}
          alt={alt}
          className={styles.card_image}
          width={500}
          height={500}
          style={{
            ...imgStyle, // Merge custom styles passed via props
          }}
        />
      </div>
      <div
        ref={textRef}
        className={`${styles.text} ${isVisible ? styles.visible : ""}`}
      >
        <h2
          className={`${styles.title}, ${alfa_Slab_One.className}`}
          style={{
            ...titleStyle, // Merge custom styles passed via props
          }}
        >
          {title}
        </h2>
        <h3
          className={`${styles.subtitle} ${alfa_Slab_One.className}`}
          style={{
            ...subtitleStyle, // Merge custom styles passed via props
          }}
        >
          {subtitle}
        </h3>
        <h4
          className={`${styles.subsubtitle} ${alfa_Slab_One.className}`}
          style={{
            ...subsubtitleStyle, // Merge custom styles passed via props
          }}
        >
          {subsubtitle}
        </h4>

        {description &&
          description.map((desc, index) => (
            <p key={index} className={styles.description}>
              {desc}
            </p>
          ))}
        {/* Add Link to the button */}
        <Link href={route} passHref>
          <div className={styles.button}>Learn More</div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
