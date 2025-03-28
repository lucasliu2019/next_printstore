import styles from "./page.module.css";
import Slideshow from "./components/slideshow/slideshow";
import Card from "./components/card/card";
import Heading from "./components/heading/heading";
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


        <h1>Our Services</h1>
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
      </main>
    </div>
  );
}
