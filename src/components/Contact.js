import React from "react";
import styled from "styled-components";
import { GiDandelionFlower } from "react-icons/gi";
import { HiArrowNarrowRight } from "react-icons/hi";

const StyledContact = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: center;
  .contact-container {
    width: 60%;
    padding: 10px;
  }
  .icon {
    color: rgba(240, 174, 52, 0.7);
    font-size: 50px;
    margin-bottom: 20px;
  }
  .input-container {
    width: 50%;
    margin: 35px auto;
  }
  .input-container input {
    background-color: transparent;
    border: 0;
    outline: 0;
    width: 100%;
    padding: 15px;
    border-bottom: 2px solid black;
  }
  button {
    border-bottom: 2px solid black;
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

const Contact = () => {
  return (
    <StyledContact>
      <div className="contact-container font text-center">
        <GiDandelionFlower className="icon" />
        <h1>SIGN UP FOR OUR NEWSLETTER</h1>
        <div className="input-container font">
          <input placeholder="YOUR EMAIL ADRESS" />
          <button type="submit" className="btn d-flex">
            SUBSCRIBE
            <HiArrowNarrowRight className="mt-1" />
          </button>
        </div>
      </div>
    </StyledContact>
  );
};

export default Contact;
