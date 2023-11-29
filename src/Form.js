import React from "react";
import ChatIcon from '@mui/icons-material/Chat';
import PhoneIcon from '@mui/icons-material/Phone';
import image from "./images/image.png"
import "./index.css"



const Form = () => {
    return (
        <>

            <div className="form">

            <div className="form-input">
                <div className="form-input-button">
                <button className="button1" ><ChatIcon/>VIA SUPPORT CHAT</button>
                <button className="button2"><PhoneIcon/>VIA CALL</button>
                </div>
                <button className="button3" ><ChatIcon/>VIA EMAIL FORM</button>
                <input type="text" placeholder="Name" className="first-input"></input>
                <input type="email" placeholder="Email" className="second-input"></input>
                <input type="text" placeholder="Text" className="third-input"></input>
                <button className="submit-btn">SUBMIT</button>
            </div>

            <div >
                <img src={image} alt="24/7" className="form-pic" />
            </div>

            </div>
        </>

    )
}

export default Form