import "./AboutModal.css"
import "../../index.css"

const AboutModal = ({ closeModal }) => {
  return (
    <div className="a-modal-bg">
        <div className="a-modal-container">
            <div className="titleCloseBtn">
              <button onClick={() => closeModal(false)}>X</button>
            </div>
            <div className="a-modal-title">
                <h1 className="title">My Story</h1>
                <div className="line"></div>
            </div>
            <div className="a-modal-body">
                <p>Coding is a passion of mine. I feel right at home when I'm sitting at my keyboard trying my best to solve a difficult issue. With perseverance and determination I almost always find the answer and I learn from every experience. This is what drives me to work in this field.
                  <br/><br/> 
                  I'm commited to helping people get their name out there or show off their passions with the whole world. I couldn't afford to buy a computer science degree but I did my own learning and eventually saved up enough for a Cohort with the University of Arizona. Here I honed all my skills and found an even deeper love for Fron End and Full Stack Development.
                  <br/><br/>
                  Now I hope you'll consider working with me and we can help eachother achieve our dreams!
                </p>
            </div>
            <div className="a-modal-footer">
              <button onClick={() => closeModal(false)}>Thank you for Reading!</button>
            </div>
        </div>
    </div>
  )
}

export default AboutModal