"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

import Select from "react-select";

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
    name: "Hand",
    front: "/figure_hand.png",
    back: "/figure_hand_b.png",
  },
  {
    name: "Book",
    front: "/figure_book.png",
    back: "/figure_book_b.png",
  },
  {
    name: "Chair",
    front: "/figure_chair.png",
    back: "/figure_chair_b.png",
  },
  {
    name: "Egg Type1",
    front: "/figure_egg1.png",
    back: "/figure_egg1_b.png",
  },
  {
    name: "Egg Type2",
    front: "/figure_egg2.png",
    back: "/figure_egg2_b.png",
  },

  {
    name: "Lotus",
    front: "/figure_lotus.png",
    back: "/figure_lotus_b.png",
  },
  {
    name: "Moon",
    front: "/figure_moon.png",
    back: "/figure_moon_b.png",
  },
  {
    name: "Nest",
    front: "/figure_nest.png",
    back: "/figure_nest_b.png",
  },
  {
    name: "Shell",
    front: "/figure_shell.png",
    back: "/figure_shell_b.png",
  },
];

const fontFamily = [
  {
    name: "Arial",
  },
  {
    name: "Times New Roman",
  },
  {
    name: "Courier New",
  },
  {
    name: "Georgia",
  },
  {
    name: "Verdana",
  },
  {
    name: "Tahoma",
  },
  {
    name: "Trebuchet MS",
  },
  {
    name: "Comic Sans MS",
  },
  {
    name: "Impact",
  },
  {
    name: "Lucida Console",
  },
];

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

const colorOptions = colors.map((color, index) => ({
  value: index,
  label: color.name,
  color: color.value,
}));



