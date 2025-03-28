import styles from "./page.module.css";
// import Slideshow from "./components/slideshow/slideshow";
import Card from "./components/fullCard/fullCard";
import { MdSubtitles } from "react-icons/md";
// import Heading from "./components/heading/heading";
// import Slideshow from "@/components/slideshow/slideshow";

const cardData = [
  {
    title: "3D",
    subtitle: "Scan & Print",
    subsubtitle: "",
    src: "/couple_alpha.png",
    alt: "Couple Figure",
    description: "Get your 3D models printed by professionals.",
    color: "#FF5733", // Example color
  },
  {
    title: "3D Print",
    subtitle: "Baby",
    subsubtitle: "",
    src: "/baby_alpha2.png",
    alt: "Baby",
    description: "Get your 3D models printed by professionals.",
    color: "#33FF57", // Example color
  },
  {
    title: "Photo",
    subtitle: "Printing",
    subsubtitle: "Publishing",
    src: "/model_gun_alpha.png",
    alt: "Gun Figure",
    description: "Get your 3D models printed by professionals.",
    color: "#3357FF", // Example color
  },
  {
    title: "Web Development",
    subtitle: "Web Design",
    subsubtitle: "",
    src: "/model_gun_alpha.png",
    alt: "Gun Figure",
    description: "Get your 3D models printed by professionals.",
    color: "#FF33A1", // Example color
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>


        {/* <h1>Our Services</h1> */}
        <div className={styles.fullCards}>
          {/* Map cardData to dynamically render Card components */}
          {cardData.map((card, index) => (
            <Card
              key={index} // Use index as a unique key
              title={card.title}
              subtitle={card.subtitle}
              subsubtitle={card.subsubtitle}
              src={card.src}
              alt={card.alt}
              description={card.description}
              color={card.color} // Pass the color prop
            />
          ))}
        </div>
      </main>
    </div>
  );
}
