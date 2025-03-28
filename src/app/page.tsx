import styles from "./page.module.css";
// import Slideshow from "./components/slideshow/slideshow";
import Card from "./components/fullCard/fullCard";
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
    color: "linear-gradient(to bottom, rgba(52, 17, 73, 0.74), rgba(0, 0, 0, 0.74))",
    titleStyle: { 
      // border: "2px solid red", 
      borderRadius: "20px", 
      fontSize: "3rem", 
      fontWeight:"30000",
      textShadow: "4px 4px 20px rgba(187, 71, 255, 1)", // Increased blur and opacity
      // textAlign: "center", // Center-align the text
    },
    subtitleStyle: { 
      // border: "2px solid red", 
      borderRadius: "20px", 
      fontSize: "3rem", 
      fontWeight:"30000",
      textShadow: "4px 4px 20px rgba(187, 71, 255, 1)", // Increased blur and opacity
      // textAlign: "center", // Center-align the text
      border: "2px solid green", padding: "10px"
    },
  },
  {
    title: "3D Print",
    subtitle: "Baby",
    subsubtitle: "",
    src: "/baby_alpha2.png",
    alt: "Baby",
    description: "Get your 3D models printed by professionals.",
    color: "linear-gradient(45deg, rgba(250,230,255,1) 0%, rgba(119,190,255,1) 100%)",
    titleStyle: { border: "2px solid green", padding: "10px" 
    }, // Another custom style
    subtitleStyle: { border: "2px solid green", padding: "10px" 
    }, // Another custom style
  },
  {
    title: "Photo",
    subtitle: "Printing",
    subsubtitle: "Publishing",
    src: "/model_gun_alpha.png",
    alt: "Gun Figure",
    description: "Get your 3D models printed by professionals.",
    color: "linear-gradient(to bottom, rgba(52, 17, 73, 0.74), rgba(0, 0, 0, 0.74))",
    titleStyle: { border: "2px solid green", padding: "10px" 
    }, // Another custom style
    subtitleStyle: { border: "2px solid green", padding: "10px" 
    }, // Another custom style
  },
  {
    title: "Web Development",
    subtitle: "Web Design",
    subsubtitle: "",
    src: "/model_gun_alpha.png",
    alt: "Gun Figure",
    description: "Get your 3D models printed by professionals.",
    color: "linear-gradient(to bottom, rgba(0, 140, 255, 0.74), rgba(0, 0, 0, 0.74))",
    titleStyle: { border: "2px solid green", padding: "10px" 
    }, // Another custom style
    subtitleStyle: { border: "2px solid green", padding: "10px" 
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
            />
          ))}
        </div>
      </main>
    </div>
  );
}
