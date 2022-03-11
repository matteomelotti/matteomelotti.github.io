import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
              <br></br>
              <br></br>
              {data.aboutParaFour}
              <br></br>
              <br></br>
              <div dangerouslySetInnerHTML={{ __html: data.aboutParaFive }}></div>
            </p>
          </div>
          <div className="image-wrapper">
            <img className="about-me-img" src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About