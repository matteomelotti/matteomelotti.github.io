import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaSchool } from 'react-icons/fa';
import { MdSchool, MdWork } from 'react-icons/md';
import * as classes from './Experience/Experience.module.css';

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <span className={classes.head}>MY JOURNEY</span>
          <div className={classes.box} id="education">
            <section className={classes.container}>
              <div className={classes.container_content}>
                <div className={classes.row}>
                  <div className={classes.row_md_12}>
                    <div className={classes.timeline_centered}>
                      <Fade bottom>
                        <article className={classes.timeline_entry}>
                          <div
                            className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}
                          >
                            <MdWork />
                          </div>
                          <div className={classes.label}>
                            <h2>
                              Experience{' '}
                              <span>December 2016 - Present</span>
                            </h2>
                            <p>
                              I am currently working as{' '}
                              <b>Full Stack Developer</b> at{' '}
                              <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.devinterface.com/"
                              >
                                <b>DevInterface</b>
                              </a>{' '}
                              where I develop and mantain web apps
                              with the following technologies:
                            </p>
                            <li>
                              Framework and solutions: Ruby on Rails
                              (RoR), Node.js, Express, Spree
                              e-commerce, ActiveAdmin, Redis,
                              Elasticsearch
                            </li>
                            <li>
                              Frontend: ReactJS, Vue.js, CSS3, Jquery,
                              Bootstrap, basics of Typescript
                            </li>
                            <li>
                              Database: MySQL, PostgreSQL, MongoDB
                            </li>
                            <li>Software versioning: GIT</li>
                          </div>
                        </article>
                      </Fade>
                      <Fade bottom>
                        <article className={classes.timeline_entry}>
                          <div
                            className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}
                          >
                            <MdWork />
                          </div>
                          <div className={classes.label}>
                            <h2>
                              Experience{' '}
                              <span>June 2016 - November 2016</span>
                            </h2>
                            <p>
                              I started my developer carreer at{' '}
                              <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.bluemilkdigital.it/en"
                              >
                                <b>BlueMilk</b>
                              </a>{' '}
                              where I first approached coding
                              challenges and where I:
                            </p>
                            <li>Developed management software</li>
                            <li>
                              Developed single-page applications for
                              iOS and Android smartphones and tablets.
                            </li>
                            <li>
                              Developed landing pages with responsive
                              design
                            </li>
                          </div>
                        </article>
                      </Fade>
                      <Fade bottom>
                        <article className={classes.timeline_entry}>
                          <div className={classes.timeline_icon}>
                            <MdSchool />
                          </div>
                          <div className={classes.label}>
                            <h2>
                              University <span>2015</span>
                            </h2>
                            <p>
                              I completed my bachelor degree in
                              Astronomy (Computer Science and
                              Engineering) from{' '}
                              <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.unipd.it/en/"
                              >
                                <b>University of Padua</b>
                              </a>
                              .
                            </p>
                            <p>
                              The core topics were Statistics,
                              Mathematics, Physics, Astrophysics,
                              Astronomy and Quantum Physics
                            </p>
                          </div>
                        </article>
                      </Fade>
                      <Fade bottom>
                        <article className={classes.timeline_entry}>
                          <div
                            className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}
                          >
                            <FaSchool />
                          </div>
                          <div className={classes.label}>
                            <h2>
                              High School <span>2006</span>
                            </h2>
                            <p>
                              I have completed my higher education in
                              Informatics from{' '}
                              <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.marconiverona.edu.it/"
                              >
                                <b>ITIS G.Marconi</b>
                              </a>{' '}
                              with major subjects as Programming
                              languages (Java, PHP), SQL and computer
                              network bases.
                            </p>
                          </div>
                          <div
                            className={classes.timeline_entry_inner}
                          >
                            <div
                              className={
                                classes.timeline_icon_3 ||
                                classes.color_none
                              }
                            ></div>
                          </div>
                        </article>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
