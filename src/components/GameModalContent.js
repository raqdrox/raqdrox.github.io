import React from 'react';
import { Badge, Stack, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";



const GameModalContent = ({ data }) => {



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

                        <br />
                        <Badge pill bg={getStatusColor(data.status)}>{data.status}</Badge>
                        <br />
                        <br />
                        <Link to={"/games/play/"+data.gameid}> <Button variant="primary">Play Game</Button></Link>

                    </Col>
                </Row>
                <br />

                <Row>
                    <Col style={{ maxHeight: "300px", overflowY: "auto" }}>
                        <p>{data.information}</p>
                    </Col>

                </Row>
                {/* scrollable area */}
                <Row >
                <h4>Changelog</h4>
                    <Col style={{ maxHeight: "300px", overflowY: "auto" }}>
                        
                        {data.changelog.map((change, index) => (
                            <div key={index}>
                                <h5>Version {change.version} - {change.date}</h5>
                                <ul>
                                    {change.changes.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>

                            </div>
                        ))}
                    </Col>

                </Row>

            </Container>

        </div>
    );
};

export default GameModalContent;