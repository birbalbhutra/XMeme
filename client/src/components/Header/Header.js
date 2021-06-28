import React, { useState } from "react";
import Content from "../Content/Content";
import Contribute from "../Contribute/Contribute";
import EditMeme from "../EditMeme/EditMeme";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="header">
      <Router>
        <Navbar dark expand="md">
          <NavbarBrand className="title" href="/">
            Memer Paradise
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">
                  <NavLink>Home</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/memes">
                  <NavLink>Memes</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Contribute} />
          <Route path="/memes" component={Content} />
          <Route path="/update/:id" component={EditMeme} />
        </Switch>
      </Router>
    </div>
  );
};

export default Header;
