"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function About() {
  // State for the input fields
  const [name, setName] = useState("Firstname Lastname");
  const [week, setWeek] = useState("20 weeks");
  const [dob, setDob] = useState("09.30.2025");
  const [baseColor, setBaseColor] = useState("rgb(155, 205, 199)"); // Default color for base_polygon
  const [colorName, setColorName] = useState(
    "PLA Glow Variant Glow Green (15500)"
  ); // Default color for base_polygon
  // const [selectedImage, setSelectedImage] = useState("/baby2.png"); // Default image

  const colors = [
    {
      name: "PLA Glow Variant Glow Green (15500)",
      value: "rgb(155, 205, 199)",
    },
    { name: "PLA Silk Variant Silver (13104)", value: "rgb(166, 180, 188)" },
    {
      name: "PLA Basic Gradient Variant Ocean to Meadow (10902)",
      value: "rgb(51, 145, 159)",
    },
    { name: "PLA Basic Variant Yellow (10400)", value: "rgb(237, 205, 97)" },
    { name: "PLA Silk Variant Blue (13601)", value: "rgb(57, 127, 205)" },
    {
      name: "PLA Silk Dual Color Gilded Rose (Pink-Gold)",
      value: "rgb(208, 129, 100)",
    },
    { name: "PLA Basic Variant Magenta (10202)", value: "rgb(189, 97, 145)" },
    { name: "PLA Silk Variant Pink (13202)", value: "rgb(219, 185, 190)" },
    { name: "PLA Galaxy Variant Purple (13602)", value: "rgb(52, 62, 79)" },
    { name: "PLA Basic Variant Cyan (10602)", value: "rgb(33, 117, 207)" },
    { name: "PLA Metal Gray Metallic (13100)", value: "rgb(58, 55, 52)" },
    { name: "PLA Silk Variant White (13105)", value: "rgb(242, 246, 246)" },
    {
      name: "PETG tanaleani Variant Clear (13101)",
      value: "rgb(200, 199, 195)",
    },
    { name: "TPU for AMS Variant Blue (53600)", value: "rgb(61, 120, 214)" },
    { name: "PLA Basic Variant Bambu Green (10501)", value: "rgb(0, 140, 77)" },
    { name: "Suuport for PLA Variant White", value: "rgb(229, 233, 235)" },
    { name: "TPU for AMS Variant White (53100)", value: "rgb(241, 245, 244)" },
    {
      name: "PLA Matte Variant Matte Ivory White (11100)",
      value: "rgb(243, 242, 237)",
    },
    { name: "TPU for AMS Variant Black (53101)", value: "rgb(33, 32, 36)" },
    { name: "PLA Basic Variant Black (10101)", value: "rgb(43, 43, 43)" },
    { name: "PLA CF Variant Black (14100)", value: "rgb(40, 40, 40)" },
    { name: "TPU for AMS Variant Red (53200)", value: "rgb(204, 115, 91)" },
  ];

  return (
    <div className={styles.page}>
      <h2>3D Print Baby</h2>
      <div className={styles.slide}></div>
      <p>Unique service creating 3D sculptures of your baby</p>
      <ul>
        <li>Personal inscriptions </li>
        <li>Bespoke stands </li>
        <li>Exclusive packaging options available</li>
      </ul>
      <div className={styles.card_image_wrapper}>
        <Image
          // src={selectedImage}
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
        <div className={styles.bar}></div>
        {/* <div
          className={styles.base_polygon_front}
          style={{ backgroundColor: baseColor }}
        ></div> */}

        <div className="base_polygon_front" >
          <svg className={styles.base_part}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 484 1022"
            style={{
              filter: "brightness(80%)",
            }}
          >
            <polygon
              points="96,908 295,873 285,836 444,810 481,950 118,1018"
              fill={baseColor}
            />
          </svg>
        </div>

        <div className="base_polygon_side">
          <svg className={styles.base_part}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 484 1022"
            style={{
              filter: "brightness(70%)",
            }}
          >
            <polygon
              points="96,908 118,1018 107.5,1006 86,896"
              fill={baseColor}
            />
          </svg>
        </div>


        <div className="base_polygon_top" >
          <svg className={styles.base_part}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 484 1022"
            style={{
              filter: "brightness(90%)",
            }}
          >
            <polygon
              points="96,908 86,896 262,868 296,873"
              fill={baseColor}
            />
          </svg>
        </div>


        <div className="base_polygon_topS">
          <svg className={styles.base_part}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 484 1022"
            style={{
              filter: "brightness(50%)",
            }}
          >
            <polygon
              points="262,868 296,873 283,863"
              fill={baseColor}
            />
          </svg>
        </div>

        <div className="base_polygon_topL">
          <svg className={styles.base_part}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 484 1022"
            style={{
              filter: "brightness(50%)",
            }}
          >
            <polygon
              points="296,873 283,863 282,833 285,836"
              fill={baseColor}
            />
          </svg>
        </div>

        <div className="base_polygon_topT">
          <svg className={styles.base_part}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 484 1022"
            style={{
              filter: "brightness(90%)",
            }}
          >
            <polygon
              points="282,833 285,836 444,810 439,808"
              fill={baseColor}
            />
          </svg>
        </div>

      </div>

      <form className={styles.product_form}>

      {/* Buttons to select images */}
      {/* <div className={styles.image_selector}>
        <button className={styles.image_selector_btn} onClick={() => setSelectedImage("/baby2.png")}>Image 1</button>
        <button className={styles.image_selector_btn} onClick={() => setSelectedImage("/baby1.png")}>Image 2</button>
      </div> */}


        <div className={styles.input_group}>
          <label className={styles.product_input_label}>Name:</label>
          <input
            type="text"
            className={styles.product_input}
            value={name}
            onChange={(e) => setName(e.target.value)} // Update name state
            maxLength={30} // Restrict name to 30 characters
          />
        </div>
        <div className={styles.input_group}>
          <label className={styles.product_input_label}>Week:</label>
          <input
            type="text"
            className={styles.product_input}
            value={week}
            onChange={(e) => setWeek(e.target.value)} // Update week state
            maxLength={14} // Restrict name to 30 characters
          />
        </div>
        <div className={styles.input_group}>
          <label className={styles.product_input_label}>DOB:</label>
          <input
            type="text"
            className={styles.product_input}
            value={dob}
            onChange={(e) => setDob(e.target.value)} // Update dob state
            maxLength={20} // Restrict name to 30 characters
          />
        </div>


        <label>Base Color:</label>
        <p>{colorName}</p>
        <div className={styles.color_selection}>
          {colors.map((color) => (
            <button
              key={color.value}
              type="button"
              className={styles.color_button}
              style={{
                backgroundColor: color.value,
                border: baseColor === color.value ? "2px solid white" : "none",
              }}
              onClick={() => {
                setBaseColor(color.value);
                setColorName(color.name);
              }} // Update base_polygon color
              title={color.name} // Tooltip with the color name
            >
              {/* {color.name} */}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
}
