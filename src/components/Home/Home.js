import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom'; // 导入 useHistory
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              Find Your Inner Peace with AI: Effortlessly Relieve Stress and Boost Your Mood Today
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Button className="demo-button" >Try Our Demo</Button>
          
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
