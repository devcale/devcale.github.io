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
                      <p>
                        Virtual Reality video game developed as capstone
                        project.
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
                      <p>
                        Cross platform mobile application for Android and iOS
                        that helps people organize meetings with their friend
                        group.
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
                      <h3>Authy's Contextual Auth</h3>
                      <p>
                        Developed a new feature that enhances the security model
                        of every Authy customer by learning from the user's
                        context and providing a risk model for each 2FA event
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
