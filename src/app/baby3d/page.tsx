"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function About() {
  // State for the input fields
  const [name, setName] = useState("Firstname Lastname");
  const [week, setWeek] = useState("20 weeks");
  const [dob, setDob] = useState("09.30.2025");
  const [baseColor, setBaseColor] = useState("rgba(255, 0, 0, 0.236)"); // Default color for base_polygon

  return (
    <div className={styles.page}>
      <h2>3D Print Baby</h2>
      <div className={styles.slide}></div>
      <p>Unique service creating 3D sculptures of your baby</p>
      <ul>
        <li>Personal inscriptions </li>
        <li>Bespoke stands </li>
        <li>Exclusive packaging options available</li>
        <div className={styles.card_image_wrapper}>
          <Image
            src="/baby2.png"
            alt="baby"
            className={styles.card_image}
            width={500}
            height={500}
          />
          <div className={styles.name_wrapper}>
            <span className={styles.name}>{name}</span>
          </div>
          <div className={styles.week_wrapper}>
            <span className={styles.week}>{week}</span>
          </div>
          <div className={styles.dob_wrapper}>
            <span className={styles.dob}>{dob}</span>
          </div>
          <div
            className={styles.base_polygon_front}
            style={{ backgroundColor: baseColor }}
          ></div>
          <div
            className={styles.base_polygon_side}
            style={{ backgroundColor: baseColor }}
          ></div>
          <div
            className={styles.base_polygon_top}
            style={{ backgroundColor: baseColor }}
          ></div>
          <div
            className={styles.base_polygon_topL}
            style={{ backgroundColor: baseColor }}
          ></div>
          <div
            className={styles.base_polygon_topS}
            style={{ backgroundColor: baseColor }}
          ></div>
          <div
            className={styles.base_polygon_topT}
            style={{ backgroundColor: baseColor }}
          ></div>
        </div>

        <form>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update name state
            maxLength={30} // Restrict name to 30 characters
          />
          <br />
          <label>Week:</label>
          <input
            type="text"
            value={week}
            onChange={(e) => setWeek(e.target.value)} // Update week state
            maxLength={14} // Restrict name to 30 characters
          />
          <br />
          <label>DOB:</label>
          <input
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)} // Update dob state
            maxLength={20} // Restrict name to 30 characters
          />

          <label>Base Color:</label>
          <input
            type="color"
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)} // Update base_polygon color
          />
        </form>
      </ul>
    </div>
  );
}
