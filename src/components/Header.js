import React from 'react';
import { Fade } from 'react-awesome-reveal';

import data from '../yourdata';

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm {data.name}{' '}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : 'Building digital'}
              </h1>
              <h1>
                {' '}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : 'products, brands'}
              </h1>
              <h1>
                {' '}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : 'and experience'}
              </h1>
            </div>
          </Fade>
          <Fade cascade>
            <h2>{data.headerParagraph}</h2>
          </Fade>
          <Fade cascade>
            <a
              href={`mailto:${
                data.contactEmail
                  ? data.contactEmail
                  : 'matteo.melotti11@gmail.com'
              }`}
            >
              <p className="primary-btn">CONNECT WITH ME</p>
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Header;
