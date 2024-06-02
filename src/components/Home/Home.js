import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { useNavigate, Link } from "react-router-dom";
import homeLogo from "../../Assets/EmoEase_AI_Main_Page_Image.png";
import Home2 from "./Home2";

function Home() {
  // const navigate = useNavigate();

  const handleDemoClick = () => {
    // navigate("/demo");
    window.location.href = 'https://emoeaseai.streamlit.app';
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7}>
              <div className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Find Your Inner Peace with AI: Effortlessly Relieve Stress and Boost Your Mood Today
                </h1>
              </div>
              

              {/* <div style={{ height: '10rem', width: '16rem', textAlign: "left" }}> */}
              {/* <div>
                <Button className="demo-button" onClick={handleDemoClick}>
                  Try Our Demo
                </Button>
              </div> */}
              <div onClick={handleDemoClick}>
                <a
                    href="https://emoeaseai.streamlit.app"
                    target="_blank"
                    rel="noreferrer"
                    className="demo-button"
                >
                  Try Out Demo
                </a>
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
