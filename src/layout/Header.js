import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";
import { useMediaQuery } from "react-responsive";

const StyledHeader = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(241, 234, 228, 255);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  z-index: 999;
  .resp-header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .header {
    width: 80%;
    margin: 10px auto;
  }
  ul {
    margin-top: 15px;
  }
  ul li {
    font-size: 13px;
  }
  ul li:not(:first-child) {
    margin-left: 20px;
  }
  span {
    border: 1px solid black;
    border-radius: 100%;
    padding: 0 6px 2px 6px;
    margin-left: 10px;
  }
  .link {
    color: black;
    text-decoration: none;
  }
`;

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <StyledHeader>
      <div
        className={
          isTabletOrMobile
            ? "header font d-flex justify-between align-items-center d-none"
            : "header font d-flex justify-between align-items-center"
        }
      >
        <div>
          <ul className="list-unstyled d-flex bold">
            <li
              className="pointer"
              onClick={() => window.location.replace("/#products")}
            >
              SHOP NOW
            </li>
            <li
              className="pointer"
              onClick={() => window.location.replace("/#about")}
            >
              ABOUT
            </li>
          </ul>
        </div>
        <div className="logo">
          <h1 className="bold">
            <div
              className="link pointer"
              to="/"
              onClick={() => window.location.replace("/#news")}
            >
              FELIS
            </div>
          </h1>
        </div>
        <div>
          <ul className="list-unstyled d-flex bold">
            <li
              className="pointer"
              onClick={() => window.location.replace("/#favorites")}
            >
              FAVORITES
            </li>
            <li className="link">
              CART <span>0</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          isTabletOrMobile
            ? "header font d-flex justify-between align-items-center"
            : "header font d-flex justify-between align-items-center d-none"
        }
      >
        <div className="header d-flex justify-between">
          <div className="logo">
            <h1 className="bold">
              <Link className="link" to="/">
                FELIS
              </Link>
            </h1>
          </div>
          <div className="menu">
            <button className="btn pointer">
              <VscMenu />
            </button>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
