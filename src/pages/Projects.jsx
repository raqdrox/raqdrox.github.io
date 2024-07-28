import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import projectsData from "../data/projects";
import { useState } from "react";

import ReactModal from "react-modal";
import ProjectModalContent from "../components/ProjectModalContent";


function Projects() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (index) => {
    setModalData(projectsData[index]);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  

  

  return (
    <div className="pagebody">
      <Container>


        <TrackVisibility once>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <Row>
                <Col>
                  <h2 className="projects-title">Projects</h2>
                  <p className="projects-description">Here are some of my projects</p>
                </Col>

              </Row><Row id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                {projectsData.map((project, index) => (
                  <Col key={index} md={6} lg={4}>
                    <TrackVisibility once>
                      {({ isVisible }) => isVisible && (
                        <ProjectCard
                          {...project}
                          onClick={() => openModal(index)}
                          />
                      )}
                    </TrackVisibility>
                  </Col>
                ))}
              </Row>
            </div>

          }</TrackVisibility>

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
      <ProjectModalContent data={modalData} />
      </ReactModal>
    </div>
  );
      
      

}

export default Projects;