import styles from "./page.module.css";
import ContactForm from "../components/ContactForm/ContactForm";
import Image from "next/image";

export default function Contact() {
  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Contact us</h2>
      <div className={styles.contactContainer}>
        <ContactForm />
        <Image
          src="/env_blue.png"
          alt="Blue Envolope"
          width={500}
          height={500}
          className={styles.envBlue}
        />

        <Image
          src="/env_yellow.png"
          alt="Yellow Envelope"
          width={500}
          height={500}
          className={styles.envYellow}
        />

        <Image
          src="/env_pink.png"
          alt="Pink Envelope"
          width={500}
          height={500}
          className={styles.envPink}
        />
      </div>
    </div>
  );
}
