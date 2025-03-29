import styles from "./fullCard.module.css";
import Image from "next/image";
import Link from "next/link";

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
  route,
}: {
  title: string;
  subtitle: string;
  subsubtitle: string;
  src: string;
  alt: string;
  description?: string;
  color: string;
  titleStyle?: React.CSSProperties; // Optional custom style prop
  subtitleStyle?: React.CSSProperties; // Optional custom style prop
  route: string;
}) => {
  return (
    <div
      className={styles.card}
      style={{
        // background: `linear-gradient(to bottom, ${color}, black)`,
        background: `${color}`,
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
        <h2
          className={styles.title}
          style={{
            ...titleStyle, // Merge custom styles passed via props
          }}
        >
          {title}
        </h2>
        <h3
          className={styles.subtitle}
          style={{
            ...subtitleStyle, // Merge custom styles passed via props
          }}
        >
          {subtitle}
        </h3>
        <h4 className={styles.subsubtitle}>{subsubtitle}</h4>
        <p className={styles.description}>{description}</p>
        {/* Add Link to the button */}
        <Link href={route} passHref>
          <div className={styles.button}>Learn More</div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
