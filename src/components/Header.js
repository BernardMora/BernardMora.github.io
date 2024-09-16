import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  const cvPath = require("../assets/files/Resume English.pdf");

  const handleDownload = (src, fileName) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="bg-body-tertiary"
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Button onClick={() => handleDownload(cvPath, 'Bernardo Morales Resume.pdf')} variant="outline-primary">Resume</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
