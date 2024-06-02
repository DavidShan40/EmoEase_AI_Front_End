import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    // 创建一个流体容器，包含关于我们部分的主要内容
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center"}}>
          {/* 左侧列，包含标题和AboutCard组件 */}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">About Us</strong>
            </h1>
            {/* 引入AboutCard组件 */}
            <AboutCard />
          </Col>
          {/* 右侧列，包含一个图片 */}
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
