import "./Hero.css"
import heroimg from "../../img/guyatcomputer.jpg"

const Hero = () => {
  return (
    <div className="hero-section">
        <div className="hero-left">
            <div className="hero-left-wrapper">
                <h2 className="hero-intro">Hello my name is</h2>
                <h2 className="hero-name">David Lopez</h2>
                <div className="hero-title">
                    <div className="hero-title-wrapper">
                        <div className="hero-title-item">Web Developer</div>
                        <div className="hero-title-item">MERN Stack</div>
                        <div className="hero-title-item">UI/UX Designer</div>
                        <div className="hero-title-item">Digital Artist</div>
                    </div>
                </div>
                <p className="hero-description">
                    I'm passionate about Web Development and making others' dreams come true. I would love to work with you on your next project! Check out my credibility and schedule an appointment to meet with me once I've convinced you with my awesome past works (:
                </p>
                <button className="cta-btn"><a href="#contact">Contact Me</a></button>
            </div>
        </div>
        <div className="hero-right">
            <div className="hero-bg"></div>
            <img src={heroimg} alt="" className="hero-img"/>
        </div>
    </div>
  )
}

export default Hero