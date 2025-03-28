import styles from "./page.module.css";
// import Slideshow from "./components/slideshow/slideshow";
import Card from "./components/fullCard/fullCard";
// import { BiFontColor } from "react-icons/bi";
// import Heading from "./components/heading/heading";
// import Slideshow from "@/components/slideshow/slideshow";

const cardData = [
  {
    route: "/print3d", // Route for this card
    title: "3D",
    subtitle: "Scan & Print",
    subsubtitle: "",
    src: "/couple_alpha.png",
    alt: "Couple Figure",
    description: "Get your 3D models printed by professionals.",
    color: "linear-gradient(to bottom, rgba(52, 17, 73, 0.74), rgba(0, 0, 0, 0.74))",
    titleStyle: { 
      fontSize: "3rem", 
      fontWeight:"30000",
      textShadow: "4px 4px 20px rgba(187, 71, 255, 1)", // Increased blur and opacity
      // textAlign: "center", // Center-align the text
    },
    subtitleStyle: { 
      fontSize: "2rem", 
      fontWeight:"30000",
      textShadow: "4px 4px 20px rgba(187, 71, 255, 1)", // Increased blur and opacity
      // textAlign: "center", // Center-align the text
    },
  },
  {
    route: "/baby3d", // Route for this card
    title: "3D Print",
    subtitle: "Baby",
    subsubtitle: "",
    src: "/baby_alpha2.png",
    alt: "Baby",
    description: "Get your 3D models printed by professionals.",
    color: "linear-gradient(45deg, rgba(250,230,255,1) 0%, rgba(119,190,255,1) 100%)",
    titleStyle: { 
      fontSize: "2rem", 
      padding: "10px",
      textShadow: "4px 4px 20px rgba(29, 31, 23, 0.6)", // Increased blur and opacity
    }, // Another custom style
    subtitleStyle: {
      fontSize: "3rem", 
      fontWeight: "bold",
      color: "rgb(61, 128, 194)",
      textShadow: "4px 4px 1px rgb(10, 30, 50)", // Increased blur and opacity
    }, // Another custom style
  },
  {
    route: "/photo", // Route for this card
    title: "Photo",
    subtitle: "Printing",
    subsubtitle: "Publishing",
    src: "/model_gun_alpha.png",
    alt: "Gun Figure",
    description: "Get your 3D models printed by professionals.",
    color: "linear-gradient(to bottom, rgba(52, 17, 73, 0.74), rgba(0, 0, 0, 0.74))",
    titleStyle: {

    }, // Another custom style
    subtitleStyle: {

    }, // Another custom style
  },
  {
    route: "/web", // Route for this card
    title: "Web Development",
    subtitle: "Web Design",
    subsubtitle: "",
    src: "/model_gun_alpha.png",
    alt: "Gun Figure",
    description: "Get your 3D models printed by professionals.",
    color: "linear-gradient(to bottom, rgba(0, 140, 255, 0.74), rgba(0, 0, 0, 0.74))",
    titleStyle: { 

    }, // Another custom style
    subtitleStyle: {

    }, // Another custom style
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
              titleStyle={card.titleStyle} // Pass custom styles
              subtitleStyle={card.subtitleStyle} // Pass custom styles  
              route={card.route}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
