import styles from "./page.module.css";
import Slideshow from "./components/slideshow/slideshow";
import Image from "next/image"; // Import the Image component
// import Slideshow from "@/components/slideshow/slideshow";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.cards}>
          {/* <div className={styles.card}>
            <h2>3D Printers</h2>
            <p>Find the right 3D printer for your needs.</p>
          </div>
          <div className={styles.card}>
            <h2>3D Printing Materials</h2>
            <p>Explore a variety of 3D printing materials.</p>
          </div> */}
          <div className={styles.card}>
            <h2>3D Scan &  Scan</h2>
            <Image
              src="/car_alpha.png" // Replace with your image path
              alt="3D Car"
              width={300} // Set the width of the image
              height={200} // Set the height of the image
              className={styles.card_image} // Optional: Add a class for styling
            />
            <p>Get your 3D models printed by professionals.</p>
          </div>

          <div className={styles.card}>
            <h2>3D Scan &  Scan</h2>
            <Image
              src="/couple_alpha.png" // Replace with your image path
              alt="3D Car"
              width={300} // Set the width of the image
              height={200} // Set the height of the image
              className={styles.card_image} // Optional: Add a class for styling
            />
            <p>Get your 3D models printed by professionals.</p>
          </div>

          <div className={styles.card}>
            <h2>3D Scan &  Scan</h2>
            <Image
              src="/Girl_alpha.png" // Replace with your image path
              alt="3D Car"
              width={300} // Set the width of the image
              height={200} // Set the height of the image
              className={styles.card_image} // Optional: Add a class for styling
            />
            <p>Get your 3D models printed by professionals.</p>
          </div>
        </div>

        <div className={styles.slideshow}>
          <h2>3D Figures</h2>
          <div className={styles.slide}>
            <Slideshow />
          </div>
          <p>Create your memory with 3D Figures.</p>
        </div>
      </main>
    </div>
  );
}
