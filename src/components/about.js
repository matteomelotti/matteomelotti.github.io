import React from 'react';
import { Fade } from 'react-awesome-reveal';
import data from '../yourdata';

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container about-container">
        <Fade bottom cascade>
          <span className="head">ABOUT ME</span>
        </Fade>
        <div className="about-section">
          <div className="content">
            <h3 className="light">
              Hi, I'm Matteo Melotti, a Full Stack Developer from
              Verona&nbsp;
              <span role="img" aria-label="Emoji">
                🇮🇹
              </span>
              &nbsp; currently working at{' '}
              <a
                href="https://www.devinterface.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <b>DevInterface</b>
              </a>
              .
            </h3>
            <h3 className="light">
              I am much interested in technology and coding and I try
              to stay updated with the latest languages and libraries.
            </h3>
            <h3 className="light">
              When I'm not working, I enjoy trailing with my bike or
              work out at gym.
            </h3>
            <h3 className="light">
              You can find me on{' '}
              <a
                href="https://www.linkedin.com/in/matteo-melotti"
                rel="noopener noreferrer"
                target="_blank"
              >
                <b>Linkedin</b>
              </a>{' '}
              and{' '}
              <a
                href="https://github.com/matteomelotti"
                rel="noopener noreferrer"
                target="_blank"
              >
                <b>GitHub</b>
              </a>
              .
            </h3>
            {/* <p>
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
            </p> */}
          </div>
          <div className="image-wrapper">
            <img
              className="about-me-img"
              src={data.aboutImage}
              alt="about"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
