
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import games from "../data/games";
import { useParams } from "react-router-dom";
import { Suspense } from "react";
import { Spinner } from "react-bootstrap";








function PlayGame() {

  const { id } = useParams();

  const [game, setGame] = useState(null);

  useEffect(() => {
    const game = games.find(game => game.gameid === id);
    console.log(game);
    setGame(game);
  }, [id])

  return (
    <div className="pagebody" id="games" >
      <Container>
        <Row>
          <Col>
            <h2>{game?.title}</h2>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
          <Suspense fallback={<Spinner animation="border" />}>
          <iframe src={game?.embedUrl} title={game?.title} width="100%" height="800px" allowFullScreen></iframe>
          </Suspense>

          </Col>
        </Row>

        <Row>
          <Col>
            <h4>Information</h4>
            {game?.information}
          </Col>
        </Row>
      </Container>
    </div>
  )



}

export default PlayGame;