import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import { MdOutlineNotifications } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { GiFalconMoon } from "react-icons/gi";

const Navigation = () => {

  const user=useSelector(state=>state.user.data)

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold">
        <GiFalconMoon />
          TaskMaster
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {user ? (
            <Nav className="ms-auto">
              <input type="text" placeholder="Search..." className="form-control"/>
              <span className="fs-4"><MdOutlineNotifications /></span>
              <NavLink to="/account" className='text-dark fs-4'><FaRegUserCircle/></NavLink>
            </Nav>
          ) : (
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link fw-bold">
                Home
              </NavLink>
              <NavLink to="/contact" className="nav-link fw-bold">
                Contact
              </NavLink>
              <NavLink to="/about" className="nav-link fw-bold">
                About
              </NavLink>
            </Nav>
          )}

          {user ? null : (
            <Nav>
              <NavLink to="/signup" className="nav-link fw-bold bg-success text-white rounded-2">
                Get Started
              </NavLink>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Navigation;
