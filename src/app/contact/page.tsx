import styles from "./page.module.css";
import ContactForm from "../components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <div className={styles.page}>
        <h2 className={styles.heading}>Contact us</h2>
        <ContactForm />
    </div>
  );
}
