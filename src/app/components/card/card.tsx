// import React from 'react';
import styles from './card.module.css';
import Image from "next/image"; // Import the Image component
const Card = ({title, src, alt, description}: {title:string, src:string, alt:string, description: string}) => {
  return (
    <div className={styles.card}>
    <h2>{title}</h2>
    <Image
      src={src} // Replace with your image path
      alt={alt}
      width={300} // Set the width of the image
      height={200} // Set the height of the image
      className={styles.card_image} // Optional: Add a class for styling
    />
    <p>{description}</p>
  </div>
  );
};
export default Card;