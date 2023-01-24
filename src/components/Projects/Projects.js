import "./Projects.css";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import testImg from "../../assets/img/header.avif";
import wizard from "../../assets/img/wizard-chess.jpg";
import parchapp from "../../assets/img/parchapp.jpg";
import twilio from "../../assets/img/twilio.jpg";

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
                    <img
                      className="d-block w-100"
                      src={wizard}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Wizard Chess VR</h3>
                      <p className="padding-sides">
                        As my Capstone Project, I developed a Virtual Reality multiplayer video game with voice commands using C#, Unity3D and PlasticSCM in a team of three. The project was showcased and tested at <a className="highlighted" href='https://www.enelsofa.com' target="_blank" rel="noreferrer">SOFA</a> 2022 Bogota fair. 
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={parchapp}
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3>Parchapp Mobile App</h3>
                      <p className="padding-sides">
                        I led the android design & development of a cross platform mobile application for Android and iOS within a team of six, which helps people organize meetings with their friend
                        group. Design was driven by the <a className="highlighted" href='https://www.interaction-design.org/literature/topics/design-thinking' target="_blank" rel="noreferrer">Design Thinking</a> methodology and development was driven using Flutter and Dart.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={twilio}
                      alt="Authy's Contextual Auth"
                    />

                    <Carousel.Caption>
                      <h3>Twilio - Contextual Auth</h3>
                      <p className="padding-sides">
                        Being a part of the Account Security team at <a className="highlighted" href='https://www.twilio.com/' target="_blank" rel="noreferrer">Twilio</a>, I developed a Go microservice that enhances the security model
                        of every <a className="highlighted" href='https://authy.com/' target="_blank" rel="noreferrer">Authy</a> customer by learning from the user's
                        context and providing a risk model for each 2FA event using <a className="highlighted" href='https://towardsdatascience.com/anomaly-detection-for-dummies-15f148e559c1' target="_blank" rel="noreferrer">anomaly detection</a>.
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
