import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="my-navbar">
        <Link to="/">
          <button className="navbar-logo"></button>
        </Link>

        <button className="navbar-main" onClick={() => setOpen(!open)}></button>
      </div>
      <Collapse in={open}>
      
        <div id="example-collapse-text">
          <Navbar className="collapsedNavbar">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Nav.Link className="my-navText" href="/work">
              Work
            </Nav.Link>
            <Nav.Link className="my-navText" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="my-navText" href="/contact">
              Contact
            </Nav.Link>
          </Navbar>
        </div>
        
      </Collapse>
      
    </>
  );
}

export default NavBar;
