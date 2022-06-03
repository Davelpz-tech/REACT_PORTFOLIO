import "./About.css"
import cert from "../../img/certificate.jpg"

export const About = () => {
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
            <button className="about-btn">Read More</button>
            <div className="about-cert">
                <img src={cert} alt="" className="about-cert-img" />
                <div className="about-cert-text">
                    <h4 className="about-cert-title">UoA Full Stack Web Dev Certification</h4>
                    <p className="about-cert-description">For the completion of a Full Stack curriculum program with the University of Arizona</p>
                </div>
            </div>
        </div>
        <div className="a-modal">
            <div className="a-modal-wrapper hide">
                <div className="a-modal-text">
                    <h1 className="a-modal-title">My Story...</h1>
                    <p className="a-modal-para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorem doloremque exercitationem dolorum sit. Voluptatem molestiae facere assumenda optio, magnam libero architecto id voluptas, a rerum amet veritatis sit inventore.
                        Nostrum similique officiis facere voluptate quibusdam aliquam alias dicta aspernatur laudantium numquam rem amet quisquam id modi ipsam corrupti architecto beatae, aliquid minima autem praesentium enim quia distinctio magni! Aliquam!
                        Ipsum asperiores dolorum laudantium assumenda officia harum adipisci nisi doloribus minus rem? Repellat temporibus ducimus quam? Quod a sunt, ipsam maxime doloribus assumenda dolores distinctio dolore, atque libero perferendis quo!
                        Dicta fugit nobis hic qui eveniet tenetur provident. Deleniti totam similique repudiandae. Similique, molestias tempora! Accusamus ut facilis atque corrupti corporis facere ipsum eius vel, maiores est accusantium officia velit!
                    </p>
                </div>
                <button>close</button>
            </div>
        </div>
        <div className="screen-blur hide"></div>
    </div>
  )
}

export default About