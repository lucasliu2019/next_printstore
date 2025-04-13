"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

const baseImages = [
  {
    name: "Two-level",
    path: "/base_rect.png",
  },
  {
    name: "Round",
    path: "/base_round.png",
  },
  {
    name: "Trapezoidal",
    path: "/base_trapz.png",
  },
];

const figureImages = [
  {
    name: "Book",
    path: "/figure_book.png",
  },
  {
    name: "Chair",
    path: "/figure_chair.png",
  },
  {
    name: "Egg Type1",
    path: "/figure_egg1.png",
  },
  {
    name: "Egg Type2",
    path: "/figure_egg2.png",
  },
  {
    name: "Hand",
    path: "/figure_hand.png",
  },
  {
    name: "Lotus",
    path: "/figure_lotus.png",
  },
  {
    name: "moon",
    path: "/figure_moon.png",
  },
  {
    name: "Nest",
    path: "/figure_nest.png",
  },
  {
    name: "Shell",
    path: "/figure_shell.png",
  },
];

export default function About() {
  // State for the input fields
  const [name, setName] = useState("Firstname Lastname");
  const [week, setWeek] = useState("20 weeks");
  const [dob, setDob] = useState("09.30.2025");
  const [baseColor, setBaseColor] = useState("rgb(155, 205, 199)"); // Default color for base_polygon
  const [colorName, setColorName] = useState(
    "PLA Glow Variant Glow Green (15500)"
  ); // Default color for base_polygon
  const [selectedBaseImage, setSelectedBaseImage] = useState(
    baseImages[0].path
  ); // Default image
  const [selectedFigureImage, setSelectedFigureImage] = useState(
    figureImages[0].path
  ); // Default image

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
          src={selectedFigureImage}
          // src="/baby3.png"
          alt="baby"
          className={styles.card_image_figure}
          width={500}
          height={500}
        />
        <Image
          src={selectedBaseImage}
          // src="/baby3.png"
          alt="baby"
          className={styles.card_image_base}
          width={500}
          height={500}
        />

        <div
          className={`${styles.name_wrapper} ${
            selectedBaseImage === baseImages[0].path
              ? styles.name_wrapper_b1
              : selectedBaseImage === baseImages[1].path
              ? styles.name_wrapper_b2
              : selectedBaseImage === baseImages[2].path
              ? styles.name_wrapper_b3
              : ""
          } `}
        >
          <span className={styles.name}>{name}</span>
        </div>

        <div
          className={`${styles.week_wrapper}
        ${
          selectedBaseImage === baseImages[0].path
            ? styles.week_wrapper_b1
            : selectedBaseImage === baseImages[1].path
            ? styles.week_wrapper_b2
            : selectedBaseImage === baseImages[2].path
            ? styles.week_wrapper_b3
            : ""
        }
        `}
        >
          <span className={styles.week}>{week}</span>
        </div>

        <div
          className={`${styles.dob_wrapper}
                ${
                  selectedBaseImage === baseImages[0].path
                    ? styles.dob_wrapper_b1
                    : selectedBaseImage === baseImages[1].path
                    ? styles.dob_wrapper_b2
                    : selectedBaseImage === baseImages[2].path
                    ? styles.dob_wrapper_b3
                    : ""
                }
        
        `}
        >
          {selectedBaseImage !== baseImages[0].path && (
            <span className={styles.dob}>{dob}</span>
          )}
        </div>

        {selectedBaseImage === baseImages[2].path && (
          <div className={styles.bar}></div>
        )}

        {selectedBaseImage === baseImages[2].path && (
          <>
            <div className="base_polygon_front">
              <svg
                className={styles.base_part}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 817"
                style={{
                  filter: "brightness(80%)",
                }}
              >
                <polygon
                  points="93,703 295,670 286,637 443,610 480,746 118,816"
                  fill={baseColor}
                />
              </svg>
            </div>

            <div className="base_polygon_side">
              <svg
                className={styles.base_part}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 817"
                style={{
                  filter: "brightness(70%)",
                }}
              >
                <polygon
                  points="93,703 118,816 106,803 83,693"
                  fill={baseColor}
                />
              </svg>
            </div>

            <div className="base_polygon_top">
              <svg
                className={styles.base_part}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 817"
                style={{
                  filter: "brightness(90%)",
                }}
              >
                <polygon
                  points="93,703 83,693 259,666 295,670"
                  fill={baseColor}
                />
              </svg>
            </div>

            <div className="base_polygon_topS">
              <svg
                className={styles.base_part}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 817"
                style={{
                  filter: "brightness(50%)",
                }}
              >
                <polygon points="259,666 295,670 283,661" fill={baseColor} />
              </svg>
            </div>

            <div className="base_polygon_topL">
              <svg
                className={styles.base_part}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 817"
                style={{
                  filter: "brightness(50%)",
                }}
              >
                <polygon
                  points="295,670 283,661 281,635 286,637"
                  fill={baseColor}
                />
              </svg>
            </div>

            <div className="base_polygon_topT">
              <svg
                className={styles.base_part}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 817"
                style={{
                  filter: "brightness(90%)",
                }}
              >
                <polygon
                  points="281,635 286,637 443,610 438,607"
                  fill={baseColor}
                />
              </svg>
            </div>
          </>
        )}

        {selectedBaseImage === baseImages[0].path && (
          <>
            <div className="base_polygon_front">
              <svg
                className={styles.base_part}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 817"
                style={{
                  filter: "brightness(40%)",
                }}
              >
                <polygon
                  points="144,726 451,672 451,707 144,766"
                  fill={baseColor}
                />

                <polygon
                  points="144,771.5 451,717 451,753 144,811.5"
                  fill={baseColor}
                />
              </svg>
            </div>

            <div className="base_polygon_side">
              <svg
                className={styles.base_part}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 817"
                style={{
                  filter: "brightness(60%)",
                }}
              >
                <polygon
                  points="18,610 126,724 126,762 20,644"
                  fill={baseColor}
                />

                <polygon
                  points="19,654 126,771 126,807 19,686"
                  fill={baseColor}
                />
              </svg>
            </div>

            <div className="base_polygon_shadow1">
              <svg
                className={styles.base_part}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 817"
                style={{
                  filter: "brightness(58%)",
                }}
              >
                <polygon
                  points="126,724 126,762 130,764 130,726 "
                  fill={baseColor}
                />

                <polygon
                  points="126,771 126,807 130,810 130,773"
                  fill={baseColor}
                />
              </svg>
            </div>

            <div className="base_polygon_shadow2">
              <svg
                className={styles.base_part}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 817"
                style={{
                  filter: "brightness(55%)",
                }}
              >
                <polygon
                  points="130,764 130,726 133,726 133,765 "
                  fill={baseColor}
                />

                <polygon
                  points="130,810 130,773 133,774 133,811 "
                  fill={baseColor}
                />
              </svg>
            </div>

            <div className="base_polygon_shadow3">
              <svg
                className={styles.base_part}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 817"
                style={{
                  filter: "brightness(52%)",
                }}
              >
                <polygon
                  points="136,765 136,726 133,726 133,765 "
                  fill={baseColor}
                />

                <polygon
                  points="136,812 136,774 133,774 133,811 "
                  fill={baseColor}
                />
              </svg>
            </div>

            <div className="base_polygon_shadow4">
              <svg
                className={styles.base_part}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 817"
                style={{
                  filter: "brightness(48%)",
                }}
              >
                <polygon
                  points="136,765 136,726 139,726.5 139,765.5 "
                  fill={baseColor}
                />

                <polygon
                  points="136,812 136,774 139,773.5 139,812 "
                  fill={baseColor}
                />
              </svg>
            </div>

            <div className="base_polygon_shadow5">
              <svg
                className={styles.base_part}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 817"
                style={{
                  filter: "brightness(45%)",
                }}
              >
                <polygon
                  points="139,726.5 139,765.5  140,765 140,726.5 "
                  fill={baseColor}
                />

                <polygon
                  points=" 139,773.5 139,812 140,812 140,773 "
                  fill={baseColor}
                />
              </svg>
            </div>

            <div className="base_polygon_shadowR1">
              <svg
                className={styles.base_part}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 817"
                style={{
                  filter: "brightness(43%)",
                }}
              >
                <polygon
                  points="140,726.5 140,765 144,766 144,726"
                  fill={baseColor}
                />
                <polygon
                  points="140,773 140,812 144,812 144,772"
                  fill={baseColor}
                />
              </svg>
            </div>


            <div className="base_polygon_shadowR2">
              <svg
                className={styles.base_part}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 817"
                style={{
                  filter: "brightness(45%)",
                }}
              >
                <polygon
                  points="451,672 451,707 452,707 454,671.5  "
                  fill={baseColor}
                />
                <polygon
                  points="451,717 451,753  452,752 454,716"
                  fill={baseColor}
                />
              </svg>
              </div>

              <div className="base_polygon_shadowR3">
              <svg
                className={styles.base_part}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 817"
                style={{
                  filter: "brightness(50%)",
                }}
              >
                <polygon
                  points="452,672 451,707 454,707 454,671.5  "
                  fill={baseColor}
                />
                <polygon
                  points="452,717 451,753  454,752 454,716"
                  fill={baseColor}
                />
              </svg>
              </div>

              <div className="base_polygon_shadowR4">
              <svg
                className={styles.base_part}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 817"
                style={{
                  filter: "brightness(55%)",
                }}
              >
                <polygon
                  points=" 454,707 454,671.5  456,671 456,706  "
                  fill={baseColor}
                />
                <polygon
                  points=" 454,752 454,716 456,715 456,750 "
                  fill={baseColor}
                />
              </svg>
            </div>

            <div className="base_polygon_shadowR5">
              <svg
                className={styles.base_part}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 817"
                style={{
                  filter: "brightness(60%)",
                }}
              >
                <polygon
                  points=" 456,671 456,706 458,704 458,670  "
                  fill={baseColor}
                />
                <polygon
                  points="456,715 456,750 458,745 458,712 "
                  fill={baseColor}
                />
              </svg>
            </div>
            <div className="base_polygon_top">
              <svg
                className={styles.base_part}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 817"
                style={{
                  filter: "brightness(60%)",
                }}
              >
                <polygon
                  points=" 456,671 456,706 458,704 458,670  "
                  fill={baseColor}
                />
              </svg>
            </div>
          </>
        )}
      </div>

      <div className={styles.image_selector}>
        {baseImages.map((image) => (
          <button
            key={image.name}
            className={styles.image_selector_btn}
            onClick={() => setSelectedBaseImage(image.path)} // Update selected image
          >
            {image.name}
          </button>
        ))}
      </div>

      <div className={styles.image_selector}>
        {figureImages.map((image) => (
          <button
            key={image.name}
            className={styles.image_selector_btn}
            onClick={() => setSelectedFigureImage(image.path)} // Update selected image
          >
            {image.name}
          </button>
        ))}
      </div>

      <form className={styles.product_form}>
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
