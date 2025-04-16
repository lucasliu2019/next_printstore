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
    path: "/figure_hand.png",
  },
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
    name: "Lotus",
    path: "/figure_lotus.png",
  },
  {
    name: "Moon",
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
  const [baseColor, setBaseColor] = useState(4); // Default color for base_polygon
  const [baseColor1, setBaseColor1] = useState(0); // Default color for base_polygon
  const [colorName, setColorName] = useState(colors[baseColor].name); // Default color for base_polygon
  const [colorName1, setColorName1] = useState(colors[baseColor1].name);
  const [selectedBaseImage, setSelectedBaseImage] = useState(0); // Default image
  const [selectedFigureImage, setSelectedFigureImage] = useState(0); // Default image

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Check if the screen width is <= 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const [scale, setScale] = useState(1);

  useEffect(() => {
    // Add a specific class to the body
    document.body.classList.add(styles.baby3dBody);

    // Cleanup: Remove the class when the component unmounts
    return () => {
      document.body.classList.remove(styles.baby3dBody);
    };
  }, []);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const container = document.querySelector(`.${styles.card_image_wrapper}`);
  //     if (container instanceof HTMLElement) {
  //       const containerWidth = container.offsetWidth;
  //       // Base width is 480px
  //       const scaleFactor = containerWidth / 480;
  //       setScale(scaleFactor);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);
  //   // Initial call
  //   handleResize();

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

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
        <div className={styles.choice}>
          <div className={styles.selector_container}>
            <label>Choose your base:</label>
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
              <div className={styles.image_selector}>
                {baseImages.map((image, index) => (
                  <button
                    key={index}
                    className={styles.image_selector_btn}
                    onClick={() => setSelectedBaseImage(index)}
                  >
                    {image.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className={styles.selector_container}>
            <label>Choose your figure:</label>
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
              <div className={styles.image_selector}>
                {figureImages.map((image, index) => (
                  <button
                    key={index}
                    className={styles.image_selector_btn}
                    onClick={() => setSelectedFigureImage(index)} // Update selected image
                  >
                    {image.name}
                  </button>
                ))}
              </div>
            )}
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

            <label>Base Side Color:</label>
            <p>{colorName}</p>

            {isSmallScreen ? (
              // Render a dropdown selector for small screens
              <Select
                options={colorOptions}
                value={colorOptions[baseColor]}
                onChange={(selectedOption) => {
                  if (selectedOption) {
                    setBaseColor(selectedOption.value);
                  }
                  if (selectedOption) {
                    setColorName(selectedOption.label);
                  }
                }}
                styles={{
                  option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.data.color,
                    color: "black",
                  }),
                  singleValue: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.data.color,
                    color: state.data.color,
                  }),
                  control: (provided) => ({
                    ...provided,
                    width: "200px", // Set the width of the dropdown
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }),
                  menu: (provided) => ({
                    ...provided,
                    width: "200px", // Ensure the dropdown menu matches the control width
                  }),
                }}
              />):(
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
                    setColorName(colors[index].name);
                  }} // Update base_polygon color
                  title={color.name} // Tooltip with the color name
                >
                  {/* {color.name} */}
                </button>
              ))}
            </div>)}

            <label>Base Color:</label>
            <p>{colorName1}</p>

            {isSmallScreen ? (
              // Render a dropdown selector for small screens
              <Select
                options={colorOptions}
                value={colorOptions[baseColor1]}
                onChange={(selectedOption) => {
                  if (selectedOption) {
                    setBaseColor1(selectedOption.value);
                  }
                  if (selectedOption) {
                    setColorName1(selectedOption.label);
                  }
                }}
                styles={{
                  option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.data.color,
                    color: "black",
                  }),
                  singleValue: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.data.color,
                    color: state.data.color,
                  }),
                  control: (provided) => ({
                    ...provided,
                    width: "200px", // Set the width of the dropdown
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }),
                  menu: (provided) => ({
                    ...provided,
                    width: "200px", // Ensure the dropdown menu matches the control width
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
                      border: baseColor1 === index ? "2px solid white" : "none",
                    }}
                    onClick={() => {
                      setBaseColor1(index);
                      setColorName1(colors[index].name);
                    }} // Update base_polygon color
                    title={color.name} // Tooltip with the color name
                  >
                    {/* {color.name} */}
                  </button>
                ))}
              </div>
            )}
          </form>
        </div>

        <div
          className={styles.card_image_wrapper}
          // style={{ transform: `scale(${scale})` }}
        >
          <Image
            src={figureImages[selectedFigureImage].path}
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

          {selectedBaseImage == 1 && (
            <svg
              className={styles.base_part}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 817"
              style={{
                filter: "brightness(80%)",
                zIndex: 2, // Set z-index to 2
              }}
            >
              <defs>
                <path id="circlePath" d="M 48 778 q 110 100 293 50" />
              </defs>

              <text
                fill="rgb(209, 209, 209)"
                fontSize="15"
                fontFamily="Arial"
                textAnchor="middle"
                transform="scale(1, 0.7)" /* Scale text vertically */
                style={{
                  transformOrigin: "50% 50%" /* Adjust the scaling origin */,
                  textShadow:
                    "1px -1px 0px rgb(222, 222, 222), -1px 1px 0px rgb(151, 151, 151), -2px 2px 0px rgb(0, 0, 0)",
                }}
              >
                <textPath href="#circlePath" startOffset="50%">
                  {name}
                </textPath>
              </text>

              <defs>
                <path id="circlePath1" d="M 390 758 q 23 -41 -60 -80" />
              </defs>
              <text
                fill="rgb(209, 209, 209)"
                fontSize="15"
                fontFamily="Arial"
                textAnchor="middle"
                transform="scale(1, 0.7)" /* Scale text vertically */
                style={{
                  transformOrigin: "50% 50%" /* Adjust the scaling origin */,
                  textShadow:
                    "1px -1px 0px rgb(222, 222, 222), -1px 1px 0px rgb(151, 151, 151), -2px 2px 0px rgb(0, 0, 0)",
                  zIndex: 1, // Set z-index to 2
                }}
              >
                <textPath href="#circlePath1" startOffset="50%">
                  {dob}
                </textPath>
              </text>

              <defs>
                <path id="circlePath2" d="M 150 690 q -63 -7 -80 47" />
              </defs>
              <text
                fill="rgb(209, 209, 209)"
                fontSize="15"
                fontFamily="Arial"
                textAnchor="middle"
                transform="scale(1, 0.7)" /* Scale text vertically */
                style={{
                  transformOrigin: "50% 50%" /* Adjust the scaling origin */,
                  textShadow:
                    "1px -1px 0px rgb(222, 222, 222), -1px 1px 0px rgb(151, 151, 151), -2px 2px 0px rgb(0, 0, 0)",
                  zIndex: 1, // Set z-index to 2
                }}
              >
                <textPath href="#circlePath2" startOffset="50%">
                  {week}
                </textPath>
              </text>
            </svg>
          )}

          <div
            className={`${styles.name_wrapper} ${
              selectedBaseImage === 0
                ? styles.name_wrapper_b1
                : selectedBaseImage === 1
                ? styles.name_wrapper_b2
                : selectedBaseImage === 2
                ? styles.name_wrapper_b3
                : ""
            } `}
          >
            {selectedBaseImage != 1 && (
              <span className={styles.name}>{name}</span>
            )}
          </div>

          <div
            className={`${styles.week_wrapper}
          ${
            selectedBaseImage === 0
              ? styles.week_wrapper_b1
              : selectedBaseImage === 1
              ? styles.week_wrapper_b2
              : selectedBaseImage === 2
              ? styles.week_wrapper_b3
              : ""
          }`}
          >
            {selectedBaseImage != 1 && (
              <span className={styles.week}>{week}</span>
            )}
          </div>

          <div
            className={`${styles.dob_wrapper}
                ${
                  selectedBaseImage === 0
                    ? styles.dob_wrapper_b1
                    : selectedBaseImage === 1
                    ? styles.dob_wrapper_b2
                    : selectedBaseImage === 2
                    ? styles.dob_wrapper_b3
                    : ""
                }`}
          >
            {selectedBaseImage !== 0 && (
              <span className={styles.dob}>{dob}</span>
            )}
          </div>

          {selectedBaseImage === 2 && <div className={styles.bar}></div>}

          {selectedBaseImage === 2 && (
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
                    fill={colors[baseColor].value}
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
                    fill={colors[baseColor].value}
                  />

                  <polygon
                    points="24,631 8,688 0,680 16,622"
                    fill={colors[baseColor].value}
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
                    zIndex: 2, // Set z-index to 2
                  }}
                >
                  <polygon
                    points="93,703 83,693 259,666 295,670"
                    fill={colors[baseColor].value}
                  />

                  <polygon
                    points="24,631 16,622 347,571 357,579"
                    fill={colors[baseColor].value}
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
                  <polygon
                    points="259,666 295,670 283,661"
                    fill={colors[baseColor].value}
                  />
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
                    fill={colors[baseColor].value}
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
                    fill={colors[baseColor].value}
                  />
                </svg>
              </div>

              <div className="base_polygon_topT">
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
                    fill={colors[baseColor1].value}
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
                    zIndex: 2, // Set z-index to 2
                  }}
                >
                  <polygon
                    points="24,630 84,694 443,636 358,579"
                    fill={colors[baseColor1].value}
                  />
                </svg>
              </div>
            </>
          )}

          {selectedBaseImage === 1 && (
            <div className="base_1">
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
                      stopColor={colors[baseColor1].value}
                      stopOpacity="0.7"
                    />
                    <stop
                      offset="100%"
                      stopColor={colors[baseColor1].value}
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
                      stopColor={colors[baseColor].value}
                      stopOpacity="0.7"
                    />
                    <stop
                      offset="100%"
                      stopColor={colors[baseColor].value}
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
                  fill={colors[baseColor].value}
                />

                <ellipse rx="143" ry="52" cx="232" cy="648" fill="black" />

                <ellipse
                  rx="143"
                  ry="52"
                  cx="232"
                  cy="648"
                  fill="url(#gradient1)"
                  style={{
                    filter: `brightness(70%) drop-shadow(-5px 2px rgba(0, 0, 0, 0.38))`,
                  }}
                />
              </svg>

              <svg
                className={styles.base_part}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 817"
                style={{
                  filter: "brightness(80%)",
                  zIndex: 2, // Set z-index to 2
                }}
              >
                <ellipse
                  rx="143"
                  ry="52"
                  cx="232"
                  cy="638"
                  fill={colors[baseColor1].value}
                  style={{ filter: "brightness(90%)" }}
                />
              </svg>
            </div>
          )}

          {selectedBaseImage === 0 && (
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
                    fill={colors[baseColor].value}
                  />

                  <polygon
                    points="144,771.5 451,717 451,753 144,811.5"
                    fill={colors[baseColor].value}
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
                    fill={colors[baseColor].value}
                  />

                  <polygon
                    points="19,654 126,771 126,807 19,686"
                    fill={colors[baseColor].value}
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
                    fill={colors[baseColor].value}
                  />

                  <polygon
                    points="126,771 126,807 130,810 130,773"
                    fill={colors[baseColor].value}
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
                    fill={colors[baseColor].value}
                  />

                  <polygon
                    points="130,810 130,773 133,774 133,811 "
                    fill={colors[baseColor].value}
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
                    fill={colors[baseColor].value}
                  />

                  <polygon
                    points="136,812 136,774 133,774 133,811 "
                    fill={colors[baseColor].value}
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
                    fill={colors[baseColor].value}
                  />

                  <polygon
                    points="136,812 136,774 139,773.5 139,812 "
                    fill={colors[baseColor].value}
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
                    fill={colors[baseColor].value}
                  />

                  <polygon
                    points=" 139,773.5 139,812 140,812 140,773 "
                    fill={colors[baseColor].value}
                  />
                </svg>
              </div>

              <div className="base_polygon_shadow6">
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
                    fill={colors[baseColor].value}
                  />
                  <polygon
                    points="140,773 140,812 144,812 144,772"
                    fill={colors[baseColor].value}
                  />
                </svg>
              </div>

              <div className="base_polygon_shadowR1">
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
                    fill={colors[baseColor].value}
                  />
                  <polygon
                    points="451,717 451,753  452,752 454,716"
                    fill={colors[baseColor].value}
                  />
                </svg>
              </div>

              <div className="base_polygon_shadowR2">
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
                    fill={colors[baseColor].value}
                  />
                  <polygon
                    points="452,717 451,753  454,752 454,716"
                    fill={colors[baseColor].value}
                  />
                </svg>
              </div>

              <div className="base_polygon_shadowR3">
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
                    fill={colors[baseColor].value}
                  />
                  <polygon
                    points=" 454,752 454,716 456,715 456,750 "
                    fill={colors[baseColor].value}
                  />
                </svg>
              </div>

              <div className="base_polygon_shadowR4">
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
                    fill={colors[baseColor].value}
                  />
                  <polygon
                    points="456,715 456,750 458,745 458,712 "
                    fill={colors[baseColor].value}
                  />
                </svg>
              </div>
              <div className="base_polygon_top">
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
                    fill={colors[baseColor].value}
                  />

                  <polygon
                    points="126,724 18,610 19,607 23,606 26,605 144,725"
                    fill={colors[baseColor].value}
                  />

                  <polygon
                    points="455,664 439,667 440,666 442,663 304,564 310,564 315,565"
                    fill={colors[baseColor].value}
                  />

                  <polygon
                    points="304,564 310,564 315,565 33,605 22,606 32,612 32,607 33,606"
                    fill={colors[baseColor].value}
                  />
                </svg>
              </div>

              <div className="base_polygon_shadow_side1">
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
                    fill={colors[baseColor].value}
                  />
                </svg>
              </div>

              <div className="base_polygon_shadow_side2">
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
                    points="136,770 131,777  443,719 447,715 450,714 450,712 447,713"
                    fill={colors[baseColor].value}
                  />
                </svg>
              </div>

              <div className="base_polygon_shadow_side3">
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
                    fill={colors[baseColor].value}
                  />
                </svg>
              </div>

              <div className="base_polygon_shadow_side3">
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
                    fill={colors[baseColor1].value}
                  />
                </svg>
              </div>

              <div className="base_polygon_shadow_side3">
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
                    points="31,610 32,609 140,717 139,720"
                    fill={colors[baseColor1].value}
                  />
                </svg>
              </div>

              <div className="base_polygon_shadow_side3">
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
                    fill={colors[baseColor1].value}
                  />
                </svg>
              </div>

              <div className="base_polygon_shadow_side3">
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
                    fill={colors[baseColor1].value}
                  />
                </svg>
              </div>

              <div className="base_polygon_shadow_side3">
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
                    points="139,720 140,716 440,662.5 443,666"
                    fill={colors[baseColor1].value}
                  />
                </svg>
              </div>

              <div className="base_polygon_shadow_side3">
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
                    points="141,717 444,664 305,565 34,606"
                    fill={colors[baseColor1].value}
                  />
                </svg>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
