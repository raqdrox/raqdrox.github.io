import React from 'react';
import { Badge, Stack, Container, Row, Col,Button,Image } from "react-bootstrap";

import GithubLogo from "../assets/img/github-mark-white.svg";


const ProjectModalContent = ({ data }) => {

   

    const getStatusColor = (status) => {
        switch (status) {
            case "In Progress":
                return "warning";
            case "Completed":
                return "success";
            case "On Hold":
                return "danger";
            case "Canceled":
                return "dark";
            default:
                return "primary";
        }
    }
    
    const getTypeColor = (type) => {
        switch (type) {
            case "Utility":
                return "primary";
            case "Game":
                return "success";
            case "Others":
                return "secondary";
            default:
                return "secondary";
        }
    }



    return (
        <div>
            <Container>
                <Row>
                    <Col lg={6}>
                        <img src={data.imgUrl
                        } alt={data.title} />
                    </Col>
                    <Col lg={6}>
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                        <Stack direction="horizontal" gap={3}>
                            {data.technologies.map((tech, index) => (
                                <Badge key={index} bg="primary">{tech}</Badge>
                            ))}
                        </Stack>
                        <br />
                        <Stack direction="horizontal" gap={3}>
                            <Badge pill bg={getStatusColor(data.status)}>{data.status}</Badge>
                            <Badge pill bg={getTypeColor(data.projectType)}>{data.projectType}</Badge>
                        </Stack>
                        <br />
                        <Button href={ data.navUrl} target="_blank" variant="dark">View On Github 
                        <Image src={GithubLogo} alt="Github Logo" style={
                            {width: "20px", height: "20px", marginLeft: "10px"}
                        }/>
                        </Button>
                    </Col>
                </Row>
               <br/>          
                <Row>
                    <Col>
                        <p>{data.information}</p>
                    </Col>
                </Row>
                
            </Container>

        </div>
    );
};

export default ProjectModalContent;