import React from "react";
import Nav from "./Nav";
import Form from "./Form";

const ContactUs = () => {
    return (
    <>
    <Nav/>
    <div className="contact-container" >
    <h1>Contact Us</h1>
        <p>Let's connect we are here to help, and we'd love to hear from you! whether you have a 
         comment or question.<br/> You can reach out to us through the contact form of this page.</p>
    </div>

        <Form/>

    </>
        )
}

export default ContactUs