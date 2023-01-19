import styles from "./skills.module.css";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import { useRef, useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

export const Skills = () => {

  const { ref: circleOne, inView: rowOneVisible } = useInView();

  const { ref: circleTwo, inView: rowTwoVisible } = useInView();

  const { ref: circleThree, inView: rowThreeVisible } = useInView();

  const { ref: circleFour, inView: rowFourVisible } = useInView();
  

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
                            <p></p>
                          </div>
                        </div>

                        <p className={styles.skillName}>JavaScript</p>
                      </div>
                    </Col>
                    <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleOne} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.medium} ${rowOneVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                            <p></p>
                          </div>
                        </div>

                        <p className={styles.skillName}>Go</p>
                      </div>
                    </Col>
                    <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleOne} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.high} ${rowOneVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                            <p></p>
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
                        <div ref = {circleTwo} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.high} ${rowTwoVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                            <p></p>
                          </div>
                        </div>

                        <p className={styles.skillName}>ReactJS</p>
                      </div>
                    </Col>
                    <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleTwo} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.medLow} ${rowTwoVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                            <p></p>
                          </div>
                        </div>

                        <p className={styles.skillName}>Angular</p>
                      </div>
                    </Col>
                    <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleTwo} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.medium} ${rowTwoVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                            <p></p>
                          </div>
                        </div>

                        <p className={styles.skillName}>NestJS</p>
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
                        <div ref = {circleThree} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.medium} ${rowThreeVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                            <p></p>
                          </div>
                        </div>

                        <p className={styles.skillName}>Flutter</p>
                      </div>
                    </Col>
                    <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleThree} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.medLow} ${rowThreeVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                            <p></p>
                          </div>
                        </div>

                        <p className={styles.skillName}>Dart</p>
                      </div>
                    </Col>
                    <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                      <div ref = {circleThree} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.medLow} ${rowThreeVisible ? styles.animateCircle : ''} `}>
                          <div  className={styles.circleOverlay}>
                            <p></p>
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
                        <div ref = {circleFour} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.medLow} ${rowFourVisible ? styles.animateCircle : ''} `}>
                          <div  className={styles.circleOverlay}>
                            <p></p>
                          </div>
                        </div>

                        <p className={styles.skillName}>Cloud Management</p>
                      </div>
                    </Col>
                    <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleFour} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.high} ${rowFourVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                            <p></p>
                          </div>
                        </div>

                        <p className={styles.skillName}>Database Management</p>
                      </div>
                    </Col>
                    <Col className={`${styles.colSkill} d-flex align-items-center justify-content-center`}>
                      <div className="justify-content-center"> 
                        <div ref = {circleFour} className={`d-flex align-items-center justify-content-center ${styles.circle} ${styles.medium} ${rowFourVisible ? styles.animateCircle : ''}`}>
                          <div  className={styles.circleOverlay}>
                            <p></p>
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
