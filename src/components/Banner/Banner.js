import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/header.avif";
import './Banner.css';

export const Banner = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period = 2000;
  const wordsToRotate = [
    "Software Engineer",
    "Web Developer",
    "Mobile Developer",
    "Security Specialist",
  ];

  useEffect(()=>{
    let ticker = setInterval(() => {
        tick();
    },delta)

    return () => {clearInterval(ticker)};

  }, [text])

  const tick = () => {
    let i = loopNum % wordsToRotate.length;
    let fullText = wordsToRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
    setText(updatedText);
    if ( isDeleting && delta > 50){
        setDelta(prevDelta => prevDelta/2);
    }

    if (!isDeleting && updatedText === fullText)
    {
        setIsDeleting(true);
        setDelta(period);
    } else if (isDeleting && updatedText === "")
    {
        setIsDeleting(false);
        setLoopNum(loopNum+1);
        setDelta(200 - Math.random() * 100);
    }
  }



  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} s={10} md={7} xl={7}>
            <span className="tagline">Welcome visitor!</span>
            <h1>
              {`I'm Nicolás, your next `}
              <br />
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Entry level Software Engineer with a keen desire to grow. Strong
              knowledge in multiple front-end and back-end development
              frameworks, data structures, database management, algorithm design
              and analysis. Experience in developing software for cloud
              architecture with the best security practices. Ready to make an
              impact in the next team I join, and become the best in what I do.
            </p>
            <button onClick={() => console.log("body connect")}>
              Let's connect! <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={0} s={2} md={5} xl={5} className="main-img-container">
            <img src={headerImg} alt="Header" />
            
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};
