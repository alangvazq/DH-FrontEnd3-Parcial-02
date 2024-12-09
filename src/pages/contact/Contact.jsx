import { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
    const [contactData, setContactData] = useState({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
    });

    const[showSummary, setShowSummary] = useState(false);
    //const[showError, setShowError] = useState(false);

    const handleChange = (event) => {
        setContactData({
            ...contactData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        
        event.preventDefault();
		const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		const regexPhone = /^[0-9]{10,14}$/;

        if(contactData.name.trim().length > 3 && contactData.lastname.trim().length > 3 && regexEmail.test(contactData.email) && regexPhone.test(contactData.phone) && contactData.message.trim().length > 10){
            setShowSummary(true);
            return;
        }
    }

    return(
        <div className={styles.contact}>
            {!showSummary && (
                <>
                            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" id="lastname" name="lastname" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" name="phone" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" onChange={handleChange}/>
                </div>
                <button type="submit">Send</button>
            </form>
                </>
            )}
            {showSummary && (
                <div>
                    <h1>Summary</h1>
                    <p>Name: {contactData.name}</p>
                    <p>Lastname: {contactData.lastname}</p>
                    <p>Email: {contactData.email}</p>
                    <p>Phone: {contactData.phone}</p>
                    <p>Message: {contactData.message}</p>
                </div>
            )}
        </div>
    );
}

export default Contact;