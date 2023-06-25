
import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import placeholderimage from "../assets/img/placeholder-image.png";
import { ProjectCard } from "../components/ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";





function Games() {
  const games = [
    {
      description: "Flappy Bird",
      imgUrl: placeholderimage,
      navUrl: "/games/flappybird"
    },
    {
      description: "Chain Reaction",
      imgUrl: placeholderimage,
      navUrl: "/games/flappybird"

    },
    {
      description: "Mario",
      imgUrl: placeholderimage,
      navUrl: "/games/flappybird"

    },
  ];


  return (
    <div className="pagebody" id="games">
      <Container>
      <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Games</h2>
                <p>Here are some of the games I have made</p>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>

                    </Nav.Item>

                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          games.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
        



      </Container>


    
    </div>
  );
}

export default Games;