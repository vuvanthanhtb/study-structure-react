import React, { useState } from 'react';
import clsx from 'clsx';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from "./_header.module.scss";

const HeaderComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  const closeMenu = () => {
    setExpanded(false);
  };
  return (
    <Navbar
      bg="light"
      variant="light"
      expand="md"
      expanded={expanded}
      className={clsx(styles["header-container"], "shadow-sm")}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleMenu}
          className="border-0"
        >
          {expanded ? <FaTimes size={24} /> : <FaBars size={24} />}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              as={NavLink}
              to="/"
              onClick={closeMenu}
              className="mx-2"
              activeClassName="text-primary"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              onClick={closeMenu}
              className="mx-2"
              activeClassName="text-primary"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/services"
              onClick={closeMenu}
              className="mx-2"
              activeClassName="text-primary"
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              onClick={closeMenu}
              className="mx-2"
              activeClassName="text-primary"
            >
              Contact
            </Nav.Link>
            <NavDropdown
                title={`Hi, Thanh`}
                id="user-dropdown"
                className="mx-2"
              >
                <NavDropdown.Item as={Link} to="/profile" onClick={closeMenu}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => { closeMenu(); }}>
                  Thoát
                </NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
