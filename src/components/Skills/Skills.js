import './Skills.css';
import { Col, Container, Row } from "react-bootstrap";

export const Skills = () => {
  return (
    <section className="skills" >
        <div className='skills-stopper' id="skills"></div>
        <Container className="skills-container d-flex align-items-center" >
        <Row className="d-flex align-items-center">
          <Col xs={12} s={10} md={7} xl={7} >
            <h1>
              {`My main skills are: `}
            </h1>
            <p >
              Entry level Software Engineer with a keen desire to grow. Strong
              knowledge in multiple front-end and back-end development
              frameworks, data structures, database management, algorithm design
              and analysis. Experience in developing software for cloud
              architecture with the best security practices. Ready to make an
              impact in the next team I join, and become the best in what I do.
            </p>
            
          </Col>
          <Col xs={0} s={2} md={5} xl={5} className="test-skill">
            <p> test </p>
            
          </Col>
          
        </Row>
      </Container>
    </section>
  )
}
