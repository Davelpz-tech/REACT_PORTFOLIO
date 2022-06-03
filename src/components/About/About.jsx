import "./About.css"
import cert from "../../img/certificate.jpg"
import { useState } from "react"
import AboutModal from "../Modals/AboutModal"

export const About = () => {

    const [openModal, setOpenModal] = useState(false)
    
  return (
    <div className="about">
        <div className="about-left">
            <div className="about-card bg"></div>
            <div className="about-card">
                <img src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                alt=""
                className="about-img" />
            </div>
        </div>
        <div className="about-right">
            <h1 className="about-title">A little bit about me...</h1>
            <p className="about-subtitle">
                I'm a Full Stack Web Developer
            </p>
            <p className="about-description">
                I've been working in the tech industry since 2019! I started my employment with a Web Hosting Company building websites mainly for small businesses and educational institutions. Unfortunately my company was sold and I lost the position I loved so much. But that didn't stop me from achieving my dreams...
            </p>
            <button className="about-btn" onClick={() => {setOpenModal(true)}}>Read More</button>
            {openModal && <AboutModal closeModal={setOpenModal}/>}
            <div className="about-cert">
                <img src={cert} alt="" className="about-cert-img" />
                <div className="about-cert-text">
                    <h4 className="about-cert-title">UoA Full Stack Web Dev Certification</h4>
                    <p className="about-cert-description">For the completion of a Full Stack curriculum program with the University of Arizona</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About