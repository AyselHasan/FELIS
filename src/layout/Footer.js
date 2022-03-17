import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Row, Col } from "reactstrap";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

const StyledFooter = styled.div`
  width: 100%;
  padding: 25px;
  display: flex;
  justify-content: center;
  .footer-container {
    width: 80%;
    margin: 0px 30px 0px 30px;
    padding: 20px;
  }
  .socials a {
    font-size: 25px;
  }
  .socials a:not(:first-child) {
    margin-left: 10px;
  }
  .foo-list ul li a {
    color: black;
    text-decoration: none;
  }
  .link {
    color: black;
    text-decoration: none;
  }
`;

const socials = [
  {id: 1, link: "https://www.instagram.com/", icon: <BsInstagram/>},
  {id: 2, link: "https://www.twitter.com/", icon: <BsTwitter/>},
  {id: 3, link: "https://www.facebook.com/", icon: <BsFacebook/>},
]

const lists = [
  {id: 1, path: "/#products" , title: "COLLECTIONS"},
  {id: 2, path: "/#about" , title: "ABOUT US"},
  {id: 3, path: "/#contact" , title: "CONTACT US"},
]

const Footer = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <StyledFooter className="bg">
      <div className="footer-container font">
        <Row>
          <Col xl={6} lg={6} md={6} s={12} xs={12}>
            <div className="logo">
              <h1 className="bold">
                <Link
                  className="link pointer"
                  to="/"
                  onClick={() => window.location.replace("/#news")}
                >
                  FELIS
                </Link>
              </h1>
              <p>@2022 WEBSITE BY</p>
            </div>
          </Col>
          <Col xl={6} lg={6} md={6} s={12} xs={12}>
            <div className="foo-list">
              <ul
                className={
                  isTabletOrMobile
                    ? "list-unstyled "
                    : "list-unstyled text-end "
                }
              >
                {lists.map(list => (
                  <li
                  className="pointer"
                  onClick={() => window.location.replace(list.path)}
                >
                  {list.title}
                </li>
                ))}
                <li className="socials">
                  {socials.map(social => (
                    <a target="blank" href={social.link}>
                    {social.icon}
                  </a>
                  ))}
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </StyledFooter>
  );
};

export default Footer;
