import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import firstfav from "../assets/img/fav-1.jpg";
import secondfav from "../assets/img/fav-2.jpg";
import thirdfav from "../assets/img/fav-3.jpg";
import hoverfav3 from "../assets/img/fav-3-hover.jpg";
import hoverfav2 from "../assets/img/fav-2-hover.jpg";
import hoverfav1 from "../assets/img/fav-1-hover.jpg";

const cards = [
  {
    id: 1,
    photo: firstfav,
    hoverPhoto: hoverfav1,
    name: "yellow rompers",
    price: "590$",
    change: true,
  },
  {
    id: 2,
    photo: secondfav,
    hoverPhoto: hoverfav2,
    name: "black satin blouse",
    price: "350$",
    change: true,
  },
  {
    id: 3,
    photo: thirdfav,
    hoverPhoto: hoverfav3,
    name: "red handbag and shoes",
    price: "1290$",
    change: true,
  },
];

const StyledFavorites = styled.div`
  width: 100%;
  height: auto;
  padding: 25px;
  display: flex;
  justify-content: center;

  .favs-container {
    width: 80%;
    margin: 30px 0 30px 0;
  }
  img {
    margin-top: 20px;
    width: 100%;
  }
  .desc {
    padding: 10px 0 10px 0;
  }
  p {
    padding: 0;
    margin: 0;
  }
  .card-container {
    margin-top: 30px;
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

const Favorites = () => {
  const [img, setImg] = useState(false);

  const change = () => {
    setImg(!img);
  };

  return (
    <StyledFavorites id="favorites" className="bg">
      <div className="favs-container font">
        <div className="favs-heading">
          <Row>
            <Col xl={6} lg={6} md={6} s={12} xs={12}>
              <h1 className="font">OUR FAVORITES</h1>
            </Col>
            <Col xl={6} lg={6} md={6} s={12} xs={12}>
              <div className="d-flex justify-end">
                <button className="btn">SHOP NOW</button>
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          {cards.map((card, i) => (
            <Col xl={4} lg={4} md={6} s={12} xs={12} key={i}>
              <div
                onMouseEnter={change}
                onMouseLeave={change}
                className="card-container pointer"
              >
                <img src={img ? `${card.photo}` : `${card.hoverPhoto}`} />
                <div className="desc">
                  <p>{card.name}</p>
                  <p>{card.price}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </StyledFavorites>
  );
};

export default Favorites;
