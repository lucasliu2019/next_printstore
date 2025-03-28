// import React from 'react';
import styles from './fullCard.module.css';
import Image from "next/image"; // Import the Image component
const Card = ({title, src, alt, description}: {title:string, src:string, alt:string, description: string}) => {
  return (
    <div className={styles.card}>
    <Image
      src={src} // Replace with your image path
      alt={alt}
      // Set the width of the image
      width={300} 
      // Set the height of the image
      height={200} 
      className={styles.card_image} // Optional: Add a class for styling
    />
    <div className={styles.text}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>

  </div>
  );
};
export default Card;