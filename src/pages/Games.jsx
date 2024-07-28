
import React from "react";
import { Container, Row, Col, Tab, Nav,Button } from "react-bootstrap";
import placeholderimage from "../assets/img/placeholder-image.png";
import { ProjectCard } from "../components/ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import games from "../data/games";
import ReactModal from "react-modal";
import GameModalContent from "../components/GameModalContent";







function Games() {

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({});
  const openModal = (index) => {
    setModalData(games[index]);
    setModalIsOpen(true);
  }
  const closeModal = () => {
    setModalIsOpen(false);
  }


  
  return (
    <div className="pagebody" id="games">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Games</h2>
                  <p>Here are some of my games</p>
                  <Row id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {games.map((project, index) => {
                      return (
                        <Col key={index} md={6} lg={4}>
                          <TrackVisibility once>
                            <ProjectCard
                              key={index}
                              {...project}
                              onClick={() => openModal(index)}
                            />
                          </TrackVisibility>
                        </Col>
                      )
                    })
                    }
                  </Row>

                </div>}
            </TrackVisibility>
          </Col>
        </Row>




      </Container>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Modal"
        appElement={document.getElementById('root')}
        
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 9999,
            
          },
          content: {
            // blur the background
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(5, 5, 5, 0.95)',
            margin: 'auto',
            width: '80%',
            height: '80%',
            maxHeight: '800px',
            maxWidth: '800px',
            padding: '20px',
            borderRadius: '8px',
            border: 'none',
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.25)'
          },

        }}
      >
      <Button variant="none" onClick={closeModal} style={{float: 'right'}}>X</Button>
      <GameModalContent data={modalData} />
      </ReactModal>


    </div>
  );
}

export default Games;