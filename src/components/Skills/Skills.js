import "./Skills.css";
import { Col, Container, Row, Carousel } from "react-bootstrap";

export const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-stopper" id="skills"></div>
      <div className="container-container d-flex align-items-center">
        <Container className="skills-container ">
          <Row className="rowo-1  ">
            <Col className="colo-1">
              <h1>{`My main skills are: `}</h1>
            </Col>
          </Row>
          <Row className="rowo-2">
            <Carousel className="skills-carousel">
              <Carousel.Item>
                <Container className="container-skill">
                  <Row className="row-skill">
                    <Col className="col-skill left-skill d-flex align-items-center justify-content-center">
                      <div className="justify-content-center ">
                        <svg class="pie">
                          <circle cx="100" cy="100" r="80"></circle>
                          <path d="
                          M 100 100 
                          L 100 10 
                          A 80,80 1 0,1 178,55  z
                          z
                          "></path>
                        </svg>

                        <p className="skill-name">JavaScript</p>
                      </div>
                    </Col>
                    <Col className="col-skill center-skill d-flex align-items-center justify-content-center">
                      <div className="justify-content-center ">
                        <div className="circle d-flex align-items-center justify-content-center">
                          <div className="circle-overlay">
                            <p></p>
                          </div>
                        </div>

                        <p className="skill-name">Go</p>
                      </div>
                    </Col>
                    <Col className="col-skill right-skill d-flex align-items-center justify-content-center">
                      <div className="justify-content-center ">
                        <div className="circle d-flex align-items-center justify-content-center">
                          <div className="circle-overlay">
                            <p></p>
                          </div>
                        </div>

                        <p className="skill-name">Python</p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
              {/* <Carousel.Item>
                <div></div>
              </Carousel.Item>
              <Carousel.Item>
                <div></div>
              </Carousel.Item> */}
            </Carousel>
          </Row>
        </Container>
      </div>
    </section>
  );
};
