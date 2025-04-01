

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
    src: "/main_scan.png",
    alt: "Couple Figure",
    // description: "Get your 3D models printed by professionals.",
    color: "radial-gradient(circle at 15% 50%, rgba(160,160,200,1) 0%, rgba(50,50,86,1) 5%, rgba(4,5,14,1) 15%, rgba(7,9,20,1) 97%)",
    titleStyle: { 
      fontSize: "3.5rem", 
      fontWeight:"30000",
      textShadow: "4px 4px 20px rgba(187, 71, 255, 1)", // Increased blur and opacity
      // textAlign: "center", // Center-align the text
    },
    subtitleStyle: { 
      fontSize: "3rem", 
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
    src: "/main_baby.png",
    alt: "Baby",
    // description: "Get your 3D models printed by professionals.",
    color: "linear-gradient(17deg, rgba(155,137,177,1) 0%, rgba(136,132,174,1) 12%, rgba(108,147,182,1) 53%, rgba(89,142,178,1) 100%)",
    titleStyle: { 
      fontSize: "3rem", 
      padding: "10px",
      color: "rgb(200,200,200)",
      textShadow: "4px 4px 1px rgb(105, 115, 136), 4px 4px 20px rgba(29, 31, 23, 0.6)", // Increased blur and opacity
    }, // Another custom style
    subtitleStyle: {
      fontSize: "3.5rem", 
      fontWeight: "bold",
      color: "rgb(58, 84, 146)",
      textShadow: "4px 4px 1px rgb(7, 31, 62), 1px 1px 30px rgb(0, 0, 0)", // Increased blur and opacity
    }, // Another custom style
  },
  {
    route: "/photo", // Route for this card
    title: "Photo",
    subtitle: "Printing",
    subsubtitle: "Publishing",
    src: "/main_photo.png",
    alt: "Gun Figure",
    // description: "Get your 3D models printed by professionals.",
    color: "radial-gradient(circle at 20% 50%, rgba(90,57,112,1) 0%, rgba(35,24,62,1) 20%, rgba(15,15,17,1) 100%)",
    titleStyle: {
      fontSize: "3.5rem", 
    }, // Another custom style
    subtitleStyle: {
      fontSize: "3rem", 
    }, // Another custom style
  },
  {
    route: "/web", // Route for this card
    title: "Web Development",
    subtitle: "Web Design",
    subsubtitle: "",
    src: "/main_web.png",
    alt: "Gun Figure",
    // description: "Get your 3D models printed by professionals.",
    color: "linear-gradient(to bottom, rgba(0, 140, 255, 0.74), rgb(20, 53, 151))",
    titleStyle: { 
      fontSize: "3rem", 
    }, // Another custom style
    subtitleStyle: {
      fontSize: "2.5rem", 
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
              // description={card.description}
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
