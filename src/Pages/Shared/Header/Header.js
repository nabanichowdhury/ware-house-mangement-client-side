import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import useInventories from "../../../hooks/useInventories";

const Header = () => {
  const [inventories, setInventories] = useInventories();
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              width="100px"
              src="https://i.ibb.co/BVhn4jL/Header-Image.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              {user ? (
                <Nav.Link as={Link} to="/inventories">
                  Manage Item
                </Nav.Link>
              ) : (
                <Nav.Link href="#inventories"></Nav.Link>
              )}
              {user ? (
                <Nav.Link as={Link} to="/inventories/add">
                  Add Item
                </Nav.Link>
              ) : (
                <Nav.Link href="#choose-us">About</Nav.Link>
              )}

              {user ? (
                <Nav.Link as={Link} to="/myItem">
                  My Item
                </Nav.Link>
              ) : (
                ""
              )}
            </Nav>
            <Nav>
              {user ? (
                <button onClick={handleSignOut}>Sign Out</button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login here
                </Nav.Link>
              )}

              <Nav.Link as={Link} to="/register">
                Register Now
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
