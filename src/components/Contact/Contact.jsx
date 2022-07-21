import "./Contact.css"
import phoneIcon from "../../img/phone-call.png"
import emailIcon from "../../img/email.png"
import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm("service_7j3ie3w", "template_89bdzaj", formRef.current, "fc5WnmdQW9mqsYcP7")
        .then((result) => {
            console.log(result.text)
            setDone(true)
        }, (error) => {
            console.log(error.text)
        })
    }
  return (
    <div className="c" id="contact">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Free Project Consultation</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={phoneIcon} alt="" className="c-icon" /> 602-350-9341
                    </div>
                    <div className="c-info-item">
                        <img src={emailIcon} alt="" className="c-icon" /> davelpz15@gmail.com
                    </div>
                    <div className="map-container">
                        <h1 className="map-title">Based in Phoenix Arizona</h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212671.21697316025!2d-112.26513234281516!3d33.60562191697499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1bac!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1658375997444!5m2!1sen!2sus" className="gmap" title="myGoogleMap" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="tributes">
                        <a href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Freepik - Flaticon</a>
                        <a href="https://www.flaticon.com/free-icons/phone" title="phone icons">Phone icons created by Prosymbols - Flaticon</a>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-description">
                    <span className="c-description-title">Tell me about your Project</span> <br></br>Get in Touch by giving me a call or shooting me an email. Consultations are free and I'm eager to start working with you!
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name" required/>
                    <input type="text" placeholder="Subject" name="user_subject" required/>
                    <input type="text" placeholder="Email Address" name="user_email" required/>
                    <textarea rows="5" placeholder="Leave me a message here..." name="message" required></textarea>
                    <button>Send</button>
                    {done && " Message sent, I'll be in touch soon!"}
                </form> 
            </div>
        </div>
    </div>
  )
}

export default Contact