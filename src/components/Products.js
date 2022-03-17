import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import firstProduct from "../assets/img/products-1.jpg";
import secondProduct from "../assets/img/products-2.jpg";

const StyledFavorites = styled.div`
  width: 100%;
  height: auto;
  padding: 25px;
  display: flex;
  justify-content: center;
  .products-container {
    width: 80%;
    margin: 30px 0 30px 0;
  }
  img {
    margin-top: 20px;
    width: 100%;
  }
  .text-card {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  ul li {
    padding: 0;
    margin: 0;
    font-size: 2rem;
  }
  .link {
    text-decoration: none;
    color: black;
  }
`;

const Favorites = () => {
  return (
    <StyledFavorites id="products">
      <div className="products-container font">
        <Row>
          <Col xl={4} lg={4} md={12} s={12} xs={12}>
            <div className="card-container">
              <img src={firstProduct} />
            </div>
          </Col>
          <Col xl={4} lg={4} md={12} s={12} xs={12}>
            <div className="card-container font text-card">
              <ul className="text-center list-unstyled">
                <li>
                  <Link className="link" to="/jewelry">JEWELRY</Link>
                </li>
                <li>
                  <Link className="link" to="/shoes">SHOES</Link>
                </li>
                <li>
                  <Link className="link" to="/handbags">HANDBAGS</Link>
                </li>
                <li>
                  <Link className="link" to="/sweaters">SWEATERS</Link>
                </li>
                <li>
                  <Link className="link" to="/eyewears">EYEWEAR</Link>
                </li>
                <li>
                  <Link className="link" to="/shirts">SHIRTS</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xl={4} lg={4} md={12} s={12} xs={12}>
            <div className="card-container ">
              <img src={secondProduct} />
            </div>
          </Col>
        </Row>
      </div>
    </StyledFavorites>
  );
};

export default Favorites;
