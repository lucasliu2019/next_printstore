import styles from './fullCard.module.css';
import Image from "next/image";

const Card = ({
  title,
  subtitle,
  subsubtitle,
  src,
  alt,
  description,
  color,
}: {
  title: string;
  subtitle: string;
  subsubtitle: string;
  src: string;
  alt: string;
  description: string;
  color: string;
}) => {
  return (
    <div
      className={styles.card}
      style={{
        background: `linear-gradient(to bottom, ${color}, black)`, // Linear gradient with black
      }}
    >
      <Image
        src={src}
        alt={alt}
        className={styles.card_image}
        width={500}
        height={500}
      />
      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <h4 className={styles.subsubtitle}>{subsubtitle}</h4>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;