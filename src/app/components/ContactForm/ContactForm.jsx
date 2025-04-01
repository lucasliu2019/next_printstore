"use client"

import React from "react";
import styles from './ContactForm.module.css';
import { useState } from "react";
// import 'font-awesome/css/font-awesome.min.css'


const initValue = { name: "", email: "", message: "" };
const initError = { name: "", email: "", message: "" };
const initClassName = { name: "", email: "", message: "" };

const Contact = () => {
    const [formValue, setFormValue] = useState(initValue);
    const [formError, setFormError] = useState(initError);
    const [formClassName, setFormClassName] = useState(initClassName);
    const [messageSend, setMessageSend] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Add loading state

    // Test 
    // const [messageSend, setMessageSend] = useState(true);
    // const [successMessage, setSuccessMessage] = useState("Thanks for your message, we will get back to you soon.");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });

        let error = "";
        let className = "";
        if (name === "name") {
            error = validationName(name, value);
        } else if (name === "email") {
            error = validateEmail(name, value);
        } else if (name === "message") {
            error = validationMessage(name, value);
        }

        if (error) {
            className = `${styles.error}`;
        } else {
            className = `${styles.success}`;
        }

        setFormError({ ...formError, [name]: error });
        setFormClassName({ ...formClassName, [name]: className });
    }

    const validationName = (name, value) => {
        if (value === "") {
            return `* ${name} is required.`;
        }
        // else if (!/^[A-Za-z]+$/.test(value)) {
        //     return "Only alphabets are allowed";
        // }
        return "";
    }

    const validateEmail = (email, value) => {
        if (value === "") {
            return `* ${email} is required.`;
        } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)) {
            return "* Invalid email format.";
        }
        return "";
    }

    const validationMessage = (message, value) => {
        if (value === "") {
            return `* ${message} is required.`;
        }
        return "";
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Set loading state to true
        const errors = {
            name: validationName("name", formValue.name),
            email: validateEmail("email", formValue.email),
            message: validationMessage("message", formValue.message),
        };
        setFormError(errors);

        const isValid = !errors.name && !errors.email && !errors.message;
        if (isValid) {
            // console.log("Form Submitted", formValue);
            try {
                const response = await fetch('https://api.wantedbot.com/mail', {
                // const response = await fetch('http://localhost:8000/mail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formValue),
                });
                if (response.ok) {
                    console.log("Message sent successfully.");
                    setSuccessMessage("Thanks for your message, we will get back to you soon.");
                    setMessageSend(true);
                    // Optionally, reset the form or show a success message
                    setFormValue(initValue);
                } else {
                    console.error("Failed to send message.");
                    setSuccessMessage("Failed to send message.");
                }
            } catch (error) {
                console.error("Error:", error);
                setSuccessMessage("Error occurred while sending message.");
            }
        }
        setIsLoading(false); // Set loading state to false
    }

    return (
        <>
            <div className={styles.contact} >
                {messageSend ? (
                    <p className={styles.sendMessage}>{successMessage}</p>
                ) : (
                    <form name="contact" method="post" onSubmit={handleSubmit}>
                        <div className={styles.form_group}>
                            <div className={styles.form_top_group}>
                                <label htmlFor="name">Name:</label>
                                <span className={styles.error_message} display="inline"> {formError.name} </span>
                            </div>
                            <div className={styles.form_bottom_group}>
                                <input type="text" id="name" className={formClassName.name} name="name"
                                    value={formValue.name}
                                    required={true}
                                    onChange={handleChange}
                                    placeholder="Your name." />
                                {formClassName.name === `${styles.success}` && <i className={`fa-solid fa-check ${styles.check_icon}`}></i>}
                                {formClassName.name === `${styles.error}` && <i className={`fa-solid fa-times ${styles.cross_icon}`}></i>}
                            </div>
                        </div>
                        <div className={styles.form_group}>
                            <div className={styles.form_top_group}>
                                <label htmlFor="email" >Email:</label>
                                <span className={styles.error_message}> {formError.email} </span>
                            </div>
                            <div className={styles.form_bottom_group}>
                                <input type="email" id="email" className={formClassName.email} name="email"
                                    value={formValue.email} required={true}
                                    onChange={handleChange}
                                    placeholder="Your email." />
                                {formClassName.email=== `${styles.success}` && <i className={`fa-solid fa-check ${styles.check_icon}`}></i>}
                                {formClassName.email===`${styles.error}` && <i className={`fa-solid fa-times ${styles.cross_icon}`}></i>}
                            </div>
                        </div>
                        <div className={styles.form_top_group}>
                            <label htmlFor="message" >Message:</label>
                            <span className={styles.error_message}> {formError.message} </span>
                        </div>
                        <div className={styles.form_bottom_group}>
                            <textarea id="message" className={formClassName.message} name="message" rows="10" cols="50" max-width="100%"
                                value={formValue.message} required={true}
                                onChange={handleChange}
                                placeholder="Your message."></textarea>
                            {formClassName.message===`${styles.success}` && <i className={`fa-solid fa-check ${styles.check_icon}`}></i>}
                            {formClassName.message===`${styles.error}` && <i className={`fa-solid fa-times ${styles.cross_icon}`}></i>}
                        </div>
                        <button className={`${styles.btn} ${isLoading ? `${styles.loading}` : ''}`} type="submit" disabled={isLoading}>
                            {isLoading ? 'Sending...' : <>Send &nbsp; <i className="fa-solid fa-paper-plane"></i></>}
                        </button>
                    </form>
                )}
            </div>
        </>
    );
};
export default Contact;