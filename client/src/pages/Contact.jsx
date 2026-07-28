import { useState } from "react";
import "./Contact.css";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();


        try {

            const response = await fetch(
                "http://localhost:5000/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );


            const data = await response.json();


            alert(data.message);


            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });


        } catch(error) {

            console.log(error);
            alert("Something went wrong");

        }

    };


    return (

        <div className="contact-container">

            <h1>Contact Us</h1>

            <p>
                Need help with government schemes or healthcare services?
                Send us your message.
            </p>


            <form 
                className="contact-form"
                onSubmit={handleSubmit}
            >


                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />


                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />


                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />


                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>


                <button type="submit">
                    Send Message
                </button>


            </form>


        </div>

    );

}


export default Contact;