import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";
//import delta and tick
function Home () {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(Math.random() * 10);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full Stack Developer     ", "Game Developer     ","Internet Of Things     " ];
  const period = 100;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
    } else {
      setIndex(prevIndex => prevIndex + 1);
      //wait
      setDelta(period);
    }

  }

  return (
    <div className="pagebody homepage" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome</span>
                <h1>{`Hi! I'm Karan Kaul`} <br/><span className="txt-rotate" dataPeriod="1000"><h2 className="wrap">{text}</h2></span></h1>
                <p></p>
                  <Link to="/contact"><button>Let’s Connect<ArrowRightCircle size={25} /></button></Link>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>

            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;