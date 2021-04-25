import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Header.css";

const Header = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Nav.Item>
            <Nav.Link className="title" href="/home">
              MemerParadise
            </Nav.Link>
          </Nav.Item>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
