import styles from "./page.module.css";
import ContactForm from "../components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <div className={styles.page}>
        <ContactForm />
    </div>
  );
}
