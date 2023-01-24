import styles from "./skills.module.css";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import { useRef, useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import jsIcon from '../../assets/img/javascript.svg';
import goIcon from '../../assets/img/Go.svg';
import pyIcon from '../../assets/img/pythonIcon.svg';
import cIcon from '../../assets/img/csharp.svg';
import javaIcon from '../../assets/img/java.svg';
import dartIcon from '../../assets/img/dart.svg';

import reactIcon from '../../assets/img/react.svg';
import angularIcon from '../../assets/img/angular.svg';
import vueIcon from '../../assets/img/vue.svg';
import nestIcon from '../../assets/img/nestjs.svg';
import expressIcon from '../../assets/img/expressjs.svg';

import flutterIcon from '../../assets/img/flutter.svg';
import androidIcon from '../../assets/img/android.svg';
import agileIcon from '../../assets/img/agile.svg';

import cloudIcon from '../../assets/img/cloud.svg';
import databaseIcon from '../../assets/img/database.svg';
import testingIcon from '../../assets/img/testing.svg';


export const Skills = () => {

  const { ref: circleOne, inView: rowOneVisible } = useInView();

  const { ref: circleTwo, inView: rowTwoVisible } = useInView();

  const { ref: circleThree, inView: rowThreeVisible } = useInView();

  const { ref: circleFour, inView: rowFourVisible } = useInView();

  const { ref: circleFive, inView: rowFiveVisible } = useInView();

  const { ref: circleSix, inView: rowSixVisible } = useInView();
  

  return (
    <section className={styles.skills}>
      <div className={styles.skillsStopper} id="skills"></div>
      <div className={`${styles.containerContainer} d-flex align-items-center`}>
        <Container className={styles.skillsContainer}>
          <Row>
            <Col>
              <h1 className={styles.skillsTitle}>{`My main skills are: `}</h1>
            </Col>
          </Row>
          <Row>
            <Carousel slide={false}  className={styles.skillsCarousel}>
              <Carousel.Item>
                <Container className={styles.containerSkill}>
                  <Row className={styles.rowSkill}>
                  <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        
                        <div ref = {circleOne} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.high} ${rowOneVisible ? styles.animateCircle : ''} `}>
                          <div  className={styles.circleOverlay}>
                          <img className={`${styles.skillIcon} ${styles.largeIcon}`} src={jsIcon} alt='' />
                          </div>
                        </div>

                        <p className={styles.skillName}>JavaScript</p>
                      </div>
                    </Col>
                    <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleOne} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.medium} ${rowOneVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                          <img className={`${styles.skillIcon} ${styles.smallIcon}`} src={goIcon} alt='' />
                          </div>
                        </div>

                        <p className={styles.skillName}>Go</p>
                      </div>
                    </Col>
                    <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleOne} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.high} ${rowOneVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                          <img className={`${styles.skillIcon} ${styles.largeIcon}`} src={pyIcon} alt='' />
                          </div>
                        </div>

                        <p className={styles.skillName}>Python</p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
              <Carousel.Item>
                <Container className={styles.containerSkill}>
                  <Row className={styles.rowSkill}>
                  <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleTwo} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.high} ${rowTwoVisible ? styles.animateCircle : ''} `}>
                          <div  className={styles.circleOverlay}>
                          <img className={`${styles.skillIcon} ${styles.largeIcon}`} src={cIcon} alt='' />
                          </div>
                        </div>

                        <p className={styles.skillName}>C#</p>
                      </div>
                    </Col>
                    <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleTwo} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.medium} ${rowTwoVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                          <img className={`${styles.skillIcon} ${styles.largeIcon}`} src={javaIcon} alt='' />
                          </div>
                        </div>

                        <p className={styles.skillName}>Java</p>
                      </div>
                    </Col>
                    <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleTwo} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.high} ${rowTwoVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                          <img className={`${styles.skillIcon} ${styles.largeIcon}`} src={dartIcon} alt='' />
                          </div>
                        </div>

                        <p className={styles.skillName}>Dart</p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
              <Carousel.Item>
                <Container className={styles.containerSkill}>
                  <Row className={styles.rowSkill}>
                  <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleThree} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.high} ${rowThreeVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                          <img className={`${styles.skillIcon} ${styles.largeIcon}`} src={reactIcon} alt='' />
                          </div>
                        </div>

                        <p className={styles.skillName}>React</p>
                      </div>
                    </Col>
                    <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleThree} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.medLow} ${rowThreeVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                          <img className={`${styles.skillIcon} ${styles.largeIcon}`} src={angularIcon} alt='' />
                          </div>
                        </div>

                        <p className={styles.skillName}>Angular</p>
                      </div>
                    </Col>
                    <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleThree} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.medium} ${rowThreeVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                          <img className={`${styles.skillIcon} ${styles.largeIcon}`} src={vueIcon} alt='' />
                          </div>
                        </div>

                        <p className={styles.skillName}>Vue.JS</p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
              <Carousel.Item>
                <Container className={styles.containerSkill}>
                  <Row className={styles.rowSkill}>
                  <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleFour} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.high} ${rowFourVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                          <img className={`${styles.skillIcon} ${styles.largeIcon}`} src={nestIcon} alt='' />
                          </div>
                        </div>

                        <p className={styles.skillName}>NestJS</p>
                      </div>
                    </Col>
                    <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleFour} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.medLow} ${rowFourVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                          <img className={`${styles.skillIcon} ${styles.largeIcon}`} src={expressIcon} alt='' />
                          </div>
                        </div>

                        <p className={styles.skillName}>Express.js</p>
                      </div>
                    </Col>
                    <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleFour} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.medium} ${rowFourVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                          <img className={`${styles.skillIcon} ${styles.largeIcon}`} src={goIcon} alt='' />
                          </div>
                        </div>

                        <p className={styles.skillName}>Go-Chi</p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
              <Carousel.Item>
                <Container className={styles.containerSkill}>
                  <Row className={styles.rowSkill}>
                  <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleFive} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.medium} ${rowFiveVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                          <img className={`${styles.skillIcon} ${styles.largeIcon}`} src={flutterIcon} alt='' />
                          </div>
                        </div>

                        <p className={styles.skillName}>Flutter</p>
                      </div>
                    </Col>
                    <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleFive} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.medLow} ${rowFiveVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                          <img className={`${styles.skillIcon} ${styles.largeIcon}`} src={androidIcon} alt='' />
                          </div>
                        </div>

                        <p className={styles.skillName}>Android Development</p>
                      </div>
                    </Col>
                    <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                      <div ref = {circleFive} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.medLow} ${rowFiveVisible ? styles.animateCircle : ''} `}>
                          <div  className={styles.circleOverlay}>
                          <img className={`${styles.skillIcon} ${styles.largeIcon}`} src={agileIcon} alt='' />
                          </div>
                        </div>

                        <p className={styles.skillName}>Agile Methodologies</p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
              <Carousel.Item>
                <Container className={styles.containerSkill}>
                  <Row className={styles.rowSkill}>
                  <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleSix} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.medLow} ${rowSixVisible ? styles.animateCircle : ''} `}>
                          <div  className={styles.circleOverlay}>
                          <img className={`${styles.skillIcon} ${styles.largeIcon}`} src={cloudIcon} alt='' />
                          </div>
                        </div>

                        <p className={styles.skillName}>Cloud Management</p>
                      </div>
                    </Col>
                    <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleSix} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.high} ${rowSixVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                          <img className={`${styles.skillIcon} ${styles.largeIcon}`} src={databaseIcon} alt='' />
                          </div>
                        </div>

                        <p className={styles.skillName}>Database Management</p>
                      </div>
                    </Col>
                    <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleSix} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.medium} ${rowSixVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                          <img className={`${styles.skillIcon} ${styles.largeIcon}`} src={testingIcon} alt='' />
                          </div>
                        </div>

                        <p className={styles.skillName}>Automated Testing</p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </div>
    </section>
  );
};
