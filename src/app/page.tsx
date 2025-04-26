"use client";

import styles from "./page.module.css";
import Card from "./components/fullCard/fullCard";
import { useState, useEffect } from "react";

const cardData = [
  {
    route: "/print3d", // Route for this card
    title: "3D",
    subtitle: "Scan & Print",
    subsubtitle: "",
    src: "/main_scan.png",
    alt: "Couple Figure",
    description: [
      "- Precise digital copying of project and people",
      "- Creating models from sketches and drawing",
      "- High-quality printing using plastic",
    ],
    // color: "radial-gradient(circle at 25% 50%, rgba(50,50,86,1) 5% 0%, rgba(50,50,86,1) 5%, rgba(4,5,14,1) 15%, rgba(7,9,20,1) 97%)",
    color: "radial-gradient(circle at 25% 50%, rgba(4,5,14,1) 15%, rgba(7,9,20,1) 97%)",
    titleStyle: { 
      fontSize: "3.5rem", 
      fontWeight:"2000",
      // textShadow: "4px 4px 20px rgba(187, 71, 255, 1)",

      textShadow: "1px 1px 1px rgb(131, 139, 155), 2px 2px 1px rgb(131, 139, 155), 3px 3px 1px rgb(131, 139, 155), 4px 4px 20px rgba(187, 71, 255, 1) ",
      // textAlign: "center", // Center-align the text
    },
    subtitleStyle: { 
      fontSize: "3rem", 
      fontWeight:"2000",
      // textShadow: "4px 4px 20px rgba(187, 71, 255, 1)",
      // textAlign: "center", // Center-align the text
      textShadow: "1px 1px 1px rgb(131, 139, 155), 2px 2px 1px rgb(131, 139, 155), 3px 3px 1px rgb(131, 139, 155), 4px 4px 20px rgba(187, 71, 255, 1) ", 

    },
    imgStyle: {
      filter: "drop-shadow(10px 10px 20px rgb(41, 45, 74))"
    }
  },
  {
    route: "/baby3d", // Route for this card
    title: "3D Print",
    subtitle: "Baby",
    subsubtitle: "",
    src: "/main_baby.png",
    alt: "Baby",
    description: [
      "Unique service creating 3D sculptures of your baby",
      "- Personal inscriptions",
      "- Bespoke stands",
      "- Exclusive packaging options avaliable",
    ],
    color: "linear-gradient(17deg, rgba(155,137,177,1) 0%, rgba(136,132,174,1) 12%, rgba(108,147,182,1) 53%, rgba(89,142,178,1) 100%)",
    titleStyle: { 
      fontSize: "3rem", 
      color: "rgb(200,200,200)",
      textShadow: "1px 1px 1px rgb(131, 139, 155), 2px 2px 1px rgb(131, 139, 155), 3px 3px 1px rgb(131, 139, 155),4px 4px 1px rgb(131, 139, 155), 5px 5px 20px rgba(29, 31, 23, 0.6)", // Increased blur and opacity
    }, // Another custom style
    subtitleStyle: {
      fontSize: "3.5rem", 
      fontWeight: "bold",
      color: "rgb(58, 84, 146)",
      textShadow: "1px 1px 1px rgb(7, 31, 62), 2px 2px 1px rgb(7, 31, 62),3px 3px 1px rgb(7, 31, 62),4px 4px 1px rgb(7, 31, 62), 6px 6px 20px rgb(0, 0, 0)", // Increased blur and opacity
    }, // Another custom style
    imgStyle: {
      filter: "drop-shadow(5px 20px 10px rgba(0, 0, 0, 0.61))"
    }
  },
  {
    route: "/photo", // Route for this card
    title: "Photo",
    subtitle: "Printing",
    subsubtitle: "Publishing",
    src: "/main_photo.png",
    alt: "Gun Figure",
    description: [
      "- Brochures, flyers, leaflets.",
      "- Photo Printing on premium photo paper.",
      "- Calendar Printing for businesses and gifts",
    ],
    color: "radial-gradient(circle at 20% 50%, rgba(90,57,112,1) 0%, rgba(35,24,62,1) 20%, rgba(15,15,17,1) 100%)",
    titleStyle: {
      fontSize: "3.5rem", 
      textShadow: "1px 1px 1px rgb(131, 139, 155), 2px 2px 1px rgb(131, 139, 155), 3px 3px 1px rgb(131, 139, 155)", // Increased blur and opacity
    }, // Another custom style
    subtitleStyle: {
      fontSize: "3rem", 
      textShadow: "1px 1px 1px rgb(131, 139, 155), 2px 2px 1px rgb(131, 139, 155), 3px 3px 1px rgb(131, 139, 155) ", // Increased blur and opacity
    }, // Another custom style
    subsubtitleStyle: {
      fontSize: "2.5rem", 
      textShadow: "1px 1px 1px rgb(131, 139, 155), 2px 2px 1px rgb(131, 139, 155), 3px 3px 1px rgb(131, 139, 155)", // Increased blur and opacity
    }, // Another custom style
    imgStyle: {
      filter: "drop-shadow(5px 20px 10px  #000000d7)"
    }
  },
  {
    route: "/web", // Route for this card
    title: "Web Development",
    subtitle: "Web Design",
    subsubtitle: "",
    src: "/main_web.png",
    alt: "Gun Figure",
    description: [
      "- Precise digital copy of project and people",
      "- Creating models from sketches and drawing",
      "- High-quality printing using plastic",
    ],
    color: "linear-gradient(to bottom, rgba(0, 140, 255, 0.74), rgb(20, 53, 151))",
    titleStyle: { 
      fontSize: "3rem", 
      textShadow: "1px 1px 1px rgb(131, 139, 155), 2px 2px 1px rgb(131, 139, 155), 3px 3px 1px rgb(131, 139, 155)", // Increased blur and opacity
    }, // Another custom style
    subtitleStyle: {
      fontSize: "2.5rem", 
      textShadow: "1px 1px 1px rgb(131, 139, 155), 2px 2px 1px rgb(131, 139, 155), 3px 3px 1px rgb(131, 139, 155)", // Increased blur and opacity
    }, // Another custom style
    imgStyle: {
      filter: "drop-shadow(-25px 25px 10px  #000000d7)"
    }
  },
  
];

export default function Home() {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 700);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  

  return (
    <div className={styles.page}>
      <main className={styles.main}>


        {/* <h1>Our Services</h1> */}
        <div className={styles.fullCards}>
          {/* Map cardData to dynamically render Card components */}
          {cardData.map((card, index) => (
            <Card
              key={index} // Use index as a unique key
              title={isSmallScreen ? card.smallTitle || card.title : card.title} // <-- Choose title
              subtitle={card.subtitle}
              subsubtitle={card.subsubtitle}
              src={card.src}
              alt={card.alt}
              description={card.description}
              color={card.color} // Pass the color prop
              titleStyle={card.titleStyle} // Pass custom styles
              subtitleStyle={card.subtitleStyle} // Pass custom styles  
              subsubtitleStyle={card.subsubtitleStyle} // Pass custom styles
              imgStyle={card.imgStyle}
              route={card.route}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