export default function About() {
  // State for the input fields
  const [name, setName] = useState("Firstname Lastname");
  const [week, setWeek] = useState("20 weeks");
  const [dob, setDob] = useState("09.30.2025");
  const [msg, setMsg] = useState("Your message");

  const [front, setFront] = useState(true);

  const [baseColor, setBaseColor] = useState(4);
  const [sideColor, setSideColor] = useState(0); // Default color for base_polygon
  const [fontColor, setFontColor] = useState(11);
  const [font, setFont] = useState(0);

  const [selectedBaseImage, setSelectedBaseImage] = useState(0); // Default image
  const [selectedFigureImage, setSelectedFigureImage] = useState(0); // Default image

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isExSmallScreen, setIsExSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000); // Check if the screen width is <= 900px
      setIsExSmallScreen(window.innerWidth <= 768); // Check if the screen width is <= 900px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Add a specific class to the body
    document.body.classList.add(styles.baby3dBody);

    // Cleanup: Remove the class when the component unmounts
    return () => {
      document.body.classList.remove(styles.baby3dBody);
    };
  }, []);

  const renderViewFieldset = () => {
    return (
      <fieldset className={styles.fieldset_view}>
        <legend className={styles.fieldset_legend}>
          Choose your view:
        </legend>
        <div className={styles.slider_toggle}>
          <input
            type="checkbox"
            id="toggle"
            className={styles.slider_input}
            checked={front} // Bind to the `front` state
            onChange={() => setFront((prev) => !prev)} // Toggle the `front` state
          />
          <label htmlFor="toggle" className={styles.slider_label}>
            <span
              className={`${styles.slider_text} ${front ? styles.align_left : styles.align_right
                }`}
            >
              {front ? "Front" : "Back"} {/* Show only one text */}
            </span>
          </label>
        </div>
      </fieldset>
    );
  }

  return (
    <div className={styles.page}>
      <div>
        <h2>3D Print Baby</h2>
        <div className={styles.slide}></div>
        <p>Unique service creating 3D sculptures of your baby</p>
        <ul>
          <li>Personal inscriptions </li>
          <li>Bespoke stands </li>
          <li>Exclusive packaging options available</li>
        </ul>
      </div>

      <div className={styles.card_container}>
        {/**************************  Left Card ******************************/}
        <div className={styles.left_container}>
          <fieldset className={`${styles.fieldset} ${styles.fieldset_baseT}`}>
            <legend className={`${styles.fieldset_legend} ${styles.fieldset_legend_base}`}>
            </legend>
            {isSmallScreen ? (
              // Render a dropdown selector for small screens
              <select
                className={styles.selector}
                onChange={(e) => setSelectedBaseImage(Number(e.target.value))}
                value={selectedBaseImage}
              >
                {baseImages.map((image, index) => (
                  <option key={index} value={index}>
                    {image.name}
                  </option>
                ))}
              </select>
            ) : (
              // Render buttons for larger screens
              baseImages.map((image, index) => (
                <button
                  key={index}
                  className={`${styles.image_selector_btn} ${selectedBaseImage === index ? styles.image_selector_btn_active : ""}`}
                  onClick={() => setSelectedBaseImage(index)}
                >
                  {image.name}
                </button>
              ))
            )}
          </fieldset>

          <fieldset className={`${styles.fieldset} ${styles.fieldset_figureT}`}>
            <legend className={`${styles.fieldset_legend} ${styles.fieldset_legend_figure}`}>
            </legend>
            {isSmallScreen ? (
              // Render a dropdown selector for small screens
              <select
                className={styles.selector}
                onChange={(e) => setSelectedFigureImage(Number(e.target.value))}
                value={selectedFigureImage}
              >
                {figureImages.map((image, index) => (
                  <option key={index} value={index}>
                    {image.name}
                  </option>
                ))}
              </select>
            ) : (
              // Render buttons for larger screens
              figureImages.map((image, index) => (
                <button
                  key={index}
                  className={`${styles.image_selector_btn} ${selectedFigureImage === index ? styles.image_selector_btn_active : ""}`}
                  onClick={() => setSelectedFigureImage(index)} // Update selected image
                >
                  {image.name}
                </button>
              ))
            )}
          </fieldset>

          <fieldset
            className={`${styles.fieldset_center} ${styles.fieldset_info}`}
          >
            <legend className={styles.fieldset_legend}>
              Personalized info:
            </legend>
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
                maxLength={10} // Restrict name to 30 characters
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
            <div className={styles.input_group}>
              <label className={styles.product_input_label}>Back text:</label>
              <input
                type="text"
                className={styles.product_input}
                value={msg}
                onChange={(e) => setMsg(e.target.value)} // Update dob state
                maxLength={20} // Restrict name to 30 characters
              />
            </div>
          </fieldset>

          <fieldset className={`${styles.fieldset_center} ${styles.fieldset_fontT}`}>
            <legend className={`${styles.fieldset_legend} ${styles.fieldset_legend_font}`}></legend>
            <select
              className={styles.selector}
              onChange={(e) => setFont(Number(e.target.value))}
              value={selectedFigureImage}
            >
              {fontFamily.map((font, index) => (
                <option key={index} value={index}>
                  {font.name}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset className={`${styles.fieldset} ${styles.fieldset_fontC}`}>
            <legend className={styles.fieldset_legend}>Font color:</legend>
            <p className={styles.fieldset_display}>{colors[fontColor].name}</p>

            {isSmallScreen ? (
              // Render a dropdown selector for small screens
              <Select
                options={colorOptions}
                value={colorOptions[fontColor]}
                onChange={(selectedOption) => {
                  if (selectedOption) {
                    setFontColor(selectedOption.value);
                  }
                }}
                menuPlacement="top" // Open the dropdown menu upward
                isSearchable={false} // Disable typing in the dropdown
                styles={{
                  option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.data.color,
                    color: "black",
                    whiteSpace: "nowrap", // Prevent text wrapping
                    overflow: "hidden", // Hide overflowing content
                    textOverflow: "ellipsis", // Add ellipsis for overflowing text
                  }),
                  singleValue: (provided, state) => ({
                    ...provided,
                    height: "22px", /* Set the height */
                    backgroundColor: state.data.color,
                    color: state.data.color,
                  }),
                  control: (provided) => ({
                    ...provided,
                    height: "40px", /* Set the height */
                    width: "100%", // Set the width of the dropdown
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }),
                  menu: (provided) => ({
                    ...provided,
                    zIndex: 9999, // Ensure the dropdown menu is on top
                    width: "100%", // Ensure the dropdown menu matches the control width
                  }),
                }}
              />
            ) : (
              // Render buttons for larger screens
              <div className={styles.color_selection}>
                {colors.map((color, index) => (
                  <button
                    key={index}
                    type="button"
                    className={styles.color_button}
                    style={{
                      backgroundColor: color.value,
                      border: fontColor === index ? "2px solid white" : "none",
                    }}
                    onClick={() => {
                      setFontColor(index);
                    }} // Update base_polygon color
                    title={color.name} // Tooltip with the color name
                  ></button>
                ))}
              </div>
            )}
          </fieldset>

          <fieldset className={`${styles.fieldset} ${styles.fieldset_baseC}`}>
            <legend className={styles.fieldset_legend}>Base Color:</legend>
            <p className={styles.fieldset_display}>{colors[baseColor].name}</p>

            {isSmallScreen ? (
              // Render a dropdown selector for small screens
              <Select
                options={colorOptions}
                value={colorOptions[baseColor]}
                onChange={(selectedOption) => {
                  if (selectedOption) {
                    setBaseColor(selectedOption.value);
                  }
                }}
                menuPlacement="top" // Open the dropdown menu upward
                isSearchable={false} // Disable typing in the dropdown
                styles={{
                  option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.data.color,
                    color: "black",
                    whiteSpace: "nowrap", // Prevent text wrapping
                    overflow: "hidden", // Hide overflowing content
                    textOverflow: "ellipsis", // Add ellipsis for overflowing text
                  }),
                  singleValue: (provided, state) => ({
                    ...provided,
                    height: "22px", /* Set the height */
                    backgroundColor: state.data.color,
                    color: state.data.color,
                  }),
                  control: (provided) => ({
                    ...provided,
                    height: "40px", /* Set the height */
                    width: "100%", // Set the width of the dropdown
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }),
                  menu: (provided) => ({
                    ...provided,
                    zIndex: 9999, // Ensure the dropdown menu is on top
                    width: "100%", // Ensure the dropdown menu matches the control width
                  }),
                }}
              />
            ) : (
              // Render buttons for larger screens
              <div className={styles.color_selection}>
                {colors.map((color, index) => (
                  <button
                    key={index}
                    type="button"
                    className={styles.color_button}
                    style={{
                      backgroundColor: color.value,
                      border: baseColor === index ? "2px solid white" : "none",
                    }}
                    onClick={() => {
                      setBaseColor(index);
                    }} // Update base_polygon color
                    title={color.name} // Tooltip with the color name
                  ></button>
                ))}
              </div>
            )}
          </fieldset>

          <fieldset className={`${styles.fieldset} ${styles.fieldset_sideC}`}>
            <legend className={styles.fieldset_legend}>Base side color:</legend>
            <p className={styles.fieldset_display}>{colors[sideColor].name}</p>

            {isSmallScreen ? (
              // Render a dropdown selector for small screens
              <Select
                options={colorOptions}
                value={colorOptions[sideColor]}
                onChange={(selectedOption) => {
                  if (selectedOption) {
                    setSideColor(selectedOption.value);
                  }
                }}
                menuPlacement="top" // Open the dropdown menu upward
                isSearchable={false} // Disable typing in the dropdown
                styles={{
                  option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.data.color,
                    color: "black",
                    whiteSpace: "nowrap", // Prevent text wrapping
                    overflow: "hidden", // Hide overflowing content
                    textOverflow: "ellipsis", // Add ellipsis for overflowing text
                  }),
                  singleValue: (provided, state) => ({
                    ...provided,
                    height: "22px", /* Set the height */
                    backgroundColor: state.data.color,
                    color: state.data.color,
                  }),
                  control: (provided) => ({
                    ...provided,
                    height: "40px", /* Set the height */
                    width: "100%", // Set the width of the dropdown
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }),
                  menu: (provided) => ({
                    ...provided,
                    zIndex: 9999, // Ensure the dropdown menu is on top
                    width: "100%", // Ensure the dropdown menu matches the control width
                  }),
                }}
              />
            ) : (
              <div className={styles.color_selection}>
                {colors.map((color, index) => (
                  <button
                    key={index}
                    type="button"
                    className={styles.color_button}
                    style={{
                      backgroundColor: color.value,
                      border: sideColor === index ? "2px solid white" : "none",
                    }}
                    onClick={() => {
                      setSideColor(index);
                    }} // Update base_polygon color
                    title={color.name} // Tooltip with the color name
                  ></button>
                ))}
              </div>
            )}
          </fieldset>

          {isExSmallScreen && renderViewFieldset()}
        </div>

        {/**************************  Right Card ******************************/}
        <div className={styles.right_container}>
          <div
            className={styles.card_image_wrapper}
            style={{
              height: !isExSmallScreen
                ? selectedFigureImage === 0
                  ? "817px"
                  : "500px"
                : "auto", // Default height for extra small screens
            }}
          >
            <Image
              src={front ? figureImages[selectedFigureImage].front : figureImages[selectedFigureImage].back}
              // src="/baby3.png"
              alt="baby"
              className={styles.card_image_figure}
              width={500}
              height={500}
            />
            {/* <Image
              src={selectedBaseImage}
              // src="/baby3.png"
              alt="baby"
              className={styles.card_image_base}
              width={500}
              height={500} /> */}

            {/** Base 1 Round **/}
            {selectedBaseImage == 1 && (
              front ? (
                <svg
                  className={styles.base_part}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 817"
                  style={{
                    filter: "brightness(80%)",
                    zIndex: 2, // Set z-index to 2
                    // border: "1px solid black",
                  }}
                >
                  <defs>
                    <path id="namePath" d="M 48 654 q 98 90 293 50" />
                    <path id="dobPath" d="M 390 674 q 23 -41 -60 -80" />
                    <path id="weekPath" d="M 150 605 q -63 -7 -80 47" />
                    <filter
                      id="shadow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feDropShadow
                        dx="1"
                        dy="-1"
                        stdDeviation="0"
                        floodColor="rgb(222,222,222)"
                      />
                      <feDropShadow
                        dx="-1"
                        dy="1"
                        stdDeviation="0"
                        floodColor="rgb(151,151,151)"
                      />
                      <feDropShadow
                        dx="-2"
                        dy="2"
                        stdDeviation="0"
                        floodColor="rgb(0,0,0)"
                      />
                    </filter>
                  </defs>

                  <text
                    fill={colors[fontColor].value}
                    fontSize="15"
                    fontFamily={fontFamily[font]?.name || "Arial"} // Dynamically set the font
                    textAnchor="middle"
                    // transform="scale(1, 0.7)"
                    filter="url(#shadow)"
                    style={{
                      transformOrigin: "50% 50%" /* Adjust the scaling origin */,
                    }}
                  >
                    <textPath href="#namePath" startOffset="50%">
                      {name}
                    </textPath>
                  </text>

                  <text
                    fill={colors[fontColor].value}
                    fontSize="15"
                    fontFamily={fontFamily[font]?.name || "Arial"} // Dynamically set the font
                    textAnchor="middle"
                    filter="url(#shadow)"
                    style={{
                      transformOrigin: "50% 50%" /* Adjust the scaling origin */,
                      zIndex: 1, // Set z-index to 2
                    }}
                  >
                    <textPath href="#dobPath" startOffset="50%">
                      {dob}
                    </textPath>
                  </text>

                  <text
                    fill={colors[fontColor].value}
                    fontSize="15"
                    fontFamily={fontFamily[font]?.name || "Arial"} // Dynamically set the font
                    textAnchor="middle"
                    filter="url(#shadow)"
                    style={{
                      transformOrigin: "50% 50%" /* Adjust the scaling origin */,
                      zIndex: 1, // Set z-index to 2
                    }}
                  >
                    <textPath href="#weekPath" startOffset="50%">
                      {week}
                    </textPath>
                  </text>
                </svg>)
                // Back view
                : (
                  <svg
                    className={styles.base_part}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 480 817"
                    style={{
                      filter: "brightness(80%)",
                      zIndex: 2, // Set z-index to 2
                      // border: "1px solid black",
                    }}
                  >
                    <defs>
                      <path id="namePath" d="M 450 693 q -97 -130 -273 -111" />
                      <path id="dobPath" d="M 110 571 q -90 117 48 136" />
                      <path id="weekPath" d="M 200 690 q 182 57 249 -99" />
                      <filter
                        id="shadow"
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                      >
                        <feDropShadow
                          dx="1"
                          dy="-1"
                          stdDeviation="0"
                          floodColor="rgb(222,222,222)"
                        />
                        <feDropShadow
                          dx="-1"
                          dy="1"
                          stdDeviation="0"
                          floodColor="rgb(151,151,151)"
                        />
                        <feDropShadow
                          dx="-2"
                          dy="2"
                          stdDeviation="0"
                          floodColor="rgb(0,0,0)"
                        />
                      </filter>
                    </defs>

                    <text
                      fill={colors[fontColor].value}
                      fontSize="15"
                      fontFamily={fontFamily[font]?.name || "Arial"} // Dynamically set the font
                      textAnchor="middle"
                      // transform="scale(1, 0.7)"
                      filter="url(#shadow)"
                      style={{
                        transformOrigin: "50% 50%" /* Adjust the scaling origin */,
                      }}
                    >
                      <textPath href="#namePath" startOffset="50%">
                        {name}
                      </textPath>
                    </text>

                    <text
                      fill={colors[fontColor].value}
                      fontSize="15"
                      fontFamily={fontFamily[font]?.name || "Arial"} // Dynamically set the font
                      textAnchor="middle"
                      filter="url(#shadow)"
                      style={{
                        transformOrigin: "50% 50%" /* Adjust the scaling origin */,
                        zIndex: 1, // Set z-index to 2
                      }}
                    >
                      <textPath href="#dobPath" startOffset="50%">
                        {dob}
                      </textPath>
                    </text>

                    <text
                      fill={colors[fontColor].value}
                      fontSize="15"
                      fontFamily={fontFamily[font]?.name || "Arial"} // Dynamically set the font
                      textAnchor="middle"
                      filter="url(#shadow)"
                      style={{
                        transformOrigin: "50% 50%" /* Adjust the scaling origin */,
                        zIndex: 1, // Set z-index to 2
                      }}
                    >
                      <textPath href="#weekPath" startOffset="50%">
                        {week}
                      </textPath>
                    </text>
                  </svg>)
            )}
            {/** Base 2 Trapezoid **/}
            {selectedBaseImage === 2 && (
              <div className="base_wrapper">
                {/* text */}
                {front ?
                  (<svg
                    className={styles.base_part}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 480 817"
                    style={{
                      filter: "brightness(80%)",
                      zIndex: 5,
                    }}
                  >
                    <defs>
                      <path id="namePath" d="M 107 764 L 463 695" />
                      <path id="dobPath" d="M 120 801 L 476 730" />
                      <filter
                        id="svgTextShadow"
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                      >
                        <feDropShadow
                          dx="1"
                          dy="-1"
                          stdDeviation="0"
                          floodColor="rgba(222, 222, 222, 0.8)"
                        />
                        <feDropShadow
                          dx="-1"
                          dy="1"
                          stdDeviation="0"
                          floodColor="rgba(151, 151, 151, 0.65)"
                        />
                        <feDropShadow
                          dx="-2"
                          dy="2"
                          stdDeviation="0"
                          floodColor="rgba(0, 0, 0, 0.59)"
                        />
                      </filter>
                    </defs>
                    <text
                      fill={colors[fontColor].value}
                      fontSize="50"
                      fontFamily={fontFamily[font]?.name || "Arial"} // Dynamically set the font
                      textAnchor="middle"
                      filter="url(#svgTextShadow)"
                      style={{
                        transformOrigin:
                          "50% 50%" /* Adjust the scaling origin */,
                      }}
                    >
                      <textPath href="#namePath" startOffset="50%">
                        {week}
                      </textPath>
                    </text>

                    <text
                      fill={colors[fontColor].value}
                      fontSize="25"
                      fontFamily={fontFamily[font]?.name || "Arial"} // Dynamically set the font
                      textAnchor="middle"
                      filter="url(#svgTextShadow)"
                      style={{
                        transformOrigin:
                          "50% 50%" /* Adjust the scaling origin */,
                      }}
                    >
                      <textPath href="#dobPath" startOffset="50%">
                        {dob}
                      </textPath>
                    </text>

                    {/* bar */}
                    <line
                      x1="222"
                      y1="753"
                      x2="366"
                      y2="725"
                      stroke={colors[fontColor].value}
                      strokeWidth="3"
                      filter="url(#svgTextShadow)"
                    />
                  </svg>) :
                  (
                    <svg
                      className={styles.base_part}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 480 817"
                      style={{
                        filter: "brightness(80%)",
                        zIndex: 5,
                      }}>
                      <defs>
                        <path id="msgPath" d="M 107 764 L 463 699" />
                        <filter
                          id="svgTextShadow"
                          x="-50%"
                          y="-50%"
                          width="200%"
                          height="200%"
                        >
                          <feDropShadow
                            dx="1"
                            dy="-1"
                            stdDeviation="0"
                            floodColor="rgba(222, 222, 222, 0.8)"
                          />
                          <feDropShadow
                            dx="-1"
                            dy="1"
                            stdDeviation="0"
                            floodColor="rgba(151, 151, 151, 0.65)"
                          />
                          <feDropShadow
                            dx="-2"
                            dy="2"
                            stdDeviation="0"
                            floodColor="rgba(0, 0, 0, 0.59)"
                          />
                        </filter>
                      </defs>
                      <text
                        fill={colors[fontColor].value}
                        fontSize="20"
                        fontFamily={fontFamily[font]?.name || "Arial"} // Dynamically set the font
                        textAnchor="middle"
                        filter="url(#svgTextShadow)"
                        style={{
                          transformOrigin:
                            "50% 50%" /* Adjust the scaling origin */,
                        }}
                      >
                        <textPath href="#msgPath" startOffset="50%">
                          {msg}
                        </textPath>
                      </text>
                    </svg>
                  )
                }

                {/* base_polygon_front */}
                <svg
                  className={styles.base_part}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 817"
                  style={{
                    filter: "brightness(80%)",
                  }}
                >
                  {front ? (
                    <polygon
                      points="93,703 295,670 286,637 443,610 480,746 118,816"
                      fill={colors[sideColor].value}
                    />) : (

                    <polygon
                      points="93,703 295,670 450,645 480,746 118,816"
                      fill={colors[sideColor].value}
                    />)}

                </svg>
                {/* base_polygon_side */}
                <svg
                  className={styles.base_part}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 817"
                  style={{
                    filter: "brightness(60%)",
                  }}
                >
                  <polygon
                    points="93,703 118,816 106,803 83,693"
                    fill={colors[sideColor].value}
                  />

                  {front ? (
                    <polygon
                      points="24,630 8,688 0,680 16,622"
                      fill={colors[sideColor].value}
                    />
                  ) : (
                    <polygon
                      points="24,630 8,688 0,680 21,602"
                      fill={colors[sideColor].value}
                    />)}
                </svg>

                {!front && (<svg
                  className={styles.base_part}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 817"
                  style={{
                    zIndex: 3, // Set z-index to 2
                    filter: "brightness(70%)",
                  }}>
                  <polygon
                    points="24,630 182,606 182,579 21,602"
                    fill={colors[sideColor].value}
                  />
                </svg>)
                }
                {/* base_polygon_top */}
                <svg
                  className={styles.base_part}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 817"
                  style={{
                    filter: "brightness(90%)",
                    zIndex: 2, // Set z-index to 2
                  }}
                >
                  {front ? (
                    <polygon
                      points="93,703 83,693 259,666 295,670"
                      fill={colors[sideColor].value}
                    />) : (
                    <polygon
                      points="93,703 83,693 443,636 450,645"
                      fill={colors[sideColor].value}
                    />)}

                  {/* base_polygon_topL */}

                  <polygon
                    points="24,631 16,622 347,571 357,579"
                    fill={colors[sideColor].value}
                  />

                  {/* base_polygon_topT */}
                  <polygon
                    points="24,630 84,694 443,636 358,579"
                    fill={colors[baseColor].value}
                  />
                </svg>
                {/* base_polygon_topS */}
                <svg
                  className={styles.base_part}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 817"
                  style={{
                    filter: "brightness(50%)",
                  }}
                >

                  {/* base_polygon_topL */}
                  {front && (
                    <>
                      <polygon
                        points="259,666 295,670 283,661"
                        fill={colors[sideColor].value}
                      />
                      <polygon
                        points="295,670 283,661 281,635 286,637"
                        fill={colors[sideColor].value}
                      />
                    </>
                  )}
                </svg>
                {/* base_polygon_topT */}
                {front && (
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
                      fill={colors[sideColor].value}
                    />
                  </svg>
                )}

                {/* base_polygon_topT */}
                <svg
                  className={styles.base_part}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 817"
                  style={{
                    filter: "brightness(40%)",
                  }}
                >
                  <polygon
                    points="8,689 24,630 84,694 107,804"
                    fill={colors[baseColor].value}
                  />
                </svg>
              </div>
            )}

            {/** Base 1 Round Base **/}
            {selectedBaseImage === 1 && (
              <div className="base_wrapper">
                <svg
                  className={styles.base_part}
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 817"
                  style={{
                    filter: "brightness(80%)",
                    zIndex: 1, // Set z-index to 2
                  }}
                >
                  <defs>
                    {/* Define the linear gradient */}
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        stopColor={colors[baseColor].value}
                        stopOpacity="0.7"
                      />
                      <stop
                        offset="100%"
                        stopColor={colors[baseColor].value}
                        stopOpacity="1"
                      />
                    </linearGradient>

                    <linearGradient
                      id="gradient2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        stopColor={colors[sideColor].value}
                        stopOpacity="0.7"
                      />
                      <stop
                        offset="100%"
                        stopColor={colors[sideColor].value}
                        stopOpacity="1"
                      />
                    </linearGradient>
                  </defs>

                  <ellipse rx="185" ry="73" cx="232" cy="720" fill="black" />

                  <ellipse
                    rx="185"
                    ry="73"
                    cx="232"
                    cy="720"
                    fill="url(#gradient2)"
                  />

                  <rect
                    width="371"
                    height="71"
                    x="46"
                    y="651"
                    fill="black"
                    stroke="none"
                  />
                  <rect
                    width="371"
                    height="71"
                    x="46"
                    y="651"
                    fill="url(#gradient2)"
                    stroke="none"
                  />

                  <ellipse
                    rx="185"
                    ry="70"
                    cx="232"
                    cy="654"
                    fill={colors[sideColor].value}
                  />

                  <ellipse rx="143" ry="52" cx="232" cy="648" fill="black" />

                  <ellipse
                    rx="143"
                    ry="52"
                    cx="232"
                    cy="648"
                    fill="url(#gradient1)"
                    style={{
                      filter: `brightness(70%) drop-shadow(-5px 3px rgba(0, 0, 0, 0.38))`,
                    }}
                  />
                </svg>

                <svg
                  className={styles.base_part}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 817"
                  style={{
                    filter: "brightness(80%)",
                    zIndex: 2,
                  }}
                >
                  <ellipse
                    rx="143"
                    ry="52"
                    cx="232"
                    cy="638"
                    fill={colors[baseColor].value}
                    style={{ filter: "brightness(90%)" }}
                  />
                </svg>
              </div>
            )}

            {/** Base 0 Two Level **/}
            {selectedBaseImage === 0 && (
              <>
                {/* base_polygon_front */}
                <svg
                  className={styles.base_part}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 817"
                  style={{
                    filter: "brightness(70%)",
                    zIndex: 5,
                  }}
                >
                  <defs>
                    <path id="weekPath" d="M 107 764 L 463 695" />
                    <path id="namePath" d="M 142 798 L 453 739" />
                    <filter
                      id="svgTextShadow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feDropShadow
                        dx="1"
                        dy="-1"
                        stdDeviation="0"
                        floodColor="rgba(222, 222, 222, 0.8)"
                      />
                      <feDropShadow
                        dx="-1"
                        dy="1"
                        stdDeviation="0"
                        floodColor="rgba(151, 151, 151, 0.65)"
                      />
                      <feDropShadow
                        dx="-2"
                        dy="2"
                        stdDeviation="0"
                        floodColor="rgba(0, 0, 0, 0.59)"
                      />
                    </filter>
                  </defs>
                  <text
                    fill={colors[fontColor].value}
                    fontStyle="italic"
                    fontSize={front ? "30" : "20"}
                    fontFamily={fontFamily[font]?.name || "Arial"} // Dynamically set the font
                    textAnchor="middle"
                    filter="url(#svgTextShadow)"
                    style={{
                      transformOrigin:
                        "50% 50%" /* Adjust the scaling origin */,
                    }}
                  >
                    <textPath href="#weekPath" startOffset="50%">
                      {front ? week : msg}
                    </textPath>
                  </text>

                  <text
                    fill={colors[fontColor].value}
                    fontStyle="italic"
                    fontSize="20"
                    fontFamily={fontFamily[font]?.name || "Arial"} // Dynamically set the font
                    textAnchor="middle"
                    filter="url(#svgTextShadow)"
                    style={{
                      transformOrigin:
                        "50% 50%" /* Adjust the scaling origin */,
                    }}
                  >
                    <textPath href="#namePath" startOffset="50%">
                      {front ? name : dob}
                    </textPath>
                  </text>
                </svg>

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
                    fill={colors[sideColor].value}
                  />

                  <polygon
                    points="144,771.5 451,717 451,753 144,811.5"
                    fill={colors[sideColor].value}
                  />
                </svg>

                {/* base_polygon_side */}
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
                    fill={colors[sideColor].value}
                  />

                  <polygon
                    points="19,654 126,771 126,807 19,686"
                    fill={colors[sideColor].value}
                  />
                </svg>

                {/* base_polygon_shadow1 */}
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
                    fill={colors[sideColor].value}
                  />

                  <polygon
                    points="126,771 126,807 130,810 130,773"
                    fill={colors[sideColor].value}
                  />
                </svg>

                {/* base_polygon_shadow2 */}
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
                    fill={colors[sideColor].value}
                  />

                  <polygon
                    points="130,810 130,773 133,774 133,811 "
                    fill={colors[sideColor].value}
                  />
                </svg>

                {/* base_polygon_shadow3 */}
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
                    fill={colors[sideColor].value}
                  />

                  <polygon
                    points="136,812 136,774 133,774 133,811 "
                    fill={colors[sideColor].value}
                  />
                </svg>
                {/* base_polygon_shadow4 */}
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
                    fill={colors[sideColor].value}
                  />

                  <polygon
                    points="136,812 136,774 139,773.5 139,812 "
                    fill={colors[sideColor].value}
                  />
                </svg>

                {/* base_polygon_shadow5 */}
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
                    fill={colors[sideColor].value}
                  />

                  <polygon
                    points=" 139,773.5 139,812 140,812 140,773 "
                    fill={colors[sideColor].value}
                  />
                </svg>

                {/* base_polygon_shadow6 */}
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
                    fill={colors[sideColor].value}
                  />
                  <polygon
                    points="140,773 140,812 144,812 144,772"
                    fill={colors[sideColor].value}
                  />
                </svg>

                {/* base_polygon_shadowR1 */}
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
                    fill={colors[sideColor].value}
                  />
                  <polygon
                    points="451,717 451,753  452,752 454,716"
                    fill={colors[sideColor].value}
                  />
                </svg>
                {/* base_polygon_shadowR2 */}
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
                    fill={colors[sideColor].value}
                  />
                  <polygon
                    points="452,717 451,753  454,752 454,716"
                    fill={colors[sideColor].value}
                  />
                </svg>

                {/* base_polygon_shadowR3 */}
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
                    fill={colors[sideColor].value}
                  />
                  <polygon
                    points=" 454,752 454,716 456,715 456,750 "
                    fill={colors[sideColor].value}
                  />
                </svg>

                {/* base_polygon_shadowR4 */}
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
                    fill={colors[sideColor].value}
                  />
                  <polygon
                    points="456,715 456,750 458,745 458,712 "
                    fill={colors[sideColor].value}
                  />
                </svg>

                {/* base_polygon_top */}
                <svg
                  className={styles.base_part}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 817"
                  style={{
                    filter: "brightness(100%)",
                    zIndex: 2, // Set z-index to 2
                  }}
                >
                  <polygon
                    points="124,722 130,726 133,726 136,726 139,726.5 140,726.5 144,726
                  451,672 454,671.5 456,671 458,670 459,668 455,664"
                    fill={colors[sideColor].value}
                  />

                  <polygon
                    points="126,724 18,610 19,607 23,606 26,605 144,725"
                    fill={colors[sideColor].value}
                  />

                  <polygon
                    points="455,664 439,667 440,666 442,663 304,564 310,564 315,565"
                    fill={colors[sideColor].value}
                  />

                  <polygon
                    points="304,564 310,564 315,565 33,605 22,606 32,612 32,607 33,606"
                    fill={colors[sideColor].value}
                  />
                </svg>
                {/* base_polygon_shadow_side1 */}
                <svg
                  className={styles.base_part}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 817"
                  style={{
                    filter: "brightness(30%)",
                    zIndex: 1, // Set z-index to 2
                  }}
                >
                  <polygon
                    points="24,648 20,649 19,651 19,653 23,659 130,778 138,772 127,763"
                    fill={colors[sideColor].value}
                  />

                  <polygon
                    points="136,770 131,777  443,719 447,715 450,714 450,712 447,713"
                    fill={colors[sideColor].value}
                  />
                </svg>

                {/* base_polygon_shadow_side3 */}
                <svg
                  className={styles.base_part}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 817"
                  style={{
                    filter: "brightness(80%)",
                    zIndex: 2, // Set z-index to 2
                  }}
                >
                  <polygon
                    points="448,707 454,707 457,711 457,714 456,715 451,717 445,717 446,716 450,714 450,711"
                    fill={colors[sideColor].value}
                  />
                </svg>
                {/* base_polygon_shadow_side3 */}
                <svg
                  className={styles.base_part}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 817"
                  style={{
                    filter: "brightness(30%)",
                    zIndex: 3, // Set z-index to 2
                  }}
                >
                  <polygon
                    points="122,757 134,763 147,762 449,707 450,711 447,714 140,770 134,769 131,766"
                    fill={colors[baseColor].value}
                  />
                  <polygon
                    points="31,610 32,609 140,717 139,720"
                    fill={colors[baseColor].value}
                  />
                </svg>

                {/* base_polygon_shadow_side3 */}
                <svg
                  className={styles.base_part}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 817"
                  style={{
                    filter: "brightness(60%)",
                    zIndex: 3, // Set z-index to 2
                  }}
                >
                  <polygon
                    points="33,607 32,609 140,717 141,712"
                    fill={colors[baseColor].value}
                  />
                </svg>

                {/* base_polygon_shadow_side3 */}
                <svg
                  className={styles.base_part}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 817"
                  style={{
                    filter: "brightness(80%)",
                    zIndex: 3, // Set z-index to 2
                  }}
                >
                  <polygon
                    points="33,607 35,606 142,712 141,712"
                    fill={colors[baseColor].value}
                  />

                  <polygon
                    points="139,720 140,716 440,662.5 443,666"
                    fill={colors[baseColor].value}
                  />

                  <polygon
                    points="141,717 444,664 305,565 34,606"
                    fill={colors[baseColor].value}
                  />
                </svg>
              </>
            )}
          </div>
          {!isExSmallScreen && renderViewFieldset()}
        </div>
      </div>
    </div>
  );
}
