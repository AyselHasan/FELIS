import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import { GiDandelionFlower } from "react-icons/gi";
import photo from "./../assets/img/1.jpg";

const StyledNews = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 90vh;
  }
  .news-container {
    height: 90vh;
  }
  .news {
    width: 70%;
    padding: 20px;
  }
  .icon {
    color: rgba(240, 174, 52, 0.7);
    font-size: 50px;
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

const News = () => {
  return (
    <StyledNews id="news" className="bg">
      <Row>
        <Col xl={6} lg={6} md={12} s={12} xs={12}>
          <img src={photo} />
        </Col>
        <Col xl={6} lg={6} md={12} s={12} xs={12}>
          <div className="news-container d-flex align-items-center justify-center font">
            <div className="news text-center">
              <GiDandelionFlower className="icon" />
              <h1 className="heading-large ">
                NEW WEEK, <br /> NEW ARRIVALS
              </h1>
              <button className="btn">SHOP NOW</button>
            </div>
          </div>
        </Col>
      </Row>
    </StyledNews>
  );
};

export default News;
