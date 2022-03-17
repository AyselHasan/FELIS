import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import photo from "../assets/img/about.jpg"

const StyledContact = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 25px;
  margin: 20px 0 20px 0;
  .about-container {
    width: 80%;
    padding: 20px;
  }
  .about-desc p {
    margin: 0;
    padding: 25px 25px 25px 0px;
  }
  img{
    max-width: 100%;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  }
  button {
    border-bottom: 3px solid black;
    border-radius: 0px;
    margin-top: 20px;
    font-size: 13px;
  }
  button:hover {
    background-color: #f8f8f8;
    transition: 0.7s;
  }
  button:focus {
    border: 3px solid black;
    outline: 0;
  }
`;

const About = () => {
  return (
    <StyledContact id="about" className="bg">
      <div className="about-container">
        <Row>
          <Col xl={6} lg={6} md={12} s={12} xs={12}>
            <div className="font heading">
              <h1>ABOUT US</h1>
            </div>
            <div className="about-desc font">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <button className="btn">READ MORE</button>
          </Col>
          <Col xl={6} lg={6} md={12} s={12} xs={12}>
            <img className="mt-3" src={photo} />
          </Col>
        </Row>
      </div>
    </StyledContact>
  );
};

export default About;
