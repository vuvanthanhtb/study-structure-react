import clsx from "clsx";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, NavLink, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutCurrentUser } from "modules/common/slice.common";
import { authRouteConfig } from "shared/routes";
import styles from "./_header.module.scss";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const { hasCurrentUser } = useSelector((state) => state.common);

  if (!hasCurrentUser) {
    window.location.href = authRouteConfig.login.path;
    return;
  }

  const handleLogout = () => {
    dispatch(logoutCurrentUser());
  };

  return (
    <Navbar
      bg="light"
      variant="light"
      expand="md"
      className={clsx(styles["header-container"], "shadow-sm")}
    >
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              as={NavLink}
              to="/"
              className="mx-2"
              activeClassName="text-primary"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className="mx-2"
              activeClassName="text-primary"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/services"
              className="mx-2"
              activeClassName="text-primary"
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
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
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>Thoát</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
