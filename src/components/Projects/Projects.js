import "./Projects.css";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import testImg from "../../assets/img/header.avif";
import wizard from "../../assets/img/projects/wizardchess/wizard-chess.jpg";
import parchapp from "../../assets/img/projects/parchapp/parchapp.jpg";
import twilio from "../../assets/img/projects/contextualauth/twilio.jpg";
import { Link } from "react-router-dom";
import carcassonne from "../../assets/img/projects/carcassonne/carcassonne.png";

export const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-stopper" id="projects"></div>
      <div className="projects-container d-flex align-items-center justify-content-center">
        <div>
          <div className="carousel-container">
            <div className="color-overlay">
              <div className="carousel-inner-container ">
                <Carousel>
                  <Carousel.Item>
                    <Link to={`projects/wizard-chess`}>
                      <img
                        className="d-block w-100"
                        src={wizard}
                        alt="First slide"
                      />
                    </Link>
                    <Carousel.Caption>
                      <h3>Wizard Chess VR</h3>
                      <p className="padding-sides">
                        As my Capstone Project, I developed a Virtual Reality
                        multiplayer video game with voice commands using C#,
                        Unity3D and PlasticSCM in a team of three. The project
                        was showcased and tested at{" "}
                        <a
                          className="highlighted"
                          href="https://www.enelsofa.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          SOFA
                        </a>{" "}
                        2022 Bogota fair.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Link to={`projects/parchapp`}>
                      <img
                        className="d-block w-100"
                        src={parchapp}
                        alt="Second slide"
                      />
                    </Link>

                    <Carousel.Caption>
                      <h3>Parchapp Mobile App</h3>
                      <p className="padding-sides">
                        I led the android design & development of a cross
                        platform mobile application for Android and iOS within a
                        team of six, which helps people organize meetings with
                        their friend group. Design was driven by the{" "}
                        <a
                          className="highlighted"
                          href="https://www.interaction-design.org/literature/topics/design-thinking"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Design Thinking
                        </a>{" "}
                        methodology and development was driven using Flutter and
                        Dart.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Link to={`projects/contextual-auth`}>
                      <img
                        className="d-block w-100"
                        src={twilio}
                        alt="Authy's Contextual Auth"
                      />
                    </Link>
                    <Carousel.Caption>
                      <h3>Twilio - Contextual Auth</h3>
                      <p className="padding-sides">
                        Being a part of the Account Security team at{" "}
                        <a
                          className="highlighted"
                          href="https://www.twilio.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Twilio
                        </a>
                        , I developed a Go microservice that enhances the
                        security model of every{" "}
                        <a
                          className="highlighted"
                          href="https://authy.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Authy
                        </a>{" "}
                        customer by learning from the user's context and
                        providing a risk model for each 2FA event using{" "}
                        <a
                          className="highlighted"
                          href="https://towardsdatascience.com/anomaly-detection-for-dummies-15f148e559c1"
                          target="_blank"
                          rel="noreferrer"
                        >
                          anomaly detection
                        </a>
                        .
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                  <Link to={`projects/carcassonne`}>
                
                    <img
                      className="d-block w-100"
                      src={carcassonne}
                      alt="Authy's Contextual Auth"
                      />
                      </Link>

                    <Carousel.Caption>
                      <h3> Carcassonne Challenge </h3>
                      <p className="padding-sides">
                        As a part of my selection process for Adidas, I
                        developed a web implementation of the popular board game
                        Carcassonne, called{" "}
                        <a
                          className="highlighted"
                          href="https://devcale.github.io/Carcassonne-Challenge/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Carcassonne Challenge
                        </a>
                        . I developed the entire logic of the game in react and
                        wrote down documentation which you can read in the{" "}
                        <a
                          className="highlighted"
                          href="https://github.com/devcale/Carcassonne-Challenge"
                          target="_blank"
                          rel="noreferrer"
                        >
                          project's page
                        </a>
                        .
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
