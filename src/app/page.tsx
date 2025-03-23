import styles from "./page.module.css";
import Slideshow from "./components/slideshow/slideshow";
import Card from "./components/card/card";
// import Slideshow from "@/components/slideshow/slideshow";

const cardData = [
  {
    title: "3D Scan & Print",
    src: "/couple_alpha.png",
    alt: "Couple Figure",
    description: "Get your 3D models printed by professionals.",
  },
  {
    title: "3D Scan & Print",
    src: "/girl_alpha.png",
    alt: "Girl Figure",
    description: "Get your 3D models printed by professionals.",
  },
  {
    title: "3D Scan & Print",
    src: "/model_gun_alpha.png",
    alt: "Gun Figure",
    description: "Get your 3D models printed by professionals.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1 className={styles.mainheading}>Exceptional Quality, Redefined.</h1>
          <p className={styles.subheading}>We design and create high-quality 3D models with precision and expertise, ensuring every detail meets professional standards. Using top-tier materials, we deliver durable and visually stunning prints tailored to your needs.</p>
          <div className={styles.buttongroup}>
            <button className={styles.button}>Explore</button> <button className={styles.button}>Contact</button>
          </div>
          {/* <p className={styles.subheading}>Expertly Crafted 3D Models, Printed with Premium Materials. </p> */}
        </div>
        <div className={styles.cards}>
          {/* Map cardData to dynamically render Card components */}
          {cardData.map((card, index) => (
            <Card
              key={index} // Use index as a unique key
              title={card.title}
              src={card.src}
              alt={card.alt}
              description={card.description}
            />
          ))}
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
