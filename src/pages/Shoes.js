import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import data from "./../data/shoes.json";
import { motion } from "framer-motion";

const StyledShoes = styled.div`
  width: 100%;
  padding: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  .product-cards {
    width: 80%;
  }
  .product-cards .product-card {
    background-color: transparent;
    border: 0;
    padding: 15px;
    margin-top: 30px;
    position: relative;
  }
  .product-card img {
    width: 100%;
    height: 25vw;
    object-fit: cover;
  }
  .add-product button {
    border: 2px solid black;
    border-radius: 0;
    position: absolute;
    bottom: 2px;
  }
`;
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  }
};
const Shoes = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <StyledShoes className="bg">
        <div className="product-cards">
          <Row>
            {data.map((data) => (
              <Col xl={4} lg={4} md={6} s={12} xs={12}>
                <div className="product-card card h-100 font">
                  <img className="product-photo" src={data.photo} />
                  <div className="card-body">
                    <h2 className="bold">{data.name}</h2>
                    <h3 className="regular">{data.price}</h3>
                    <div className="add-product">
                      <button className="btn">Add to card</button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </StyledShoes>
    </motion.div>
  );
};

export default Shoes;
